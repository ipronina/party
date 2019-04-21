import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './views/dashboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
