// app/javascript/application.js

import { Turbo } from "@hotwired/turbo-rails"
import "./controllers"
import "jquery"

// jQuery code
$(document).ready(function(){
  $('#email_field').on('keyup', function(){
    var email = $(this).val();

    $.ajax({
      url: '/check_email',
      data: { email: email },
      dataType: 'json',
      success: function(response) {
        if (response.available) {
          $('#email_availability').text('Email is available').css('color', 'green');
        } else {
          $('#email_availability').text('Email is already taken').css('color', 'red');
        }
      }
    });
  });
});
