﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Integrado.Server;
using Integrado.Server.Context;

namespace Integrado.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MonedasController : ControllerBase
    {
        private readonly BDContext _context;

        public MonedasController(BDContext context)
        {
            _context = context;
        }

        // GET: api/Monedas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Moneda>>> GetMonedasBt()
        {
            return await _context.MonedasBt.ToListAsync();
        }

        // GET: api/Monedas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Moneda>> GetMoneda(int id)
        {
            var moneda = await _context.MonedasBt.FindAsync(id);

            if (moneda == null)
            {
                return NotFound();
            }

            return moneda;
        }

        // PUT: api/Monedas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMoneda(int id, Moneda moneda)
        {
            if (id != moneda.Codigo)
            {
                return BadRequest();
            }

            _context.Entry(moneda).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MonedaExists(id))
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

        // POST: api/Monedas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Moneda>> PostMoneda(Moneda moneda)
        {
            _context.MonedasBt.Add(moneda);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMoneda", new { id = moneda.Codigo }, moneda);
        }

        // DELETE: api/Monedas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMoneda(int id)
        {
            var moneda = await _context.MonedasBt.FindAsync(id);
            if (moneda == null)
            {
                return NotFound();
            }

            _context.MonedasBt.Remove(moneda);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MonedaExists(int id)
        {
            return _context.MonedasBt.Any(e => e.Codigo == id);
        }
    }
}
