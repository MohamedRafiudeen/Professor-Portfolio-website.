import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "signinform",
  templateUrl: "./signinform.component.html",
  styleUrls: ["./signinform.component.css"]
})
export class SigninformComponent implements OnInit {
  constructor(private authService: AuthService, 
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    ) {}

  logInForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  ngOnInit() {
  }

  submit(val) {
    this.logInForm.reset();

    this.authService.logIn(val.email, val.password);
    //console.log("userLoggedIn",this.authService.userLoggedIn);

    this.router.navigate(['home']);
  }
}
