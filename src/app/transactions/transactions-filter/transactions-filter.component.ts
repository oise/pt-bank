import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transactions-filter',
  templateUrl: './transactions-filter.component.html',
  styleUrls: ['./transactions-filter.component.scss']
})
export class TransactionsFilterComponent implements OnInit {
  filterForm!: FormGroup;
  showClose: boolean;

  constructor(private transactionsService: TransactionsService, private fb: FormBuilder) {
    this.showClose = false;
  }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      search: [],
      order: ['default'],
      date: [false],
      amount: [false],
      beneficiary: [false]
    });

    this.filterForm.valueChanges.subscribe((value) => {
      this.showClose = value?.search?.length > 0;
      this.transactionsService.updateSearchParams(value);
    });
  }

  sortBy(value: 'date' | 'amount' | 'beneficiary') {
    if (this.getControl(value).value) {
      this.getControl(value).patchValue(false);
    } else {
      this.getControl(value).patchValue(true);
    }

    this.transactionsService.updateSearchParams(this.filterForm?.value);
  }

  getControl(controlName: string): AbstractControl {
    return this.filterForm.get(controlName) as AbstractControl;
  }

  resetSearch() {
    this.showClose = false;
    this.getControl('search').patchValue('');
    this.transactionsService.updateSearchParams({ search: '' });
  }
}
