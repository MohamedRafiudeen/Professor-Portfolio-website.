import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/auth.service";
import { ReactiveFormsModule } from "@angular/forms";

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "signupform",
  templateUrl: "./signupform.component.html",
  styleUrls: ["./signupform.component.css"]
})
export class SignupformComponent implements OnInit {
  constructor(private authService: AuthService,
     private fb: FormBuilder,
     private router: Router,
     private activatedRoute: ActivatedRoute,
     ) {}

  signUp = this.fb.group({
    email: [""],
    password: [""]
  });

  ngOnInit() {}

  submit(formValues) {
    this.signUp.reset();

    console.log(
      "signUp formgroup output",
      formValues.email,
      formValues.password
    );
    this.authService.createNewUser(formValues.email, formValues.password);

    //redirects the page to 'Home' Page
    this.router.navigate(['home']);
  }
}
