import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PassengerModel } from 'src/app/app-passengers/models/passenger.model';
import { CabinModel } from 'src/app/app-cabins/models/room.model';
import { LocationModel } from 'src/app/app-locations/models/setting.model';
import { BookingsModel } from '../models/bookings.model';

@Injectable({
  providedIn: 'root'
})
export class BookingdataService {

  constructor (private http: HttpClient) { }

  getBookings() {
    return this.http.get<BookingsModel[]>("booking");
  }

  createBooking(payload: any) {
    return this.http.post("booking", payload);
  }

  deleteBooking(id: number) {
    return this.http.delete(`booking/${id}`);
  }

  getAllroom() {
    return this.http.get<CabinModel[]>("room/all");
  }

  getRoom(id: number) {
    return this.http.get<CabinModel>(`room/${id}`);
  }

  updateBooking(payload: any,bookingId:number) {
    return this.http.put(`booking/${bookingId}`,payload)
  }
  getAllcabin() {
    return this.http.get<CabinModel[]>("cabin");
  }

  addGuest(payload:any) {
    return this.http.post("passenger", payload);
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
