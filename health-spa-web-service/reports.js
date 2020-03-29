$(document).ready(function(){


    console.log(localStorage.getItem("firstName"));
    var firstName=localStorage.getItem("firstName");
    var lastName=localStorage.getItem("lastName");
    var age=localStorage.getItem("age");
    var gender=localStorage.getItem("gender");
    var medication=localStorage.getItem("medication");
    var comments=localStorage.getItem("comments");
    

    var id=localStorage.getItem("id");
    $.get("http://localhost:3000/patient/"+id,function(data,status){
            
            var firstName=data.firstName;
            var lastName=data.lastName;
            var age=data.age;
            var gender=data.gender;
        });

    var appendString="<tr>"+
            "<td>"+firstName+" "+lastName+"</td>"+
            "<td>"+age+"</td>"+
            "<td>"+gender+"</td>"+
            "<td> Sample photo</td>"+
            "<td>"+medication+"</td>"+
            "<td>"+comments+"</td>"+
        "</tr>";
    $("#reportTableBody").append(appendString);
});