
let mesCartes = document.querySelectorAll(".carte");

function start(){
    let main = document.getElementById("main");
    for (let i=0;i<10;i++){
        main.innerHTML += '<img class="carte" src="images/wanda.jpg" width="200">';
    }

}




function surCarte(item){
    item.target.style.backgroundColor = "black";
    item.target.style.color = "white";
}

mesCartes.forEach(function (carte){
    console.log(carte.innerText);
    carte.addEventListener("click", item => {
        surCarte(item);
    });
});


start();