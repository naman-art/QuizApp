import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {
    path: 'home/contact',
    component: ContactComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'quiz',
    component: QuizComponent,
    pathMatch: 'full',
  },
  {
    path: 'home/quiz',
    component: QuizComponent,
    pathMatch: 'full',
  },
  {
    path: 'instr',
    component: InstructionsComponent,
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
