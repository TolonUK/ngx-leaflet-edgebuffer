import { OnInit } from '@angular/core';
import 'leaflet-edgebuffer';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
export declare class LeafletEdgeBufferDirective implements OnInit {
    leafletDirective: LeafletDirectiveWrapper;
    constructor(leafletDirective: LeafletDirective);
    ngOnInit(): void;
}
