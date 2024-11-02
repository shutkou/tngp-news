import { Routes } from '@angular/router';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

export const routes: Routes = [
  {path: '', component: NewsPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'about', component: AboutPageComponent},
];
