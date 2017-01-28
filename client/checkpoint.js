$(document).ready(function(){
			$('#generateButton').click(function(){
				$('#qr').show();
				var data = {
					area: $("input[name='area']:checked").val(),
					feel: $("input[name='feel']:checked").val(),
					dressing: $("input[name='dressing']:checked").val(),
					painindex: $("input[name='painindex']:checked").val(),
					temp: $("input[name='temp']:checked").val(),
					breathing: $("input[name='breathing']:checked").val(),
					skin: $("input[name='skin']:checked").val(),
					urine: $("input[name='urine']:checked").val(),
				};

				var runningTotal = 0;

				if(data.dressing == 'fallingOff'){
					runningTotal++;
				}

				if(data.painindex == 'yesPain'){
					runningTotal++;
				}

				if(data.area == 'redness' || data.area == 'swelling'){
					runningTotal++;
				}

				if(data.feel == 'unwell'){
					runningTotal++;
				}

				if(data.breathing == 'breathless' || data.breathing == 'verybreathless'){
					runningTotal++;
				} 

				if(data.skin == 'matted'){
					runningTotal++;
				}

				if(data.urine == 'no'){
					runningTotal++;
				}

				if(data.temp == 'lessthan36' || data.temp == 'greaterthan37' || data.temp == 'shivering' || data.temp == 'hot'){
					runningTotal++;
				}



				var dataJson = JSON.stringify(data);

				alert(dataJson);

				alert(runningTotal);

				$('#qrcode').empty();
				$('#qrcode').qrcode(dataJson);
			});
		});