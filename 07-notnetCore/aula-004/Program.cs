using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Web.System {

    public class Program {
        public static void Main(string[] args) {
            CreateWebHostBuilder(args)
                .Build()
                .Run();
        }

        private static IWebHostBuilder CreateWebHostBuilder(string[] args) {
            return WebHost.CreateDefaultBuilder(args)
                          .UseUrls("https://localhost:8501", "http://localhost:8500")
                          .UseKestrel()
                          .UseWebRoot("Assets")
                          .UseStartup<Startup>();
        }
    }

}