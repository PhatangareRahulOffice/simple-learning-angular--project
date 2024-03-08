import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData !: FormGroup;
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService,
     private router:Router
     ) { }

  ngOnInit(): void {
this.formData = this.formBuilder.group({
  email:'',
  password:''
})
  }

  submitForm(){
    this.authService.loginUser(this.formData.getRawValue(),{withCredentials:true}).subscribe((response)=>{
      console.log("Login Successfully", response);
      this.router.navigate(['/'])

    })
    
  }
}
