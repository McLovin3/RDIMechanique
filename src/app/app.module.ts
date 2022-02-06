import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnglishComponent } from './english/english.component';
import { FrenchComponent } from './french/french.component';

@NgModule({
  declarations: [
    AppComponent,
    EnglishComponent,
    FrenchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
