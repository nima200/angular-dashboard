import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './routing/dashboard-routing.module';
import { DashboardCardsService } from './services/dashboard-cards/dashboard-cards.service';
import { DashboardUsersComponent } from './cards/dashboard-users/dashboard-users.component';
import { DashboardCardsSpawnerComponent } from './cards/dashboard-cards-spawner/dashboard-cards-spawner.component';
import {
  MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatSidenavModule, MatTooltipModule
} from '@angular/material';

// just add material mmodules here
const meterialModules = [MatGridListModule, MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatTooltipModule, MatSidenavModule, FlexLayoutModule];

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    ...meterialModules,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, DashboardUsersComponent, DashboardCardsSpawnerComponent],
  providers: [DashboardCardsService]
})
export class DashboardModule {
}
