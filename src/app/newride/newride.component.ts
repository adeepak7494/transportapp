import { Component, OnInit } from '@angular/core';
import { Ride, StaticField } from '../models/ride';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-newride',
  templateUrl: './newride.component.html',
  styleUrls: ['./newride.component.css']
})
export class NewrideComponent implements OnInit {
  newRide!: any;
  vehicleTypes = ['Car', 'Bike'];
  rideDetailsForm = this.fb.group({
    employeeId : ['', Validators.required],
    vehicleType : ['', Validators.required],
    vehicleNo : ['', Validators.required],
    vacantSeats : ['', Validators.required],
    time : ['', Validators.required],
    pickupPoint : ['', Validators.required],
    destination : ['', Validators.required]

    });
  constructor(private fb : FormBuilder , private messageService : MessageService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newRide = this.rideDetailsForm.value;
    if(StaticField.rides.findIndex(ele => ele.employeeId === this.newRide.employeeId) < 0) {
      StaticField.rides.push(this.newRide);
      this.messageService.add({severity:'success', summary:'Ride Added', detail:'Ride has been created with employee id ' + this.newRide.employeeId});
    } else {
      this.messageService.add({severity:'warn', summary:'Failed', detail:'Employee Id should be unique'});
    }
  }

}
