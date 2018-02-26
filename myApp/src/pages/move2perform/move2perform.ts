import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';

import { M2pSub1Page } from '../m2p-sub1/m2p-sub1';
import { M2pSub2Page } from '../m2p-sub2/m2p-sub2';
import { M2pSub3Page } from '../m2p-sub3/m2p-sub3';

/**
 * Generated class for the Move2performPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-move2perform',
  templateUrl: 'move2perform.html',
})
export class Move2performPage {

  pushPageM2pSub1: any;
  pushPageM2pSub2: any;
  pushPageM2pSub3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.pushPageM2pSub1 = M2pSub1Page;
    this.pushPageM2pSub2 = M2pSub2Page;
    this.pushPageM2pSub3 = M2pSub3Page;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Move2performPage');
  }

}
