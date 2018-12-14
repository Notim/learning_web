using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace StartApp {
    static class Program {
        static void Main(string[] args) {
            Console.WriteLine("App Running !");
            var host = WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseKestrel()
                .UseUrls("http://localhost:8500")
                .Build();
            
            host.Run();
        }
    }
    internal class Startup {

        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration) {
            _configuration = configuration;
        }
        
        public void Configure(IApplicationBuilder app) {

            app.Use(async (Context, Next) => {
                await Next.Invoke();
                await Context.Response.WriteAsync("<strong>DataBase server</strong>:" + _configuration["data_base_password"].ToString() );
            });
            
            app.Use(async (Context, Next) => {
                await Next.Invoke();
                await Context.Response.WriteAsync("<strong>DataBase server</strong>:" + _configuration["data_base_server"].ToString());
            });

        }
    }
}
