function haveQR(){
	if(localStorage.getItem("qr") == null){
		return false;
	}else{
		return true;
	}
}


function qrCodeChosen(event){
	var selectedFile = event.target.files[0];
	var reader = new FileReader();

	var imgtag = document.getElementById("qrimage");
	imgtag.title = selectedFile.name;

	reader.onload = function(event) {
		imgtag.src = event.target.result;
		QCodeDecoder().decodeFromImage(image,function(er,res){
			localStorage.setItem('qr', res); //JSON.parse(res));
			alert(res);
			var data = JSON.parse(localStorage.getItem('qr'));
			setMenu();
			alert("Successfully Registered: " + data["p"]);
			window.location.replace("mydata.html");
		});
	};

	reader.readAsDataURL(selectedFile);
	var image = document.getElementById("qrimage");
}


function setMenu(){
	if(haveQR()){
		$('#qrmenu').html('<a href=\"mydata.html\">My Data</a>');
	}else{
		$('#qrmenu').html('<a href=\"setup.html\">Scan QR</a>');
		$('#instructions').show();
	}

}


$(document).ready(function(){
	$('#instructions').hide();
	setMenu();

	$('#clear').click(function(){
		localStorage.clear();
		setMenu();
	});

	$('#scan').click(function(){
		$('#fileField').click();
	});
});

function mydata(){
	var data = JSON.parse(localStorage.getItem('qr'));
	$('#title').text("MyPICC - "+data.p);
	$('#pn').text(data.p);
	$('#indate').text(data.i);
	$('#type').text(data.t);
	$('#reason').text(data.r);
	$('#length').text(data.l);
	$('#hb').text(data.h);
	$('#ec').text(data.e);
}
