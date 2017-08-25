import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the ScreenResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screen-results',
  templateUrl: 'screen-results.html',
})
export class ScreenResultsPage {
  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'FMS',
        quote: 'Level 1',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          { title: 'Deep Squat', note: '3' },
          { title: 'Hurdle Step', note: '2' },
          { title: 'Inline Lunge', note: '3' },
          { title: 'Shoulder Mobility', note: '1' },
          { title: 'Active-Straight Leg Raise', note: '2' },
          { title: 'Trunk Stability Push-Up', note: '3' },
          { title: 'Rotary Stability', note: '1' }
        ]
      },
      {
        name: 'SFMA',
        quote: '',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          
        ]
      },
      {
        name: 'FCS',
        quote: '',
        image: '../../assets/img/FCS-icon.svg',
        items: [

        ]
      },
      {
        name: 'YBT',
        quote: '',
        image: '../../assets/img/user-placeholder.svg',
        items: [

        ]
      },
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailsPage');
  }

}
