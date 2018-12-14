using aula_004.Inject_example;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Web.System {

    public class Startup {
        private IConfiguration Configuration { get; set; }

        public Startup(IConfiguration configuration) { this.Configuration = configuration; }

        public void ConfigureServices(IServiceCollection services) {
            services.Configure<CookiePolicyOptions>(
                options => {
                    options.CheckConsentNeeded    = context => true;
                    options.MinimumSameSitePolicy = SameSiteMode.None;
                }
            );

            services.AddMvc()
                    .SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // Containners de injeção de dependência Nativo do dotnetcore
            services.AddTransient<IConnectionRepository>(Connection => new ConnectionRepository("Injetado com sucesso caralho"));
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseHsts();
            } else {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection(); // middleware
            app.UseStaticFiles();      // middleware de arquivos estáticos
            app.UseCookiePolicy();     // middleware de leitura e escrita de cookies

            app.UseMvc(rota => { rota.MapRoute(name: "default", template: "{controller=Home}/{action=Index}/{id?}"); });
        }
    }

}