import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empid:any=""
  password:any="";
  json:any
  result:any
  status:any
 

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void
  {
  }



  validate()
  {
   this.json={
    "empid":this.empid,
    "password":this.password
   }
   console.log(this.json)
   this.http.post('http://localhost:3030/eplogin',this.json,{responseType:'json'}).subscribe((response=>
   {
      this.result = response
      console.log(this.result)
      console.log(this.result['Envelope']['Body']['ZFM_LOGIN_EP_MD.Response']['RETCODE'].toString())
      this.status=this.result['Envelope']['Body']['ZFM_LOGIN_EP_MD.Response']['RETCODE']
      if(this.status == 'S')
      {
         window.alert("Login Successful")
        this.route.navigate(["/profile"]);
      }
      else
      {
        window.alert("Incorrect Credentials!Please Check")
      }

   }))
   

  }
}

      
  


