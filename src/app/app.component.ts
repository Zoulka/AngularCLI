import {Component, OnInit} from '@angular/core';
import {AppareilService} from "./Service/appareil.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isAuth= false;

  // l'utilisation de pipedate
  lastUpdate = new Date();

  // pipe assynchrone
  /*  lastUpdate = new Promise(
      (resolve, reject) => {
          const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
    ) */


 /* appareilOne ="Machine à laver"
  appareilTwo= 'Televion'
  appareilTree= "Ordianteur" */
  /* On va créer un tableau plutot que d'avoir trois appareil aligner en haut, dans lequel on va avoir
  * les differends appareils*/

  // @ts-ignore
  appareils: any[];
  constructor(private appareilservice: AppareilService) {
    setTimeout(
      ()=> {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit() {
    this.appareils = this.appareilservice.appareils;
  }

  onAllumer(){
    console.log('On allume tout !');
  }
}


