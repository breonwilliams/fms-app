import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';

import { ManageClientsPage } from '../manage-clients/manage-clients';
import { RecentScreensPage } from '../recent-screens/recent-screens';
import { ScreeningFmsPage } from '../screening-fms/screening-fms';
import { NewClientPage } from '../new-client/new-client';
import { ComingSoonPage } from '../coming-soon/coming-soon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  params: Object;
  pushPage: any;
  pushPage1: any;
  pushPageScreeningFms: any;
  pushPageComingSoon: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.pushPage = ManageClientsPage;
    this.pushPage1 = RecentScreensPage;
    this.pushPageScreeningFms = ScreeningFmsPage;
    this.pushPageComingSoon = ComingSoonPage;
    this.params = { id: 42 };


  }

  openModal() {
    let myModal = this.modalCtrl.create(NewClientPage);
    myModal.present();
  }

}
