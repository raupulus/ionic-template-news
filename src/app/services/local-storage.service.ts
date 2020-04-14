import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Post } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  posts: Post[] = [];

  constructor( private storage: Storage,
               private toastCtrl: ToastController) {
    this.loadPostsFavorite();
   }

   /**
    * Muestra un mensaje emergente con una notificación para una acción realizada.
    * @param message Recibe la cadena que mostrará en la notificación.
    */
   async presentToast ( message: string ) {
     const toast = await this.toastCtrl.create({
        message,
        duration: 1500
     });

     toast.present();
   }

   /**
    * Carga los posts previamente guardados como favoritos.
    */
   async loadPostsFavorite() {
    const favorites = await this.storage.get('favorites');

    if ( favorites ) {
      this.posts = favorites;
    }
  }

  /**
   * Guarda un nuevo post al array de posts favoritos.
   * @param post El Post() completo a guardar.
   */
  savePostFavorite( post: Post) {
    const existe = this.posts.find( p => p.title == post.title);

    if (! existe) {
      this.posts.unshift( post );
      this.storage.set('favorites', this.posts);

      this.presentToast('Añadido a Favorito');
    }
  }

  /**
   * Elimina un Post() de favorito.
   * @param post El post completo a eliminar.
   */
  async removePostFavorite( post: Post ) {
    this.posts = this.posts.filter( p => p.title !== post.title );
    this.storage.set( 'favorites', this.posts );

    this.presentToast('Eliminado de Favorito');
  }
}
