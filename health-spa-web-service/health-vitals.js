$(document).ready(function(){
    $("#health-vitals-form").submit(function(event){
        
        var medication=$("#medication").val();
        var comments=$("#comments").val();
        var id=localStorage.getItem("id");
        
        localStorage.setItem("medication",medication);
        localStorage.setItem("comments",comments);
        

        
        
        var patch={
            "medication" : medication,
            "comments" : comments
        }
        
        $.ajax({
            type: 'PATCH',
            url: 'http://localhost:3000/patient/'+id,
            headers: {"Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers":"*",
                    "Access-Control-Allow-Methods":"*"
                        },
            data: JSON.stringify(patch),
            cache: false,
            contentType: 'text/plain',
            xhrFields: {
                withCredentials: false
            },
        }).done(function ($result) {
            //somecode
        });


        event.preventDefault();

    });


});