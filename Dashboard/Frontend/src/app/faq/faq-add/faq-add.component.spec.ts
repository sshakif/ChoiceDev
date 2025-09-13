import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAddComponent } from './faq-add.component';

describe('FaqAddComponent', () => {
  let component: FaqAddComponent;
  let fixture: ComponentFixture<FaqAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
