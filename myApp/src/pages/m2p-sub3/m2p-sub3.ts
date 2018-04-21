import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';

import { M2pSub3ModalPage } from '../m2p-sub3-modal/m2p-sub3-modal';
import { M2pSub32ModalPage } from '../m2p-sub32-modal/m2p-sub32-modal';

/**
 * Generated class for the M2pSub3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-m2p-sub3',
  templateUrl: 'm2p-sub3.html',
})
export class M2pSub3Page {

  pushPageM3pSub1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.pushPageM3pSub1 = M2pSub3ModalPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad M2pSub3Page');
  }

}
