function blink_lights(element) {
		$(element).each(
						function (i) {
								if ($(this).attr("class") != "blinking") {
										var new_letters = "";
										var letters = $(this).html();
										$(this).addClass("blinking");
										for (j=0; j<letters.length; ++j) {	
												new_letters += "<span class=\"blinking_light\">" + letters[j] + "</span>";
												$(this).html(new_letters);
										}
								}
								$(element + " .blinking_light").each (
										function (k) {
												var random = Math.floor(Math.random() * 256);
												var random2 = Math.floor(Math.random() * 256);
												if (random2 % 2 == 1) {
														if (random % 4 == 0) {
																$(this).css("color", "#FF0");
														}
														else if (random % 4 == 1) {
																$(this).css("color", "#0F0");
														}
														else if (random % 4 == 2) {
																$(this).css("color", "#F00");
														}
														else if (random % 4 == 3) {
																$(this).css("color", "#00F");
														}
												}
										}
										);
						}
		);
}

