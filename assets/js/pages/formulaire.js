// Variables
let sectionActuelle = 0;
let formulaireValide = false;
const donnees = {};

// Éléments HTML
const formulaire = document.querySelector("#formulaire-principal");
const champs = formulaire.querySelectorAll("input, textarea,select");
const sections = formulaire.querySelectorAll("section[data-page]");
const boutons = formulaire.querySelectorAll("button[data-direction]");
const sectionResume = document.querySelector(".resume");
const checkbox = formulaire.querySelector("[type='checkbox']");
const hidden = formulaire.querySelector("[type='hidden']");
const select = formulaire.querySelector("select");
const date = formulaire.querySelector("[type='date']");

//Fonctions
function init() {
  toutCacher();
  afficherSection(0);
  formulaire.addEventListener("submit", onSubmit);

  champs.forEach(function (element) {
    element.addEventListener("change", onChangementChamp);
  });

    //let sectionValidation = validerSection(sections[0]);
    //sections[0].classList.toggle("invalide", sectionValidation == false);

  // NAVIGATION DANS LE FORMULARIE
  boutons.forEach(function (element) {
    element.addEventListener("click", function (evenement) {
      const declencheur = evenement.currentTarget;
      const direction = parseInt(declencheur.dataset.direction);

      //diretion navigation
      if (direction > 0) {
        avancerSection();
      } else if (direction < 0) {
        reculerSection();
      }
    });
  });

  select.value = "2";
  date.min = getDate();
  date.max = getDate(13);
}

function onSubmit(evenement) {
  evenement.preventDefault(); //Bloque l'exécution normale de l'événement

  //VALIDATION FORMULAIRE

  if (formulaireValide == true) {
    formulaire.submit();
  }
}

//VALIDATION DATE
function getDate(decallage = 0) {

  //On récupère l'année, le mois et le jour formattés correctement
  let annee = aujourdhui.getFullYear(); //Retourne l'année avec 4 caractères. Ex: 2024
  let mois = (aujourdhui.getMonth() + 1).toString().padStart(2, "0"); //Si le mois est 3, on affiche "03"
  let jour = (aujourdhui.getDate() + decallage).toString().padStart(2, "0"); //Si le jour est 3, on affiche "03"

  //Retourne la date de naissance
  return [annee, mois, jour].join("-");
}

function onSubmit(evenement) {
  evenement.preventDefault();

  if (formulaireValide) {
    formulaire.submit();
    formulaire.reset();
  }
}

function onChangementChamp(evenement) {
  const declencheur = evenement.currentTarget;
  const type = declencheur.type;
  const name = declencheur.name;
  const value = declencheur.value;

  if (type == "checkbox") {
    let estCoche = declencheur.checked;
    let valeurCheckbox = estCoche == true ? "OUI" : "NON";


    afficherResume(name, valeurCheckbox);
  } else {
    afficherResume(name, value);
  }

  const estValide = declencheur.checkValidity();
  // Validation de la section
  // Si le champs est valide
  // declencheur.classList.toggle("invalid", estValide==false)//Alternative au add et remove
  if (estValide) {
    declencheur.classList.remove("invalid");
    // MODIFIE LE RESUME
  } else {
    // AFFICHER LES ERREURS SI EST INVALIDE
    declencheur.classList.add("invalid");
  }

  // Valider le reste de la section
  const section = declencheur.closest("section[data-page]");
  validerSection(section);
}

function afficherResume(nomChamp, valeur) {
  const champ = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
  console.log(champ);
  //Vérifier si non null
  if (champ !== null) {
    champ.textContent = valeur;
  }
}

/*
Désactiver le bouton PRECEDENT sur 1er etape
*/
function afficherSection(index) {
  const sectionAAfficher = sections[index];
  sectionAAfficher.classList.remove("invisible");

  let debut = index == 0;
  let fin = index == sections.length - 1;

  let boutonPrecedent = sectionAAfficher.querySelector(
    "button[data-direction='-1']"
  );
  let boutonSuivant = sectionAAfficher.querySelector(
    "button[data-direction='1']"
  );

  //   console.log(boutonPrecedent, boutonSuivant);
  //   console.log(debut, fin);
  //Si on est sur la première section, on desactive le bouton précédant.
  if (debut == true) {
    boutonPrecedent.classList.add("inactif");
  } else {
    boutonPrecedent.classList.remove("inactif");
  }

  //Version courte.
  //boutonSuivant.classList.toggle("inactif", fin == true);
}

function toutCacher() {
  sections.forEach(function (element) {
    element.classList.add("invisible");
  });
}

function avancerSection() {
  //On gère les exceptions et on quitte au besoin
  if (sectionActuelle + 1 >= sections.length) {
    sectionActuelle = sections.length - 1;
    return;
  }

  sectionActuelle++;
  toutCacher();
  afficherSection(sectionActuelle);
}

function reculerSection() {
  //On gère les exceptions et on quitte au besoin
  if (sectionActuelle - 1 < 0) {
    sectionActuelle = 0;
    return;
  }

  sectionActuelle--;
  toutCacher();
  afficherSection(sectionActuelle);
}

function validerChamp(champ) {
  // Affiche le message d'erreur du navigateur
  // Donne de la rétroaction en ajoutant ou enlevant une classe CSS invalide
  // Si valide, vérifie la section
  //Retourne si le champ est valide
}

function validerSection(section) {
  //Trouve les champs de la section
  const champs = section.querySelectorAll("[name]");

  let sectionValide = false;
  //On vérifie chacun des champs et sa validité
  champs.forEach(function (element) {
    let champValide = element.checkValidity();

    if (champValide == false) {
      sectionValide = false;
      return;
    } else {
      sectionValide = true;
    }
  });

  //Affiche de la retroaction a l'utilisateur
  section.classList.toggle("invalid", sectionValide == false);
  console.log(sectionValide);
  return sectionValide;
}

function validerFormulaire() {}

function validerCouleur(champ) {
  //Tomato = #FF6347;
}

function activerDate(dateActive = false) {}

// Exécution
init();
