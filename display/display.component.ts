import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
// import { ClarityIcons,trashIcon } from '@cds/core/icon';
import { ClarityIcons,trashIcon,bellIcon,userIcon,colorPaletteIcon,imageGalleryIcon,archiveIcon,ellipsisVerticalIcon } from '@cds/core/icon';



ClarityIcons.addIcons(trashIcon);
ClarityIcons.addIcons(bellIcon);
ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(colorPaletteIcon);
ClarityIcons.addIcons(imageGalleryIcon);
ClarityIcons.addIcons(archiveIcon);
ClarityIcons.addIcons(ellipsisVerticalIcon);


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public show = false;

  form: FormGroup;
  cardArray = [] as any;
  public display = false;
  public openModal = false;
  detail = [] as any;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['',[Validators.required]]
    });
   }

  ngOnInit(): void {
    this.getNoteList();
  }

  getNoteList(){
    let id = localStorage.getItem('id');
    let array = [] as any;

    this.userService.getNoteList(id).subscribe((res) => {
      array = res;
      this.cardArray = array.data.data;
      console.log(this.cardArray);

    })
  }

  getId(card : any){
    this.detail = card;
    console.log(this.detail);
  }

  submit() {
    this.show = false;

    if (this.form.valid) {
      console.log("Submit called");
      this.show = false;

      let reqObj = {
        title: this.form.value.title,
        description: this.form.value.description
      }

      console.log(reqObj);

      let id = localStorage.getItem('id');

      this.userService.createNote(reqObj, id).subscribe((res) => {
        console.log(res);
        this.getNoteList();
      }, (error) => {
        console.log(error);
      })

    }
  }

  updateNote(){
    console.log("Method called");
    this.openModal = false;
    
    let id = this.detail.id;
    console.log(id);

    let token = localStorage.getItem('id');

    let reqObj = {
      noteId: id,
      title :  this.form.value.title ,
      description : this.form.value.description
    }

    console.log(reqObj);

    this.userService.updateNote(reqObj,token).subscribe((res) => {
      console.log(res);
      this.getNoteList();
    },(error) => {
      console.log(error);
    })
  }

  deleteNote(){
    
    let token = localStorage.getItem('id');
    let reqObj = {
      "isDeleted": true,
      "noteIdList": [this.detail.id]
    }

    this.userService.deleteNote(reqObj,token).subscribe((res) => {
      console.log(res);
      this.getNoteList();
    },(error) => {
      console.log(error);        
    })
  }

}
