using Microsoft.AspNetCore.Mvc;
using TempleManagmentWebApi.Interfaces;

namespace TempleManagmentWebApi.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class TempleManagmentController : Controller
    {
        private readonly  ITempleManagment _templeManagment;
        public TempleManagmentController(ITempleManagment templeManagment) {
        
        _templeManagment = templeManagment;
        }
       

        [HttpGet]
        public Task<List<TempleManagmemt>> getTempleData()
        {
            return _templeManagment.GetTempleData();
        }
    }
}
