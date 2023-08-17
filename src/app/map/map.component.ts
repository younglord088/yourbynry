// map.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnChanges {
  @Input() address: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.address.currentValue) {
      this.showMap(changes.address.currentValue);
    }
  }

  showMap(address: string) {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 }, // Default center
      zoom: 10,
    });

    // Geocode the address and place a marker
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map,
        });
        map.setCenter(results[0].geometry.location);
      }
    });
  }
}
