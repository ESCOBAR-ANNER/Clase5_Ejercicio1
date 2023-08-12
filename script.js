let add = document.querySelector("#add");
let substract = document.querySelector("#substract");



add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let resultado = parseInt(output.innerText) + 1;


  if (resultado <=10) {
    output.innerText = resultado;
  }
  else{
    alert("LLegaste al limite del contador, no puedes ir arriba de 10")
    resultado =0;
  }
});


substract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let resultado = parseInt(output.innerText) - 1;

  if (resultado >= 0) {
    output.innerText = resultado;
  }else{
    alert("LLegaste al limite del contador, no puedes ir abajo de cero")
  }
});
