import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ToolbarButtonGroup} from "./models/toolbar-button-group";
import {ToolbarButton} from "./models/toolbar-button";

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  @Input() name: string = "textEditor-1";
  @ViewChild('contentEdit') contentEdit: ElementRef;
  contentEl:  HTMLInputElement;

  showMoreDropdown: boolean = false;

  toolbar: ToolbarButtonGroup[] = [
    {
      groupName: 'font',
      items: [
        { label: 'Bold', icon: 'ri-bold', tag: 0, command: 'bold'},
        { label: 'Italic', icon: 'ri-italic', tag: 1, command: 'italic'},
        { label: 'Underline', icon: 'ri-underline', tag: 2, command: 'underline'},
/*
        { label: 'More', icon: 'ri-font-size', tag: -1, command: null},
*/
      ]
    },
/*
    {
      groupName: 'colors',
      items: [
        { label: 'Forecolor', icon: 'ri-font-color', tag: 3, command: 'foreColor'},
        { label: 'Backcolor', icon: 'ri-edit-circle-fill', tag: 3, command: 'backColor'},
      ]
    },
*/
    {
      groupName: 'lists',
      items: [
        { label: 'Ordered', icon: 'ri-list-ordered', tag: 3, command: 'insertOrderedList'},
        { label: 'Unordered', icon: 'ri-list-unordered', tag: 4, command: 'insertUnorderedList'},
        { label: 'Indent', icon: 'ri-indent-increase', tag: 4, command: 'indent'},
        { label: 'Outdent', icon: 'ri-indent-decrease', tag: 4, command: 'outdent'},
      ]
    },
/*
    {
      groupName: 'images',
      items: [
        { label: 'Add Image', icon: 'ri-image-add-line', tag: 3, command: 'insertImage'},
      ]
    },
*/
/*
    {
      groupName: 'additional',
      items: [
        { label: 'Link', icon: 'ri-links-line', tag: 5, command: 'bold'},
        { label: 'Code', icon: 'ri-code-line', tag: 6, command: 'bold'},
      ]
    },
*/
  ];
  dropdownMore: ToolbarButton[] = [
    { label: 'Indent', icon: 'ri-indent-increase', tag: -1, command: null}
  ];

  constructor() { }

  ngOnInit() {
    this.contentEl = <HTMLInputElement>this.contentEdit.nativeElement;
    this.contentEl.textContent = "coucou";
  }

  onToolbarCommand(command: string, ...args) {
    if (command !== null) {
      if (command == 'h1' || command == 'h2' || command == 'p') {
        document.execCommand('formatBlock', false, command);
      }
      if (command == 'forecolor' || command == 'backcolor') {
        document.execCommand(command, false, command);
      }
      if (command == 'createlink' || command == 'insertimage') {
        let url = prompt('Enter the link here: ', 'http:\/\/');
        document.execCommand(command, false, url);
      } else document.execCommand(command, false, null);
    }
  }

  click(command: string = null) {
    if(command == null)
    {
      this.showMoreDropdown = !this.showMoreDropdown;
      console.log("secondary click")
    }
  }

}
