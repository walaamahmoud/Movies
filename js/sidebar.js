export class Sidebar
{
    constructor()
    {
        this.sideBar = document.getElementById("sideBar");
        this.animation();
    }
    animation()
    {
        $("#toggle").click(function () { 

            let sideBarWidth = `240px`;
              if($("#sideBar").css("left") == "0px")//hwa bara
              {
                  $("#toggle").removeClass("fa-times");
                $("#sideBar").animate({left:`-${sideBarWidth}`} , 500, function ()
                 { 
                    $("#items").children().animate({opacity: `0` , paddingTop : `500px`}, 1000);
                  });  
              }
              else
              {
                $("#toggle").addClass("fa-times");
                $("#sideBar").animate({left:`0px`} , 500 , function () 
                {  
                    $("#items").children().animate({opacity: `1` , paddingTop : `25px`}, 1000);
                });
              }
           });
          
    }
}