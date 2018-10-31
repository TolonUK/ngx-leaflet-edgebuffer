import { Directive } from '@angular/core';
// import * as L from 'leaflet';
import 'leaflet-edgebuffer';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
var LeafletEdgeBufferDirective = /** @class */ (function () {
    function LeafletEdgeBufferDirective(leafletDirective) {
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletEdgeBufferDirective.prototype.ngOnInit = function () {
        this.leafletDirective.init();
    };
    LeafletEdgeBufferDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[leafletEdgeBuffer]'
                },] },
    ];
    /** @nocollapse */
    LeafletEdgeBufferDirective.ctorParameters = function () { return [
        { type: LeafletDirective, },
    ]; };
    return LeafletEdgeBufferDirective;
}());
export { LeafletEdgeBufferDirective };
//# sourceMappingURL=leaflet-edgebuffer.directive.js.map