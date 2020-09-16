import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ClarityModule } from '@clr/angular';

import { CategoriesComponent } from './categories.component';
import { declarations } from '../../__fixtures__/layout';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ClarityModule],
        declarations: [...declarations, CategoriesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    const element: HTMLElement = fixture.debugElement.nativeElement;
    expect(element.querySelector('p').textContent).toBe('categories works!');
  });
});
