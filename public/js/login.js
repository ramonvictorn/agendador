function events(){$("#login").on("click",postLogin)}function getDados(){console.log("getDados()");var o={},n=$("#email");n=n.val();var e=$("#password");return e=e.val(),o.email=n,o.password=e,console.log("Credenciais login",o),o}function postLogin(){$.ajax({url:"/user/login",type:"POST",data:getDados(),dataType:"json",beforeSend:function(){loadingAjax()},success:function(o){sucessAjax(o)},error:function(){console.log("erro")}})}function loadingAjax(){var o=$.find(".login");$(o).addClass("loading");var n=$.find(".state");$(n).html("Authenticating")}function sucessAjax(o){if(console.log("sucess"),o.error){var n=$.find(".login");$(n).addClass("ok");var e=$.find(".state");$(e).html("Usuário não encontrado");var a=$.find("#login");$(a).attr("disabled","disabled"),$(a).removeAttr("disabled"),setTimeout(function(){$(n).removeClass("loading ok"),$(e).html("Login in")},3e3)}else{n=$.find(".login");$(n).addClass("ok");e=$.find(".state");$(e).html("Bem-vindo!"),setTimeout(function(){window.location="age nda"},700)}}$(document).ready(function(){console.log("page ready!"),events()});