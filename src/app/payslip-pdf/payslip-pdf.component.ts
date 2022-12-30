import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,Route } from '@angular/router';

@Component({
  selector: 'app-payslip-pdf',
  templateUrl: './payslip-pdf.component.html',
  styleUrls: ['./payslip-pdf.component.css']
})
export class PayslipPdfComponent implements OnInit {

  result:any="";
  items:any="";
  time:any
  
  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {

    
    let date:Date= new Date()
    this.time=date;


    this.http.get('http://localhost:3030/getauth',{responseType:'json'}).subscribe((response)=>
    {
     console.log(response)
     this.result=response
     if(this.result==null)
     {
       window.alert("You haven't logged in!Redirecting to Login Page");
       this.route.navigate([""])
     }
    })

    this.http.get("http://localhost:3030/eppdf",{responseType:'json'}).subscribe((response)=>
    {
      console.log(response)

    });
  }

}
