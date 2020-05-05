import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Para realizar las peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulo nativo para abrir enlaces en el navegador.
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

// Módulo nativo para compartir en redes sociales.
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

// Módulo para almacenar datos en el storage
import { IonicStorageModule } from '@ionic/storage';

// Modales
import { ModalSiteInfoPage } from './pages/modals/modal-site-info/modal-site-info.page';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, ModalSiteInfoPage],
  entryComponents: [
    ModalSiteInfoPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ComponentsModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
