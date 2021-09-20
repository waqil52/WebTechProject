import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomDetailModel } from '../models/room-detail.model';
import { CabinModel } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor (private http: HttpClient) { }

  createRoom(payload: any) {
    return this.http.post("cabin", payload);
  }

  getAllroom() {
    return this.http.get<CabinModel[]>("cabin");
  }

  deleteRoom(id: number) {
    return this.http.delete(`cabin/${id}`);
  }

  editRoom(id: number, payload: any) {
    return this.http.put(`cabin/${id}`, payload);
  }

  getRoomBookingDetails(roomId:number) {
    return this.http.get<RoomDetailModel[]>(`room/roominfo/${roomId}`);
  }
}
