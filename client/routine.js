$(document).ready(function(){
			$('#generateButton').click(function(){
				$('#qr').show();
				var data = {
					arealook: $("input[name='arealook']:checked").val(),
					lineworks: $("input[name='lineworks']:checked").val(),
					problem: $("input[name='problem']:checked").val(),
				};

				var runningTotal = 0;

				if(data.arealook == 'concerns'){
					alert("You will now be redirected to our SOS page for more information");
					location.replace("sos.html");
				}

				if(data.lineworks == 'no'){
					alert("You need to see a doctor");
					location.replace("sos.html");
				}

				if(data.problem == 'displaced' || data.area == 'blocked'){
										alert("You will now be redirected to our SOS page for more information");
					location.replace("sos.html");

				}


				var dataJson = JSON.stringify(data);

				alert(dataJson);

				alert(runningTotal);

				$('#qrcode').empty();
				$('#qrcode').qrcode(dataJson);
			});
		});