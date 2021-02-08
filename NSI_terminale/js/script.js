let jeu = [{
    "name": "wanda",
    "src": "images/wanda.jpg"
    }, {
    "name": "natasha",
    "src": "images/natasha.jpg"
    }, {
    "name": "natasha2",
    "src": "images/natasha3.jpg"
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
let carteRetournee = []
// à partir d'ici plus de src en dur

function start(){
    let main = document.getElementById("main");
    for (let i=0;i<20;i++){
        main.innerHTML += '<img class="carte" id="'+i+'" src="' + dos + '" height="340" width="200">';
    }
}
start();
let mesCartes = document.querySelectorAll(".carte");
let compteurClic = 0; // Un tour de jeu dur deux clics
let cartesCourante = [];
mesCartes.forEach(function (carte){
    console.log(carte.innerText);
    carte.addEventListener("click", item => {
        surCarte(item);
    });
});

function surCarte(item){
    console.log("Carte numéro: " + item.target.id);
    compteurClic++;
    console.log(compteurClic);
    carteRetournee.push(item.target);
    if (compteurClic<3){
        if (item.target.getAttribute('src') == dos){
            item.target.setAttribute('src', jeu[item.target.id%10].src);
        }else{
            item.target.setAttribute('src', dos);
        }
    }
    if (compteurClic == 2){
        setTimeout("verification()", 1000);

    }
}

function verification(){
    alert('vérification');


    if (carteRetournee[0].getAttribute('src') == carteRetournee[1].getAttribute('src')){
        console.log("cartes identiques");
    }else{
        console.log("cartes différentes");
    }

    // Ici on va vérifier et replacer les cartes à l'envers si besoin
}
