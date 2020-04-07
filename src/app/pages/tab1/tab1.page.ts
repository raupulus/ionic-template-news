import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';
import { PostsCollection, Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  posts: Post[] = [];

  constructor( private PostsService: PostsService ) {

  }

  ngOnInit() {
    this.PostsService.getAll()
      .subscribe( (resp) => {
        console.log( 'Posts:', resp );
        this.posts.push( ...resp.articles );
      });
  }
}
