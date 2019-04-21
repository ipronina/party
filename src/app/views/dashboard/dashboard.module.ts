import { NgModule } from '@angular/core';
/* Modules */
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BrowserModule } from '@angular/platform-browser';
/* Components */
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [DashboardRoutingModule, BrowserModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
