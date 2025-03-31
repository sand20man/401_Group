using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _401_Project.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _401_Project.Controllers
{
    [ApiController]
[Route("api/[controller]")]
public class EventsController : ControllerBase
{
    private readonly FindAndSeekDbContext _context;
    public EventsController(FindAndSeekDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<object>>> GetEvents()
    {
        var events = await _context.Events
            .Include(e => e.User)
            // Sort from soonest to farthest by Year, Month, Day, Hour, Minute
            .OrderBy(e => e.EventYear)
            .ThenBy(e => e.EventMonth)
            .ThenBy(e => e.EventDay)
            .ThenBy(e => e.EventHour)
            .ThenBy(e => e.EventMinute)
            .Select(e => new
            {
                e.EventId,
                e.UserId,
                // Build the postedByName string
                PostedByName = e.User.FirstName + " " + e.User.LastName,
                e.Title,
                e.Description,
                e.Location,
                e.EventYear,
                e.EventMonth,
                e.EventDay,
                e.EventHour,
                e.EventMinute,
                e.EventCreatedDate
            })
            .ToListAsync();

        return Ok(events);
    }

        // GET: api/Events/5
        [HttpGet("{id}")]
        public async Task<ActionResult<object>> GetEvent(int id)
        {
            var ev = await _context.Events
                .Include(e => e.User)
                .Where(e => e.EventId == id)
                .Select(e => new
                {
                    e.EventId,
                    e.UserId,
                    PostedByName = e.User.FirstName + " " + e.User.LastName,
                    e.Title,
                    e.Description,
                    e.Location,
                    e.EventYear,
                    e.EventMonth,
                    e.EventDay,
                    e.EventHour,
                    e.EventMinute,
                    e.EventCreatedDate
                })
                .FirstOrDefaultAsync();

            if (ev == null)
            {
                return NotFound();
            }

            return Ok(ev);
        }

        // POST: api/Events
        [HttpPost]
        public async Task<ActionResult<Event>> CreateEvent(Event newEvent)
        {
            try
            {
                _context.Events.Add(newEvent);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetEvent), new { id = newEvent.EventId }, newEvent);
            }
            catch (Exception ex)
            {
                // Return the exception message for debugging purposes
                return BadRequest(new { message = ex.Message });
            }
        }

        // PUT: api/Events/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEvent(int id, Event updatedEvent)
        {
            if (id != updatedEvent.EventId)
            {
                return BadRequest();
            }

            _context.Entry(updatedEvent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Events.Any(e => e.EventId == id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        // DELETE: api/Events/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var ev = await _context.Events.FindAsync(id);
            if (ev == null)
            {
                return NotFound();
            }

            _context.Events.Remove(ev);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
