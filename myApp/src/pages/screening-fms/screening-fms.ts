import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

import { ScreeningModalPage } from '../screening-modal/screening-modal';

/**
 * Generated class for the ScreeningFmsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-fms',
  templateUrl: 'screening-fms.html',
})
export class ScreeningFmsPage {

  public tapDeepSquat: number = 0;
  public tapHurdleStep: number = 0;
  public tapInlineLunge: number = 0;
  public tapShoulderMobility: number = 0;
  public tapActiveStraightLegRaise: number = 0;
  public tapTrunkStabilityPushup: number = 0;
  public tapRotaryStability: number = 0;

  tapEvent0(e) {
    this.tapDeepSquat++
  }
  tapEvent1(e) {
    this.tapHurdleStep++
  }
  tapEvent2(e) {
    this.tapInlineLunge++
  }
  tapEvent3(e) {
    this.tapShoulderMobility++
  }
  tapEvent4(e) {
    this.tapActiveStraightLegRaise++
  }
  tapEvent5(e) {
    this.tapTrunkStabilityPushup++
  }
  tapEvent6(e) {
    this.tapRotaryStability++
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ScreeningModalPage, characterNum);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningFmsPage');
  }

}
