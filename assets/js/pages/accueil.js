//==== VARIABLES

const livres = [
  {
    isbn:9782714499806,
    titre: "Obsolète",
    auteur: "Colleen Hoover",
    prix: 12.95,
    auteur: "Sophie Loubière",
    prix: 34.95,
    description:"Auteur de huit romans, de nouvelles policières (notamment Les petits polars parus en version numérique chez 12/21) et d'un livre pour la jeunesse, Sophie Loubière s'est fait un nom dans le milieu de l'édition grâce à une émission littéraire unique en son genre (Parking de nuit, France Inter) et à ses chroniques à France Info (Info polar). Après L'Enfant aux Cailloux (Prix de la ville de Mauves-sur-Loire et Prix Lion d'or en 2012) Sophie Loubière nous invite dans son dernier roman Black Coffee à une exploration inédite de la mythique route 66 à travers l'histoire envoûtante d'une Française perdue dans l'immensité américaine...",
  },
  {
    isbn:9781039006942,
    titre: "The Afterpains",
    auteur: "Anna Julia Stainsby",
    prix: 19.99,
    description:"Gorgeous and compelling, The Afterpains is a heartbreaking portrait of two families trying to cope with grief, isolation, and living far from one’s homeland—told in the voices of four distinct narrators.",
  },  
    {
      isbn:9782070453603,
      titre: "Just Kids",
      auteur: "Patti Smith",
      prix: 18.25,
      description:"Just Kids commence comme une histoire d'amour et finit comme une élégie, brossant un inoubliable instantané du New York des années 1960-1970. Avec pudeur et émotion, Patti Smith retrace l'ascension de deux gamins inséparables qui insufflèrent à leur vie la même énergie qu'à leur art.",
    },
    {
      isbn:9782764816318,
      titre: "Qimmik",
      auteur: "Michel Jean",
      prix: 20.99,
      description:"« Depuis cinq mille ans, l'inuktitut et le jappement des qimmiit résonnent dans le Nunavik. La vie y est cruelle. Mais c'est ce qui la rend belle. Précieuse. » Entre la taïga et la toundra, un jeune couple inuit du Nunavik se découvre et apprend à s'aimer. Accompagnés de leurs chiens, les qimmiit, Saullu et Ulaajuk parcourent un continent encore sauvage, tous libres et solidaires. Quelques décennies plus tard, une avocate est dépêchée sur la Côte-Nord pour défendre un meurtrier inuk dont les victimes sont d'anciens policiers de la Sécurité du Québec. Sa quête de justice l'emmènera au-delà de ce qu'elle avait imaginé.",
  },
  {
    isbn:9782764813447,
    titre: "Kukum",
    auteur: "Michel Jean",
    prix: 24.95,
    description:"Ce roman retrace le parcours d'Almanda Siméon, une orpheline qui va partager sa vie avec les Innus de Pekuakami. Amoureuse d'un jeune Innu, elle réussira à se faire accepter. Elle apprendra l'existence nomade et la langue, et brisera les barrières imposées aux femmes autochtones. Almanda et sa famille seront confrontées à la perte de leurs terres et subiront l'enfermement des réserves et la violence des pensionnats. Racontée sur un ton intimiste, l'histoire de cette femme, qui se déroule sur un siècle, exprime l'attachement aux valeurs ancestrales des Innus et au besoin de liberté qu'éprouvent les peuples nomades, encore aujourd'hui.",
},
{
  isbn:9782290391174,
  titre: "La Femme de ménage",
  auteur: "Freida Mcfadden",
  prix: 16.95,
  description:"Répondant à une annonce pour un travail de femme de ménage, Millie, qui sort tout juste de dix ans de prison, devient domestique chez les Winchester, une des familles les plus riches de New York. Cependant, sa patronne devient de plus en plus cruelle et instable alors que la rumeur court que cette dernière aurait tenté de noyer sa fille quelques années auparavant.",
},
{
  isbn:9782384924080,
  titre: "Brésil 11 éd.",
  auteur: "Lonely Planet",
  prix: 19.95,
  description:"Présentation de différentes régions du Brésil, telles que Rio de Janeiro, le Minas Gerais, le Parana, le Mato Grosso ou encore l'Amazonie à travers leur patrimoine, leur culture, des suggestions d'itinéraires et des renseignements pratiques : fêtes, boutiques, restaurants, hôtels ou moyens de transport. Avec un plan détachable de Rio et un chapitre consacré au voyage avec les enfants.",
},
{
  isbn:9782755637083,
  titre: "Jamais plus",
  auteur: "Colleen Hoover",
  prix: 12.95,
  description:"Lily Blossom Bloom n'a pas eu une enfance très facile, entre un père violent et une mère qu'elle trouve soumise, mais elle a su s'en sortir dans la vie et est à l'aube de réaliser son grand rêve : ouvrir, à Boston, une boutique de fleurs. Elle vient de rencontrer un neurochirurgien, Ryle, charmant, ambitieux, visiblement aussi attiré par elle qu'elle l'est par lui. Le chemin de Lily vers le bonheur semble tout tracé. Elle hésite pourtant encore un peu : il n'est pas facile pour elle de se lancer dans une histoire sentimentale, avec des parents comme les siens. Choisir cette vie, c'est aussi tirer un trait sur son passé et Atlas, ce jeune homme qui a été son premier amour et qui a profondément marqué son adolescence.",
},
{
  isbn:9782017207030,
  titre: "Lakestone T.1",
  auteur: "Sarah Rivens",
  prix: 18.95,
  description:"Dans la ville tranquille d'Ewing, aux Etats-Unis, Iris, une jeune étudiante à l'université, n'a pour seuls tracas que les révisions pour ses examens et le paiement de ses frais de scolarité. Son destin se retrouve lié à celui du mercenaire appelé Lakestone lorsqu'il reçoit une mission dont elle est la cible, mais qui éveille en lui curiosité et désir.",
},
{
  isbn:9782384922222,
  titre: "Andalousie",
  auteur: "Lonely Planet",
  prix: 12.95,
  description:"Ce guide propose un choix de restaurants et d'hôtels adaptés à tous types de budgets, des suggestions d'itinéraires et d'activités selon la durée du séjour envisagée, des cartes détaillées, un calendrier des festivités, entre autres. Avec un rappel sur l'histoire et le patrimoine culturel et naturel de cette région du sud de l'Espagne.",
},
];

