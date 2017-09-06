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
        items: [
          { image:'../../assets/img/deep-squat3-slide.jpg', title: '3', note: 'Torso is parallel with tibia or toward vertical. Femur is below horizontal. Knees do not track inside of feet. Dowel aligned over feet.' },
          { image:'../../assets/img/deep-squat2-slide.jpg', title: '2', note: 'Torso is parallel with tibia or toward vertical. Femur is below horizontal. Knees do not track inside of feet. Dowel aligned over feet. Heels are elevated.' },
          { image:'../../assets/img/deep-squat1-slide.jpg', title: '1', note: 'Tibia and torso are not parallel. Femur is not below horizontal. Knees track inside of feet. Dowel is not aligned over feet.' }
        ]
      },
      {
        name: 'Hurdle Step',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          { image:'../../assets/img/hurdle-step3-slide.jpg', title: '3', note: 'Hips, knees and ankles remain aligned in the sagittal plane. Minimal to no movement in lumbar spine. Dowel and hurdle remain parallel.' },
          { image:'../../assets/img/hurdle-step2-slide.jpg', title: '2', note: 'Alignment is lost between hips, knees and ankles. Movement in Lumbar Spine. Dowel and hurdle do not remain parallel.' },
          { image:'../../assets/img/hurdle-step1-slide.jpg', title: '1', note: 'Inability to clear the cord during the hurdle step. Loss of Balance.' }
        ]
      },
      {
        name: 'Inline Lunge',
        items: [
          { image:'../../assets/img/inline-lunge3-slide.jpg', title: '3', note: 'Dowel contact maintained. Dowel remains vertical. Minimal to no torso movement. Dowel and feet remain in sagittal plane. Knee touches the center of the board. Front foot remains in start position.' },
          { image:'../../assets/img/inline-lunge2-slide.jpg', title: '2', note: 'Dowel contact not maintained. Dowel does not remain vertical. Movement in torso. Dowel and feet do not remain in sagittal plane. Knee does not touch center of the board. Flat front foot does not remain in start position.' },
          { image:'../../assets/img/inline-lunge1-slide.jpg', title: '1', note: 'Loss of balance by stepping off the board. Inability to complete movement pattern. Inability to get into set up position.' }
        ]
      },
      {
        name: 'Shoulder Mobility',
        items: [
          { image:'../../assets/img/shoulder-mobility3-slide.jpg', title: '3', note: 'Fists are within one hand length.' },
          { image:'../../assets/img/shoulder-mobility2-slide.jpg', title: '2', note: 'Fists are within one and a half hand lengths.' },
          { image:'../../assets/img/shoulder-mobility1-slide.jpg', title: '1', note: 'Fists are not within one and a half hand lengths.' }
        ]
      },
      {
        name: 'Active Straight-Leg Raise',
        items: [
          { image:'../../assets/img/active-straight-leg-raise3-slide.jpg', title: '3', note: 'Vertical line of the malleolus resides between mid-thigh and ASIS. The non-moving limb remains in neutral position.' },
          { image:'../../assets/img/active-straight-leg-raise2-slide.jpg', title: '2', note: 'Vertical line of the malleolus resides between mid-thigh and mid-patella. The non-moving limb remains in neutral position.' },
          { image:'../../assets/img/active-straight-leg-raise1-slide.jpg', title: '1', note: 'Vertical line of the malleolus resides below the mid-patella. The non-moving limb remains in neutral position.' }
        ]
      },
      {
        name: 'Trunk Stability Pushup',
        quote: 'What we need is a few good taters.',
        image: '../../assets/img/user-placeholder.svg',
        items: [
          { image:'../../assets/img/trunk-stability-pushup3-slide.jpg', title: '3', note: 'Men perform a repetition with thumbs aligned with the top of the forehead. Women perform a repetition with thumbs aligned with the chin. The body lifts as a unit with no lag in the spine.' },
          { image:'../../assets/img/trunk-stability-pushup2-slide.jpg', title: '2', note: 'Men perform a repetition with thumbs aligned with the chin. Women perform a repetition with thumbs aligned with the clavicle. The body lifts as a unit with no lag in the spine.' },
          { image:'../../assets/img/trunk-stability-pushup1-slide.jpg', title: '1', note: 'Men are unable to perform a repetition with thumbs aligned with the chin. Women are unable to perform a repetition with thumbs aligned with the clavicle.' }
        ]
      },
      {
        name: 'Rotary Stability',
        items: [
          { image:'../../assets/img/rotary-stability3-slide.jpg', title: '3', note: 'Performs a correct unilateral repetition. Unilateral limbs remain over the board. Without touching down, touch the same-side elbow to the same-side knee over the board.' },
          { image:'../../assets/img/rotary-stability2-slide.jpg', title: '2', note: 'Performs a correct diagonal repetition. The diagonal knee and elbow meet over the board. Without touching down, touch the opposite elbow and knee over the board.' },
          { image:'../../assets/img/rotary-stability1-slide.jpg', title: '1', note: 'Inability to perform a diagonal repetition.' }
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
