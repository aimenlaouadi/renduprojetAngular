import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageerreurComponent } from './pageerreur.component';

describe('PageerreurComponent', () => {
  let component: PageerreurComponent;
  let fixture: ComponentFixture<PageerreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageerreurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageerreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
