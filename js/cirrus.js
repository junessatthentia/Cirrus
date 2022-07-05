// *** File Picker
$(document).on('change', '.file-input', function() {
        

  var filesCount = $(this)[0].files.length;
  
  var textbox = $(this).prev();

  var files = $(this)[0].files;

  var text="";
  
  for (let i = 0; i < files.length; i++) {
    let file = files.item(i);
    text += '<div class="file-uploaded"><span class="fileName">' + file.name + '</span><button class="btn btn-link"><svg id="icon" class="tc-icon tc-icon16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" ><defs><style>.cls-1{fill:#000000;}.cls-2{fill:#000000;}</style></defs><title>close</title><polygon class="cls-1" points="24 9.4 22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4"/><rect class="cls-2"/></svg></button></div>';
  }
  document.getElementById("files-uploaded").innerHTML += text;
});

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