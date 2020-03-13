import { Component, OnInit } from "@angular/core";
import { FormServiceService } from "../shared/form-service.service";
import { AuthService } from "../shared/auth.service";


@Component({
  selector: "app-international-conf-form",
  templateUrl: "./international-conf-form.component.html",
  styleUrls: ["./international-conf-form.component.css"]
})
export class InternationalConfFormComponent implements OnInit {
  constructor(
    public formService: FormServiceService,
    public authService: AuthService,
  ) {}

  getAuthState(): boolean {
    return this.authService.userLoggedIn;
  }

  ngOnInit() {
    //this calls the getState() fn to obtain the state of userloggedIn
    this.authService.getState();
  }

  submitted() {
    console.log(this.formService.interNatConfForm.value);

    this.formService.insertInterNatConf(
      this.formService.interNatConfForm.value
    );

    this.formService.interNatConfForm.reset();

    return this.authService.userLoggedIn;
  }
}
