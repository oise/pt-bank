import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersComponent } from './transfers.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TransfersComponent', () => {
  let component: TransfersComponent;
  let fixture: ComponentFixture<TransfersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TransfersComponent], imports: [ReactiveFormsModule] });
    fixture = TestBed.createComponent(TransfersComponent);
    component = fixture.componentInstance;
  });

  describe('TransfersComponent (minimal)', () => {
    it('should be created', () => {
      expect(component).toBeDefined();
    });
  });
});
