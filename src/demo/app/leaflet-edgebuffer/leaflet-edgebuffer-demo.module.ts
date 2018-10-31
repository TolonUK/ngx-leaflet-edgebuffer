import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { LeafletEdgeBufferModule } from '../../../leaflet-edgebuffer/leaflet-edgebuffer.module';

import { LeafletEdgeBufferDemoComponent } from './leaflet-edgebuffer-demo.component';
import { LeafletEdgeBufferCoreDemoComponent } from './core/core-demo.component';
import { LeafletNoEdgeBufferDemoComponent } from './no-edgebuffer/no-edgebuffer-demo.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,

		LeafletModule,
		LeafletEdgeBufferModule
	],
	declarations: [
		LeafletEdgeBufferDemoComponent,
		LeafletEdgeBufferCoreDemoComponent,
		LeafletNoEdgeBufferDemoComponent
	],
	exports: [
		LeafletEdgeBufferDemoComponent
	],
	bootstrap: [ LeafletEdgeBufferDemoComponent ],
	providers: [ ]
})
export class LeafletEdgeBufferDemoModule { }
