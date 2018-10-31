import { Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
	selector: 'leafletEdgeBufferCoreDemo',
	templateUrl: './core-demo.component.html'
})
export class LeafletEdgeBufferCoreDemoComponent {
	options = {
		layers: [
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map', edgeBufferTiles: 1 })
		],
		zoom: 13,
		center: L.latLng({lat: 55.43, lng: -4.636})
	};

	eventHandler = (msg: string, event: any) => {
		// tslint:disable-next-line:no-console
		console.log({ msg, event });
	}
}
