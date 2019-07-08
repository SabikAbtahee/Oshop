import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserInformation } from 'src/app/config/interfaces/user.interface';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authenticationservice:AuthenticationService,private fb:FormBuilder,private router:Router) { }

  signinform;
  userInformation:UserInformation;
  ngOnInit() {
		this.makeSignInForm();
	}

	makeSignInForm() {
		this.signinform = this.fb.group({
			email: [ '', Validators.required ],
			password: [ '', Validators.required ],
		});
	}

	onSubmit() {
		this.userInformation = {
			email: this.signinform.value.email,
			password: this.signinform.value.password,
		};
		this.signinUser(this.userInformation);
	}

	signinUser(user: UserInformation) {
		this.authenticationservice.signin(user).pipe(first()).subscribe((res) => {
      if(res){
        console.log(res.code);
        this.router.navigate(['product']);
      }
		});
  }
  
  routeToSignup(){
    this.router.navigate(['authentication/sign-up']);
  }

}
