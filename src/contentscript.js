/* global chrome */
console.log('Content script loaded');

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(
	function(request) {
		console.log(request.action);

		// Only care about GenerateTOC messages
		if (request.action == 'GenerateTOC') {
			console.log('Generate TOC - Max depth = ' + request.hstop);

			// Seed the output with a H1 heading
			var output = '# Table of Contents\n';

			// Iterate through all header elements in the markdown body
			$('.markdown-body').find(':header').each(function(){
				// Get vars ready
				var type = $(this).prop('tagName');
				var title = $(this).text().trim();
				var href = $(this).find('a').attr('href').trim();

				// Write to output and return when max depth check hit
				if (type == 'H1') {
					output += '* [' + title + '](' + href + ')\n';
				}
				if (request.hstop == 'h1') return;

				if (type == 'H2') {
					output += '  * [' + title + '](' + href + ')\n';
				}
				if (request.hstop == 'h2') return;

				if (type == 'H3') {
					output += '    * [' + title + '](' + href + ')\n';
				}
				if (request.hstop == 'h3') return;

				if (type == 'H4') {
					output += '      * [' + title + '](' + href + ')\n';
				}
				if (request.hstop == 'h4') return;

				if (type == 'H5') {
					output += '        * [' + title + '](' + href + ')\n';
				}
				if (request.hstop == 'h5') return;

				if (type == 'H6') {
					output += '          * [' + title + '](' + href + ')\n';
				}
				if (request.hstop == 'h6') return;
			});

			// Pop with results
			var wnd = window.open('about:blank', '_blank', 'width=600, height=400');
			wnd.document.write('<html><body><pre>'+ output + '</pre></body></html>');
		}
	}
);