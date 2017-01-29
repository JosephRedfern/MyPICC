$(document).ready(function(){
			$('#generateButton').click(function(){
				$('#qr').show();
				var data = {
					arealook: $("input[name='arealook']:checked").val(),
					lineworks: $("input[name='lineworks']:checked").val(),
					problem: $("input[name='problem']:checked").val(),
				};

				if(data.arealook != 'noConcerns' || data.lineworks != 'yes' || data.problem != 'none'){
					alert("You will now be redirected to our SOS page for more information");
					location.replace("sos.html");
				}else{
					alert('Your PICC seems to be functioning correctly. ');
					location.replace('mydata.html');
				}

				var dataJson = JSON.stringify(data);

				$('#qrcode').empty();
				$('#qrcode').qrcode(dataJson);
			});
		});
