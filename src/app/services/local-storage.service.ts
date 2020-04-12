import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Post } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  posts: Post[] = [];

  constructor( private storage: Storage ) { }


  savePost( post: Post) {
    this.posts.unshift( post );
    this.storage.set('favorites', post);
  }

  loadFavorite() {

  }
}
