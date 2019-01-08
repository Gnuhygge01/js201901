
var o = $("#overskrift");
o.html("dglæsdglskdgh sædjkg ");
//o.css("color", "red");
o.addClass("rød");

$("#btn").click(function ()
{
    o.css("color", "green")
        .slideUp(2000)
        .slideDown(1000);


    $.getJSON("https://jsonplaceholder.typicode.com/users")
        .done(function (data)
        {

            var ul = $("#liste");
            ul.empty();
            for (let i = 0; i < data.length; i++)
            {
                var li = $("<li />");
                li.html(data[i].name);
                ul.append(li);
            }


        }).fail(function ()
        {

        });

});

