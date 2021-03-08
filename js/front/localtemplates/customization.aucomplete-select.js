$(document).ready(function() {
    $('.js-education-autocomplete').each(function() {
        var autocompleteUrl = $(this).data('autocomplete-url');
        $(this).autocomplete({hint: false}, [
            {
                source: function(query, cb) {
                    $.ajax({
                        url: autocompleteUrl+'?query='+query
                    }).then(function(data) {
                        console.log('autocomplete', data.organizations);
                        cb(data.organizations);
                    });
                },
                displayKey: 'schoolName',
                debounce: 500, // only request every 1/2 second
                templates: {
                    empty: function () {

                        return '<span>По Вашему запросу ничего не найдено.</span>'
                    },
                    suggestion: function(suggestion) {
                        console.log(suggestion);
                        var sHtml = '<span>'+suggestion.schoolName+'</span><br>';
                        sHtml =sHtml +'<span style="font-size:70%;color=grey;">'+suggestion.lawAddress+'</span>';
                        return sHtml;
                      }
                }
            }
        ]).on('autocomplete:selected', function(event, suggestion, dataset, context) {
            console.log(event, suggestion, dataset, context);
        });
    });
});
