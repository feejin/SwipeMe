// // Ensure indexOf is available
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
            "use strict";
        if (this === null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;

        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n !== n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

var swipe = new SwipeMe(
    document.getElementById('swipeme'),
    {
        accessClasses: {
            left: 'pull-right',
            right: 'pull-left'
        }
    }
);

function triggerLeft(event) {
    if (document.getElementById('swipeme').className.indexOf('pull-right') === -1) {
        swipe.swipe('right');
    } else {
        swipe.swipe('left');
    }

    event.preventDefault();
}

function triggerRight(event) {
    if (document.getElementById('swipeme').className.indexOf('pull-left') === -1) {
        swipe.swipe('left');
    } else {
        swipe.swipe('right');
    }

    event.preventDefault();
}

SyntaxHighlighter.all();