import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { LoginModule } from "./login/login.module";
import { AppRoutingModule } from './app-routing.module';
import {LoginRoutingModule} from './login/login-routing.module';
import { AppComponent } from './app.component';
import {MdSidenavModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //核心模块导入
    CoreModule,
    //边栏风格
    MdSidenavModule,
    LoginModule,
    AppRoutingModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
