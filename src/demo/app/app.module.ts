import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeafletEdgeBufferDemoModule } from './leaflet-edgebuffer/leaflet-edgebuffer-demo.module';


@NgModule({
	imports: [
		BrowserModule,
		LeafletEdgeBufferDemoModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ],
	providers: [ ]
})
export class AppModule { }
