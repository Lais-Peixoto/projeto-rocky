document.querySelector(".mobile-menu").addEventListener("click", () => {
    document.querySelector("aside").style.left="0";
});

document.querySelector(".close-menu").addEventListener("click", () => {
    document.querySelector("aside").style.left = '100vw';
});

document.querySelector(".fa-search").addEventListener("click", () => {
    document.querySelectorAll("aside")[1].style.left="0";
});

document.querySelector(".close-menu-search").addEventListener("click", () => {
    document.querySelectorAll("aside")[1].style.left = '100vw';
    document.querySelector("myUL li").setAttribute("style","display:none");
});

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
       a = li[i].getElementsByTagName("a")[0];
       txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            console.log(li[i].style.display);
            li[i].style.display = "none";
        }
    }
}

window.addEventListener("click", () => {
    let opcoes = document.querySelectorAll("#myUL li");
    for (let i = 0; i < opcoes.length; i++) {
        opcoes[i].style.display ="none";
    }
    
    let inputComprimento = document.getElementById("myInput").offsetWidth || document.getElementById("myInputMob").offsetWidth;
    //document.getElementById("myUL").setAttribute("style","width:"+inputComprimento+"px;"+"left: 35px");
    console.log(inputComprimento)
    if (window.innerWidth > 990) {
        document.getElementById("myUL").setAttribute("style","width:"+inputComprimento+"px");
    } else {
        document.getElementById("myUL").setAttribute("style","width:"+inputComprimento+"px;"+"left: 35px");
    }

    
});


let tamanhoInicial = window.innerWidth;
window.addEventListener("resize", () => {
    let inputComprimento = document.getElementById("myInput").offsetWidth || document.getElementById("myInputMob").offsetWidth ;
    let tamanhoAtual = window.innerWidth;

    if (tamanhoAtual > 990) {
        document.getElementById("myUL").setAttribute("style","width:"+inputComprimento+"px");

        if ( (tamanhoAtual - tamanhoInicial) ) {
            let opcoes = document.querySelectorAll("#myUL li");
            for (let i = 0; i < opcoes.length; i++) {
                opcoes[i].style.display ="none";
            }
        }

    } else {
        document.getElementById("myUL").setAttribute("style","width:"+inputComprimento+"px;"+"left: 35px");

        if ( (tamanhoAtual - tamanhoInicial) ) {
            let opcoes = document.querySelectorAll("#myUL li");
            for (let i = 0; i < opcoes.length; i++) {
                opcoes[i].style.display ="none";
            }
        }
    }
});











function myFunctionMob() {
    var input2, filter2, ul2, li2, a2, i2, txtValue2;
    input2 = document.getElementById("myInputMob");
    
    filter2 = input2.value.toUpperCase();
    ul2 = document.getElementById("myUL");
    li2 = ul2.getElementsByTagName("li");
    for (i2 = 0; i2 < li2.length; i2++) {
       a2 = li2[i2].getElementsByTagName("a")[0];
       txtValue2 = a2.textContent || a2.innerText;
        if (txtValue2.toUpperCase().indexOf(filter2) > -1) {
            li2[i2].style.display = "block";
        } else {
            li2[i2].style.display = "none";
        }
    }
}
