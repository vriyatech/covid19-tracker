// Decompiled with JetBrains decompiler
// Type: flu.api.Startup
// Assembly: flu.api, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: DC9A162A-E391-4F33-B927-F28A7FD383BA
// Assembly location: C:\covid_vriya\api_flu\flu.api.dll

using flu.api.Controllers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Mvc.Versioning;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using System;
using System.Text;

namespace flu.api
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      this.Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      MvcServiceCollectionExtensions.AddControllersWithViews(services);
      OptionsServiceCollectionExtensions.AddOptions(services);
      CorsServiceCollectionExtensions.AddCors(services);
      RoutingServiceCollectionExtensions.AddRouting(services, (Action<RouteOptions>) (options => options.set_LowercaseUrls(true)));
      services.AddScoped<IUrlHelper>((Func<IServiceProvider, IUrlHelper>) (x =>
      {
        ActionContext actionContext = x.GetRequiredService<IActionContextAccessor>().get_ActionContext();
        return x.GetRequiredService<IUrlHelperFactory>().GetUrlHelper(actionContext);
      }));
      MvcCoreMvcBuilderExtensions.SetCompatibilityVersion(MvcServiceCollectionExtensions.AddControllers(services).AddNewtonsoftJson((Action<MvcNewtonsoftJsonOptions>) (options => options.SerializerSettings.ContractResolver = (IContractResolver) new CamelCasePropertyNamesContractResolver())), (CompatibilityVersion) 3);
      services.AddApiVersioning((Action<ApiVersioningOptions>) (config =>
      {
        config.ReportApiVersions = true;
        config.AssumeDefaultVersionWhenUnspecified = true;
        config.DefaultApiVersion = new ApiVersion(1, 0);
        config.ApiVersionReader = (IApiVersionReader) new HeaderApiVersionReader(new string[1]
        {
          "api-version"
        });
      }));
      services.AddVersionedApiExplorer((Action<ApiExplorerOptions>) (options =>
      {
        options.GroupNameFormat = "'v'VVV";
        options.SubstituteApiVersionInUrl = true;
      }));
      IConfigurationSection section = this.Configuration.GetSection("ConnectionStrings");
      OptionsConfigurationServiceCollectionExtensions.Configure<ConnectionStrings>(services, (IConfiguration) section);
      Encoding.ASCII.GetBytes(((ConnectionStrings) ConfigurationBinder.Get<ConnectionStrings>((IConfiguration) section)).DefaultConnection);
    }

    public void Configure(
      IApplicationBuilder app,
      ILoggerFactory loggerFactory,
      IWebHostEnvironment env,
      IApiVersionDescriptionProvider provider)
    {
      if (HostEnvironmentEnvExtensions.IsDevelopment((IHostEnvironment) env))
      {
        DeveloperExceptionPageExtensions.UseDeveloperExceptionPage(app);
      }
      else
      {
        StatusCodePagesExtensions.UseStatusCodePagesWithRedirects(app, "/Error/{0}");
        HstsBuilderExtensions.UseHsts(app);
      }
      HttpsPolicyBuilderExtensions.UseHttpsRedirection(app);
      StaticFileExtensions.UseStaticFiles(app);
      CorsMiddlewareExtensions.UseCors(app, (Action<CorsPolicyBuilder>) (x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));
      EndpointRoutingApplicationBuilderExtensions.UseRouting(app);
      AuthAppBuilderExtensions.UseAuthentication(app);
      AuthorizationAppBuilderExtensions.UseAuthorization(app);
      EndpointRoutingApplicationBuilderExtensions.UseEndpoints(app, (Action<IEndpointRouteBuilder>) (endpoints => ControllerEndpointRouteBuilderExtensions.MapControllers(endpoints)));
    }
  }
}
