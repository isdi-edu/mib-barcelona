/*
ESTE CÓDIGO ESTÁ OFUSCADO PARA PRODUCCIÓN USANDO:

http://www.javascriptobfuscator.com/
http://dean.edwards.name/packer/

El comentado es el original:
----------------------------------------

function e(body, successCallback, errorCallback) {
	$.ajax({
	  url: "http://biko-email-sender.herokuapp.com/send",
	  dataType: "jsonp",
	  jsonpCallback: "callback",
	  data: {
	  	source: 'mib-barcelona',
  		from: 'ruben.bernardez@biko2.com',
  		to: 'ruben.bernardez@biko2.com',
  		subject: 'MIB Barcelona: solicitud web',
  		text: body
  	}
	 }).done(function(response) {
	 	if (response.status === "error") {
	 		errorCallback();
	 	} else {
	   successCallback();
	  }
	 }).fail(function(response) {
	 		errorCallback();
	 });
}

*/

var _0xd47d=["\x66\x61\x69\x6C","\x73\x74\x61\x74\x75\x73","\x65\x72\x72\x6F\x72","\x64\x6F\x6E\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x62\x69\x6B\x6F\x2D\x65\x6D\x61\x69\x6C\x2D\x73\x65\x6E\x64\x65\x72\x2E\x68\x65\x72\x6F\x6B\x75\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x73\x65\x6E\x64","\x6A\x73\x6F\x6E\x70","\x63\x61\x6C\x6C\x62\x61\x63\x6B","\x6D\x69\x62\x2D\x62\x61\x72\x63\x65\x6C\x6F\x6E\x61","\x72\x75\x62\x65\x6E\x2E\x62\x65\x72\x6E\x61\x72\x64\x65\x7A\x40\x62\x69\x6B\x6F\x32\x2E\x63\x6F\x6D","\x4D\x49\x42\x20\x42\x61\x72\x63\x65\x6C\x6F\x6E\x61\x2C\x20\x73\x6F\x6C\x69\x63\x69\x74\x75\x64\x20\x77\x65\x62","\x61\x6A\x61\x78"];function e(_0x8e6bx2,_0x8e6bx3,_0x8e6bx4){$[_0xd47d[10]]({url:_0xd47d[4],dataType:_0xd47d[5],jsonpCallback:_0xd47d[6],data:{source:_0xd47d[7],from:_0xd47d[8],to:_0xd47d[8],subject:_0xd47d[9],text:_0x8e6bx2}})[_0xd47d[3]](function (_0x8e6bx5){if(_0x8e6bx5[_0xd47d[1]]===_0xd47d[2]){_0x8e6bx4();} else {_0x8e6bx3();} ;} )[_0xd47d[0]](function (_0x8e6bx5){_0x8e6bx4();} );} ;