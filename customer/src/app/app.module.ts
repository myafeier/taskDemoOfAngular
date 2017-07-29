import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AlertModule,AccordionModule} from "ngx-bootstrap";
import { TabsComponent } from './tabs/tabs.component';
import {RouterModule} from "@angular/router";
import { SlideComponent } from './slide/slide.component';
import { HomeComponent } from './home/home.component';
import { IconNavComponent } from './home/icon-nav/icon-nav.component';
import { ListComponent } from './notebook/list/list.component';
import { EntryComponent } from './consult/entry/entry.component';
import { ConsultWindowComponent } from './consult/consult-window/consult-window.component';
import { RackComponent } from './mall/rack/rack.component';
import { CartComponent } from './mall/cart/cart.component';
import { DiscoveryIndexComponent } from './discovery/discovery-index/discovery-index.component';
import { HelpComponent } from './article/help/help.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDefaultComponent } from './article/article-default/article-default.component';
import { IndexComponent } from './interlocution/index/index.component';
import { NewComponent } from './interlocution/new/new.component';
import { MallIndexComponent } from './mall/mall-index/mall-index.component';
import { InterlocutionEntryComponent } from './interlocution/interlocution-entry/interlocution-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SlideComponent,
    HomeComponent,
    IconNavComponent,
    ListComponent,
    EntryComponent,
    ConsultWindowComponent,
    RackComponent,
    CartComponent,
    DiscoveryIndexComponent,
    HelpComponent,
    ArticleComponent,
    ArticleDefaultComponent,
    IndexComponent,
    NewComponent,
    MallIndexComponent,
    InterlocutionEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:"",
        redirectTo:'/home',
        pathMatch:'full'
      },
      {
        path:"discovery",
        component:DiscoveryIndexComponent
      },
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:'consults',
        component:ConsultWindowComponent,
        outlet:'aux'
      },
      {
        path:'interlocution',
        children:[
          {
            path:'',
            component:IndexComponent
          },
        ]
        
      },
      {
            path:'newinterlocution',
            component:NewComponent,
            outlet:'aux'
          },
      {
        path:'article',children:[
          {path:'',component:ArticleDefaultComponent},
          {path:'help',component:HelpComponent}
        ]
      },
      {
        path:'mall',children:[
          {path:'',component:MallIndexComponent},
          {path:'rack',component:RackComponent}
        ]
      }

    ]),
    AlertModule.forRoot(),
    AccordionModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
