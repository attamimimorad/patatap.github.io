/*

// var p = document.createElement('p')
// console.log(p);

var a = [ 1, 2, 45, 67 ,89];

console.log( a );
// tableau

console.log( a.length );
// nmbre element dans le tableau

console.log( a[ 0 ] );
// premier element dans le tableau

console.log( a[ 1 ] );
// dexieme element dans le tableau

console.log( a[ 10 ] );
 // dixieme element dans le tableau

console.log( a[ a.length - 1 ] );
// dernier element en se sur la longeur du tableau

for( var index = 0; index < a.length; index++ ){
	console.log( index, a[ index ] );

}

a.push( 100 );
console.log( a );

var b = {
	prop1: 10,
	prop2 : 150,
	prop3 : "test"
};
console.log( b );
console.log( b.prop2 );

b.test = true;
console.log( b.test );

*/




var b = {
	prop1: 10,
	prop2 : 150,
	prop3 : "test"
	sayHello : function( name ){
		console.log("hello" + name );
	}
};

b.sayHello( "bitch" );
