import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeListService } from '../../services/employee-list.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  //Form states
  loading : boolean = false;
  success : boolean = false;


  updateForm !: FormGroup;
  constructor(private fb : FormBuilder, private service: EmployeeListService) { }

  ngOnInit(): void {
    //Schema for form data
    this.updateForm = this.fb.group({
      name : ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      address : ['', [
        Validators.required,
        Validators.minLength(3),

      ]],
      joiningYear : [null, [
        Validators.required,
        Validators.min(2000),
        Validators.max(2022),
      ]],
    })

    this.updateForm.valueChanges.subscribe(console.log)

  }

  async submit(){
    this.loading = true;
    const formValues = this.updateForm.value;

    try {
      this.service.updateEmployee(1, formValues.name, formValues.address, formValues.joiningYear);
      this.success = true;
      alert("Data updated successfully");
    } catch (error) {
      console.error(error); 
    }

    this.loading = false;
  }


}
