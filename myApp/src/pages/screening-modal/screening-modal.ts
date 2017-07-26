import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the ScreeningModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-modal',
  templateUrl: 'screening-modal.html',
})
export class ScreeningModalPage {

  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Deep Squat',
        quote: 'Sneaky little hobbitses!',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Hurdle Step',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Inline Lunge',
        quote: 'What we need is a few good taters.',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Shoulder Mobility',
        quote: 'What we need is a few good taters.',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Active Straight-Leg Raise',
        quote: 'What we need is a few good taters.',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Trunk Stability Pushup',
        quote: 'What we need is a few good taters.',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Rotary Stability',
        quote: 'What we need is a few good taters.',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningModalPage');
  }

}
