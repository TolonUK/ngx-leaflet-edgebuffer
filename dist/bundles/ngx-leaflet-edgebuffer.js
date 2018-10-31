/*! ngx-leaflet-edgebuffer - 1.0.6 - Copyright Alex Paterson, 2018 - All Rights Reserved. + */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('leaflet-edgebuffer'), require('@asymmetrik/ngx-leaflet')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'leaflet-edgebuffer', '@asymmetrik/ngx-leaflet'], factory) :
	(factory((global.ngxLeafletEdgeBuffer = {}),global.ng.core,null,global.ngxLeaflet));
}(this, (function (exports,core,leafletEdgebuffer,ngxLeaflet) { 'use strict';

// import * as L from 'leaflet';
var LeafletEdgeBufferDirective = /** @class */ (function () {
    function LeafletEdgeBufferDirective(leafletDirective) {
        this.leafletDirective = new ngxLeaflet.LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletEdgeBufferDirective.prototype.ngOnInit = function () {
        this.leafletDirective.init();
    };
    LeafletEdgeBufferDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[leafletEdgeBuffer]'
                },] },
    ];
    /** @nocollapse */
    LeafletEdgeBufferDirective.ctorParameters = function () { return [
        { type: ngxLeaflet.LeafletDirective, },
    ]; };
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
