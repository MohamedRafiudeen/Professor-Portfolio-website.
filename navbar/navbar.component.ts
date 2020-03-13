import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { 
    
  }

  getAuthState(){

    return this.authService.userLoggedIn;
  }

  logOut(){
    this.authService.logOut()
  }


  ngOnInit() {
  }

}
