import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the FcsReportEfficiencySub1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-fcs-report-efficiency-sub1',
  templateUrl: 'fcs-report-efficiency-sub1.html',
})
export class FcsReportEfficiencySub1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FcsReportEfficiencySub1Page');
  }

}
