 $( document ).ready(function() {
                var confirmedCase, date,recovered,tableContent;
                
                $.get("https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic", function( data ) {
        
                   $(data).find("#mw-content-text .infobox").find("tr").each(function(){
                        var header=$(this).find("th").text();

                        if(header=="Confirmed cases"){
                            confirmedCase=$(this).find("td").text();
                            $("#confirmedCases").text(confirmedCase);
                        }
                        if(header=="Recovered"){
                            recovered=$(this).find("td").text();
                            $("#recovered").text(recovered);
                        }

                        if(header=="Date"){
                            date=$(this).find("td").text();
                            $("#date").text(date);
                        }

                   });

                   $(data).find("#thetable").find("tbody").find("tr").each(function(){
                        
                        tableContent+="<tr>";
                        tableContent+="<td>"+$(this).find("th a").text()+"</td>";
                        tableContent+="<td>"+$(this).find("td:eq(0)").text()+"</td>";
                        tableContent+="</tr>";

                   });
                   $("#countryData").append(tableContent);



        $.post("http://localhost:3000/scrape/",
        {
            "Confirmed" : confirmedCase,
            "recovered" : recovered,
            "Date" : date
        },
        function(data,status){
            localStorage.setItem("id",data.createdProduct._id);
        });
    


             });





    });