//==== ELEMENTS HTML
const listeLivresHTML = document.querySelector(".liste-livres");
const livreSelection = document.querySelector(".livre-vedette");
const boutonTriAlphaCroissant = document.querySelector(".alpha.croissant");
const boutonTriAlphaDecroissant = document.querySelector(".alpha.decroissant");
const boutonFiltrePrix = document.querySelector(".filtre.prix");
const titreDetails = document.querySelector(".titreDetails");
const imageVedetteHTML = document.querySelector(".cover-vedette");
const titreVedetteHTML = document.querySelector(".titre");
const auteurVedetteHTML = document.querySelector(".auteur");
const prixVedetteHTML = document.querySelector(".prix-vedette");
const descriptionVedetteHTML = document.querySelector(".description");
const isbnVedetteHTML = document.querySelector(".isbn-vedette");
const copyrightHTML = document.querySelector("footer");
copyrightHTML.textContent="© 2024 Fakebook Bookstore. All rights reserved.";



//==== FUNCTIONS

function init() {

  boutonFiltrePrix.addEventListener("click", function (evenement) {
    let tableauPrix = filtrerPrixMax(livres, 20);
    let tableauTrie = trierAlphabetiqueCroissant(tableauPrix);
    afficherLivres(tableauTrie);
  });

    boutonTriAlphaCroissant.addEventListener("click", function (evenement) {
    let tableauTrie = trierAlphabetiqueCroissant(livres);
    afficherLivres(tableauTrie);
  });

  boutonTriAlphaDecroissant.addEventListener("click", function (evenement) {
    let tableauTrie = trierAlphabetiqueDecroissant(livres);
    afficherLivres(tableauTrie);
  });

  afficherLivres(livres);
}

