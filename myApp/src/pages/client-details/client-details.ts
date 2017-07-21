import { Component } from '@angular/core';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { NavController, NavParams, ModalController, ViewController, ToastController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.item = navParams.get('item')
  }

  openModal() {
    let myModal = this.modalCtrl.create(EditProfilePage);
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailsPage');
  }

}