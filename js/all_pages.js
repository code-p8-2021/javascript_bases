    $(window).load(function(){
      $( 'a[href^="//"],a[href^="http"]' )
    .not( '[href*="' + window.location.hostname + '"]' ).click(function(){
            alert("Pensez à ouvrir les liens hors de l'iframe de glitch.com\nMerci...")
            return true;
        })
    })
