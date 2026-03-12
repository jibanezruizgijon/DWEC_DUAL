import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing-module';

import { SharedModule } from '../shared/shared-module';
import { Home } from './home/home';
@NgModule({
  declarations: [ Home],
  imports: [CommonModule, WelcomeRoutingModule, SharedModule],
})
export class WelcomeModule {}
