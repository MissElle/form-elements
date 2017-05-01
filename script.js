// What's that Input? script.js
 
//-----------------------------------------------------------------------------------//
 
function getValues() {
 
//This pulls the selected values and writes them in the far right column
 
  $('#mychckbx').text($('#mycheckbox').prop('checked'));
  $('#myclr').text($('#mycolor').val());
  $('#mydtlst').text($('#mydatalist').val());
  $('#mydt').text($('#mydate').val());
  $('#mydttm').text($('#mydatetime').val());
  $('#myeml').text($('#myemail').val());
  $('#myfle').text($('#myfile').val());
  $('#mymnth').text($('#mymonth').val());
  $('#mynmbr').text($('#mynumber').val());
  $('#mypsswrd').text($('#mypassword').val());
  $('#myrdio').text($('#myradio option:checked').val());
  $('#myrnge').text($('#myrange').val());
  $('#mysrch').text($('#mysearch').val());
  $('#myslct').text($('#myselect option:selected').val());
  $('#mytlphn').text($('#mytel').val());
  $('#mytxt').text($('#mytext').val());
  $('#mytxtarea').text($('#mytextarea').val());
  $('#mytme').text($('#mytime').val());
  $('#myvrl').text($('#myurl').val());
  $('#mywk').text($('#myweek').val());
 
//-----------------------------------------------------------------------------------//
 
//This pulls the values from the original inputs and mirrors them
  
  if ($('#mycheckbox').is(':checked')) {
    $('#mycheckbox2').prop('checked', true);
  }else {
    $('#mycheckbox2').prop('checked', false);
  }
  $('#mycolor2').val($('#mycolor').val());
  $('#mydatalist2').val($('#mydatalist').val());
  $('#mydate2').val($('#mydate').val());
  $('#mydatetime2').val($('#mydatetime').val());
  $('#myemail2').val($('#myemail').val());
  $('#fileclone2').html($('#fileclone').html());
//  $('#fileclone').clone().appendTo($('#fileclone2').html());
  $('#mymonth2').val($('#mymonth').val());
  $('#mynumber2').val($('#mynumber').val());
  $('#mypassword2').val($('#mypassword').val());
 
  for(var i=0; i<3; i++) {
    if($('input[name=myradio]').eq(i).is(':checked')) {
      $('input[name=myradio2]').eq(i).prop('checked', true);
    }else {
      $('input[name=myradio2]').eq(i).prop('checked', false);
    }
  }
 
  $('#myrange2').val($('#myrange').val());
  $('#mysearch2').val($('#mysearch').val());
 for(var i=0; i<3; i++) {
    if($('#myselect option').eq(i).is(':selected')){
      $('#myselect2 option').eq(i).attr('selected', true);
    }else {
      $('#myselect2 option').eq(i).attr('selected', false);
    }
  }
 
  $('#myoption2').val($('#myoption').val());
  $('#mytel2').val($('#mytel').val());
  $('#mytext2').val($('#mytext').val());
  $('#mytextarea2').val($('#mytextarea').val());
  $('#mytime2').val($('#mytime').val());
  $('#myurl2').val($('#myurl').val());
  $('#myweek2').val($('#myweek').val());
}
 
//-----------------------------------------------------------------------------------//
 
//The first handler loads the initial values after the page is laid out,
//The second handler updates the form everytime there's a change
 

$('document').ready(getValues);
$('form').change(getValues);