function NavHover(sSelector){

	var m = this;
	
	m.menu = $( sSelector );
	m.items = m.menu.find( ".nav__link" );

	m.hoverOn = function( event ){

		var eventTarget = $(event.target).attr( "class" );

		$( m.items ).each( function(){

			if( !( $( this ).hasClass( eventTarget ) ) ){

				$( this ).addClass( "adj__color" );

			}

		} );

	};
	m.hoverOut = function( event ){

		var eventTarget = $(event.target).attr( "class" );

		$( m.items ).each( function(){

			if( !( $( this ).hasClass( eventTarget ) ) ){

				$( this ).removeClass( "adj__color" );

			}

		} );

	};

	m.items.bind( "mouseover", m.hoverOn );
	m.items.bind( "mouseout", m.hoverOut );

}