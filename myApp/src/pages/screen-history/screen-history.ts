import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { ScreenResultsPage } from '../screen-results/screen-results';


/**
 * Generated class for the ScreenHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screen-history',
  templateUrl: 'screen-history.html',
})
export class ScreenHistoryPage {

  pushScreenResults: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.pushScreenResults = ScreenResultsPage;
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ScreenResultsPage, characterNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreenHistoryPage');
  }

}
