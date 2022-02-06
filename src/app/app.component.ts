import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles : []
})
export class AppComponent 
{
  title = 'Mecanique-RDI';

  isEnglish = false;

  changeLanguage() : void
  {
    this.isEnglish = !this.isEnglish;
  }
}
