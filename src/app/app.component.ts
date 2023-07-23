import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StaticField } from './models/ride';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  url: string = '/mock_data.json';
  constructor(private http : HttpClient){}
  ngOnInit(): void {
    this.http.get(this.url).subscribe((res : any) => {
      StaticField.rides = JSON.parse(JSON.stringify([...StaticField.rides,...res]));
    });
  }
}
