import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment) segment: IonSegment;

  categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'sience',
    'sports',
    'technology'
  ]

  constructor() {}

  ngOnInit() {
    this.segment.value = this.categories[0];
  }

}
