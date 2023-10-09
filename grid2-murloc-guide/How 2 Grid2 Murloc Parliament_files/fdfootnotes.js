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

function fdfootnote_show(pid) {
	jQuery('#footnotes-'+pid+' ol').show();
	fdfootnote_updatelabel(pid);
}

function fdfootnote_togglevisible(pid) {
	jQuery('#footnotes-'+pid+' ol').toggle();
	fdfootnote_updatelabel(pid);
	return false;
}

function fdfootnote_updatelabel(pid) {
	if (jQuery('#footnotes-'+pid+' ol').is(':visible')) {
		jQuery('#footnotes-'+pid+' .footnoteshow').hide();
	} else {
		jQuery('#footnotes-'+pid+' .footnoteshow').show();
	}
}

jQuery(document).ready(
	function() {
		try {
			var target = window.location.hash;
			if (target.substr(0,4) == '#fn-') {
				var pieces = target.split('-');
				if (pieces.length == 3) {
					var pid = pieces[1];
					fdfootnote_show(pid);
				}
			}
		} catch (ex) {
		}
	}
);

}
/*
     FILE ARCHIVED ON 21:44:41 Jan 24, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:06:29 Oct 09, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 229.291
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.058
  cdx.remote: 0.058
  esindex: 0.011
  LoadShardBlock: 199.519 (3)
  PetaboxLoader3.datanode: 201.46 (5)
  load_resource: 633.133 (2)
  PetaboxLoader3.resolve: 71.466 (2)
*/