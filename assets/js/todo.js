
//check off specific todo by clicking

$("ul").on("click", "li",function(e){
    $(this).toggleClass("done");
    e.stopPropagation();
});

$("ul").on("click", "span",function(e){
    if (!$(this).parent().hasClass("done")) $(this).parent().toggleClass("done");
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    });
    e.stopPropagation();
});

$("input[type=\"text\"]").keypress(function(e){
    if (e.which === 13) {
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span>"+ newTodo + "</li>");
    }
});

$("#plus").click(function(){
    $("input[type=\"text\"]").slideToggle(1000);
});