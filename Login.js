// function onSubmit()
// {

//     const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     document.getElementById("user").innerHTML = this.responseText;
//     document.getElementById("pass").innerHTML=this.responseText;
//     }
//   xhttp.open("Post", "", true);
//   xhttp.send();
    
   
// }

$(document).ready(function() {

    $('#button').click(function() {

      var username = $('#user').val();

      var password = $('#pass').val();

      var personJson = {

          UserName: username,

          Password: password,

        }

      $.ajax({

        dataType: 'json',

        type: 'Post',

        url: 'http://localhost:57678/api/Details/loginDetails',

        data: JSON.stringify(personJson),

        contentType: 'application/json; charset=utf-8',

        success: function(data) { //change spelling here

          console.log(data);

          if(data.Status=='Success'){

          window.location.replace("file:///D:/JavaScript/SuccessPage.html")

        }},

        error: function(error) {

          console.log(error);

        }



      });

    });

  });

