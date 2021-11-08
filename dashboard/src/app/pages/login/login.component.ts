import { SignIn } from './../../models/signin.model';
import { AuthState } from './../../states/auth.state';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Emitter, Emittable } from '@ngxs-labs/emitter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    token: new FormControl('', [Validators.required])
  });

  @Emitter(AuthState.onSignIn) onSignIn: Emittable<SignIn>;

  constructor() {}

  ngOnInit(): void {}

  submit(): void {
    if (this.form.valid) {
      this.onSignIn.emit(this.form.value);
    }
  }
}
