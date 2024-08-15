using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Integrado.Server.Context;
using Integrado.Server.Context.Entities;
using System.Web.Http.Cors;
using Integrado.Server.Dto;
using AutoMapper;

namespace Integrado.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors(origins:"*", headers:"*", methods:"*")]
    public class SucursalsController : ControllerBase
    {
        private readonly BDContext _context;
        private readonly IMapper _mapper;

        public SucursalsController(BDContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        //GET: api/Sucursals
       //[HttpGet]
       // public async Task<ActionResult<IEnumerable<Sucursal>>> GetSucursalsBt()
       // {
       //     var lista = await _context.SucursalsBt.ToListAsync();
       //     return lista;
       // }
        [HttpGet]
        public ActionResult<IEnumerable<Sucursal>> GetSucursalsBt()
        {
            var lista = _context.SucursalsBt.ToList();
            return lista;
        }

        // GET: api/Sucursals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sucursal>> GetSucursal(int id)
        {
            var sucursal = await _context.SucursalsBt.FindAsync(id);

            if (sucursal == null)
            {
                return NotFound();
            }

            return sucursal;
        }

        // PUT: api/Sucursals/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSucursal(int id, SucursalDto cucursalDto)
        {

            var sucursal = _mapper.Map<Sucursal>(cucursalDto);
            if (id != sucursal.codigo)
            {
                return BadRequest();
            }

            _context.Entry(sucursal).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SucursalExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Sucursals
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Sucursal>> PostSucursal(SucursalDto sucursalDto)
        {
            var sucursal = _mapper.Map<Sucursal>(sucursalDto);

            _context.SucursalsBt.Add(sucursal);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSucursal", new { id = sucursal.codigo }, sucursal);
        }

        // DELETE: api/Sucursals/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSucursal(int id)
        {
            var sucursal = await _context.SucursalsBt.FindAsync(id);
            if (sucursal == null)
            {
                return NotFound();
            }

            _context.SucursalsBt.Remove(sucursal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SucursalExists(int id)
        {
            return _context.SucursalsBt.Any(e => e.codigo == id);
        }
    }
}
