import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ReadingsPage } from '../readings/readings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ReadingsPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
