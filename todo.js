$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).is(":checked")){
          var elementThatWasClicked = $(this)
          console.log(elementThatWasClicked)
          elementThatWasClicked.parent().remove()
          ;
        }
    });
});
