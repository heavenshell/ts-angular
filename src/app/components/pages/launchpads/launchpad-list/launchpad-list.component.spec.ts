import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutModule } from 'src/app/components/templates/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LaunchpadListComponent } from './launchpad-list.component';

describe('LaunchpadListComponent', () => {
  let component: LaunchpadListComponent;
  let fixture: ComponentFixture<LaunchpadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        LayoutModule,
      ],
      declarations: [LaunchpadListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
