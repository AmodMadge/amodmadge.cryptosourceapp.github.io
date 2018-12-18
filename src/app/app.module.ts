import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ComparisonViewComponent } from './comparision-view/comparision-view.component';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { FavouritesComponent } from './favourite/favourite.component';

//import service
import { CryptoService } from './crypto.service';

//import  module 
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { ChartModule } from 'angular-highcharts';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StorageServiceModule } from 'angular-webstorage-service';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    ComparisonViewComponent,
    ChartViewComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule,
    CommonModule,
    ChartModule,
    AngularFontAwesomeModule,
    StorageServiceModule,
    HttpClientModule,
    NgxPaginationModule,
    IonRangeSliderModule,
    RouterModule.forRoot([
      {path:'listView', component: ListViewComponent},
      {path:'', redirectTo:'listView',pathMatch:'full'},
      {path :'chart', component: ChartViewComponent},
      {path :'comparisonView/:id1/:id2', component: ComparisonViewComponent},
      {path :'favourites', component: FavouritesComponent}
    ])
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
