import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {

  items: any = "";
  result: any = ""
  time: any;


  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {


    let date: Date = new Date()
    this.time = date;

    this.http.get('http://localhost:3030/getauth', { responseType: 'json' }).subscribe((response) => {
      console.log(response)
      this.result = response
      if (this.result == null) {
        window.alert("You haven't logged in!Redirecting to Login Page");
        this.route.navigate([""])
      }
    })

    this.http.get("http://localhost:3030/eppayslip", { responseType: 'json' }).subscribe((response) => {
      console.log(response)
      this.result = response;
      this.items = this.result['Envelope']['Body']['ZFM_EP_EMPPAYSLIP_MD.Response']['IT_PAY']['item']
    });


  }

  shutdown() {
    this.http.get('http://localhost:3030/shutdown', { responseType: 'json' }).subscribe((data) => {

    });

    this.route.navigate([""]);
  }

  print() {
    this.http.get('http://localhost:3030/pdf', { responseType: 'json' }).subscribe((data) => {
      console.log(data);
    });
  }

}
