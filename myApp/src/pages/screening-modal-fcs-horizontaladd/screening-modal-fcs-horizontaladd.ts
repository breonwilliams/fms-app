import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the ScreeningModalFcsHorizontaladdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-modal-fcs-horizontaladd',
  templateUrl: 'screening-modal-fcs-horizontaladd.html',
})
export class ScreeningModalFcsHorizontaladdPage {

  toggleValueLeftPain: boolean = false;

  toggleValueRightPain: boolean = false;

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
    console.log('ionViewDidLoad ScreeningModalFcsHorizontaladdPage');
  }

}
