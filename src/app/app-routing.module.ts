import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleaveComponent } from './empleave/empleave.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { PayslipPdfComponent } from './payslip-pdf/payslip-pdf.component';
import { PayslipComponent } from './payslip/payslip.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'payslip',component:PayslipComponent},
  {path:'pdf',component:PayslipPdfComponent},
  {path:'empleave',component:EmpleaveComponent},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
