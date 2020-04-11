import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() index: Number;

  constructor( private iab: InAppBrowser ) { }

  ngOnInit() {}

  openPost() {
    // Indico que abra con el navegador de android usando el parámetro _system
    const browser = this.iab.create(this.post.url, '_system');
  }
}
