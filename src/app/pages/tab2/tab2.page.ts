import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { PostsCollection, Post } from 'src/app/interfaces/interfaces';
import { Category, CategoriesCollection } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, {} as any) segment: IonSegment;

  categories: Category[] = [];
  posts: Post[] = [];

  constructor( private apiService: ApiService) {

    // TODO → Comprobar si hay cacheadas categorías en dispositivo (local)
    // TODO → Al entrar, cargar de dispositivo y tirar ajax para refrescar

  }

  /**
   * Actualiza los posts para la categorías seleccionada
   * @param category Cadena con la categoría.
   * @param event Evento del tipo infinity-scroll para la carga infinita.
   */
  uploadNews( category_id: number, event? ) {
    this.apiService.getPostsCategory( category_id )
      .subscribe( resp => {
        this.posts.push( ...resp.data );

        // Compruebo si se han traido artículos o si el evento ha terminado.
        if ((resp.data.length === 0) && event) {
          event.target.disabled = true;
          event.target.complete();
        } else if ( event ) {
          event.target.complete();
        }
      });
  }

  ngOnInit() {

    // Actualizo si hubiera nuevas categorías.
    this.updateCategories();

    if (this.categories.length > 0) {
      this.segment.value = this.categories[0].name;

      this.uploadNews( this.categories[0].id );
    }
  }

  /**
   * Obtiene del servidor todo el listado de categorías que existan.
   */
  async updateCategories() {
    this.apiService.getAllCategories()
      .subscribe( resp => {
        this.categories.push( ...resp.data );

        // Actualizo posts para esta categoría si es la primera vez que se entra.
        if ((this.categories.length > 0) && !this.segment.value) {
          this.segment.value = this.categories[0].name;
          this.uploadNews( this.categories[0].id );
        }
    });
  }

  /**
   * Actualiza los posts al cambiar de categoría.
   * @param event Recibe el evento que lanza al cambiar categoría.
   */
  changeCategory( event ) {
    this.posts = [];

    this.uploadNews( event.detail.value );
  }

  /**
   * Función que se llama al comenzar la carga infinita del infinity-scroll.
   * @param event Recibe el evento que lanza el infinity-scroll.
   */
  loadData( event ) {
    this.categories.forEach(ele => {
        if (ele.name === this.segment.value) {
          this.uploadNews( ele.id, event );
        }
    });
  }
}
