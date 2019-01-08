var a = 1;
a++;
var pi = 3.141519;
var navn = "Mikkel";
function add(a, b) {
    return a + b;
}
var Kulør;
(function (Kulør) {
    Kulør[Kulør["Hjerter"] = 0] = "Hjerter";
    Kulør[Kulør["Spar"] = 1] = "Spar";
    Kulør[Kulør["Ruder"] = 2] = "Ruder";
    Kulør[Kulør["Kl\u00F8r"] = 3] = "Kl\u00F8r";
})(Kulør || (Kulør = {}));
function Test(k) {
}
Test(Kulør.Ruder);
function Test2(p) {
}
Test2({ navn: "mikkel", alder: 12 });
var test3 = function (a, b) { return a + b; };
