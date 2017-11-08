import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the ScreeningModalFcsJumpsinglePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-modal-fcs-jumpsingle',
  templateUrl: 'screening-modal-fcs-jumpsingle.html',
})
export class ScreeningModalFcsJumpsinglePage {

  toggleValue: boolean = false;

  toggleValuePain: boolean = false;

  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    var characters = [
      /* charNum: 0 */
      {
        name: 'Single Leg Hop',
        items: [
          { title: '' },
        ]
      },
      /* charNum: 1 */
      {
        name: '2-1-2 Bound',
        items: [
          { title: '' },
        ]
      }
    ];
    this.character = characters[this.params.get('charNumJumpsingle')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningModalFcsJumpsinglePage');
  }

}
