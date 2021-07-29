$(".bloc p").css("color","white");

$(".99").addClass("yem");
$(".99 p").css("color","yellow");


var current_selected = ".99";
var pos = current_selected.slice(1,3);




$(document).on("keydown", function (event) {
  var pressed = event.key;
  action(pressed);
});


function action(pressed)
{
    var hori = pos%10;
    var vert = (pos - hori)/10;
    console.log(pos+", vert:"+vert+", hor:"+hori);
    switch(pressed)
    {
      case 'ArrowUp':
      if(vert>0)
      {
        $(current_selected).removeClass("yem");
        $(current_selected+" p").css("color","white");
        pos = pos -10;
        if(pos>9)
        {
            current_selected = "."+pos;
        }
        else
        {
          current_selected = ".0"+pos;
        }

        //alert(current_selected);

        $(current_selected).addClass("yem");
          $(current_selected+" p").css("color","yellow");
      }
      else
      {
        $(current_selected).removeClass("yem");
        $(current_selected).addClass("rem");
        $(current_selected+" p").css("color","red");

        setTimeout(function () {
          $(current_selected).removeClass("rem");
          $(current_selected).addClass("yem");
          $(current_selected+" p").css("color","yellow");

        },200);
      }
      break;

      case 'ArrowDown':

      if(vert<9)
      {
        $(current_selected).removeClass("yem");
        $(current_selected+" p").css("color","white");
        pos = pos+10;
        current_selected = "."+pos;
        //alert(current_selected);

        $(current_selected).addClass("yem");
        $(current_selected+" p").css("color","yellow");
      }
      else
      {
        $(current_selected).removeClass("yem");
        $(current_selected).addClass("rem");
        $(current_selected+" p").css("color","red");

        setTimeout(function () {
          $(current_selected).removeClass("rem");
          $(current_selected).addClass("yem");
          $(current_selected+" p").css("color","yellow");

        },200);
      }

      break;

      case 'ArrowLeft':

      if(hori>0)
      {
        $(current_selected).removeClass("yem");
        $(current_selected+" p").css("color","white");
        pos = pos-1;
        if(pos>9)
        {
            current_selected = "."+pos;
        }
        else
        {
          current_selected = ".0"+pos;
        }
        //alert(current_selected);

        $(current_selected).addClass("yem");
        $(current_selected+" p").css("color","yellow");
      }
      else
      {
        $(current_selected).removeClass("yem");
        $(current_selected).addClass("rem");
        $(current_selected+" p").css("color","red");

        setTimeout(function () {
          $(current_selected).removeClass("rem");
          $(current_selected).addClass("yem");
          $(current_selected+" p").css("color","yellow");

        },200);
      }



      break;

      case 'ArrowRight':

      if(hori<9)
      {
        $(current_selected).removeClass("yem");
        $(current_selected+" p").css("color","white");
        pos = pos+1;
        if(pos>9)
        {
            current_selected = "."+pos;
        }
        else
        {
          current_selected = ".0"+pos;
        }

        //alert(current_selected);

        $(current_selected).addClass("yem");
        $(current_selected+" p").css("color","yellow");
      }
      else
      {
        $(current_selected).removeClass("yem");
        $(current_selected).addClass("rem");
        $(current_selected+" p").css("color","red");

        setTimeout(function () {
          $(current_selected).removeClass("rem");
          $(current_selected).addClass("yem");
          $(current_selected+" p").css("color","yellow");

        },200);
      }


      break;

      case 'w':
      if(vert>0)
      {
        $(current_selected).removeClass("yem");
        $(current_selected+" p").css("color","white");
        pos = pos -10;
        if(pos>9)
        {
            current_selected = "."+pos;
        }
        else
        {
          current_selected = ".0"+pos;
        }

        //alert(current_selected);

        $(current_selected).addClass("yem");
          $(current_selected+" p").css("color","yellow");
      }
      else
      {
        $(current_selected).removeClass("yem");
        $(current_selected).addClass("rem");
        $(current_selected+" p").css("color","red");

        setTimeout(function () {
          $(current_selected).removeClass("rem");
          $(current_selected).addClass("yem");
          $(current_selected+" p").css("color","yellow");

        },200);
      }

      break;

      case 's':

      if(vert<9)
      {
        $(current_selected).removeClass("yem");
        $(current_selected+" p").css("color","white");
        pos = pos+10;
        current_selected = "."+pos;
        //alert(current_selected);

        $(current_selected).addClass("yem");
        $(current_selected+" p").css("color","yellow");
      }
      else
      {
        $(current_selected).removeClass("yem");
        $(current_selected).addClass("rem");
        $(current_selected+" p").css("color","red");

        setTimeout(function () {
          $(current_selected).removeClass("rem");
          $(current_selected).addClass("yem");
          $(current_selected+" p").css("color","yellow");

        },200);
      }


      break;

      case 'a':

      if(hori>0)
      {
        $(current_selected).removeClass("yem");
        $(current_selected+" p").css("color","white");
        pos = pos-1;
        if(pos>9)
        {
            current_selected = "."+pos;
        }
        else
        {
          current_selected = ".0"+pos;
        }
        //alert(current_selected);

        $(current_selected).addClass("yem");
        $(current_selected+" p").css("color","yellow");
      }
      else
      {
        $(current_selected).removeClass("yem");
        $(current_selected).addClass("rem");
        $(current_selected+" p").css("color","red");

        setTimeout(function () {
          $(current_selected).removeClass("rem");
          $(current_selected).addClass("yem");
          $(current_selected+" p").css("color","yellow");

        },200);
      }



      break;

      case 'd':

      if(hori<9)
      {
        $(current_selected).removeClass("yem");
        $(current_selected+" p").css("color","white");
        pos = pos+1;
        if(pos>9)
        {
            current_selected = "."+pos;
        }
        else
        {
          current_selected = ".0"+pos;
        }

        //alert(current_selected);

        $(current_selected).addClass("yem");
        $(current_selected+" p").css("color","yellow");
      }
      else
      {
        $(current_selected).removeClass("yem");
        $(current_selected).addClass("rem");
        $(current_selected+" p").css("color","red");

        setTimeout(function () {
          $(current_selected).removeClass("rem");
          $(current_selected).addClass("yem");
          $(current_selected+" p").css("color","yellow");

        },200);
      }


      break;

      default: console.log("unknow key pressed :"+pressed);
    }
}
