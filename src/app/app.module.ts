import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEditModule } from './components/ngx-editor/ngx-edit.module';
import { OtherEditorModule } from './components/other-editor/other-editor.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxEditModule, OtherEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
