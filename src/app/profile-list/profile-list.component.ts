import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent {
  profiles = [
    {
      name: 'John Doe',
      description: 'Software Engineer',
      address: '123 Main St',
    },
    {
      name: 'Jane Doe',
      description: 'Software Engineer',
      address: '123 Main St',
    },
    {
      name: 'John Smith',
      description: 'Software Engineer',
      address: '123 Main St',
    },
    {
      name: 'Jane Smith',
      description: 'Software Engineer',
      address: '123 Main St',
    },
    {
      name: 'John Doe',
      description: 'Software Engineer',
      address: '123 Main St',
    },
    {
      name: 'Jane Doe',
      description: 'Software Engineer',
      address: '123 Main St',
    },
  ];
  showMap(address: string) {
    window.open(`https://www.google.com/maps/place/${address}`, '_blank');
  }
}
