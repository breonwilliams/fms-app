import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';

import { M2pSub2ModalPage } from '../m2p-sub2-modal/m2p-sub2-modal';
import { M2pSub22ModalPage } from '../m2p-sub22-modal/m2p-sub22-modal';


/**
 * Generated class for the M2pSub2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-m2p-sub2',
  templateUrl: 'm2p-sub2.html',
})
export class M2pSub2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
  }

  openModal() {
    let myModal = this.modalCtrl.create(M2pSub2ModalPage);
    myModal.present();
  }

  openModal2() {
    let myModal = this.modalCtrl.create(M2pSub22ModalPage);
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad M2pSub2Page');
  }

}
