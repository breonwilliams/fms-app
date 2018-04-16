import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';



/**
 * Generated class for the M2pSub1ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-m2p-sub1-modal',
  templateUrl: 'm2p-sub1-modal.html',
})
export class M2pSub1ModalPage {
  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    var characters = [
      /* charNum: 0 */
      {
        name: 'Injury History',
        items: [
          { header:'Questionnaire', label: 'You scored 3 or above', score: '4 Points', note: 'Results from the Breathing Screen suggest you likely have some type of breathing dysfunction.' },
          { header:'Functional Residual Capacity', label: 'You scored below 25 seconds', score: '20 seconds', note: 'Your FRC is considered dysfunctional' },
          { header:'Total Lung Capacity', label: 'You scored below 35 seconds.', score: '20 seconds', note: 'Your TLC is considered dysfunctional' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad M2pSub1ModalPage');
  }

}
