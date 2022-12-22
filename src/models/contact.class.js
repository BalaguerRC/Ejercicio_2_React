export class Contact{
    name='';
    lastname='';
    email='';
    connection= false;

    constructor(name,lastname,email,connection){
        this.name=name;
        this.lastname=lastname;
        this.email=email;
        this.connection=connection;
    }
}