export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      stauts: 'allumé'
    },
    {
      name: 'Télévision',
      stauts: 'allumé'
    },
    {
      name: 'Ordinateur',
      stauts: 'éteint'
    }
  ];

  // on ajoute des methodes qui ns permettra d'allumer tous les appareils
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.stauts = 'allumé'
    }
  }

  switchOfAll() {
    for (let appareil of this.appareils) {
      appareil.stauts = 'éteint'
    }
  }
}
