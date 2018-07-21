import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-readings',
  templateUrl: 'readings.html'
})
export class ReadingsPage {

  constructor(public navCtrl: NavController,
              public storage: Storage) {

  }
}
