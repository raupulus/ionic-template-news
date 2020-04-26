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

  /**
   * Carga los posts. Puede recibir el evento del infinity-scroll.
   * @param event Evento si ha sido llamado con infinity-scroll.
   */
  loadPosts( event? ) {
    this.PostsService.getAll()
      .subscribe( (resp) => {
        this.posts.push( ...resp.data );

        // Deshabilito el evento infinity-scroll si no vienen posts o se llegó al final.
        if (resp.data.length === 0) {
          event.target.disabled = true;
          event.target.complete();
        } else if ( event ) {
          event.target.complete();
        }
      });
  }

  ngOnInit() {
    this.loadPosts();
  }

  loadData( event ) {
    this.loadPosts( event );
  }
}
