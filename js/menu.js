var menuBtn = $( "#menuBtn" );
var btnLine = menuBtn.find( ".menuBtn__line" );
var menu = $( "#menu" );
var searchBtn = $( "#searchBtn" );
var search = $( "#searchWrap" );


function showHide( event ){
	
	event.preventDefault();
	
	if ( searchBtn.is( event.target ) ) {
		//console.log("search");
		search.toggleClass( "search__shown" );
		if ( search.hasClass( "search__shown" ) ) {

			search.stop().slideDown( 600 );
			if ( menu.hasClass( "menu__shown" ) ) {

				menu.removeClass( "menu__shown" );
				btnLine.removeClass( "menu__line_close" );
				menu.hide();

			}

		}
		else {

			search.stop().slideUp( 300 );

		}
		
	}
	else if ( menuBtn.is( event.target ) || btnLine.is( event.target ) ) {
		//console.log("menu");
		menu.toggleClass( "menu__shown" );
		btnLine.toggleClass( "menu__line_close" );
		if ( menu.hasClass( "menu__shown" ) ) {

			menu.stop().slideDown( 600 );
			if ( search.hasClass( "search__shown" ) ) {

				search.removeClass( "search__shown" );
				search.hide();

			}

		}
		else {

			menu.stop().slideUp( 300 );

		}

	}
	
	
	
}

menuBtn.bind( "click", showHide );
searchBtn.bind( "click", showHide );