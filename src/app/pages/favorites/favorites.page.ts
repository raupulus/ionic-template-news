import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss'],
})
export class FavoritesPage {

  // Opciones para el slide.
  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };


  constructor( public localStorage: LocalStorageService ) {

  }

}
