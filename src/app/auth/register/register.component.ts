import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 formData!:FormGroup 
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService,
     private router:Router

     ) { }

  ngOnInit(): void {

    this.formData = this.formBuilder.group({
      name:'',
      email:'',
      password:''
    });
  }

  submitForm():void{
    console.log(this.formData.getRawValue())
    this.authService.registerUser(this.formData.getRawValue()).subscribe((response)=>{
      console.log('User Register Successfully',response)
       this.router.navigate(['/login'])
    })
  }

}
