function header(){
    $.ajax({
        url: "./header/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}