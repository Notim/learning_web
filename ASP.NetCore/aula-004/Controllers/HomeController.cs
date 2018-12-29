using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

using aula_004.Inject_example;

using Microsoft.AspNetCore.Mvc;

using aula_004.Models;

namespace aula_004.Controllers {

    public class ViewModel {
        public string Title { get; set; }
    }

    public class HomeController : Controller {
        private IConnectionRepository _IConnectionRepository;
        private IConnectionRepository ConnectionRepository => _IConnectionRepository = new ConnectionRepository("Adamastor");

        public HomeController(IConnectionRepository Connection) => _IConnectionRepository = Connection;

        public IActionResult Index() {
            var ViewModel = new ViewModel();
            ViewModel.Title = _IConnectionRepository.nameOf;

            return View(ViewModel);
        }

        public IActionResult Privacy() { return View(); }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View(
                new ErrorViewModel {
                    RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
                }
            );
        }
    }

}