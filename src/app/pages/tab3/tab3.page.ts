import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  constructor( public localStorage: LocalStorageService ) {

  }

}
