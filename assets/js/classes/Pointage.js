class Pointage {
  constructor(pointDepart, elementHTML) {
    this.points = pointDepart;
    this.elementHTML = elementHTML;
    this.afficherPoints();
  }

  ajouterPoints(pointsAAjouter) {
    this.points += pointsAAjouter;
  }

  afficherPoints() {
    this.elementHTML.textContent = `${this.points} points!`;
  }
}

export default Pointage;
