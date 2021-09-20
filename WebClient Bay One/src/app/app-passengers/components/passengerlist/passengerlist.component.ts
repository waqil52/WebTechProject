import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BookingsModel } from 'src/app/app-dashboard/models/bookings.model';
import { AddRoomComponent } from '../../modal/add-room/add-room.component';
// import { RoomBookingDetailComponent } from '../../modal/room-booking-detail/room-booking-detail.component';
import { PassengerModel } from '../../models/passenger.model';
import { RoomService } from '../../services/passenger.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './passengerlist.component.html',
  styleUrls: ['./passengerlist.component.scss']
})
export class RoomlistComponent implements OnInit {
  dataSource: MatTableDataSource<PassengerModel>;
  data: PassengerModel[];
  displayedColumns:string[] = ["id","name","gender", "edit", "delete"]
  constructor(private roomService:RoomService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getRoomDate()
  }

  getRoomDate() {
    this.roomService.getAllroom().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.data = res;
    })
  }

  deleteRoom(room: PassengerModel) {
    console.log(room);
    this.roomService.deleteRoom(room.id).subscribe(res => {
      console.log("Deleted");
      let index = this.data.indexOf(room);
      this.data.splice(index, 1);
      this.dataSource.data = this.data;
    })
  }

  editRoom(room:PassengerModel) {
    console.log(room);
    this.dialog.open(AddRoomComponent, {
      data: room,
      panelClass:"nopadding-modal"
    })
  }

  // viewDetails(room:PassengerModel) {
  //   this.dialog.open(RoomBookingDetailComponent, {
  //     data: room,
  //     width:"550px",
  //     panelClass:"nopadding-modal"
  //   })
  // }
}
