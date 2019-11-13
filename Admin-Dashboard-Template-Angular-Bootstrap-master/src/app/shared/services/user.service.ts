import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

//import * as moment from "moment";
import { User } from "../models/user";

@Injectable()
export class UserService {
  users: AngularFireList<User>;
  selectedUser: User = new User();
  userName: string;
userpassword:string;
passwords:string;
  constructor(private db: AngularFireDatabase) {
    this.getUsers();
  }

  getUsers() {
    this.users = this.db.list("/users");
    return this.users;
  }

  createUser(data: any) {
    this.users.push(data);
  }

  updateUser(user: User) {
    this.users.update(user.$key, user);
  }
  getPassword(email:string)
  {
    console.log(email);
    this.db.database.ref('/facility').orderByChild('email').equalTo(email)
  .once('value')
  .then(dataSnapshot => {
    if(dataSnapshot.val()) {
       var dataObj = dataSnapshot.val();
       var password = dataObj[Object.keys(dataObj)[0]].password;
       console.log(password);
       this.passwords=password;
       return this.passwords;
    }
  });

     // if(snapshot.val())
     //{ this.userpassword = snapshot.val().password;
      //return this.userpassword;}
    //})

  }
  getUserName(uid: string){

    this.db.database.ref('/users').orderByChild('uid').equalTo(uid).once('value', (snapshot) => {
      console.log(snapshot.val().name);
      this.userName = snapshot.val().name;
    })
  //  console.log(this.userName);
    return this.userName;
  }


  // getUserById(key: string){
  //   var temp =  this.db.object('users/' + key);
  //   console.log(temp);
  //   return temp;
  // }

}