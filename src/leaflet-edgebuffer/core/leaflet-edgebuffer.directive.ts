import { Directive, Input, OnInit } from '@angular/core';

// import * as L from 'leaflet';
import 'leaflet-edgebuffer';
import {LeafletEdgeBufferOptions} from './leaflet-edgebuffer.options';

import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';

@Directive({
	selector: '[leafletEdgeBuffer]'
})
export class LeafletEdgeBufferDirective
	implements OnInit {

	leafletDirective: LeafletDirectiveWrapper;

	// Filter Control
	// filterControl: L.Control.FilterControl;
	// featureGroup: L.FeatureGroup;

	// Constructor options for Filter Control
	@Input('leafletEdgeBufferOptions') edgeBufferOptions: LeafletEdgeBufferOptions = null;

	// Filter state
	// @Input('leafletEdgeBufferState') filterState: any;

	// Event Emitter for filter state change events
	// @Output('leafletEdgeBufferStateChange') filterStateChange = new EventEmitter<any>();

	// Event for when the filter control is created and ready
	// @Output('leafletEdgeBufferControlReady') controlReady = new EventEmitter<L.Control.FilterControl>();

	constructor(leafletDirective: LeafletDirective) {
		this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
	}

	ngOnInit() {

		this.leafletDirective.init();

		// Initialize the draw options (in case they weren't provided)
		/*this.filterOptions = this.initializeFilterOptions(this.filterOptions);

		// Create the control
		this.filterControl =  L.control.filter(this.filterOptions);

		// Pull out the feature group for convenience
		this.featureGroup = this.filterOptions.featureGroup;

		// Add the control to the map
		this.filterControl.addTo(this.leafletDirective.getMap());

		// Register the main handler for events coming from the draw plugin
		this.leafletDirective.getMap().on('filter:filter', (e: any) => {
			setTimeout(() => { this.filterStateChange.emit(e.geo); });
		});

		// Set the initial filter state
		this.filterControl.setFilter(this.filterState);

		// Fire control ready event
		this.controlReady.emit(this.filterControl);*/
	}

	/*initializeFilterOptions(options: L.Control.FilterControlOptions) {

		// Ensure the options have a featureGroup
		if (null == options) {
			options = {
				featureGroup: null
			};
		}
		if (null == options.featureGroup) {
			// No feature group was provided, so we're going to add it ourselves
			options.featureGroup = L.featureGroup();
			this.leafletDirective.getMap().addLayer(options.featureGroup);
		}

		return options;
	}*/
}
