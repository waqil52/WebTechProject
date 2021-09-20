import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CabinModel } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  roomForm: FormGroup;
  room: CabinModel;
  headerTitle = "Add Cabin"
  constructor (
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<AddRoomComponent>,
    private formBuilder: FormBuilder,
    private roomService:RoomService) {
      this.room = data;
     }

  ngOnInit(): void {
    this.headerTitle = this.room ? "Edit Cabin" : "Add Cabin";
    this.roomForm = this.createForm()
    console.log(this.room)
  }

  createForm() {
    return this.formBuilder.group({
      CabinNumber: [this.room?this.room.cabinNumber:'', Validators.required],
      Capacity: [this.room ? this.room.capacity : 1, Validators.compose([Validators.required,Validators.min(1)])],
      Fare:[this.room?this.room.fare:'',Validators.compose([Validators.required,Validators.min(1)])]
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
      this.roomService.editRoom(this.room.id, result).subscribe(res => {
        console.log(res);
        this.close();
      })
    } else {
      this.roomService.createRoom(result).subscribe(res => {
        console.log(res);
        this.close(res);
      })
    }

  }
}
