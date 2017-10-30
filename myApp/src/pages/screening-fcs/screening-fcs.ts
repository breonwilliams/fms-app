import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

import { ScreeningModalFcsPage } from '../screening-modal-fcs/screening-modal-fcs';


/**
 * Generated class for the ScreeningFcsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-fcs',
  templateUrl: 'screening-fcs.html',
})
export class ScreeningFcsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ScreeningModalFcsPage, characterNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningFmsPage');
  }

}
