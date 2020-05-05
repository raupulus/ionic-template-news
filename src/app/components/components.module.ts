import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    NavbarComponent
  ],
  exports: [
    PostsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
