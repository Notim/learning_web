using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace Learning {
    //jeito como fazia no dot netCore 1.0
    class Program {
        static void Main(string[] args) {
            IWebHost host = new WebHostBuilder()
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();
            
            host.Run();
        }
    }

    class Startup {
        public void Configure(IApplicationBuilder app) {
            app.Use(async (context, next) => {
                await context.Response.WriteAsync("<h1>Working at ASP .NET core on Linux!!!</h1>");
            });
        }   
    }
}
