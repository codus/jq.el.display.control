(function($) {
  $.fn.elDisplayControl = function(options) {
    // { 
    //    "val1": selector, //selector to be displayed when the selected value is "val1"
    //    "val2": selector  //selector to be displayed when the selected value is "val2"
    //  }

    var valueElementsToShowHash = $.extend({}, options);

    return this.each(function() {
      $(this).change(onChange);

      var currentSelect = this;
      
      $(document).ready(function() {
        var currentValue = $(currentSelect).val();
        showElementsForValue(currentValue);
      });

    });
  
    function onChange() {
      var currentValue = $(this).val();
      showElementsForValue(currentValue);
    }

    function showElementsForValue(value) {
      $.each(valueElementsToShowHash, function(i, item) {
        var currentElement = $(valueElementsToShowHash[i]);
        if (i == value) {
          currentElement.show();
        } else {
          currentElement.hide();
        }
      });
    }

  }
})(jQuery);