if($(document).ready(function(){var $buttonPlus=$(".qtyplus"),$buttonMin=$(".qtyminus"),$quantity=$(".qty");$buttonPlus.click(function(){$quantity.val(parseInt($quantity.val())+1).trigger("input")}),$buttonMin.click(function(){$quantity.val(Math.max(parseInt($quantity.val())-1,0)).trigger("input")})}),window.matchMedia("(max-width: 768px)").matches){window.addEventListener("scroll",function(){var pageOffset=document.documentElement.scrollTop||document.body.scrollTop,btn2=document.getElementById("scrollToTop");btn2&&(pageOffset>1200?btn2.style.display="block":btn2.style.display="none",pageOffset<1&&(btn2.style.display="block"))});var btn=document.getElementById("scrollToTop");btn&&(btn.style.display="block")}$(".block-swatch__radio:checked").each(function(i){$(this).val()=="Sim Quero Personalizar"?$(".personalizacao").show():$(this).val()=="N\xE3o"&&$(".personalizacao").hide()}),$(".block-swatch__radio").click(function(){$(this).val()==="Sim Quero Personalizar"?$(".personalizacao").show():$(this).val()==="N\xE3o"&&$(".personalizacao").hide()});
//# sourceMappingURL=/cdn/shop/t/2/assets/custom.js.map?v=61427380242408910781729006205