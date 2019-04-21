import { NgModule } from '@angular/core';
/* Modules */
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from '@herbis/ngx-modal';
import { ReactiveFormsModule } from '@angular/forms';
/* Components */
import { DashboardComponent } from './dashboard.component';
/* Services */
import { GuestService } from './services/guest';
import { GuestsService } from './services/guests';

@NgModule({
  imports: [DashboardRoutingModule, BrowserModule, ModalModule, ReactiveFormsModule],
  declarations: [DashboardComponent],
  providers: [GuestService, GuestsService],
})
export class DashboardModule {}
