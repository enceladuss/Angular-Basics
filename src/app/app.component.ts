import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  getFormElement(name: string) {
    return this.form.get(name);
  }

  get aliasesArrayControl() {
    return (this.form.get('skills') as FormArray).controls;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        MyValidators.restrictedEmails
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('1'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });

  }

  submit(): void {
    if(this.form.valid) {
      console.log(this.form);
      const formData = {...this.form.value};
      console.log('Form data:', formData);

      this.form.reset()
    };
  }

  setCapital() {
    const cityMap = [
      'Kyiv', 'Minsk', 'Moscow'
    ];

    const cityKey = this.form.get('address')?.get('country')?.value - 1;

    this.form.patchValue({address: {city: cityMap[cityKey]}});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control)
  }
}

