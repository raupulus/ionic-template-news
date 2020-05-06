import { Component, OnInit, Input } from '@angular/core';
import { Source } from '../../../interfaces/interfaces';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-site-info',
  templateUrl: './modal-site-info.page.html',
  styleUrls: ['./modal-site-info.page.scss'],
})
export class ModalSiteInfoPage implements OnInit {

  public source: Source;

  constructor(private params: NavParams, private modalCtrl: ModalController) {
    this.source = params.get('source');
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
