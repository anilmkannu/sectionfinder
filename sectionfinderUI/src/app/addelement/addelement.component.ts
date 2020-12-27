import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddElementService } from './add-element.service';

@Component({
  selector: 'app-addelement',
  templateUrl: './addelement.component.html',
  styleUrls: ['./addelement.component.scss']
})
export class AddelementComponent implements OnInit {
  addElementForm: FormGroup;
  constructor(private fb: FormBuilder, private addElementService: AddElementService,private router: Router) {}

  ngOnInit() {
    this.addElementFrom();

  }
  private addElementFrom() {
    this.addElementForm = this.fb.group({
      categoryName : ["", Validators.required],
      url : ["", Validators.required],
      websiteName : ""
    });
  }
    /**
   * funcation name:
   * craeted by:
   * created date:
   * functionality:
   */
  public addElement() {
    this.addElementService.addElement(this.addElementForm.value).subscribe((data : any) => {
      let res = <any>data;
      this.addElementForm.reset();
      if(res.type === 'success'){
       // this.router.navigate(['dashboard']);
       
      }else{
        console.log('error')
      }   
    });
  }
// this.addElementFrom.reset();  

}
