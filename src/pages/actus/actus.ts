import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BdsPage } from '../bds/bds';
import { BdePage } from '../bde/bde';
import { BdaPage } from '../bda/bda';


@IonicPage()
@Component({
  selector: 'page-actus',
  templateUrl: 'actus.html',
})
export class ActusPage {
  nextbdePage = BdePage ;
  nextbdsPage = BdsPage ;
  nextbdaPage = BdaPage ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActusPage');
  }

}
