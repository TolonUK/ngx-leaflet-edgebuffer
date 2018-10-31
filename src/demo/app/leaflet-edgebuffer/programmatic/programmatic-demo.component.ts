import { Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
	selector: 'leafletEdgeBufferProgrammaticDemo',
	templateUrl: './programmatic-demo.component.html'
})
export class LeafletEdgeBufferProgrammaticDemoComponent {

	center = [ 44.352581, -68.225104 ];

	options = {
		layers: [
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
		],
		zoom: 8,
		center: L.latLng({ lat: this.center[0], lng: this.center[1] })
	};

	edgeBufferOptions = {
		edgeBufferTiles: 1
	};

	eventHandler = (msg: string, event: any) => {
		// tslint:disable-next-line:no-console
		console.log({ msg, event });
	}

}
