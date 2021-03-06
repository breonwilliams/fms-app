import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';

import { M2pSub1ModalPage } from '../m2p-sub1-modal/m2p-sub1-modal';

/**
 * Generated class for the M2pSub1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-m2p-sub1',
  templateUrl: 'm2p-sub1.html',
})
export class M2pSub1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
  }



  openModal(characterNum) {

    let myModal = this.modalCtrl.create(M2pSub1ModalPage, characterNum);
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad M2pSub1Page');
  }

}
