using Microsoft.EntityFrameworkCore;

namespace Integrado.Server.Context
{
    public class BDContext : DbContext
    {
        public BDContext(DbContextOptions<BDContext> DB): base(DB) { }
        public DbSet<Sucursal> SucursalsBt { get; set; }
        public DbSet<Moneda> MonedasBt { get; set; }
    }
}
