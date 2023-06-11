import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule } from '@angular/router';
import { MobileSearchUiInputSearchModule } from '@medium-app/mobile/search/ui/input-search';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: "", component: ExploreComponent }]),
    MobileSearchUiInputSearchModule
  ],
  declarations: [ExploreComponent],
})
export class MobileSearchFeatureExploreModule { }
