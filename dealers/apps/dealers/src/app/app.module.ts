import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, EntityDataModule.forRoot(entityConfig)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
