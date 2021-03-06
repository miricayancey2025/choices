import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgentTab3Page } from './agent-tab3.page';
import {NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgCalendarModule,
    RouterModule.forChild([{ path: '', component: AgentTab3Page }]),
  ],
  declarations: [AgentTab3Page]
})
export class AgentTab3PageModule {}
