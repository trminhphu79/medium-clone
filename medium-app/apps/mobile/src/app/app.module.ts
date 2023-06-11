import { MobileShellFeatureModule } from './../../../../libs/mobile/shell/feature/src/lib/mobile-shell-feature.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    MobileShellFeatureModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
