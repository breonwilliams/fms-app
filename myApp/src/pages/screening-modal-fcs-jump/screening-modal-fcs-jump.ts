import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the ScreeningModalFcsJumpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-modal-fcs-jump',
  templateUrl: 'screening-modal-fcs-jump.html',
})
export class ScreeningModalFcsJumpPage {

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
        name: 'Broad Jump',
        items: [
          { title: '' },
        ]
      },
      /* charNum: 1 */
      {
        name: 'Broad Jump Hands on Hips',
        items: [
          { title: '' },
        ]
      },
      /* charNum: 2 */
      {
        name: 'Double Broad Jump',
        items: [
          { title: '' },
        ]
      },
      /* charNum: 3 */
      {
        name: 'Triple Broad Jump',
        items: [
          { title: '' },
        ]
      }
    ];
    this.character = characters[this.params.get('charNumJump')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningModalFcsJumpPage');
  }

}
