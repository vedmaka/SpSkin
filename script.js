/**
 * Created by vedmaka on 20.01.2015.
 */
$('.has-submenu').click(function(){

	if( $(this).hasClass('submenu-opened') ) {
		$(this).removeClass('submenu-opened');
	}else{
		$('.submenu-opened').removeClass('submenu-opened');
		$(this).addClass('submenu-opened');
	}

});