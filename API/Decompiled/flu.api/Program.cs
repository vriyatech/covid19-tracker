// Decompiled with JetBrains decompiler
// Type: flu.api.Program
// Assembly: flu.api, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: DC9A162A-E391-4F33-B927-F28A7FD383BA
// Assembly location: C:\covid_vriya\api_flu\flu.api.dll

using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;

namespace flu.api
{
  public class Program
  {
    public static void Main(string[] args)
    {
      HostingAbstractionsHostExtensions.Run(Program.CreateHostBuilder(args).Build());
    }

    public static IHostBuilder CreateHostBuilder(string[] args)
    {
      return GenericHostBuilderExtensions.ConfigureWebHostDefaults(Host.CreateDefaultBuilder(args), (Action<IWebHostBuilder>) (webBuilder => WebHostBuilderExtensions.UseStartup<Startup>(webBuilder)));
    }
  }
}
