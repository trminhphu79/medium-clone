import { MobileShellUiLayoutModule } from 'libs/mobile/shell/ui/layout/src';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouteReuseStrategy, RouterModule } from '@angular/router';
import { route } from './mobile-shell-routes.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route,
      {
        initialNavigation: 'enabledBlocking',
        preloadingStrategy: PreloadAllModules
      }),
      MobileShellUiLayoutModule
  ],
  providers:[
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
})
export class MobileShellFeatureModule {}
