import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AlertModule,AccordionModule} from "ngx-bootstrap";
import { TabsComponent } from './tabs/tabs.component';
import {RouterModule} from "@angular/router";
import { DiscoveryComponent } from './discovery/discovery.component';
import { SlideComponent } from './slide/slide.component';
import { HomeComponent } from './home/home.component';
import { IconNavComponent } from './home/icon-nav/icon-nav.component';
import { ListComponent } from './notebook/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    DiscoveryComponent,
    SlideComponent,
    HomeComponent,
    IconNavComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      {
        path:"discovery",
        component:DiscoveryComponent
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"",
        redirectTo:'/home',
        pathMatch:'full'
      }
    ]),
    AlertModule.forRoot(),
    AccordionModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
