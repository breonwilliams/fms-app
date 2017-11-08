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
      /* charNum: 0 */
      {
        name: 'Deep Squat',
        items: [
          { image:'../../assets/img/deep-squat3-slide.jpg', title: '3', note: 'Torso is parallel with tibia or toward vertical. Femur is below horizontal. Knees do not track inside of feet. Dowel aligned over feet.' },
          { image:'../../assets/img/deep-squat2-slide.jpg', title: '2', note: 'Torso is parallel with tibia or toward vertical. Femur is below horizontal. Knees do not track inside of feet. Dowel aligned over feet. Heels are elevated.' },
          { image:'../../assets/img/deep-squat1-slide.jpg', title: '1', note: 'Tibia and torso are not parallel. Femur is not below horizontal. Knees track inside of feet. Dowel is not aligned over feet.' }
        ]
      },
      /* charNum: 1 */
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
      /* charNum: 2 */
      {
        name: 'Inline Lunge',
        items: [
          { image:'../../assets/img/inline-lunge3-slide.jpg', title: '3', note: 'Dowel contact maintained. Dowel remains vertical. Minimal to no torso movement. Dowel and feet remain in sagittal plane. Knee touches the center of the board. Front foot remains in start position.' },
          { image:'../../assets/img/inline-lunge2-slide.jpg', title: '2', note: 'Dowel contact not maintained. Dowel does not remain vertical. Movement in torso. Dowel and feet do not remain in sagittal plane. Knee does not touch center of the board. Flat front foot does not remain in start position.' },
          { image:'../../assets/img/inline-lunge1-slide.jpg', title: '1', note: 'Loss of balance by stepping off the board. Inability to complete movement pattern. Inability to get into set up position.' }
        ]
      },
      /* charNum: 3 */
      {
        name: 'Shoulder Mobility',
        items: [
          { image:'../../assets/img/shoulder-mobility3-slide.jpg', title: '3', note: 'Fists are within one hand length.' },
          { image:'../../assets/img/shoulder-mobility2-slide.jpg', title: '2', note: 'Fists are within one and a half hand lengths.' },
          { image:'../../assets/img/shoulder-mobility1-slide.jpg', title: '1', note: 'Fists are not within one and a half hand lengths.' }
        ]
      },
      /* charNum: 4 */
      {
        name: 'Active Straight-Leg Raise',
        items: [
          { image:'../../assets/img/active-straight-leg-raise3-slide.jpg', title: '3', note: 'Vertical line of the malleolus resides between mid-thigh and ASIS. The non-moving limb remains in neutral position.' },
          { image:'../../assets/img/active-straight-leg-raise2-slide.jpg', title: '2', note: 'Vertical line of the malleolus resides between mid-thigh and mid-patella. The non-moving limb remains in neutral position.' },
          { image:'../../assets/img/active-straight-leg-raise1-slide.jpg', title: '1', note: 'Vertical line of the malleolus resides below the mid-patella. The non-moving limb remains in neutral position.' }
        ]
      },
      /* charNum: 5 */
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
      /* charNum: 6 */
      {
        name: 'Rotary Stability',
        items: [
          { image:'../../assets/img/rotary-stability3-slide.jpg', title: '3', note: 'Performs a correct unilateral repetition. Unilateral limbs remain over the board. Without touching down, touch the same-side elbow to the same-side knee over the board.' },
          { image:'../../assets/img/rotary-stability2-slide.jpg', title: '2', note: 'Performs a correct diagonal repetition. The diagonal knee and elbow meet over the board. Without touching down, touch the opposite elbow and knee over the board.' },
          { image:'../../assets/img/rotary-stability1-slide.jpg', title: '1', note: 'Inability to perform a diagonal repetition.' }
        ]
      },
      /* charNum: 7 */
      {
        name: 'Shoulder',
        items: [
          { image:'../../assets/img/shoulder-clearing-test-slide.jpg', title: '', note: 'Perform this clearing test bilaterally. If the individual receives a positive score, document both scores for future reference. If there is pain associated with this movement, give a score of zero and perform a thorough evaluation of the shoulder or refer out.'}
        ]
      },
      /* charNum: 8 */
      {
        name: 'Extension',
        items: [
          { image:'../../assets/img/extension-clearing-test-slide.jpg', title: '1', note: 'Extension is cleared by performing a press-up in from the floor with hands under the shoulders. If there is pain associated with this motion, give a zero and perform a more thorough evaluation or refer out. If the individual does receive a positive score, document both scores for future reference' }
        ]
      },
      /* charNum: 9 */
      {
        name: 'Flexion',
        items: [
          { image:'../../assets/img/flexion-clearing-test-slide.jpg', title: '1', note: 'Flexion can be cleared by first assuming a quadruped position, then rocking back and touching the buttocks to the heels and chest to the thighs, The hands should remain in the front of the body, reaching out as far as possible. If there is pain associated with this motion, give a zero and perform a more thorough evaluation or refer out. If the individual receives a positive score, document both scores for future reference.' }
        ]
      },
      /* charNum: 10 */
      {
        name: 'Ankle Clearing',
        items: [
          { image:'../../assets/img/ankle_clearing1-slide.jpg', title: 'Behind', note: 'Individual’s knee resides behind the medial malleolus.' },
          { image:'../../assets/img/ankle_clearing2-slide.jpg', title: 'Within', note: 'Individual’s knee resides within the medial malleolus.' },
          { image:'../../assets/img/ankle_clearing3-slide.jpg', title: 'Beyond', note: 'Individual’s knee moves beyond the medial malleolus.' }
        ]
      },
      /* charNum: 11 */
      {
        name: 'Lower MCS',
        items: [
          { image:'../../assets/img/lower_mcs1-slide.jpg', title: 'Lower Reach', note: 'The reach distance is measured by using the tape measure on the FMS Kit. Document the number, to the nearest half-inch or centimeter (depending on your device), of where the slide box has reached the furthest point the person can push it out, or the furthest point the most distal part of their foot reached.' },
          { image:'../../assets/img/lower_mcs2-slide.jpg', title: 'Foot Length', note: 'Place the heel of the right foot on the 0 line on the FMS Kit and measure the distance from the heel to the most distal part of the shoe. Record the measurement to the nearest half-inch or centimeter, depending on the FMS Kit.' },
          { image:'../../assets/img/lower_mcs3-slide.jpg', title: 'Lower Measure', note: '' }
        ]
      },
      /* charNum: 12 */
      {
        name: 'Wrist Extension Clearing',
        items: [
          { image:'../../assets/img/wrist_extension_clearing1-slide.jpg', title: 'Wrist Extension Clearing', note: 'To pass the wrist extension clearing exam, they must meet two criteria: 1.) No pain, 2.)  No greater than one hand width distance between the dowel and the base of the hands. It is possible to fail this exam due to presence of pain and/or the lack of range of motion.' }
        ]
      },
      /* charNum: 13 */
      {
        name: 'Horizontal Adduction Clearing',
        items: [
          { image:'../../assets/img/horizontal_adduction_clearing1-slide.jpg', title: 'Horizontal Adduction Clearing', note: 'This test is considered positive if the person reports pain. This test does not have a range of motion component. It is only performed for provocation of pain.' }
        ]
      },
      /* charNum: 14 */
      {
        name: 'Upper MCS',
        items: [
          { image:'../../assets/img/upper_mcs1-slide.jpg', title: 'Upper MCS', note: 'The reach distance is measured by using the tape measure on the FMS Kit and is named by the stance arm. (This simply represents the pattern and does not imply the functional ability of a body part or side.) Document the number, to the nearest half-inch or centimeter (depending on your device), of where the slide box has reached the furthest point the most distal part of their hand reached.' },
          { image:'../../assets/img/upper_mcs2-slide.jpg', title: 'Hand Position', note: '' }
        ]
      },
      /* charNum: 15 */
      {
        name: 'Broad Jump',
        items: [
          { image:'../../assets/img/broad_jump1-slide.jpg', title: 'Broad Jump', note: 'The jump distance is measured in centimeters from the start line to the heel of the closest foot to the start line.' }
        ]
      },
      /* charNum: 16 */
      {
        name: 'Broad Jump Hands on Hips',
        items: [
          { image:'../../assets/img/broad_jump_hands_on_hips1-slide.jpg', title: 'Broad Jump Hands on Hips', note: 'The jump distance is measured in centimeters from the start line to the heel of the closest foot to the start line.' }
        ]
      },
      /* charNum: 17 */
      {
        name: 'Single-Leg Hop',
        items: [
          { image:'../../assets/img/single_leg_hop1-slide.jpg', title: 'Single-Leg Hop', note: 'The jump distance is measured in centimeters from the start line to the heel of the closest foot to the start line.' }
        ]
      },
      /* charNum: 18 */
      {
        name: 'Double Broad Jump',
        items: [
          { image:'../../assets/img/double_broad_jump1-slide.jpg', title: 'Double Broad Jump', note: 'The jump distance is measured in centimeters from the start line to the heel of the closest foot to the start line.' }
        ]
      },
      /* charNum: 19 */
      {
        name: 'Triple Broad Jump',
        items: [
          { image:'../../assets/img/triple_broad_jump1-slide.jpg', title: 'Triple Broad Jump', note: 'The jump distance is measured in centimeters from the start line to the heel of the closest foot to the start line.' }
        ]
      },
      /* charNum: 20 */
      {
        name: '2-1-2 Bound',
        items: [
          { image:'../../assets/img/2_1_2_bound1-slide.jpg', title: '2-1-2 Bound', note: 'The jump distance is measured in centimeters from the start line to the heel of the closest foot to the start line.' }
        ]
      },
      /* charNum: 21 */
      {
        name: 'Carry Screen',
        items: [
          { image:'../../assets/img/carry_screen1-slide.jpg', title: 'Carry Screen', note: 'Pass - Carry time is greater than 90 seconds with 75% of body weight while maintaining postural integrity. Fail - Carry time is less than 90 seconds with 75% of body weight and/or does not maintain postural integrity' }
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
