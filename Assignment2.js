class School{
constructor(){
    this.Student=[];
    this.Teacher=[];
}   

addTeacher(teacher){
    if(!(teacher instanceof Teacher) )
    throw error("teacher should be of Teacher");
     return this.Teacher.push(teacher);
}

removeTeacher(index){
    this.Teacher.splice(index,1);

}

registerStudent(student){
    if(!(student instanceof Student) )
    throw error("student should be of Student");
    this.Student.push(student);
}
removeStuden(index){
    this.Student.splice(index,1);

}

}

class Student{
constructor(Fname,Lname,age,stage){
    this.Fname=Fname;
    this.Lname=Lname;
    this.age=age;
    this.stage=stage;
}
}


class Teacher{
constructor(Fname,Lname,lecturer){
    this.Fname=Fname;
    this.Lname=Lname;
    this.lecturer=lecturer;
}  
}

school = new School();
school.addTeacher(
    new Teacher('Ahmed','Ali','C++')
    
);
school.addTeacher(
    new Teacher('harman','sardar','java')
    
);
school.addTeacher(
    new Teacher('Havyar','waad','Web')
    
);

school.registerStudent(
    new Student('wali','ahmed',12,'Stage6')
);
school.registerStudent(
    new Student('Awat','qadir',10,'Stage5')
);
school.registerStudent(
    new Student('Hardi','ahmed',12,'Stage6')
);   
console.log(school);                                                                                                                                                                                                                                                    
school.removeStuden(1)
school.removeTeacher(0);
console.log(school);

