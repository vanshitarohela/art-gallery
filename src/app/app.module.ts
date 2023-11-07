import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { WelcomeCompComponent } from './welcome-comp/welcome-comp.component';
import {MatIconModule} from '@angular/material/icon';
import { FavsComponent } from './favs/favs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeCompComponent,
    DetailViewComponent,
    GridViewComponent,
    WelcomeCompComponent,
    FavsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatPaginatorModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
