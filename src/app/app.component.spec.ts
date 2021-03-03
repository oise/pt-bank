import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({ selector: 'app-transfers', template: '' })
class TransfersStubComponent {}

@Component({ selector: 'app-transactions', template: '' })
class TransactionsStubComponent {}

@Component({ selector: 'app-header', template: '' })
class HeaderStubComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [AppComponent, TransfersStubComponent, TransactionsStubComponent, HeaderStubComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`loads the header'`, () => {
    expect(fixture.debugElement.query(By.directive(HeaderStubComponent))).not.toBeNull();
  });

  it(`loads the transfer component'`, () => {
    expect(fixture.debugElement.query(By.directive(TransfersStubComponent))).not.toBeNull();
  });

  it(`loads the transaction component'`, () => {
    expect(fixture.debugElement.query(By.directive(TransactionsStubComponent))).not.toBeNull();
  });
});
