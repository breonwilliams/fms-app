import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the ScreeningModalFcsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-modal-fcs',
  templateUrl: 'screening-modal-fcs.html',
})
export class ScreeningModalFcsPage {
  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Deep Squat',
        items: [
          { image:'../../assets/img/deep-squat3-slide.jpg', title: '3', note: 'Torso is parallel with tibia or toward vertical. Femur is below horizontal. Knees do not track inside of feet. Dowel aligned over feet.' },
          { image:'../../assets/img/deep-squat2-slide.jpg', title: '2', note: 'Torso is parallel with tibia or toward vertical. Femur is below horizontal. Knees do not track inside of feet. Dowel aligned over feet. Heels are elevated.' },
          { image:'../../assets/img/deep-squat1-slide.jpg', title: '1', note: 'Tibia and torso are not parallel. Femur is not below horizontal. Knees track inside of feet. Dowel is not aligned over feet.' }
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
