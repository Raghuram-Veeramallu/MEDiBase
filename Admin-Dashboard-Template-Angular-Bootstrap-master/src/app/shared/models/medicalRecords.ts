
export class pres{
  medication: string;
  doseage: string;
}

export class diagn{
  condition: string;
  advice: string;
}

export class problem{
  symptom: string;
  allergy: string;
}

export class record{
  institute_ID: string;
  date_of_visit: string;
  // If we need to make it an array of problems, diagnosis and prescription then we can make it here
  problems: problem;
  diagnosis: diagn;
  prescription: pres;
}

export class years{
  year: number;
  records: Array<record>;
}