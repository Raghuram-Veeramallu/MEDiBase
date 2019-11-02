
export class Symptom {
  $key: string;
  symptomName: string;
  symptomDesc: string;
  diagnosis: string;
  additional: string;
}

export class Prescription {
  $key: string;
  medications: string;
  doseage: string;
}

export class Record {
  $key: string;
  medicalInst: string;
  date: string;
}