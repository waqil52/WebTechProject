import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PassengerModel } from '../models/passenger.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor (private http: HttpClient) { }

  createRoom(payload: any) {
    return this.http.post("passenger", payload);
  }

  getAllroom() {
    return this.http.get<PassengerModel[]>("passenger");
  }

  deleteRoom(id: number) {
    return this.http.delete(`passenger/${id}`);
  }

  editRoom(id: number, payload: any) {
    return this.http.put(`passenger/${id}`, payload);
  }

}
