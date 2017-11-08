import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

/**
 * Generated class for the ScreeningModalFcsLowermcsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-screening-modal-fcs-lowermcs',
  templateUrl: 'screening-modal-fcs-lowermcs.html',
})
export class ScreeningModalFcsLowermcsPage {

    toggleValue: boolean = false;

    character;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        var characters = [
            /* charNum: 0 */
            {
                name: 'Lower MCS',
                items: [
                    { title: '' },
                ]
            },
            /* charNum: 1 */
            {
                name: 'Upper MCS',
                items: [
                    { title: '' },
                ]
            }
        ];
        this.character = characters[this.params.get('charNumMCS')];
    }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningModalPage');
  }

}
