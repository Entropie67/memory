let jeu = [{
    "name": "wanda",
    "src": "images/wanda.jpg"
    }, {
    "name": "natasha",
    "src": "images/natasha.jpg"
    }, {
    "name": "natasha2",
    "src": "images/natasha2.png"
    }, {
    "name": "strange",
    "src": "images/strange.jpg"
    }, {
    "name": "strange2",
    "src": "images/strange2.jpg"
    }, {
    "name": "thor",
    "src": "images/thor.jpg"
    }, {
    "name": "thanos",
    "src": "images/thanos.png"
    }, {
    "name": "capmarvel",
    "src": "images/capmarvel.jpg"
    }, {
    "name": "capmarvel2",
    "src": "images/capmarvel2.jpg"
    }, {
    "name": "truc",
    "src": "images/truc.jpg"
    }];

let dos = "images/dos.png";

// à partir d'ici plus de src en dur

function start(){
    let main = document.getElementById("main");
    for (let i=0;i<10;i++){
        main.innerHTML += '<img class="carte" id="'+i+'" src="' + dos + '" height="350" width="200">';
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
        item.target.setAttribute('src', jeu[item.target.id].src);
    }else{
        item.target.setAttribute('src', dos);
    }

}


