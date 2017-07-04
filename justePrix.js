var prixBase = Number(prompt("Joueur 1, entrez le prix à trouver"));

var prixTest = Number(prompt("Entrez un prix"));

var i = 1;

while(prixBase !== prixTest) {

	if(prixTest > prixBase) {
		console.log("Le prix à trouver est inférieur, réessayez ");
			
	}
	else  {
		console.log("le prix à trouver est supérieur, réessayez");
	
	}
prixTest = 	Number(prompt("Entrez à nouveau un prix"));
i++;
}

console.log("Vous avez trouvé, le prix était de " + prixBase + " euros");
console.log("vous avez fait " + i +" tentatives");