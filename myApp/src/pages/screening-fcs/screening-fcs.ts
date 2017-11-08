import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

import { ScreeningModalFcsPage } from '../screening-modal-fcs/screening-modal-fcs';
import { ScreeningModalPage } from '../screening-modal/screening-modal';
import { ScreeningModalFcsLowermcsPage } from '../screening-modal-fcs-lowermcs/screening-modal-fcs-lowermcs';


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

  openAnkleclearingModal() {
    let ankleclearingModal = this.modalCtrl.create(ScreeningModalFcsPage);
    ankleclearingModal.present();
  }

  openLowermcsModal(characterNumMCS) {
    let lowermcsModal = this.modalCtrl.create(ScreeningModalFcsLowermcsPage, characterNumMCS);
    lowermcsModal.present();
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ScreeningModalPage, characterNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningFmsPage');
  }

}
