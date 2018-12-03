
$(function(){

    var currency = {
        dolar: 0,
        euro: 0,
        utm: 0,
        uf: 0
    }
        

    $.ajax({
        url: 'https://mindicador.cl/api',
        method: 'GET',
       
    }).done(function(data){
        console.log(data);
        currency.dolar = data.dolar.valor
        currency.euro = data.euro.valor
        currency.utm = data.utm.valor
        currency.uf = data.uf.valor

        $('#UF').text( '$ ' +data.uf.valor )
        $('#UTM').text( '$ ' +data.utm.valor )
        $('#dolar').text( '$ ' +data.dolar.valor )
        $('#euro').text( '$ ' +data.euro.valor )
    });
    
    $(".primer-conversor").on("submit" , function(event){
        event.preventDefault();
        var peso = parseFloat($('#moneda').val())
       $("#xeuro").text((peso / currency.euro).toFixed(2))   
       $("#xutm").text((peso / currency.utm).toFixed(2)) 
       $("#xuf").text((peso / currency.uf).toFixed(2)) 
       $("#xdolar").text((peso / currency.dolar).toFixed(2))   
        console.log(peso)
    })
})

//parseFloat