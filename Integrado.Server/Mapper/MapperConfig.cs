using AutoMapper;
using Integrado.Server.Context.Entities;
using Integrado.Server.Dto;

namespace Integrado.Server.Mapper
{
    public class MapperConfig: Profile
    {
        public MapperConfig()
        {
            CreateMap<MonedaDto, Moneda>();
            CreateMap<SucursalDto, Sucursal>();
        }
    }
}
