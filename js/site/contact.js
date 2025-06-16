
$("#Contact").click(function () {
  if ($("#flexCheckDefault").prop("checked") == false) {
    alert("Lütfen kvkk bildirimini onaylayınız.");
    return;
  }

  var selectedTopic = $("input[name='radio']:checked").siblings('label').text();
  
  if (!selectedTopic) {
    alert("Lütfen bir konu seçiniz.");
    return;
  }

  var Adddata = new FormData();

  Adddata.append("nameSurname", $("#name").val());
  // Adddata.append("phone", $("#phone").val());
  Adddata.append("email", $("#email").val());
  Adddata.append("topic", selectedTopic);
  Adddata.append("message", $("#message").val());

  $.ajax({
    xhr: function () {
      var xhr = new window.XMLHttpRequest();
      xhr.upload.addEventListener("progress",
        function (evt) {
          $(".progress").show();
          $(".progress")
            .html(
              ' <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0">0%</div>');
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;

            $('.progress-bar').css({
              width: percentComplete * 100 + '%'
            });
            $(".progress-bar").html(percentComplete * 100 + '%');
          }
        },
        false);
      return xhr;
    },
    url: "Pages/CreateContactRequest",
    type: "POST",
    processData: false,
    contentType: false,
    data: Adddata,
    success: function (response) {
      if (response.success) {
        setTimeout(function () {
          window.location.href = '/success';
        },
          1000);

      } else {
        var errorMessage = response.message;
        alert(errorMessage);
      }
    },
    error: function (er) {
    }

  });
});

$("#ContactEmail").click(function () {

  var Adddata = new FormData();

  Adddata.append("email", $("#email").val());

  $.ajax({
    xhr: function () {
      var xhr = new window.XMLHttpRequest();
      xhr.upload.addEventListener("progress",
        function (evt) {
          $(".progress").show();
          $(".progress")
            .html(
              ' <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0">0%</div>');
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;

            $('.progress-bar').css({
              width: percentComplete * 100 + '%'
            });
            $(".progress-bar").html(percentComplete * 100 + '%');
          }
        },
        false);
      return xhr;
    },
    url: "Pages/CreateContactEmailRequest",
    type: "POST",
    processData: false,
    contentType: false,
    data: Adddata,
    success: function (response) {
      if (response.success) {
        setTimeout(function () {
          window.location.href = '/success';
        },
          1000);

      } else {
        var errorMessage = response.message;
        alert(errorMessage);
      }
    },
    error: function (er) {
    }

  });
});
