
let mesCartes = document.querySelectorAll(".carte");

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


