import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NumericDirective } from './directives/numeric/numeric.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [HeaderComponent, NumericDirective],
  exports: [ReactiveFormsModule, HeaderComponent, NumericDirective]
})
export class SharedModule {}
