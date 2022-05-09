function simulador(){
    const nome = document.getElementById("nome")
    const cpf = document.getElementById("cpf")
    const email = document.getElementById("email")
    const tel = document.getElementById("tel")
    const entrada = document.getElementById("entrada")
    const modelo = document.getElementById("modelo")

    if(entrada.value < 3000){
        return alert("Sua entrada está muito baixa!")

    }
   

    var calc = modelo.value - entrada.value

    // alert(calc)

    var calc12 = Math.round(calc / 12);

    var calc24 = Math.round(calc / 24);

    var calc36 = Math.round(calc / 36);

    var calc48 = Math.round(calc / 48);

    if(confirm(`A sua simulação resultou em:\n
    sua entrada foi de: R$ ${entrada.value}
    O valor da moto é de: R$ ${modelo.value}
    O saldo para parcelar é de: R$ ${calc}
    O valor das parcelas em 12X é de: R$ ${calc12}
    O valor das parcelas em 24X é de: R$ ${calc24}
    O valor das parcelas em 36X é de: R$ ${calc36}
    O valor das parcelas em 48X é de: R$ ${calc48}.\n
    Deseja cadastrar essa simulação? `)== 1 ){
        fetch("http://localhost:8088/api/cliente/cadastrar",{
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                nome:nome.value,
                cpf:cpf.value,
                email:email.value,
                telefone:tel.value,
                modelo:modelo.value,
                entrada:entrada.value,
            })
        })
        .then((resultado) => resultado.json())
        .then((dados)=>{
            alert(`${dados.output}\n${dados.payload}`);
            // limpar o formulario
               nome.value = ""
                cpf.value = ""
                email.value = ""
                tel.value =""
                modelo.value = ""
                entrada.value = ""
        })
        .catch((err) => console.error(err));
      
    }
    
 

}