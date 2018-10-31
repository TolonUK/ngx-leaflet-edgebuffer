import { Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
	selector: 'leafletEdgeBufferCoreDemo',
	templateUrl: './core-demo.component.html'
})
export class LeafletEdgeBufferCoreDemoComponent {

	options = {
		layers: [
			L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
		],
		zoom: 5,
		center: L.latLng({ lat: 46.879966, lng: -121.726909 })
	};

	featureGroup = L.featureGroup();

	edgeBufferOptions = {
		edgeBufferTiles: 1
	};

	filterState: any;

	eventHandler = (msg: string, event: any) => {
		// tslint:disable-next-line:no-console
		console.log({ msg, event });
	}

}
