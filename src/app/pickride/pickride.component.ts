import { Component, OnInit } from '@angular/core';
import { Ride, StaticField } from '../models/ride';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'app-pickride',
  templateUrl: './pickride.component.html',
  styleUrls: ['./pickride.component.css']
})
export class PickrideComponent implements OnInit {
  selectedRide!: Ride;
  vehicleTypes = ['Car', 'Bike'];
  display: boolean = false;
  employeeId : string = "";

  get rides() : Ride[] {
    const format = 'hh:mm';
    const minTime = moment(moment().subtract(60, 'minutes'),format);
    const maxTime = moment(moment().add(60,'minutes'), format);
    const filteredRides = StaticField.rides.filter(ele => { 
      const date = new Date();
      date.setHours(Number(ele.time.split(':')[0]));
      date.setMinutes(Number(ele.time.split(':')[1]));
      if(moment(date,format).isSameOrAfter(minTime) && moment(date,format).isSameOrBefore(maxTime) )
        return true;
      else
        return false;
    });
    return filteredRides;
  }
  constructor(private messageService : MessageService) { }

  ngOnInit(): void {
   
  }

  showDialog() {
    this.display = true;
}

  bookRide(ride : Ride) {
    console.log(ride);
    this.selectedRide = ride;
    this.display = true;
  }

  confirmRide() {
      if(this.selectedRide.employeeId === this.employeeId) {
        return this.messageService.add({severity: 'warn', summary : 'Booking Failed', detail: "Employee ID should not be the same for a particular ride between the employee who has add the ride and the employee booking"});
      } else if(this.selectedRide.bookedEmpIds?.includes(this.employeeId)) {
        return this.messageService.add({severity: 'warn', summary : 'Booking Failed', detail: " Same employee cannot book a ride twice"});
      } else if(this.selectedRide.vacantSeats === 0) {
        return this.messageService.add({severity: 'warn', summary : 'Booking Failed', detail: "There should be atleast one vacant seat per ride for booking"});
      } else {
        this.selectedRide.bookedEmpIds = this.selectedRide.bookedEmpIds ? this.selectedRide.bookedEmpIds : ""  + this.employeeId + ",";
        this.selectedRide.vacantSeats = this.selectedRide.vacantSeats - 1; 
        console.log(StaticField.rides);
        this.messageService.add({severity: 'success', summary : 'Booking Successful', detail: 'Ride booked for employee' + " " + this.employeeId});
        this.display = false;
        return;
      }
  }

}
