import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

//import * as moment from "moment";
import { User } from "../models/user";

@Injectable()
export class UserService {
  users: AngularFireList<User>;
  selectedUser: User = new User();
  userName: string;

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

  getUserName(uid: string){
    // x.snapshotChanges().subscribe(
		// 	(product) => {
		// 		// this.spinnerService.hide();
		// 		const y = product.payload.toJSON() as Product;

		// 		y['$key'] = id;
		// 		this.product = y;
		// 	},
		// 	(error) => {
		// 		this.toastrService.error('Error while fetching Product Detail', error);
		// 	}
		// );
    this.db.database.ref('/users').orderByChild('uid').equalTo(uid).once('value', (snapshot) => {
      console.log(snapshot.val().name);
      this.userName = snapshot.val().name;
    })
    return this.userName;
  }


  // getUserById(key: string){
  //   var temp =  this.db.object('users/' + key);
  //   console.log(temp);
  //   return temp;
  // }

}