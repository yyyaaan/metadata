$(document).ready(function(){
    $("#btn-a2").fadeOut();
    $("#btn-b2").fadeOut();
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.collapsible').collapsible({ accordion: false });
    $('.materialboxed').materialbox({
      onOpenStart: function(e){
        e.src = e.attributes['data-enlarge-image'].nodeValue;
      }    
    });
  });
  
  
  