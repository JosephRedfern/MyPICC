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
			var data = JSON.parse(localStorage.getItem('qr'));
			alert("LS: " + data["pn"]);
		});
	};

	reader.readAsDataURL(selectedFile);
	var image = document.getElementById("qrimage");
}

$(document).ready(function(){
	$('#clear').click(function(){
		alert('clear!');
		localStorage.clear();
	});

	$('#scan').click(function(){
		$('#fileField').click();
	});
});


function mydata(){
	var data = JSON.parse(localStorage.getItem('qr'));
	$('#title').text("MyPICC - "+data.pn);
	$('#pn').text(data.pn);
	$('#indate').text(data.indate);
	$('#type').text(data.type);
	$('#reason').text(data.reason);
	$('#length').text(data.length);
	$('#hb').text(data.hb);
}
