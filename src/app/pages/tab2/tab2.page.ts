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


// TODO → Convertir a objeto con id y nombre
// TODO → Obtener categorías desde la web y cachear en dispositivo
// TODO → Al entrar, cargar de dispositivo y tirar ajax para refrescar


  categories = [
    '1',
    '455',
    '456',
    '457',
    '458',
    '459',
    '460',
    '461',
    '463',
  ]




  posts:Post[] = [];

  constructor( private apiService: ApiService) {

  }

  /**
   * Actualiza los posts para la categorías seleccionada
   * @param category Cadena con la categoría.
   * @param event Evento del tipo infinity-scroll para la carga infinita.
   */
  uploadNews( category: string, event? ) {
    this.apiService.getPostsCategory( category )
      .subscribe( resp => {
        this.posts.push( ...resp.data );

        // Compruebo si se han traido artículos o si el evento ha terminado.
        if (resp.data.length === 0) {
          event.target.disabled = true;
          event.target.complete();
        } else if ( event ) {
          event.target.complete();
        }
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
    this.posts = [];

    this.uploadNews( event.detail.value );
  }
  
  /**
   * Función que se llama al comenzar la carga infinita del infinity-scroll.
   * @param event Recibe el evento que lanza el infinity-scroll.
   */
  loadData( event ) {
    this.uploadNews( this.segment.value, event );
  }
}
