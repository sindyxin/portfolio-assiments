$(document).ready(function(){
    $("#accordion").accordion({
        // header: "h1",
        // collapsible: true,
        // autoHeight: 0,
        // navigation: true 
        heightStyle: "content"
    });
    $( "#tabs" ).tabs({
        event: "mouseover"
    });
})