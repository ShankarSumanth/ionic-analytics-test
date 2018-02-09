import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private webWiew: any = window;

  constructor(public navCtrl: NavController) {
    this.webWiew.AppCenter.Analytics.trackEvent('Home Page loaded');
  }

}
