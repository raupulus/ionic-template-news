import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { PostsCollection, Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment, <any>{}) segment: IonSegment;

  categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'sience',
    'sports',
    'technology'
  ]

  posts: Post[] = [];

  constructor( private apiService: ApiService) {

  }

  uploadNews( category: string ) {
    this.apiService.getPostsCategory( category )
      .subscribe( resp => {
        console.log(resp);
        this.posts.push( ...resp.articles );
      });
  }

  ngOnInit() {
    this.segment.value = this.categories[0];

    this.uploadNews( this.segment.value )
  }

  /**
   * Actualiza los posts al cambiar de categoría.
   * @param event 
   */
  changeCategory( event ) {

    console.log('entra');
    console.log(event.detail.value)

    this.posts = [];

    this.uploadNews( event.detail.value );
  }

}
