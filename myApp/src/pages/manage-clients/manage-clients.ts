import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ClientDetailsPage } from '../client-details/client-details';
import { EditProfilePage } from '../edit-profile/edit-profile';
/**
 * Generated class for the ManageClientsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-manage-clients',
  templateUrl: 'manage-clients.html',
})
export class ManageClientsPage {

  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Leena Reding',
      'Forest Bullion',
      'Tereasa Sienkiewicz',
      'Ardith Philpot',
      'Rona Casler',
      'Merlene Vita',
      'Raymon Baranowski',
      'Melina Bassham',
      'Wenona Adame',
      'Virgina Drye',
      'Majorie Ferrante',
      'Terri Bogen',
      'Buck Greenleaf',
      'Arianne Garcia',
      'Trang Frenz',
      'Yee Venturi',
      'Sharri Draper',
      'Terence Shoemake',
      'Katia Gottschalk',
      'Cinderella Chatham'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  itemSelected(item: string) {
    this.navCtrl.push(ClientDetailsPage, {
      item: item
    })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageClientsPage');
  }

}
