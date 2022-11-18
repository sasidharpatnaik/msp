import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-add-candidates',
  templateUrl: './add-candidates.component.html',
  styleUrls: ['./add-candidates.component.css']
})
export class AddCandidatesComponent implements OnInit {

  sideNavStatus: boolean = false;
  addCandidateForm: any = {}
  fileToUpload: File | null = null;
  selectedFiles?: FileList;
  resumeStatus: string = "present";
  validExtention: boolean = true;

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit(): void {
    const menuStatus = sessionStorage.getItem("menuStatus")
    console.log(menuStatus)
    if (menuStatus == "0") {
      this.sideNavStatus = false
    } else {
      this.sideNavStatus = true
    }
  }

  onSubmit(form: NgForm) {
    if (this.selectedFiles) {
      console.log(form.valid)
      console.log('submit')
    } else {
      console.log('not submit')
    }
  }

  handleFileInput(event: any) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles)
    if (this.selectedFiles) {
      const resume = this.selectedFiles[0];
      const resumeSize = resume.size; 
      const resumeName = resume.name;
      if(resumeSize>5242880) {
        this.resumeStatus = "biggerSize"  
      }
      var ext = resumeName.split('.').pop();
      console.log(ext)
      if(ext=="pdf" || ext=="docx" || ext=="doc"){
        this.validExtention=true;
      }else{
        this.resumeStatus = "wrongFormat"  
      }

      document.getElementById("resume")?.classList.remove('ng-invalid')
      document.getElementById("resume")?.classList.add('ng-valid')
    }
    console.log(this.resumeStatus)
  }
  uploadResume() {
    if (this.selectedFiles) {
      this.fileService.upload(this.selectedFiles[0])
    } else {
      this.resumeStatus = "notPresent"
    }
  }

}
