import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

import { ScreeningModalYbtPage } from '../screening-modal-ybt/screening-modal-ybt';
import { ScreeningModalYbtUpperPage } from '../screening-modal-ybt-upper/screening-modal-ybt-upper';

/**
 * Generated class for the ScreeningYbtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-ybt',
  templateUrl: 'screening-ybt.html',
})
export class ScreeningYbtPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openLowerqModal(characterNumLowerq) {
    let lowerqModal = this.modalCtrl.create(ScreeningModalYbtPage, characterNumLowerq);
    lowerqModal.present();
  }

  openUpperqModal(characterNumUpperq) {
    let upperqModal = this.modalCtrl.create(ScreeningModalYbtUpperPage, characterNumUpperq);
    upperqModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningYbtPage');
  }

}
