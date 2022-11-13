const Employee = require('./employee');

class Manager extends Employee{
    constructor(id,officenumber){
        super(id,name,email)
        this.officenumber = officenumber;
    }

    getRole(){
        return 'Manage'
    }
}
