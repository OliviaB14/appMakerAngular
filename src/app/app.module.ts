import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextEditorComponent } from './widgets/text-editor/text-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewComponent } from './widgets/tree-view/tree-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    TreeViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
