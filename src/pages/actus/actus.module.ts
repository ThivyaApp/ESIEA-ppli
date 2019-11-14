import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActusPage } from './actus';

@NgModule({
  declarations: [
    ActusPage,
  ],
  imports: [
    IonicPageModule.forChild(ActusPage),
  ],
})
export class ActusPageModule {}
