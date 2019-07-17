import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class MutationDatabaseService {

  constructor(private angularfireauth: AngularFireAuth, private angularfirestore: AngularFirestore) { }

  // setSingleData(){
  //   this.angularfirestore.collection('Person').add({})
  // }

  updateSingleData(EntityName:string,id:string,data:any){
    this.angularfirestore.collection(EntityName).doc(id).update(data).catch(err=>{
      console.log(err);
    });
  }
}
