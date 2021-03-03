import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { overDraftProtectionValidator } from '../shared/validators';
import { Subscription } from 'rxjs';
import { TransactionsService } from '../transactions/transactions.service';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit, OnDestroy {
  availableAmount: number;

  isPreview: boolean;

  transfersForm: FormGroup;

  private amountControlSubscription: Subscription | undefined;

  currencySymbol: string;

  constructor(private fb: FormBuilder, private transactionsService: TransactionsService) {
    this.availableAmount = 5000;
    this.isPreview = false;
    this.transfersForm = this.fb.group({});
    this.currencySymbol = getCurrencySymbol('USD', 'narrow');
  }

  ngOnInit(): void {
    this.transfersForm = this.fb.group({
      toAccount: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });

    const amountControl = this.getControl('amount');

    if (amountControl !== null) {
      this.amountControlSubscription = amountControl.valueChanges.subscribe(() => {
        amountControl.setValidators([Validators.required, overDraftProtectionValidator(this.availableAmount)]);
      });
    }
  }

  onSubmit(): void {
    this.transfersForm.markAllAsTouched();
    if (this.transfersForm.valid) {
      this.isPreview = true;
    }
  }

  onComplete() {
    this.decreaseAmount();
    this.isPreview = false;

    //Send Transfer to Transactions
    this.transactionsService.addTransaction(this.transfersForm.value);

    //Reset form
    this.transfersForm.reset();
  }

  decreaseAmount() {
    this.availableAmount = this.availableAmount - this.getControl('amount').value;
  }

  getControl(controlName: string): AbstractControl {
    return this.transfersForm.get(controlName) as AbstractControl;
  }

  hasError(controlName: string, errorCode?: string): boolean | undefined {
    if (errorCode) {
      return this.getControl(controlName)?.hasError(errorCode) && (this.getControl(controlName)?.dirty || this.getControl(controlName)?.touched);
    }
    return this.getControl(controlName)?.invalid && (this.getControl(controlName)?.dirty || this.getControl(controlName)?.touched);
  }

  ngOnDestroy(): void {
    this.amountControlSubscription?.unsubscribe();
  }
}
