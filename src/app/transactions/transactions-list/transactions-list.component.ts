import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../../shared/interfaces/transaction';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent {

  @Input()
  transactions!: Observable<Transaction[]>;

  constructor() {

  }


}
