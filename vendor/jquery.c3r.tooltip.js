/*
 * jQuery c3r tooltip Plugin
 * Copyright 2017, cod3r.pl
 */

$.fn.tooltip = function(options)
{
	var settings = {
		'message': '',
		'button': '&nbsp;[...]',
		'open_mode': 'mouseover',
		'close_mode': 'mouseout',
		'top_offset': 13,
	};

	$.extend(settings, options);

	var click = $('<span>').addClass('infotip-click').html(settings['button']).css({'display': 'inline-block', 'cursor': 'pointer'});

	tooltip(this, click, settings['message'], settings['open_mode'], settings['close_mode'], settings['style'], settings['top_offset']);
}


function tooltip(element, click, message, open_mode, close_mode, style, top_offset)
{
	element.append(click);

	$(document).on(open_mode, '.infotip-click', function(){
		$('body').addClass('tooltip-active');
		infotipShow(this, message, top_offset);
	});
	
	$(document).on(close_mode, '.infotip-click', function() {
		$('body').removeClass('tooltip-active');
		infotipHide();
	});

	$(document).on('click touchstart', 'body.tooltip-active', function(){
		$('body').removeClass('tooltip-active');
		infotipHide();
	});

	function infotipShow(element, message, top_offset)
	{
		var element = $(element);
		var elementParent = $(element).parent();

		var boxWidth = elementParent.width();
		var clickTop = element.position().top;

		var infotip = $('<span>').addClass('infotip-full').text( message );

		var defaultStyle = {
			'width': boxWidth,
			'box-sizing': 'border-box',
			'position': 'absolute',
			'background': '#fff',
			'border': '1px solid #000',
			'box-sizing': 'border-box',
			'padding': '5px',
			'color': '#000',
			'border-radius': '5px',
		};

		$.extend(defaultStyle, style);

		infotip.css(defaultStyle);

		element.parent().append(infotip);

		infotip.css({
			'top': clickTop - (infotip.height() + top_offset),
			'left': elementParent.position().left
		});
	}

	function infotipHide()
	{
		$('.infotip-full').remove();
	}
}