import { Component } from '@angular/core';

@Component({
	selector: 'leafletEdgeBufferDemo',
	templateUrl: './leaflet-edgebuffer-demo.component.html'
})
export class LeafletEdgeBufferDemoComponent {
	showDemo = false;

	ngOnInit() {

		// Primarily for debugging
		setTimeout(() => {
			this.showDemo = true;
		}, 1000);

	}
}
