import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PostsCollection } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http: HttpClient ) { 

  }

  getAll() {
    return this.http.get<PostsCollection>('http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=67f405dc24374346af0843d45bf276e5');
  }
}
