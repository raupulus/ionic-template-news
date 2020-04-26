import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() index;

  constructor( private iab: InAppBrowser,
               private actionSheetCtrl: ActionSheetController,
               private socialSharing: SocialSharing,
               private localStorage: LocalStorageService,
               private platform: Platform) { }

  ngOnInit() {}

  /**
   * Indico que abra con el navegador de android usando el parámetro _system.
   * En un navegador lo abrirá en otra pestaña.
   */
  openPost() {
    const browser = this.iab.create(this.post.url, '_system');
  }

  /**
   * Abre las opciones que se pueden realizar sobre un post.
   */
  async openPostMenu() {
    if (this.localStorage.posts.find(ele => ele.title === this.post.title) ) {
      var favorite = {
        text: 'Borrar Favorito',
        icon: 'trash',
        cssClass: 'action-sheet-dark',
        handler: () => {
          this.localStorage.removePostFavorite( this.post );
        }
      };
    } else {
      var favorite = {
        text: 'Añadir a Favorito',
        icon: 'heart',
        cssClass: 'action-sheet-dark',
        handler: () => {
          this.localStorage.savePostFavorite( this.post );
        }
      };
    }

    // Contiene las acciones para el ActionSheet.
    var actions = {
      buttons: [ 
        favorite, 
      ]
    };

    // Compruebo si puede compartir para añadir acción de compartir.
    if ( this.canSharePost() ) {
      actions.buttons.push({
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-sheet-dark',
        handler: () => {
          this.sharePost();
        }
      });
    }

    // Añado botón de cancelar.
    actions.buttons.push({
      text: 'Cancel',
      icon: 'close',
      cssClass: 'action-sheet-dark',
      // @ts-ignore
      role: 'cancel', // tslint:disable-line
      handler: () => {
        //console.log('Cancelar');
      }
    });

    console.log('Actions: ', actions);

    const actionSheet = await this.actionSheetCtrl.create(actions);
    await actionSheet.present();
  }

  /**
   * Según el dispositivo y soporte mostrará el menú para compartir
   */
  sharePost() {
    console.log('0');

    if ( this.platform.is('cordova') ) {
      this.socialSharing.share(
        this.post.title,
        this.post.source.name,
        '',
        this.post.url
      );
    } else if ( navigator['share'] ) {
      navigator['share']({
          title: this.post.title,
          text: this.post.description,
          url: this.post.url
      })
        .then(() => console.log('Se ha compartido correctamente'))
        .catch((error) => console.log('Error al compartir', error));
    } else {
      console.log('No está soportado ningún método para compartir');
    }
  }

  /**
   * Devuelve si puede compartir.
   */
  canSharePost() {
      return this.platform.is('cordova') || navigator['share'];
  }
}
