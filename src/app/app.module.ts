import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPageComponent } from './compoents/TopPage/TopPage.component';
import { CannvasComponent } from './compoents/Cannvas/Cannvas.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPageComponent,
    CannvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
