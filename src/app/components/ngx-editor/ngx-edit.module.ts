import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEditComponent } from './ngx-edit.component';
import { NgxEditorModule } from 'ngx-editor';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxEditComponent],
  imports: [CommonModule, NgxEditorModule, BrowserModule, FormsModule],
  exports: [NgxEditComponent],
})
export class NgxEditModule {}
