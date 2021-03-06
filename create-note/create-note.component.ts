import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  form: FormGroup;
  public show = false;


  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

  }

  ngOnInit(): void {
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
       
      }, (error) => {
        console.log(error);
      })

    }
  }

}
