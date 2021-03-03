import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsFilterComponent } from './transactions-filter/transactions-filter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TransactionsComponent, TransactionsListComponent, TransactionsFilterComponent],
  exports: [TransactionsComponent],
  imports: [CommonModule, SharedModule]
})
export class TransactionsModule {}
