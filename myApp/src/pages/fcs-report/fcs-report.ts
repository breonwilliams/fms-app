import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';

import { FcsReportEfficiencyPage } from '../fcs-report-efficiency/fcs-report-efficiency';


/**
 * Generated class for the FcsReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-fcs-report',
  templateUrl: 'fcs-report.html',
})
export class FcsReportPage {

  pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {

    this.pushPage = FcsReportEfficiencyPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FcsReportPage');
  }

}
