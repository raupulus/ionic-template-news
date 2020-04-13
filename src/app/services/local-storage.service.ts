import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Post } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  posts: Post[] = [];

  constructor( private storage: Storage ) {
    this.loadPostsFavorite();
   }


  savePostFavorite( post: Post) {
    const existe = this.posts.find( p => p.title == post.title);

    if (! existe) {
      this.posts.unshift( post );
      this.storage.set('favorites', this.posts);

      //console.log(this.storage.get('favorites'));
    }
  }

  async loadPostsFavorite() {
    const favorites = await this.storage.get('favorites');

    console.log( 'async await fav: ', favorites);

    if ( favorites ) {
      this.posts = favorites;
    }

    return favorites;
  }
}
