import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../../../interfaces/interfaces';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-site-info',
  templateUrl: './modal-site-info.page.html',
  styleUrls: ['./modal-site-info.page.scss'],
})
export class ModalSiteInfoPage implements OnInit {

  private source: Source;

  constructor(private params: NavParams) { 
    this.source = params.get('source');
    console.log('Source:', this.source);
  }

  ngOnInit() {
  }

}
