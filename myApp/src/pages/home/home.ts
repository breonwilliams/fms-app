import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';

import { ManageClientsPage } from '../manage-clients/manage-clients';
import { RecentScreensPage } from '../recent-screens/recent-screens';
import { ScreeningFmsPage } from '../screening-fms/screening-fms';
import { NewClientPage } from '../new-client/new-client';
import { ScreeningFcsPage } from '../screening-fcs/screening-fcs';
import { ScreeningYbtPage } from '../screening-ybt/screening-ybt';
import { ComingSoonPage } from '../coming-soon/coming-soon';
import { Move2performPage } from '../move2perform/move2perform';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  params: Object;
  pushPage: any;
  pushPage1: any;
  pushPageScreeningFms: any;
  pushPageScreeningFcs: any;
  pushPageScreeningYbt: any;
  pushPageComingSoon: any;
  pushPageMove2performPage: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.pushPage = ManageClientsPage;
    this.pushPage1 = RecentScreensPage;
    this.pushPageScreeningFms = ScreeningFmsPage;
    this.pushPageScreeningFcs = ScreeningFcsPage;
    this.pushPageScreeningYbt = ScreeningYbtPage;
    this.pushPageComingSoon = ComingSoonPage;
    this.pushPageMove2performPage = Move2performPage;
    this.params = { id: 42 };


  }

  openModal() {
    let myModal = this.modalCtrl.create(NewClientPage);
    myModal.present();
  }

}
