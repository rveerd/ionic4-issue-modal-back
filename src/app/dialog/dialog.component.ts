import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onDismiss() {
    this.modalController.dismiss();
  }
}
