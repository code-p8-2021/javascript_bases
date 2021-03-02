// Immediately-invoked function expression
(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        // Use $ here...
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();
    $(window).load(function(){
      $( 'a[href^="//"],a[href^="http"]' )
    .not( '[href*="' + window.location.hostname + '"]' ).click(function(){
            alert("top")
            return true;
        })
    })
