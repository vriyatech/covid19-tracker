// Decompiled with JetBrains decompiler
// Type: flu.api.Controllers.FluRecords
// Assembly: flu.api, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: DC9A162A-E391-4F33-B927-F28A7FD383BA
// Assembly location: C:\covid_vriya\api_flu\flu.api.dll

namespace flu.api.Controllers
{
  public class FluRecords : ResponseResult
  {
    public string fever { get; set; }

    public string cough { get; set; }

    public string breathing { get; set; }

    public string age { get; set; }

    public string otherdiseases { get; set; }

    public string outsidevisit { get; set; }

    public string rwinfection { get; set; }

    public string location { get; set; }

    public string myip { get; set; }

    public string provience { get; set; }

    public string district { get; set; }

    public string municipality { get; set; }
  }
}
