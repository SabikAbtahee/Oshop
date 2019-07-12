import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserInformation } from '../../../config/interfaces/user.interface';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { urlPaths } from '../../../config/constants/defaultConstants';

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.scss']
})
export class AccountRecoveryComponent implements OnInit {


  user:UserInformation;
  recoveryForm;
  constructor(private authenticationservice:AuthenticationService,private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.makeRecoveryForm();
  }

  makeRecoveryForm(){
    this.recoveryForm = this.fb.group({
      email:['']
    })
  }

  sendPasswordResetEmail(user:UserInformation){
    this.authenticationservice.sendPasswordResetEmail(user).pipe(first()).subscribe(res=>{
      // console.log(res);
    });
  }

  onSubmit(){
    this.user={
      email:this.recoveryForm.value.email,
      password:''
    }
    this.sendPasswordResetEmail(this.user);
  }
  routeToSignin(){
    this.router.navigate([urlPaths.Authentication.Signin.url]);
  }

}
