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
  x:any
 

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void
  {
  }



  validate()
  {
    if(this.empid=="" && this.password=="")
    {
      window.alert("Please fill Employee-ID and Password");
    }
    else if(this.empid=="")
    {
      window.alert("Please fill Employee-ID");

    }
    else if(this.password=="")
    {
      window.alert("Please fill Password");

    }
    else
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

  myFunction()
  {
    this.x = document.getElementById("myInput");
    if (this.x.type === "password") {
      this.x.type = "text";
    } else {
      this.x.type = "password";
    }
  }
}

      
  


