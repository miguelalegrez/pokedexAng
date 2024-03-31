import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCodeComponent } from './class-code.component';

describe('ClassCodeComponent', () => {
  let component: ClassCodeComponent;
  let fixture: ComponentFixture<ClassCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
