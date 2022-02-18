$(function () {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight / 100 + "px"
  );

  window.onresize = function () {
    document.documentElement.style.setProperty(
      "--vh",
      window.innerHeight / 100 + "px"
    );
  };

  document.getElementById("attention").volume = 0.5;

  let openingTimer = [],
    mirrorTimer = [],
    warpTimer = [],
    cameraTimer = [],
    skillTimer = [],
    trumpTimer = [],
    presence = 0;

  //green, orangeStart, redStart, decode, decodeRed, detension, detensionRed, detensionOrange, over

  $("#startArea").click(function () {
    if ($("#startArea").hasClass("green")) {
      clearInterval(mirrorTimer);
      clearInterval(warpTimer);
      clearInterval(cameraTimer);
      clearInterval(skillTimer[0]);
      clearInterval(skillTimer[1]);
      clearInterval(skillTimer[2]);
      clearInterval(trumpTimer[0]);
      clearInterval(trumpTimer[1]);
      clearInterval(trumpTimer[2]);

      document.getElementById("startSound").play();

      $("#presenceArea").removeClass("orange red").addClass("green");

      $(".presence").hide();

      presence = 0;

      $(".openingsArea")
        .removeClass("green orange red over")
        .addClass("orangeStart");

      $(".openings").each(function () {
        $(this).text($(this).data("init"));
      });

      $("#mirrorArea").removeClass("green red").addClass("orange");

      $("#mirror").text(8);

      $("#warpArea").removeClass("orange red").addClass("green");

      $("#warp").text(30);

      $("#cameraArea").removeClass("orange red redStart").addClass("green");

      $("#camera").text(60);

      $("#trumpAlert").text("");

      $("#startArea").removeClass("green").addClass("orangeStart");

      $("#start").text(50);

      let nextS = 202;

      quenchingTimer = setInterval(function () {
        nextS--;

        if (nextS > 152) {
          $("#start").text(nextS - 152);
        } else if (nextS === 152) {
          $("#startArea").removeClass("orangeStart").addClass("redStart");

          $("#start").text("");
        } else if (nextS > 147) {
        } else if (nextS === 147) {
          $("#startArea").removeClass("redStart").addClass("decode");

          $("#start").text(147);
        } else if (nextS > 5) {
          $("#start").text(nextS);
        } else if (nextS === 5) {
          $("#startArea").removeClass("decode").addClass("decodeRed");

          $("#start").text(nextS);
        } else if (nextS > 0) {
          $("#start").text(nextS);
        } else {
          clearInterval(quenchingTimer);

          document.getElementById("decodeSound").play();

          $("#startArea").removeClass("decodeRed").addClass("detension");

          $("#start").text(120);
        }
      }, 1000);

      for (let h = 0; h < 4; h++) {
        let next = $(".openings").eq(h).text();

        openingTimer[h] = setInterval(function () {
          next--;

          if (next > 5) {
            $(".openings").eq(h).text(next);
          } else if (next === 5) {
            $(".openingsArea")
              .eq(h)
              .removeClass("orangeStart")
              .addClass("redStart");

            $(".openings").eq(h).text(next);
          } else if (next > 0) {
            $(".openings").eq(h).text(next);
          } else {
            clearInterval(openingTimer[h]);

            if (h === 1 || h === 2) {
              document.getElementById("attention").play();
            }

            $(".openingsArea").eq(h).removeClass("redStart").addClass("green");

            $(".openings").eq(h).text($(".openings").eq(h).data("num"));
          }
        }, 1000);
      }

      let nextM = 8;

      mirrorTimer = setInterval(function () {
        nextM--;

        if (nextM > 3) {
          $("#mirror").text(nextM);
        } else if (nextM === 3) {
          $("#mirrorArea").removeClass("orange").addClass("red");

          $("#mirror").text(nextM);
        } else if (nextM > 0) {
          $("#mirror").text(nextM);
        } else {
          clearInterval(mirrorTimer);

          $("#mirrorArea").removeClass("red").addClass("green");

          $("#mirror").text(13);
        }
      }, 1000);
    } else if (
      $("#startArea").hasClass("orangeStart") ||
      $("#startArea").hasClass("redStart") ||
      $("#startArea").hasClass("decode") ||
      $("#startArea").hasClass("decodeRed")
    ) {
      clearInterval(quenchingTimer);

      document.getElementById("tap").play();

      $("#startArea")
        .removeClass("orangeStart redStart decode decodeRed")
        .addClass("detension");

      $("#start").text(120);
    } else if ($("#startArea").hasClass("detension")) {
      document.getElementById("detensionSound").play();

      $("#startArea").removeClass("detension").addClass("detensionRed");

      let nextD = 120;

      detensionTimer = setInterval(function () {
        nextD--;

        if (nextD > 5) {
          $("#start").text(nextD);
        } else if (nextD === 5) {
          $("#startArea")
            .removeClass("detensionRed")
            .addClass("detensionOrange");

          $("#start").text(nextD);
        } else if (nextD > 0) {
          $("#start").text(nextD);
        } else {
          clearInterval(detensionTimer);

          document.getElementById("attention").play();

          $("#startArea").removeClass("detensionOrange").addClass("over");

          $("#start").text("");
        }
      }, 1000);
    } else if (
      $("#startArea").hasClass("detensionRed") ||
      $("#startArea").hasClass("detensionOrange")
    ) {
      clearInterval(detensionTimer);

      document.getElementById("tap").play();

      $("#startArea")
        .removeClass("detensionRed detensionOrange")
        .addClass("over");

      $("#start").text("");
    } else {
    }
  });

  $("#presenceArea").click(function () {
    switch (presence) {
      case 0:
        document.getElementById("tap").play();
        $("#pre1").show();
        $("#sence1").show();
        presence = presence + 2;
        break;

      case 1:
        document.getElementById("tap").play();
        $("#sence1").show();
        presence++;
        break;

      case 2:
        document.getElementById("tap").play();
        document.getElementById("presenceSound").play();
        $("#presenceArea").removeClass("green").addClass("orange");
        $("#pre2").show();
        $("#sence2").show();
        presence = presence + 2;
        break;

      case 3:
        document.getElementById("tap").play();
        document.getElementById("presenceSound").play();
        $("#presenceArea").removeClass("green").addClass("orange");
        $("#sence2").show();
        presence++;
        break;

      case 4:
        document.getElementById("tap").play();
        $("#pre3").show();
        presence++;
        break;

      case 5:
        document.getElementById("tap").play();
        $("#sence3").show();
        presence++;
        break;

      case 6:
        document.getElementById("tap").play();
        $("#pre4").show();
        presence++;
        break;

      case 7:
        document.getElementById("tap").play();
        $("#sence4").show();
        presence++;
        break;

      case 8:
        document.getElementById("attention").play();
        $("#presenceArea").removeClass("orange").addClass("red");
        $("#pre5").show();
        presence++;
        break;

      case 9:
        document.getElementById("tap").play();
        document.getElementById("presenceSound").play();
        $("#sence5").show();
        presence++;
        break;

      case 10:
        document.getElementById("tap").play();
        $("#presenceArea").removeClass("red").addClass("green");
        $(".presence").hide();
        presence = 0;
        break;
    }
  });

  $(".skillsArea").click(function () {
    let i = $(".skillsArea").index($(this));

    if ($(".skillsArea").eq(i).hasClass("green")) {
      document.getElementsByClassName("skillsSound")[i].play();

      $(".skillsArea").eq(i).removeClass("green").addClass("orange");

      let next = $(".skills").eq(i).text();

      skillTimer[i] = setInterval(function () {
        next--;

        if (next > 5) {
          $(".skills").eq(i).text(next);
        } else if (next === 5) {
          $(".skillsArea").eq(i).removeClass("orange").addClass("red");

          $(".skills").eq(i).text(next);
        } else if (next > 0) {
          $(".skills").eq(i).text(next);
        } else {
          clearInterval(skillTimer[i]);

          document.getElementById("attention").play();

          $(".skillsArea").eq(i).removeClass("red").addClass("green");

          $(".skills").eq(i).text($(".skills").eq(i).data("num"));
        }
      }, 1000);
    } else {
      clearInterval(skillTimer[i]);

      clearInterval(openingTimer[i]);

      clearInterval(trumpTimer[i]);

      document.getElementById("tap").play();

      $(".skillsArea")
        .eq(i)
        .removeClass("orange red orangeStart redStart")
        .addClass("green");

      $(".skills").eq(i).text($(".skills").eq(i).data("num"));
    }
  });

  $("#mirrorArea").click(function () {
    if ($("#mirrorArea").hasClass("green")) {
      document.getElementById("mirrorSound").play();

      $("#mirrorArea").removeClass("green").addClass("redStart");

      let nextM = 28;

      mirrorTimer = setInterval(function () {
        nextM--;

        if (nextM > 15) {
          $("#mirror").text(nextM - 15);
        } else if (nextM === 15) {
          $("#mirrorArea").removeClass("redStart").addClass("orange");

          $("#mirror").text(nextM);
        } else if (nextM > 5) {
          $("#mirror").text(nextM);
        } else if (nextM === 5) {
          $("#mirrorArea").removeClass("orange").addClass("red");

          $("#mirror").text(nextM);
        } else if (nextM > 0) {
          $("#mirror").text(nextM);
        } else {
          clearInterval(mirrorTimer);

          document.getElementById("attention").play();

          $("#mirrorArea").removeClass("red").addClass("green");

          $("#mirror").text(13);
        }
      }, 1000);
    } else if ($("#mirrorArea").hasClass("redStart")) {
      clearInterval(mirrorTimer);

      document.getElementById("tap").play();

      $("#mirrorArea").removeClass("redStart").addClass("orange");

      $("#mirror").text(15);

      let nextM = 15;

      mirrorTimer = setInterval(function () {
        nextM--;

        if (nextM > 5) {
          $("#mirror").text(nextM);
        } else if (nextM === 5) {
          $("#mirrorArea").removeClass("orange").addClass("red");

          $("#mirror").text(nextM);
        } else if (nextM > 0) {
          $("#mirror").text(nextM);
        } else {
          clearInterval(mirrorTimer);

          document.getElementById("attention").play();

          $("#mirrorArea").removeClass("red").addClass("green");

          $("#mirror").text(13);
        }
      }, 1000);
    } else {
      clearInterval(mirrorTimer);

      document.getElementById("tap").play();

      $("#mirrorArea").removeClass("orange red").addClass("green");

      $("#mirror").text(13);
    }
  });

  $("#warpArea").click(function () {
    if ($("#warpArea").hasClass("green")) {
      document.getElementById("warpSound").play();

      $("#warpArea").removeClass("green").addClass("orange");

      let nextW = 30;

      warpTimer = setInterval(function () {
        nextW--;

        if (nextW > 5) {
          $("#warp").text(nextW);
        } else if (nextW === 5) {
          $("#warpArea").removeClass("orange").addClass("red");

          $("#warp").text(nextW);
        } else if (nextW > 0) {
          $("#warp").text(nextW);
        } else {
          clearInterval(warpTimer);

          document.getElementById("attention").play();

          $("#warpArea").removeClass("red").addClass("green");

          $("#warp").text(30);
        }
      }, 1000);
    } else {
      clearInterval(warpTimer);

      document.getElementById("tap").play();

      $("#warpArea").removeClass("orange red").addClass("green");

      $("#warp").text(30);
    }
  });

  $("#cameraArea").click(function () {
    if ($("#cameraArea").hasClass("green")) {
      document.getElementById("cameraOn").play();

      $("#cameraArea").removeClass("green").addClass("redStart");

      let nextC = 105;

      cameraTimer = setInterval(function () {
        nextC--;

        if (nextC > 45) {
          $("#camera").text(nextC - 45);
        } else if (nextC === 45) {
          document.getElementById("cameraOff").play();

          $("#cameraArea").removeClass("redStart").addClass("orange");

          $("#camera").text(nextC);
        } else if (nextC > 5) {
          $("#camera").text(nextC);
        } else if (nextC === 5) {
          $("#cameraArea").removeClass("orange").addClass("red");

          $("#camera").text(nextC);
        } else if (nextC > 0) {
          $("#camera").text(nextC);
        } else {
          clearInterval(cameraTimer);

          document.getElementById("attention").play();

          $("#cameraArea").removeClass("red").addClass("green");

          $("#camera").text(60);
        }
      }, 1000);
    } else if ($("#cameraArea").hasClass("redStart")) {
      clearInterval(cameraTimer);

      document.getElementById("cameraOff").play();

      $("#cameraArea").removeClass("redStart").addClass("orange");

      $("#camera").text(45);

      let nextC = 45;

      cameraTimer = setInterval(function () {
        nextC--;

        if (nextC > 5) {
          $("#camera").text(nextC);
        } else if (nextC === 5) {
          $("#cameraArea").removeClass("orange").addClass("red");

          $("#camera").text(nextC);
        } else if (nextC > 0) {
          $("#camera").text(nextC);
        } else {
          clearInterval(cameraTimer);

          document.getElementById("attention").play();

          $("#cameraArea").removeClass("red").addClass("green");

          $("#camera").text(60);
        }
      }, 1000);
    } else {
      clearInterval(cameraTimer);

      document.getElementById("tap").play();

      $("#cameraArea").removeClass("orange red").addClass("green");

      $("#camera").text(60);
    }
  });

  $("#trumpArea").click(function () {
    if ($("#trumpArea").hasClass("green")) {
      if (
        ($("#patrollerArea").hasClass("orange") ||
          $("#patrollerArea").hasClass("red")) &&
        $("#teleportArea").hasClass("green") &&
        $("#blinkArea").hasClass("green")
      ) {
        document.getElementById("trumpSound").play();

        $("#trumpArea").removeClass("green").addClass("over");

        $("#trump").text("");

        $("#trumpAlert").text("");

        $("#teleportArea").removeClass("green");

        $("#blinkArea").removeClass("green");

        $("#teleport").text(Math.floor(($("#patroller").text() * 10) / 9));

        $("#blink").text(Math.floor(($("#patroller").text() * 5) / 3));

        for (let p = 1; p < 3; p++) {
          let nextT = $(".skills").eq(p).text();

          if (nextT > 5) {
            $(".skillsArea").eq(p).addClass("orange");
          } else {
            $(".skillsArea").eq(p).addClass("red");
          }

          trumpTimer[p] = setInterval(function () {
            nextT--;

            if (nextT > 5) {
              $(".skills").eq(p).text(nextT);
            } else if (nextT === 5) {
              $(".skillsArea").eq(p).removeClass("orange").addClass("red");

              $(".skills").eq(p).text(nextT);
            } else if (nextT > 0) {
              $(".skills").eq(p).text(nextT);
            } else {
              clearInterval(trumpTimer[p]);

              $(".skillsArea").eq(p).removeClass("red").addClass("green");

              $(".skills").eq(p).text($(".skills").eq(p).data("num"));
            }
          }, 1000);
        }
      } else if (
        $("#patrollerArea").hasClass("green") &&
        ($("#teleportArea").hasClass("orange") ||
          $("#teleportArea").hasClass("red")) &&
        $("#blinkArea").hasClass("green")
      ) {
        document.getElementById("trumpSound").play();

        $("#trumpArea").removeClass("green").addClass("over");

        $("#trump").text("");

        $("#trumpAlert").text("");

        $("#patrollerArea").removeClass("green");

        $("#blinkArea").removeClass("green");

        $("#patroller").text(Math.floor(($("#teleport").text() * 9) / 10));

        $("#blink").text(Math.floor(($("#teleport").text() * 3) / 2));

        for (let p = 0; p < 3; p += 2) {
          let nextT = $(".skills").eq(p).text();

          if (nextT > 5) {
            $(".skillsArea").eq(p).addClass("orange");
          } else {
            $(".skillsArea").eq(p).addClass("red");
          }

          trumpTimer[p] = setInterval(function () {
            nextT--;

            if (nextT > 5) {
              $(".skills").eq(p).text(nextT);
            } else if (nextT === 5) {
              $(".skillsArea").eq(p).removeClass("orange").addClass("red");

              $(".skills").eq(p).text(nextT);
            } else if (nextT > 0) {
              $(".skills").eq(p).text(nextT);
            } else {
              clearInterval(trumpTimer[p]);

              $(".skillsArea").eq(p).removeClass("red").addClass("green");

              $(".skills").eq(p).text($(".skills").eq(p).data("num"));
            }
          }, 1000);
        }
      } else if (
        $("#patrollerArea").hasClass("green") &&
        $("#teleportArea").hasClass("green") &&
        ($("#blinkArea").hasClass("orange") || $("#blinkArea").hasClass("red"))
      ) {
        document.getElementById("trumpSound").play();

        $("#trumpArea").removeClass("green").addClass("over");

        $("#trump").text("");

        $("#trumpAlert").text("");

        $("#patrollerArea").removeClass("green");

        $("#teleportArea").removeClass("green");

        $("#patroller").text(Math.floor(($("#blink").text() * 3) / 5));

        $("#teleport").text(Math.floor(($("#blink").text() * 2) / 3));

        clearInterval(skillTimer[2]);

        $("#blinkArea").removeClass("orange red").addClass("green");

        $("#blink").text(150);

        for (let p = 0; p < 2; p++) {
          let nextT = $(".skills").eq(p).text();

          if (nextT > 5) {
            $(".skillsArea").eq(p).addClass("orange");
          } else {
            $(".skillsArea").eq(p).addClass("red");
          }

          trumpTimer[p] = setInterval(function () {
            nextT--;

            if (nextT > 5) {
              $(".skills").eq(p).text(nextT);
            } else if (nextT === 5) {
              $(".skillsArea").eq(p).removeClass("orange").addClass("red");

              $(".skills").eq(p).text(nextT);
            } else if (nextT > 0) {
              $(".skills").eq(p).text(nextT);
            } else {
              clearInterval(trumpTimer[p]);

              $(".skillsArea").eq(p).removeClass("red").addClass("green");

              $(".skills").eq(p).text($(".skills").eq(p).data("num"));
            }
          }, 1000);
        }
      } else {
        document.getElementById("error").play();

        $("#trumpAlert").html("特質を1つ<br>だけ選択");
      }
    } else if (
      $("#trumpArea").hasClass("orangeStart") ||
      $("#trumpArea").hasClass("redStart")
    ) {
      clearInterval(openingTimer[3]);

      document.getElementById("tap").play();

      $("#trumpArea").removeClass("orangeStart redStart").addClass("green");

      $("#trump").text("");
    }
  });

  $("#muteArea").click(function () {
    $("#muteArea").toggleClass("red");
    document.getElementById("tap").muted =
      !document.getElementById("tap").muted;
    document.getElementById("attention").muted =
      !document.getElementById("attention").muted;
    document.getElementById("startSound").muted =
      !document.getElementById("startSound").muted;
    document.getElementById("decodeSound").muted =
      !document.getElementById("decodeSound").muted;
    document.getElementById("detensionSound").muted =
      !document.getElementById("detensionSound").muted;
    document.getElementById("presenceSound").muted =
      !document.getElementById("presenceSound").muted;
    document.getElementById("mirrorSound").muted =
      !document.getElementById("mirrorSound").muted;
    document.getElementById("warpSound").muted =
      !document.getElementById("warpSound").muted;
    document.getElementById("cameraOn").muted =
      !document.getElementById("cameraOn").muted;
    document.getElementById("cameraOff").muted =
      !document.getElementById("cameraOff").muted;
    document.getElementById("patrollerSound").muted =
      !document.getElementById("patrollerSound").muted;
    document.getElementById("teleportSound").muted =
      !document.getElementById("teleportSound").muted;
    document.getElementById("blinkSound").muted =
      !document.getElementById("blinkSound").muted;
    document.getElementById("error").muted =
      !document.getElementById("error").muted;
    document.getElementById("trumpSound").muted =
      !document.getElementById("trumpSound").muted;
    document.getElementById("attention").play();
  });

  $("#resetArea").click(function () {
    window.location.reload(false);
  });

  $(window).keydown(function (e) {
    switch (e.keyCode) {
      case 48:
      case 96:
        document.getElementById("trumpArea").click();
        break;

      case 49:
      case 97:
        document.getElementById("patrollerArea").click();
        break;

      case 50:
      case 98:
        document.getElementById("teleportArea").click();
        break;

      case 51:
      case 99:
        document.getElementById("blinkArea").click();
        break;

      case 52:
      case 100:
        document.getElementById("mirrorArea").click();
        break;

      case 53:
      case 101:
        document.getElementById("warpArea").click();
        break;

      case 54:
      case 102:
        document.getElementById("cameraArea").click();
        break;

      case 55:
      case 56:
      case 103:
      case 104:
        document.getElementById("startArea").click();
        break;

      case 57:
      case 105:
        document.getElementById("presenceArea").click();
        break;

      case 110:
      case 190:
        document.getElementById("muteArea").click();
        break;

      case 13:
        document.getElementById("resetArea").click();
        break;
    }
  });
});
