import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ChartState } from './../../states/chart.state';
import { MatCardModule } from '@angular/material/card';
import { AuthState } from './../../states/auth.state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { ChartModule } from 'angular2-chartjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([AuthState, ChartState]),
    MatCardModule,
    MatButtonModule,
    ChartModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {}
