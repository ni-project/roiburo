
let mapMarker = require('@/assets/images/icons/map-marker.svg');

export const DATA_MAP = {
    coords: [55.755864, 37.617698],
    zoom: 8,
    behaviors: ['drag'],
    controls: ['zoomControl'],
    markers: [
        {
            coords: [55.8200, 37.6100],
            options: {
                iconLayout: 'default#image',
                iconImageHref: mapMarker,
                iconImageSize: [56, 64],
                iconImageOffset: [-28, -64],
            }
        }
    ]
};
