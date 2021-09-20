import { BookingdataService } from './../../services/bookingdata.service';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookingService } from 'src/app/app-booking/services/booking.service';
import { PassengerModel } from 'src/app/app-passengers/models/passenger.model';
import { CabinModel } from 'src/app/app-cabins/models/room.model';
import { LocationModel } from 'src/app/app-locations/models/setting.model';
import { ConfirmationStatusService } from 'src/app/shared-modules/confirmation-status-modal/services/confirmation-status.service';
import { BookingsModel } from '../../models/bookings.model';

@Component({
  selector: 'app-editbooking',
  templateUrl: './editbooking.component.html',
  styleUrls: ['./editbooking.component.scss']
})
export class EditbookingComponent implements OnInit {
  isNew: boolean = false;
  guestList: Observable<PassengerModel[]>;
  roomList: Observable<CabinModel[]>;
  locationList$: Observable<LocationModel[]>;

  booking : BookingsModel;


  bookedByGuest: any;
  setting: LocationModel;

  rentCount: number = 0;

  bookingForm:FormGroup
  constructor (@Inject(MAT_DIALOG_DATA) data,private bookingService: BookingdataService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private modalService: ConfirmationStatusService,
    private router:Router) {
      this.booking = data;
      console.log(this.booking)

  }

  ngOnInit(): void {
    this.getSettings();
    this.roomList = this.getRooms();
    this.guestList = this.getAllPassenger()
    this.locationList$ = this.getAllLocations();
    this.bookingForm = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      departureTime: ['', Validators.required],
      departureFrom: [''],
      arrivalAt: [''],

      // comments: [''],
      passengerId: [''],
      cabinId: [''],
      arrivalLocId: ['', Validators.required],
      depLocId: ['', Validators.required],
      needToArriveAt:[""]
      // paidAmount:[0,Validators.min(0)]
    })
  }

  getRooms() {
    return this.bookingService.getAllcabin();
  }

  getAllLocations(){
    return this.bookingService.getAllLocation();
  }

  getAllPassenger(){
    return this.bookingService.getAllPassenger();
  }

  // addGuestModal() {
  //   let dialogref = this.dialog.open(AddguestComponent, {
  //     panelClass: "nopadding-modal"
  //   });
  //   dialogref.afterClosed().subscribe(res => {
  //     if (res) {
  //       console.log(res);
  //       this.bookedByGuest = res;
  //       this.bookingForm.get("passengerId").setValue(res.name);
  //     }
  //   })
  // }

  primaryButtonModal() {

  }

  onSubmit() {
    if (!this.bookingForm.valid) {
      return;
    }

    const result = Object.assign({}, this.bookingForm.value);
    console.log(result);
    // result.passengerId = this.bookedByGuest.passengerId;
    // console.log(this.bookedByGuest)
    // result.cabinId = result.cabinId.id;
    // result.arrivalLocId = result.arrivalLocId.id;
    // result.depLocId = result.depLocId.id;

    let loaderRef = this.modalService.openConfirmationModal({
      isLoader: true,
      disableClose:true,
      loaderText:"Creating booking"
    })
    this.bookingService.createBooking(result).subscribe(res => {
      console.log(res);
      loaderRef.close();
      this.modalService.openConfirmationModal({
        headerText: "Booking Created Successfully!",
        primaryButtonName: "Ok",
        primaryEvent:this.primaryButtonModal
      })
    })
  }

  getSettings() {
    this.bookingService.getSettings().subscribe(res => {
      // console.log(res);
      this.setting = res;
    })
  }

  onRoomChange(event) {
    console.log(event.value);
    let room: CabinModel = event.value;
    // if (this.setting) {
    //   let discount = (room.Fare * this.setting.discount) / 100;
    //   let rent = room.Fare - discount;
    //   let tax = (rent * this.setting.taxPercentage) / 100;
    //   rent += tax;
    //   this.rentCount = rent;
    // }
  }

  onPassengerChange(event) {
    // console.log(event.value);
    let room: PassengerModel = event.value;
  }

  onLocation1(event){
    let location: LocationModel = event.value;

  }

  onLocation2(event){
    let location: LocationModel = event.value;

  }
}
