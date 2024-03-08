import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message = " ";
  constructor( private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.getUser({withCredentials:true}).subscribe((response:any) =>{
      this.message = `Hi ${response.name}`

      console.log(response,'respone')
    },
    err =>{
      this.message = 'Your not logged in'
      console.log(err)
    }
    )
    

  }

}
