import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './pages/login/login.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy},
   
],
bootstrap: [AppComponent]
})
export class AppModule { }
