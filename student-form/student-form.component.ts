import { Component, OnInit } from '@angular/core';

import {FormServiceService} from '../shared/form-service.service';

import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'studentForm',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit {

  constructor(public formService : FormServiceService,
    private authService: AuthService,
    ) { }

    imgSrc = null;


  ngOnInit() {
    //this calls the getState() fn to obtain the state of userloggedIn
    this.authService.getState();
  }



  getAuthState(): boolean{
    return this.authService.userLoggedIn;
  }



  readImage(e){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => { 
     this.imgSrc = reader.result;
    }
  }

  onSubmit(formValues){
    
    console.log(this.formService.studentForm); 

    //this sets the FileReader's read image to the formControl 'avatar'
    this.formService.studentForm.value.avatar = this.imgSrc;

    //post studentForm to Firebase
    this.formService.insertStudent(formValues);

    //clear all the input fields
    this.formService.studentForm.reset();

    // reset the value of picture src
    this.imgSrc = "";
  }

}
