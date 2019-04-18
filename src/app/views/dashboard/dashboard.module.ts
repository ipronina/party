import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [DashboardRoutingModule, BrowserModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
