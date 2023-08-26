import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavbarComponent } from './sidenavbar.component';

describe('SidenavbarComponent', () => {
  let component: SidenavbarComponent;
  let fixture: ComponentFixture<SidenavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidenavbarComponent]
    });
    fixture = TestBed.createComponent(SidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
