import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-expansive',
  templateUrl: './new-expansive.page.html',
  styleUrls: ['./new-expansive.page.scss'],
})
export class NewExpansivePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeM(){
    this.modalController.dismiss();

  }

}
