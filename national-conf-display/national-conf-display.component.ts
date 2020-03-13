import { Component, OnInit } from '@angular/core';
import { FormServiceService }  from '../shared/form-service.service';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-national-conf-display',
  templateUrl: './national-conf-display.component.html',
  styleUrls: ['./national-conf-display.component.css']
})
export class NationalConfDisplayComponent implements OnInit {
  NationalConfArray = [];
  constructor( private formService: FormServiceService,
    private authService: AuthService,
    ) { }

  ngOnInit() {

    //this calls the getState() fn to obtain the state of userloggedIn
    this.authService.getState();

    this.formService.getNationalConference().subscribe( arr => {
      this.NationalConfArray = arr.map(list =>{
        console.log("InterNatConf", list);
        return{
        $key: list.key,
        ...list.payload.val(),
        }
      })
    });
  }
  

  //check if the user is logged in
  getUserState(){
    return this.authService.userLoggedIn;
  }

  

  //edit articles btn function
 
  populateForm(article){
    this.formService.nationalConferenceForm.setValue(article);
    this.formService.update = true;
  }

   //delete articles btn function
   delete($key){
     this.formService.deleteNationalConference($key);
  }
}
