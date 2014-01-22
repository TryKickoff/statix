/* ==========================================================================
   Complete cookie reader/writer
   From https://developer.mozilla.org/en-US/docs/DOM/document.cookie

   Usage:
   KO.cookies.setItem(name, value[, end[, path[, domain[, secure]]]])
   KO.cookies.getItem(name)
   KO.cookies.removeItem(name[, path])
   KO.cookies.hasItem(name)
   KO.cookies.keys()
   ========================================================================== */
;(function (KO) {
	KO.cookies = {
		getItem: function(sKey) {
			if (!sKey || !this.hasItem(sKey)) { return null; }
			return unescape(document.cookie.replace(new RegExp('(?:^|.*;\\s*)' + escape(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'), '$1'));
		},
		setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
			if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return; }
			var sExpires = '';
			if (vEnd) {
				switch (vEnd.constructor) {
					case Number:
						sExpires = vEnd === Infinity ? '; expires=Tue, 19 Jan 2038 03:14:07 GMT' : '; max-age=' + vEnd;
						break;
					case String:
						sExpires = '; expires=' + vEnd;
						break;
					case Date:
						sExpires = '; expires=' + vEnd.toGMTString();
						break;
				}
			}
			document.cookie = escape(sKey) + '=' + escape(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
		},
		removeItem: function(sKey, sPath) {
			if (!sKey || !this.hasItem(sKey)) { return; }
			document.cookie = escape(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sPath ? '; path=' + sPath : '');
		},
		hasItem: function(sKey) {
			return (new RegExp('(?:^|;\\s*)' + escape(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
		},
		// Optional method: you can safely remove it!
		keys: function() {
			var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
			for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = unescape(aKeys[nIdx]); }
			return aKeys;
		}
	};
})(window.KO = window.KO || {});
