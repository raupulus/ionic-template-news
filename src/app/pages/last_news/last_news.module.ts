import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LastNewsPage } from './last_news.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: LastNewsPage }])
  ],
  declarations: [LastNewsPage]
})
export class LastNewsModule {}
