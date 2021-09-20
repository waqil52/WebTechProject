import { LocationModel } from 'src/app/app-locations/models/setting.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor (private http: HttpClient) { }

  createLocation(payload: any) {
    return this.http.post("location", payload);
  }

  getAllLocation() {
    return this.http.get<LocationModel[]>("location");
  }

  deleteLocation(id: number) {
    return this.http.delete(`location/${id}`);
  }

  editLocation(id: number, payload: any) {
    return this.http.put(`location/${id}`, payload);
  }
}
