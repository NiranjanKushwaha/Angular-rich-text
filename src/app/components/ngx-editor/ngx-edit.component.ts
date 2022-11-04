import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, Editor, Toolbar, toDoc, toHTML } from 'ngx-editor';
import jsonDoc from './doc';
@Component({
  selector: 'app-ngx-edit',
  templateUrl: './ngx-edit.component.html',
  styleUrls: ['./ngx-edit.component.css'],
})
export class NgxEditComponent implements OnInit, OnDestroy {
  // editor!: Editor;
  html: any = '';
  // constructor() {}

  // ngOnInit(): void {
  //   this.editor = new Editor();
  // }

  // // make sure to destory the editor
  // ngOnDestroy(): void {
  //   this.editor.destroy();
  // }

  editordoc = jsonDoc;

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  // get doc(): AbstractControl {
  //   return this.form.get('editorContent');
  // }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  saveText() {
    console.log(this.html);
    console.log(toDoc(this.html));
  }
}