function afficherLivres(tableauLivres) {
  //On vide la liste avant d'afficher
  listeLivresHTML.innerHTML = "";

  //Boucler dans la liste
  for (let i = 0; i < tableauLivres.length; i++) {
    const livre = tableauLivres[i];
    //Récupérer le info de chaque livre
    const isbn = livre.isbn;
    const titre = livre.titre;
    const auteur = livre.auteur;
    const prix = livre.prix;
    //Afficher dans la console
    const template = `
      <div class="livre" id="${isbn}">
        <img src="assets/img/livres/${isbn}.jpeg">
        <h6>${auteur}</h6>
        <h4>${titre}</h4>
        <h5>$${prix}</h5>
      </div> 
      `;

    listeLivresHTML.insertAdjacentHTML("beforeend", template);
    const dernierElement = listeLivresHTML.lastElementChild;
    dernierElement.addEventListener("click", onClicBoite);
  }
}


function onClicBoite(evenement) {
  const declencheur = evenement.currentTarget;
  console.log(declencheur);
  const id = declencheur.id;
  const livreClic = trouverLivre(id);
  // On cherche tous les éléments avec la classe livre
  const livres = document.querySelectorAll(".livre")
  livres.forEach(function(element){
    element.style.border="";
  })
  //Pour chaque on enlève le style.
  declencheur.style.border = "solid 2px #0a26ba";
  //rechercher dans la liste l'élément avec le id
  const objet = trouverLivre(id);
  const isbnVedette = objet.isbn;
  const titreVedette = objet.titre;
  const auteurVedette = objet.auteur;
  const prixVedette = objet.prix;
  const descriptionVedette = objet.description;

  //Afficher dans la zone, les valeurs de l,objet trouvé
  titreDetails.textContent="Details du produit";
  imageVedetteHTML.src=`assets/img/livres/${isbnVedette}.jpeg`;
  titreVedetteHTML.textContent=titreVedette;
  auteurVedetteHTML.textContent=auteurVedette;
  prixVedetteHTML.textContent=`$ ${prixVedette}`;
  descriptionVedetteHTML.textContent=descriptionVedette;
  isbnVedetteHTML.textContent=`ISBN: ${isbnVedette}`;
  titreEnVedetteHTML.textContent="Details du produit";
  //affichage du livre vedette
  

}


function trouverLivre(isbn) {
  let livreTrouve;
  livres.forEach(function (element) {
    if (element.isbn === parseInt(isbn)) {
      livreTrouve = element;
    }
  });

  return livreTrouve;
}

function trierAlphabetiqueCroissant(tableau) {
  const clone = [...tableau]; //on coupe la référence avec le tableau original

  clone.sort(function (livreA, livreB) {

    if (livreA.titre < livreB.titre) {
      return -1;
    } else if (livreA.titre > livreB.titre) {
      return 1;
    } else {
      return 0;
    }
  });

  return clone;
}

function trierAlphabetiqueDecroissant(tableau) {
  const clone = [...tableau]; //on coupe la référence avec le tableau original

  clone.sort(function (livreA, livreB) {

    if (livreB.titre < livreA.titre) {
      return -1;
    } else if (livreB.titre > livreA.titre) {
      return 1;
    } else {
      return 0;
    }
  });

  return clone;
}

function filtrerPrixMax(tableau, prixMax = 20) {
  const tableauFiltre = [];

  tableau.forEach(function (element, index) {
    if (element.prix <= prixMax) {
      tableauFiltre.push(element);
    }
  });

  return tableauFiltre;
}




//==== EXECUTION DU CODE
init();