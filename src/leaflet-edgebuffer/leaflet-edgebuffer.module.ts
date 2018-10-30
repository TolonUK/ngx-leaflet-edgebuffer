import { ModuleWithProviders, NgModule } from '@angular/core';

import { LeafletEdgeBufferDirective } from './core/leaflet-edgebuffer.directive';

@NgModule({
	exports: [
		LeafletEdgeBufferDirective
	],
	declarations: [
		LeafletEdgeBufferDirective
	]
})
export class LeafletEdgeBufferModule {

	static forRoot(): ModuleWithProviders {
		return { ngModule: LeafletEdgeBufferModule, providers: [] };
	}

}
