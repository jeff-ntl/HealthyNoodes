$(document).ready(function() {
var champion = [
        {
            'num':1,
		    'name': "Xayah",
	        'region':'Vastaya',
	        'position':'ADC/Jungler'
        },
        {
            'num':2,
		    'name': "Rakan",
	        'region':'Vastaya',
	        'position':'Support/Mid'
        },
        {
            'num':3,
		    'name': "Master Yi",
	        'region':'Ionian',
	        'position':'Jungler/Top'
        }
  ];

var source   = $("#some-template").html();
var template = Handlebars.compile(source);
var theCompiledHtml = template(champion);
$("#content-placeholder").append(theCompiledHtml);

$('#emplist').submit(function() {
  newemp= {
	 num:$('#num').val(),
	 name:$('#name').val(),
	 region:$('#region').val(),
	 position:$('#position').val()
  }

  champion.push(newemp);
  var theCompiledHtml = template(champion);
  $("#content-placeholder").append(theCompiledHtml);
  $('#modalForm').modal('hide');
  $('input[type="text"]').each(function() {
		$(this).val("");
  });
});
});