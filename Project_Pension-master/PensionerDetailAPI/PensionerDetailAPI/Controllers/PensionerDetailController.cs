
using log4net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PensionerDetailAPI.Filters;
using PensionerDetailAPI.Model;
using PensionerDetailAPI.Provider;
using System;

namespace PensionerDetailAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [PensionerDetailAuthorization]
    public class PensionerDetailController : ControllerBase
    {
        readonly ILog _log;
        readonly IRequestProvider _provider;
        public PensionerDetailController(IRequestProvider provider)
        {
            _log = LogManager.GetLogger(typeof(PensionerDetailController));
            _provider = provider;
        }

        [HttpGet("getPensionerDetails")]
        public IActionResult Get(string aadharnumber)
        {
            _log.Info("Http Get Process Request");
            PensionerDetail detail = new PensionerDetail();

            try
            {
                detail = _provider.PensionerDetailByAadhaar(aadharnumber);
                if(detail == null)
                {
                    return BadRequest();
                }
                else
                {
                    return Ok(detail);
                }
            }
            catch (Exception)
            {

                return BadRequest();
            }
            finally
            {

            }
        }

    }
}
