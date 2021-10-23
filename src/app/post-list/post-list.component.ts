import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  posts = [
    {
      title: "Mon premier post",
      content: "Mon texte est le tetxte de tout le texte avant de le texte et sans texte pas de texte",
      // @ts-ignore
      loveIts: 0,
      create_at: new Date()
    },

    {
      title: "Mon deuxieme post",
      content: "Mon texte est le tetxte de tout le texte avant de le texte et sans texte pas de texte",
      // @ts-ignore
      loveIts: 0,
      create_at: new Date()
    },

    {
      title: "Encore un post",
      content: "Mon texte est le tetxte de tout le texte avant de le texte et sans texte pas de texte",
      // @ts-ignore
      loveIts: 0,
      create_at: new Date()
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
