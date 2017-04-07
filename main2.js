var data = [ ];

for( var i = 0; i<50; i ++){
	data.push( 50 + Math.random() * 150);
}



for(  var i = 0; i<data.length; i++){

	console.log(data[ i ]);
	var div = document.createElement( 'div' )


	div.style.height = '20px';
	div.style.width = data[ i ] + 'px';
	div.style.background = 'black';
	div.style.marginBottom = '10px';

	var p = document.createElement( 'p' )
	p.style.color = 'white';
	p.innerText = data[i];

	document.body.appendChild( div );
	div.appendChild( p );

}









// crée un p avec document.createElement
// modifier son style pour que lme texte soit blanc
// contenue texte en fonction de data[i]
