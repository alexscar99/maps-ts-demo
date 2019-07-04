// Instructions to every other class on how they
// can be an argument to 'addMarker'
export interface MapItem {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class Map {
    private googleMap: google.maps.Map;

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(item: MapItem): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: item.location.lat,
                lng: item.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: item.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
