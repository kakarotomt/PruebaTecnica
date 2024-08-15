using Integrado.Server.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<BDContext>(
    opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("PruebasBT")));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddCors(opt => 
                            {
                                opt.AddPolicy(name: "angular", build =>
                                {
                                    build.AllowAnyOrigin();//"https://localhost:4200");
                                    build.AllowAnyMethod();//"PUT", "POST", "GET", "DELETE");
                                    build.AllowAnyHeader();
                                }
                                            );
                            }
                        );

var app = builder.Build();
app.UseCors("angular");
app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
