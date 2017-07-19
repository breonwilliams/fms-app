import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ScreenResultsPage } from '../screen-results/screen-results';

/**
 * Generated class for the RecentScreensPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-recent-screens',
  templateUrl: 'recent-screens.html',
})

  export class RecentScreensPage {

  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Majorie Ferrante',
      'Terri Bogen',
      'Buck Greenleaf',
      'Arianne Garcia',
      'Trang Frenz'
    ];
  }



  itemSelected(item: string) {
    this.navCtrl.push(ScreenResultsPage, {
      item: item
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageClientsPage');
  }

}
