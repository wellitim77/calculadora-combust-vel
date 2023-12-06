function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById ("text-result");

    let alcoolSpan = document.getElementById("alcool-span");
    let gasolinaSpan = document.getElementById("gasolina-span");


    /* Calculo Gasolina / Alcool
    se o resultado for menor que 0.7 compensa usar alcool.
    */
    let calculo = (alcoolInput / gasolinaInput)

    

    if(calculo < 0.7){
        // aqui compensa usar alcool.
        textResult.innerHTML = "Compensa usar alcool"
    }else{
        // aqui compensa usar gasolina
        textResult.innerHTML = "Compensa usar gasolina"
    }

    alcoolSpan.innerHTML = "Alcool R$ " + alcoolInput
    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput

    contentResult.classList.remove("hide")
}



