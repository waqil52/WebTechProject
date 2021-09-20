import { LocationModel } from 'src/app/app-locations/models/setting.model';
import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BookingsModel } from 'src/app/app-dashboard/models/bookings.model';
import { AddLocationComponent } from '../settings/add-location/add-location.component';
// import { AddRoomComponent } from '../../modal/add-room/add-room.component';
// import { RoomBookingDetailComponent } from '../../modal/room-booking-detail/room-booking-detail.component';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  dataSource: MatTableDataSource<LocationModel>;
  data: LocationModel[];
  displayedColumns:string[] = ["Id", "Name", "edit", "delete"]
  constructor(private settingService:SettingService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getRoomDate()
  }

  getRoomDate() {
    this.settingService.getAllLocation().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.data = res;
    })
  }

  deleteRoom(room: LocationModel) {
    console.log(room);
    this.settingService.deleteLocation(room.id).subscribe(res => {
      console.log("Deleted");
      let index = this.data.indexOf(room);
      this.data.splice(index, 1);
      this.dataSource.data = this.data;
    })
  }

  editRoom(room:LocationModel) {
    console.log(room);
    this.dialog.open(AddLocationComponent, {
      data: room,
      panelClass:"nopadding-modal"
    })
  }

  // viewDetails(room:LocationModel) {
  //   this.dialog.open(RoomBookingDetailComponent, {
  //     data: room,
  //     width:"550px",
  //     panelClass:"nopadding-modal"
  //   })
  // }
}
