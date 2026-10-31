const produits = [
    { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
    { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
  ];
    console.log(produits);
    for (let i = 0; i < produits.length; i++) {
      console.log(produits[i].nom,produits[i].prix + "DH");
    };
  
    const disponibles = produits.filter(
      (produit) => produit.stock > 0);
  
    console.log("disponibles :", disponibles.length);
  
    const valeurStock = produits.reduce(
      (total, produit) => total + produit.prix * produit.stock, 0
    );
  
    console.log("Valeur totale du stock :", valeurStock, "DH");
  
    let moinsCher = null;

    let i = 0;
    
    if(disponibles.length>0) {
      moinsCher = disponibles[0];
      while  (i<disponibles.length){
        if(disponibles[i].prix < moinsCher.prix) {
          moinsCher = disponibles[i];
        }
        i++;
      }
      console.log("Produit le moins cher :", moinsCher.nom);
      console.log("Prix minimal :", moinsCher.prix, "DH");
    } else {
      console.log("Aucun produit disponible");
    }
const resume = produits.map(
  produit => `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`
);
console.log(resume);
console.log ("test1", disponibles);
const produitsTest = produits.map((produit) => ({
  ...produit,
  stock: 0
}));

const disponiblesTest = produitsTest.filter(
  (produit) => produit.stock > 0
);

if (disponiblesTest.length === 0) {
console.log("Test 2 : Aucun produit disponible");
};

const produitvide = []
const valvide = produitvide.reduce(
  (total, produit) => total + produit.prix * produit.stock, 0
);
console.log(" test3",valvide);
function estValide(produit) {
  return
      Number.isFinite(produit.prix) &&
      produit.prix >= 0 &&
      Number.isFinite(produit.stock) &&
      produit.prix >= 0 &&
      produit.stock >= 0
}

console.log("Test 4 :", produits.every(estValide));
console.log("/n defi supplément/n");
function estValide(produit) {
  return (
      typeof produit.prix === "number" &&
      typeof produit.stock === "number" &&
      produit.prix >= 0 &&
      produit.stock >= 0
  );
}

console.log(produits.every(estValide));
const { nom, prix } = moinsCher;

console.log("Nom :", nom);
console.log("Prix :", prix);
