import { NgModule,Optional,SkipSelf } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {SharedModule} from '../shared/shared.module'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { MdIconRegistry  } from "@angular/material";
// import { DomSanitizer  } from "@angular/platform-browser";
// import { loadSvgResources } from "../util/svg.util";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule  //共享类
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent, 
    FooterComponent
    ],
  //必须导出，否则模块外无法调用
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ]
})
export class CoreModule {
  //核心模块只允许加载一次
  // @Optinal注解:第一次没有注入，有了就检测。。。
  // @SkipSelf注解：防止无限循环检测自身,去父级模块去找即可。
  constructor(@Optional() @SkipSelf() parent:CoreModule){
    if (parent){
      throw new Error("模块以及存在");
    }
    // loadSvgResources(ir,ds);
    
  }
 }
