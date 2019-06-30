let tasa = 0;
let amortizacionData = [];
// let columnAmortizacion= [];
let columnCapital = [];
let columnInteres = [];
let columnCuota = [];
let columnPeriodo = [];
$(document).ready(function () {
  tipoCredito();
  seleccion();
  $("#requisitos").hide();
  $("#datosSiguientes").hide();
  $("#prestamo").hide();
  $("#amortizando").hide();
  prestamo();
  interes();
  amortizacion();
});

function amortizacion()
{
  $("#amortizacionForm").submit(function (e) {
    e.preventDefault();
    datosInit = $("#amortizacionForm").serialize().split("&");
    for (var i = 0; i < datosInit.length; i++)
    {
      datito=datosInit[i].split("=");
      for (var j = 0; j < datito.length; j++)
      {
        if (j===1)
          amortizacionData.push(parseFloat(datito[j]));

      }
    }
    dataTable();
    // console.log(amortizacionData);
  });
}

function dataTable()
{
  console.log(amortizacionData);
  columnCapital.push(amortizacionData[0]);
  columnCapBucle = columnCapital[0];
  filasAmortizacion = (amortizacionData[0] / amortizacionData[1])/amortizacionData[3];
  for (var i = 1; columnCapBucle >= 0; i++)
  {
    columnPeriodo.push(parseFloat(i));
    interes = columnCapBucle * ((amortizacionData[2]/100)/amortizacionData[3]);
    columnInteres.push(parseFloat(interes).toFixed(2));
    cuota = interes + filasAmortizacion;
    columnCuota.push(cuota.toFixed(2));
    columnCapBucle = columnCapital[i-1] - filasAmortizacion;
    columnCapital.push(columnCapBucle.toFixed(2));

  }
  // console.log(columnCapital);
  // console.log(columnInteres);
  // console.log(columnCuota);
  // console.log(columnPeriodo);
  for (var i = 0; i < columnPeriodo.length; i++) {
    if (i==0)
    {
      $("#datosTablaAmortizacion").append("<tr>"+
        "<td>"+0+"</td>"+
        "<td>"+0+"</td>"+
        "<td>"+0+"</td>"+
        "<td>"+0+"</td>"+
        "<td>"+columnCapital[i]+"</td>"+
      +"</tr>");
    }
    else
    {
      $("#datosTablaAmortizacion").append("<tr>"+
        "<td>"+columnPeriodo[i-1]+"</td>"+
        "<td>"+columnCuota[i-1]+"</td>"+
        "<td>"+columnInteres[i-1]+"</td>"+
        "<td>" + filasAmortizacion.toFixed(2)+"</td>"+
        "<td>"+columnCapital[i]+"</td>"+
      +"</tr>");
    }

  }

  $("#prestamo").hide();
  $("#amortizando").show();
}

function interes()
{
  // $("#periodica").change(function () {
  //   // console.log($("#periodica").val());
  //   dat = $("#interes").val();
  //   calculoTemp = parseFloat(tasa) / parseFloat($("#periodica").val());
  //   // console.log(calculoTemp);
  //   $("#interes").val(calculoTemp.toFixed(2));
  // });
}

function prestamo()
{
  $("#atrasAmorti").click(function () {
    console.log(columnCuota);
    $("#prestamo").show(1000);
    tasa = 0;
    amortizacionData = [];
    // let columnAmortizacion= [];
    columnCapital = [];
    columnInteres = [];
    columnCuota = [];
    columnPeriodo = [];
    $("#datosTablaAmortizacion").html("");
    $("#amortizando").hide(1000);
    console.log(columnCuota);

  });
  $("#atras").click(function () {
    $("#inicial").show(1000);
    $("#prestamo").hide(1000);
  });
  $("#datosSiguientes").click(function () {
    $("#inicial").hide(1000);
    $("#prestamo").show(1000);
  });
}

