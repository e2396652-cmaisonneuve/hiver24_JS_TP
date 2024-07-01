import { questions } from "../donnees/questionsQuiz.js";
import Pointage from "./Pointage.js";
import Question from "./Question.js";

class Quiz {
  constructor() {
    this.nbMaxQuestions = 5;
    this.questions = questions;

    this.indexQuestionActuelle = 0; // L'index de la question
    this.questionActuelle; // L'instance de la question actuelle

    this.conteneurPointage = document.querySelector(".pointage");
    this.pointage = new Pointage(0, this.conteneurPointage);
    this.pointage.afficherPoints();

    this.panneauDebutHTML = document.querySelector(".quiz-panneau-debut");
    this.boutonDemarrageQuiz = this.panneauDebutHTML.querySelector(".bouton");
    this.panneauFinHTML = document.querySelector(".quiz-panneau-fin");
    this.panneauQuestionHTML = document.querySelector(".quiz-conteneur");
    this.messageConteneur;

    //Ajouter les écouteurs d'événements ici
    this.boutonDemarrageQuiz.addEventListener(
      "click",
      this.prochaineQuestion.bind(this)
    );
      this.panneauDebutHTML.addEventListener(
        "animationend", function(){
          this.boutonDemarrageQuiz.classList.remove("invisible")
        }
        .bind(this)
      )
    this.demarrerQuiz();
  }

  // AFFICHAGE ET NAVIGATION

  cacherPanneaux() {
    this.panneauDebutHTML.classList.add("invisible");
    this.panneauFinHTML.classList.add("invisible");
    this.panneauQuestionHTML.classList.add("invisible");
  }

  afficherPanneau(panneauHTML) {
    panneauHTML.classList.remove("invisible");
  }

  // GESTION DES QUESTIONS ET DU QUIZ

  demarrerQuiz() {
    this.cacherPanneaux();
    this.afficherPanneau(this.panneauDebutHTML);
  }

  prochaineQuestion() {
   if(this.indexQuestionActuelle<this.nbMaxQuestions){
     this.cacherPanneaux();
     this.afficherPanneau(this.panneauQuestionHTML);
     this.pointage.elementHTML.classList.remove("invisible")
     let infosQuestion = this.questions[this.indexQuestionActuelle];
     let conteneur = document.querySelector(".quiz-conteneur");
     let gabarit = document.querySelector("template#question");
     let instanceQuiz = this;
 
     //Vide le HTML du conteneur
     conteneur.innerHTML = "";
 
     this.questionActuelle = new Question(
       infosQuestion.question,
       infosQuestion.bonneReponse,
       infosQuestion.reponses,
       conteneur,
       gabarit,
       instanceQuiz
     );
     this.indexQuestionActuelle++;
   }else{
    this.terminerQuiz();
   }
  }

  terminerQuiz() {
      this.cacherPanneaux();
      this.afficherPanneau(this.panneauFinHTML);
      this.panneauFinHTML.querySelector(".pointage").textContent=this.pointage.points
    } 
  }

  

export default Quiz;
