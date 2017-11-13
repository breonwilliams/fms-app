import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the ScreeningModalYbtUpperPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-modal-ybt-upper',
  templateUrl: 'screening-modal-ybt-upper.html',
})
export class ScreeningModalYbtUpperPage {

  toggleValue: boolean = false;

  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    var characters = [
      /* charNum: 0 */
      {
        name: 'Left Upper Quarter',
        items: [
          { title: '' },
        ]
      },
      /* charNum: 1 */
      {
        name: 'Right Upper Quarter',
        items: [
          { title: '' },
        ]
      }
    ];
    this.character = characters[this.params.get('characterNumUpperq')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningModalYbtUpperPage');
  }

}
