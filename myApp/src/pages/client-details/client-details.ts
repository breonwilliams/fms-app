import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClientDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-client-details',
  templateUrl: 'client-details.html',
})
export class ClientDetailsPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailsPage');
  }

}
