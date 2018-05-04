import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';

import { FcsReportEfficiencySub1Page } from '../fcs-report-efficiency-sub1/fcs-report-efficiency-sub1';

/**
 * Generated class for the FcsReportEfficiencyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-fcs-report-efficiency',
  templateUrl: 'fcs-report-efficiency.html',
})
export class FcsReportEfficiencyPage {

  pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.pushPage = FcsReportEfficiencySub1Page;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FcsReportEfficiencyPage');
  }

}
