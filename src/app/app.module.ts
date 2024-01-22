import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { AppComponent } from './app.component';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KanbanModule,
    DropDownListAllModule,
    TextBoxAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
