import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  /*appreilName= 'Machine à laver'; c'est qu'on va modifier à @input ci dessous */
  // @ts-ignore
  @Input() appareilName: string;

// @ts-ignore
 @Input() appareilStatus: string;
  constructor() { }

  ngOnInit(): void {
  }
 getStatus(){
    return this.appareilStatus;
 }
 // c'est une directive par attribut qui permet de mettre des couleur avec des conditions
 // @ts-ignore
  getColor (){
    if(this.appareilStatus == 'allumé'){
      return 'green';
    }else if(this.appareilStatus == 'éteint'){
      return 'red';
    }
 };
}
