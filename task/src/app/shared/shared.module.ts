import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdToolbarModule,MdIconModule,MdButtonModule,MdCardModule,MdInputModule,MdListModule} from '@angular/material'
// import {FormsModule} from '@angular/FormsModule'


@NgModule({
  imports: [
    CommonModule,
     MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    // FormsModule

  ],
  // 共享组件的导出
  exports:[
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
  ],
  declarations: []
})
export class SharedModule { }
