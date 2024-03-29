( function( $ ) {
	'use strict';

	$( document ).ready( function() {
		
		$( '.tab-content' ).hide();
		$( '.tab-content' ).eq(0).show();
		$( '.tab-title-layout' ).eq(0).addClass( 'active' );

		$( document ).on( 'click', '.tab-title-layout', function( e ) {

			e.preventDefault();
			$( '.tab-title-layout' ).removeClass( 'active' );
			$( this ).addClass( 'active' );
			$( this ).blur();
			var open = $( this ).data( 'open' );
			
			$( '.tab-content' ).hide();
			$( '#'+ open ).show();
		});

		$( document ).on( 'click', '#open-filter', function( e ) {

			e.preventDefault();

			$( '.filter' ).eq(0).find( 'select' ).each( function( i ) {
				
				var index = $( this )[0].selectedIndex;
				var value = index ?? $( this )[0].options[index].value;
				if ( value ) {
					
					$( this ).find( 'option[value='+ value +']' ).eq(0).attr( 'selected','selected' );
				}
			});

			var filter = $( '.filter' ).eq(0).html();
			
			$.dialog({
			    title: 'Filtro',
			    content: filter,
			    boxWidth: '380px',
    			useBootstrap: false
			});
		});

		$( document ).on( 'click', '#open-order', function( e ) {

			e.preventDefault();

			var order = $( '.order' ).eq(0).html();
			
			$.dialog({
			    title: 'Ordenação',
			    content: order,
			    boxWidth: '380px',
    			useBootstrap: false
			});
		});

		$( document ).on( 'click', '#open-export', function( e ) {

			e.preventDefault();

			TableExport.prototype.charset = "charset=iso-8859-1";
			TableExport.prototype.defaultButton = "button";
			TableExport.prototype.formatConfig.xlsx.buttonContent = '.xlsx';

			var table = TableExport( document.querySelectorAll( '#appro-table .table' )[0] );
			table.update({
				filename: 'nome_doc',
				formats: ['xlsx'],
				position: 'top'
			});

		});

		$( document ).on( 'click', '.add', function( e ) {

			e.preventDefault();

			var title = $( '#post-add-title' ).eq(0).val();
			var post_add = $( '.post-add' ).eq(0).html();
			
			$.dialog({
			    title: title,
			    content: post_add,
			    boxWidth: '400px',
    			useBootstrap: false
			});
		});

		$( document ).on( 'click', '#data_filter', function( e ) {

			e.preventDefault();

			var title = $( '#data_filter-title' ).eq(0).val();
			var content = $( '.data_filter-content' ).eq(0).html();
			
			$.dialog({
			    title: title,
			    content: content,
			    boxWidth: '350px',
    			useBootstrap: false
			});
		});

		$( document ).on( 'click', '.btn-next', function( e ) {

			e.preventDefault();

			$(this).closest('.step-group').hide();
			$(this).closest('.step-group').next('.step-group').show();
			
			$('.btn-next').prop('disabled', true);
		});

		$( document ).on( 'click', '.btn-previous', function( e ) {

			e.preventDefault();

			$(this).closest('.step-group').hide();
			$(this).closest('.step-group').prev('.step-group').show();
			$('.btn-next').prop('disabled', false);
		});

		$( document ).on( 'change', '.search_type input[name="type"]', function( e ) {

			e.preventDefault();
			$('.btn-next').prop('disabled', false);
		});

		$( document ).on( 'change', '#add-ex-step-2 input[name="publish_date"]', function( e ) {

			e.preventDefault();
			$('.btn-next').prop('disabled', false);
		});
	});

})( jQuery );

// removendo confirmação de POST
if ( window.history.replaceState ) {
  //window.history.replaceState( null, null, window.location.href );
}
