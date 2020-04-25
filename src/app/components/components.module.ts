import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
