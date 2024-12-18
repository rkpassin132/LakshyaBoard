import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-dashboard-notes',
  templateUrl: './project-dashboard-notes.component.html',
  styleUrls: ['./project-dashboard-notes.component.scss']
})
export class ProjectDashboardNotesComponent {
  taskForm: FormGroup;
  loading: boolean = false;
  public Editor = ClassicEditor;
  public configEditor = { placeholder: "Type the content here!" };
  constructor( private fb: FormBuilder){
    this.taskForm = this.fb.group({
      description: ["", [Validators.required]],
    });
  }

  async onSubmit() {

  }
}
