function calcular() {
    const valor = 50000;
    const cantidad = parseInt(document.querySelector("#cantidad").value);
    const total = valor * cantidad;

    document.querySelector("#totalFinal").textContent = total;
    document.querySelector("#cantidadFinal").textContent = cantidad;
    
}
function colorChange() {
    var colorSelected, colorBox;
    colorSelected = document.querySelector("#color").value;
    colorBox = document.querySelector("#color-box");
    if (colorSelected === "red") {
      document.querySelector("img").src = "assets/img/controlps4color2.png";
      colorBox.style.color = "red";
    } else if (colorSelected === "blue") {
      document.querySelector("img").src = "assets/img/controlps4color3.png";
      colorBox.style.color = "blue";
    } else if (colorSelected === "black") {
      document.querySelector("img").src = "assets/img/controlps4color1.png";
      colorBox.style.color = "black";
    }
}