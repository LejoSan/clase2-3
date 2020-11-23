import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-expansive',
  templateUrl: './new-expansive.page.html',
  styleUrls: ['./new-expansive.page.scss'],
})
export class NewExpansivePage implements OnInit {

  @Input() valores:string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.valores);
  }

  closeM(){
    this.modalController.dismiss();

  }

}
