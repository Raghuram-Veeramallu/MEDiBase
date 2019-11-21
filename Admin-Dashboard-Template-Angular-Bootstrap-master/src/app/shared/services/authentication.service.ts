import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
 
@Injectable({
providedIn: 'root'
})
 
export class AuthenticationService {
userData: Observable<firebase.User>;
 
constructor(private angularFireAuth: AngularFireAuth) {
//this.userData = angularFireAuth.authState;
}
 
/* Sign up */
SignUp(email: string, password: string) {
    this.angularFireAuth
.auth
.signOut();
    
this.angularFireAuth
.auth
.createUserWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully signed up!', res);
this.angularFireAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(_res => {
    console.log('You are Successfully logged in!');
   // console.log(this.angularFireAuth.auth.currentUser);
    })
    .catch(err => {
    console.log('Something is wrong:',err.message);
    });
})
.catch(error => {
console.log('Something is wrong:', error.message);
});
}
 
/* Sign in */

 
/* Sign out */

 
}