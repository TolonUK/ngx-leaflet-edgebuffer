import { OnInit } from '@angular/core';
import 'leaflet-edgebuffer';
import { LeafletEdgeBufferOptions } from './leaflet-edgebuffer.options';
import { LeafletDirective, LeafletDirectiveWrapper } from '@asymmetrik/ngx-leaflet';
export declare class LeafletEdgeBufferDirective implements OnInit {
    leafletDirective: LeafletDirectiveWrapper;
    edgeBufferOptions: LeafletEdgeBufferOptions;
    constructor(leafletDirective: LeafletDirective);
    ngOnInit(): void;
}
