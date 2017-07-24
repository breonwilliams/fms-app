import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ViewController } from 'ionic-angular';

/**
 * Generated class for the NewClientPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-client',
  templateUrl: 'new-client.html',
})
export class NewClientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    console.log('NewClientPage constructor');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewClientPage');
  }

}
