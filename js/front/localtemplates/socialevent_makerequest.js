function makeSocialEventRequest(element) {
   let btnSubmit = $(element);
   let modal = $(element).closest('#socialRequestMake');
   btnSubmit.attr('disabled', 'disabled');
   let data = {};
   let socialEventId = btnSubmit.data('socialevent-id');
   // let data = "socialEvent=" + socialEventId;
   data["socialEvent"] = socialEventId;
   // let formName = form.attr('name');

   // data = form.serializeFormJSON();
   // data = new FormData(document.querySelector('form.pre-validate'));
   console.log(data);

   // removeErrorMessages();
   let pdata = JSON.stringify(data);
   $.ajax({
      type: 'POST',
      url: '/socialevents/makerequest',
      data: pdata,
      // datatype:'text',
      success: function(data) {
         $('#socreqModal').html('Заявка отправлена');
         console.log(data);
         return true;
      },
      error: function(xhr, ajaxOptions, thrownError) {
         console.log(xhr);
         alert(xhr.responseText);
      },
      cache: false,
      contentType: false,
      processData: false

   }).always(function() {
      console.log('always action');
      // btnSubmit.removeAttr('disabled');
      $(modal).modal('toggle');
   });
   return false;
}

$('#socialevent-makerequest').click(function (e){
   // e.preventDefault();
   // let btnSubmit = $(this);
   let btnSubmit = $(this);
   btnSubmit.attr('disabled', 'disabled');
   let data = [];
   let socialEventId = btnSubmit.data('socialevent-id');
   data['id'] = socialEventId;
   let formName = form.attr('name');

   // data = form.serializeFormJSON();
   // data = new FormData(document.querySelector('form.pre-validate'));
   console.log(data);

   // removeErrorMessages();

   $.ajax({
      type: 'POST',
      url: 'socialevents/makerequest',
      data: data,
      success: function(data) {

         console.log(data);

         if (data.isSuccess && !data.isValid) {
            return false;
         } else {
            return true;
         }
      },
      cache: false,
      contentType: false,
      processData: false

   }).always(function() {
      console.log('always action');
      btnSubmit.removeAttr('disabled');
   });
   return true;
});
