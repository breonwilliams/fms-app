import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the ScreeningModalFcsWristextensionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-modal-fcs-wristextension',
  templateUrl: 'screening-modal-fcs-wristextension.html',
})
export class ScreeningModalFcsWristextensionPage {

  toggleValuePass: boolean = false;

  toggleValuePain: boolean = false;

  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningModalFcsWristextensionPage');
  }

}
