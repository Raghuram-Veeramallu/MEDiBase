
export class Prescription{
  medication: string;
  doseage: string;
}

export class Diagnosis{
  condition: string;
  advice: string;
}

export class Problem{
  symptom: string;
  allergy: string;
}

export class Record{
  institute_ID: string;
  date_of_visit: string;
  problems: Array<Problem>;
  diagnosis: Array<Diagnosis>;
  prescription: Array<Prescription>;
}

export class Records{
  year: number;
  records: Array<Record>;
}