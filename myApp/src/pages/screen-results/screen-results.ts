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
      public viewCtrl: ViewController,
      public navCtrl: NavController
  ) {
    var characters = [
      {
        name: 'FMS',
        quote: 'Level 1',
        image: '../../assets/img/FMS-icon.svg',
        items: [
          { title: 'Deep Squat', note: '3', description: '<ul><li>Torso is parallel with tibia or toward vertical</li><li>Femur is below horizontal</li><li>Knees do not track inside of feet</li><li>Dowel aligned over feet</li></ul>' },
          { title: 'Hurdle Step', note: '2', description:'<ul><li>Alignment is lost between hips, knees and ankles</li><li>Movement in Lumbar Spine</li><li>Dowel and hurdle do not remain parallel</li></ul>' },
          { title: 'Inline Lunge', note: '3', description:'<ul><li>Dowel contact maintained</li><li>Dowel remains vertical</li><li>Minimal to no torso movement</li><li>Dowel and feet remain in sagittal plane</li><li>Knee touches the center of the board</li><li>Front foot remains in start position</li></ul>' },
          { title: 'Shoulder Mobility', note: '1', description:'<ul><li>Fists are not within one and a half hand lengths</li></ul>' },
          { title: 'Active-Straight Leg Raise', note: '2', description:'<ul><li>Vertical line of the malleolus resides between mid-thigh and mid-patella</li><li>The non-moving limb remains in neutral position</li></ul>' },
          { title: 'Trunk Stability Push-Up', note: '3', description:'<ul><li>Men perform a repetition with thumbs aligned with the top of the forehead</li><li>Women perform a repetition with thumbs aligned with the chin</li><li>The body lifts as a unit with no lag in the spine</li></ul>' },
          { title: 'Rotary Stability', note: '1', description:'<ul><li>Inability to perform a diagonal repetition</li></ul>' }
        ]
      },
      {
        name: 'SFMA',
        quote: '',
        image: '../../assets/img/SFMA-icon.svg',
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
        image: '../../assets/img/YBT-icon.svg',
        items: [

        ]
      },
    ];
    this.character = characters[this.params.get('charNum')];
  }

  shownGroup = null;

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };









  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailsPage');
  }

}
