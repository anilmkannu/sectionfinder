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
  formData = new FormData();

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
    // let reqObj = {
    //   'image': this.formData,
    //   'categoryName': this.addElementForm.value.categoryName,
    //   'url':this.addElementForm.value.url,
    //   'websiteName':this.addElementForm.value.websiteName
    // }
    let elementDTO = this.addElementForm.value ;
    this.formData.append( "elementDTO", JSON.stringify(elementDTO));
    this.addElementService.addElement(this.formData).subscribe((data : any) => {
      let res = <any>data;
      if(res.type === 'success'){
       // this.router.navigate(['dashboard']);
      }else{
        console.log('error')
      }   
    });
  }
    /**
   * funcation name:
   * craeted by:
   * created date:
   * functionality:
   */
  uploadFiles( file ) {
    console.log( 'file', file )
    for ( let i = 0; i < file.length; i++ ) {
        this.formData.append( "file", file[i], file[i]['name'] );
    }
}
}
