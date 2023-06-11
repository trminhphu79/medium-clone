import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: ExploreComponent }])
  ],
  declarations: [ExploreComponent],
})
export class MobileSearchFeatureExploreModule { }
