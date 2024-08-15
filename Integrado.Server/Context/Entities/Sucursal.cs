using System.ComponentModel.DataAnnotations;

namespace Integrado.Server.Context.Entities
{
    public class Sucursal
    {
        [Key]
        public int codigo { get; set; }
        public string descripcion { get; set; }
        public string direccion { get; set; }
        public string identificacion { get; set; }
        public DateTime fechaCreacion { get; set; }
        public int monedaId { get; set; }
        public Moneda moneda { get; set; }
    }
}
