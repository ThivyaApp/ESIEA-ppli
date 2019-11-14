import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AssociationsPageModule } from '../pages/associations/associations.module';
import { AutresPageModule } from '../pages/autres/autres.module';
import { ActusPageModule } from '../pages/actus/actus.module';
import { BdePage } from '../pages/bde/bde';
import { BdsPage } from '../pages/bds/bds';
import { BdaPage } from '../pages/bda/bda';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BdePage,
    BdsPage,
    BdaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ActusPageModule,
    AssociationsPageModule,
    AutresPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BdePage,
    BdsPage,
    BdaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
