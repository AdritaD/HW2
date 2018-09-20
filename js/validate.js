$(document).ready(function() {
	    //form validation
    $(function(){

      $("#username").after("<span id='u_info'>*</span>");
      $('#u_info').hide();

      $("#password").after("<span id='pas_info'>*</span>");
      $('#pas_info').hide();

      $("#email").after("<span id='e_info'>*</span>");
      $('#e_info').hide();


       var e_username =false;
       var e_password =false;
       var e_email =false;

   


       $('#username') .focusin(function(){
          $('#username').css('background-color','white');
          $('span#u_info').addClass('info').removeClass('ok').removeClass('error');
          $('#u_info').html("InfoMessage");
          $('#u_info').css('color','black');
          $('#u_info').show(); 
       });


       $('#username') .focusout(function(){
          check_username();

       });


       $('#password') .focusin(function(){
          $('#password').css('background-color','white');
          $('span#pas_info').addClass('info').removeClass('ok').removeClass('error');
          $('#pas_info').html("InfoMessage");
          $('#pas_info').css('color','black');
          $('#pas_info').show(); 
       });

       $('#password') .focusout(function(){
          check_password();
       });

  

        $('#email') .focusin(function(){
          $('#email').css('background-color','white');
          $('span#e_info').addClass('info').removeClass('ok').removeClass('error');
          $('#e_info').html("InfoMessage");
          $('#e_info').css('color','black');
          $('#e_info').show(); 
       });

       $('#email') .focusout(function(){
          check_email();
       });

      

       function check_username()
       {

        var username = $('#username').val();
    var uReg = /^[a-zA-Z0-9]{1,10}$/;
       if(!username == '' && uReg.test(username))
       {
        $('#pas_info.error').hide(); 
        $('span#u_info').addClass('ok').removeClass('error').removeClass('info');
         $('#u_info.ok').html("OK");
        
         $('#u_info.ok').show(); 
       }
       else
       { 
        $('span#u_info').addClass('error').removeClass('ok').removeClass('info');
         $('#u_info.error').html("Error");
        
         $('#u_info.error').show();
         
         e_username =true;
       }
       }


        function check_password()
       {
       	var textBox = $("#password");
       var textLength = textBox.val().length;

         if(textBox.value=='' || textLength<6)
         {
          $('span#pas_info').addClass('error').removeClass('ok').removeClass('info');
        $('#pas_info.error').html("Error");
        
        $('#pas_info.error').show();

         e_password =true;
        }
       else
       {
        $('#pas_info.error').hide();
        $('span#pas_info').addClass('ok').removeClass('error').removeClass('info');
        $('#pas_info.ok').html("OK");
        
        $('#pas_info.ok').show();
       }
       }


        function check_email()
       {
        var email = $('#email').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{3})?$/;
       if(!email == '' && emailReg.test(email))
       {
       $('#e_info.error').hide();
       $('span#e_info').addClass('ok').removeClass('error').removeClass('info');
       $('#e_info.ok').html('OK');
      
         $('#e_info.ok').show();

          
       }
       else
       {
        $('span#e_info').addClass('error').removeClass('ok').removeClass('info');
         $('#e_info.error').html('Error');
         
         $('#e_info.error').show();

         e_email =true;
       }
       }
       
    });
});
