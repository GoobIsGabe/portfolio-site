import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FullStackComponent } from './pages/full-stack/full-stack.component';
import { PhotographerComponent } from './pages/other-works/photographer/photographer.component';
import { ContentCreatorComponent } from './pages/content-creator/content-creator.component';
import { AccentsComponent } from './components/accents/accents.component';
import { MainModalComponent } from './components/main-modal/main-modal.component';
import { AboutComponent } from './pages/about/about.component';
import { TellMoreButtonComponent } from './components/tell-more-button/tell-more-button.component';
import { ProjectsComponent } from './pages/full-stack/projects/projects.component';
import { CommaSeparatorPipe } from './pipes/comma-separator.pipe';
import { NavHelpComponent } from './components/nav-help/nav-help.component';
import { OtherWorksComponent } from './pages/other-works/other-works.component';
import { GraphicsComponent } from './pages/other-works/graphics/graphics.component';
import { SpreadsheetComponent } from './pages/other-works/spreadsheet/spreadsheet.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    FullStackComponent,
    PhotographerComponent,
    ContentCreatorComponent,
    AccentsComponent,
    MainModalComponent,
    AboutComponent,
    TellMoreButtonComponent,
    ProjectsComponent,
    CommaSeparatorPipe,
    NavHelpComponent,
    OtherWorksComponent,
    GraphicsComponent,
    SpreadsheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
