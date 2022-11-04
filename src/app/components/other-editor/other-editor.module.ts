import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherEditorComponent } from './other-editor.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OtherEditorComponent],
  imports: [CommonModule, FormsModule, CKEditorModule],
  exports: [OtherEditorComponent],
})
export class OtherEditorModule {}
