/*! ngx-leaflet-edgebuffer - 1.0.6 - Copyright Alex Paterson, 2018 - All Rights Reserved. + */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('leaflet-edgebuffer'), require('@asymmetrik/ngx-leaflet')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'leaflet-edgebuffer', '@asymmetrik/ngx-leaflet'], factory) :
	(factory((global.ngxLeafletEdgeBuffer = {}),global.ng.core,null,global.ngxLeaflet));
}(this, (function (exports,core,leafletEdgebuffer,ngxLeaflet) { 'use strict';

// import * as L from 'leaflet';
var LeafletEdgeBufferDirective = /** @class */ (function () {
    // Filter state
    // @Input('leafletEdgeBufferState') filterState: any;
    // Event Emitter for filter state change events
    // @Output('leafletEdgeBufferStateChange') filterStateChange = new EventEmitter<any>();
    // Event for when the filter control is created and ready
    // @Output('leafletEdgeBufferControlReady') controlReady = new EventEmitter<L.Control.FilterControl>();
    function LeafletEdgeBufferDirective(leafletDirective) {
        // Filter Control
        // filterControl: L.Control.FilterControl;
        // featureGroup: L.FeatureGroup;
        // Constructor options for Filter Control
        this.edgeBufferOptions = null;
        this.leafletDirective = new ngxLeaflet.LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletEdgeBufferDirective.prototype.ngOnInit = function () {
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
    };
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
    LeafletEdgeBufferDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[leafletEdgeBuffer]'
                },] },
    ];
    /** @nocollapse */
    LeafletEdgeBufferDirective.ctorParameters = function () { return [
        { type: ngxLeaflet.LeafletDirective, },
    ]; };
    LeafletEdgeBufferDirective.propDecorators = {
        'edgeBufferOptions': [{ type: core.Input, args: ['leafletEdgeBufferOptions',] },],
    };
    return LeafletEdgeBufferDirective;
}());

var LeafletEdgeBufferModule = /** @class */ (function () {
    function LeafletEdgeBufferModule() {
    }
    LeafletEdgeBufferModule.forRoot = function () {
        return { ngModule: LeafletEdgeBufferModule, providers: [] };
    };
    LeafletEdgeBufferModule.decorators = [
        { type: core.NgModule, args: [{
                    exports: [
                        LeafletEdgeBufferDirective
                    ],
                    declarations: [
                        LeafletEdgeBufferDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    LeafletEdgeBufferModule.ctorParameters = function () { return []; };
    return LeafletEdgeBufferModule;
}());

exports.LeafletEdgeBufferModule = LeafletEdgeBufferModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-leaflet-edgebuffer.js.map
