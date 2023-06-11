import { SharedUiTagSearchModule } from 'libs/shared/ui/tag-search/src';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule } from '@angular/router';
import { MobileSearchUiInputSearchModule } from '@medium-app/shared/ui/input-search';
import { IonicModule } from '@ionic/angular';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ExploreComponent }]),
    MobileSearchUiInputSearchModule,
    SharedUiTagSearchModule
  ],
  declarations: [ExploreComponent],
})
export class MobileSearchFeatureExploreModule {}
