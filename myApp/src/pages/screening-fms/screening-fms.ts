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
  public tapHurdleStepLft: number = 0;
  public tapHurdleStepRt: number = 0;
  public tapInlineLungeLft: number = 0;
  public tapInlineLungeRt: number = 0;
  public tapShoulderMobilityLft: number = 0;
  public tapShoulderMobilityRt: number = 0;
  public tapActiveStraightLegRaiseLft: number = 0;
  public tapActiveStraightLegRaiseRt: number = 0;
  public tapTrunkStabilityPushup: number = 0;
  public tapRotaryStabilityLft: number = 0;
  public tapRotaryStabilityRt: number = 0;
  public clearTestShoulderLft: number = 0;
  public clearTestShoulderRt: number = 0;

  tapEvent0(e) {
    this.tapDeepSquat++
  }
  tapEvent1L(e) {
    this.tapHurdleStepLft++
  }
  tapEvent1R(e) {
    this.tapHurdleStepRt++
  }
  tapEvent2L(e) {
    this.tapInlineLungeLft++
  }
  tapEvent2R(e) {
    this.tapInlineLungeRt++
  }
  tapEvent3L(e) {
    this.tapShoulderMobilityLft++
  }
  tapEvent3R(e) {
    this.tapShoulderMobilityRt++
  }
  tapEvent4L(e) {
    this.tapActiveStraightLegRaiseLft++
  }
  tapEvent4R(e) {
    this.tapActiveStraightLegRaiseRt++
  }
  tapEvent5(e) {
    this.tapTrunkStabilityPushup++
  }
  tapEvent6L(e) {
    this.tapRotaryStabilityLft++
  }
  tapEvent6R(e) {
    this.tapRotaryStabilityRt++
  }
  tapEvent7L(e) {
    this.clearTestShoulderLft++
  }
  tapEvent7R(e) {
    this.clearTestShoulderRt++
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
