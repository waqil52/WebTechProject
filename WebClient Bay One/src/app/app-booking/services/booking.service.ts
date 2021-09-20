import { PassengerModel } from './../../app-passengers/models/passenger.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CabinModel } from 'src/app/app-cabins/models/room.model';
import { LocationModel } from 'src/app/app-locations/models/setting.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor (private http: HttpClient) { }

  getAllcabin() {
    return this.http.get<CabinModel[]>("cabin");
  }

  addGuest(payload:any) {
    return this.http.post("passenger", payload);
  }

  createBooking(payload: any) {
    return this.http.post("booking", payload);
  }

  getSettings() {
    return this.http.get<LocationModel>("location");
  }

  getAllLocation() {
    return this.http.get<LocationModel[]>("location");
  }

  getAllPassenger() {
    return this.http.get<PassengerModel[]>("passenger");
  }
}
