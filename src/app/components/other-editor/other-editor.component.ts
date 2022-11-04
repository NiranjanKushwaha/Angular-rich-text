import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const CKEDITOR: any;
@Component({
  selector: 'app-other-editor',
  templateUrl: './other-editor.component.html',
  styleUrls: ['./other-editor.component.css'],
})
export class OtherEditorComponent {
  @ViewChild('editor', { static: false }) editor!: ElementRef;
  @ViewChild('myckeditor', { static: false }) ckeditor!: ElementRef;
  ckEditorcontent: string = '';
  isView = true;
  constructor() {}
  ngOnInit() {}

  open() {
    this.isView = !this.isView;
    this.openTemplate();
  }

  openTemplate() {
    const editorSave = this;
    CKEDITOR.replace(this.editor.nativeElement, {
      toolbar: [
        {
          name: 'document',
          items: [
            'Source',
            '-',
            'Save',
            'NewPage',
            'DocProps',
            'Preview',
            'Print',
            '-',
            'Templates',
          ],
        },
        {
          name: 'clipboard',
          items: [
            'Cut',
            'Copy',
            'Paste',
            'PasteText',
            'PasteFromWord',
            '-',
            'Undo',
            'Redo',
          ],
        },
        {
          name: 'editing',
          items: [
            'Find',
            'Replace',
            '-',
            'SelectAll',
            '-',
            'SpellChecker',
            'Scayt',
          ],
        },
        {
          name: 'forms',
          items: [
            'Checkbox',
            'Radio',
            'TextField',
            'Textarea',
            'Select',
            'Button',
            'HiddenField',
          ],
        },
        '/',
        {
          name: 'basicstyles',
          items: [
            'Bold',
            'Italic',
            'Underline',
            'Strike',
            'Subscript',
            'Superscript',
            '-',
            'RemoveFormat',
          ],
        },
        {
          name: 'paragraph',
          items: [
            'NumberedList',
            'BulletedList',
            '-',
            'Outdent',
            'Indent',
            '-',
            'Blockquote',
            'CreateDiv',
            '-',
            'JustifyLeft',
            'JustifyCenter',
            'JustifyRight',
            'JustifyBlock',
            '-',
            'BidiLtr',
            'BidiRtl',
          ],
        },
        { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
        {
          name: 'insert',
          items: ['Table', 'HorizontalRule', 'Smiley', 'PageBreak'],
        },
        '/',
        { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        { name: 'tools', items: ['Maximize', 'ShowBlocks', '-', 'About'] },
      ],
      on: {
        pluginsLoaded: function () {
          const editor: any = this,
            config = editor.config;
          // Let the party on!
          const command = editor.addCommand('save', {
            modes: { wysiwyg: 1, source: 1 },
            exec: function (editor1: any) {
              const fo = editor1.element.$.form;
              editor1.updateElement();
              editorSave.rxsubmit(editor1);
            },
          });
        },
      },
    });
  }
  rxsubmit(editor: any) {
    const data = {
      html: editor._.data ? editor._.data : '',
    };
    console.log('generated html is: ', data.html);
  }
}
