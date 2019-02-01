window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

// Calculez le déplacement ici ...
let deplacement = ((window.scrollY)*100)/(document.body.offsetHeight-window.innerHeight);

document.getElementById('progress').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});