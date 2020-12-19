import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LocalInstanceComponent } from './local-instance/local-instance.component';
import { BotSetupComponent } from './bot-setup/bot-setup.component';
import { BotDeployComponent } from './bot-deploy/bot-deploy.component';
import { BotConfigComponent } from './bot-config/bot-config.component';
import { AutoCommandComponent } from './auto-command/auto-command.component';
import { ManCommandComponent } from './man-command/man-command.component';
import { DepCommandComponent } from './dep-command/dep-command.component';
import { ContributeComponent } from './contribute/contribute.component';
import { NewCommandComponent } from './new-command/new-command.component';
import { TroubleComponent } from './trouble/trouble.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ArtContribsComponent } from './art-contribs/art-contribs.component';
import { ArtComponent } from './art/art.component';
import { BiographyComponent } from './biography/biography.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    LocalInstanceComponent,
    BotSetupComponent,
    BotDeployComponent,
    BotConfigComponent,
    AutoCommandComponent,
    ManCommandComponent,
    DepCommandComponent,
    ContributeComponent,
    NewCommandComponent,
    TroubleComponent,
    PrivacyComponent,
    ArtContribsComponent,
    ArtComponent,
    BiographyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
