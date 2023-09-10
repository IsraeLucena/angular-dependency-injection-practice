import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionalComponent } from './optional/optional.component';
import { SelfComponent } from './self/self.component';
import { SelfOptionalComponent } from './self-optional/self-optional.component';
import { SkipSelfOptionalComponent } from './skip-self-optional/skip-self-optional.component';
import { HostComponent } from './host/host.component';
import { HostOptionalComponent } from './host-optional/host-optional.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OptionalComponent,
    SelfComponent,
    SelfOptionalComponent,
    SkipSelfOptionalComponent,
    HostComponent,
    HostOptionalComponent,
    ParentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
