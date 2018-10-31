import { Directive, OnInit } from '@angular/core';

// import * as L from 'leaflet';
import 'leaflet-edgebuffer';

import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';

@Directive({
	selector: '[leafletEdgeBuffer]'
})
export class LeafletEdgeBufferDirective
	implements OnInit {

	leafletDirective: LeafletDirectiveWrapper;

	constructor(leafletDirective: LeafletDirective) {
		this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
	}

	ngOnInit() {
		this.leafletDirective.init();
	}
}
