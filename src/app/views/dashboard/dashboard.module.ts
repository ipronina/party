import { NgModule } from '@angular/core';
/* Modules */
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
/* Components */
import { DashboardComponent } from './dashboard.component';
/* Services */
import { GuestService } from './services/guest';
import { GuestsService } from './services/guests';

@NgModule({
  imports: [DashboardRoutingModule, BrowserModule, ReactiveFormsModule],
  declarations: [DashboardComponent],
  providers: [GuestService, GuestsService],
})
export class DashboardModule {}
