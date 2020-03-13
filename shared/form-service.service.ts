import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import {ReactiveFormsModule} from '@angular/forms'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  //this array contains the data received from fireDB articles list

  constructor(private firedb: AngularFireDatabase ,private fb: FormBuilder) {}


  //form group variables

    //article-form component form group
    articleForm = this.fb.group({
      $key: ['',],
      article: ['', Validators.required],

    });


    //National Conference formGroup
    nationalConferenceForm = this.fb.group({
      $key: [''],
      article: ['',Validators.required],
    });


    //International Conference FormGroup
    interNatConfForm = this.fb.group({
      $key: [''],
      article: ['',Validators.required],
    })


    //student-form component form group
    studentForm = this.fb.group({
      $key: ['null'],
      avatar:['',],
      name: ['', Validators.required],
      status: ['', Validators.required],

    });





     //AngularFireList Declaration
     articleArray:Observable <any>;
     studentsArray: Observable<any>;
     nationalConferenceArray: Observable<any>;
     interNatConfArray: Observable<any>;

     
     
  //form btn state variables
   update = false;
   updateNationalConfPaper = false;



  //International Journals form-service Firebase
  getarticles(){

    return this.firedb.list('ResearhArticlesList').snapshotChanges();
  };

  insertArticle(formValues){
    this.firedb.list('ResearhArticlesList').push({
      article: formValues.article,
    })
  };


  updateArticles(formValues){

    this.firedb.list('ResearhArticlesList').update(formValues.$key,{
      $key: formValues.$Key,
      article: formValues.article,
    });
  };

  deleteArticles($key){
    this.firedb.list('ResearhArticlesList').remove($key);
  };






  //International Conference Papers firebase methods
  getInterNatConf(){
   return this.firedb.list('InterNatConfPapers').snapshotChanges();
  }; 

  insertInterNatConf(formValues){
    this.firedb.list('InterNatConfPapers').push({
      article: formValues.article,
    })

  };


  updateInterNatConf(formValues){
     this.firedb.list('InterNatConfPapers').update(formValues.$ey,{
       article : formValues.article,
     })
  };

  deleteInterNatConf($key){
    this.firedb.list('InterNatConfPapers').remove($key);
  };






  //NationalConferencePapers firebase Form Service

  getNationalConference(){
    return this.firedb.list('ConferencePapers').snapshotChanges();
  };

  insertNationalConference(formValue){
    this.firedb.list('ConferencePapers').push({
      article: formValue.article,
    })
  };

  updateNationalConference(formValue){
    this.firedb.list('ConferencePapers').update(formValue.$key,{
      article: formValue.article,
    })
  };

  deleteNationalConference($key){
    this.firedb.list('ConferencePapers').remove($key);
  };





  //Students firebase Form Service

  getStudents(){

    return this.firedb.list('students').snapshotChanges();
  };

  insertStudent(formValue){
    this.firedb.list('students').push({
      avatar: formValue.avatar,
      name: formValue.name,
      status: formValue.status,
    })
  };

  updateStudents(formValue){
    this.firedb.list('students').update(formValue.$key,{
      img: formValue.img,
      name: formValue.name,
      status: formValue.status,
      ResearchField: formValue.ResearchField,
    })
  };

  deleteStudents($key){
    this.firedb.list('students').remove($key);
  };





}
