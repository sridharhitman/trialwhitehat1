var name_of_student_list = [];
 /* function submit the names*/
function submit() {

    var student_1 = document.getElementById("name_of_the_students_1").value;
    var student_2 = document.getElementById("name_of_the_students_2").value;
    var student_3 = document.getElementById("name_of_the_students_3").value;
    var student_4 = document.getElementById("name_of_the_students_4").value;
    name_of_student_list.push(student_1);
    name_of_student_list.push(student_2);
    name_of_student_list.push(student_3);
    name_of_student_list.push(student_4);
    document.getElementById("display_name").innerHTML = name_of_student_list;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
    document.getElementById("name_of_the_students_1").value="";
    document.getElementById("name_of_the_students_2").value="";
    document.getElementById("name_of_the_students_3").value="";
    document.getElementById("name_of_the_students_4").value="";
    document.getElementById("clear").style.display="inline-block";
}
// function sort the name
function sort(){
    name_of_student_list.sort();
    document.getElementById("display_name").innerHTML = name_of_student_list;
}
function clear(){
    document.getElementById("display_name").innerHTML = " ";
}