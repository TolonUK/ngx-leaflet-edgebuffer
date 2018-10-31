import { Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
	selector: 'leafletNoEdgeBufferDemo',
	templateUrl: './no-edgebuffer-demo.component.html'
})
export class LeafletNoEdgeBufferDemoComponent {
	options = {
		layers: [
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map', edgeBufferTiles: 0 })
		],
		zoom: 13,
		center: L.latLng({lat: 54.535151, lng: -1.058028})
	};

	eventHandler = (msg: string, event: any) => {
		// tslint:disable-next-line:no-console
		console.log({ msg, event });
	}
}