function seleccion()
{
    $("#datosIniciales").submit(function (e)
    {
      e.preventDefault();
      // console.log($("#datosIniciales").serialize());
      datos=$("#datosIniciales").serialize().split("tipo=");
      // console.log($(".tipoCre").val());
      switch (datos[1])
      {
        case "1": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/personas/cr%C3%A9ditos/cr%C3%A9dito-de-vivienda.html"); $("#interes").val("17.99"); tasa=$("#interes").val(); break;
        case "2": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/personas/cr%C3%A9ditos/cr%C3%A9dito-de-vivienda-de-inter%C3%A9s-social.html"); $("#interes").val("6.00"); tasa=$("#interes").val(); break;
        case "3": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/personas/cr%C3%A9ditos/cr%C3%A9dito-de-veh%C3%ADculo.html"); $("#interes").val("22.50"); tasa=$("#interes").val(); break;
        case "4": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/personas/cr%C3%A9ditos/cr%C3%A9dito-de-consumo.html"); $("#interes").val("25.5"); tasa=$("#interes").val(); break;
        case "5": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/personas/cr%C3%A9ditos/refassil.html"); $("#interes").val("0.00"); tasa=$("#interes").val(); break;
        case "6": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/empresas/cr%C3%A9ditos/cr%C3%A9dito-empresarial.html"); $("#interes").val("15.00"); tasa=$("#interes").val(); break;
        case "7": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/empresas/cr%C3%A9ditos/cr%C3%A9dito-productivo.html"); $("#interes").val("6.00"); tasa=$("#interes").val(); break;
        case "8": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/pymes/cr%C3%A9ditos/cr%C3%A9dito-pyme.html"); $("#interes").val("16.00"); tasa=$("#interes").val(); break;
        case "9": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/pymes/cr%C3%A9ditos/cr%C3%A9dito-productivo.html"); $("#interes").val("6.00"); tasa=$("#interes").val(); break;
        case "10": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/pymes/cr%C3%A9ditos/cr%C3%A9dito-biofassil.html"); $("#interes").val("17.50"); tasa=$("#interes").val(); break;
        case "11": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/pymes/cr%C3%A9ditos/refassil.html"); $("#interes").val("0.00"); tasa=$("#interes").val(); break;
        case "12": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/microempresas/cr%C3%A9ditos/microcr%C3%A9dito.html"); $("#interes").val("19.50"); tasa=$("#interes").val(); break;
        case "13": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/microempresas/cr%C3%A9ditos/mi-cr%C3%A9dito-fassil.html"); $("#interes").val("11.50"); tasa=$("#interes").val(); break;
        case "14": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/microempresas/cr%C3%A9ditos/cr%C3%A9dito-productivo.html"); $("#interes").val("11.50"); tasa=$("#interes").val(); break;
        case "15": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/microempresas/cr%C3%A9ditos/cr%C3%A9dito-biofassil.html"); $("#interes").val("19.5"); tasa=$("#interes").val(); break;
        case "16": $("#requisitos").show(); $("#requisitos").attr("href","https://www.fassil.com.bo/microempresas/cr%C3%A9ditos/refassil.html"); $("#interes").val("0.00"); tasa=$("#interes").val(); break;
        default: $("#requisitos").hide(); $("#requisitos").attr("href","#"); break;
      }

      $("#datosSiguientes").show(1000);

    });
}

function tipoCredito()
{
    $("#cred_personas").hide();
    $("#cred_empresas").hide();
    $("#cred_pymes").hide();
    $("#cred_microempresas").hide();

    $(".tipoCre").click(function () {
      $("#requisitos").hide();
      $("#datosSiguientes").hide();
    });

    $("#entidad").click(function () {
      $("#requisitos").attr("href","#");
      $("#requisitos").hide();
      $("#datosSiguientes").hide();
      switch (this.value) {
        case "1":
          $("#cred_personas").show();$("#cred_personas select").attr("disabled", false);
          $("#cred_empresas").hide();$("#cred_empresas select").attr("disabled", true);
          $("#cred_pymes").hide();$("#cred_pymes select").attr("disabled", true);
          $("#cred_microempresas").hide();$("#cred_microempresas select").attr("disabled", true);
          break;
        case "2":
          $("#cred_personas").hide();$("#cred_personas select").attr("disabled", true);
          $("#cred_empresas").show();$("#cred_empresas select").attr("disabled", false);
          $("#cred_pymes").hide();$("#cred_pymes select").attr("disabled", true);
          $("#cred_microempresas").hide();$("#cred_microempresas select").attr("disabled", true);
          break;
        case "3":
          $("#cred_personas").hide();$("#cred_personas select").attr("disabled", true);
          $("#cred_empresas").hide();$("#cred_empresas select").attr("disabled", true);
          $("#cred_pymes").show();$("#cred_pymes select").attr("disabled", false);
          $("#cred_microempresas").hide();$("#cred_microempresas select").attr("disabled", true);
          break;
        case "4":
          $("#cred_personas").hide();$("#cred_personas select").attr("disabled", true);
          $("#cred_empresas").hide();$("#cred_empresas select").attr("disabled", true);
          $("#cred_pymes").hide();$("#cred_pymes select").attr("disabled", true);
          $("#cred_microempresas").show();$("#cred_microempresas select").attr("disabled", false);
          break;

        default:

      }
    });

}
