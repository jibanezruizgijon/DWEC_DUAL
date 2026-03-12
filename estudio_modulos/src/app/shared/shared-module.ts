import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navigation } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Navigation, Footer],
  imports: [CommonModule, RouterModule],
  exports: [Navigation, Footer],
})
export class SharedModule {}
