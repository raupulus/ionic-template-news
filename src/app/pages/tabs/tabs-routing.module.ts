import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'last_news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../last_news/last_news.module').then(m => m.LastNewsModule)
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../categories/categories.module').then(m => m.CategoriesModule)
          }
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../favorites/favorites.module').then(m => m.FavoritesModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/last_news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/last_news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
