// import { AngularFireDatabase } from '@angularfire2/database';
// import { Validators, FormGroup, FormBuilder } from '@angular/forms';

// export class SmsService{
// 	numberForm: FormGroup;
// 	message: any;
// 	mobile: any;

// 	constructor(private db: AngularFireDatabase, private fb: FormBuilder) {
// 		this.buildForm();
// 		//this.mobile = this.db.object('')
// 	}

// 	validateMinMax(minNo: any, maxNo: any) {
// 		return ['', [
// 			Validators.required,
// 			Validators.minLength(minNo),
// 			Validators.maxLength(maxNo),
// 			Validators.pattern('[0-9]+')
// 		]]
// 	}

// 	buildForm(){
// 		this.numberForm = this.fb.group({
// 			mobile: this.validateMinMax(13,13)
// 		});
// 	}

// 	get e164(){
// 		const form = this.numberForm.value
// 		const num = form.mobile
// 		return `+${num}`
// 	}



// }