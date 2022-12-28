import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
     
    this.http.get("http://localhost:3030/eppayslip",{responseType:'json'}).subscribe((response)=>
    {
      console.log(response)

    });


  }

}
