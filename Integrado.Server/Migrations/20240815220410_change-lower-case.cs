using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Integrado.Server.Migrations
{
    /// <inheritdoc />
    public partial class changelowercase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SucursalsBt_MonedasBt_MonedaId",
                table: "SucursalsBt");

            migrationBuilder.RenameColumn(
                name: "MonedaId",
                table: "SucursalsBt",
                newName: "monedaId");

            migrationBuilder.RenameColumn(
                name: "Identificacion",
                table: "SucursalsBt",
                newName: "identificacion");

            migrationBuilder.RenameColumn(
                name: "FechaCreacion",
                table: "SucursalsBt",
                newName: "fechaCreacion");

            migrationBuilder.RenameColumn(
                name: "Direccion",
                table: "SucursalsBt",
                newName: "direccion");

            migrationBuilder.RenameColumn(
                name: "Descripcion",
                table: "SucursalsBt",
                newName: "descripcion");

            migrationBuilder.RenameColumn(
                name: "Codigo",
                table: "SucursalsBt",
                newName: "codigo");

            migrationBuilder.RenameIndex(
                name: "IX_SucursalsBt_MonedaId",
                table: "SucursalsBt",
                newName: "IX_SucursalsBt_monedaId");

            migrationBuilder.RenameColumn(
                name: "Descripcion",
                table: "MonedasBt",
                newName: "descripcion");

            migrationBuilder.RenameColumn(
                name: "Codigo",
                table: "MonedasBt",
                newName: "codigo");

            migrationBuilder.AddForeignKey(
                name: "FK_SucursalsBt_MonedasBt_monedaId",
                table: "SucursalsBt",
                column: "monedaId",
                principalTable: "MonedasBt",
                principalColumn: "codigo",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SucursalsBt_MonedasBt_monedaId",
                table: "SucursalsBt");

            migrationBuilder.RenameColumn(
                name: "monedaId",
                table: "SucursalsBt",
                newName: "MonedaId");

            migrationBuilder.RenameColumn(
                name: "identificacion",
                table: "SucursalsBt",
                newName: "Identificacion");

            migrationBuilder.RenameColumn(
                name: "fechaCreacion",
                table: "SucursalsBt",
                newName: "FechaCreacion");

            migrationBuilder.RenameColumn(
                name: "direccion",
                table: "SucursalsBt",
                newName: "Direccion");

            migrationBuilder.RenameColumn(
                name: "descripcion",
                table: "SucursalsBt",
                newName: "Descripcion");

            migrationBuilder.RenameColumn(
                name: "codigo",
                table: "SucursalsBt",
                newName: "Codigo");

            migrationBuilder.RenameIndex(
                name: "IX_SucursalsBt_monedaId",
                table: "SucursalsBt",
                newName: "IX_SucursalsBt_MonedaId");

            migrationBuilder.RenameColumn(
                name: "descripcion",
                table: "MonedasBt",
                newName: "Descripcion");

            migrationBuilder.RenameColumn(
                name: "codigo",
                table: "MonedasBt",
                newName: "Codigo");

            migrationBuilder.AddForeignKey(
                name: "FK_SucursalsBt_MonedasBt_MonedaId",
                table: "SucursalsBt",
                column: "MonedaId",
                principalTable: "MonedasBt",
                principalColumn: "Codigo",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
