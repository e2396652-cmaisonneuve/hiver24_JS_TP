class Question {
  constructor(
    titre,
    bonneReponse,
    choixReponses,
    conteneurHTML,
    gabaritHTML,
    quizParent
  ) {
    //Ajouter le quiz parent ici
    this.titre = titre;
    this.bonneReponse = bonneReponse;
    this.choixReponses = choixReponses;
    this.conteneurHTML = conteneurHTML; //l'endroit où sera affiché la question
    this.gabaritHTML = gabaritHTML; //Le HTML à clôner
    this.quizParent = quizParent;
    this.messageReponse;

    let contexte = this;
    this.verifierReponse = this.verifierReponse.bind(contexte);
    //Ajouter un écouteur d'événement global pour les boutons de réponse
    this.conteneurHTML.addEventListener("click", this.verifierReponse);

    this.injecterHTML();
  }

  injecterHTML() {
    let clone = this.gabaritHTML.content.cloneNode(true);
    this.conteneurHTML.appendChild(clone);

    const questionHTML = this.conteneurHTML.lastElementChild;
    const titre = questionHTML.querySelector(".question__titre");
    const options = questionHTML.querySelector(".question__options");
    this.messageReponse = questionHTML.querySelector(".message-reponse");
    this.pointsReponse = questionHTML.querySelector(".pointage");

    titre.textContent = this.titre;

    options.innerHTML = "";

    this.choixReponses.forEach(
      function (reponse) {
        let boutonReponse = `<li class="bouton">${reponse}</li>`;
        options.insertAdjacentHTML("beforeend", boutonReponse);
      }.bind(this)
    );
  }


  verifierReponse(evenement) {
    let bouton = evenement.target;
    let reponse = bouton.textContent;
    if (reponse == this.bonneReponse) {
      this.quizParent.pointage.ajouterPoints(1);
     this.quizParent.pointage.afficherPoints();
     bouton.classList.add("bonne-reponse")
     this.messageReponse.textContent="Bravo!"
     this.pointsReponse.textContent="1 point!"

    }
    else {
      bouton.classList.add("inactif")
      this.messageReponse.textContent="Pas correct!"
    }
    // Retirer l'écouteur d'événement des boutons
    this.conteneurHTML.removeEventListener("click", this.verifierReponse);

    // Vérifier si la réponse est la bonne
    
    // Si oui, afficherBonneReponse()
    // Sinon, afficherErreur()
    setTimeout(
      function () {
        this.quizParent.prochaineQuestion();
      }.bind(this),
      2000
    );
  }

  afficherErreur() {
    // Mettre en évidence la mauvaise réponse
    // Mettre en évidence la bonne réponse
    // Attendre un délai et passer à la prochaine question (par le parent Quiz)
  }

  afficherBonneReponse() {
    // Mettre en évidence la bonne réponse
    // Mettre à jour le pointage
    // Attendre un délai et passer à la prochaine question
  }
}

export default Question;
