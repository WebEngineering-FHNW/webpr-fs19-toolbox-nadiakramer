// atoms
const id    = x =>      x;
const konst = x => y => x;


// derived
const I  = id;
const K  = konst;       //const fst = konst;
const KI = konst (id);  //const snd = konst(id);

//const T = x => y => konst(x)(y); //vor dem Kürzen
const T = K; //nach dem Kürzen
const F  = KI;

//const and = p => q => p(q(F)(F))(q(F)(T));
const and = p => q => p(q)(p);

//const or = p => q => p(q(T)(T))(q(T)(F));
//const or = p => q => p(p)(q);
//const or = p => p(p);
const M = f => f(f);
const or = M;

const pair = x => y => (selector => selector(x)(y)); //immutable
const firstname = K;
const lastname = KI;

const triple = x => y => z => (f => f(x)(y)(z));
const firstnameTriple = x => y => z => x;
const lastnameTriple = x => y => z => y;
const berufTriple = x => y => z => z;

const Left = x => f => g => f(x);
const Right = x => f => g=> g(x);
//const either = e => f => g => e(f)(g);
//const either = e => f =>  e(f);
//const either = e => e;
const either = id;


//const [Person, firstname, lastname, age] = Tuple(3);
//const dieter = Person("Dieter")("Holz")(53);
//dieter(firstname);