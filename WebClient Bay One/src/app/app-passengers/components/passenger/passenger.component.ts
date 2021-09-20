import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddRoomComponent } from '../../modal/add-room/add-room.component';
import { PassengerModel } from '../../models/passenger.model';
import { RoomService } from '../../services/passenger.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class RoomComponent implements OnInit {
  constructor(private dialog:MatDialog, private roomService:RoomService) { }

  ngOnInit(): void {
  }

  addRoomModal() {
    this.dialog.open(AddRoomComponent, {
      minWidth: "500px",
      panelClass: "nopadding-modal"
    });
  }
}
