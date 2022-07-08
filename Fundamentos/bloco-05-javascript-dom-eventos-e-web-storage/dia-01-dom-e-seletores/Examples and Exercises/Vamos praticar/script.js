document.getElementsByTagName("p")[1].innerText = "Me vejo rico daqui a 2 anos.";

document.getElementsByClassName("main-content")[0].style.backgroundColor= "rgb(76,164,109)";

document.getElementsByClassName("center-content")[0].style.backgroundColor= "white";

document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";

// passar para maiusculo todo o texto.
 let paragrafo = document.getElementsByTagName("p");
 for (let index = 0; index < paragrafo.length; index+=1) {
     paragrafo[index].style.textTransform = "uppercase";
     console.log(paragrafo[index].innerText);
   
 }
