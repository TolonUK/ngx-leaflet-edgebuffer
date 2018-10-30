import { NgModule } from '@angular/core';
import { LeafletEdgeBufferDirective } from './core/leaflet-edgebuffer.directive';
var LeafletEdgeBufferModule = /** @class */ (function () {
    function LeafletEdgeBufferModule() {
    }
    LeafletEdgeBufferModule.forRoot = function () {
        return { ngModule: LeafletEdgeBufferModule, providers: [] };
    };
    LeafletEdgeBufferModule.decorators = [
        { type: NgModule, args: [{
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
export { LeafletEdgeBufferModule };
//# sourceMappingURL=leaflet-edgebuffer.module.js.map