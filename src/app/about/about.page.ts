import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async onClick(event) {
    event.preventDefault();
    const modal = await this.modalController.create({
      component: DialogComponent
    });
    await modal.present();
  }
}
