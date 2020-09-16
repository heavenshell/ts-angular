import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { LayoutComponent } from './layout.component';
import { GithubComponent } from '../../atoms/github/github.component';
import { TwitterComponent } from '../../atoms/twitter/twitter.component';
import { FooterComponent } from '../../organisms/footer/footer.component';
import { HeaderComponent } from '../../organisms/header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    GithubComponent,
    TwitterComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [ClarityModule],
  exports: [
    LayoutComponent,
    GithubComponent,
    TwitterComponent,
    FooterComponent,
    HeaderComponent,
  ],
})
export class LayoutModule {}
