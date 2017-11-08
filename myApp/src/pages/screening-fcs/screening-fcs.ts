import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

import { ScreeningModalFcsPage } from '../screening-modal-fcs/screening-modal-fcs';
import { ScreeningModalPage } from '../screening-modal/screening-modal';
import { ScreeningModalFcsLowermcsPage } from '../screening-modal-fcs-lowermcs/screening-modal-fcs-lowermcs';
import { ScreeningModalFcsWristextensionPage } from '../screening-modal-fcs-wristextension/screening-modal-fcs-wristextension';
import { ScreeningModalFcsHorizontaladdPage } from '../screening-modal-fcs-horizontaladd/screening-modal-fcs-horizontaladd';
import { ScreeningModalFcsCarryPage } from '../screening-modal-fcs-carry/screening-modal-fcs-carry';
import { ScreeningModalFcsJumpPage } from '../screening-modal-fcs-jump/screening-modal-fcs-jump';
import { ScreeningModalFcsJumpsinglePage } from '../screening-modal-fcs-jumpsingle/screening-modal-fcs-jumpsingle';


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

  openWristextensionModal() {
    let wristextensionModal = this.modalCtrl.create(ScreeningModalFcsWristextensionPage);
    wristextensionModal.present();
  }

  openHorizontaladdModal() {
    let horizontaladdModal = this.modalCtrl.create(ScreeningModalFcsHorizontaladdPage);
    horizontaladdModal.present();
  }

  openCarryModal() {
    let carryModal = this.modalCtrl.create(ScreeningModalFcsCarryPage);
    carryModal.present();
  }

  openLowermcsModal(characterNumMCS) {
    let lowermcsModal = this.modalCtrl.create(ScreeningModalFcsLowermcsPage, characterNumMCS);
    lowermcsModal.present();
  }

  openJumpModal(characterNumJump) {
    let jumpModal = this.modalCtrl.create(ScreeningModalFcsJumpPage, characterNumJump);
    jumpModal.present();
  }

  openJumpsingleModal(characterNumJumpsingle) {
    let jumpsingleModal = this.modalCtrl.create(ScreeningModalFcsJumpsinglePage, characterNumJumpsingle);
    jumpsingleModal.present();
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ScreeningModalPage, characterNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningFmsPage');
  }

}
