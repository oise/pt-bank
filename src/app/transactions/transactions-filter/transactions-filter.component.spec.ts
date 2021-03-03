import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFilterComponent } from './transactions-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('TransactionsFilterComponent', () => {
  let component: TransactionsFilterComponent;
  let fixture: ComponentFixture<TransactionsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsFilterComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display reset "X" by default', () => {
    const close = fixture.debugElement.query(By.css('.filter-actions-search-close'));

    fixture.detectChanges();

    expect(close).toBeNull();
  });

  it('should display reset "X" when search has a value', () => {
    const search = fixture.debugElement.query(By.css('[formcontrolname="search"]'));

    const searchInput = search.nativeElement as HTMLInputElement;

    searchInput.value = 'abc';

    searchInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const close = fixture.debugElement.query(By.css('.filter-actions-search-close'));

    expect(close).not.toBeNull();
  });

  it('reset "X" should clear the input', () => {
    const search = fixture.debugElement.query(By.css('[formcontrolname="search"]'));

    const searchInput = search.nativeElement as HTMLInputElement;

    searchInput.value = 'abc';

    searchInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(searchInput.value).toBe('abc');

    const close = fixture.debugElement.query(By.css('.filter-actions-search-close'));

    close.nativeElement.dispatchEvent(new Event('click'));

    expect(searchInput.value).toBe('');
  });
});
