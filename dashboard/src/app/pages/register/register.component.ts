import { SignUp } from './../../models/signup.model';
import { AuthState } from './../../states/auth.state';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Emittable, Emitter } from '@ngxs-labs/emitter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    organization: new FormControl('', [Validators.required]),
    bucket: new FormControl('', [Validators.required]),
  });

  @Emitter(AuthState.onSignUp) onSignUp: Emittable<SignUp>;

  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    if (this.form.valid) {
      this.onSignUp.emit(this.form.value);
    }
  }
}
