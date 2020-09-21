/* https://github.com/angular/angular/blob/master/aio/content/examples/testing/src/testing/router-link-directive-stub.ts#L11-L19 */
import {
  Component,
  NgModule,
  Directive,
  HostListener,
  Input,
} from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ClarityModule, ClrIconModule } from '@clr/angular';

import { action } from '@storybook/addon-actions';

@Component({
  template: '',
})
class RouterLinkStubComponent {}

@Directive({
  selector: '[routerLink]', // tslint:disable-line:directive-selector
})
class RouterLinkStubDirective {
  @Input('routerLink') linkParams: string;
  @HostListener('click') onClick() {
    action('routerLink')(this.linkParams);
    return true;
  }
}

@NgModule({
  declarations: [RouterLinkStubComponent, RouterLinkStubDirective],
})
class RouterStubsModule {}

export const imports = [
  HttpClientTestingModule,
  RouterModule,
  RouterTestingModule.withRoutes([
    { path: '**', component: RouterLinkStubComponent },
  ]),
  ClarityModule,
  ClrIconModule,
];

export const declarations = [RouterLinkStubComponent, RouterLinkStubDirective];
