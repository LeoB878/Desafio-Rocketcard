const bgCardColor = ["black","red","green","blue"]
const tamanhoArray = bgCardColor.length - 1 
let i = 0

function mudarCorFundo(){
  document.querySelector("#bgCard").style.      background = bgCardColor[i];
  i++
  if(i > tamanhoArray){
    i = 0
  }
}



