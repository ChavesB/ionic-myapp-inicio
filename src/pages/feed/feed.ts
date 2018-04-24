import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "Bruno Costa";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNum(numero1:number, numero2:number):void {
    alert(numero1+numero2);
  }

  ionViewDidLoad() {
    //this.somaDoisNum(4, 8);
  }

}
