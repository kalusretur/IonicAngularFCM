import { Component, OnInit } from '@angular/core';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public token: string;

  constructor(private fcm: FCM) {}
  ngOnInit(): void {
    this.setupFCM();
  }

  private async setupFCM(){
    this.token = await this.fcm.getToken();
    console.log('getToken result: ', this.token);
  }

}
