import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { HomeComponent } from './home/home.component';
import { QuickviewComponent } from './quickview/quickview.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailviewComponent,
    HomeComponent,
    QuickviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
