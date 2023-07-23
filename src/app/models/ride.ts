export class Ride {
    employeeId!: string;
    vehicleType!: string;
    vehicleNo!: string;
    vacantSeats!: number;
    time!: string;
    pickupPoint!: string;
    destination!: string;
    bookedEmpIds ? : string = "";
     public constructor(init?: Partial<Ride>) {
        Object.assign(this, init);
    }
   
}

export class StaticField {
    public static rides : Ride[] = [];
}

