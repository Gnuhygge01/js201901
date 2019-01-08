let a = 1;
a++;

const pi = 3.141519;

let navn: string = "Mikkel";

function add(a: number, b: number)
{
    return a + b;
}

enum Kulør
{
    Hjerter,
    Spar,
    Ruder,
    Klør
}

function Test(k: Kulør)
{



}

Test(Kulør.Ruder);

interface Person
{
    navn: string,
    alder: number
}

function Test2(p: Person)
{

}

Test2({ navn: "mikkel", alder: 12 });

var test3 = (a, b) => a + b;