import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewExpansivePageRoutingModule } from './new-expansive-routing.module';

import { NewExpansivePage } from './new-expansive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewExpansivePageRoutingModule,
    
  ],
  declarations: [NewExpansivePage]
})
export class NewExpansivePageModule {}
