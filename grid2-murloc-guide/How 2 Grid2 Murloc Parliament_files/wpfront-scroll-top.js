var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
 WPFront Scroll Top Plugin
 Copyright (C) 2013, WPFront.com
 Website: wpfront.com
 Contact: syam@wpfront.com
 
 WPFront Scroll Top Plugin is distributed under the GNU General Public License, Version 3,
 June 2007. Copyright (C) 2007 Free Software Foundation, Inc., 51 Franklin
 St, Fifth Floor, Boston, MA 02110, USA
 
 */

(function () {
    var $ = jQuery;

    window.wpfront_scroll_top = function (data) {
        var container = $("#wpfront-scroll-top-container").css("opacity", 0);

        var css = {};
        switch (data.location) {
            case 1:
                css["right"] = data.marginX + "px";
                css["bottom"] = data.marginY + "px";
                break;
            case 2:
                css["left"] = data.marginX + "px";
                css["bottom"] = data.marginY + "px";
                break;
            case 3:
                css["right"] = data.marginX + "px";
                css["top"] = data.marginY + "px";
                break;
            case 4:
                css["left"] = data.marginX + "px";
                css["top"] = data.marginY + "px";
                break;
        }
        container.css(css);

        if (data.button_width == 0)
            data.button_width = "auto";
        else
            data.button_width += "px";
        if (data.button_height == 0)
            data.button_height = "auto";
        else
            data.button_height += "px";
        container.children("img").css({"width": data.button_width, "height": data.button_height});

        if (data.hide_iframe) {
            if ($(window).attr("self") !== $(window).attr("top"))
                return;
        }

        var mouse_over = false;
        var hideEventID = 0;

        var fnHide = function () {
            clearTimeout(hideEventID);
            if (container.is(":visible")) {
                container.stop().fadeTo(data.button_fade_duration, 0, function () {
                    container.hide();
                    mouse_over = false;
                });
            }
        };

        var fnHideEvent = function () {
            clearTimeout(hideEventID);
            hideEventID = setTimeout(function () {
                fnHide();
            }, data.auto_hide_after * 1000);
        };

        var scrollHandled = false;
        var fnScroll = function () {
            if (scrollHandled)
                return;

            scrollHandled = true;

            if ($(window).scrollTop() > data.scroll_offset) {
                container.stop().css("opacity", mouse_over ? 1 : data.button_opacity).show();
                if (!mouse_over && data.auto_hide) {
                    fnHideEvent();
                }
            } else {
                fnHide();
            }

            scrollHandled = false;
        };

        $(window).scroll(fnScroll);
        $(document).scroll(fnScroll);

        container
                .hover(function () {
                    clearTimeout(hideEventID);
                    mouse_over = true;
                    $(this).css("opacity", 1);
                }, function () {
                    $(this).css("opacity", data.button_opacity);
                    mouse_over = false;
                    fnHideEvent();
                })
                .click(function () {
                    $("html, body").animate({scrollTop: 0}, data.scroll_duration);
                    return false;
                });
    };
})();

}
/*
     FILE ARCHIVED ON 14:16:00 Feb 26, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:06:33 Oct 09, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 217.599
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.074
  cdx.remote: 0.064
  esindex: 0.009
  LoadShardBlock: 175.173 (3)
  PetaboxLoader3.datanode: 178.56 (5)
  load_resource: 211.939 (2)
  PetaboxLoader3.resolve: 115.728 (2)
*/