import { Component, OnInit } from '@angular/core';

import {FormServiceService} from '../shared/form-service.service';

import {ReactiveFormsModule} from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {AuthService} from '../shared/auth.service';

@Component({
  selector:'national-conference-papers',
  templateUrl: './national-conference-papers.component.html',
  styleUrls: ['./national-conference-papers.component.css']
})


export class NationalConferencePapersComponent  implements OnInit {

  constructor(
    public formService: FormServiceService,
    public authService: AuthService,
  ) { }
 

  ngOnInit() {
    //this calls the getState() fn to obtain the state of userloggedIn
    this.authService.getState();

  }

  submitted(){

    console.log(this.formService.nationalConferenceForm.value);
    
      this.formService.insertNationalConference(this.formService.nationalConferenceForm.value);
      this.formService.nationalConferenceForm.reset();

    }
  
  
}
