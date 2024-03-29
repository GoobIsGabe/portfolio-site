import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotographerComponent } from './pages/other-works/photographer/photographer.component';
import { FullStackComponent } from './pages/full-stack/full-stack.component';
import { ContentCreatorComponent } from './pages/content-creator/content-creator.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/full-stack/projects/projects.component';
import { OtherWorksComponent } from './pages/other-works/other-works.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch:'full'},
  {path: 'development', component: FullStackComponent},
  {path: 'development/works', component: ProjectsComponent},
  {path: 'content', component: ContentCreatorComponent },
  {path: 'home', component: WelcomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'other', component: OtherWorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
