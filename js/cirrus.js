// *** Rich Text Editor
tinymce.init({
  selector: 'textarea#editor',
  skin: 'bootstrap',
  height: 168,
  plugins: 'lists, link, image, media',
  toolbar: 'bold italic underline bullist numlist | alignleft aligncenter alignright alignjustify | link image | table | removeformat',
  menubar: false,
  });

//*** Password Widget
function verifyPassword(){
  var pwField = $("#PasswordInput");
  var pw = pwField.val();
  pwField.removeClass("is-invalid");
  $(".pw-description.is-invalid").removeClass("is-invalid");
  $(".pw-reqs li").removeClass("error");

  if (pw.length > 8){
    $("#pw-req-8char").addClass("success");
  }else{
    $("#pw-req-8char").removeClass("success");
  }
  if ( pw.match(/[A-Z]/) ) {
    $("#pw-req-upper-char").addClass("success");
  }else{
    $("#pw-req-upper-char").removeClass("success");
  }
  if ( pw.match(/\d/) ) {
    $("#pw-req-number").addClass("success");
  }else{
    $("#pw-req-number").removeClass("success");
  }
  if (pw.match(/[!@#$%^&?*()<>{}/"]/)){
    $("#pw-req-special").addClass("success");
  }else{
    $("#pw-req-special").removeClass("success");
  }

  return false;
};

function errorCheckPassword(){
var pw = $("#PasswordInput").val();

if (pw.length < 8){
  $("#pw-req-8char").removeClass("success");
  $("#pw-req-8char").addClass("error");
  $("#PasswordInput").addClass("is-invalid");
  $(".pw-description").addClass("is-invalid");
}
if (!pw.match(/[A-Z]/)) {
  $("#pw-req-upper-char").removeClass("success");
  $("#pw-req-upper-char").addClass("error");
  $("#PasswordInput").addClass("is-invalid");
  $(".pw-description").addClass("is-invalid");
}
if ( !pw.match(/\d/) ) {
  $("#pw-req-number").removeClass("success");
  $("#pw-req-number").addClass("error");
  $("#PasswordInput").addClass("is-invalid");
  $(".pw-description").addClass("is-invalid");
}
if (!pw.match(/[!@#$%^&?*()<>{}/"]/)){
  $("#pw-req-special").removeClass("success");
  $("#pw-req-special").addClass("error");
  $("#PasswordInput").addClass("is-invalid");
  $(".pw-description").addClass("is-invalid");
}

return false;
};