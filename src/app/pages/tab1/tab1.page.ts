import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { PostsCollection, Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  posts: Post[] = [];

  constructor( private PostsService: ApiService ) {

  }

  ngOnInit() {
    this.PostsService.getAll()
      .subscribe( (resp) => {
        console.log( 'Posts:', resp );
        this.posts.push( ...resp.articles );
      });
  }
}
