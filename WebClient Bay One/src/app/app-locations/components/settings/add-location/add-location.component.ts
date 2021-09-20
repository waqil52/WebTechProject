import { SettingService } from './../../../services/setting.service';
import { LocationModel } from './../../../models/setting.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddRoomComponent } from 'src/app/app-cabins/modal/add-room/add-room.component';
import { CabinModel } from 'src/app/app-cabins/models/room.model';
import { RoomService } from 'src/app/app-cabins/services/room.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  roomForm: FormGroup;
  room: LocationModel;
  headerTitle = "Add Location"
  constructor (
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<AddRoomComponent>,
    private formBuilder: FormBuilder,
    private roomService:SettingService) {
      this.room = data;
     }

  ngOnInit(): void {
    this.headerTitle = this.room ? "Edit location" : "Add location";
    this.roomForm = this.createForm()
    console.log(this.room)
  }

  createForm() {
    return this.formBuilder.group({
      name: [this.room?this.room.name:'', Validators.required],
    })
  }

  close(result:any=null) {
    this.dialogRef.close(result);
  }

  onSubmit() {
    if (!this.roomForm.valid) {
      return;
    }

    const result = Object.assign({}, this.roomForm.value);

    console.log(result);
    if (this.room) {
      this.roomService.editLocation(this.room.id, result).subscribe(res => {
        console.log(res);
        this.close();
      })
    } else {
      this.roomService.createLocation(result).subscribe(res => {
        console.log(res);
        this.close(res);
      })
    }

  }
}
