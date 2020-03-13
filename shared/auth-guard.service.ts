import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "../shared/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService {
  constructor(
    private authService: AuthService,
    private router: Router,
    
  ) {}

  canActivate(){
    if (this.authService.userLoggedIn) {
      return true;
    }
    else{
      this.router.navigate(['signIn']);
      return false;
    }
  }

}
