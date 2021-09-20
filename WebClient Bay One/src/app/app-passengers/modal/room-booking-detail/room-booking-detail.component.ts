import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
// import { RoomDetailModel } from '../../models/room-detail.model';
import { PassengerModel } from '../../models/passenger.model';
import { RoomService } from '../../services/passenger.service';

@Component({
  selector: 'app-room-booking-detail',
  templateUrl: './room-booking-detail.component.html',
  styleUrls: ['./room-booking-detail.component.scss']
})
export class RoomBookingDetailComponent implements OnInit {
  dataSource: MatTableDataSource<PassengerModel>;
  room: PassengerModel;
  displayedColumns:string[]=["name","gender"]
  constructor (@Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<RoomBookingDetailComponent>,
    private roomService: RoomService) {
    this.room = data;
    }

  ngOnInit(): void {
    // this.getRoomDetails(this.room.id);
  }

  close() {
    this.dialogRef.close();
  }

  // getRoomDetails(roomId: number) {
  //   this.roomService.getRoomBookingDetails(roomId).subscribe(res => {
  //     console.log(res)
  //     this.dataSource = new MatTableDataSource(res);
  //   })
  // }
}
