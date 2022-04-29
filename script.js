"use strict"

var prideti = document.getElementsByTagName("button")[0]
var istrinti = document.getElementsByTagName("button")[1]
var displayNumber = document.getElementById("displayNumber")
var results = document.getElementById("results")

var number = 2

// skaiciavimas kvadrateliu

displayNumber.innerText = number


// pridejimas kvadrateliu

prideti.addEventListener("click",function(){
    var div = document.createElement("div")
  
    div.classList.add("box")
    div.innerHTML = "<h2>N</h2>"
    results.append(div)
      // skaiciavimas kvadrateliu = displayina h2 number priklausomai nuo divs kiekio
      var divs = document.getElementsByClassName("box")
      displayNumber.innerText = divs.length

    //   Sunumeruoja kvadratelius
    for (var i = 0;  i< divs.length; i++){
        divs[i].innerHTML = `<h2> ${i + 1}</h2>`
       
    }

    // sukuriam timeOut funkcija kuria priskirsim animacijai :
    setTimeout(function(){
      animation()
    }, 10)
  
});

// istrinti kvadratelius

istrinti.addEventListener("click", function(){
    var divs = document.getElementsByClassName("box")

    if (divs.length){
          // Animuoja  kvadrateli
          divs[divs.length - 1].classList.add("remove")
            //  isjungimas istrinimo mygtuko
           istrinti.disabled = true


        //   istrina kvadrateli:
        setTimeout(function(){
             //  ijungimas istrinimo  mygtuko
    istrinti.disabled = false
    divs[divs.length - 1].remove()
    // skaiciavimas kvadrateliu
    displayNumber.innerText = divs.length
    }, 800)
   

    }
  

});

//  Animacija kvadrateliu

function animation(){
    var divs =document.getElementsByClassName("box")
    for (var i = 0;  i< divs.length; i++){
        divs[i].style.transform = "scale(1)";
        divs[i].style.boxShadow = " 0 0 0 grey"
}
}

// pirmas uzkrovimas stiliaus
animation()