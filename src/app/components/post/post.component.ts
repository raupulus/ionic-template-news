import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() index: Number;

  constructor( private iab: InAppBrowser,
               private actionSheetCtrl: ActionSheetController,
               private socialSharing: SocialSharing) { }

  ngOnInit() {}

  openPost() {
    // Indico que abra con el navegador de android usando el parámetro _system
    const browser = this.iab.create(this.post.url, '_system');
  }

  async openPostMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-sheet-dark',
        handler: () => {
          this.socialSharing.share(
            this.post.title,
            this.post.source.name,
            '',
            this.post.url
          );
        }
      }, {
        text: 'Añadir a Favorito',
        icon: 'heart',
        cssClass: 'action-sheet-dark',
        handler: () => {
          console.log('Favorito');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        cssClass: 'action-sheet-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
        }
      }]
    });
    await actionSheet.present();
  }
}
