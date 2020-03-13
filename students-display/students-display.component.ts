import { Component, OnInit } from '@angular/core';
import {FormServiceService} from '../shared/form-service.service';
import {AuthService} from '../shared/auth.service';
  
@Component({ 
  selector: 'studentsDisplay',
  templateUrl: './students-display.component.html',
  styleUrls: ['./students-display.component.css']
})
export class StudentsDisplayComponent implements OnInit {
  public studentsFireDbArray =[];

  constructor(private formService: FormServiceService,
    private authService: AuthService,
    ) { }

  ngOnInit() {

    //this calls the getState() fn to obtain the state of userloggedIn
    this.authService.getState();

    this.formService.getStudents().subscribe(arr =>{
      //oninit, receive the value returned fro the 'getStudents' function in formService
       this.studentsFireDbArray = arr.map(list =>{
         return{
           $key:list.key,
           ...list.payload.val()
         }
       })

       console.log(this.studentsFireDbArray, "StudentsFireArray", this.studentsFireDbArray.length); 
    })};



    //check if the user is logged in
  getUserState(){
    return this.authService.userLoggedIn;
  }


  
    
  //edit students btn function
 
  populateForm(students){
    this.formService.studentForm.setValue(students);
    this.formService.update = true;
  }

   //delete articles btn function
   delete($key){
     this.formService.deleteStudents($key);
  }
}



