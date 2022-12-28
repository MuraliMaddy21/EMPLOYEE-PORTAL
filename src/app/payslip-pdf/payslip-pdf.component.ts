import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,Route } from '@angular/router';

@Component({
  selector: 'app-payslip-pdf',
  templateUrl: './payslip-pdf.component.html',
  styleUrls: ['./payslip-pdf.component.css']
})
export class PayslipPdfComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get("http://localhost:3030/eppdf",{responseType:'json'}).subscribe((response)=>
    {
      console.log(response)

    });
  }

}
