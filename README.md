# Travail pratique 3 - JavaScript - Quiz animé 

## Objectifs

Dans ce travail, vous allez bâtir sur ce que vous avez appris dans le travail pratique précédent. Vous devrezréaliser un quiz animé de 5 questions aléatoires sur le thème de votre site.

Au chargement de la page, le système récupère les 5 questions fournies dans un fichier à part.

L’objet Quiz met le pointage à zéro, génère la première question et attend la réponse de l’utilisateur. Lors del’affichage de la question, vous devez animer d’une quelconque façon la question ou les boutons.

Lorsque l’utilisateur choisi une réponse, les choix de réponse sont désactivés, la réponse choisie affiche un étatd’erreur ou de succès et le pointage est mis à jour de façon animée. Après 2-3 secondes, le Quiz génère laprochaine question, etc.

Lorsque toutes les questions sont posées, on passe au panneau de fin et le système affiche le pointage. Sil’utilisateur a plus de 50%, un message de félicitations est affiché, sinon un message du type “Meilleure chance laprochaine fois” est affiché.

## Programmation orientée objet
__demo en classe 15 (06/mai/2024)__

Votre code doit être regroupé à l’aide des modules (import/export) et des classes en programmation orientée-objet.

* **pageQuiz.js:** Fichier principal qui appelle la classe Quiz.
* **banqueQuestions.js:** un tableau de vos questions.
* **Les classes nécessaire au projet:**
  * **Quiz:** Gère le déroulement du quiz, la génération des questions, la gestion desréponses, le pointage et la fin du quiz.
  * **Question:** Gère l’affichage, la gestion de la réponse, bloque les boutonslorsque la question est terminée.
  * **Pointage:** Gère l’affichage du pointage, déclenche l’animation et arrêtel’animation lors du changement de pointage.

Chaque classe doit être dans son propre fichier JavaScript.

## Animation

Vous devez contrôler les animations par programmation en utilisant les événements ‘animationend’ ou‘transitionend’.

## Autre

L’application est disposée sur une seule page et nous ne changeons jamais de page web. Vous aurez à écrire lecode HTML, CSS et JavaScript qui permettra de produire les comportements attendus selon la maquette présenteà la dernière page. L’objectif est de créer une interface animée et interactive, les fichiers HTML et CSS doivent êtrebien structurés. Faites des choix graphiques cohérents. Le quiz n’a pas à s’adapter pour appareil mobile. La maquette ne sert que d’exemple, soyez créatifs dans la réalisation de ce projet, il s’agit d’un beau projet de portfolio.

## Remise

Vous devez remettre votre travail dans un dossier .zip, nommé avec votre nom et prénom, sur Teams dans lasection Devoirs. Assurez-vous que le dossier contient tous les fichiers nécessaires pour afficher la page dans unnavigateur. Vous devez inclure les fichiers HTML, CSS, JavaScript et les images.

## Critères d'évaluation - Compte pour 30% de la note finale

### Contrôle de l'affichage par JavaScript

* Le code HTML est présent sur la page. Il n'y a pas de rechargement de page.
* Il est impossible de cliquer un bouton désactivé.
* Chaque question est affichée une à la fois.
* Les boutons sont désactivés après avoir cliqué sur une réponse.
* À la fin du quiz, le panneau de fin est affiché avec le pointage et un message de félicitations oud'encouragement.

### Programmation orientée objet

* Les classes sont utilisées pour organiser le code
* Les classes sont importées/exportées avec les modules
* Les classes sont utilisées pour gérer les questions, le quiz et le pointage
* Chaque classe est dans son propre fichier JavaScript
* Le fichier principal crée des instances des classes et les utilise pour gérer le quiz
* Si des éléments doivent être générés dynamiquement, la classe contient une méthode pour l'injecter
* Les questions/réponses sont placées dans un fichier à part et sont importées lorsque nécessaire

### Contrôle des animations par JavaScript

* Les animations sont contrôlées par JavaScript (transitionend ou animationend)
* L'action suivante est déclenchée après la fin de l'animation précédente

### Structure et qualité de code

* Le code ne contient pas d'erreur
* Les console.log() de débogage sont retirés ou commentés
* Les variables sont nommées de façon explicite
* Les noms de fonctions sont explicites
* Le code est bien indenté
* Le code est facile à lire
* Le code est structuré de façon logique de façon à éviter la répétition
* Le code est structuré pour éviter les erreurs d'ordre d'exécution
* Le code est divisé en fonctions pour éviter la répétition

### Autonomie et attitude professionnelle

* Les éléments du devis sont présentsLe travail est remis à temps
* Les références à du code externe sont bien documentéesLe code n'est pas copié-collé de sources externes ou de générateurs de code ou par intelligence artificielle
* Le dossier de remise est bien nommé et complet.
* L'étudiant.e a montré l'avancement de son travail à son enseignant.e

## :woman_technologist: Created by
### Mariana Neri
ola@mariananeri.com | https://github.com/mariananeri | <a href="https://mariananeri.github.io/TP3_JS" target="_blank">https://mariananeri.github.io/TP3_JS</a> 

## References

Maxime Lacasse-Germain, demo en classe 15, 16 et 17 (mai/2024) 
