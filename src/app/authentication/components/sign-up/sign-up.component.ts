import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInformation } from '../../../config/interfaces/user.interface';
import  {first} from 'rxjs/operators';
import { Roles } from 'src/app/config/enums/default.enum';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupform:FormGroup;
  userInformation:UserInformation;
  constructor(private authenticationService:AuthenticationService,private fb:  FormBuilder) { }

  ngOnInit() {
    this.makeUpSignUpForm();
  }

  makeUpSignUpForm(){
    this.signupform = this.fb.group({
      name:[''],
      phonenumber:[''],
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }


  onSubmit(){
    // console.log(this.signupform.value.email);
    // console.log(this.signupform.value.password);
    this.userInformation = {
      role:[Roles.Admin],
      email:this.signupform.value.email,
      password:this.signupform.value.password
    }
    // const email = this.signupform.value.email;
    // const password = this.signupform.value.password;
    this.registerUser(this.userInformation);
  }

  registerUser(user){
    
    this.authenticationService.signUp(user).pipe(first()).subscribe(res=>{
      console.log(res);
    });
  }

}
