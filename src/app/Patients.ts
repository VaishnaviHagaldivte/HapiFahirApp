export class Patients {
    id: string;
    name: string;
    gender: string;
    dob: string;

    constructor(id,name,gender,dob) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
}