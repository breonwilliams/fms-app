import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ManageClientsPage } from '../manage-clients/manage-clients';
import { RecentScreensPage } from '../recent-screens/recent-screens';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {


  params: Object;
  pushPage: any;
  pushPage1: any;


  constructor(public navCtrl: NavController) {
    this.pushPage = ManageClientsPage;
    this.pushPage1 = RecentScreensPage;
    this.params = { id: 42 };


  }

}
