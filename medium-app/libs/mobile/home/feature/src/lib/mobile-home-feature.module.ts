import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { route } from './mobile-home-routes';

@NgModule({
  imports: [CommonModule,RouterModule.forChild(route)],
  declarations: [HomeComponent],
  exports:[HomeComponent]
})
export class MobileHomeFeatureModule {}
