(function ()
{
    "use strict";


    var a = [5, 1, 7, 10, 3, 6, 1, 4, 85, 5];
    // var a = new Array();
    // a.push(5);

    console.log(a);

    for (var i = 0; i < a.length; i++)
    {
        console.log(a[i]);
    }

    a.forEach(it);

    function it(n)
    {
        console.log(" - " + n);
    }

    a.forEach(function (n)
    {
        console.log(" * " + n);
    });

    var b = a.filter(function (va)
    {

        if (va < 10)
            return true;

        return false;

    });
    console.log(b);


    var regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
    console.log(regex.test("dd@dd.dk"));

    var c = a[555];
    console.log(c);


    try
    {
        var t = "dæflgkdælgk";
        console.log(t.toUpperCse());
    } catch (error)
    {
        // log...
        console.log(error.message);
    }


    test(6);
    try
    {

        test(-1);
    } catch (error)
    {
        // log

    }


    function test(a)
    {

        if (a < 0)
        {
            throw new Error("Forkert a");
        }

    }

    // var i = new Image();
    // i.src = "https://frontimg.dk/users/drf-eb/images/6131177.jpg?t%5Bresize%5D%5Bwidth%5D=610&t%5Bresize%5D%5Bheight%5D=407&t%5Bresize%5D%5Bflag%5D=!&t%5Bquality%5D=85&t%5Bsharpen%5D%5Bmode%5D=variable&t%5Bstrip%5D=true&accessToken=65332ac037b440f7ce308cb0943ca9bfaf1d510ba0784109870a2d893bc02e48";


    test1();

    function test1()
    {
        console.log("test1");
    }

    var test2 = function ()
    {
        console.log("test2");
    };

    test2();


    var tal = 4;
    console.log(tal);
    test3(tal);
    console.log(tal);

    // Værdibaseret
    function test3(a)
    {
        a = 1000000;

    }


    // Reference baseret
    var dato = new Date();
    console.log(dato);
    test4(dato);
    console.log(dato);

    function test4(a)
    {
        a.setFullYear(2000);
    }


    function test5(tal1, tal2)
    {
        // var tal1 = arguments[0];
        // var tal2 = arguments[1];
        // if (tal1 === undefined || tal2 === undefined)
        // {
        //     throw new Error("Forkerte args");
        // }
        return tal1 + tal2;

    }

    test5(1, 2, 3, 4, 5, 6);
    test5(1, 2, 3, 4, 5);
    test5(1, 2, 3, 4);
    test5(1, 2, 3);
    test5(1, 2);
    test5(1);
    test5();

    console.log(test5(4, 5));

    var r = test5;


    function findFunktion()
    {

        var d = new Date();
        if (d.getMilliseconds() >= 500)
        {
            return function (a, b)
            {
                return a + b;
            };
        } else
        {
            return function (a, b)
            {
                return a - b;
            };

        }

    }

    var f = findFunktion();
    console.log(f(2, 2));
    console.log(findFunktion()(5, 5));

    var cc = a.filter(function (n)
    {
        return n < 10;
    });

    console.log(cc);

    var ccc = a.filter((n, i, a) => { return n < 10 });
    console.log(ccc);

    var ccc = a.filter(n => n < 10);
    console.log(ccc);

    var specialCase = function (tekst)
    {
        if (tekst === undefined)
            return "";
        // let array = tekst.split(" ");
        // console.log(array);
        let temp = tekst.toLowerCase();
        let fb = temp.substring(0, 1);
        fb = fb.toUpperCase();
        let res = fb + temp.substring(1);
        return res;
    };

    console.log(specialCase("mikkel cronbErG"));


    var myFunction = function (a, b, callBackDone)
    {

        // meget komplekst....
        let res = a + b;
        callBackDone();
        return res;
    };

    var res = myFunction(5, 5, function ()
    {
        console.log("FÆRDIG");
    });
    console.log(res);

    var res2 = myFunction(5, 5, () => console.log("DONE"));
})();