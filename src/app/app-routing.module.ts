import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeltdownComponent } from './pages/meltdown/meltdown.component';
import { SpectreComponent } from './pages/spectre/spectre.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meltdown', component: MeltdownComponent },
  { path: 'spectre', component: SpectreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
