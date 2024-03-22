
export interface User {
    id:        number;
    username:  string;
    email:     string;
    firstName: string;
    lastName:  string;
    gender:    string;
    image:     string;
    token:     string;
};
export interface Customer {
    id:         number;
    firstName:  string;
    lastName:   string;
    maidenName: string;
    age:        number;
    gender:     string;
    email:      string;
    phone:      string;
    username:   string;
    password:   string;
    birthDate:  Date;
    image:      string;
    bloodGroup: string;
    height:     number;
    weight:     number;
    eyeColor:   string;
    hair:       String;
    domain:     string;
    ip:         string;
    address:    String;
    macAddress: string;
    university: string;
    bank:       String;
    company:    String;
    ein:        string;
    ssn:        string;
    userAgent:  string;
}

export interface Login {
    username : String,
    password :String
}