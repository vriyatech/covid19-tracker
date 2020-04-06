// Decompiled with JetBrains decompiler
// Type: flu.api.Controllers.ResultCount
// Assembly: flu.api, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: DC9A162A-E391-4F33-B927-F28A7FD383BA
// Assembly location: C:\covid_vriya\api_flu\flu.api.dll

namespace flu.api.Controllers
{
  public class ResultCount : ResponseResult
  {
    public string Province { get; set; }

    public string District { get; set; }

    public string Municipality { get; set; }

    public new string Risk { get; set; }

    public int countValue { get; set; }
  }
}
