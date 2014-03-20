function pirateMovie(strTitle){
	/********/
	/* ATTR */
	/********/
	this.strOriginalTitle = strTitle;
	this.strFormat = 'na';
	this.strRealeaseGroup = 'na';
	this.strRealTitle = 'na';
	this.strSource = 'na';
	this.strYear = 'na';

	this.arrWordToCrop = new Array(
		"TSXVID", "XviD", "DivXNL", "divx",
		"Subtit", "Subs,", "Subs.",
		"Subs-", "Subs_", "NL,Subs",
		"KLAXXON", "aXXo", "BRRip",
		"BDRip", "Bluray", "HDTV",
		"HR,HDTV", "R5", "Telesync",
		"TELECINE", "Webrip", "vomit",
		"Dita", "DVB", "Omifast",
		"@KIDZ", "KIDZCORNER", "1080",
		"720", "480", "x264", "H264",
		"AC3", "AC-3", "FXG", ".TS",
		"TS.", ",TS", "-TS", "TS-",
		"NTSC", ",WS", "WS.", ".WS",
		"NL,", "NLT", "CN,", "TC,",
		"ISO.", "Swesub", "VHS",
		"READNFO", "ViCiOsO",
		"WorkPrint", "ExtraTorrent",
		"2Lions", ",VOSTFR", "FxM",
		"DUQA", "newartriot", "nHaNc3",
		"DDC", "keltz", "REAL,PROPER",
		"PROPER", "DEWSTRR", "CVCD",
		"VCD", "LIMITED", "Electri4ka",
		"Electrichka", "NORARS",
		"aceford", "jigaxx", "ShortKut",
		"danger2u", "www.", "www,",
		"1,of", "1of", "2,of", "2of",
		"3,of", "3of", "cd1", "cd2",
		"cd3", "1CD", "2CD", "1,CD",
		"PDVD-RIP", "PDVD", "PDV",
		"Pre,DVD", "Pre-DVD", "DVD",
		"PPVRIP", "www", "1CDRip",
		"2CDRip", "UNCUT,",
		"Director,Cut", "Directors",
		"Director's", ",TPB", "PSP",
		"PDTV", "iPod", "Zune", ".avi",
		"mp4", "mpg", "3gp", "wmv",
		"CAM", "mkv", "m4", "xRipp",
		"Goblin10",
		"By,..,DragonLord721",
		"EXTENDED", "Los,Sustitutos",
		"BR-Scr", "BR-Screener",
		"SCREENER", "SCR,", "SCR.",
		"UNRATED", "REPACK", "HQ",
		"RETAIL", "1337x", "Noir",
		"NEW,SOURCE", "DiTa", "UVall",
		"FQM", "CHGRP", "LMAO", "NoTV",
		"DVSKY", "DSR", "2HD", "2Wire",
		"Ekolb", "SHAMNBOYZ", "!!!",
		"~", "ExtraScene", "CHUPPI",
		"MAXSPEED", "ShareReactor",
		"ShareZONE", "ShareGo", "aAF",
		"xRG", "STV", "-MAX",
		"iNTERNAL", "RESYNC", "SYNC-",
		"SYNCFIX", "TRUEFRENCH",
		"FRENCH", "ENGLISH", "SPANISH",
		"iTA,", "iTALIA", "Hindi",
		"GERMAN", ",ENG", ".ENG", "YIFY",
		"PublicHD", "YiFy"
		)

	/************/
	/* FUNCTION */
	/************/

	/* FUCNTION NAM: setRealTitle */
	/* FUNCTION DEF: Crop useless crap of the title */
	/* FUNCTION PAR: None */
	/* FUCNTION RET: Real Title */

	this.setRealTitle = function(){

		/* Set a variable to play with, without compromising the attribute */
		var strTitleToCrop = this.strOriginalTitle;		

		/* Iterate the array that containt common crap and delete everything that is following if found in the original title */
		for (var i = 0; i < this.arrWordToCrop.length; ++i){
			/* Set the index to substract from to the found index */			
			var stringIndex = strTitleToCrop.indexOf(this.arrWordToCrop[i]);
			/* If index is defined (!= -1) */
			if(stringIndex != -1){
				/* Set a string that is to remove from the index found to the end of the string */
				var stringToRemove = strTitleToCrop.substr(stringIndex);
				/* Replace the subtring to delete with nothing */
				strTitleToCrop = strTitleToCrop.replace(stringToRemove, '');
			}
		}

		/* Remove '.' and replace them with space */
		strTitleToCrop = strTitleToCrop.split('.').join(' ');
		/* Trim extra space at the end */
		strTitleToCrop = strTitleToCrop.trim();

		/* Set the real title to the newly processed string */
		this.strRealTitle = strTitleToCrop;

		/* Return the real title, if you want to use it now */
		return this.strRealTitle;
	}
}