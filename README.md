# ngx-leaflet-edgebuffer

[![Build Status][travis-image]][travis-url]

[travis-url]: https://travis-ci.org/TolonUK/ngx-leaflet-edgebuffer/
[travis-image]: https://travis-ci.org/TolonUK/ngx-leaflet-edgebuffer.svg


> Leaflet EdgeBuffer package for Angular 2+
> Provides Angular 2+ integration with the EdgeBuffer plugin for Leaflet


## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)
- [Credits](#credits)


## Install 
Install the package and its peer dependencies via npm:
```
npm install font-awesome
npm install leaflet
npm install leaflet-edgebuffer
npm install @asymmetrik/ngx-leaflet
npm install ngx-leaflet-edgebuffer
```

If you want to run the demo, clone the repository, perform an ```npm install```, ```gulp dev``` and then go to http://localhost:9000/src/demo/index.html


## Usage
This component extends the [Angular 2 Leaflet component](https://github.com/Asymmetrik/ngx-leaflet) by adding directives for activating and configuring the [EdgeBuffer plugin for Leaflet](https://github.com/TolonUK/Leaflet.EdgeBuffer).

Use the ```leaflet-edgebuffer``` attribute directive in conjunction with the ```leaflet``` attribute directive to activate a map and enable the filter control.

```html
<div leaflet style="height: 400px;"
     leafletEdgeBuffer
     [leafletOptions]="options">
```

## API

### leafletEdgeBuffer
Attribute directive that activates the Leaflet filter plugin.

### Options
Control the number of tiles to buffer at each map edge by using the `edgeBufferTiles` property on your L.GridLayer-based layer (e.g. a TileLayer).

Example:
```js
	options = {
		layers: [
			L.tileLayer(
				'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					maxZoom: 18,
					attribution: 'Open Street Map',
					edgeBufferTiles: 1
				}
			)
		],
		zoom: 13,
		center: L.latLng({lat: 55.43, lng: -4.636})
	};
```

## License
See LICENSE in repository for details.

## Credits
* [Leaflet](http://leafletjs.com/) Is an awesome mapping package
* [Angular 2+ Leaflet component](https://github.com/Asymmetrik/ngx-leaflet) by Asymmetrik
