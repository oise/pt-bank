import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersComponent } from './transfers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TransfersComponent],
  exports: [TransfersComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule]
})
export class TransfersModule {}
