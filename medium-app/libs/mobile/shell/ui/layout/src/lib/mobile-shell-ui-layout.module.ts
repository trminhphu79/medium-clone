import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MobileShellUiNavBarModule } from 'libs/mobile/shell/ui/nav-bar/src'


@NgModule({
  imports: [
    CommonModule,
    MobileShellUiNavBarModule
  ],
  declarations: [LayoutComponent],
  exports:[LayoutComponent]
})
export class MobileShellUiLayoutModule {}
