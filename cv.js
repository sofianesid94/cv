window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

// Calculez le déplacement ici ...
	let deplacement = (window.scrollY / (document.body.offsetHeight - window.innerHeight))*100;
// Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll

	document.getElementById('progress').value = deplacement;
	

	console.log(deplacement);// Affiche le contenu de la variable maVariable dans la console du navigateur 
});
// Définition de la fonction de scroll
function myScroll() { 
	
// Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
	var progress = document.getElementById('progress').value;
// valeur de progress de la bare qui permet de changer et modifier la page avec scroll	
	var value =(progress * (document.body.offsetHeight - window.innerHeight))/100;
	window.scroll(0,value);
}
