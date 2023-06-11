import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultSearchComponent } from './result-search/result-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: ResultSearchComponent }])
  ],
  declarations: [ResultSearchComponent],
})
export class MobileSearchFeatureListSearchModule { }
