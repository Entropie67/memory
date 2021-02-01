let jeu = [{
        "name": "wanda",
        "src": "images/wanda.jpg"
    }, {
        "name": "wanda2",
        "src": "images/wanda2.jpg"
    }, {
    "name": "wanda2",
    "src": "images/wanda2.jpg"
    }, {
    "name": "wanda2",
    "src": "images/wanda2.jpg"
    }, {
    "name": "wanda2",
    "src": "images/wanda2.jpg"
    }, {
    "name": "wanda2",
    "src": "images/wanda2.jpg"
    }, {
    "name": "wanda2",
    "src": "images/wanda2.jpg"
    }, {
    "name": "wanda2",
    "src": "images/wanda2.jpg"
    }, {
    "name": "wanda2",
    "src": "images/wanda2.jpg"
    }, {
    "name": "wanda2",
    "src": "images/wanda2.jpg"
    }];

let dos = "images/dos.png";

// à partir d'ici plus de src en dur

function start(){
    let main = document.getElementById("main");
    for (let i=0;i<10;i++){
        main.innerHTML += '<img class="carte" src="' + dos + '" width="200">';
    }

}
start();
let mesCartes = document.querySelectorAll(".carte");

mesCartes.forEach(function (carte){
    console.log(carte.innerText);
    carte.addEventListener("click", item => {
        surCarte(item);
    });
});

function surCarte(item){
    item.target.style.backgroundColor = "black";
    item.target.style.color = "white";
    if (item.target.getAttribute('src') == dos) {
        item.target.setAttribute('src', jeu[0].src);
    }else{
        item.target.setAttribute('src', dos);
    }

}


