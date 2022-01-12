import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCarouselSectionComponent } from './logo-carousel-section.component';

describe('LogoCarouselSectionComponent', () => {
  let component: LogoCarouselSectionComponent;
  let fixture: ComponentFixture<LogoCarouselSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoCarouselSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoCarouselSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
