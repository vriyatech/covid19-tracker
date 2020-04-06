// Decompiled with JetBrains decompiler
// Type: flu.api.Controllers.FluController
// Assembly: flu.api, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: DC9A162A-E391-4F33-B927-F28A7FD383BA
// Assembly location: C:\covid_vriya\api_flu\flu.api.dll

using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace flu.api.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class FluController : ControllerBase
  {
    private readonly ConnectionStrings _configSettings;

    public FluController(IOptions<ConnectionStrings> configSettings)
    {
      this.\u002Ector();
      this._configSettings = configSettings.get_Value();
    }

    [HttpGet("test")]
    public IActionResult test()
    {
      return (IActionResult) this.Ok((object) nameof (test));
    }

    [HttpPost("SaveRecords")]
    public IActionResult Insert([FromBody] FluRecords model)
    {
      try
      {
        using (SqlConnection cnn = new SqlConnection(this._configSettings.DefaultConnection.ToString()))
        {
          string str = "no risk";
          cnn.Open();
          DynamicParameters dynamicParameters = new DynamicParameters();
          dynamicParameters.Add("@fever", (object) model.fever.ToString(), new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@cough", (object) model.cough.ToString(), new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@breathing", (object) model.breathing.ToString(), new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@age", (object) model.age.ToString(), new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@otherdiseases", (object) model.otherdiseases, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@outsidevisit", (object) model.outsidevisit.ToString(), new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@rwinfection", (object) model.rwinfection, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@location", (object) model.location.ToString(), new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@provience", (object) model.provience.ToString(), new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@district", (object) model.district.ToString(), new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@municipality", (object) model.municipality.ToString(), new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@myip", (object) model.myip.ToString(), new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          dynamicParameters.Add("@CreatedDate", (object) DateTime.Now, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          if (model.fever.ToLower() == "yes" && model.cough.ToLower() == "yes" && model.breathing.ToLower() == "yes")
            str = model.age.ToLower() == "yes" || model.otherdiseases.ToLower() == "yes" || (model.outsidevisit.ToLower() == "yes" || model.rwinfection.ToLower() == "yes") ? "Vulnerable" : "Potential";
          dynamicParameters.Add("@risk", (object) str, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
          FluRecords fluRecords = cnn.QueryFirstOrDefault<FluRecords>("sp_insertRecords", (object) dynamicParameters, (IDbTransaction) null, new int?(), new CommandType?(CommandType.StoredProcedure));
          return (IActionResult) this.Ok((object) new ResponseResult()
          {
            Status = fluRecords.Status,
            Message = fluRecords.Message,
            Risk = str
          });
        }
      }
      catch (Exception ex)
      {
        return (IActionResult) this.Ok((object) new ResponseResult()
        {
          Status = 0,
          Message = "Something went wrong please try it again",
          Risk = ""
        });
      }
    }

    [HttpGet("SurveyResult")]
    public IActionResult GetResultCountQuestionAndAddressWise()
    {
      using (SqlConnection cnn = new SqlConnection(this._configSettings.DefaultConnection.ToString()))
      {
        cnn.Open();
        string sql = "Result_Survey";
        return (IActionResult) this.Ok((object) cnn.Query<ResultCount>(sql, (object) null, (IDbTransaction) null, true, new int?(), new CommandType?(CommandType.StoredProcedure)).ToList<ResultCount>());
      }
    }
  }
}
