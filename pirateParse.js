var PirateMovie = (function(strTitle) {
    function PirateMovie(strTitle) {
        /*****************/
        /* PRIVATES ATTR */
        /*****************/
        this._strOriginalTitle = strTitle;
        this._strFormat = 'na';
        this._strRealeaseGroup = 'na';
        this._strRealTitle = 'na';
        this._strSource = 'na';
        this._strYear = 'na';
    }

    this.arrWordToCrop = [
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
    ];

    var arrSourceBluray = ["brrip", "bluray"];
    var arrSourceWeb = ["web-dl", "webdl"];
    var arrReleaseGroup = ["PublicHD", "YIFY", "JYK", "Hon3y"];

    PirateMovie.prototype = {
        contructor: PirateMovie,

        /*************/
        /* FUNCTIONS */
        /*************/

        /* FUCNTION NAM: setRealTitle */
        /* FUNCTION DEF: Crop useless crap of the title */
        /* FUNCTION PAR: None */
        /* FUCNTION RET: Real Title */

        setRealTitle: function() {

            /* Set a variable to play with, without compromising the attribute */
            var strTitleToCrop = this._strOriginalTitle;

            /* Iterate the array that containt common crap and delete everything that is following if found in the original title */
            for (var i = 0; i < arrWordToCrop.length; ++i) {
                /* Set the index to substract from to the found index */
                var stringIndex = strTitleToCrop.indexOf(arrWordToCrop[i]);
                /* If index is defined (!= -1) */
                if (stringIndex != -1) {
                    /* Set a string that is to remove from the index found to the end of the string */
                    var stringToRemove = strTitleToCrop.substr(stringIndex);
                    /* Replace the subtring to delete with nothing */
                    strTitleToCrop = strTitleToCrop.replace(stringToRemove, '');
                }
            }

            /* remove the year from the string */
            strTitleToCrop = strTitleToCrop.replace(/[\(\.\s](\d{4})[\)\.\s]/, "");

            /* Remove '.' and replace them with space */
            strTitleToCrop = strTitleToCrop.split('.').join(' ');
            /* Trim extra space at the end */
            strTitleToCrop = strTitleToCrop.trim();

            /* Split the array, again, to add the parenteses if they are missing for the year */
            var arrSplitedTitleToCrop = strTitleToCrop.split(' ');

            /* Get the last index of the array since it's used 4 times */
            var intLastIndexOfSplit = arrSplitedTitleToCrop.length - 1;

            /* Rejoin the array togheter, like an old couple, yay */
            strTitleToCrop = arrSplitedTitleToCrop.join(' ');


            /* Set the real title to the newly processed string */
            this.strRealTitle = strTitleToCrop;

            /* Return the real title, if you want to use it now */
            return this.strRealTitle;
        },


        /* FUCNTION NAM: setFormat */
        /* FUNCTION DEF: Get the format (1080p or 720p) from the original title and set it to its attribute */
        /* FUNCTION PAR: None */
        /* FUCNTION RET: Format */

        setFormat: function() {

            /* Test if the original title contains 720p|P */
            if (this._strOriginalTitle.indexOf('720p') != -1 || this._strOriginalTitle.indexOf('720P') != -1) {
                /* If found, set the format and return it */
                this._strFormat = '720p';
                return this._strFormat;
            }

            /* Test if the original title contains 1080p|P */
            if (this._strOriginalTitle.indexOf('1080p') != -1 || this._strOriginalTitle.indexOf('1080P') != -1) {
                /* If found, set the format and return it */
                this._strFormat = '1080p';
                return this._strFormat;
            }

            /* Return the ogirinal (most likely NA) format if nothing is found */
            return this._strFormat;
        },

        /* FUCNTION NAM: setYear */
        /* FUNCTION DEF: Remove the year from the real title and set the attribute */
        /* FUNCTION PAR: None */
        /* FUCNTION RET: Year */

        setYear: function() {
            /* Regex to capture year */
            var Yrgx = /[\(\.\s](\d{4})[\)\.\s]/;
            var arrRgxResult = Yrgx.exec(this._strOriginalTitle);

            /* Remove parentheses from the year */
            this._strYear = arrRgxResult[0].replace(/\D/g, "");

            return this._strYear;
        },

        /* FUCNTION NAM: setReleaseGroup */
        /* FUNCTION DEF: Get the release group from the original title and set it to its attribute */
        /* FUNCTION PAR: None */
        /* FUCNTION RET: ReleaseGroup */

        setReleaseGroup: function() {
            /* Iterate the array that containt common release group */
            for (var i = 0; i < arrReleaseGroup.length; ++i) {
                /* If index is defined (!= -1) */
                if (this._strOriginalTitle.indexOf(arrReleaseGroup[i]) != -1) {
                    /* Set the release group if found */
                    this._strRealeaseGroup = arrReleaseGroup[i];
                }
            }

            return this._strRealeaseGroup;
        },

        /* FUCNTION NAM: setSource */
        /* FUNCTION DEF: Get the source from the original title and set it to its attribute */
        /* FUNCTION PAR: None */
        /* FUCNTION RET: Source */

        setSource: function() {
            /* Lowercase the original title */
            var strLowerOriginalTitle = this._strOriginalTitle.toLowerCase();

            /* Iterate the array that containt common release group */
            for (var i = 0; i < arrSourceBluray.length; ++i) {
                /* If index is defined (!= -1) */

                if (strLowerOriginalTitle.indexOf(arrSourceBluray[i]) != -1) {
                    /* Set the source if found */

                    this._strSource = "BluRay";

                }
            }

            for (var i = 0; i < arrSourceWeb.length; ++i) {
                /* If index is defined (!= -1) */
                if (strLowerOriginalTitle.indexOf(arrSourceWeb[i]) != -1) {
                    /* Set the source if found */
                    this._strSource = "Web";
                }
            }
            console.log(this._strSource);
            return this._strSource;
        },
    };

    return PirateMovie;

})(null);