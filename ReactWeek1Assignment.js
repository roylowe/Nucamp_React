
//To DO:
//1. create two classes Student and Bootcamp
//2. create a constructor in the Student class
//3.the constructor parameters: "name", "email", and "community";
//4. the constructor should assign the parameters' values to class properties of the same name using the this keyword.
class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
//5. The Bootcamp class should include:
//6. a constructor;

//7. the constructor parameters: "name", "level", and a third parameter "students" which is an array initialized as empty (using default function parameters syntax);

//8. the constructor should assign the parameters values to class properties of the same name using the this keyword.

//9. Write the code for the Bootcamp class so that if it the "students" parameter is not passed in, it is by default initialized to be an empty array from within the constructor parameter list itself.
class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister){
              
       if (this.students.filter(stu => stu.email === studentToRegister.email).length === 0){
           this.students.push(studentToRegister);           
           console.log(`Registering ${studentToRegister.name} to the bootcamp ${this.name}`);
            return this.students;
        }else{
            console.log(`Sorry, ${studentToRegister.name} is already registered for ${this.name}`);
        }
    }
}