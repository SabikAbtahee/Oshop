import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { UserInformation } from '../../config/interfaces/user.interface';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	constructor(private angularfireauth: AngularFireAuth, private angularfiredatabase: AngularFireDatabase) {
    // this.save();
  }

	signUp(user:UserInformation):Observable<any> {
    return new Observable(observer=>{
      this.angularfireauth.auth.createUserWithEmailAndPassword(user.email, user.password).catch(err => {
          observer.next(err);
      });
      this.angularfireauth.auth.onAuthStateChanged(x=>{
        console.log(x);
      });
    });
  }
  // save(){
  //   let x= this.angularfiredatabase.list<UserInformation>('user');
  //   // x.push({
  //   //   named:'sabik3asdf'
  //   // })
  //   x.update('Lj3uRX6VXZk7UDNtQS2',{
  //     email:'asdf',
  //     password:'asdf'
  //   })
  //   alert(x);
  // }








  signin(){
    let x=this.angularfireauth.auth.signInWithEmailAndPassword('sabik.abtahee@yahoo.com', '1qazZAQ!').catch(a=>this.x(a));
    var user = this.angularfireauth.user.subscribe(res=>{
      console.log(res.uid);
    });
    this.angularfireauth.auth.onAuthStateChanged(res=>{
      console.log(res);
    });

  }
	x(a) {
		console.log(a);
	}
}
