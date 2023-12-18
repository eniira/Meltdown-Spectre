import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeltdownComponent } from './pages/meltdown/meltdown.component';
import { InstructionComponent } from './pages/instruction/instruction.component';
import { PipelineComponent } from './pages/pipeline/pipeline.component';
import { ProbeArrayComponent } from './pages/probe-array/probe-array.component';
import { CacheComponent } from './pages/cache/cache.component';
import { SpectreComponent } from './pages/spectre/spectre.component';
import { CodigoComponent } from './pages/codigo/codigo.component';
import { Cache1Component } from './pages/cache1/cache1.component';
import { Array2Component } from './pages/array2/array2.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MeltdownComponent,
    InstructionComponent,
    PipelineComponent,
    ProbeArrayComponent,
    CacheComponent,
    SpectreComponent,
    CodigoComponent,
    Cache1Component,
    Array2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
