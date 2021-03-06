import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the ScreeningModalYbtPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-modal-ybt',
  templateUrl: 'screening-modal-ybt.html',
})
export class ScreeningModalYbtPage {

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
        name: 'Anterior Reach',
        items: [
          { title: '' },
        ]
      },
      /* charNum: 1 */
      {
        name: 'Posterormedial Reach',
        items: [
          { title: '' },
        ]
      },
      /* charNum: 2 */
      {
        name: 'Posterorlateral Reach',
        items: [
          { title: '' },
        ]
      }
    ];
    this.character = characters[this.params.get('characterNumLowerq')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningModalYbtPage');
  }

}
