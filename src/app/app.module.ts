import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LayoutModule } from './components/templates/layout/layout.module';
import { ApiModule, Configuration } from 'src/apis/spacex';
import { environment } from 'src/environments/environment';
import { SharedModule } from 'src/app/shared/shared.module';

const ApiConfigurationFactory = () => {
  return new Configuration({
    apiKeys: {},
    // withCredentials: true,
  });
};

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    ApiModule.forRoot(ApiConfigurationFactory),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
