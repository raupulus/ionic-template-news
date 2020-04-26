import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostsCollection } from '../interfaces/interfaces';

import { api } from '../../environments/environment';

const apiKey = api.key;
const apiDomain = api.domain;
const apiVersion = api.version;
const apiPath = api.path;
const apiFile = api.file;

const headers = new HttpHeaders({
  'X-API-KEY': apiKey
});

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  currentPage:number = 0;
  
  currentCategory:string = '';
  
  currentCategoryPage:number = 0;


  constructor( private http: HttpClient ) { }

  /**
   * Realiza la consulta recibida contra la API.
   * @param query Recibe la consulta como string.
   */
  private sendQuery<T>( query: string) {
    let route = 'https://' + apiDomain;

    if (apiPath) {
      route += '/' + apiPath;
    }

    if (apiVersion) {
      route += '/' + apiVersion;
    }

    if (apiFile) {
      route += '/' + apiFile;
    }

    //console.log(route + '/' + query);
    return this.http.get<T>(route + query, { headers });
  }

  /**
   * Devuelve todos los posts para todas las categorías.
   */
  getAll() {
    this.currentPage++;
    let query = `?&page=${this.currentPage}`;
    
    return this.sendQuery<PostsCollection>(query);
  }

  /**
   * Devuelve todos los posts para una categoría concreta.
   * @param category Recibe la categoría como string.
   */
  getPostsCategory(category: string) {
    if (this.currentCategory === category) {
      this.currentCategoryPage++;
    } else {
      this.currentCategoryPage = 1;
      this.currentCategory = category;
    }

    let query = `?&category=${ category }&page=${ this.currentCategoryPage }`;

    return this.sendQuery<PostsCollection>(query);
  }
}
