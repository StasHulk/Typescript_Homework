import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header } from "./header/header.component";
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component' 

@NgModule({
  declarations: [
    AppComponent,
    Header,
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
