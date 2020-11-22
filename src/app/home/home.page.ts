import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//
import {NewExpansivePage} from  '../new-expansive/new-expansive.page';

interface SectionsI {
  header: {
    title: string
  }
  body: {
    img: string
    content: string
    imgSize?: number
    contentSize?: number
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  sectionsConfig = {
    imgSize: 3,
    contentSize: 9
  }

  sections: Array<SectionsI> = [
    {
      header: {
        title: "Noticias"
      },
      body: {
        img: "https://picsum.photos/200/300?random=1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
        imgSize: 3,
        contentSize: 9
      }
    },
    {
      header: {
        title: "Salud"
      },
      body: {
        img: "https://picsum.photos/200/300?random=2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
      }
    }
  ]

  constructor(private modalController: ModalController) { }

 async pageNew(){
  
  const modal = await this.modalController.create({
    component: NewExpansivePage,
    cssClass: 'my-custom-class'
  });
  return await modal.present();



  }
  ngOnInit() {
  }


}
