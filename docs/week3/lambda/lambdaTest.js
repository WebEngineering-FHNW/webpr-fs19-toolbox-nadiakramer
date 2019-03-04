// requires lambda.js

// id
document.writeln( id(1) === 1 );
document.writeln( id(id) === id );

// konst
document.writeln( konst(42)(0) === 42 );
document.writeln( konst(42)(1) === 42 );
document.writeln( konst(42)(null) === 42 );

// kite
document.writeln( konst(id)(null)(42) === 42 );
document.writeln( KI(null)(42) === 42 );

// true
document.writeln( T(1)(0) === 1 );

// false
document.writeln( F(1)(0) === 0 );

// and
document.writeln("AND");
document.writeln( and(F)(F) === F );
document.writeln( and(T)(F) === F );
document.writeln( and(F)(T) === F );
document.writeln( and(T)(T) === T );

// or
document.writeln("OR");
document.writeln( or(F)(F) === F );
document.writeln( or(T)(F) === T );
document.writeln( or(F)(T) === T );
document.writeln( or(T)(T) === T );

// flip
//flip(f)(x)(y) = f(y)(x);

// not
//not(f)(x)(y) = f(y)(x);

// beq

// pair
document.writeln("PAIR");
const dierk = pair("Dierk")("König");
document.writeln(dierk(firstname) ==="Dierk");
document.writeln(dierk(lastname) ==="König");

//triple
document.writeln("TRIPLE");
const dierkTriple = triple("Dierk")("König")("Dozent");
document.writeln(dierkTriple(firstnameTriple) ==="Dierk");
document.writeln(dierkTriple(lastnameTriple) ==="König");
document.writeln(dierkTriple(berufTriple) ==="Dozent");

// pair equal

// either

/*
const safeDiv = num => divisor =
    divisor === 0
    ? Left("schlecht")
    : Right(num / divisor);
either(safeDiv  (1)(0))
                (str => console.log(str))
                (x => console.error(x));
                */
const safeDiv = num => divisor =>
    divisor === 0
    ? Left("schlecht")
    : Right(num / divisor);

either  (safeDiv  (1)(0))
        (console.log)
        (console.error);

// maybe