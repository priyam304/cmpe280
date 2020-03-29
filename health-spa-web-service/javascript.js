$(document).ready(function(){
    $("#demographics-form").submit(function(event){
        var firstName=$("#first-name").val();
        var lastName=$("#last-name").val();
        var gender=$("#gender").val();
        var age=$("#age").val();
        var medication=$("#medication").val();
        var comments=$("#comments").val();
       
        localStorage.setItem("firstName",firstName);
        localStorage.setItem("lastName",lastName);
        localStorage.setItem("gender",gender);
        localStorage.setItem("age",age);
        

        $.post("http://localhost:3000/patient/",
        {
            "firstName" : firstName,
            "lastName" : lastName,
            "gender" : gender,
            "age" : age,
            "notes" : medication,
            "height" : comments
        },
        function(data,status){
            localStorage.setItem("id",data.createdProduct._id);
        });
    
        
        console.log(localStorage.getItem("user"));
        event.preventDefault();

    });


});