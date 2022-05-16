console.log("HelloWorld");

function validacao()
{    
    document.getElementById("error").style.display = 'none';
    document.getElementById("success").style.display = 'none';

    var cpf = document.getElementById("cpf_field").value;
    
    if(ValidarCPF(cpf))
    {
        document.getElementById("success").style.display = 'block';
    }
    else
    {
        document.getElementById("error").style.display = 'block';
    }
}

function ValidarCPF(cpf)
{
    if(cpf.length != 11)
    {
        return false;
    }
    else
    {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;

        for(i = 10; i > 1; i--)
        {
            soma += numeros.charAt(10 - i) * i;                          
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if(resultado != digitos.charAt(0))
        {
            return false;
        }

        numeros = cpf.substring(0, 10)
        soma = 0;

        for(k = 10; k > 1; k--)
        {
            soma += numeros.charAt(11 - k) * k;                          
        }

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if(resultado != digitos.charAt(1))
        {
            return false;
        }
    }

    return true;
}