import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  // @ts-ignore
  @Input() title: string;
  // @ts-ignore
  @Input() content: string;
  // @ts-ignore
  @Input() loveIts: number =0;


  @Input() create_at= new Date();
  // @ts-ignore
  @Input() donttLove: number=0;

  constructor() {
  }
  ngOnInit(): void {
  }
 onLove() {
   this.loveIts++;
 }
 onDontLove(){
    this.donttLove ++;
 }
}
