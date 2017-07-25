import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { ScreeningFmsPage } from '../screening-fms/screening-fms';
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

  pushFMSScreeningPage: any;

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController, public alerCtrl: AlertController) {
    this.pushFMSScreeningPage = ScreeningFmsPage;
    this.item = navParams.get('item')
  }

  openModal() {
    let myModal = this.modalCtrl.create(EditProfilePage);
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailsPage');
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Delete Client',
      message: 'Are you sure you want to delete this client? All screens and data for this client will be deleted as well and can not be recovered.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}