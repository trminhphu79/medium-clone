import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostActionComponent } from './new-post-action/new-post-action.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [NewPostActionComponent],
  exports:[NewPostActionComponent]
})
export class SharedUiNewPostActionModule {}
