function calcular() {
    const valor = 50000;
    const cantidad = parseInt(document.querySelector("#cantidad").value);
    const total = valor * cantidad;
   

    document.querySelector("#totalFinal").textContent = total;
    document.querySelector("#cantidadFinal").textContent = cantidad;
    if (cantidad<=0) {
        text ="Porfavor ingresar un número válido"
        document.querySelector("#totalFinal").innerHTML = text;
        document.querySelector("#cantidadFinal").style.display = "none";
    } else {
        document.querySelector("#totalFinal").innerHTML = "$" + total;
    }
}
function colorChange() {
    var colorSelected, colorBox;
    colorSelected = document.querySelector("#color").value;
    colorBox = document.querySelector("#color-box");
    if (colorSelected === "red") {
      document.querySelector("img").src = "./assets/img/controlPs4Color2Red.png";
      colorBox.style.color = "red";
    } else if (colorSelected === "blue") {
      document.querySelector("img").src = "./assets/img/controlPs4Color3Blue.png";
      colorBox.style.color = "blue";
    } else if (colorSelected === "black") {
      document.querySelector("img").src = "./assets/img/controlPs4Color1Black.png";
      colorBox.style.color = "black";
    }else if (colorSelected === "all") {
      document.querySelector("img").src = "./assets/img/controlesPs4Variedades.png";
      colorBox.style.color = "all";
    }
}