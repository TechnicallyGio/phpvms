/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./public/assets/admin/vendor/sass/paper-dashboard.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./public/assets/frontend/sass/now-ui-kit.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./public/assets/vendor/leaflet-ajax/dist/leaflet.ajax.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function e(t, n, r) {
  function a(i, s) {
    if (!n[i]) {
      if (!t[i]) {
        var l = "function" == typeof require && require;if (!s && l) return require(i, !0);if (o) return o(i, !0);var u = new Error("Cannot find module '" + i + "'");throw u.code = "MODULE_NOT_FOUND", u;
      }var c = n[i] = { exports: {} };t[i][0].call(c.exports, function (e) {
        var n = t[i][1][e];return a(n ? n : e);
      }, c, c.exports, e, t, n, r);
    }return n[i].exports;
  }for (var o = "function" == typeof require && require, i = 0; i < r.length; i++) {
    a(r[i]);
  }return a;
}({ 1: [function (e, t, n) {
    "use strict";
    function r() {}function a(e) {
      if ("function" != typeof e) throw new TypeError("resolver must be a function");this.state = j, this.queue = [], this.outcome = void 0, e !== r && l(this, e);
    }function o(e, t, n) {
      this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected);
    }function i(e, t, n) {
      p(function () {
        var r;try {
          r = t(n);
        } catch (a) {
          return v.reject(e, a);
        }r === e ? v.reject(e, new TypeError("Cannot resolve promise with itself")) : v.resolve(e, r);
      });
    }function s(e) {
      var t = e && e.then;return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof t ? function () {
        t.apply(e, arguments);
      } : void 0;
    }function l(e, t) {
      function n(t) {
        o || (o = !0, v.reject(e, t));
      }function r(t) {
        o || (o = !0, v.resolve(e, t));
      }function a() {
        t(r, n);
      }var o = !1,
          i = u(a);"error" === i.status && n(i.value);
    }function u(e, t) {
      var n = {};try {
        n.value = e(t), n.status = "success";
      } catch (r) {
        n.status = "error", n.value = r;
      }return n;
    }function c(e) {
      return e instanceof this ? e : v.resolve(new this(r), e);
    }function f(e) {
      var t = new this(r);return v.reject(t, e);
    }function d(e) {
      function t(e, t) {
        function r(e) {
          i[t] = e, ++s !== a || o || (o = !0, v.resolve(u, i));
        }n.resolve(e).then(r, function (e) {
          o || (o = !0, v.reject(u, e));
        });
      }var n = this;if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));var a = e.length,
          o = !1;if (!a) return this.resolve([]);for (var i = new Array(a), s = 0, l = -1, u = new this(r); ++l < a;) {
        t(e[l], l);
      }return u;
    }function h(e) {
      function t(e) {
        n.resolve(e).then(function (e) {
          o || (o = !0, v.resolve(s, e));
        }, function (e) {
          o || (o = !0, v.reject(s, e));
        });
      }var n = this;if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));var a = e.length,
          o = !1;if (!a) return this.resolve([]);for (var i = -1, s = new this(r); ++i < a;) {
        t(e[i]);
      }return s;
    }var p = e("immediate"),
        v = {},
        y = ["REJECTED"],
        m = ["FULFILLED"],
        j = ["PENDING"];t.exports = n = a, a.prototype["catch"] = function (e) {
      return this.then(null, e);
    }, a.prototype.then = function (e, t) {
      if ("function" != typeof e && this.state === m || "function" != typeof t && this.state === y) return this;var n = new this.constructor(r);if (this.state !== j) {
        var a = this.state === m ? e : t;i(n, a, this.outcome);
      } else this.queue.push(new o(n, e, t));return n;
    }, o.prototype.callFulfilled = function (e) {
      v.resolve(this.promise, e);
    }, o.prototype.otherCallFulfilled = function (e) {
      i(this.promise, this.onFulfilled, e);
    }, o.prototype.callRejected = function (e) {
      v.reject(this.promise, e);
    }, o.prototype.otherCallRejected = function (e) {
      i(this.promise, this.onRejected, e);
    }, v.resolve = function (e, t) {
      var n = u(s, t);if ("error" === n.status) return v.reject(e, n.value);var r = n.value;if (r) l(e, r);else {
        e.state = m, e.outcome = t;for (var a = -1, o = e.queue.length; ++a < o;) {
          e.queue[a].callFulfilled(t);
        }
      }return e;
    }, v.reject = function (e, t) {
      e.state = y, e.outcome = t;for (var n = -1, r = e.queue.length; ++n < r;) {
        e.queue[n].callRejected(t);
      }return e;
    }, n.resolve = c, n.reject = f, n.all = d, n.race = h;
  }, { immediate: 2 }], 2: [function (e, t, n) {
    (function (e) {
      "use strict";
      function n() {
        c = !0;for (var e, t, n = f.length; n;) {
          for (t = f, f = [], e = -1; ++e < n;) {
            t[e]();
          }n = f.length;
        }c = !1;
      }function r(e) {
        1 !== f.push(e) || c || a();
      }var a,
          o = e.MutationObserver || e.WebKitMutationObserver;if (o) {
        var i = 0,
            s = new o(n),
            l = e.document.createTextNode("");s.observe(l, { characterData: !0 }), a = function a() {
          l.data = i = ++i % 2;
        };
      } else if (e.setImmediate || "undefined" == typeof e.MessageChannel) a = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () {
        var t = e.document.createElement("script");t.onreadystatechange = function () {
          n(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
        }, e.document.documentElement.appendChild(t);
      } : function () {
        setTimeout(n, 0);
      };else {
        var u = new e.MessageChannel();u.port1.onmessage = n, a = function a() {
          u.port2.postMessage(0);
        };
      }var c,
          f = [];t.exports = r;
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}], 3: [function (e, t, n) {
    (function (n) {
      "use strict";
      var r = e("./jsonp"),
          a = e("lie");t.exports = function (e, t) {
        if (t = t || {}, t.jsonp) return r(e, t);var o,
            i,
            s = new a(function (r, a) {
          i = a, void 0 === n.XMLHttpRequest && a("XMLHttpRequest is not supported");var s;o = new n.XMLHttpRequest(), o.open("GET", e), t.headers && Object.keys(t.headers).forEach(function (e) {
            o.setRequestHeader(e, t.headers[e]);
          }), o.onreadystatechange = function () {
            4 === o.readyState && (o.status < 400 && t.local || 200 === o.status ? (n.JSON ? s = JSON.parse(o.responseText) : a(new Error("JSON is not supported")), r(s)) : a(o.status ? o.statusText : "Attempted cross origin request without CORS enabled"));
          }, o.send();
        });return s["catch"](function (e) {
          return o.abort(), e;
        }), s.abort = i, s;
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { "./jsonp": 5, lie: 1 }], 4: [function (e, t, n) {
    (function (t) {
      "use strict";
      var n = t.L || e("leaflet"),
          r = e("lie"),
          a = e("./ajax");n.GeoJSON.AJAX = n.GeoJSON.extend({ defaultAJAXparams: { dataType: "json", callbackParam: "callback", local: !1, middleware: function middleware(e) {
            return e;
          } }, initialize: function initialize(e, t) {
          this.urls = [], e && ("string" == typeof e ? this.urls.push(e) : "function" == typeof e.pop ? this.urls = this.urls.concat(e) : (t = e, e = void 0));var a = n.Util.extend({}, this.defaultAJAXparams);for (var o in t) {
            this.defaultAJAXparams.hasOwnProperty(o) && (a[o] = t[o]);
          }this.ajaxParams = a, this._layers = {}, n.Util.setOptions(this, t), this.on("data:loaded", function () {
            this.filter && this.refilter(this.filter);
          }, this);var i = this;this.urls.length > 0 && new r(function (e) {
            e();
          }).then(function () {
            i.addUrl();
          });
        }, clearLayers: function clearLayers() {
          return this.urls = [], n.GeoJSON.prototype.clearLayers.call(this), this;
        }, addUrl: function addUrl(e) {
          var t = this;e && ("string" == typeof e ? t.urls.push(e) : "function" == typeof e.pop && (t.urls = t.urls.concat(e)));var r = t.urls.length,
              o = 0;t.fire("data:loading"), t.urls.forEach(function (e) {
            "json" === t.ajaxParams.dataType.toLowerCase() ? a(e, t.ajaxParams).then(function (e) {
              var n = t.ajaxParams.middleware(e);t.addData(n), t.fire("data:progress", n);
            }, function (e) {
              t.fire("data:progress", { error: e });
            }) : "jsonp" === t.ajaxParams.dataType.toLowerCase() && n.Util.jsonp(e, t.ajaxParams).then(function (e) {
              var n = t.ajaxParams.middleware(e);t.addData(n), t.fire("data:progress", n);
            }, function (e) {
              t.fire("data:progress", { error: e });
            });
          }), t.on("data:progress", function () {
            ++o === r && t.fire("data:loaded");
          });
        }, refresh: function refresh(e) {
          e = e || this.urls, this.clearLayers(), this.addUrl(e);
        }, refilter: function refilter(e) {
          "function" != typeof e ? (this.filter = !1, this.eachLayer(function (e) {
            e.setStyle({ stroke: !0, clickable: !0 });
          })) : (this.filter = e, this.eachLayer(function (t) {
            e(t.feature) ? t.setStyle({ stroke: !0, clickable: !0 }) : t.setStyle({ stroke: !1, clickable: !1 });
          }));
        } }), n.Util.Promise = r, n.Util.ajax = a, n.Util.jsonp = e("./jsonp"), n.geoJson.ajax = function (e, t) {
        return new n.GeoJSON.AJAX(e, t);
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { "./ajax": 3, "./jsonp": 5, leaflet: void 0, lie: 1 }], 5: [function (e, t, n) {
    (function (n) {
      "use strict";
      var r = n.L || e("leaflet"),
          a = e("lie");t.exports = function (e, t) {
        t = t || {};var o,
            i,
            s,
            l,
            u = document.getElementsByTagName("head")[0],
            c = r.DomUtil.create("script", "", u),
            f = new a(function (r, a) {
          l = a;var f = t.cbParam || "callback";t.callbackName ? o = t.callbackName : (s = "_" + ("" + Math.random()).slice(2), o = "_leafletJSONPcallbacks." + s), c.type = "text/javascript", s && (n._leafletJSONPcallbacks || (n._leafletJSONPcallbacks = { length: 0 }), n._leafletJSONPcallbacks.length++, n._leafletJSONPcallbacks[s] = function (e) {
            u.removeChild(c), delete n._leafletJSONPcallbacks[s], n._leafletJSONPcallbacks.length--, n._leafletJSONPcallbacks.length || delete n._leafletJSONPcallbacks, r(e);
          }), i = -1 === e.indexOf("?") ? e + "?" + f + "=" + o : e + "&" + f + "=" + o, c.src = i;
        }).then(null, function (e) {
          return u.removeChild(c), delete r.Util.ajax.cb[s], e;
        });return f.abort = l, f;
      };
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, { leaflet: void 0, lie: 1 }] }, {}, [4]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./public/assets/vendor/leaflet-plugins/leaflet.geodesic.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file is part of Leaflet.Geodesic.
// Copyright (C) 2017  Henry Thasler
// based on code by Chris Veness Copyright (C) 2014 https://github.com/chrisveness/geodesy
//
// Leaflet.Geodesic is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Leaflet.Geodesic is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Leaflet.Geodesic.  If not, see <http://www.gnu.org/licenses/>.


/** Extend Number object with method to convert numeric degrees to radians */

if (typeof Number.prototype.toRadians === "undefined") {
    Number.prototype.toRadians = function () {
        return this * Math.PI / 180;
    };
}

/** Extend Number object with method to convert radians to numeric (signed) degrees */
if (typeof Number.prototype.toDegrees === "undefined") {
    Number.prototype.toDegrees = function () {
        return this * 180 / Math.PI;
    };
}

var INTERSECT_LNG = 179.999; // Lng used for intersection and wrap around on map edges

L.Geodesic = L.Polyline.extend({
    options: {
        color: "blue",
        steps: 10,
        dash: 1,
        wrap: true
    },

    initialize: function initialize(latlngs, options) {
        this.options = this._merge_options(this.options, options);
        this.datum = {};
        this.datum.ellipsoid = {
            a: 6378137,
            b: 6356752.3142,
            f: 1 / 298.257223563 // WGS-84
        };this._latlngs = this.options.dash < 1 ? this._generate_GeodesicDashed(latlngs) : this._generate_Geodesic(latlngs);
        L.Polyline.prototype.initialize.call(this, this._latlngs, this.options);
    },

    setLatLngs: function setLatLngs(latlngs) {
        this._latlngs = this.options.dash < 1 ? this._generate_GeodesicDashed(latlngs) : this._generate_Geodesic(latlngs);
        L.Polyline.prototype.setLatLngs.call(this, this._latlngs);
    },

    /**
     * Calculates some statistic values of current geodesic multipolyline
     * @returns (Object} Object with several properties (e.g. overall distance)
     */
    getStats: function getStats() {
        var obj = {
            distance: 0,
            points: 0,
            polygons: this._latlngs.length
        },
            poly = void 0,
            points = void 0;

        for (poly = 0; poly < this._latlngs.length; poly++) {
            obj.points += this._latlngs[poly].length;
            for (points = 0; points < this._latlngs[poly].length - 1; points++) {
                obj.distance += this._vincenty_inverse(this._latlngs[poly][points], this._latlngs[poly][points + 1]).distance;
            }
        }
        return obj;
    },

    /**
     * Creates geodesic lines from geoJson. Replaces all current features of this instance.
     * Supports LineString, MultiLineString and Polygon
     * @param {Object} geojson - geosjon as object.
     */
    geoJson: function geoJson(geojson) {

        var normalized = L.GeoJSON.asFeature(geojson);
        var features = normalized.type === "FeatureCollection" ? normalized.features : [normalized];
        this._latlngs = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = features[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var feature = _step.value;

                var geometry = feature.type === "Feature" ? feature.geometry : feature,
                    coords = geometry.coordinates;

                switch (geometry.type) {
                    case "LineString":
                        this._latlngs.push(this._generate_Geodesic([L.GeoJSON.coordsToLatLngs(coords, 0)]));
                        break;
                    case "MultiLineString":
                    case "Polygon":
                        this._latlngs.push(this._generate_Geodesic(L.GeoJSON.coordsToLatLngs(coords, 1)));
                        break;
                    case "Point":
                    case "MultiPoint":
                        console.log("Dude, points can't be drawn as geodesic lines...");
                        break;
                    default:
                        console.log("Drawing " + geometry.type + " as a geodesic is not supported. Skipping...");
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        L.Polyline.prototype.setLatLngs.call(this, this._latlngs);
    },

    /**
     * Creates a great circle. Replaces all current lines.
     * @param {Object} center - geographic position
     * @param {number} radius - radius of the circle in metres
     */
    createCircle: function createCircle(center, radius) {
        var polylineIndex = 0;
        var prev = {
            lat: 0,
            lng: 0,
            brg: 0
        };
        var step = void 0;

        this._latlngs = [];
        this._latlngs[polylineIndex] = [];

        var direct = this._vincenty_direct(L.latLng(center), 0, radius, this.options.wrap);
        prev = L.latLng(direct.lat, direct.lng);
        this._latlngs[polylineIndex].push(prev);
        for (step = 1; step <= this.options.steps;) {
            direct = this._vincenty_direct(L.latLng(center), 360 / this.options.steps * step, radius, this.options.wrap);
            var gp = L.latLng(direct.lat, direct.lng);
            if (Math.abs(gp.lng - prev.lng) > 180) {
                var inverse = this._vincenty_inverse(prev, gp);
                var sec = this._intersection(prev, inverse.initialBearing, {
                    lat: -89,
                    lng: gp.lng - prev.lng > 0 ? -INTERSECT_LNG : INTERSECT_LNG
                }, 0);
                if (sec) {
                    this._latlngs[polylineIndex].push(L.latLng(sec.lat, sec.lng));
                    polylineIndex++;
                    this._latlngs[polylineIndex] = [];
                    prev = L.latLng(sec.lat, -sec.lng);
                    this._latlngs[polylineIndex].push(prev);
                } else {
                    polylineIndex++;
                    this._latlngs[polylineIndex] = [];
                    this._latlngs[polylineIndex].push(gp);
                    prev = gp;
                    step++;
                }
            } else {
                this._latlngs[polylineIndex].push(gp);
                prev = gp;
                step++;
            }
        }

        L.Polyline.prototype.setLatLngs.call(this, this._latlngs);
    },

    /**
     * Creates a geodesic Polyline from given coordinates
     * @param {Object} latlngs - One or more polylines as an array. See Leaflet doc about Polyline
     * @returns (Object} An array of arrays of geographical points.
     */
    _generate_Geodesic: function _generate_Geodesic(latlngs) {
        var _geo = [],
            _geocnt = 0,
            s = void 0,
            poly = void 0,
            points = void 0,
            pointA = void 0,
            pointB = void 0;

        for (poly = 0; poly < latlngs.length; poly++) {
            _geo[_geocnt] = [];
            for (points = 0; points < latlngs[poly].length - 1; points++) {
                pointA = L.latLng(latlngs[poly][points]);
                pointB = L.latLng(latlngs[poly][points + 1]);
                if (pointA.equals(pointB)) {
                    continue;
                }
                var inverse = this._vincenty_inverse(pointA, pointB);
                var prev = pointA;
                _geo[_geocnt].push(prev);
                for (s = 1; s <= this.options.steps;) {
                    var direct = this._vincenty_direct(pointA, inverse.initialBearing, inverse.distance / this.options.steps * s, this.options.wrap);
                    var gp = L.latLng(direct.lat, direct.lng);
                    if (Math.abs(gp.lng - prev.lng) > 180) {
                        var sec = this._intersection(pointA, inverse.initialBearing, {
                            lat: -89,
                            lng: gp.lng - prev.lng > 0 ? -INTERSECT_LNG : INTERSECT_LNG
                        }, 0);
                        if (sec) {
                            _geo[_geocnt].push(L.latLng(sec.lat, sec.lng));
                            _geocnt++;
                            _geo[_geocnt] = [];
                            prev = L.latLng(sec.lat, -sec.lng);
                            _geo[_geocnt].push(prev);
                        } else {
                            _geocnt++;
                            _geo[_geocnt] = [];
                            _geo[_geocnt].push(gp);
                            prev = gp;
                            s++;
                        }
                    } else {
                        _geo[_geocnt].push(gp);
                        prev = gp;
                        s++;
                    }
                }
            }
            _geocnt++;
        }
        return _geo;
    },

    /**
     * Creates a dashed geodesic Polyline from given coordinates - under work
     * @param {Object} latlngs - One or more polylines as an array. See Leaflet doc about Polyline
     * @returns (Object} An array of arrays of geographical points.
     */
    _generate_GeodesicDashed: function _generate_GeodesicDashed(latlngs) {
        var _geo = [],
            _geocnt = 0,
            s = void 0,
            poly = void 0,
            points = void 0;
        //      _geo = latlngs;    // bypass

        for (poly = 0; poly < latlngs.length; poly++) {
            _geo[_geocnt] = [];
            for (points = 0; points < latlngs[poly].length - 1; points++) {
                var inverse = this._vincenty_inverse(L.latLng(latlngs[poly][points]), L.latLng(latlngs[poly][points + 1]));
                var prev = L.latLng(latlngs[poly][points]);
                _geo[_geocnt].push(prev);
                for (s = 1; s <= this.options.steps;) {
                    var direct = this._vincenty_direct(L.latLng(latlngs[poly][points]), inverse.initialBearing, inverse.distance / this.options.steps * s - inverse.distance / this.options.steps * (1 - this.options.dash), this.options.wrap);
                    var gp = L.latLng(direct.lat, direct.lng);
                    if (Math.abs(gp.lng - prev.lng) > 180) {
                        var sec = this._intersection(L.latLng(latlngs[poly][points]), inverse.initialBearing, {
                            lat: -89,
                            lng: gp.lng - prev.lng > 0 ? -INTERSECT_LNG : INTERSECT_LNG
                        }, 0);
                        if (sec) {
                            _geo[_geocnt].push(L.latLng(sec.lat, sec.lng));
                            _geocnt++;
                            _geo[_geocnt] = [];
                            prev = L.latLng(sec.lat, -sec.lng);
                            _geo[_geocnt].push(prev);
                        } else {
                            _geocnt++;
                            _geo[_geocnt] = [];
                            _geo[_geocnt].push(gp);
                            prev = gp;
                            s++;
                        }
                    } else {
                        _geo[_geocnt].push(gp);
                        _geocnt++;
                        var direct2 = this._vincenty_direct(L.latLng(latlngs[poly][points]), inverse.initialBearing, inverse.distance / this.options.steps * s, this.options.wrap);
                        _geo[_geocnt] = [];
                        _geo[_geocnt].push(L.latLng(direct2.lat, direct2.lng));
                        s++;
                    }
                }
            }
            _geocnt++;
        }
        return _geo;
    },

    /**
     * Vincenty direct calculation.
     * based on the work of Chris Veness (https://github.com/chrisveness/geodesy)
     *
     * @private
     * @param {number} initialBearing - Initial bearing in degrees from north.
     * @param {number} distance - Distance along bearing in metres.
     * @returns (Object} Object including point (destination point), finalBearing.
     */

    _vincenty_direct: function _vincenty_direct(p1, initialBearing, distance, wrap) {
        var φ1 = p1.lat.toRadians(),
            λ1 = p1.lng.toRadians();
        var α1 = initialBearing.toRadians();
        var s = distance;

        var a = this.datum.ellipsoid.a,
            b = this.datum.ellipsoid.b,
            f = this.datum.ellipsoid.f;

        var sinα1 = Math.sin(α1);
        var cosα1 = Math.cos(α1);

        var tanU1 = (1 - f) * Math.tan(φ1),
            cosU1 = 1 / Math.sqrt(1 + tanU1 * tanU1),
            sinU1 = tanU1 * cosU1;
        var σ1 = Math.atan2(tanU1, cosα1);
        var sinα = cosU1 * sinα1;
        var cosSqα = 1 - sinα * sinα;
        var uSq = cosSqα * (a * a - b * b) / (b * b);
        var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
        var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));

        var σ = s / (b * A),
            σʹ,
            iterations = 0;
        do {
            var cos2σM = Math.cos(2 * σ1 + σ);
            var sinσ = Math.sin(σ);
            var cosσ = Math.cos(σ);
            var Δσ = B * sinσ * (cos2σM + B / 4 * (cosσ * (-1 + 2 * cos2σM * cos2σM) - B / 6 * cos2σM * (-3 + 4 * sinσ * sinσ) * (-3 + 4 * cos2σM * cos2σM)));
            σʹ = σ;
            σ = s / (b * A) + Δσ;
        } while (Math.abs(σ - σʹ) > 1e-12 && ++iterations);

        var x = sinU1 * sinσ - cosU1 * cosσ * cosα1;
        var φ2 = Math.atan2(sinU1 * cosσ + cosU1 * sinσ * cosα1, (1 - f) * Math.sqrt(sinα * sinα + x * x));
        var λ = Math.atan2(sinσ * sinα1, cosU1 * cosσ - sinU1 * sinσ * cosα1);
        var C = f / 16 * cosSqα * (4 + f * (4 - 3 * cosSqα));
        var L = λ - (1 - C) * f * sinα * (σ + C * sinσ * (cos2σM + C * cosσ * (-1 + 2 * cos2σM * cos2σM)));

        if (wrap) var λ2 = (λ1 + L + 3 * Math.PI) % (2 * Math.PI) - Math.PI; // normalise to -180...+180
        else var λ2 = λ1 + L; // do not normalize

        var revAz = Math.atan2(sinα, -x);

        return {
            lat: φ2.toDegrees(),
            lng: λ2.toDegrees(),
            finalBearing: revAz.toDegrees()
        };
    },

    /**
     * Vincenty inverse calculation.
     * based on the work of Chris Veness (https://github.com/chrisveness/geodesy)
     *
     * @private
     * @param {LatLng} p1 - Latitude/longitude of start point.
     * @param {LatLng} p2 - Latitude/longitude of destination point.
     * @returns {Object} Object including distance, initialBearing, finalBearing.
     * @throws {Error} If formula failed to converge.
     */
    _vincenty_inverse: function _vincenty_inverse(p1, p2) {
        var φ1 = p1.lat.toRadians(),
            λ1 = p1.lng.toRadians();
        var φ2 = p2.lat.toRadians(),
            λ2 = p2.lng.toRadians();

        var a = this.datum.ellipsoid.a,
            b = this.datum.ellipsoid.b,
            f = this.datum.ellipsoid.f;

        var L = λ2 - λ1;
        var tanU1 = (1 - f) * Math.tan(φ1),
            cosU1 = 1 / Math.sqrt(1 + tanU1 * tanU1),
            sinU1 = tanU1 * cosU1;
        var tanU2 = (1 - f) * Math.tan(φ2),
            cosU2 = 1 / Math.sqrt(1 + tanU2 * tanU2),
            sinU2 = tanU2 * cosU2;

        var λ = L,
            λʹ,
            iterations = 0;
        do {
            var sinλ = Math.sin(λ),
                cosλ = Math.cos(λ);
            var sinSqσ = cosU2 * sinλ * (cosU2 * sinλ) + (cosU1 * sinU2 - sinU1 * cosU2 * cosλ) * (cosU1 * sinU2 - sinU1 * cosU2 * cosλ);
            var sinσ = Math.sqrt(sinSqσ);
            if (sinσ == 0) return 0; // co-incident points
            var cosσ = sinU1 * sinU2 + cosU1 * cosU2 * cosλ;
            var σ = Math.atan2(sinσ, cosσ);
            var sinα = cosU1 * cosU2 * sinλ / sinσ;
            var cosSqα = 1 - sinα * sinα;
            var cos2σM = cosσ - 2 * sinU1 * sinU2 / cosSqα;
            if (isNaN(cos2σM)) cos2σM = 0; // equatorial line: cosSqα=0 (§6)
            var C = f / 16 * cosSqα * (4 + f * (4 - 3 * cosSqα));
            λʹ = λ;
            λ = L + (1 - C) * f * sinα * (σ + C * sinσ * (cos2σM + C * cosσ * (-1 + 2 * cos2σM * cos2σM)));
        } while (Math.abs(λ - λʹ) > 1e-12 && ++iterations < 100);
        if (iterations >= 100) {
            console.log("Formula failed to converge. Altering target position.");
            return this._vincenty_inverse(p1, {
                lat: p2.lat,
                lng: p2.lng - 0.01
            });
            //  throw new Error('Formula failed to converge');
        }

        var uSq = cosSqα * (a * a - b * b) / (b * b);
        var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
        var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
        var Δσ = B * sinσ * (cos2σM + B / 4 * (cosσ * (-1 + 2 * cos2σM * cos2σM) - B / 6 * cos2σM * (-3 + 4 * sinσ * sinσ) * (-3 + 4 * cos2σM * cos2σM)));

        var s = b * A * (σ - Δσ);

        var fwdAz = Math.atan2(cosU2 * sinλ, cosU1 * sinU2 - sinU1 * cosU2 * cosλ);
        var revAz = Math.atan2(cosU1 * sinλ, -sinU1 * cosU2 + cosU1 * sinU2 * cosλ);

        s = Number(s.toFixed(3)); // round to 1mm precision
        return {
            distance: s,
            initialBearing: fwdAz.toDegrees(),
            finalBearing: revAz.toDegrees()
        };
    },

    /**
     * Returns the point of intersection of two paths defined by point and bearing.
     * based on the work of Chris Veness (https://github.com/chrisveness/geodesy)
     *
     * @param {LatLon} p1 - First point.
     * @param {number} brng1 - Initial bearing from first point.
     * @param {LatLon} p2 - Second point.
     * @param {number} brng2 - Initial bearing from second point.
     * @returns {Object} containing lat/lng information of intersection.
     *
     * @example
     * var p1 = LatLon(51.8853, 0.2545), brng1 = 108.55;
     * var p2 = LatLon(49.0034, 2.5735), brng2 = 32.44;
     * var pInt = LatLon.intersection(p1, brng1, p2, brng2); // pInt.toString(): 50.9078°N, 4.5084°E
     */
    _intersection: function _intersection(p1, brng1, p2, brng2) {
        // see http://williams.best.vwh.net/avform.htm#Intersection

        var φ1 = p1.lat.toRadians(),
            λ1 = p1.lng.toRadians();
        var φ2 = p2.lat.toRadians(),
            λ2 = p2.lng.toRadians();
        var θ13 = Number(brng1).toRadians(),
            θ23 = Number(brng2).toRadians();
        var Δφ = φ2 - φ1,
            Δλ = λ2 - λ1;

        var δ12 = 2 * Math.asin(Math.sqrt(Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)));
        if (δ12 == 0) return null;

        // initial/final bearings between points
        var θ1 = Math.acos((Math.sin(φ2) - Math.sin(φ1) * Math.cos(δ12)) / (Math.sin(δ12) * Math.cos(φ1)));
        if (isNaN(θ1)) θ1 = 0; // protect against rounding
        var θ2 = Math.acos((Math.sin(φ1) - Math.sin(φ2) * Math.cos(δ12)) / (Math.sin(δ12) * Math.cos(φ2)));

        if (Math.sin(λ2 - λ1) > 0) {
            var θ12 = θ1;
            var θ21 = 2 * Math.PI - θ2;
        } else {
            var θ12 = 2 * Math.PI - θ1;
            var θ21 = θ2;
        }

        var α1 = (θ13 - θ12 + Math.PI) % (2 * Math.PI) - Math.PI; // angle 2-1-3
        var α2 = (θ21 - θ23 + Math.PI) % (2 * Math.PI) - Math.PI; // angle 1-2-3

        if (Math.sin(α1) == 0 && Math.sin(α2) == 0) return null; // infinite intersections
        if (Math.sin(α1) * Math.sin(α2) < 0) return null; // ambiguous intersection

        //α1 = Math.abs(α1);
        //α2 = Math.abs(α2);
        // ... Ed Williams takes abs of α1/α2, but seems to break calculation?

        var α3 = Math.acos(-Math.cos(α1) * Math.cos(α2) + Math.sin(α1) * Math.sin(α2) * Math.cos(δ12));
        var δ13 = Math.atan2(Math.sin(δ12) * Math.sin(α1) * Math.sin(α2), Math.cos(α2) + Math.cos(α1) * Math.cos(α3));
        var φ3 = Math.asin(Math.sin(φ1) * Math.cos(δ13) + Math.cos(φ1) * Math.sin(δ13) * Math.cos(θ13));
        var Δλ13 = Math.atan2(Math.sin(θ13) * Math.sin(δ13) * Math.cos(φ1), Math.cos(δ13) - Math.sin(φ1) * Math.sin(φ3));
        var λ3 = λ1 + Δλ13;
        λ3 = (λ3 + 3 * Math.PI) % (2 * Math.PI) - Math.PI; // normalise to -180..+180º

        return {
            lat: φ3.toDegrees(),
            lng: λ3.toDegrees()
        };
    },

    /**
     * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
     * @param obj1
     * @param obj2
     * @returns obj3 a new object based on obj1 and obj2
     */
    _merge_options: function _merge_options(obj1, obj2) {
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (var _attrname in obj2) {
            obj3[_attrname] = obj2[_attrname];
        }
        return obj3;
    }
});

L.geodesic = function (latlngs, options) {
    return new L.Geodesic(latlngs, options);
};

/***/ }),

/***/ "./public/assets/vendor/leaflet-plugins/leaflet.rotatedMarker.js":
/***/ (function(module, exports) {

(function () {
    // save these original methods before they are overwritten
    var proto_initIcon = L.Marker.prototype._initIcon;
    var proto_setPos = L.Marker.prototype._setPos;

    var oldIE = L.DomUtil.TRANSFORM === 'msTransform';

    L.Marker.addInitHook(function () {
        var iconOptions = this.options.icon && this.options.icon.options;
        var iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
        if (iconAnchor) {
            iconAnchor = iconAnchor[0] + 'px ' + iconAnchor[1] + 'px';
        }
        this.options.rotationOrigin = this.options.rotationOrigin || iconAnchor || 'center bottom';
        this.options.rotationAngle = this.options.rotationAngle || 0;

        // Ensure marker keeps rotated during dragging
        this.on('drag', function (e) {
            e.target._applyRotation();
        });
    });

    L.Marker.include({
        _initIcon: function _initIcon() {
            proto_initIcon.call(this);
        },

        _setPos: function _setPos(pos) {
            proto_setPos.call(this, pos);
            this._applyRotation();
        },

        _applyRotation: function _applyRotation() {
            if (this.options.rotationAngle) {
                this._icon.style[L.DomUtil.TRANSFORM + 'Origin'] = this.options.rotationOrigin;

                if (oldIE) {
                    // for IE 9, use the 2D rotation
                    this._icon.style[L.DomUtil.TRANSFORM] = 'rotate(' + this.options.rotationAngle + 'deg)';
                } else {
                    // for modern browsers, prefer the 3D accelerated version
                    this._icon.style[L.DomUtil.TRANSFORM] += ' rotateZ(' + this.options.rotationAngle + 'deg)';
                }
            }
        },

        setRotationAngle: function setRotationAngle(angle) {
            this.options.rotationAngle = angle;
            this.update();
            return this;
        },

        setRotationOrigin: function setRotationOrigin(origin) {
            this.options.rotationOrigin = origin;
            this.update();
            return this;
        }
    });
})();

/***/ }),

/***/ "./public/assets/vendor/leaflet/dist/leaflet.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* @preserve
 * Leaflet 1.2.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function (t, i) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? i(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : i(t.L = {});
}(this, function (t) {
  "use strict";
  function i(t) {
    var i, e, n, o;for (e = 1, n = arguments.length; e < n; e++) {
      o = arguments[e];for (i in o) {
        t[i] = o[i];
      }
    }return t;
  }function e(t, i) {
    var e = Array.prototype.slice;if (t.bind) return t.bind.apply(t, e.call(arguments, 1));var n = e.call(arguments, 2);return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }function n(t) {
    return t._leaflet_id = t._leaflet_id || ++ti, t._leaflet_id;
  }function o(t, i, e) {
    var n, o, s, r;return r = function r() {
      n = !1, o && (s.apply(e, o), o = !1);
    }, s = function s() {
      n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0);
    };
  }function s(t, i, e) {
    var n = i[1],
        o = i[0],
        s = n - o;return t === n && e ? t : ((t - o) % s + s) % s + o;
  }function r() {
    return !1;
  }function a(t, i) {
    var e = Math.pow(10, i || 5);return Math.round(t * e) / e;
  }function h(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }function u(t) {
    return h(t).split(/\s+/);
  }function l(t, i) {
    t.hasOwnProperty("options") || (t.options = t.options ? Qt(t.options) : {});for (var e in i) {
      t.options[e] = i[e];
    }return t.options;
  }function c(t, i, e) {
    var n = [];for (var o in t) {
      n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
    }return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&");
  }function _(t, i) {
    return t.replace(ii, function (t, e) {
      var n = i[e];if (void 0 === n) throw new Error("No value provided for variable " + t);return "function" == typeof n && (n = n(i)), n;
    });
  }function d(t, i) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] === i) return e;
    }return -1;
  }function p(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }function m(t) {
    var i = +new Date(),
        e = Math.max(0, 16 - (i - oi));return oi = i + e, window.setTimeout(t, e);
  }function f(t, i, n) {
    if (!n || si !== m) return si.call(window, e(t, i));t.call(i);
  }function g(t) {
    t && ri.call(window, t);
  }function v() {}function y(t) {
    if (L && L.Mixin) {
      t = ei(t) ? t : [t];for (var i = 0; i < t.length; i++) {
        t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
  }function x(t, i, e) {
    this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i;
  }function w(t, i, e) {
    return t instanceof x ? t : ei(t) ? new x(t[0], t[1]) : void 0 === t || null === t ? t : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "x" in t && "y" in t ? new x(t.x, t.y) : new x(t, i, e);
  }function P(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }function b(t, i) {
    return !t || t instanceof P ? t : new P(t, i);
  }function T(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }function z(t, i) {
    return t instanceof T ? t : new T(t, i);
  }function M(t, i, e) {
    if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e);
  }function C(t, i, e) {
    return t instanceof M ? t : ei(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new M(t[0], t[1], t[2]) : 2 === t.length ? new M(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "lat" in t ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new M(t, i, e);
  }function Z(t, i, e, n) {
    if (ei(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);this._a = t, this._b = i, this._c = e, this._d = n;
  }function E(t, i, e, n) {
    return new Z(t, i, e, n);
  }function S(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }function k(t, i) {
    var e,
        n,
        o,
        s,
        r,
        a,
        h = "";for (e = 0, o = t.length; e < o; e++) {
      for (n = 0, s = (r = t[e]).length; n < s; n++) {
        a = r[n], h += (n ? "L" : "M") + a.x + " " + a.y;
      }h += i ? qi ? "z" : "x" : "";
    }return h || "M0 0";
  }function B(t) {
    return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
  }function I(t, i, e, n) {
    return "touchstart" === i ? O(t, e, n) : "touchmove" === i ? W(t, e, n) : "touchend" === i && H(t, e, n), this;
  }function A(t, i, e) {
    var n = t["_leaflet_" + i + e];return "touchstart" === i ? t.removeEventListener(Xi, n, !1) : "touchmove" === i ? t.removeEventListener(Ji, n, !1) : "touchend" === i && (t.removeEventListener($i, n, !1), t.removeEventListener(Qi, n, !1)), this;
  }function O(t, i, n) {
    var o = e(function (t) {
      if ("mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
        if (!(te.indexOf(t.target.tagName) < 0)) return;$(t);
      }j(t, i);
    });t["_leaflet_touchstart" + n] = o, t.addEventListener(Xi, o, !1), ee || (document.documentElement.addEventListener(Xi, R, !0), document.documentElement.addEventListener(Ji, D, !0), document.documentElement.addEventListener($i, N, !0), document.documentElement.addEventListener(Qi, N, !0), ee = !0);
  }function R(t) {
    ie[t.pointerId] = t, ne++;
  }function D(t) {
    ie[t.pointerId] && (ie[t.pointerId] = t);
  }function N(t) {
    delete ie[t.pointerId], ne--;
  }function j(t, i) {
    t.touches = [];for (var e in ie) {
      t.touches.push(ie[e]);
    }t.changedTouches = [t], i(t);
  }function W(t, i, e) {
    var n = function n(t) {
      (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && j(t, i);
    };t["_leaflet_touchmove" + e] = n, t.addEventListener(Ji, n, !1);
  }function H(t, i, e) {
    var n = function n(t) {
      j(t, i);
    };t["_leaflet_touchend" + e] = n, t.addEventListener($i, n, !1), t.addEventListener(Qi, n, !1);
  }function F(t, i, e) {
    function n(t) {
      var i;if (Wi) {
        if (!Li || "mouse" === t.pointerType) return;i = ne;
      } else i = t.touches.length;if (!(i > 1)) {
        var e = Date.now(),
            n = e - (s || e);r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = e;
      }
    }function o(t) {
      if (a && !r.cancelBubble) {
        if (Wi) {
          if (!Li || "mouse" === t.pointerType) return;var e,
              n,
              o = {};for (n in r) {
            e = r[n], o[n] = e && e.bind ? e.bind(r) : e;
          }r = o;
        }r.type = "dblclick", i(r), s = null;
      }
    }var s,
        r,
        a = !1,
        h = 250;return t[re + oe + e] = n, t[re + se + e] = o, t[re + "dblclick" + e] = i, t.addEventListener(oe, n, !1), t.addEventListener(se, o, !1), t.addEventListener("dblclick", i, !1), this;
  }function U(t, i) {
    var e = t[re + oe + i],
        n = t[re + se + i],
        o = t[re + "dblclick" + i];return t.removeEventListener(oe, e, !1), t.removeEventListener(se, n, !1), Li || t.removeEventListener("dblclick", o, !1), this;
  }function V(t, i, e, n) {
    if ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i))) for (var o in i) {
      q(t, o, i[o], e);
    } else for (var s = 0, r = (i = u(i)).length; s < r; s++) {
      q(t, i[s], e, n);
    }return this;
  }function G(t, i, e, n) {
    if ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i))) for (var o in i) {
      K(t, o, i[o], e);
    } else if (i) for (var s = 0, r = (i = u(i)).length; s < r; s++) {
      K(t, i[s], e, n);
    } else {
      for (var a in t[ae]) {
        K(t, a, t[ae][a]);
      }delete t[ae];
    }return this;
  }function q(t, i, e, o) {
    var s = i + n(e) + (o ? "_" + n(o) : "");if (t[ae] && t[ae][s]) return this;var r = function r(i) {
      return e.call(o || t, i || window.event);
    },
        a = r;Wi && 0 === i.indexOf("touch") ? I(t, i, r, s) : !Hi || "dblclick" !== i || !F || Wi && Mi ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === i || "mouseleave" === i ? (r = function r(i) {
      i = i || window.event, ot(t, i) && a(i);
    }, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1)) : ("click" === i && bi && (r = function r(t) {
      st(t, a);
    }), t.addEventListener(i, r, !1)) : "attachEvent" in t && t.attachEvent("on" + i, r) : F(t, r, s), t[ae] = t[ae] || {}, t[ae][s] = r;
  }function K(t, i, e, o) {
    var s = i + n(e) + (o ? "_" + n(o) : ""),
        r = t[ae] && t[ae][s];if (!r) return this;Wi && 0 === i.indexOf("touch") ? A(t, i, s) : Hi && "dblclick" === i && U ? U(t, s) : "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r), t[ae][s] = null;
  }function Y(t) {
    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, nt(t), this;
  }function X(t) {
    return q(t, "mousewheel", Y), this;
  }function J(t) {
    return V(t, "mousedown touchstart dblclick", Y), q(t, "click", et), this;
  }function $(t) {
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
  }function Q(t) {
    return $(t), Y(t), this;
  }function tt(t, i) {
    if (!i) return new x(t.clientX, t.clientY);var e = i.getBoundingClientRect();return new x(t.clientX - e.left - i.clientLeft, t.clientY - e.top - i.clientTop);
  }function it(t) {
    return Li ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / he : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
  }function et(t) {
    ue[t.type] = !0;
  }function nt(t) {
    var i = ue[t.type];return ue[t.type] = !1, i;
  }function ot(t, i) {
    var e = i.relatedTarget;if (!e) return !0;try {
      for (; e && e !== t;) {
        e = e.parentNode;
      }
    } catch (t) {
      return !1;
    }return e !== t;
  }function st(t, i) {
    var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
        n = di && e - di;n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? Q(t) : (di = e, i(t));
  }function rt(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }function at(t, i) {
    var e = t.style[i] || t.currentStyle && t.currentStyle[i];if ((!e || "auto" === e) && document.defaultView) {
      var n = document.defaultView.getComputedStyle(t, null);e = n ? n[i] : null;
    }return "auto" === e ? null : e;
  }function ht(t, i, e) {
    var n = document.createElement(t);return n.className = i || "", e && e.appendChild(n), n;
  }function ut(t) {
    var i = t.parentNode;i && i.removeChild(t);
  }function lt(t) {
    for (; t.firstChild;) {
      t.removeChild(t.firstChild);
    }
  }function ct(t) {
    var i = t.parentNode;i.lastChild !== t && i.appendChild(t);
  }function _t(t) {
    var i = t.parentNode;i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }function dt(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);var e = gt(t);return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e);
  }function pt(t, i) {
    if (void 0 !== t.classList) for (var e = u(i), n = 0, o = e.length; n < o; n++) {
      t.classList.add(e[n]);
    } else if (!dt(t, i)) {
      var s = gt(t);ft(t, (s ? s + " " : "") + i);
    }
  }function mt(t, i) {
    void 0 !== t.classList ? t.classList.remove(i) : ft(t, h((" " + gt(t) + " ").replace(" " + i + " ", " ")));
  }function ft(t, i) {
    void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i;
  }function gt(t) {
    return void 0 === t.className.baseVal ? t.className : t.className.baseVal;
  }function vt(t, i) {
    "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && yt(t, i);
  }function yt(t, i) {
    var e = !1,
        n = "DXImageTransform.Microsoft.Alpha";try {
      e = t.filters.item(n);
    } catch (t) {
      if (1 === i) return;
    }i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")";
  }function xt(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++) {
      if (t[e] in i) return t[e];
    }return !1;
  }function wt(t, i, e) {
    var n = i || new x(0, 0);t.style[ce] = (Bi ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "");
  }function Lt(t, i) {
    t._leaflet_pos = i, Oi ? wt(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px");
  }function Pt(t) {
    return t._leaflet_pos || new x(0, 0);
  }function bt() {
    V(window, "dragstart", $);
  }function Tt() {
    G(window, "dragstart", $);
  }function zt(t) {
    for (; -1 === t.tabIndex;) {
      t = t.parentNode;
    }t.style && (Mt(), me = t, fe = t.style.outline, t.style.outline = "none", V(window, "keydown", Mt));
  }function Mt() {
    me && (me.style.outline = fe, me = void 0, fe = void 0, G(window, "keydown", Mt));
  }function Ct(t, i) {
    if (!i || !t.length) return t.slice();var e = i * i;return t = kt(t, e), t = Et(t, e);
  }function Zt(t, i, e) {
    return Math.sqrt(Rt(t, i, e, !0));
  }function Et(t, i) {
    var e = t.length,
        n = new ((typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != void 0 + "" ? Uint8Array : Array)(e);n[0] = n[e - 1] = 1, St(t, n, i, 0, e - 1);var o,
        s = [];for (o = 0; o < e; o++) {
      n[o] && s.push(t[o]);
    }return s;
  }function St(t, i, e, n, o) {
    var s,
        r,
        a,
        h = 0;for (r = n + 1; r <= o - 1; r++) {
      (a = Rt(t[r], t[n], t[o], !0)) > h && (s = r, h = a);
    }h > e && (i[s] = 1, St(t, i, e, n, s), St(t, i, e, s, o));
  }function kt(t, i) {
    for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) {
      Ot(t[n], t[o]) > i && (e.push(t[n]), o = n);
    }return o < s - 1 && e.push(t[s - 1]), e;
  }function Bt(t, i, e, n, o) {
    var s,
        r,
        a,
        h = n ? ze : At(t, e),
        u = At(i, e);for (ze = u;;) {
      if (!(h | u)) return [t, i];if (h & u) return !1;a = At(r = It(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a);
    }
  }function It(t, i, e, n, o) {
    var s,
        r,
        a = i.x - t.x,
        h = i.y - t.y,
        u = n.min,
        l = n.max;return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new x(s, r, o);
  }function At(t, i) {
    var e = 0;return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e;
  }function Ot(t, i) {
    var e = i.x - t.x,
        n = i.y - t.y;return e * e + n * n;
  }function Rt(t, i, e, n) {
    var o,
        s = i.x,
        r = i.y,
        a = e.x - s,
        h = e.y - r,
        u = a * a + h * h;return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new x(s, r);
  }function Dt(t) {
    return !ei(t[0]) || "object" != _typeof(t[0][0]) && void 0 !== t[0][0];
  }function Nt(t) {
    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Dt(t);
  }function jt(t, i, e) {
    var n,
        o,
        s,
        r,
        a,
        h,
        u,
        l,
        c,
        _ = [1, 4, 2, 8];for (o = 0, u = t.length; o < u; o++) {
      t[o]._code = At(t[o], i);
    }for (r = 0; r < 4; r++) {
      for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) {
        a = t[o], h = t[s], a._code & l ? h._code & l || ((c = It(h, a, l, i, e))._code = At(c, i), n.push(c)) : (h._code & l && ((c = It(h, a, l, i, e))._code = At(c, i), n.push(c)), n.push(a));
      }t = n;
    }return t;
  }function Wt(t, i) {
    var e,
        n,
        o,
        s,
        r = "Feature" === t.type ? t.geometry : t,
        a = r ? r.coordinates : null,
        h = [],
        u = i && i.pointToLayer,
        l = i && i.coordsToLatLng || Ht;if (!a && !r) return null;switch (r.type) {case "Point":
        return e = l(a), u ? u(t, e) : new qe(e);case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++) {
          e = l(a[o]), h.push(u ? u(t, e) : new qe(e));
        }return new Fe(h);case "LineString":case "MultiLineString":
        return n = Ft(a, "LineString" === r.type ? 0 : 1, l), new Je(n, i);case "Polygon":case "MultiPolygon":
        return n = Ft(a, "Polygon" === r.type ? 1 : 2, l), new $e(n, i);case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = Wt({ geometry: r.geometries[o], type: "Feature", properties: t.properties }, i);c && h.push(c);
        }return new Fe(h);default:
        throw new Error("Invalid GeoJSON object.");}
  }function Ht(t) {
    return new M(t[1], t[0], t[2]);
  }function Ft(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++) {
      n = i ? Ft(t[s], i - 1, e) : (e || Ht)(t[s]), o.push(n);
    }return o;
  }function Ut(t, i) {
    return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)];
  }function Vt(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++) {
      o.push(i ? Vt(t[s], i - 1, e, n) : Ut(t[s], n));
    }return !i && e && o.push(o[0]), o;
  }function Gt(t, e) {
    return t.feature ? i({}, t.feature, { geometry: e }) : qt(e);
  }function qt(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type ? t : { type: "Feature", properties: {}, geometry: t };
  }function Kt(t, i) {
    return new Qe(t, i);
  }function Yt(t, i) {
    return new ln(t, i);
  }function Xt(t) {
    return Gi ? new dn(t) : null;
  }function Jt(t) {
    return qi || Ki ? new gn(t) : null;
  }var $t = Object.freeze;Object.freeze = function (t) {
    return t;
  };var Qt = Object.create || function () {
    function t() {}return function (i) {
      return t.prototype = i, new t();
    };
  }(),
      ti = 0,
      ii = /\{ *([\w_\-]+) *\}/g,
      ei = Array.isArray || function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  },
      ni = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
      oi = 0,
      si = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
      ri = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function (t) {
    window.clearTimeout(t);
  },
      ai = (Object.freeze || Object)({ freeze: $t, extend: i, create: Qt, bind: e, lastId: ti, stamp: n, throttle: o, wrapNum: s, falseFn: r, formatNum: a, trim: h, splitWords: u, setOptions: l, getParamString: c, template: _, isArray: ei, indexOf: d, emptyImageUrl: ni, requestFn: si, cancelFn: ri, requestAnimFrame: f, cancelAnimFrame: g });v.extend = function (t) {
    var e = function e() {
      this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
    },
        n = e.__super__ = this.prototype,
        o = Qt(n);o.constructor = e, e.prototype = o;for (var s in this) {
      this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
    }return t.statics && (i(e, t.statics), delete t.statics), t.includes && (y(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = i(Qt(o.options), t.options)), i(o, t), o._initHooks = [], o.callInitHooks = function () {
      if (!this._initHooksCalled) {
        n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;for (var t = 0, i = o._initHooks.length; t < i; t++) {
          o._initHooks[t].call(this);
        }
      }
    }, e;
  }, v.include = function (t) {
    return i(this.prototype, t), this;
  }, v.mergeOptions = function (t) {
    return i(this.prototype.options, t), this;
  }, v.addInitHook = function (t) {
    var i = Array.prototype.slice.call(arguments, 1),
        e = "function" == typeof t ? t : function () {
      this[t].apply(this, i);
    };return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this;
  };var hi = { on: function on(t, i, e) {
      if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) for (var n in t) {
        this._on(n, t[n], i);
      } else for (var o = 0, s = (t = u(t)).length; o < s; o++) {
        this._on(t[o], i, e);
      }return this;
    }, off: function off(t, i, e) {
      if (t) {
        if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) for (var n in t) {
          this._off(n, t[n], i);
        } else for (var o = 0, s = (t = u(t)).length; o < s; o++) {
          this._off(t[o], i, e);
        }
      } else delete this._events;return this;
    }, _on: function _on(t, i, e) {
      this._events = this._events || {};var n = this._events[t];n || (n = [], this._events[t] = n), e === this && (e = void 0);for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++) {
        if (s[r].fn === i && s[r].ctx === e) return;
      }s.push(o);
    }, _off: function _off(t, i, e) {
      var n, o, s;if (this._events && (n = this._events[t])) if (i) {
        if (e === this && (e = void 0), n) for (o = 0, s = n.length; o < s; o++) {
          var a = n[o];if (a.ctx === e && a.fn === i) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1);
        }
      } else {
        for (o = 0, s = n.length; o < s; o++) {
          n[o].fn = r;
        }delete this._events[t];
      }
    }, fire: function fire(t, e, n) {
      if (!this.listens(t, n)) return this;var o = i({}, e, { type: t, target: this });if (this._events) {
        var s = this._events[t];if (s) {
          this._firingCount = this._firingCount + 1 || 1;for (var r = 0, a = s.length; r < a; r++) {
            var h = s[r];h.fn.call(h.ctx || this, o);
          }this._firingCount--;
        }
      }return n && this._propagateEvent(o), this;
    }, listens: function listens(t, i) {
      var e = this._events && this._events[t];if (e && e.length) return !0;if (i) for (var n in this._eventParents) {
        if (this._eventParents[n].listens(t, i)) return !0;
      }return !1;
    }, once: function once(t, i, n) {
      if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        for (var o in t) {
          this.once(o, t[o], i);
        }return this;
      }var s = e(function () {
        this.off(t, i, n).off(t, s, n);
      }, this);return this.on(t, i, n).on(t, s, n);
    }, addEventParent: function addEventParent(t) {
      return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this;
    }, removeEventParent: function removeEventParent(t) {
      return this._eventParents && delete this._eventParents[n(t)], this;
    }, _propagateEvent: function _propagateEvent(t) {
      for (var e in this._eventParents) {
        this._eventParents[e].fire(t.type, i({ layer: t.target }, t), !0);
      }
    } };hi.addEventListener = hi.on, hi.removeEventListener = hi.clearAllEventListeners = hi.off, hi.addOneTimeEventListener = hi.once, hi.fireEvent = hi.fire, hi.hasEventListeners = hi.listens;var ui = v.extend(hi);x.prototype = { clone: function clone() {
      return new x(this.x, this.y);
    }, add: function add(t) {
      return this.clone()._add(w(t));
    }, _add: function _add(t) {
      return this.x += t.x, this.y += t.y, this;
    }, subtract: function subtract(t) {
      return this.clone()._subtract(w(t));
    }, _subtract: function _subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    }, divideBy: function divideBy(t) {
      return this.clone()._divideBy(t);
    }, _divideBy: function _divideBy(t) {
      return this.x /= t, this.y /= t, this;
    }, multiplyBy: function multiplyBy(t) {
      return this.clone()._multiplyBy(t);
    }, _multiplyBy: function _multiplyBy(t) {
      return this.x *= t, this.y *= t, this;
    }, scaleBy: function scaleBy(t) {
      return new x(this.x * t.x, this.y * t.y);
    }, unscaleBy: function unscaleBy(t) {
      return new x(this.x / t.x, this.y / t.y);
    }, round: function round() {
      return this.clone()._round();
    }, _round: function _round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }, floor: function floor() {
      return this.clone()._floor();
    }, _floor: function _floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }, ceil: function ceil() {
      return this.clone()._ceil();
    }, _ceil: function _ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }, distanceTo: function distanceTo(t) {
      var i = (t = w(t)).x - this.x,
          e = t.y - this.y;return Math.sqrt(i * i + e * e);
    }, equals: function equals(t) {
      return (t = w(t)).x === this.x && t.y === this.y;
    }, contains: function contains(t) {
      return t = w(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    }, toString: function toString() {
      return "Point(" + a(this.x) + ", " + a(this.y) + ")";
    } }, P.prototype = { extend: function extend(t) {
      return t = w(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
    }, getCenter: function getCenter(t) {
      return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
    }, getBottomLeft: function getBottomLeft() {
      return new x(this.min.x, this.max.y);
    }, getTopRight: function getTopRight() {
      return new x(this.max.x, this.min.y);
    }, getTopLeft: function getTopLeft() {
      return this.min;
    }, getBottomRight: function getBottomRight() {
      return this.max;
    }, getSize: function getSize() {
      return this.max.subtract(this.min);
    }, contains: function contains(t) {
      var i, e;return (t = "number" == typeof t[0] || t instanceof x ? w(t) : b(t)) instanceof P ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y;
    }, intersects: function intersects(t) {
      t = b(t);var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= i.x && n.x <= e.x,
          r = o.y >= i.y && n.y <= e.y;return s && r;
    }, overlaps: function overlaps(t) {
      t = b(t);var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x > i.x && n.x < e.x,
          r = o.y > i.y && n.y < e.y;return s && r;
    }, isValid: function isValid() {
      return !(!this.min || !this.max);
    } }, T.prototype = { extend: function extend(t) {
      var i,
          e,
          n = this._southWest,
          o = this._northEast;if (t instanceof M) i = t, e = t;else {
        if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this;if (i = t._southWest, e = t._northEast, !i || !e) return this;
      }return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new M(i.lat, i.lng), this._northEast = new M(e.lat, e.lng)), this;
    }, pad: function pad(t) {
      var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          o = Math.abs(i.lng - e.lng) * t;return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o));
    }, getCenter: function getCenter() {
      return new M((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    }, getSouthWest: function getSouthWest() {
      return this._southWest;
    }, getNorthEast: function getNorthEast() {
      return this._northEast;
    }, getNorthWest: function getNorthWest() {
      return new M(this.getNorth(), this.getWest());
    }, getSouthEast: function getSouthEast() {
      return new M(this.getSouth(), this.getEast());
    }, getWest: function getWest() {
      return this._southWest.lng;
    }, getSouth: function getSouth() {
      return this._southWest.lat;
    }, getEast: function getEast() {
      return this._northEast.lng;
    }, getNorth: function getNorth() {
      return this._northEast.lat;
    }, contains: function contains(t) {
      t = "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t);var i,
          e,
          n = this._southWest,
          o = this._northEast;return t instanceof T ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng;
    }, intersects: function intersects(t) {
      t = z(t);var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && n.lat <= e.lat,
          r = o.lng >= i.lng && n.lng <= e.lng;return s && r;
    }, overlaps: function overlaps(t) {
      t = z(t);var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && n.lat < e.lat,
          r = o.lng > i.lng && n.lng < e.lng;return s && r;
    }, toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
    }, equals: function equals(t, i) {
      return !!t && (t = z(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i));
    }, isValid: function isValid() {
      return !(!this._southWest || !this._northEast);
    } }, M.prototype = { equals: function equals(t, i) {
      return !!t && (t = C(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i));
    }, toString: function toString(t) {
      return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")";
    }, distanceTo: function distanceTo(t) {
      return ci.distance(this, C(t));
    }, wrap: function wrap() {
      return ci.wrapLatLng(this);
    }, toBounds: function toBounds(t) {
      var i = 180 * t / 40075017,
          e = i / Math.cos(Math.PI / 180 * this.lat);return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
    }, clone: function clone() {
      return new M(this.lat, this.lng, this.alt);
    } };var li = { latLngToPoint: function latLngToPoint(t, i) {
      var e = this.projection.project(t),
          n = this.scale(i);return this.transformation._transform(e, n);
    }, pointToLatLng: function pointToLatLng(t, i) {
      var e = this.scale(i),
          n = this.transformation.untransform(t, e);return this.projection.unproject(n);
    }, project: function project(t) {
      return this.projection.project(t);
    }, unproject: function unproject(t) {
      return this.projection.unproject(t);
    }, scale: function scale(t) {
      return 256 * Math.pow(2, t);
    }, zoom: function zoom(t) {
      return Math.log(t / 256) / Math.LN2;
    }, getProjectedBounds: function getProjectedBounds(t) {
      if (this.infinite) return null;var i = this.projection.bounds,
          e = this.scale(t);return new P(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e));
    }, infinite: !1, wrapLatLng: function wrapLatLng(t) {
      var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;return new M(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt);
    }, wrapLatLngBounds: function wrapLatLngBounds(t) {
      var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          o = i.lng - e.lng;if (0 === n && 0 === o) return t;var s = t.getSouthWest(),
          r = t.getNorthEast();return new T(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o));
    } },
      ci = i({}, li, { wrapLng: [-180, 180], R: 6371e3, distance: function distance(t, i) {
      var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin(n) * Math.sin(o) + Math.cos(n) * Math.cos(o) * Math.cos((i.lng - t.lng) * e);return this.R * Math.acos(Math.min(s, 1));
    } }),
      _i = { R: 6378137, MAX_LATITUDE: 85.0511287798, project: function project(t) {
      var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          n = Math.max(Math.min(e, t.lat), -e),
          o = Math.sin(n * i);return new x(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2);
    }, unproject: function unproject(t) {
      var i = 180 / Math.PI;return new M((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R);
    }, bounds: function () {
      var t = 6378137 * Math.PI;return new P([-t, -t], [t, t]);
    }() };Z.prototype = { transform: function transform(t, i) {
      return this._transform(t.clone(), i);
    }, _transform: function _transform(t, i) {
      return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t;
    }, untransform: function untransform(t, i) {
      return i = i || 1, new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c);
    } };var di,
      pi,
      mi,
      fi,
      gi = i({}, ci, { code: "EPSG:3857", projection: _i, transformation: function () {
      var t = .5 / (Math.PI * _i.R);return E(t, .5, -t, .5);
    }() }),
      vi = i({}, gi, { code: "EPSG:900913" }),
      yi = document.documentElement.style,
      xi = "ActiveXObject" in window,
      wi = xi && !document.addEventListener,
      Li = "msLaunchUri" in navigator && !("documentMode" in document),
      Pi = B("webkit"),
      bi = B("android"),
      Ti = B("android 2") || B("android 3"),
      zi = !!window.opera,
      Mi = B("chrome"),
      Ci = B("gecko") && !Pi && !zi && !xi,
      Zi = !Mi && B("safari"),
      Ei = B("phantom"),
      Si = "OTransition" in yi,
      ki = 0 === navigator.platform.indexOf("Win"),
      Bi = xi && "transition" in yi,
      Ii = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Ti,
      Ai = "MozPerspective" in yi,
      Oi = !window.L_DISABLE_3D && (Bi || Ii || Ai) && !Si && !Ei,
      Ri = "undefined" != typeof orientation || B("mobile"),
      Di = Ri && Pi,
      Ni = Ri && Ii,
      ji = !window.PointerEvent && window.MSPointerEvent,
      Wi = !(!window.PointerEvent && !ji),
      Hi = !window.L_NO_TOUCH && (Wi || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
      Fi = Ri && zi,
      Ui = Ri && Ci,
      Vi = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      Gi = !!document.createElement("canvas").getContext,
      qi = !(!document.createElementNS || !S("svg").createSVGRect),
      Ki = !qi && function () {
    try {
      var t = document.createElement("div");t.innerHTML = '<v:shape adj="1"/>';var i = t.firstChild;return i.style.behavior = "url(#default#VML)", i && "object" == _typeof(i.adj);
    } catch (t) {
      return !1;
    }
  }(),
      Yi = (Object.freeze || Object)({ ie: xi, ielt9: wi, edge: Li, webkit: Pi, android: bi, android23: Ti, opera: zi, chrome: Mi, gecko: Ci, safari: Zi, phantom: Ei, opera12: Si, win: ki, ie3d: Bi, webkit3d: Ii, gecko3d: Ai, any3d: Oi, mobile: Ri, mobileWebkit: Di, mobileWebkit3d: Ni, msPointer: ji, pointer: Wi, touch: Hi, mobileOpera: Fi, mobileGecko: Ui, retina: Vi, canvas: Gi, svg: qi, vml: Ki }),
      Xi = ji ? "MSPointerDown" : "pointerdown",
      Ji = ji ? "MSPointerMove" : "pointermove",
      $i = ji ? "MSPointerUp" : "pointerup",
      Qi = ji ? "MSPointerCancel" : "pointercancel",
      te = ["INPUT", "SELECT", "OPTION"],
      ie = {},
      ee = !1,
      ne = 0,
      oe = ji ? "MSPointerDown" : Wi ? "pointerdown" : "touchstart",
      se = ji ? "MSPointerUp" : Wi ? "pointerup" : "touchend",
      re = "_leaflet_",
      ae = "_leaflet_events",
      he = ki && Mi ? 2 * window.devicePixelRatio : Ci ? window.devicePixelRatio : 1,
      ue = {},
      le = (Object.freeze || Object)({ on: V, off: G, stopPropagation: Y, disableScrollPropagation: X, disableClickPropagation: J, preventDefault: $, stop: Q, getMousePosition: tt, getWheelDelta: it, fakeStop: et, skipped: nt, isExternalTarget: ot, addListener: V, removeListener: G }),
      ce = xt(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
      _e = xt(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
      de = "webkitTransition" === _e || "OTransition" === _e ? _e + "End" : "transitionend";if ("onselectstart" in document) pi = function pi() {
    V(window, "selectstart", $);
  }, mi = function mi() {
    G(window, "selectstart", $);
  };else {
    var pe = xt(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);pi = function pi() {
      if (pe) {
        var t = document.documentElement.style;fi = t[pe], t[pe] = "none";
      }
    }, mi = function mi() {
      pe && (document.documentElement.style[pe] = fi, fi = void 0);
    };
  }var me,
      fe,
      ge = (Object.freeze || Object)({ TRANSFORM: ce, TRANSITION: _e, TRANSITION_END: de, get: rt, getStyle: at, create: ht, remove: ut, empty: lt, toFront: ct, toBack: _t, hasClass: dt, addClass: pt, removeClass: mt, setClass: ft, getClass: gt, setOpacity: vt, testProp: xt, setTransform: wt, setPosition: Lt, getPosition: Pt, disableTextSelection: pi, enableTextSelection: mi, disableImageDrag: bt, enableImageDrag: Tt, preventOutline: zt, restoreOutline: Mt }),
      ve = ui.extend({ run: function run(t, i, e, n) {
      this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = Pt(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
    }, stop: function stop() {
      this._inProgress && (this._step(!0), this._complete());
    }, _animate: function _animate() {
      this._animId = f(this._animate, this), this._step();
    }, _step: function _step(t) {
      var i = +new Date() - this._startTime,
          e = 1e3 * this._duration;i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete());
    }, _runFrame: function _runFrame(t, i) {
      var e = this._startPos.add(this._offset.multiplyBy(t));i && e._round(), Lt(this._el, e), this.fire("step");
    }, _complete: function _complete() {
      g(this._animId), this._inProgress = !1, this.fire("end");
    }, _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    } }),
      ye = ui.extend({ options: { crs: gi, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: !0, zoomAnimationThreshold: 4, fadeAnimation: !0, markerZoomAnimation: !0, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: !0 }, initialize: function initialize(t, i) {
      i = l(this, i), this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(C(i.center), i.zoom, { reset: !0 }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = _e && Oi && !Fi && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), V(this._proxy, de, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
    }, setView: function setView(t, e, n) {
      return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(C(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({ animate: n.animate }, n.zoom), n.pan = i({ animate: n.animate, duration: n.duration }, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this);
    }, setZoom: function setZoom(t, i) {
      return this._loaded ? this.setView(this.getCenter(), t, { zoom: i }) : (this._zoom = t, this);
    }, zoomIn: function zoomIn(t, i) {
      return t = t || (Oi ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i);
    }, zoomOut: function zoomOut(t, i) {
      return t = t || (Oi ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i);
    }, setZoomAround: function setZoomAround(t, i, e) {
      var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          s = (t instanceof x ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
          r = this.containerPointToLatLng(o.add(s));return this.setView(r, i, { zoom: e });
    }, _getBoundsCenterZoom: function _getBoundsCenterZoom(t, i) {
      i = i || {}, t = t.getBounds ? t.getBounds() : z(t);var e = w(i.paddingTopLeft || i.padding || [0, 0]),
          n = w(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return { center: t.getCenter(), zoom: o };var s = n.subtract(e).divideBy(2),
          r = this.project(t.getSouthWest(), o),
          a = this.project(t.getNorthEast(), o);return { center: this.unproject(r.add(a).divideBy(2).add(s), o), zoom: o };
    }, fitBounds: function fitBounds(t, i) {
      if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid.");var e = this._getBoundsCenterZoom(t, i);return this.setView(e.center, e.zoom, i);
    }, fitWorld: function fitWorld(t) {
      return this.fitBounds([[-90, -180], [90, 180]], t);
    }, panTo: function panTo(t, i) {
      return this.setView(t, this._zoom, { pan: i });
    }, panBy: function panBy(t, i) {
      if (t = w(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend");if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;if (this._panAnim || (this._panAnim = new ve(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
        pt(this._mapPane, "leaflet-pan-anim");var e = this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity);
      } else this._rawPanBy(t), this.fire("move").fire("moveend");return this;
    }, flyTo: function flyTo(t, i, e) {
      function n(t) {
        var i = (g * g - m * m + (t ? -1 : 1) * x * x * v * v) / (2 * (t ? g : m) * x * v),
            e = Math.sqrt(i * i + 1) - i;return e < 1e-9 ? -18 : Math.log(e);
      }function o(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2;
      }function s(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2;
      }function r(t) {
        return o(t) / s(t);
      }function a(t) {
        return m * (s(w) / s(w + y * t));
      }function h(t) {
        return m * (s(w) * r(w + y * t) - o(w)) / x;
      }function u(t) {
        return 1 - Math.pow(1 - t, 1.5);
      }function l() {
        var e = (Date.now() - L) / b,
            n = u(e) * P;e <= 1 ? (this._flyToFrame = f(l, this), this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p), this.getScaleZoom(m / a(n), p), { flyTo: !0 })) : this._move(t, i)._moveEnd(!0);
      }if (!1 === (e = e || {}).animate || !Oi) return this.setView(t, i, e);this._stop();var c = this.project(this.getCenter()),
          _ = this.project(t),
          d = this.getSize(),
          p = this._zoom;t = C(t), i = void 0 === i ? p : i;var m = Math.max(d.x, d.y),
          g = m * this.getZoomScale(p, i),
          v = _.distanceTo(c) || 1,
          y = 1.42,
          x = y * y,
          w = n(0),
          L = Date.now(),
          P = (n(1) - w) / y,
          b = e.duration ? 1e3 * e.duration : 1e3 * P * .8;return this._moveStart(!0), l.call(this), this;
    }, flyToBounds: function flyToBounds(t, i) {
      var e = this._getBoundsCenterZoom(t, i);return this.flyTo(e.center, e.zoom, i);
    }, setMaxBounds: function setMaxBounds(t) {
      return (t = z(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
    }, setMinZoom: function setMinZoom(t) {
      return this.options.minZoom = t, this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) : this;
    }, setMaxZoom: function setMaxZoom(t) {
      return this.options.maxZoom = t, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(t) : this;
    }, panInsideBounds: function panInsideBounds(t, i) {
      this._enforcingBounds = !0;var e = this.getCenter(),
          n = this._limitCenter(e, this._zoom, z(t));return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this;
    }, invalidateSize: function invalidateSize(t) {
      if (!this._loaded) return this;t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);var n = this.getSize();this._sizeChanged = !0, this._lastCenter = null;var o = this.getSize(),
          s = n.divideBy(2).round(),
          r = o.divideBy(2).round(),
          a = s.subtract(r);return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: n, newSize: o })) : this;
    }, stop: function stop() {
      return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
    }, locate: function locate(t) {
      if (t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t), !("geolocation" in navigator)) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;var n = e(this._handleGeolocationResponse, this),
          o = e(this._handleGeolocationError, this);return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this;
    }, stopLocate: function stopLocate() {
      return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
    }, _handleGeolocationError: function _handleGeolocationError(t) {
      var i = t.code,
          e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: i, message: "Geolocation error: " + e + "." });
    }, _handleGeolocationResponse: function _handleGeolocationResponse(t) {
      var i = new M(t.coords.latitude, t.coords.longitude),
          e = i.toBounds(t.coords.accuracy),
          n = this._locateOptions;if (n.setView) {
        var o = this.getBoundsZoom(e);this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o);
      }var s = { latlng: i, bounds: e, timestamp: t.timestamp };for (var r in t.coords) {
        "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
      }this.fire("locationfound", s);
    }, addHandler: function addHandler(t, i) {
      if (!i) return this;var e = this[t] = new i(this);return this._handlers.push(e), this.options[t] && e.enable(), this;
    }, remove: function remove() {
      if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");try {
        delete this._container._leaflet_id, delete this._containerId;
      } catch (t) {
        this._container._leaflet_id = void 0, this._containerId = void 0;
      }ut(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload");var t;for (t in this._layers) {
        this._layers[t].remove();
      }for (t in this._panes) {
        ut(this._panes[t]);
      }return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
    }, createPane: function createPane(t, i) {
      var e = ht("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);return t && (this._panes[t] = e), e;
    }, getCenter: function getCenter() {
      return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
    }, getZoom: function getZoom() {
      return this._zoom;
    }, getBounds: function getBounds() {
      var t = this.getPixelBounds();return new T(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
    }, getMinZoom: function getMinZoom() {
      return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
    }, getMaxZoom: function getMaxZoom() {
      return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
    }, getBoundsZoom: function getBoundsZoom(t, i, e) {
      t = z(t), e = w(e || [0, 0]);var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          h = this.getSize().subtract(e),
          u = b(this.project(a, n), this.project(r, n)).getSize(),
          l = Oi ? this.options.zoomSnap : 1,
          c = h.x / u.x,
          _ = h.y / u.y,
          d = i ? Math.max(c, _) : Math.min(c, _);return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n));
    }, getSize: function getSize() {
      return this._size && !this._sizeChanged || (this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
    }, getPixelBounds: function getPixelBounds(t, i) {
      var e = this._getTopLeftPoint(t, i);return new P(e, e.add(this.getSize()));
    }, getPixelOrigin: function getPixelOrigin() {
      return this._checkIfLoaded(), this._pixelOrigin;
    }, getPixelWorldBounds: function getPixelWorldBounds(t) {
      return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
    }, getPane: function getPane(t) {
      return "string" == typeof t ? this._panes[t] : t;
    }, getPanes: function getPanes() {
      return this._panes;
    }, getContainer: function getContainer() {
      return this._container;
    }, getZoomScale: function getZoomScale(t, i) {
      var e = this.options.crs;return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i);
    }, getScaleZoom: function getScaleZoom(t, i) {
      var e = this.options.crs;i = void 0 === i ? this._zoom : i;var n = e.zoom(t * e.scale(i));return isNaN(n) ? 1 / 0 : n;
    }, project: function project(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(C(t), i);
    }, unproject: function unproject(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(w(t), i);
    }, layerPointToLatLng: function layerPointToLatLng(t) {
      var i = w(t).add(this.getPixelOrigin());return this.unproject(i);
    }, latLngToLayerPoint: function latLngToLayerPoint(t) {
      return this.project(C(t))._round()._subtract(this.getPixelOrigin());
    }, wrapLatLng: function wrapLatLng(t) {
      return this.options.crs.wrapLatLng(C(t));
    }, wrapLatLngBounds: function wrapLatLngBounds(t) {
      return this.options.crs.wrapLatLngBounds(z(t));
    }, distance: function distance(t, i) {
      return this.options.crs.distance(C(t), C(i));
    }, containerPointToLayerPoint: function containerPointToLayerPoint(t) {
      return w(t).subtract(this._getMapPanePos());
    }, layerPointToContainerPoint: function layerPointToContainerPoint(t) {
      return w(t).add(this._getMapPanePos());
    }, containerPointToLatLng: function containerPointToLatLng(t) {
      var i = this.containerPointToLayerPoint(w(t));return this.layerPointToLatLng(i);
    }, latLngToContainerPoint: function latLngToContainerPoint(t) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)));
    }, mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
      return tt(t, this._container);
    }, mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
    }, mouseEventToLatLng: function mouseEventToLatLng(t) {
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
    }, _initContainer: function _initContainer(t) {
      var i = this._container = rt(t);if (!i) throw new Error("Map container not found.");if (i._leaflet_id) throw new Error("Map container is already initialized.");V(i, "scroll", this._onScroll, this), this._containerId = n(i);
    }, _initLayout: function _initLayout() {
      var t = this._container;this._fadeAnimated = this.options.fadeAnimation && Oi, pt(t, "leaflet-container" + (Hi ? " leaflet-touch" : "") + (Vi ? " leaflet-retina" : "") + (wi ? " leaflet-oldie" : "") + (Zi ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));var i = at(t, "position");"absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
    }, _initPanes: function _initPanes() {
      var t = this._panes = {};this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Lt(this._mapPane, new x(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (pt(t.markerPane, "leaflet-zoom-hide"), pt(t.shadowPane, "leaflet-zoom-hide"));
    }, _resetView: function _resetView(t, i) {
      Lt(this._mapPane, new x(0, 0));var e = !this._loaded;this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");var n = this._zoom !== i;this._moveStart(n)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load");
    }, _moveStart: function _moveStart(t) {
      return t && this.fire("zoomstart"), this.fire("movestart");
    }, _move: function _move(t, i, e) {
      void 0 === i && (i = this._zoom);var n = this._zoom !== i;return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e);
    }, _moveEnd: function _moveEnd(t) {
      return t && this.fire("zoomend"), this.fire("moveend");
    }, _stop: function _stop() {
      return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
    }, _rawPanBy: function _rawPanBy(t) {
      Lt(this._mapPane, this._getMapPanePos().subtract(t));
    }, _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    }, _panInsideMaxBounds: function _panInsideMaxBounds() {
      this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
    }, _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) throw new Error("Set map center and zoom first.");
    }, _initEvents: function _initEvents(t) {
      this._targets = {}, this._targets[n(this._container)] = this;var i = t ? G : V;i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), Oi && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
    }, _onResize: function _onResize() {
      g(this._resizeRequest), this._resizeRequest = f(function () {
        this.invalidateSize({ debounceMoveend: !0 });
      }, this);
    }, _onScroll: function _onScroll() {
      this._container.scrollTop = 0, this._container.scrollLeft = 0;
    }, _onMoveEnd: function _onMoveEnd() {
      var t = this._getMapPanePos();Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
    }, _findEventTargets: function _findEventTargets(t, i) {
      for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) {
        if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
          a = !0;break;
        }if (e && e.listens(i, !0)) {
          if (s && !ot(r, t)) break;if (o.push(e), s) break;
        }if (r === this._container) break;r = r.parentNode;
      }return o.length || a || s || !ot(r, t) || (o = [this]), o;
    }, _handleDOMEvent: function _handleDOMEvent(t) {
      if (this._loaded && !nt(t)) {
        var i = t.type;"mousedown" !== i && "keypress" !== i || zt(t.target || t.srcElement), this._fireDOMEvent(t, i);
      }
    }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function _fireDOMEvent(t, e, n) {
      if ("click" === t.type) {
        var o = i({}, t);o.type = "preclick", this._fireDOMEvent(o, o.type, n);
      }if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
        var s = n[0];"contextmenu" === e && s.listens(e, !0) && $(t);var r = { originalEvent: t };if ("keypress" !== t.type) {
          var a = s.options && "icon" in s.options;r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint);
        }for (var h = 0; h < n.length; h++) {
          if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return;
        }
      }
    }, _draggableMoved: function _draggableMoved(t) {
      return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    }, _clearHandlers: function _clearHandlers() {
      for (var t = 0, i = this._handlers.length; t < i; t++) {
        this._handlers[t].disable();
      }
    }, whenReady: function whenReady(t, i) {
      return this._loaded ? t.call(i || this, { target: this }) : this.on("load", t, i), this;
    }, _getMapPanePos: function _getMapPanePos() {
      return Pt(this._mapPane) || new x(0, 0);
    }, _moved: function _moved() {
      var t = this._getMapPanePos();return t && !t.equals([0, 0]);
    }, _getTopLeftPoint: function _getTopLeftPoint(t, i) {
      return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos());
    }, _getNewPixelOrigin: function _getNewPixelOrigin(t, i) {
      var e = this.getSize()._divideBy(2);return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round();
    }, _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, i, e) {
      var n = this._getNewPixelOrigin(e, i);return this.project(t, i)._subtract(n);
    }, _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, i, e) {
      var n = this._getNewPixelOrigin(e, i);return b([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)]);
    }, _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    }, _getCenterOffset: function _getCenterOffset(t) {
      return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
    }, _limitCenter: function _limitCenter(t, i, e) {
      if (!e) return t;var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          s = new P(n.subtract(o), n.add(o)),
          r = this._getBoundsOffset(s, e, i);return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
    }, _limitOffset: function _limitOffset(t, i) {
      if (!i) return t;var e = this.getPixelBounds(),
          n = new P(e.min.add(t), e.max.add(t));return t.add(this._getBoundsOffset(n, i));
    }, _getBoundsOffset: function _getBoundsOffset(t, i, e) {
      var n = b(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
          o = n.min.subtract(t.min),
          s = n.max.subtract(t.max);return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
    }, _rebound: function _rebound(t, i) {
      return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
    }, _limitZoom: function _limitZoom(t) {
      var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = Oi ? this.options.zoomSnap : 1;return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
    }, _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire("move");
    }, _onPanTransitionEnd: function _onPanTransitionEnd() {
      mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
    }, _tryAnimatedPan: function _tryAnimatedPan(t, i) {
      var e = this._getCenterOffset(t)._floor();return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0);
    }, _createAnimProxy: function _createAnimProxy() {
      var t = this._proxy = ht("div", "leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
        var i = ce,
            e = this._proxy.style[i];wt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
      }, this), this.on("load moveend", function () {
        var t = this.getCenter(),
            i = this.getZoom();wt(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
      }, this), this._on("unload", this._destroyAnimProxy, this);
    }, _destroyAnimProxy: function _destroyAnimProxy() {
      ut(this._proxy), delete this._proxy;
    }, _catchTransitionEnd: function _catchTransitionEnd(t) {
      this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
    }, _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
    }, _tryAnimatedZoom: function _tryAnimatedZoom(t, i, e) {
      if (this._animatingZoom) return !0;if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;var n = this.getZoomScale(i),
          o = this._getCenterOffset(t)._divideBy(1 - 1 / n);return !(!0 !== e.animate && !this.getSize().contains(o)) && (f(function () {
        this._moveStart(!0)._animateZoom(t, i, !0);
      }, this), !0);
    }, _animateZoom: function _animateZoom(t, i, n, o) {
      n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, pt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: t, zoom: i, noUpdate: o }), setTimeout(e(this._onZoomTransitionEnd, this), 250);
    }, _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      this._animatingZoom && (mt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function () {
        this._moveEnd(!0);
      }, this));
    } }),
      xe = v.extend({ options: { position: "topright" }, initialize: function initialize(t) {
      l(this, t);
    }, getPosition: function getPosition() {
      return this.options.position;
    }, setPosition: function setPosition(t) {
      var i = this._map;return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this;
    }, getContainer: function getContainer() {
      return this._container;
    }, addTo: function addTo(t) {
      this.remove(), this._map = t;var i = this._container = this.onAdd(t),
          e = this.getPosition(),
          n = t._controlCorners[e];return pt(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this;
    }, remove: function remove() {
      return this._map ? (ut(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this;
    }, _refocusOnMap: function _refocusOnMap(t) {
      this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
    } }),
      we = function we(t) {
    return new xe(t);
  };ye.include({ addControl: function addControl(t) {
      return t.addTo(this), this;
    }, removeControl: function removeControl(t) {
      return t.remove(), this;
    }, _initControlPos: function _initControlPos() {
      function t(t, o) {
        var s = e + t + " " + e + o;i[t + o] = ht("div", s, n);
      }var i = this._controlCorners = {},
          e = "leaflet-",
          n = this._controlContainer = ht("div", e + "control-container", this._container);t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
    }, _clearControlPos: function _clearControlPos() {
      for (var t in this._controlCorners) {
        ut(this._controlCorners[t]);
      }ut(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
    } });var Le = xe.extend({ options: { collapsed: !0, position: "topright", autoZIndex: !0, hideSingleBase: !1, sortLayers: !1, sortFunction: function sortFunction(t, i, e, n) {
        return e < n ? -1 : n < e ? 1 : 0;
      } }, initialize: function initialize(t, i, e) {
      l(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;for (var n in t) {
        this._addLayer(t[n], n);
      }for (n in i) {
        this._addLayer(i[n], n, !0);
      }
    }, onAdd: function onAdd(t) {
      this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.on("add remove", this._onLayerChange, this);
      }return this._container;
    }, addTo: function addTo(t) {
      return xe.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
    }, onRemove: function onRemove() {
      this._map.off("zoomend", this._checkDisabledLayers, this);for (var t = 0; t < this._layers.length; t++) {
        this._layers[t].layer.off("add remove", this._onLayerChange, this);
      }
    }, addBaseLayer: function addBaseLayer(t, i) {
      return this._addLayer(t, i), this._map ? this._update() : this;
    }, addOverlay: function addOverlay(t, i) {
      return this._addLayer(t, i, !0), this._map ? this._update() : this;
    }, removeLayer: function removeLayer(t) {
      t.off("add remove", this._onLayerChange, this);var i = this._getLayer(n(t));return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this;
    }, expand: function expand() {
      pt(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;var t = this._map.getSize().y - (this._container.offsetTop + 50);return t < this._form.clientHeight ? (pt(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : mt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
    }, collapse: function collapse() {
      return mt(this._container, "leaflet-control-layers-expanded"), this;
    }, _initLayout: function _initLayout() {
      var t = "leaflet-control-layers",
          i = this._container = ht("div", t),
          e = this.options.collapsed;i.setAttribute("aria-haspopup", !0), J(i), X(i);var n = this._form = ht("form", t + "-list");e && (this._map.on("click", this.collapse, this), bi || V(i, { mouseenter: this.expand, mouseleave: this.collapse }, this));var o = this._layersLink = ht("a", t + "-toggle", i);o.href = "#", o.title = "Layers", Hi ? (V(o, "click", Q), V(o, "click", this.expand, this)) : V(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = ht("div", t + "-base", n), this._separator = ht("div", t + "-separator", n), this._overlaysList = ht("div", t + "-overlays", n), i.appendChild(n);
    }, _getLayer: function _getLayer(t) {
      for (var i = 0; i < this._layers.length; i++) {
        if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i];
      }
    }, _addLayer: function _addLayer(t, i, n) {
      this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({ layer: t, name: i, overlay: n }), this.options.sortLayers && this._layers.sort(e(function (t, i) {
        return this.options.sortFunction(t.layer, i.layer, t.name, i.name);
      }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
    }, _update: function _update() {
      if (!this._container) return this;lt(this._baseLayersList), lt(this._overlaysList), this._layerControlInputs = [];var t,
          i,
          e,
          n,
          o = 0;for (e = 0; e < this._layers.length; e++) {
        n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
      }return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this;
    }, _onLayerChange: function _onLayerChange(t) {
      this._handlingClick || this._update();var i = this._getLayer(n(t.target)),
          e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;e && this._map.fire(e, i);
    }, _createRadioElement: function _createRadioElement(t, i) {
      var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
          n = document.createElement("div");return n.innerHTML = e, n.firstChild;
    }, _addItem: function _addItem(t) {
      var i,
          e = document.createElement("label"),
          o = this._map.hasLayer(t.layer);t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(i), i.layerId = n(t.layer), V(i, "click", this._onInputClick, this);var s = document.createElement("span");s.innerHTML = " " + t.name;var r = document.createElement("div");return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e;
    }, _onInputClick: function _onInputClick() {
      var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];this._handlingClick = !0;for (var s = e.length - 1; s >= 0; s--) {
        t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
      }for (s = 0; s < o.length; s++) {
        this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
      }for (s = 0; s < n.length; s++) {
        this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
      }this._handlingClick = !1, this._refocusOnMap();
    }, _checkDisabledLayers: function _checkDisabledLayers() {
      for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) {
        t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom;
      }
    }, _expandIfNotCollapsed: function _expandIfNotCollapsed() {
      return this._map && !this.options.collapsed && this.expand(), this;
    }, _expand: function _expand() {
      return this.expand();
    }, _collapse: function _collapse() {
      return this.collapse();
    } }),
      Pe = xe.extend({ options: { position: "topleft", zoomInText: "+", zoomInTitle: "Zoom in", zoomOutText: "&#x2212;", zoomOutTitle: "Zoom out" }, onAdd: function onAdd(t) {
      var i = "leaflet-control-zoom",
          e = ht("div", i + " leaflet-bar"),
          n = this.options;return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e;
    }, onRemove: function onRemove(t) {
      t.off("zoomend zoomlevelschange", this._updateDisabled, this);
    }, disable: function disable() {
      return this._disabled = !0, this._updateDisabled(), this;
    }, enable: function enable() {
      return this._disabled = !1, this._updateDisabled(), this;
    }, _zoomIn: function _zoomIn(t) {
      !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    }, _zoomOut: function _zoomOut(t) {
      !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    }, _createButton: function _createButton(t, i, e, n, o) {
      var s = ht("a", e, n);return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), J(s), V(s, "click", Q), V(s, "click", o, this), V(s, "click", this._refocusOnMap, this), s;
    }, _updateDisabled: function _updateDisabled() {
      var t = this._map,
          i = "leaflet-disabled";mt(this._zoomInButton, i), mt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && pt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && pt(this._zoomInButton, i);
    } });ye.mergeOptions({ zoomControl: !0 }), ye.addInitHook(function () {
    this.options.zoomControl && (this.zoomControl = new Pe(), this.addControl(this.zoomControl));
  });var be = xe.extend({ options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 }, onAdd: function onAdd(t) {
      var i = ht("div", "leaflet-control-scale"),
          e = this.options;return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
    }, onRemove: function onRemove(t) {
      t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
    }, _addScales: function _addScales(t, i, e) {
      t.metric && (this._mScale = ht("div", i, e)), t.imperial && (this._iScale = ht("div", i, e));
    }, _update: function _update() {
      var t = this._map,
          i = t.getSize().y / 2,
          e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));this._updateScales(e);
    }, _updateScales: function _updateScales(t) {
      this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
    }, _updateMetric: function _updateMetric(t) {
      var i = this._getRoundNum(t),
          e = i < 1e3 ? i + " m" : i / 1e3 + " km";this._updateScale(this._mScale, e, i / t);
    }, _updateImperial: function _updateImperial(t) {
      var i,
          e,
          n,
          o = 3.2808399 * t;o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o));
    }, _updateScale: function _updateScale(t, i, e) {
      t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i;
    }, _getRoundNum: function _getRoundNum(t) {
      var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          e = t / i;return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e;
    } }),
      Te = xe.extend({ options: { position: "bottomright", prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>' }, initialize: function initialize(t) {
      l(this, t), this._attributions = {};
    }, onAdd: function onAdd(t) {
      t.attributionControl = this, this._container = ht("div", "leaflet-control-attribution"), J(this._container);for (var i in t._layers) {
        t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
      }return this._update(), this._container;
    }, setPrefix: function setPrefix(t) {
      return this.options.prefix = t, this._update(), this;
    }, addAttribution: function addAttribution(t) {
      return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
    }, removeAttribution: function removeAttribution(t) {
      return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
    }, _update: function _update() {
      if (this._map) {
        var t = [];for (var i in this._attributions) {
          this._attributions[i] && t.push(i);
        }var e = [];this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ");
      }
    } });ye.mergeOptions({ attributionControl: !0 }), ye.addInitHook(function () {
    this.options.attributionControl && new Te().addTo(this);
  });xe.Layers = Le, xe.Zoom = Pe, xe.Scale = be, xe.Attribution = Te, we.layers = function (t, i, e) {
    return new Le(t, i, e);
  }, we.zoom = function (t) {
    return new Pe(t);
  }, we.scale = function (t) {
    return new be(t);
  }, we.attribution = function (t) {
    return new Te(t);
  };var ze,
      Me = v.extend({ initialize: function initialize(t) {
      this._map = t;
    }, enable: function enable() {
      return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
    }, disable: function disable() {
      return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
    }, enabled: function enabled() {
      return !!this._enabled;
    } }),
      Ce = { Events: hi },
      Ze = Hi ? "touchstart mousedown" : "mousedown",
      Ee = { mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend" },
      Se = { mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove" },
      ke = ui.extend({ options: { clickTolerance: 3 }, initialize: function initialize(t, i, e, n) {
      l(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e;
    }, enable: function enable() {
      this._enabled || (V(this._dragStartTarget, Ze, this._onDown, this), this._enabled = !0);
    }, disable: function disable() {
      this._enabled && (ke._dragging === this && this.finishDrag(), G(this._dragStartTarget, Ze, this._onDown, this), this._enabled = !1, this._moved = !1);
    }, _onDown: function _onDown(t) {
      if (!t._simulated && this._enabled && (this._moved = !1, !dt(this._element, "leaflet-zoom-anim") && !(ke._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (ke._dragging = this, this._preventOutline && zt(this._element), bt(), pi(), this._moving)))) {
        this.fire("down");var i = t.touches ? t.touches[0] : t;this._startPoint = new x(i.clientX, i.clientY), V(document, Se[t.type], this._onMove, this), V(document, Ee[t.type], this._onUp, this);
      }
    }, _onMove: function _onMove(t) {
      if (!t._simulated && this._enabled) if (t.touches && t.touches.length > 1) this._moved = !0;else {
        var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
            e = new x(i.clientX, i.clientY).subtract(this._startPoint);(e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || ($(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = Pt(this._element).subtract(e), pt(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), pt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0)));
      }
    }, _updatePosition: function _updatePosition() {
      var t = { originalEvent: this._lastEvent };this.fire("predrag", t), Lt(this._element, this._newPos), this.fire("drag", t);
    }, _onUp: function _onUp(t) {
      !t._simulated && this._enabled && this.finishDrag();
    }, finishDrag: function finishDrag() {
      mt(document.body, "leaflet-dragging"), this._lastTarget && (mt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);for (var t in Se) {
        G(document, Se[t], this._onMove, this), G(document, Ee[t], this._onUp, this);
      }Tt(), mi(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", { distance: this._newPos.distanceTo(this._startPos) })), this._moving = !1, ke._dragging = !1;
    } }),
      Be = (Object.freeze || Object)({ simplify: Ct, pointToSegmentDistance: Zt, closestPointOnSegment: function closestPointOnSegment(t, i, e) {
      return Rt(t, i, e);
    }, clipSegment: Bt, _getEdgeIntersection: It, _getBitCode: At, _sqClosestPointOnSegment: Rt, isFlat: Dt, _flat: Nt }),
      Ie = (Object.freeze || Object)({ clipPolygon: jt }),
      Ae = { project: function project(t) {
      return new x(t.lng, t.lat);
    }, unproject: function unproject(t) {
      return new M(t.y, t.x);
    }, bounds: new P([-180, -90], [180, 90]) },
      Oe = { R: 6378137, R_MINOR: 6356752.314245179, bounds: new P([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]), project: function project(t) {
      var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          r = s * Math.sin(n),
          a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);return n = -e * Math.log(Math.max(a, 1e-10)), new x(t.lng * i * e, n);
    }, unproject: function unproject(t) {
      for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) {
        i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
      }return new M(a * e, t.x * e / n);
    } },
      Re = (Object.freeze || Object)({ LonLat: Ae, Mercator: Oe, SphericalMercator: _i }),
      De = i({}, ci, { code: "EPSG:3395", projection: Oe, transformation: function () {
      var t = .5 / (Math.PI * Oe.R);return E(t, .5, -t, .5);
    }() }),
      Ne = i({}, ci, { code: "EPSG:4326", projection: Ae, transformation: E(1 / 180, 1, -1 / 180, .5) }),
      je = i({}, li, { projection: Ae, transformation: E(1, 0, -1, 0), scale: function scale(t) {
      return Math.pow(2, t);
    }, zoom: function zoom(t) {
      return Math.log(t) / Math.LN2;
    }, distance: function distance(t, i) {
      var e = i.lng - t.lng,
          n = i.lat - t.lat;return Math.sqrt(e * e + n * n);
    }, infinite: !0 });li.Earth = ci, li.EPSG3395 = De, li.EPSG3857 = gi, li.EPSG900913 = vi, li.EPSG4326 = Ne, li.Simple = je;var We = ui.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 }, addTo: function addTo(t) {
      return t.addLayer(this), this;
    }, remove: function remove() {
      return this.removeFrom(this._map || this._mapToAdd);
    }, removeFrom: function removeFrom(t) {
      return t && t.removeLayer(this), this;
    }, getPane: function getPane(t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    }, addInteractiveTarget: function addInteractiveTarget(t) {
      return this._map._targets[n(t)] = this, this;
    }, removeInteractiveTarget: function removeInteractiveTarget(t) {
      return delete this._map._targets[n(t)], this;
    }, getAttribution: function getAttribution() {
      return this.options.attribution;
    }, _layerAdd: function _layerAdd(t) {
      var i = t.target;if (i.hasLayer(this)) {
        if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
          var e = this.getEvents();i.on(e, this), this.once("remove", function () {
            i.off(e, this);
          }, this);
        }this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", { layer: this });
      }
    } });ye.include({ addLayer: function addLayer(t) {
      if (!t._layerAdd) throw new Error("The provided object is not a Layer.");var i = n(t);return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
    }, removeLayer: function removeLayer(t) {
      var i = n(t);return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
    }, hasLayer: function hasLayer(t) {
      return !!t && n(t) in this._layers;
    }, eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }return this;
    }, _addLayers: function _addLayers(t) {
      for (var i = 0, e = (t = t ? ei(t) ? t : [t] : []).length; i < e; i++) {
        this.addLayer(t[i]);
      }
    }, _addZoomLimit: function _addZoomLimit(t) {
      !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels());
    }, _removeZoomLimit: function _removeZoomLimit(t) {
      var i = n(t);this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels());
    }, _updateZoomLevels: function _updateZoomLevels() {
      var t = 1 / 0,
          i = -1 / 0,
          e = this._getZoomSpan();for (var n in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[n].options;t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
      }this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
    } });var He = We.extend({ initialize: function initialize(t) {
      this._layers = {};var i, e;if (t) for (i = 0, e = t.length; i < e; i++) {
        this.addLayer(t[i]);
      }
    }, addLayer: function addLayer(t) {
      var i = this.getLayerId(t);return this._layers[i] = t, this._map && this._map.addLayer(t), this;
    }, removeLayer: function removeLayer(t) {
      var i = t in this._layers ? t : this.getLayerId(t);return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this;
    }, hasLayer: function hasLayer(t) {
      return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
    }, clearLayers: function clearLayers() {
      for (var t in this._layers) {
        this.removeLayer(this._layers[t]);
      }return this;
    }, invoke: function invoke(t) {
      var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);for (i in this._layers) {
        (e = this._layers[i])[t] && e[t].apply(e, n);
      }return this;
    }, onAdd: function onAdd(t) {
      for (var i in this._layers) {
        t.addLayer(this._layers[i]);
      }
    }, onRemove: function onRemove(t) {
      for (var i in this._layers) {
        t.removeLayer(this._layers[i]);
      }
    }, eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }return this;
    }, getLayer: function getLayer(t) {
      return this._layers[t];
    }, getLayers: function getLayers() {
      var t = [];for (var i in this._layers) {
        t.push(this._layers[i]);
      }return t;
    }, setZIndex: function setZIndex(t) {
      return this.invoke("setZIndex", t);
    }, getLayerId: function getLayerId(t) {
      return n(t);
    } }),
      Fe = He.extend({ addLayer: function addLayer(t) {
      return this.hasLayer(t) ? this : (t.addEventParent(this), He.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
    }, removeLayer: function removeLayer(t) {
      return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), He.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
    }, setStyle: function setStyle(t) {
      return this.invoke("setStyle", t);
    }, bringToFront: function bringToFront() {
      return this.invoke("bringToFront");
    }, bringToBack: function bringToBack() {
      return this.invoke("bringToBack");
    }, getBounds: function getBounds() {
      var t = new T();for (var i in this._layers) {
        var e = this._layers[i];t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
      }return t;
    } }),
      Ue = v.extend({ initialize: function initialize(t) {
      l(this, t);
    }, createIcon: function createIcon(t) {
      return this._createIcon("icon", t);
    }, createShadow: function createShadow(t) {
      return this._createIcon("shadow", t);
    }, _createIcon: function _createIcon(t, i) {
      var e = this._getIconUrl(t);if (!e) {
        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");return null;
      }var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);return this._setIconStyles(n, t), n;
    }, _setIconStyles: function _setIconStyles(t, i) {
      var e = this.options,
          n = e[i + "Size"];"number" == typeof n && (n = [n, n]);var o = w(n),
          s = w("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
    }, _createImg: function _createImg(t, i) {
      return i = i || document.createElement("img"), i.src = t, i;
    }, _getIconUrl: function _getIconUrl(t) {
      return Vi && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
    } }),
      Ve = Ue.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function _getIconUrl(t) {
      return Ve.imagePath || (Ve.imagePath = this._detectIconPath()), (this.options.imagePath || Ve.imagePath) + Ue.prototype._getIconUrl.call(this, t);
    }, _detectIconPath: function _detectIconPath() {
      var t = ht("div", "leaflet-default-icon-path", document.body),
          i = at(t, "background-image") || at(t, "backgroundImage");return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\([\"\']?/, "").replace(/marker-icon\.png[\"\']?\)$/, "");
    } }),
      Ge = Me.extend({ initialize: function initialize(t) {
      this._marker = t;
    }, addHooks: function addHooks() {
      var t = this._marker._icon;this._draggable || (this._draggable = new ke(t, t, !0)), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), pt(t, "leaflet-marker-draggable");
    }, removeHooks: function removeHooks() {
      this._draggable.off({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && mt(this._marker._icon, "leaflet-marker-draggable");
    }, moved: function moved() {
      return this._draggable && this._draggable._moved;
    }, _onDragStart: function _onDragStart() {
      this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart");
    }, _onDrag: function _onDrag(t) {
      var i = this._marker,
          e = i._shadow,
          n = Pt(i._icon),
          o = i._map.layerPointToLatLng(n);e && Lt(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t);
    }, _onDragEnd: function _onDragEnd(t) {
      delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
    } }),
      qe = We.extend({ options: { icon: new Ve(), interactive: !0, draggable: !1, keyboard: !0, title: "", alt: "", zIndexOffset: 0, opacity: 1, riseOnHover: !1, riseOffset: 250, pane: "markerPane", bubblingMouseEvents: !1 }, initialize: function initialize(t, i) {
      l(this, i), this._latlng = C(t);
    }, onAdd: function onAdd(t) {
      this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
    }, onRemove: function onRemove(t) {
      this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
    }, getEvents: function getEvents() {
      return { zoom: this.update, viewreset: this.update };
    }, getLatLng: function getLatLng() {
      return this._latlng;
    }, setLatLng: function setLatLng(t) {
      var i = this._latlng;return this._latlng = C(t), this.update(), this.fire("move", { oldLatLng: i, latlng: this._latlng });
    }, setZIndexOffset: function setZIndexOffset(t) {
      return this.options.zIndexOffset = t, this.update();
    }, setIcon: function setIcon(t) {
      return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
    }, getElement: function getElement() {
      return this._icon;
    }, update: function update() {
      if (this._icon) {
        var t = this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t);
      }return this;
    }, _initIcon: function _initIcon() {
      var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1;e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), t.alt && (e.alt = t.alt)), pt(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex });var o = t.icon.createShadow(this._shadow),
          s = !1;o !== this._shadow && (this._removeShadow(), s = !0), o && (pt(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow);
    }, _removeIcon: function _removeIcon() {
      this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), ut(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
    }, _removeShadow: function _removeShadow() {
      this._shadow && ut(this._shadow), this._shadow = null;
    }, _setPos: function _setPos(t) {
      Lt(this._icon, t), this._shadow && Lt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
    }, _updateZIndex: function _updateZIndex(t) {
      this._icon.style.zIndex = this._zIndex + t;
    }, _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();this._setPos(i);
    }, _initInteraction: function _initInteraction() {
      if (this.options.interactive && (pt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ge)) {
        var t = this.options.draggable;this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ge(this), t && this.dragging.enable();
      }
    }, setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._map && this._updateOpacity(), this;
    }, _updateOpacity: function _updateOpacity() {
      var t = this.options.opacity;vt(this._icon, t), this._shadow && vt(this._shadow, t);
    }, _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    }, _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    }, _getPopupAnchor: function _getPopupAnchor() {
      return this.options.icon.options.popupAnchor || [0, 0];
    }, _getTooltipAnchor: function _getTooltipAnchor() {
      return this.options.icon.options.tooltipAnchor || [0, 0];
    } }),
      Ke = We.extend({ options: { stroke: !0, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: !1, fillColor: null, fillOpacity: .2, fillRule: "evenodd", interactive: !0, bubblingMouseEvents: !0 }, beforeAdd: function beforeAdd(t) {
      this._renderer = t.getRenderer(this);
    }, onAdd: function onAdd() {
      this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
    }, onRemove: function onRemove() {
      this._renderer._removePath(this);
    }, redraw: function redraw() {
      return this._map && this._renderer._updatePath(this), this;
    }, setStyle: function setStyle(t) {
      return l(this, t), this._renderer && this._renderer._updateStyle(this), this;
    }, bringToFront: function bringToFront() {
      return this._renderer && this._renderer._bringToFront(this), this;
    }, bringToBack: function bringToBack() {
      return this._renderer && this._renderer._bringToBack(this), this;
    }, getElement: function getElement() {
      return this._path;
    }, _reset: function _reset() {
      this._project(), this._update();
    }, _clickTolerance: function _clickTolerance() {
      return (this.options.stroke ? this.options.weight / 2 : 0) + (Hi ? 10 : 0);
    } }),
      Ye = Ke.extend({ options: { fill: !0, radius: 10 }, initialize: function initialize(t, i) {
      l(this, i), this._latlng = C(t), this._radius = this.options.radius;
    }, setLatLng: function setLatLng(t) {
      return this._latlng = C(t), this.redraw(), this.fire("move", { latlng: this._latlng });
    }, getLatLng: function getLatLng() {
      return this._latlng;
    }, setRadius: function setRadius(t) {
      return this.options.radius = this._radius = t, this.redraw();
    }, getRadius: function getRadius() {
      return this._radius;
    }, setStyle: function setStyle(t) {
      var i = t && t.radius || this._radius;return Ke.prototype.setStyle.call(this, t), this.setRadius(i), this;
    }, _project: function _project() {
      this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
    }, _updateBounds: function _updateBounds() {
      var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          n = [t + e, i + e];this._pxBounds = new P(this._point.subtract(n), this._point.add(n));
    }, _update: function _update() {
      this._map && this._updatePath();
    }, _updatePath: function _updatePath() {
      this._renderer._updateCircle(this);
    }, _empty: function _empty() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    }, _containsPoint: function _containsPoint(t) {
      return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
    } }),
      Xe = Ye.extend({ initialize: function initialize(t, e, n) {
      if ("number" == typeof e && (e = i({}, n, { radius: e })), l(this, e), this._latlng = C(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");this._mRadius = this.options.radius;
    }, setRadius: function setRadius(t) {
      return this._mRadius = t, this.redraw();
    }, getRadius: function getRadius() {
      return this._mRadius;
    }, getBounds: function getBounds() {
      var t = [this._radius, this._radiusY || this._radius];return new T(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
    }, setStyle: Ke.prototype.setStyle, _project: function _project() {
      var t = this._latlng.lng,
          i = this._latlng.lat,
          e = this._map,
          n = e.options.crs;if (n.distance === ci.distance) {
        var o = Math.PI / 180,
            s = this._mRadius / ci.R / o,
            r = e.project([i + s, t]),
            a = e.project([i - s, t]),
            h = r.add(a).divideBy(2),
            u = e.unproject(h).lat,
            l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;(isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : Math.max(Math.round(h.x - e.project([u, t - l]).x), 1), this._radiusY = Math.max(Math.round(h.y - r.y), 1);
      } else {
        var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x;
      }this._updateBounds();
    } }),
      Je = Ke.extend({ options: { smoothFactor: 1, noClip: !1 }, initialize: function initialize(t, i) {
      l(this, i), this._setLatLngs(t);
    }, getLatLngs: function getLatLngs() {
      return this._latlngs;
    }, setLatLngs: function setLatLngs(t) {
      return this._setLatLngs(t), this.redraw();
    }, isEmpty: function isEmpty() {
      return !this._latlngs.length;
    }, closestLayerPoint: function closestLayerPoint(t) {
      for (var i, e, n = 1 / 0, o = null, s = Rt, r = 0, a = this._parts.length; r < a; r++) {
        for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
          var c = s(t, i = h[u - 1], e = h[u], !0);c < n && (n = c, o = s(t, i, e));
        }
      }return o && (o.distance = Math.sqrt(n)), o;
    }, getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a = this._rings[0],
          h = a.length;if (!h) return null;for (t = 0, i = 0; t < h - 1; t++) {
        i += a[t].distanceTo(a[t + 1]) / 2;
      }if (0 === i) return this._map.layerPointToLatLng(a[0]);for (t = 0, n = 0; t < h - 1; t++) {
        if (o = a[t], s = a[t + 1], e = o.distanceTo(s), (n += e) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]);
      }
    }, getBounds: function getBounds() {
      return this._bounds;
    }, addLatLng: function addLatLng(t, i) {
      return i = i || this._defaultShape(), t = C(t), i.push(t), this._bounds.extend(t), this.redraw();
    }, _setLatLngs: function _setLatLngs(t) {
      this._bounds = new T(), this._latlngs = this._convertLatLngs(t);
    }, _defaultShape: function _defaultShape() {
      return Dt(this._latlngs) ? this._latlngs : this._latlngs[0];
    }, _convertLatLngs: function _convertLatLngs(t) {
      for (var i = [], e = Dt(t), n = 0, o = t.length; n < o; n++) {
        e ? (i[n] = C(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
      }return i;
    }, _project: function _project() {
      var t = new P();this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);var i = this._clickTolerance(),
          e = new x(i, i);this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t);
    }, _projectLatlngs: function _projectLatlngs(t, i, e) {
      var n,
          o,
          s = t[0] instanceof M,
          r = t.length;if (s) {
        for (o = [], n = 0; n < r; n++) {
          o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
        }i.push(o);
      } else for (n = 0; n < r; n++) {
        this._projectLatlngs(t[n], i, e);
      }
    }, _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds;if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else {
        var i,
            e,
            n,
            o,
            s,
            r,
            a,
            h = this._parts;for (i = 0, n = 0, o = this._rings.length; i < o; i++) {
          for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++) {
            (r = Bt(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++));
          }
        }
      }
    }, _simplifyPoints: function _simplifyPoints() {
      for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) {
        t[e] = Ct(t[e], i);
      }
    }, _update: function _update() {
      this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    }, _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    }, _containsPoint: function _containsPoint(t, i) {
      var e,
          n,
          o,
          s,
          r,
          a,
          h = this._clickTolerance();if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;for (e = 0, s = this._parts.length; e < s; e++) {
        for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++) {
          if ((i || 0 !== n) && Zt(t, a[o], a[n]) <= h) return !0;
        }
      }return !1;
    } });Je._flat = Nt;var $e = Je.extend({ options: { fill: !0 }, isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    }, getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = this._rings[0],
          l = u.length;if (!l) return null;for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) {
        e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
      }return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h);
    }, _convertLatLngs: function _convertLatLngs(t) {
      var i = Je.prototype._convertLatLngs.call(this, t),
          e = i.length;return e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i;
    }, _setLatLngs: function _setLatLngs(t) {
      Je.prototype._setLatLngs.call(this, t), Dt(this._latlngs) && (this._latlngs = [this._latlngs]);
    }, _defaultShape: function _defaultShape() {
      return Dt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    }, _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds,
          i = this.options.weight,
          e = new x(i, i);if (t = new P(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var n, o = 0, s = this._rings.length; o < s; o++) {
        (n = jt(this._rings[o], t, !0)).length && this._parts.push(n);
      }
    }, _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, !0);
    }, _containsPoint: function _containsPoint(t) {
      var i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = !1;if (!this._pxBounds.contains(t)) return !1;for (o = 0, a = this._parts.length; o < a; o++) {
        for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) {
          e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
        }
      }return u || Je.prototype._containsPoint.call(this, t, !0);
    } }),
      Qe = Fe.extend({ initialize: function initialize(t, i) {
      l(this, i), this._layers = {}, t && this.addData(t);
    }, addData: function addData(t) {
      var i,
          e,
          n,
          o = ei(t) ? t : t.features;if (o) {
        for (i = 0, e = o.length; i < e; i++) {
          ((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        }return this;
      }var s = this.options;if (s.filter && !s.filter(t)) return this;var r = Wt(t, s);return r ? (r.feature = qt(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
    }, resetStyle: function resetStyle(t) {
      return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this;
    }, setStyle: function setStyle(t) {
      return this.eachLayer(function (i) {
        this._setLayerStyle(i, t);
      }, this);
    }, _setLayerStyle: function _setLayerStyle(t, i) {
      "function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i);
    } }),
      tn = { toGeoJSON: function toGeoJSON(t) {
      return Gt(this, { type: "Point", coordinates: Ut(this.getLatLng(), t) });
    } };qe.include(tn), Xe.include(tn), Ye.include(tn), Je.include({ toGeoJSON: function toGeoJSON(t) {
      var i = !Dt(this._latlngs),
          e = Vt(this._latlngs, i ? 1 : 0, !1, t);return Gt(this, { type: (i ? "Multi" : "") + "LineString", coordinates: e });
    } }), $e.include({ toGeoJSON: function toGeoJSON(t) {
      var i = !Dt(this._latlngs),
          e = i && !Dt(this._latlngs[0]),
          n = Vt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);return i || (n = [n]), Gt(this, { type: (e ? "Multi" : "") + "Polygon", coordinates: n });
    } }), He.include({ toMultiPoint: function toMultiPoint(t) {
      var i = [];return this.eachLayer(function (e) {
        i.push(e.toGeoJSON(t).geometry.coordinates);
      }), Gt(this, { type: "MultiPoint", coordinates: i });
    }, toGeoJSON: function toGeoJSON(t) {
      var i = this.feature && this.feature.geometry && this.feature.geometry.type;if ("MultiPoint" === i) return this.toMultiPoint(t);var e = "GeometryCollection" === i,
          n = [];return this.eachLayer(function (i) {
        if (i.toGeoJSON) {
          var o = i.toGeoJSON(t);if (e) n.push(o.geometry);else {
            var s = qt(o);"FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s);
          }
        }
      }), e ? Gt(this, { geometries: n, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n };
    } });var en = Kt,
      nn = We.extend({ options: { opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function initialize(t, i, e) {
      this._url = t, this._bounds = z(i), l(this, e);
    }, onAdd: function onAdd() {
      this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (pt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
    }, onRemove: function onRemove() {
      ut(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
    }, setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._image && this._updateOpacity(), this;
    }, setStyle: function setStyle(t) {
      return t.opacity && this.setOpacity(t.opacity), this;
    }, bringToFront: function bringToFront() {
      return this._map && ct(this._image), this;
    }, bringToBack: function bringToBack() {
      return this._map && _t(this._image), this;
    }, setUrl: function setUrl(t) {
      return this._url = t, this._image && (this._image.src = t), this;
    }, setBounds: function setBounds(t) {
      return this._bounds = z(t), this._map && this._reset(), this;
    }, getEvents: function getEvents() {
      var t = { zoom: this._reset, viewreset: this._reset };return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    }, setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    }, getBounds: function getBounds() {
      return this._bounds;
    }, getElement: function getElement() {
      return this._image;
    }, _initImage: function _initImage() {
      var t = this._image = ht("img", "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : "") + (this.options.className || ""));t.onselectstart = r, t.onmousemove = r, t.onload = e(this.fire, this, "load"), t.onerror = e(this._overlayOnError, this, "error"), this.options.crossOrigin && (t.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t.src = this._url, t.alt = this.options.alt;
    }, _animateZoom: function _animateZoom(t) {
      var i = this._map.getZoomScale(t.zoom),
          e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;wt(this._image, e, i);
    }, _reset: function _reset() {
      var t = this._image,
          i = new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          e = i.getSize();Lt(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px";
    }, _updateOpacity: function _updateOpacity() {
      vt(this._image, this.options.opacity);
    }, _updateZIndex: function _updateZIndex() {
      this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
    }, _overlayOnError: function _overlayOnError() {
      this.fire("error");var t = this.options.errorOverlayUrl;t && this._url !== t && (this._url = t, this._image.src = t);
    } }),
      on = nn.extend({ options: { autoplay: !0, loop: !0 }, _initImage: function _initImage() {
      var t = "VIDEO" === this._url.tagName,
          i = this._image = t ? this._url : ht("video");if (i.class = i.class || "", i.class += "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : ""), i.onselectstart = r, i.onmousemove = r, i.onloadeddata = e(this.fire, this, "load"), !t) {
        ei(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;for (var n = 0; n < this._url.length; n++) {
          var o = ht("source");o.src = this._url[n], i.appendChild(o);
        }
      }
    } }),
      sn = We.extend({ options: { offset: [0, 7], className: "", pane: "popupPane" }, initialize: function initialize(t, i) {
      l(this, t), this._source = i;
    }, onAdd: function onAdd(t) {
      this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && vt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && vt(this._container, 1), this.bringToFront();
    }, onRemove: function onRemove(t) {
      t._fadeAnimated ? (vt(this._container, 0), this._removeTimeout = setTimeout(e(ut, void 0, this._container), 200)) : ut(this._container);
    }, getLatLng: function getLatLng() {
      return this._latlng;
    }, setLatLng: function setLatLng(t) {
      return this._latlng = C(t), this._map && (this._updatePosition(), this._adjustPan()), this;
    }, getContent: function getContent() {
      return this._content;
    }, setContent: function setContent(t) {
      return this._content = t, this.update(), this;
    }, getElement: function getElement() {
      return this._container;
    }, update: function update() {
      this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
    }, getEvents: function getEvents() {
      var t = { zoom: this._updatePosition, viewreset: this._updatePosition };return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    }, isOpen: function isOpen() {
      return !!this._map && this._map.hasLayer(this);
    }, bringToFront: function bringToFront() {
      return this._map && ct(this._container), this;
    }, bringToBack: function bringToBack() {
      return this._map && _t(this._container), this;
    }, _updateContent: function _updateContent() {
      if (this._content) {
        var t = this._contentNode,
            i = "function" == typeof this._content ? this._content(this._source || this) : this._content;if ("string" == typeof i) t.innerHTML = i;else {
          for (; t.hasChildNodes();) {
            t.removeChild(t.firstChild);
          }t.appendChild(i);
        }this.fire("contentupdate");
      }
    }, _updatePosition: function _updatePosition() {
      if (this._map) {
        var t = this._map.latLngToLayerPoint(this._latlng),
            i = w(this.options.offset),
            e = this._getAnchor();this._zoomAnimated ? Lt(this._container, t.add(e)) : i = i.add(t).add(e);var n = this._containerBottom = -i.y,
            o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;this._container.style.bottom = n + "px", this._container.style.left = o + "px";
      }
    }, _getAnchor: function _getAnchor() {
      return [0, 0];
    } }),
      rn = sn.extend({ options: { maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: !0, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: !1, closeButton: !0, autoClose: !0, className: "" }, openOn: function openOn(t) {
      return t.openPopup(this), this;
    }, onAdd: function onAdd(t) {
      sn.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Ke || this._source.on("preclick", Y));
    }, onRemove: function onRemove(t) {
      sn.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Ke || this._source.off("preclick", Y));
    }, getEvents: function getEvents() {
      var t = sn.prototype.getEvents.call(this);return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
    }, _close: function _close() {
      this._map && this._map.closePopup(this);
    }, _initLayout: function _initLayout() {
      var t = "leaflet-popup",
          i = this._container = ht("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
          e = this._wrapper = ht("div", t + "-content-wrapper", i);if (this._contentNode = ht("div", t + "-content", e), J(e), X(this._contentNode), V(e, "contextmenu", Y), this._tipContainer = ht("div", t + "-tip-container", i), this._tip = ht("div", t + "-tip", this._tipContainer), this.options.closeButton) {
        var n = this._closeButton = ht("a", t + "-close-button", i);n.href = "#close", n.innerHTML = "&#215;", V(n, "click", this._onCloseButtonClick, this);
      }
    }, _updateLayout: function _updateLayout() {
      var t = this._contentNode,
          i = t.style;i.width = "", i.whiteSpace = "nowrap";var e = t.offsetWidth;e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";var n = t.offsetHeight,
          o = this.options.maxHeight;o && n > o ? (i.height = o + "px", pt(t, "leaflet-popup-scrolled")) : mt(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth;
    }, _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          e = this._getAnchor();Lt(this._container, i.add(e));
    }, _adjustPan: function _adjustPan() {
      if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
        var t = this._map,
            i = parseInt(at(this._container, "marginBottom"), 10) || 0,
            e = this._container.offsetHeight + i,
            n = this._containerWidth,
            o = new x(this._containerLeft, -e - this._containerBottom);o._add(Pt(this._container));var s = t.layerPointToContainerPoint(o),
            r = w(this.options.autoPanPadding),
            a = w(this.options.autoPanPaddingTopLeft || r),
            h = w(this.options.autoPanPaddingBottomRight || r),
            u = t.getSize(),
            l = 0,
            c = 0;s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c]);
      }
    }, _onCloseButtonClick: function _onCloseButtonClick(t) {
      this._close(), Q(t);
    }, _getAnchor: function _getAnchor() {
      return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    } });ye.mergeOptions({ closePopupOnClick: !0 }), ye.include({ openPopup: function openPopup(t, i, e) {
      return t instanceof rn || (t = new rn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t));
    }, closePopup: function closePopup(t) {
      return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this;
    } }), We.include({ bindPopup: function bindPopup(t, i) {
      return t instanceof rn ? (l(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new rn(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !0), this;
    }, unbindPopup: function unbindPopup() {
      return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !1, this._popup = null), this;
    }, openPopup: function openPopup(t, i) {
      if (t instanceof We || (i = t, t = this), t instanceof Fe) for (var e in this._layers) {
        t = this._layers[e];break;
      }return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this;
    }, closePopup: function closePopup() {
      return this._popup && this._popup._close(), this;
    }, togglePopup: function togglePopup(t) {
      return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
    }, isPopupOpen: function isPopupOpen() {
      return !!this._popup && this._popup.isOpen();
    }, setPopupContent: function setPopupContent(t) {
      return this._popup && this._popup.setContent(t), this;
    }, getPopup: function getPopup() {
      return this._popup;
    }, _openPopup: function _openPopup(t) {
      var i = t.layer || t.target;this._popup && this._map && (Q(t), i instanceof Ke ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng));
    }, _movePopup: function _movePopup(t) {
      this._popup.setLatLng(t.latlng);
    }, _onKeyPress: function _onKeyPress(t) {
      13 === t.originalEvent.keyCode && this._openPopup(t);
    } });var an = sn.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: !1, sticky: !1, interactive: !1, opacity: .9 }, onAdd: function onAdd(t) {
      sn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && this._source.fire("tooltipopen", { tooltip: this }, !0);
    }, onRemove: function onRemove(t) {
      sn.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && this._source.fire("tooltipclose", { tooltip: this }, !0);
    }, getEvents: function getEvents() {
      var t = sn.prototype.getEvents.call(this);return Hi && !this.options.permanent && (t.preclick = this._close), t;
    }, _close: function _close() {
      this._map && this._map.closeTooltip(this);
    }, _initLayout: function _initLayout() {
      var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");this._contentNode = this._container = ht("div", t);
    }, _updateLayout: function _updateLayout() {}, _adjustPan: function _adjustPan() {}, _setPosition: function _setPosition(t) {
      var i = this._map,
          e = this._container,
          n = i.latLngToContainerPoint(i.getCenter()),
          o = i.layerPointToContainerPoint(t),
          s = this.options.direction,
          r = e.offsetWidth,
          a = e.offsetHeight,
          h = w(this.options.offset),
          u = this._getAnchor();"top" === s ? t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t = t.subtract(w(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0))), mt(e, "leaflet-tooltip-right"), mt(e, "leaflet-tooltip-left"), mt(e, "leaflet-tooltip-top"), mt(e, "leaflet-tooltip-bottom"), pt(e, "leaflet-tooltip-" + s), Lt(e, t);
    }, _updatePosition: function _updatePosition() {
      var t = this._map.latLngToLayerPoint(this._latlng);this._setPosition(t);
    }, setOpacity: function setOpacity(t) {
      this.options.opacity = t, this._container && vt(this._container, t);
    }, _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);this._setPosition(i);
    }, _getAnchor: function _getAnchor() {
      return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    } });ye.include({ openTooltip: function openTooltip(t, i, e) {
      return t instanceof an || (t = new an(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t);
    }, closeTooltip: function closeTooltip(t) {
      return t && this.removeLayer(t), this;
    } }), We.include({ bindTooltip: function bindTooltip(t, i) {
      return t instanceof an ? (l(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new an(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
    }, unbindTooltip: function unbindTooltip() {
      return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
    }, _initTooltipInteractions: function _initTooltipInteractions(t) {
      if (t || !this._tooltipHandlersAdded) {
        var i = t ? "off" : "on",
            e = { remove: this.closeTooltip, move: this._moveTooltip };this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), Hi && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t;
      }
    }, openTooltip: function openTooltip(t, i) {
      if (t instanceof We || (i = t, t = this), t instanceof Fe) for (var e in this._layers) {
        t = this._layers[e];break;
      }return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (pt(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
    }, closeTooltip: function closeTooltip() {
      return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (mt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
    }, toggleTooltip: function toggleTooltip(t) {
      return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
    }, isTooltipOpen: function isTooltipOpen() {
      return this._tooltip.isOpen();
    }, setTooltipContent: function setTooltipContent(t) {
      return this._tooltip && this._tooltip.setContent(t), this;
    }, getTooltip: function getTooltip() {
      return this._tooltip;
    }, _openTooltip: function _openTooltip(t) {
      var i = t.layer || t.target;this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
    }, _moveTooltip: function _moveTooltip(t) {
      var i,
          e,
          n = t.latlng;this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n);
    } });var hn = Ue.extend({ options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" }, createIcon: function createIcon(t) {
      var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
          e = this.options;if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
        var n = w(e.bgPos);i.style.backgroundPosition = -n.x + "px " + -n.y + "px";
      }return this._setIconStyles(i, "icon"), i;
    }, createShadow: function createShadow() {
      return null;
    } });Ue.Default = Ve;var un = We.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: Ri, updateWhenZooming: !0, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: !1, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function initialize(t) {
      l(this, t);
    }, onAdd: function onAdd() {
      this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update();
    }, beforeAdd: function beforeAdd(t) {
      t._addZoomLimit(this);
    }, onRemove: function onRemove(t) {
      this._removeAllTiles(), ut(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null;
    }, bringToFront: function bringToFront() {
      return this._map && (ct(this._container), this._setAutoZIndex(Math.max)), this;
    }, bringToBack: function bringToBack() {
      return this._map && (_t(this._container), this._setAutoZIndex(Math.min)), this;
    }, getContainer: function getContainer() {
      return this._container;
    }, setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._updateOpacity(), this;
    }, setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    }, isLoading: function isLoading() {
      return this._loading;
    }, redraw: function redraw() {
      return this._map && (this._removeAllTiles(), this._update()), this;
    }, getEvents: function getEvents() {
      var t = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    }, createTile: function createTile() {
      return document.createElement("div");
    }, getTileSize: function getTileSize() {
      var t = this.options.tileSize;return t instanceof x ? t : new x(t, t);
    }, _updateZIndex: function _updateZIndex() {
      this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
    }, _setAutoZIndex: function _setAutoZIndex(t) {
      for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) {
        i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
      }isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
    }, _updateOpacity: function _updateOpacity() {
      if (this._map && !wi) {
        vt(this._container, this.options.opacity);var t = +new Date(),
            i = !1,
            e = !1;for (var n in this._tiles) {
          var o = this._tiles[n];if (o.current && o.loaded) {
            var s = Math.min(1, (t - o.loaded) / 200);vt(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0);
          }
        }e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this));
      }
    }, _onOpaqueTile: r, _initContainer: function _initContainer() {
      this._container || (this._container = ht("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
    }, _updateLevels: function _updateLevels() {
      var t = this._tileZoom,
          i = this.options.maxZoom;if (void 0 !== t) {
        for (var e in this._levels) {
          this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (ut(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
        }var n = this._levels[t],
            o = this._map;return n || ((n = this._levels[t] = {}).el = ht("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n;
      }
    }, _onUpdateLevel: r, _onRemoveLevel: r, _onCreateLevel: r, _pruneTiles: function _pruneTiles() {
      if (this._map) {
        var t,
            i,
            e = this._map.getZoom();if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();else {
          for (t in this._tiles) {
            (i = this._tiles[t]).retain = i.current;
          }for (t in this._tiles) {
            if ((i = this._tiles[t]).current && !i.active) {
              var n = i.coords;this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          }for (t in this._tiles) {
            this._tiles[t].retain || this._removeTile(t);
          }
        }
      }
    }, _removeTilesAtZoom: function _removeTilesAtZoom(t) {
      for (var i in this._tiles) {
        this._tiles[i].coords.z === t && this._removeTile(i);
      }
    }, _removeAllTiles: function _removeAllTiles() {
      for (var t in this._tiles) {
        this._removeTile(t);
      }
    }, _invalidateAll: function _invalidateAll() {
      for (var t in this._levels) {
        ut(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
      }this._removeAllTiles(), this._tileZoom = null;
    }, _retainParent: function _retainParent(t, i, e, n) {
      var o = Math.floor(t / 2),
          s = Math.floor(i / 2),
          r = e - 1,
          a = new x(+o, +s);a.z = +r;var h = this._tileCoordsToKey(a),
          u = this._tiles[h];return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n));
    }, _retainChildren: function _retainChildren(t, i, e, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++) {
        for (var s = 2 * i; s < 2 * i + 2; s++) {
          var r = new x(o, s);r.z = e + 1;var a = this._tileCoordsToKey(r),
              h = this._tiles[a];h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n));
        }
      }
    }, _resetView: function _resetView(t) {
      var i = t && (t.pinch || t.flyTo);this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
    }, _animateZoom: function _animateZoom(t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    }, _clampZoom: function _clampZoom(t) {
      var i = this.options;return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t;
    }, _setView: function _setView(t, i, e, n) {
      var o = this._clampZoom(Math.round(i));(void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);var s = this.options.updateWhenZooming && o !== this._tileZoom;n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i);
    }, _setZoomTransforms: function _setZoomTransforms(t, i) {
      for (var e in this._levels) {
        this._setZoomTransform(this._levels[e], t, i);
      }
    }, _setZoomTransform: function _setZoomTransform(t, i, e) {
      var n = this._map.getZoomScale(e, t.zoom),
          o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();Oi ? wt(t.el, o, n) : Lt(t.el, o);
    }, _resetGrid: function _resetGrid() {
      var t = this._map,
          i = t.options.crs,
          e = this._tileSize = this.getTileSize(),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)];
    }, _onMoveEnd: function _onMoveEnd() {
      this._map && !this._map._animatingZoom && this._update();
    }, _getTiledPixelBounds: function _getTiledPixelBounds(t) {
      var i = this._map,
          e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
          n = i.getZoomScale(e, this._tileZoom),
          o = i.project(t, this._tileZoom).floor(),
          s = i.getSize().divideBy(2 * n);return new P(o.subtract(s), o.add(s));
    }, _update: function _update(t) {
      var i = this._map;if (i) {
        var e = this._clampZoom(i.getZoom());if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
          var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              r = [],
              a = this.options.keepBuffer,
              h = new P(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");for (var u in this._tiles) {
            var l = this._tiles[u].coords;l.z === this._tileZoom && h.contains(new x(l.x, l.y)) || (this._tiles[u].current = !1);
          }if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);else {
            for (var c = o.min.y; c <= o.max.y; c++) {
              for (var _ = o.min.x; _ <= o.max.x; _++) {
                var d = new x(_, c);d.z = this._tileZoom, this._isValidTile(d) && (this._tiles[this._tileCoordsToKey(d)] || r.push(d));
              }
            }if (r.sort(function (t, i) {
              return t.distanceTo(s) - i.distanceTo(s);
            }), 0 !== r.length) {
              this._loading || (this._loading = !0, this.fire("loading"));var p = document.createDocumentFragment();for (_ = 0; _ < r.length; _++) {
                this._addTile(r[_], p);
              }this._level.el.appendChild(p);
            }
          }
        }
      }
    }, _isValidTile: function _isValidTile(t) {
      var i = this._map.options.crs;if (!i.infinite) {
        var e = this._globalTileRange;if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1;
      }if (!this.options.bounds) return !0;var n = this._tileCoordsToBounds(t);return z(this.options.bounds).overlaps(n);
    }, _keyToBounds: function _keyToBounds(t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    }, _tileCoordsToBounds: function _tileCoordsToBounds(t) {
      var i = this._map,
          e = this.getTileSize(),
          n = t.scaleBy(e),
          o = n.add(e),
          s = new T(i.unproject(n, t.z), i.unproject(o, t.z));return this.options.noWrap || i.wrapLatLngBounds(s), s;
    }, _tileCoordsToKey: function _tileCoordsToKey(t) {
      return t.x + ":" + t.y + ":" + t.z;
    }, _keyToTileCoords: function _keyToTileCoords(t) {
      var i = t.split(":"),
          e = new x(+i[0], +i[1]);return e.z = +i[2], e;
    }, _removeTile: function _removeTile(t) {
      var i = this._tiles[t];i && (ut(i.el), delete this._tiles[t], this.fire("tileunload", { tile: i.el, coords: this._keyToTileCoords(t) }));
    }, _initTile: function _initTile(t) {
      pt(t, "leaflet-tile");var i = this.getTileSize();t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = r, t.onmousemove = r, wi && this.options.opacity < 1 && vt(t, this.options.opacity), bi && !Ti && (t.style.WebkitBackfaceVisibility = "hidden");
    }, _addTile: function _addTile(t, i) {
      var n = this._getTilePos(t),
          o = this._tileCoordsToKey(t),
          s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), Lt(s, n), this._tiles[o] = { el: s, coords: t, current: !0 }, i.appendChild(s), this.fire("tileloadstart", { tile: s, coords: t });
    }, _tileReady: function _tileReady(t, i, n) {
      if (this._map) {
        i && this.fire("tileerror", { error: i, tile: n, coords: t });var o = this._tileCoordsToKey(t);(n = this._tiles[o]) && (n.loaded = +new Date(), this._map._fadeAnimated ? (vt(n.el, 0), g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (pt(n.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: n.el, coords: t })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), wi || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)));
      }
    }, _getTilePos: function _getTilePos(t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    }, _wrapCoords: function _wrapCoords(t) {
      var i = new x(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);return i.z = t.z, i;
    }, _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
      var i = this.getTileSize();return new P(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]));
    }, _noTilesToLoad: function _noTilesToLoad() {
      for (var t in this._tiles) {
        if (!this._tiles[t].loaded) return !1;
      }return !0;
    } }),
      ln = un.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: !1, zoomReverse: !1, detectRetina: !1, crossOrigin: !1 }, initialize: function initialize(t, i) {
      this._url = t, (i = l(this, i)).detectRetina && Vi && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), bi || this.on("tileunload", this._onTileRemove);
    }, setUrl: function setUrl(t, i) {
      return this._url = t, i || this.redraw(), this;
    }, createTile: function createTile(t, i) {
      var n = document.createElement("img");return V(n, "load", e(this._tileOnLoad, this, i, n)), V(n, "error", e(this._tileOnError, this, i, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n;
    }, getTileUrl: function getTileUrl(t) {
      var e = { r: Vi ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() };if (this._map && !this._map.options.crs.infinite) {
        var n = this._globalTileRange.max.y - t.y;this.options.tms && (e.y = n), e["-y"] = n;
      }return _(this._url, i(e, this.options));
    }, _tileOnLoad: function _tileOnLoad(t, i) {
      wi ? setTimeout(e(t, this, null, i), 0) : t(null, i);
    }, _tileOnError: function _tileOnError(t, i, e) {
      var n = this.options.errorTileUrl;n && i.src !== n && (i.src = n), t(e, i);
    }, _onTileRemove: function _onTileRemove(t) {
      t.tile.onload = null;
    }, _getZoomForUrl: function _getZoomForUrl() {
      var t = this._tileZoom,
          i = this.options.maxZoom,
          e = this.options.zoomReverse,
          n = this.options.zoomOffset;return e && (t = i - t), t + n;
    }, _getSubdomain: function _getSubdomain(t) {
      var i = Math.abs(t.x + t.y) % this.options.subdomains.length;return this.options.subdomains[i];
    }, _abortLoading: function _abortLoading() {
      var t, i;for (t in this._tiles) {
        this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = r, i.onerror = r, i.complete || (i.src = ni, ut(i)));
      }
    } }),
      cn = ln.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: !1, version: "1.1.1" }, options: { crs: null, uppercase: !1 }, initialize: function initialize(t, e) {
      this._url = t;var n = i({}, this.defaultWmsParams);for (var o in e) {
        o in this.options || (n[o] = e[o]);
      }e = l(this, e), n.width = n.height = e.tileSize * (e.detectRetina && Vi ? 2 : 1), this.wmsParams = n;
    }, onAdd: function onAdd(t) {
      this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);var i = this._wmsVersion >= 1.3 ? "crs" : "srs";this.wmsParams[i] = this._crs.code, ln.prototype.onAdd.call(this, t);
    }, getTileUrl: function getTileUrl(t) {
      var i = this._tileCoordsToBounds(t),
          e = this._crs.project(i.getNorthWest()),
          n = this._crs.project(i.getSouthEast()),
          o = (this._wmsVersion >= 1.3 && this._crs === Ne ? [n.y, e.x, e.y, n.x] : [e.x, n.y, n.x, e.y]).join(","),
          s = ln.prototype.getTileUrl.call(this, t);return s + c(this.wmsParams, s, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + o;
    }, setParams: function setParams(t, e) {
      return i(this.wmsParams, t), e || this.redraw(), this;
    } });ln.WMS = cn, Yt.wms = function (t, i) {
    return new cn(t, i);
  };var _n = We.extend({ options: { padding: .1 }, initialize: function initialize(t) {
      l(this, t), n(this), this._layers = this._layers || {};
    }, onAdd: function onAdd() {
      this._container || (this._initContainer(), this._zoomAnimated && pt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
    }, onRemove: function onRemove() {
      this.off("update", this._updatePaths, this), this._destroyContainer();
    }, getEvents: function getEvents() {
      var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
    }, _onAnimZoom: function _onAnimZoom(t) {
      this._updateTransform(t.center, t.zoom);
    }, _onZoom: function _onZoom() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    }, _updateTransform: function _updateTransform(t, i) {
      var e = this._map.getZoomScale(i, this._zoom),
          n = Pt(this._container),
          o = this._map.getSize().multiplyBy(.5 + this.options.padding),
          s = this._map.project(this._center, i),
          r = this._map.project(t, i).subtract(s),
          a = o.multiplyBy(-e).add(n).add(o).subtract(r);Oi ? wt(this._container, a, e) : Lt(this._container, a);
    }, _reset: function _reset() {
      this._update(), this._updateTransform(this._center, this._zoom);for (var t in this._layers) {
        this._layers[t]._reset();
      }
    }, _onZoomEnd: function _onZoomEnd() {
      for (var t in this._layers) {
        this._layers[t]._project();
      }
    }, _updatePaths: function _updatePaths() {
      for (var t in this._layers) {
        this._layers[t]._update();
      }
    }, _update: function _update() {
      var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
    } }),
      dn = _n.extend({ getEvents: function getEvents() {
      var t = _n.prototype.getEvents.call(this);return t.viewprereset = this._onViewPreReset, t;
    }, _onViewPreReset: function _onViewPreReset() {
      this._postponeUpdatePaths = !0;
    }, onAdd: function onAdd() {
      _n.prototype.onAdd.call(this), this._draw();
    }, _initContainer: function _initContainer() {
      var t = this._container = document.createElement("canvas");V(t, "mousemove", o(this._onMouseMove, 32, this), this), V(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), V(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d");
    }, _destroyContainer: function _destroyContainer() {
      delete this._ctx, ut(this._container), G(this._container), delete this._container;
    }, _updatePaths: function _updatePaths() {
      if (!this._postponeUpdatePaths) {
        this._redrawBounds = null;for (var t in this._layers) {
          this._layers[t]._update();
        }this._redraw();
      }
    }, _update: function _update() {
      if (!this._map._animatingZoom || !this._bounds) {
        this._drawnLayers = {}, _n.prototype._update.call(this);var t = this._bounds,
            i = this._container,
            e = t.getSize(),
            n = Vi ? 2 : 1;Lt(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Vi && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
      }
    }, _reset: function _reset() {
      _n.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
    }, _initPath: function _initPath(t) {
      this._updateDashArray(t), this._layers[n(t)] = t;var i = t._order = { layer: t, prev: this._drawLast, next: null };this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast;
    }, _addPath: function _addPath(t) {
      this._requestRedraw(t);
    }, _removePath: function _removePath(t) {
      var i = t._order,
          e = i.next,
          n = i.prev;e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[L.stamp(t)], this._requestRedraw(t);
    }, _updatePath: function _updatePath(t) {
      this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
    }, _updateStyle: function _updateStyle(t) {
      this._updateDashArray(t), this._requestRedraw(t);
    }, _updateDashArray: function _updateDashArray(t) {
      if (t.options.dashArray) {
        var i,
            e = t.options.dashArray.split(","),
            n = [];for (i = 0; i < e.length; i++) {
          n.push(Number(e[i]));
        }t.options._dashArray = n;
      }
    }, _requestRedraw: function _requestRedraw(t) {
      this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this));
    }, _extendRedrawBounds: function _extendRedrawBounds(t) {
      if (t._pxBounds) {
        var i = (t.options.weight || 0) + 1;this._redrawBounds = this._redrawBounds || new P(), this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]));
      }
    }, _redraw: function _redraw() {
      this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
    }, _clear: function _clear() {
      var t = this._redrawBounds;if (t) {
        var i = t.getSize();this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y);
      } else this._ctx.clearRect(0, 0, this._container.width, this._container.height);
    }, _draw: function _draw() {
      var t,
          i = this._redrawBounds;if (this._ctx.save(), i) {
        var e = i.getSize();this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip();
      }this._drawing = !0;for (var n = this._drawFirst; n; n = n.next) {
        t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
      }this._drawing = !1, this._ctx.restore();
    }, _updatePoly: function _updatePoly(t, i) {
      if (this._drawing) {
        var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;if (a) {
          for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0; e < a; e++) {
            for (n = 0, o = r[e].length; n < o; n++) {
              s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
            }i && h.closePath();
          }this._fillStroke(h, t);
        }
      }
    }, _updateCircle: function _updateCircle(t) {
      if (this._drawing && !t._empty()) {
        var i = t._point,
            e = this._ctx,
            n = t._radius,
            o = (t._radiusY || n) / n;this._drawnLayers[t._leaflet_id] = t, 1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t);
      }
    }, _fillStroke: function _fillStroke(t, i) {
      var e = i.options;e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke());
    }, _onClick: function _onClick(t) {
      for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) {
        (i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
      }e && (et(t), this._fireEvent([e], t));
    }, _onMouseMove: function _onMouseMove(t) {
      if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
        var i = this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t, i);
      }
    }, _handleMouseOut: function _handleMouseOut(t) {
      var i = this._hoveredLayer;i && (mt(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null);
    }, _handleMouseHover: function _handleMouseHover(t, i) {
      for (var e, n, o = this._drawFirst; o; o = o.next) {
        (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
      }n !== this._hoveredLayer && (this._handleMouseOut(t), n && (pt(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
    }, _fireEvent: function _fireEvent(t, i, e) {
      this._map._fireDOMEvent(i, e || i.type, t);
    }, _bringToFront: function _bringToFront(t) {
      var i = t._order,
          e = i.next,
          n = i.prev;e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t));
    }, _bringToBack: function _bringToBack(t) {
      var i = t._order,
          e = i.next,
          n = i.prev;n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t));
    } }),
      pn = function () {
    try {
      return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
        return document.createElement("<lvml:" + t + ' class="lvml">');
      };
    } catch (t) {
      return function (t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }
  }(),
      mn = { _initContainer: function _initContainer() {
      this._container = ht("div", "leaflet-vml-container");
    }, _update: function _update() {
      this._map._animatingZoom || (_n.prototype._update.call(this), this.fire("update"));
    }, _initPath: function _initPath(t) {
      var i = t._container = pn("shape");pt(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = pn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t;
    }, _addPath: function _addPath(t) {
      var i = t._container;this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i);
    }, _removePath: function _removePath(t) {
      var i = t._container;ut(i), t.removeInteractiveTarget(i), delete this._layers[n(t)];
    }, _updateStyle: function _updateStyle(t) {
      var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = pn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = ei(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = pn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null);
    }, _updateCircle: function _updateCircle(t) {
      var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600");
    }, _setPath: function _setPath(t, i) {
      t._path.v = i;
    }, _bringToFront: function _bringToFront(t) {
      ct(t._container);
    }, _bringToBack: function _bringToBack(t) {
      _t(t._container);
    } },
      fn = Ki ? pn : S,
      gn = _n.extend({ getEvents: function getEvents() {
      var t = _n.prototype.getEvents.call(this);return t.zoomstart = this._onZoomStart, t;
    }, _initContainer: function _initContainer() {
      this._container = fn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = fn("g"), this._container.appendChild(this._rootGroup);
    }, _destroyContainer: function _destroyContainer() {
      ut(this._container), G(this._container), delete this._container, delete this._rootGroup;
    }, _onZoomStart: function _onZoomStart() {
      this._update();
    }, _update: function _update() {
      if (!this._map._animatingZoom || !this._bounds) {
        _n.prototype._update.call(this);var t = this._bounds,
            i = t.getSize(),
            e = this._container;this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), Lt(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update");
      }
    }, _initPath: function _initPath(t) {
      var i = t._path = fn("path");t.options.className && pt(i, t.options.className), t.options.interactive && pt(i, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t;
    }, _addPath: function _addPath(t) {
      this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
    }, _removePath: function _removePath(t) {
      ut(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)];
    }, _updatePath: function _updatePath(t) {
      t._project(), t._update();
    }, _updateStyle: function _updateStyle(t) {
      var i = t._path,
          e = t.options;i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"));
    }, _updatePoly: function _updatePoly(t, i) {
      this._setPath(t, k(t._parts, i));
    }, _updateCircle: function _updateCircle(t) {
      var i = t._point,
          e = t._radius,
          n = "a" + e + "," + (t._radiusY || e) + " 0 1,0 ",
          o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";this._setPath(t, o);
    }, _setPath: function _setPath(t, i) {
      t._path.setAttribute("d", i);
    }, _bringToFront: function _bringToFront(t) {
      ct(t._path);
    }, _bringToBack: function _bringToBack(t) {
      _t(t._path);
    } });Ki && gn.include(mn), ye.include({ getRenderer: function getRenderer(t) {
      var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;return i || (i = this._renderer = this.options.preferCanvas && Xt() || Jt()), this.hasLayer(i) || this.addLayer(i), i;
    }, _getPaneRenderer: function _getPaneRenderer(t) {
      if ("overlayPane" === t || void 0 === t) return !1;var i = this._paneRenderers[t];return void 0 === i && (i = gn && Jt({ pane: t }) || dn && Xt({ pane: t }), this._paneRenderers[t] = i), i;
    } });var vn = $e.extend({ initialize: function initialize(t, i) {
      $e.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    }, setBounds: function setBounds(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    }, _boundsToLatLngs: function _boundsToLatLngs(t) {
      return t = z(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    } });gn.create = fn, gn.pointsToPath = k, Qe.geometryToLayer = Wt, Qe.coordsToLatLng = Ht, Qe.coordsToLatLngs = Ft, Qe.latLngToCoords = Ut, Qe.latLngsToCoords = Vt, Qe.getFeature = Gt, Qe.asFeature = qt, ye.mergeOptions({ boxZoom: !0 });var yn = Me.extend({ initialize: function initialize(t) {
      this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
    }, addHooks: function addHooks() {
      V(this._container, "mousedown", this._onMouseDown, this);
    }, removeHooks: function removeHooks() {
      G(this._container, "mousedown", this._onMouseDown, this);
    }, moved: function moved() {
      return this._moved;
    }, _destroy: function _destroy() {
      ut(this._pane), delete this._pane;
    }, _resetState: function _resetState() {
      this._resetStateTimeout = 0, this._moved = !1;
    }, _clearDeferredResetState: function _clearDeferredResetState() {
      0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
    }, _onMouseDown: function _onMouseDown(t) {
      if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;this._clearDeferredResetState(), this._resetState(), pi(), bt(), this._startPoint = this._map.mouseEventToContainerPoint(t), V(document, { contextmenu: Q, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
    }, _onMouseMove: function _onMouseMove(t) {
      this._moved || (this._moved = !0, this._box = ht("div", "leaflet-zoom-box", this._container), pt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);var i = new P(this._point, this._startPoint),
          e = i.getSize();Lt(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px";
    }, _finish: function _finish() {
      this._moved && (ut(this._box), mt(this._container, "leaflet-crosshair")), mi(), Tt(), G(document, { contextmenu: Q, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
    }, _onMouseUp: function _onMouseUp(t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
        this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0);var i = new T(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i });
      }
    }, _onKeyDown: function _onKeyDown(t) {
      27 === t.keyCode && this._finish();
    } });ye.addInitHook("addHandler", "boxZoom", yn), ye.mergeOptions({ doubleClickZoom: !0 });var xn = Me.extend({ addHooks: function addHooks() {
      this._map.on("dblclick", this._onDoubleClick, this);
    }, removeHooks: function removeHooks() {
      this._map.off("dblclick", this._onDoubleClick, this);
    }, _onDoubleClick: function _onDoubleClick(t) {
      var i = this._map,
          e = i.getZoom(),
          n = i.options.zoomDelta,
          o = t.originalEvent.shiftKey ? e - n : e + n;"center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o);
    } });ye.addInitHook("addHandler", "doubleClickZoom", xn), ye.mergeOptions({ dragging: !0, inertia: !Ti, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: .2, worldCopyJump: !1, maxBoundsViscosity: 0 });var wn = Me.extend({ addHooks: function addHooks() {
      if (!this._draggable) {
        var t = this._map;this._draggable = new ke(t._mapPane, t._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
      }pt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
    }, removeHooks: function removeHooks() {
      mt(this._map._container, "leaflet-grab"), mt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
    }, moved: function moved() {
      return this._draggable && this._draggable._moved;
    }, moving: function moving() {
      return this._draggable && this._draggable._moving;
    }, _onDragStart: function _onDragStart() {
      var t = this._map;if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
        var i = z(this._map.options.maxBounds);this._offsetLimit = b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
      } else this._offsetLimit = null;t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
    }, _onDrag: function _onDrag(t) {
      if (this._map.options.inertia) {
        var i = this._lastTime = +new Date(),
            e = this._lastPos = this._draggable._absPos || this._draggable._newPos;this._positions.push(e), this._times.push(i), i - this._times[0] > 50 && (this._positions.shift(), this._times.shift());
      }this._map.fire("move", t).fire("drag", t);
    }, _onZoomEnd: function _onZoomEnd() {
      var t = this._map.getSize().divideBy(2),
          i = this._map.latLngToLayerPoint([0, 0]);this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    }, _viscousLimit: function _viscousLimit(t, i) {
      return t - (t - i) * this._viscosity;
    }, _onPreDragLimit: function _onPreDragLimit() {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos),
            i = this._offsetLimit;t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
      }
    }, _onPreDragWrap: function _onPreDragWrap() {
      var t = this._worldWidth,
          i = Math.round(t / 2),
          e = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = (n - i + e) % t + i - e,
          s = (n + i + e) % t - i - e,
          r = Math.abs(o + e) < Math.abs(s + e) ? o : s;this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r;
    }, _onDragEnd: function _onDragEnd(t) {
      var i = this._map,
          e = i.options,
          n = !e.inertia || this._times.length < 2;if (i.fire("dragend", t), n) i.fire("moveend");else {
        var o = this._lastPos.subtract(this._positions[0]),
            s = (this._lastTime - this._times[0]) / 1e3,
            r = e.easeLinearity,
            a = o.multiplyBy(r / s),
            h = a.distanceTo([0, 0]),
            u = Math.min(e.inertiaMaxSpeed, h),
            l = a.multiplyBy(u / h),
            c = u / (e.inertiaDeceleration * r),
            _ = l.multiplyBy(-c / 2).round();_.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), f(function () {
          i.panBy(_, { duration: c, easeLinearity: r, noMoveStart: !0, animate: !0 });
        })) : i.fire("moveend");
      }
    } });ye.addInitHook("addHandler", "dragging", wn), ye.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });var Ln = Me.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function initialize(t) {
      this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
    }, addHooks: function addHooks() {
      var t = this._map._container;t.tabIndex <= 0 && (t.tabIndex = "0"), V(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    }, removeHooks: function removeHooks() {
      this._removeHooks(), G(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    }, _onMouseDown: function _onMouseDown() {
      if (!this._focused) {
        var t = document.body,
            i = document.documentElement,
            e = t.scrollTop || i.scrollTop,
            n = t.scrollLeft || i.scrollLeft;this._map._container.focus(), window.scrollTo(n, e);
      }
    }, _onFocus: function _onFocus() {
      this._focused = !0, this._map.fire("focus");
    }, _onBlur: function _onBlur() {
      this._focused = !1, this._map.fire("blur");
    }, _setPanDelta: function _setPanDelta(t) {
      var i,
          e,
          n = this._panKeys = {},
          o = this.keyCodes;for (i = 0, e = o.left.length; i < e; i++) {
        n[o.left[i]] = [-1 * t, 0];
      }for (i = 0, e = o.right.length; i < e; i++) {
        n[o.right[i]] = [t, 0];
      }for (i = 0, e = o.down.length; i < e; i++) {
        n[o.down[i]] = [0, t];
      }for (i = 0, e = o.up.length; i < e; i++) {
        n[o.up[i]] = [0, -1 * t];
      }
    }, _setZoomDelta: function _setZoomDelta(t) {
      var i,
          e,
          n = this._zoomKeys = {},
          o = this.keyCodes;for (i = 0, e = o.zoomIn.length; i < e; i++) {
        n[o.zoomIn[i]] = t;
      }for (i = 0, e = o.zoomOut.length; i < e; i++) {
        n[o.zoomOut[i]] = -t;
      }
    }, _addHooks: function _addHooks() {
      V(document, "keydown", this._onKeyDown, this);
    }, _removeHooks: function _removeHooks() {
      G(document, "keydown", this._onKeyDown, this);
    }, _onKeyDown: function _onKeyDown(t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
            e = t.keyCode,
            n = this._map;if (e in this._panKeys) {
          if (n._panAnim && n._panAnim._inProgress) return;i = this._panKeys[e], t.shiftKey && (i = w(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds);
        } else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);else {
          if (27 !== e || !n._popup) return;n.closePopup();
        }Q(t);
      }
    } });ye.addInitHook("addHandler", "keyboard", Ln), ye.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });var Pn = Me.extend({ addHooks: function addHooks() {
      V(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0;
    }, removeHooks: function removeHooks() {
      G(this._map._container, "mousewheel", this._onWheelScroll, this);
    }, _onWheelScroll: function _onWheelScroll(t) {
      var i = it(t),
          n = this._map.options.wheelDebounceTime;this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());var o = Math.max(n - (+new Date() - this._startTime), 0);clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), o), Q(t);
    }, _performZoom: function _performZoom() {
      var t = this._map,
          i = t.getZoom(),
          e = this._map.options.zoomSnap || 0;t._stop();var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
          o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
          s = e ? Math.ceil(o / e) * e : o,
          r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r));
    } });ye.addInitHook("addHandler", "scrollWheelZoom", Pn), ye.mergeOptions({ tap: !0, tapTolerance: 15 });var bn = Me.extend({ addHooks: function addHooks() {
      V(this._map._container, "touchstart", this._onDown, this);
    }, removeHooks: function removeHooks() {
      G(this._map._container, "touchstart", this._onDown, this);
    }, _onDown: function _onDown(t) {
      if (t.touches) {
        if ($(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);var i = t.touches[0],
            n = i.target;this._startPos = this._newPos = new x(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && pt(n, "leaflet-active"), this._holdTimeout = setTimeout(e(function () {
          this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i));
        }, this), 1e3), this._simulateEvent("mousedown", i), V(document, { touchmove: this._onMove, touchend: this._onUp }, this);
      }
    }, _onUp: function _onUp(t) {
      if (clearTimeout(this._holdTimeout), G(document, { touchmove: this._onMove, touchend: this._onUp }, this), this._fireClick && t && t.changedTouches) {
        var i = t.changedTouches[0],
            e = i.target;e && e.tagName && "a" === e.tagName.toLowerCase() && mt(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i);
      }
    }, _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    }, _onMove: function _onMove(t) {
      var i = t.touches[0];this._newPos = new x(i.clientX, i.clientY), this._simulateEvent("mousemove", i);
    }, _simulateEvent: function _simulateEvent(t, i) {
      var e = document.createEvent("MouseEvents");e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e);
    } });Hi && !Wi && ye.addInitHook("addHandler", "tap", bn), ye.mergeOptions({ touchZoom: Hi && !Ti, bounceAtZoomLimits: !0 });var Tn = Me.extend({ addHooks: function addHooks() {
      pt(this._map._container, "leaflet-touch-zoom"), V(this._map._container, "touchstart", this._onTouchStart, this);
    }, removeHooks: function removeHooks() {
      mt(this._map._container, "leaflet-touch-zoom"), G(this._map._container, "touchstart", this._onTouchStart, this);
    }, _onTouchStart: function _onTouchStart(t) {
      var i = this._map;if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
        var e = i.mouseEventToContainerPoint(t.touches[0]),
            n = i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), V(document, "touchmove", this._onTouchMove, this), V(document, "touchend", this._onTouchEnd, this), $(t);
      }
    }, _onTouchMove: function _onTouchMove(t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
            n = i.mouseEventToContainerPoint(t.touches[0]),
            o = i.mouseEventToContainerPoint(t.touches[1]),
            s = n.distanceTo(o) / this._startDist;if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
          if (this._center = this._startLatLng, 1 === s) return;
        } else {
          var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);if (1 === s && 0 === r.x && 0 === r.y) return;this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom);
        }this._moved || (i._moveStart(!0), this._moved = !0), g(this._animRequest);var a = e(i._move, i, this._center, this._zoom, { pinch: !0, round: !1 });this._animRequest = f(a, this, !0), $(t);
      }
    }, _onTouchEnd: function _onTouchEnd() {
      this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), G(document, "touchmove", this._onTouchMove), G(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
    } });ye.addInitHook("addHandler", "touchZoom", Tn), ye.BoxZoom = yn, ye.DoubleClickZoom = xn, ye.Drag = wn, ye.Keyboard = Ln, ye.ScrollWheelZoom = Pn, ye.Tap = bn, ye.TouchZoom = Tn;var zn = window.L;window.L = t, Object.freeze = $t, t.version = "1.2.0", t.noConflict = function () {
    return window.L = zn, this;
  }, t.Control = xe, t.control = we, t.Browser = Yi, t.Evented = ui, t.Mixin = Ce, t.Util = ai, t.Class = v, t.Handler = Me, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = l, t.DomEvent = le, t.DomUtil = ge, t.PosAnimation = ve, t.Draggable = ke, t.LineUtil = Be, t.PolyUtil = Ie, t.Point = x, t.point = w, t.Bounds = P, t.bounds = b, t.Transformation = Z, t.transformation = E, t.Projection = Re, t.LatLng = M, t.latLng = C, t.LatLngBounds = T, t.latLngBounds = z, t.CRS = li, t.GeoJSON = Qe, t.geoJSON = Kt, t.geoJson = en, t.Layer = We, t.LayerGroup = He, t.layerGroup = function (t) {
    return new He(t);
  }, t.FeatureGroup = Fe, t.featureGroup = function (t) {
    return new Fe(t);
  }, t.ImageOverlay = nn, t.imageOverlay = function (t, i, e) {
    return new nn(t, i, e);
  }, t.VideoOverlay = on, t.videoOverlay = function (t, i, e) {
    return new on(t, i, e);
  }, t.DivOverlay = sn, t.Popup = rn, t.popup = function (t, i) {
    return new rn(t, i);
  }, t.Tooltip = an, t.tooltip = function (t, i) {
    return new an(t, i);
  }, t.Icon = Ue, t.icon = function (t) {
    return new Ue(t);
  }, t.DivIcon = hn, t.divIcon = function (t) {
    return new hn(t);
  }, t.Marker = qe, t.marker = function (t, i) {
    return new qe(t, i);
  }, t.TileLayer = ln, t.tileLayer = Yt, t.GridLayer = un, t.gridLayer = function (t) {
    return new un(t);
  }, t.SVG = gn, t.svg = Jt, t.Renderer = _n, t.Canvas = dn, t.canvas = Xt, t.Path = Ke, t.CircleMarker = Ye, t.circleMarker = function (t, i) {
    return new Ye(t, i);
  }, t.Circle = Xe, t.circle = function (t, i, e) {
    return new Xe(t, i, e);
  }, t.Polyline = Je, t.polyline = function (t, i) {
    return new Je(t, i);
  }, t.Polygon = $e, t.polygon = function (t, i) {
    return new $e(t, i);
  }, t.Rectangle = vn, t.rectangle = function (t, i) {
    return new vn(t, i);
  }, t.Map = ye, t.map = function (t, i) {
    return new ye(t, i);
  };
});

/***/ }),

/***/ "./public/assets/vendor/select2/dist/js/select2.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 = function () {
    // Restore the Select2 AMD loader so it can be used
    // Needed mostly in the language files, where the loader is not inserted
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
      var S2 = jQuery.fn.select2.amd;
    }
    var S2;(function () {
      if (!S2 || !S2.requirejs) {
        if (!S2) {
          S2 = {};
        } else {
          require = S2;
        }
        /**
         * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
         * Available via the MIT or new BSD license.
         * see: http://github.com/jrburke/almond for details
         */
        //Going sloppy to avoid 'use strict' string cost, but strict practices should
        //be followed.
        /*jslint sloppy: true */
        /*global setTimeout: false */

        var requirejs, require, define;
        (function (undef) {
          var main,
              _req,
              makeMap,
              handlers,
              defined = {},
              waiting = {},
              config = {},
              defining = {},
              hasOwn = Object.prototype.hasOwnProperty,
              aps = [].slice,
              jsSuffixRegExp = /\.js$/;

          function hasProp(obj, prop) {
            return hasOwn.call(obj, prop);
          }

          /**
           * Given a relative module name, like ./something, normalize it to
           * a real name that can be mapped to a path.
           * @param {String} name the relative name
           * @param {String} baseName a real name that the name arg is relative
           * to.
           * @returns {String} normalized name
           */
          function normalize(name, baseName) {
            var nameParts,
                nameSegment,
                mapValue,
                foundMap,
                lastIndex,
                foundI,
                foundStarMap,
                starI,
                i,
                j,
                part,
                baseParts = baseName && baseName.split("/"),
                map = config.map,
                starMap = map && map['*'] || {};

            //Adjust any relative paths.
            if (name && name.charAt(0) === ".") {
              //If have a base name, try to normalize against it,
              //otherwise, assume it is a top-level require that will
              //be relative to baseUrl in the end.
              if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                  name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                  part = name[i];
                  if (part === ".") {
                    name.splice(i, 1);
                    i -= 1;
                  } else if (part === "..") {
                    if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                      //End of the line. Keep at least one non-dot
                      //path segment at the front so it can be mapped
                      //correctly to disk. Otherwise, there is likely
                      //no path mapping for a path starting with '..'.
                      //This can still fail, but catches the most reasonable
                      //uses of ..
                      break;
                    } else if (i > 0) {
                      name.splice(i - 1, 2);
                      i -= 2;
                    }
                  }
                }
                //end trimDots

                name = name.join("/");
              } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
              }
            }

            //Apply map config if available.
            if ((baseParts || starMap) && map) {
              nameParts = name.split('/');

              for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                  //Find the longest baseName segment match in the config.
                  //So, do joins on the biggest to smallest lengths of baseParts.
                  for (j = baseParts.length; j > 0; j -= 1) {
                    mapValue = map[baseParts.slice(0, j).join('/')];

                    //baseName segment has  config, find if it has one for
                    //this name.
                    if (mapValue) {
                      mapValue = mapValue[nameSegment];
                      if (mapValue) {
                        //Match, update name to the new value.
                        foundMap = mapValue;
                        foundI = i;
                        break;
                      }
                    }
                  }
                }

                if (foundMap) {
                  break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                  foundStarMap = starMap[nameSegment];
                  starI = i;
                }
              }

              if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
              }

              if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
              }
            }

            return name;
          }

          function makeRequire(relName, forceSync) {
            return function () {
              //A version of a require function that passes a moduleName
              //value for items that may need to
              //look up paths relative to the moduleName
              var args = aps.call(arguments, 0);

              //If first arg is not require('string'), and there is only
              //one arg, it is the array form without a callback. Insert
              //a null so that the following concat is correct.
              if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
              }
              return _req.apply(undef, args.concat([relName, forceSync]));
            };
          }

          function makeNormalize(relName) {
            return function (name) {
              return normalize(name, relName);
            };
          }

          function makeLoad(depName) {
            return function (value) {
              defined[depName] = value;
            };
          }

          function callDep(name) {
            if (hasProp(waiting, name)) {
              var args = waiting[name];
              delete waiting[name];
              defining[name] = true;
              main.apply(undef, args);
            }

            if (!hasProp(defined, name) && !hasProp(defining, name)) {
              throw new Error('No ' + name);
            }
            return defined[name];
          }

          //Turns a plugin!resource to [plugin, resource]
          //with the plugin being undefined if the name
          //did not have a plugin prefix.
          function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
              prefix = name.substring(0, index);
              name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
          }

          /**
           * Makes a name map, normalizing the name, and using a plugin
           * for normalization if necessary. Grabs a ref to plugin
           * too, as an optimization.
           */
          makeMap = function makeMap(name, relName) {
            var plugin,
                parts = splitPrefix(name),
                prefix = parts[0];

            name = parts[1];

            if (prefix) {
              prefix = normalize(prefix, relName);
              plugin = callDep(prefix);
            }

            //Normalize according
            if (prefix) {
              if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
              } else {
                name = normalize(name, relName);
              }
            } else {
              name = normalize(name, relName);
              parts = splitPrefix(name);
              prefix = parts[0];
              name = parts[1];
              if (prefix) {
                plugin = callDep(prefix);
              }
            }

            //Using ridiculous property names for space reasons
            return {
              f: prefix ? prefix + '!' + name : name, //fullName
              n: name,
              pr: prefix,
              p: plugin
            };
          };

          function makeConfig(name) {
            return function () {
              return config && config.config && config.config[name] || {};
            };
          }

          handlers = {
            require: function require(name) {
              return makeRequire(name);
            },
            exports: function exports(name) {
              var e = defined[name];
              if (typeof e !== 'undefined') {
                return e;
              } else {
                return defined[name] = {};
              }
            },
            module: function module(name) {
              return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
              };
            }
          };

          main = function main(name, deps, callback, relName) {
            var cjsModule,
                depName,
                ret,
                map,
                i,
                args = [],
                callbackType = typeof callback === 'undefined' ? 'undefined' : _typeof(callback),
                usingExports;

            //Use name if no relName
            relName = relName || name;

            //Call the callback to define the module, if necessary.
            if (callbackType === 'undefined' || callbackType === 'function') {
              //Pull out the defined dependencies and pass the ordered
              //values to the callback.
              //Default to [require, exports, module] if no deps
              deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
              for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                  args[i] = handlers.require(name);
                } else if (depName === "exports") {
                  //CommonJS module spec 1.1
                  args[i] = handlers.exports(name);
                  usingExports = true;
                } else if (depName === "module") {
                  //CommonJS module spec 1.1
                  cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) {
                  args[i] = callDep(depName);
                } else if (map.p) {
                  map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                  args[i] = defined[depName];
                } else {
                  throw new Error(name + ' missing ' + depName);
                }
              }

              ret = callback ? callback.apply(defined[name], args) : undefined;

              if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name]) {
                  defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                  //Use the return value from the function.
                  defined[name] = ret;
                }
              }
            } else if (name) {
              //May just be an object definition for the module. Only
              //worry about defining if have a module name.
              defined[name] = callback;
            }
          };

          requirejs = require = _req = function req(deps, callback, relName, forceSync, alt) {
            if (typeof deps === "string") {
              if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
              }
              //Just return the module wanted. In this scenario, the
              //deps arg is the module name, and second arg (if passed)
              //is just the relName.
              //Normalize module name, if it contains . or ..
              return callDep(makeMap(deps, callback).f);
            } else if (!deps.splice) {
              //deps is a config object, not an array.
              config = deps;
              if (config.deps) {
                _req(config.deps, config.callback);
              }
              if (!callback) {
                return;
              }

              if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
              } else {
                deps = undef;
              }
            }

            //Support require(['a'])
            callback = callback || function () {};

            //If relName is a function, it is an errback handler,
            //so remove it.
            if (typeof relName === 'function') {
              relName = forceSync;
              forceSync = alt;
            }

            //Simulate async callback;
            if (forceSync) {
              main(undef, deps, callback, relName);
            } else {
              //Using a non-zero value because of concern for what old browsers
              //do, and latest browsers "upgrade" to 4 if lower value is used:
              //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
              //If want a value immediately, use require('id') instead -- something
              //that works in almond on the global level, but not guaranteed and
              //unlikely to work in other AMD implementations.
              setTimeout(function () {
                main(undef, deps, callback, relName);
              }, 4);
            }

            return _req;
          };

          /**
           * Just drops the config on the floor, but returns req in case
           * the config return value is used.
           */
          _req.config = function (cfg) {
            return _req(cfg);
          };

          /**
           * Expose module registry for debugging and tooling
           */
          requirejs._defined = defined;

          define = function define(name, deps, callback) {
            if (typeof name !== 'string') {
              throw new Error('See almond README: incorrect module build, no module name');
            }

            //This module may not have dependencies
            if (!deps.splice) {
              //deps is not an array, so probably means
              //an object literal or factory function for
              //the value. Adjust args.
              callback = deps;
              deps = [];
            }

            if (!hasProp(defined, name) && !hasProp(waiting, name)) {
              waiting[name] = [name, deps, callback];
            }
          };

          define.amd = {
            jQuery: true
          };
        })();

        S2.requirejs = requirejs;S2.require = require;S2.define = define;
      }
    })();
    S2.define("almond", function () {});

    /* global jQuery:false, $:false */
    S2.define('jquery', [], function () {
      var _$ = jQuery || $;

      if (_$ == null && console && console.error) {
        console.error('Select2: An instance of jQuery or a jQuery-compatible library was not ' + 'found. Make sure that you are including jQuery before Select2 on your ' + 'web page.');
      }

      return _$;
    });

    S2.define('select2/utils', ['jquery'], function ($) {
      var Utils = {};

      Utils.Extend = function (ChildClass, SuperClass) {
        var __hasProp = {}.hasOwnProperty;

        function BaseConstructor() {
          this.constructor = ChildClass;
        }

        for (var key in SuperClass) {
          if (__hasProp.call(SuperClass, key)) {
            ChildClass[key] = SuperClass[key];
          }
        }

        BaseConstructor.prototype = SuperClass.prototype;
        ChildClass.prototype = new BaseConstructor();
        ChildClass.__super__ = SuperClass.prototype;

        return ChildClass;
      };

      function getMethods(theClass) {
        var proto = theClass.prototype;

        var methods = [];

        for (var methodName in proto) {
          var m = proto[methodName];

          if (typeof m !== 'function') {
            continue;
          }

          if (methodName === 'constructor') {
            continue;
          }

          methods.push(methodName);
        }

        return methods;
      }

      Utils.Decorate = function (SuperClass, DecoratorClass) {
        var decoratedMethods = getMethods(DecoratorClass);
        var superMethods = getMethods(SuperClass);

        function DecoratedClass() {
          var unshift = Array.prototype.unshift;

          var argCount = DecoratorClass.prototype.constructor.length;

          var calledConstructor = SuperClass.prototype.constructor;

          if (argCount > 0) {
            unshift.call(arguments, SuperClass.prototype.constructor);

            calledConstructor = DecoratorClass.prototype.constructor;
          }

          calledConstructor.apply(this, arguments);
        }

        DecoratorClass.displayName = SuperClass.displayName;

        function ctr() {
          this.constructor = DecoratedClass;
        }

        DecoratedClass.prototype = new ctr();

        for (var m = 0; m < superMethods.length; m++) {
          var superMethod = superMethods[m];

          DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod];
        }

        var calledMethod = function calledMethod(methodName) {
          // Stub out the original method if it's not decorating an actual method
          var originalMethod = function originalMethod() {};

          if (methodName in DecoratedClass.prototype) {
            originalMethod = DecoratedClass.prototype[methodName];
          }

          var decoratedMethod = DecoratorClass.prototype[methodName];

          return function () {
            var unshift = Array.prototype.unshift;

            unshift.call(arguments, originalMethod);

            return decoratedMethod.apply(this, arguments);
          };
        };

        for (var d = 0; d < decoratedMethods.length; d++) {
          var decoratedMethod = decoratedMethods[d];

          DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
        }

        return DecoratedClass;
      };

      var Observable = function Observable() {
        this.listeners = {};
      };

      Observable.prototype.on = function (event, callback) {
        this.listeners = this.listeners || {};

        if (event in this.listeners) {
          this.listeners[event].push(callback);
        } else {
          this.listeners[event] = [callback];
        }
      };

      Observable.prototype.trigger = function (event) {
        var slice = Array.prototype.slice;
        var params = slice.call(arguments, 1);

        this.listeners = this.listeners || {};

        // Params should always come in as an array
        if (params == null) {
          params = [];
        }

        // If there are no arguments to the event, use a temporary object
        if (params.length === 0) {
          params.push({});
        }

        // Set the `_type` of the first object to the event
        params[0]._type = event;

        if (event in this.listeners) {
          this.invoke(this.listeners[event], slice.call(arguments, 1));
        }

        if ('*' in this.listeners) {
          this.invoke(this.listeners['*'], arguments);
        }
      };

      Observable.prototype.invoke = function (listeners, params) {
        for (var i = 0, len = listeners.length; i < len; i++) {
          listeners[i].apply(this, params);
        }
      };

      Utils.Observable = Observable;

      Utils.generateChars = function (length) {
        var chars = '';

        for (var i = 0; i < length; i++) {
          var randomChar = Math.floor(Math.random() * 36);
          chars += randomChar.toString(36);
        }

        return chars;
      };

      Utils.bind = function (func, context) {
        return function () {
          func.apply(context, arguments);
        };
      };

      Utils._convertData = function (data) {
        for (var originalKey in data) {
          var keys = originalKey.split('-');

          var dataLevel = data;

          if (keys.length === 1) {
            continue;
          }

          for (var k = 0; k < keys.length; k++) {
            var key = keys[k];

            // Lowercase the first letter
            // By default, dash-separated becomes camelCase
            key = key.substring(0, 1).toLowerCase() + key.substring(1);

            if (!(key in dataLevel)) {
              dataLevel[key] = {};
            }

            if (k == keys.length - 1) {
              dataLevel[key] = data[originalKey];
            }

            dataLevel = dataLevel[key];
          }

          delete data[originalKey];
        }

        return data;
      };

      Utils.hasScroll = function (index, el) {
        // Adapted from the function created by @ShadowScripter
        // and adapted by @BillBarry on the Stack Exchange Code Review website.
        // The original code can be found at
        // http://codereview.stackexchange.com/q/13338
        // and was designed to be used with the Sizzle selector engine.

        var $el = $(el);
        var overflowX = el.style.overflowX;
        var overflowY = el.style.overflowY;

        //Check both x and y declarations
        if (overflowX === overflowY && (overflowY === 'hidden' || overflowY === 'visible')) {
          return false;
        }

        if (overflowX === 'scroll' || overflowY === 'scroll') {
          return true;
        }

        return $el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth;
      };

      Utils.escapeMarkup = function (markup) {
        var replaceMap = {
          '\\': '&#92;',
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#39;',
          '/': '&#47;'
        };

        // Do not try to escape the markup if it's not a string
        if (typeof markup !== 'string') {
          return markup;
        }

        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
          return replaceMap[match];
        });
      };

      // Append an array of jQuery nodes to a given element.
      Utils.appendMany = function ($element, $nodes) {
        // jQuery 1.7.x does not support $.fn.append() with an array
        // Fall back to a jQuery object collection using $.fn.add()
        if ($.fn.jquery.substr(0, 3) === '1.7') {
          var $jqNodes = $();

          $.map($nodes, function (node) {
            $jqNodes = $jqNodes.add(node);
          });

          $nodes = $jqNodes;
        }

        $element.append($nodes);
      };

      return Utils;
    });

    S2.define('select2/results', ['jquery', './utils'], function ($, Utils) {
      function Results($element, options, dataAdapter) {
        this.$element = $element;
        this.data = dataAdapter;
        this.options = options;

        Results.__super__.constructor.call(this);
      }

      Utils.Extend(Results, Utils.Observable);

      Results.prototype.render = function () {
        var $results = $('<ul class="select2-results__options" role="tree"></ul>');

        if (this.options.get('multiple')) {
          $results.attr('aria-multiselectable', 'true');
        }

        this.$results = $results;

        return $results;
      };

      Results.prototype.clear = function () {
        this.$results.empty();
      };

      Results.prototype.displayMessage = function (params) {
        var escapeMarkup = this.options.get('escapeMarkup');

        this.clear();
        this.hideLoading();

        var $message = $('<li role="treeitem" aria-live="assertive"' + ' class="select2-results__option"></li>');

        var message = this.options.get('translations').get(params.message);

        $message.append(escapeMarkup(message(params.args)));

        $message[0].className += ' select2-results__message';

        this.$results.append($message);
      };

      Results.prototype.hideMessages = function () {
        this.$results.find('.select2-results__message').remove();
      };

      Results.prototype.append = function (data) {
        this.hideLoading();

        var $options = [];

        if (data.results == null || data.results.length === 0) {
          if (this.$results.children().length === 0) {
            this.trigger('results:message', {
              message: 'noResults'
            });
          }

          return;
        }

        data.results = this.sort(data.results);

        for (var d = 0; d < data.results.length; d++) {
          var item = data.results[d];

          var $option = this.option(item);

          $options.push($option);
        }

        this.$results.append($options);
      };

      Results.prototype.position = function ($results, $dropdown) {
        var $resultsContainer = $dropdown.find('.select2-results');
        $resultsContainer.append($results);
      };

      Results.prototype.sort = function (data) {
        var sorter = this.options.get('sorter');

        return sorter(data);
      };

      Results.prototype.highlightFirstItem = function () {
        var $options = this.$results.find('.select2-results__option[aria-selected]');

        var $selected = $options.filter('[aria-selected=true]');

        // Check if there are any selected options
        if ($selected.length > 0) {
          // If there are selected options, highlight the first
          $selected.first().trigger('mouseenter');
        } else {
          // If there are no selected options, highlight the first option
          // in the dropdown
          $options.first().trigger('mouseenter');
        }

        this.ensureHighlightVisible();
      };

      Results.prototype.setClasses = function () {
        var self = this;

        this.data.current(function (selected) {
          var selectedIds = $.map(selected, function (s) {
            return s.id.toString();
          });

          var $options = self.$results.find('.select2-results__option[aria-selected]');

          $options.each(function () {
            var $option = $(this);

            var item = $.data(this, 'data');

            // id needs to be converted to a string when comparing
            var id = '' + item.id;

            if (item.element != null && item.element.selected || item.element == null && $.inArray(id, selectedIds) > -1) {
              $option.attr('aria-selected', 'true');
            } else {
              $option.attr('aria-selected', 'false');
            }
          });
        });
      };

      Results.prototype.showLoading = function (params) {
        this.hideLoading();

        var loadingMore = this.options.get('translations').get('searching');

        var loading = {
          disabled: true,
          loading: true,
          text: loadingMore(params)
        };
        var $loading = this.option(loading);
        $loading.className += ' loading-results';

        this.$results.prepend($loading);
      };

      Results.prototype.hideLoading = function () {
        this.$results.find('.loading-results').remove();
      };

      Results.prototype.option = function (data) {
        var option = document.createElement('li');
        option.className = 'select2-results__option';

        var attrs = {
          'role': 'treeitem',
          'aria-selected': 'false'
        };

        if (data.disabled) {
          delete attrs['aria-selected'];
          attrs['aria-disabled'] = 'true';
        }

        if (data.id == null) {
          delete attrs['aria-selected'];
        }

        if (data._resultId != null) {
          option.id = data._resultId;
        }

        if (data.title) {
          option.title = data.title;
        }

        if (data.children) {
          attrs.role = 'group';
          attrs['aria-label'] = data.text;
          delete attrs['aria-selected'];
        }

        for (var attr in attrs) {
          var val = attrs[attr];

          option.setAttribute(attr, val);
        }

        if (data.children) {
          var $option = $(option);

          var label = document.createElement('strong');
          label.className = 'select2-results__group';

          var $label = $(label);
          this.template(data, label);

          var $children = [];

          for (var c = 0; c < data.children.length; c++) {
            var child = data.children[c];

            var $child = this.option(child);

            $children.push($child);
          }

          var $childrenContainer = $('<ul></ul>', {
            'class': 'select2-results__options select2-results__options--nested'
          });

          $childrenContainer.append($children);

          $option.append(label);
          $option.append($childrenContainer);
        } else {
          this.template(data, option);
        }

        $.data(option, 'data', data);

        return option;
      };

      Results.prototype.bind = function (container, $container) {
        var self = this;

        var id = container.id + '-results';

        this.$results.attr('id', id);

        container.on('results:all', function (params) {
          self.clear();
          self.append(params.data);

          if (container.isOpen()) {
            self.setClasses();
            self.highlightFirstItem();
          }
        });

        container.on('results:append', function (params) {
          self.append(params.data);

          if (container.isOpen()) {
            self.setClasses();
          }
        });

        container.on('query', function (params) {
          self.hideMessages();
          self.showLoading(params);
        });

        container.on('select', function () {
          if (!container.isOpen()) {
            return;
          }

          self.setClasses();
          self.highlightFirstItem();
        });

        container.on('unselect', function () {
          if (!container.isOpen()) {
            return;
          }

          self.setClasses();
          self.highlightFirstItem();
        });

        container.on('open', function () {
          // When the dropdown is open, aria-expended="true"
          self.$results.attr('aria-expanded', 'true');
          self.$results.attr('aria-hidden', 'false');

          self.setClasses();
          self.ensureHighlightVisible();
        });

        container.on('close', function () {
          // When the dropdown is closed, aria-expended="false"
          self.$results.attr('aria-expanded', 'false');
          self.$results.attr('aria-hidden', 'true');
          self.$results.removeAttr('aria-activedescendant');
        });

        container.on('results:toggle', function () {
          var $highlighted = self.getHighlightedResults();

          if ($highlighted.length === 0) {
            return;
          }

          $highlighted.trigger('mouseup');
        });

        container.on('results:select', function () {
          var $highlighted = self.getHighlightedResults();

          if ($highlighted.length === 0) {
            return;
          }

          var data = $highlighted.data('data');

          if ($highlighted.attr('aria-selected') == 'true') {
            self.trigger('close', {});
          } else {
            self.trigger('select', {
              data: data
            });
          }
        });

        container.on('results:previous', function () {
          var $highlighted = self.getHighlightedResults();

          var $options = self.$results.find('[aria-selected]');

          var currentIndex = $options.index($highlighted);

          // If we are already at te top, don't move further
          if (currentIndex === 0) {
            return;
          }

          var nextIndex = currentIndex - 1;

          // If none are highlighted, highlight the first
          if ($highlighted.length === 0) {
            nextIndex = 0;
          }

          var $next = $options.eq(nextIndex);

          $next.trigger('mouseenter');

          var currentOffset = self.$results.offset().top;
          var nextTop = $next.offset().top;
          var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextTop - currentOffset < 0) {
            self.$results.scrollTop(nextOffset);
          }
        });

        container.on('results:next', function () {
          var $highlighted = self.getHighlightedResults();

          var $options = self.$results.find('[aria-selected]');

          var currentIndex = $options.index($highlighted);

          var nextIndex = currentIndex + 1;

          // If we are at the last option, stay there
          if (nextIndex >= $options.length) {
            return;
          }

          var $next = $options.eq(nextIndex);

          $next.trigger('mouseenter');

          var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
          var nextBottom = $next.offset().top + $next.outerHeight(false);
          var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextBottom > currentOffset) {
            self.$results.scrollTop(nextOffset);
          }
        });

        container.on('results:focus', function (params) {
          params.element.addClass('select2-results__option--highlighted');
        });

        container.on('results:message', function (params) {
          self.displayMessage(params);
        });

        if ($.fn.mousewheel) {
          this.$results.on('mousewheel', function (e) {
            var top = self.$results.scrollTop();

            var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

            var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
            var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

            if (isAtTop) {
              self.$results.scrollTop(0);

              e.preventDefault();
              e.stopPropagation();
            } else if (isAtBottom) {
              self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height());

              e.preventDefault();
              e.stopPropagation();
            }
          });
        }

        this.$results.on('mouseup', '.select2-results__option[aria-selected]', function (evt) {
          var $this = $(this);

          var data = $this.data('data');

          if ($this.attr('aria-selected') === 'true') {
            if (self.options.get('multiple')) {
              self.trigger('unselect', {
                originalEvent: evt,
                data: data
              });
            } else {
              self.trigger('close', {});
            }

            return;
          }

          self.trigger('select', {
            originalEvent: evt,
            data: data
          });
        });

        this.$results.on('mouseenter', '.select2-results__option[aria-selected]', function (evt) {
          var data = $(this).data('data');

          self.getHighlightedResults().removeClass('select2-results__option--highlighted');

          self.trigger('results:focus', {
            data: data,
            element: $(this)
          });
        });
      };

      Results.prototype.getHighlightedResults = function () {
        var $highlighted = this.$results.find('.select2-results__option--highlighted');

        return $highlighted;
      };

      Results.prototype.destroy = function () {
        this.$results.remove();
      };

      Results.prototype.ensureHighlightVisible = function () {
        var $highlighted = this.getHighlightedResults();

        if ($highlighted.length === 0) {
          return;
        }

        var $options = this.$results.find('[aria-selected]');

        var currentIndex = $options.index($highlighted);

        var currentOffset = this.$results.offset().top;
        var nextTop = $highlighted.offset().top;
        var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

        var offsetDelta = nextTop - currentOffset;
        nextOffset -= $highlighted.outerHeight(false) * 2;

        if (currentIndex <= 2) {
          this.$results.scrollTop(0);
        } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
          this.$results.scrollTop(nextOffset);
        }
      };

      Results.prototype.template = function (result, container) {
        var template = this.options.get('templateResult');
        var escapeMarkup = this.options.get('escapeMarkup');

        var content = template(result, container);

        if (content == null) {
          container.style.display = 'none';
        } else if (typeof content === 'string') {
          container.innerHTML = escapeMarkup(content);
        } else {
          $(container).append(content);
        }
      };

      return Results;
    });

    S2.define('select2/keys', [], function () {
      var KEYS = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };

      return KEYS;
    });

    S2.define('select2/selection/base', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function BaseSelection($element, options) {
        this.$element = $element;
        this.options = options;

        BaseSelection.__super__.constructor.call(this);
      }

      Utils.Extend(BaseSelection, Utils.Observable);

      BaseSelection.prototype.render = function () {
        var $selection = $('<span class="select2-selection" role="combobox" ' + ' aria-haspopup="true" aria-expanded="false">' + '</span>');

        this._tabindex = 0;

        if (this.$element.data('old-tabindex') != null) {
          this._tabindex = this.$element.data('old-tabindex');
        } else if (this.$element.attr('tabindex') != null) {
          this._tabindex = this.$element.attr('tabindex');
        }

        $selection.attr('title', this.$element.attr('title'));
        $selection.attr('tabindex', this._tabindex);

        this.$selection = $selection;

        return $selection;
      };

      BaseSelection.prototype.bind = function (container, $container) {
        var self = this;

        var id = container.id + '-container';
        var resultsId = container.id + '-results';

        this.container = container;

        this.$selection.on('focus', function (evt) {
          self.trigger('focus', evt);
        });

        this.$selection.on('blur', function (evt) {
          self._handleBlur(evt);
        });

        this.$selection.on('keydown', function (evt) {
          self.trigger('keypress', evt);

          if (evt.which === KEYS.SPACE) {
            evt.preventDefault();
          }
        });

        container.on('results:focus', function (params) {
          self.$selection.attr('aria-activedescendant', params.data._resultId);
        });

        container.on('selection:update', function (params) {
          self.update(params.data);
        });

        container.on('open', function () {
          // When the dropdown is open, aria-expanded="true"
          self.$selection.attr('aria-expanded', 'true');
          self.$selection.attr('aria-owns', resultsId);

          self._attachCloseHandler(container);
        });

        container.on('close', function () {
          // When the dropdown is closed, aria-expanded="false"
          self.$selection.attr('aria-expanded', 'false');
          self.$selection.removeAttr('aria-activedescendant');
          self.$selection.removeAttr('aria-owns');

          self.$selection.focus();

          self._detachCloseHandler(container);
        });

        container.on('enable', function () {
          self.$selection.attr('tabindex', self._tabindex);
        });

        container.on('disable', function () {
          self.$selection.attr('tabindex', '-1');
        });
      };

      BaseSelection.prototype._handleBlur = function (evt) {
        var self = this;

        // This needs to be delayed as the active element is the body when the tab
        // key is pressed, possibly along with others.
        window.setTimeout(function () {
          // Don't trigger `blur` if the focus is still in the selection
          if (document.activeElement == self.$selection[0] || $.contains(self.$selection[0], document.activeElement)) {
            return;
          }

          self.trigger('blur', evt);
        }, 1);
      };

      BaseSelection.prototype._attachCloseHandler = function (container) {
        var self = this;

        $(document.body).on('mousedown.select2.' + container.id, function (e) {
          var $target = $(e.target);

          var $select = $target.closest('.select2');

          var $all = $('.select2.select2-container--open');

          $all.each(function () {
            var $this = $(this);

            if (this == $select[0]) {
              return;
            }

            var $element = $this.data('element');

            $element.select2('close');
          });
        });
      };

      BaseSelection.prototype._detachCloseHandler = function (container) {
        $(document.body).off('mousedown.select2.' + container.id);
      };

      BaseSelection.prototype.position = function ($selection, $container) {
        var $selectionContainer = $container.find('.selection');
        $selectionContainer.append($selection);
      };

      BaseSelection.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      };

      BaseSelection.prototype.update = function (data) {
        throw new Error('The `update` method must be defined in child classes.');
      };

      return BaseSelection;
    });

    S2.define('select2/selection/single', ['jquery', './base', '../utils', '../keys'], function ($, BaseSelection, Utils, KEYS) {
      function SingleSelection() {
        SingleSelection.__super__.constructor.apply(this, arguments);
      }

      Utils.Extend(SingleSelection, BaseSelection);

      SingleSelection.prototype.render = function () {
        var $selection = SingleSelection.__super__.render.call(this);

        $selection.addClass('select2-selection--single');

        $selection.html('<span class="select2-selection__rendered"></span>' + '<span class="select2-selection__arrow" role="presentation">' + '<b role="presentation"></b>' + '</span>');

        return $selection;
      };

      SingleSelection.prototype.bind = function (container, $container) {
        var self = this;

        SingleSelection.__super__.bind.apply(this, arguments);

        var id = container.id + '-container';

        this.$selection.find('.select2-selection__rendered').attr('id', id);
        this.$selection.attr('aria-labelledby', id);

        this.$selection.on('mousedown', function (evt) {
          // Only respond to left clicks
          if (evt.which !== 1) {
            return;
          }

          self.trigger('toggle', {
            originalEvent: evt
          });
        });

        this.$selection.on('focus', function (evt) {
          // User focuses on the container
        });

        this.$selection.on('blur', function (evt) {
          // User exits the container
        });

        container.on('focus', function (evt) {
          if (!container.isOpen()) {
            self.$selection.focus();
          }
        });

        container.on('selection:update', function (params) {
          self.update(params.data);
        });
      };

      SingleSelection.prototype.clear = function () {
        this.$selection.find('.select2-selection__rendered').empty();
      };

      SingleSelection.prototype.display = function (data, container) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');

        return escapeMarkup(template(data, container));
      };

      SingleSelection.prototype.selectionContainer = function () {
        return $('<span></span>');
      };

      SingleSelection.prototype.update = function (data) {
        if (data.length === 0) {
          this.clear();
          return;
        }

        var selection = data[0];

        var $rendered = this.$selection.find('.select2-selection__rendered');
        var formatted = this.display(selection, $rendered);

        $rendered.empty().append(formatted);
        $rendered.prop('title', selection.title || selection.text);
      };

      return SingleSelection;
    });

    S2.define('select2/selection/multiple', ['jquery', './base', '../utils'], function ($, BaseSelection, Utils) {
      function MultipleSelection($element, options) {
        MultipleSelection.__super__.constructor.apply(this, arguments);
      }

      Utils.Extend(MultipleSelection, BaseSelection);

      MultipleSelection.prototype.render = function () {
        var $selection = MultipleSelection.__super__.render.call(this);

        $selection.addClass('select2-selection--multiple');

        $selection.html('<ul class="select2-selection__rendered"></ul>');

        return $selection;
      };

      MultipleSelection.prototype.bind = function (container, $container) {
        var self = this;

        MultipleSelection.__super__.bind.apply(this, arguments);

        this.$selection.on('click', function (evt) {
          self.trigger('toggle', {
            originalEvent: evt
          });
        });

        this.$selection.on('click', '.select2-selection__choice__remove', function (evt) {
          // Ignore the event if it is disabled
          if (self.options.get('disabled')) {
            return;
          }

          var $remove = $(this);
          var $selection = $remove.parent();

          var data = $selection.data('data');

          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        });
      };

      MultipleSelection.prototype.clear = function () {
        this.$selection.find('.select2-selection__rendered').empty();
      };

      MultipleSelection.prototype.display = function (data, container) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');

        return escapeMarkup(template(data, container));
      };

      MultipleSelection.prototype.selectionContainer = function () {
        var $container = $('<li class="select2-selection__choice">' + '<span class="select2-selection__choice__remove" role="presentation">' + '&times;' + '</span>' + '</li>');

        return $container;
      };

      MultipleSelection.prototype.update = function (data) {
        this.clear();

        if (data.length === 0) {
          return;
        }

        var $selections = [];

        for (var d = 0; d < data.length; d++) {
          var selection = data[d];

          var $selection = this.selectionContainer();
          var formatted = this.display(selection, $selection);

          $selection.append(formatted);
          $selection.prop('title', selection.title || selection.text);

          $selection.data('data', selection);

          $selections.push($selection);
        }

        var $rendered = this.$selection.find('.select2-selection__rendered');

        Utils.appendMany($rendered, $selections);
      };

      return MultipleSelection;
    });

    S2.define('select2/selection/placeholder', ['../utils'], function (Utils) {
      function Placeholder(decorated, $element, options) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

        decorated.call(this, $element, options);
      }

      Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }

        return placeholder;
      };

      Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
        var $placeholder = this.selectionContainer();

        $placeholder.html(this.display(placeholder));
        $placeholder.addClass('select2-selection__placeholder').removeClass('select2-selection__choice');

        return $placeholder;
      };

      Placeholder.prototype.update = function (decorated, data) {
        var singlePlaceholder = data.length == 1 && data[0].id != this.placeholder.id;
        var multipleSelections = data.length > 1;

        if (multipleSelections || singlePlaceholder) {
          return decorated.call(this, data);
        }

        this.clear();

        var $placeholder = this.createPlaceholder(this.placeholder);

        this.$selection.find('.select2-selection__rendered').append($placeholder);
      };

      return Placeholder;
    });

    S2.define('select2/selection/allowClear', ['jquery', '../keys'], function ($, KEYS) {
      function AllowClear() {}

      AllowClear.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        if (this.placeholder == null) {
          if (this.options.get('debug') && window.console && console.error) {
            console.error('Select2: The `allowClear` option should be used in combination ' + 'with the `placeholder` option.');
          }
        }

        this.$selection.on('mousedown', '.select2-selection__clear', function (evt) {
          self._handleClear(evt);
        });

        container.on('keypress', function (evt) {
          self._handleKeyboardClear(evt, container);
        });
      };

      AllowClear.prototype._handleClear = function (_, evt) {
        // Ignore the event if it is disabled
        if (this.options.get('disabled')) {
          return;
        }

        var $clear = this.$selection.find('.select2-selection__clear');

        // Ignore the event if nothing has been selected
        if ($clear.length === 0) {
          return;
        }

        evt.stopPropagation();

        var data = $clear.data('data');

        for (var d = 0; d < data.length; d++) {
          var unselectData = {
            data: data[d]
          };

          // Trigger the `unselect` event, so people can prevent it from being
          // cleared.
          this.trigger('unselect', unselectData);

          // If the event was prevented, don't clear it out.
          if (unselectData.prevented) {
            return;
          }
        }

        this.$element.val(this.placeholder.id).trigger('change');

        this.trigger('toggle', {});
      };

      AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
        if (container.isOpen()) {
          return;
        }

        if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
          this._handleClear(evt);
        }
      };

      AllowClear.prototype.update = function (decorated, data) {
        decorated.call(this, data);

        if (this.$selection.find('.select2-selection__placeholder').length > 0 || data.length === 0) {
          return;
        }

        var $remove = $('<span class="select2-selection__clear">' + '&times;' + '</span>');
        $remove.data('data', data);

        this.$selection.find('.select2-selection__rendered').prepend($remove);
      };

      return AllowClear;
    });

    S2.define('select2/selection/search', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function Search(decorated, $element, options) {
        decorated.call(this, $element, options);
      }

      Search.prototype.render = function (decorated) {
        var $search = $('<li class="select2-search select2-search--inline">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="off"' + ' spellcheck="false" role="textbox" aria-autocomplete="list" />' + '</li>');

        this.$searchContainer = $search;
        this.$search = $search.find('input');

        var $rendered = decorated.call(this);

        this._transferTabIndex();

        return $rendered;
      };

      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        container.on('open', function () {
          self.$search.trigger('focus');
        });

        container.on('close', function () {
          self.$search.val('');
          self.$search.removeAttr('aria-activedescendant');
          self.$search.trigger('focus');
        });

        container.on('enable', function () {
          self.$search.prop('disabled', false);

          self._transferTabIndex();
        });

        container.on('disable', function () {
          self.$search.prop('disabled', true);
        });

        container.on('focus', function (evt) {
          self.$search.trigger('focus');
        });

        container.on('results:focus', function (params) {
          self.$search.attr('aria-activedescendant', params.id);
        });

        this.$selection.on('focusin', '.select2-search--inline', function (evt) {
          self.trigger('focus', evt);
        });

        this.$selection.on('focusout', '.select2-search--inline', function (evt) {
          self._handleBlur(evt);
        });

        this.$selection.on('keydown', '.select2-search--inline', function (evt) {
          evt.stopPropagation();

          self.trigger('keypress', evt);

          self._keyUpPrevented = evt.isDefaultPrevented();

          var key = evt.which;

          if (key === KEYS.BACKSPACE && self.$search.val() === '') {
            var $previousChoice = self.$searchContainer.prev('.select2-selection__choice');

            if ($previousChoice.length > 0) {
              var item = $previousChoice.data('data');

              self.searchRemoveChoice(item);

              evt.preventDefault();
            }
          }
        });

        // Try to detect the IE version should the `documentMode` property that
        // is stored on the document. This is only implemented in IE and is
        // slightly cleaner than doing a user agent check.
        // This property is not available in Edge, but Edge also doesn't have
        // this bug.
        var msie = document.documentMode;
        var disableInputEvents = msie && msie <= 11;

        // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.
        this.$selection.on('input.searchcheck', '.select2-search--inline', function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents) {
            self.$selection.off('input.search input.searchcheck');
            return;
          }

          // Unbind the duplicated `keyup` event
          self.$selection.off('keyup.search');
        });

        this.$selection.on('keyup.search input.search', '.select2-search--inline', function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents && evt.type === 'input') {
            self.$selection.off('input.search input.searchcheck');
            return;
          }

          var key = evt.which;

          // We can freely ignore events from modifier keys
          if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
            return;
          }

          // Tabbing will be handled during the `keydown` phase
          if (key == KEYS.TAB) {
            return;
          }

          self.handleSearch(evt);
        });
      };

      /**
       * This method will transfer the tabindex attribute from the rendered
       * selection to the search box. This allows for the search box to be used as
       * the primary focus instead of the selection container.
       *
       * @private
       */
      Search.prototype._transferTabIndex = function (decorated) {
        this.$search.attr('tabindex', this.$selection.attr('tabindex'));
        this.$selection.attr('tabindex', '-1');
      };

      Search.prototype.createPlaceholder = function (decorated, placeholder) {
        this.$search.attr('placeholder', placeholder.text);
      };

      Search.prototype.update = function (decorated, data) {
        var searchHadFocus = this.$search[0] == document.activeElement;

        this.$search.attr('placeholder', '');

        decorated.call(this, data);

        this.$selection.find('.select2-selection__rendered').append(this.$searchContainer);

        this.resizeSearch();
        if (searchHadFocus) {
          this.$search.focus();
        }
      };

      Search.prototype.handleSearch = function () {
        this.resizeSearch();

        if (!this._keyUpPrevented) {
          var input = this.$search.val();

          this.trigger('query', {
            term: input
          });
        }

        this._keyUpPrevented = false;
      };

      Search.prototype.searchRemoveChoice = function (decorated, item) {
        this.trigger('unselect', {
          data: item
        });

        this.$search.val(item.text);
        this.handleSearch();
      };

      Search.prototype.resizeSearch = function () {
        this.$search.css('width', '25px');

        var width = '';

        if (this.$search.attr('placeholder') !== '') {
          width = this.$selection.find('.select2-selection__rendered').innerWidth();
        } else {
          var minimumWidth = this.$search.val().length + 1;

          width = minimumWidth * 0.75 + 'em';
        }

        this.$search.css('width', width);
      };

      return Search;
    });

    S2.define('select2/selection/eventRelay', ['jquery'], function ($) {
      function EventRelay() {}

      EventRelay.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var relayEvents = ['open', 'opening', 'close', 'closing', 'select', 'selecting', 'unselect', 'unselecting'];

        var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

        decorated.call(this, container, $container);

        container.on('*', function (name, params) {
          // Ignore events that should not be relayed
          if ($.inArray(name, relayEvents) === -1) {
            return;
          }

          // The parameters should always be an object
          params = params || {};

          // Generate the jQuery event for the Select2 event
          var evt = $.Event('select2:' + name, {
            params: params
          });

          self.$element.trigger(evt);

          // Only handle preventable events if it was one
          if ($.inArray(name, preventableEvents) === -1) {
            return;
          }

          params.prevented = evt.isDefaultPrevented();
        });
      };

      return EventRelay;
    });

    S2.define('select2/translation', ['jquery', 'require'], function ($, require) {
      function Translation(dict) {
        this.dict = dict || {};
      }

      Translation.prototype.all = function () {
        return this.dict;
      };

      Translation.prototype.get = function (key) {
        return this.dict[key];
      };

      Translation.prototype.extend = function (translation) {
        this.dict = $.extend({}, translation.all(), this.dict);
      };

      // Static functions

      Translation._cache = {};

      Translation.loadPath = function (path) {
        if (!(path in Translation._cache)) {
          var translations = require(path);

          Translation._cache[path] = translations;
        }

        return new Translation(Translation._cache[path]);
      };

      return Translation;
    });

    S2.define('select2/diacritics', [], function () {
      var diacritics = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\xC0': 'A',
        '\xC1': 'A',
        '\xC2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\xC3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\xC4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\xC5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\xC6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\xC7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\xC8': 'E',
        '\xC9': 'E',
        '\xCA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\xCB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\xCC': 'I',
        '\xCD': 'I',
        '\xCE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\xCF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\xD1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\xD2': 'O',
        '\xD3': 'O',
        '\xD4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\xD5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\xD6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\xD8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\xD9': 'U',
        '\xDA': 'U',
        '\xDB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\xDC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\xDD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\xE0': 'a',
        '\xE1': 'a',
        '\xE2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\xE3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\xE4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\xE5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\xE6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\xE7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\xE8': 'e',
        '\xE9': 'e',
        '\xEA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\xEB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\xEC': 'i',
        '\xED': 'i',
        '\xEE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\xEF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\xF1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\xF2': 'o',
        '\xF3': 'o',
        '\xF4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\xF5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\xF6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\xF8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\xDF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\xF9': 'u',
        '\xFA': 'u',
        '\xFB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\xFC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\xFD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\xFF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
      };

      return diacritics;
    });

    S2.define('select2/data/base', ['../utils'], function (Utils) {
      function BaseAdapter($element, options) {
        BaseAdapter.__super__.constructor.call(this);
      }

      Utils.Extend(BaseAdapter, Utils.Observable);

      BaseAdapter.prototype.current = function (callback) {
        throw new Error('The `current` method must be defined in child classes.');
      };

      BaseAdapter.prototype.query = function (params, callback) {
        throw new Error('The `query` method must be defined in child classes.');
      };

      BaseAdapter.prototype.bind = function (container, $container) {
        // Can be implemented in subclasses
      };

      BaseAdapter.prototype.destroy = function () {
        // Can be implemented in subclasses
      };

      BaseAdapter.prototype.generateResultId = function (container, data) {
        var id = container.id + '-result-';

        id += Utils.generateChars(4);

        if (data.id != null) {
          id += '-' + data.id.toString();
        } else {
          id += '-' + Utils.generateChars(4);
        }
        return id;
      };

      return BaseAdapter;
    });

    S2.define('select2/data/select', ['./base', '../utils', 'jquery'], function (BaseAdapter, Utils, $) {
      function SelectAdapter($element, options) {
        this.$element = $element;
        this.options = options;

        SelectAdapter.__super__.constructor.call(this);
      }

      Utils.Extend(SelectAdapter, BaseAdapter);

      SelectAdapter.prototype.current = function (callback) {
        var data = [];
        var self = this;

        this.$element.find(':selected').each(function () {
          var $option = $(this);

          var option = self.item($option);

          data.push(option);
        });

        callback(data);
      };

      SelectAdapter.prototype.select = function (data) {
        var self = this;

        data.selected = true;

        // If data.element is a DOM node, use it instead
        if ($(data.element).is('option')) {
          data.element.selected = true;

          this.$element.trigger('change');

          return;
        }

        if (this.$element.prop('multiple')) {
          this.current(function (currentData) {
            var val = [];

            data = [data];
            data.push.apply(data, currentData);

            for (var d = 0; d < data.length; d++) {
              var id = data[d].id;

              if ($.inArray(id, val) === -1) {
                val.push(id);
              }
            }

            self.$element.val(val);
            self.$element.trigger('change');
          });
        } else {
          var val = data.id;

          this.$element.val(val);
          this.$element.trigger('change');
        }
      };

      SelectAdapter.prototype.unselect = function (data) {
        var self = this;

        if (!this.$element.prop('multiple')) {
          return;
        }

        data.selected = false;

        if ($(data.element).is('option')) {
          data.element.selected = false;

          this.$element.trigger('change');

          return;
        }

        this.current(function (currentData) {
          var val = [];

          for (var d = 0; d < currentData.length; d++) {
            var id = currentData[d].id;

            if (id !== data.id && $.inArray(id, val) === -1) {
              val.push(id);
            }
          }

          self.$element.val(val);

          self.$element.trigger('change');
        });
      };

      SelectAdapter.prototype.bind = function (container, $container) {
        var self = this;

        this.container = container;

        container.on('select', function (params) {
          self.select(params.data);
        });

        container.on('unselect', function (params) {
          self.unselect(params.data);
        });
      };

      SelectAdapter.prototype.destroy = function () {
        // Remove anything added to child elements
        this.$element.find('*').each(function () {
          // Remove any custom data set by Select2
          $.removeData(this, 'data');
        });
      };

      SelectAdapter.prototype.query = function (params, callback) {
        var data = [];
        var self = this;

        var $options = this.$element.children();

        $options.each(function () {
          var $option = $(this);

          if (!$option.is('option') && !$option.is('optgroup')) {
            return;
          }

          var option = self.item($option);

          var matches = self.matches(params, option);

          if (matches !== null) {
            data.push(matches);
          }
        });

        callback({
          results: data
        });
      };

      SelectAdapter.prototype.addOptions = function ($options) {
        Utils.appendMany(this.$element, $options);
      };

      SelectAdapter.prototype.option = function (data) {
        var option;

        if (data.children) {
          option = document.createElement('optgroup');
          option.label = data.text;
        } else {
          option = document.createElement('option');

          if (option.textContent !== undefined) {
            option.textContent = data.text;
          } else {
            option.innerText = data.text;
          }
        }

        if (data.id) {
          option.value = data.id;
        }

        if (data.disabled) {
          option.disabled = true;
        }

        if (data.selected) {
          option.selected = true;
        }

        if (data.title) {
          option.title = data.title;
        }

        var $option = $(option);

        var normalizedData = this._normalizeItem(data);
        normalizedData.element = option;

        // Override the option's data with the combined data
        $.data(option, 'data', normalizedData);

        return $option;
      };

      SelectAdapter.prototype.item = function ($option) {
        var data = {};

        data = $.data($option[0], 'data');

        if (data != null) {
          return data;
        }

        if ($option.is('option')) {
          data = {
            id: $option.val(),
            text: $option.text(),
            disabled: $option.prop('disabled'),
            selected: $option.prop('selected'),
            title: $option.prop('title')
          };
        } else if ($option.is('optgroup')) {
          data = {
            text: $option.prop('label'),
            children: [],
            title: $option.prop('title')
          };

          var $children = $option.children('option');
          var children = [];

          for (var c = 0; c < $children.length; c++) {
            var $child = $($children[c]);

            var child = this.item($child);

            children.push(child);
          }

          data.children = children;
        }

        data = this._normalizeItem(data);
        data.element = $option[0];

        $.data($option[0], 'data', data);

        return data;
      };

      SelectAdapter.prototype._normalizeItem = function (item) {
        if (!$.isPlainObject(item)) {
          item = {
            id: item,
            text: item
          };
        }

        item = $.extend({}, {
          text: ''
        }, item);

        var defaults = {
          selected: false,
          disabled: false
        };

        if (item.id != null) {
          item.id = item.id.toString();
        }

        if (item.text != null) {
          item.text = item.text.toString();
        }

        if (item._resultId == null && item.id && this.container != null) {
          item._resultId = this.generateResultId(this.container, item);
        }

        return $.extend({}, defaults, item);
      };

      SelectAdapter.prototype.matches = function (params, data) {
        var matcher = this.options.get('matcher');

        return matcher(params, data);
      };

      return SelectAdapter;
    });

    S2.define('select2/data/array', ['./select', '../utils', 'jquery'], function (SelectAdapter, Utils, $) {
      function ArrayAdapter($element, options) {
        var data = options.get('data') || [];

        ArrayAdapter.__super__.constructor.call(this, $element, options);

        this.addOptions(this.convertToOptions(data));
      }

      Utils.Extend(ArrayAdapter, SelectAdapter);

      ArrayAdapter.prototype.select = function (data) {
        var $option = this.$element.find('option').filter(function (i, elm) {
          return elm.value == data.id.toString();
        });

        if ($option.length === 0) {
          $option = this.option(data);

          this.addOptions($option);
        }

        ArrayAdapter.__super__.select.call(this, data);
      };

      ArrayAdapter.prototype.convertToOptions = function (data) {
        var self = this;

        var $existing = this.$element.find('option');
        var existingIds = $existing.map(function () {
          return self.item($(this)).id;
        }).get();

        var $options = [];

        // Filter out all items except for the one passed in the argument
        function onlyItem(item) {
          return function () {
            return $(this).val() == item.id;
          };
        }

        for (var d = 0; d < data.length; d++) {
          var item = this._normalizeItem(data[d]);

          // Skip items which were pre-loaded, only merge the data
          if ($.inArray(item.id, existingIds) >= 0) {
            var $existingOption = $existing.filter(onlyItem(item));

            var existingData = this.item($existingOption);
            var newData = $.extend(true, {}, item, existingData);

            var $newOption = this.option(newData);

            $existingOption.replaceWith($newOption);

            continue;
          }

          var $option = this.option(item);

          if (item.children) {
            var $children = this.convertToOptions(item.children);

            Utils.appendMany($option, $children);
          }

          $options.push($option);
        }

        return $options;
      };

      return ArrayAdapter;
    });

    S2.define('select2/data/ajax', ['./array', '../utils', 'jquery'], function (ArrayAdapter, Utils, $) {
      function AjaxAdapter($element, options) {
        this.ajaxOptions = this._applyDefaults(options.get('ajax'));

        if (this.ajaxOptions.processResults != null) {
          this.processResults = this.ajaxOptions.processResults;
        }

        AjaxAdapter.__super__.constructor.call(this, $element, options);
      }

      Utils.Extend(AjaxAdapter, ArrayAdapter);

      AjaxAdapter.prototype._applyDefaults = function (options) {
        var defaults = {
          data: function data(params) {
            return $.extend({}, params, {
              q: params.term
            });
          },
          transport: function transport(params, success, failure) {
            var $request = $.ajax(params);

            $request.then(success);
            $request.fail(failure);

            return $request;
          }
        };

        return $.extend({}, defaults, options, true);
      };

      AjaxAdapter.prototype.processResults = function (results) {
        return results;
      };

      AjaxAdapter.prototype.query = function (params, callback) {
        var matches = [];
        var self = this;

        if (this._request != null) {
          // JSONP requests cannot always be aborted
          if ($.isFunction(this._request.abort)) {
            this._request.abort();
          }

          this._request = null;
        }

        var options = $.extend({
          type: 'GET'
        }, this.ajaxOptions);

        if (typeof options.url === 'function') {
          options.url = options.url.call(this.$element, params);
        }

        if (typeof options.data === 'function') {
          options.data = options.data.call(this.$element, params);
        }

        function request() {
          var $request = options.transport(options, function (data) {
            var results = self.processResults(data, params);

            if (self.options.get('debug') && window.console && console.error) {
              // Check to make sure that the response included a `results` key.
              if (!results || !results.results || !$.isArray(results.results)) {
                console.error('Select2: The AJAX results did not return an array in the ' + '`results` key of the response.');
              }
            }

            callback(results);
          }, function () {
            // Attempt to detect if a request was aborted
            // Only works if the transport exposes a status property
            if ($request.status && $request.status === '0') {
              return;
            }

            self.trigger('results:message', {
              message: 'errorLoading'
            });
          });

          self._request = $request;
        }

        if (this.ajaxOptions.delay && params.term != null) {
          if (this._queryTimeout) {
            window.clearTimeout(this._queryTimeout);
          }

          this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
        } else {
          request();
        }
      };

      return AjaxAdapter;
    });

    S2.define('select2/data/tags', ['jquery'], function ($) {
      function Tags(decorated, $element, options) {
        var tags = options.get('tags');

        var createTag = options.get('createTag');

        if (createTag !== undefined) {
          this.createTag = createTag;
        }

        var insertTag = options.get('insertTag');

        if (insertTag !== undefined) {
          this.insertTag = insertTag;
        }

        decorated.call(this, $element, options);

        if ($.isArray(tags)) {
          for (var t = 0; t < tags.length; t++) {
            var tag = tags[t];
            var item = this._normalizeItem(tag);

            var $option = this.option(item);

            this.$element.append($option);
          }
        }
      }

      Tags.prototype.query = function (decorated, params, callback) {
        var self = this;

        this._removeOldTags();

        if (params.term == null || params.page != null) {
          decorated.call(this, params, callback);
          return;
        }

        function wrapper(obj, child) {
          var data = obj.results;

          for (var i = 0; i < data.length; i++) {
            var option = data[i];

            var checkChildren = option.children != null && !wrapper({
              results: option.children
            }, true);

            var checkText = option.text === params.term;

            if (checkText || checkChildren) {
              if (child) {
                return false;
              }

              obj.data = data;
              callback(obj);

              return;
            }
          }

          if (child) {
            return true;
          }

          var tag = self.createTag(params);

          if (tag != null) {
            var $option = self.option(tag);
            $option.attr('data-select2-tag', true);

            self.addOptions([$option]);

            self.insertTag(data, tag);
          }

          obj.results = data;

          callback(obj);
        }

        decorated.call(this, params, wrapper);
      };

      Tags.prototype.createTag = function (decorated, params) {
        var term = $.trim(params.term);

        if (term === '') {
          return null;
        }

        return {
          id: term,
          text: term
        };
      };

      Tags.prototype.insertTag = function (_, data, tag) {
        data.unshift(tag);
      };

      Tags.prototype._removeOldTags = function (_) {
        var tag = this._lastTag;

        var $options = this.$element.find('option[data-select2-tag]');

        $options.each(function () {
          if (this.selected) {
            return;
          }

          $(this).remove();
        });
      };

      return Tags;
    });

    S2.define('select2/data/tokenizer', ['jquery'], function ($) {
      function Tokenizer(decorated, $element, options) {
        var tokenizer = options.get('tokenizer');

        if (tokenizer !== undefined) {
          this.tokenizer = tokenizer;
        }

        decorated.call(this, $element, options);
      }

      Tokenizer.prototype.bind = function (decorated, container, $container) {
        decorated.call(this, container, $container);

        this.$search = container.dropdown.$search || container.selection.$search || $container.find('.select2-search__field');
      };

      Tokenizer.prototype.query = function (decorated, params, callback) {
        var self = this;

        function createAndSelect(data) {
          // Normalize the data object so we can use it for checks
          var item = self._normalizeItem(data);

          // Check if the data object already exists as a tag
          // Select it if it doesn't
          var $existingOptions = self.$element.find('option').filter(function () {
            return $(this).val() === item.id;
          });

          // If an existing option wasn't found for it, create the option
          if (!$existingOptions.length) {
            var $option = self.option(item);
            $option.attr('data-select2-tag', true);

            self._removeOldTags();
            self.addOptions([$option]);
          }

          // Select the item, now that we know there is an option for it
          select(item);
        }

        function select(data) {
          self.trigger('select', {
            data: data
          });
        }

        params.term = params.term || '';

        var tokenData = this.tokenizer(params, this.options, createAndSelect);

        if (tokenData.term !== params.term) {
          // Replace the search term if we have the search box
          if (this.$search.length) {
            this.$search.val(tokenData.term);
            this.$search.focus();
          }

          params.term = tokenData.term;
        }

        decorated.call(this, params, callback);
      };

      Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
        var separators = options.get('tokenSeparators') || [];
        var term = params.term;
        var i = 0;

        var createTag = this.createTag || function (params) {
          return {
            id: params.term,
            text: params.term
          };
        };

        while (i < term.length) {
          var termChar = term[i];

          if ($.inArray(termChar, separators) === -1) {
            i++;

            continue;
          }

          var part = term.substr(0, i);
          var partParams = $.extend({}, params, {
            term: part
          });

          var data = createTag(partParams);

          if (data == null) {
            i++;
            continue;
          }

          callback(data);

          // Reset the term to not include the tokenized portion
          term = term.substr(i + 1) || '';
          i = 0;
        }

        return {
          term: term
        };
      };

      return Tokenizer;
    });

    S2.define('select2/data/minimumInputLength', [], function () {
      function MinimumInputLength(decorated, $e, options) {
        this.minimumInputLength = options.get('minimumInputLength');

        decorated.call(this, $e, options);
      }

      MinimumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';

        if (params.term.length < this.minimumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooShort',
            args: {
              minimum: this.minimumInputLength,
              input: params.term,
              params: params
            }
          });

          return;
        }

        decorated.call(this, params, callback);
      };

      return MinimumInputLength;
    });

    S2.define('select2/data/maximumInputLength', [], function () {
      function MaximumInputLength(decorated, $e, options) {
        this.maximumInputLength = options.get('maximumInputLength');

        decorated.call(this, $e, options);
      }

      MaximumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';

        if (this.maximumInputLength > 0 && params.term.length > this.maximumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooLong',
            args: {
              maximum: this.maximumInputLength,
              input: params.term,
              params: params
            }
          });

          return;
        }

        decorated.call(this, params, callback);
      };

      return MaximumInputLength;
    });

    S2.define('select2/data/maximumSelectionLength', [], function () {
      function MaximumSelectionLength(decorated, $e, options) {
        this.maximumSelectionLength = options.get('maximumSelectionLength');

        decorated.call(this, $e, options);
      }

      MaximumSelectionLength.prototype.query = function (decorated, params, callback) {
        var self = this;

        this.current(function (currentData) {
          var count = currentData != null ? currentData.length : 0;
          if (self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength) {
            self.trigger('results:message', {
              message: 'maximumSelected',
              args: {
                maximum: self.maximumSelectionLength
              }
            });
            return;
          }
          decorated.call(self, params, callback);
        });
      };

      return MaximumSelectionLength;
    });

    S2.define('select2/dropdown', ['jquery', './utils'], function ($, Utils) {
      function Dropdown($element, options) {
        this.$element = $element;
        this.options = options;

        Dropdown.__super__.constructor.call(this);
      }

      Utils.Extend(Dropdown, Utils.Observable);

      Dropdown.prototype.render = function () {
        var $dropdown = $('<span class="select2-dropdown">' + '<span class="select2-results"></span>' + '</span>');

        $dropdown.attr('dir', this.options.get('dir'));

        this.$dropdown = $dropdown;

        return $dropdown;
      };

      Dropdown.prototype.bind = function () {
        // Should be implemented in subclasses
      };

      Dropdown.prototype.position = function ($dropdown, $container) {
        // Should be implmented in subclasses
      };

      Dropdown.prototype.destroy = function () {
        // Remove the dropdown from the DOM
        this.$dropdown.remove();
      };

      return Dropdown;
    });

    S2.define('select2/dropdown/search', ['jquery', '../utils'], function ($, Utils) {
      function Search() {}

      Search.prototype.render = function (decorated) {
        var $rendered = decorated.call(this);

        var $search = $('<span class="select2-search select2-search--dropdown">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="off"' + ' spellcheck="false" role="textbox" />' + '</span>');

        this.$searchContainer = $search;
        this.$search = $search.find('input');

        $rendered.prepend($search);

        return $rendered;
      };

      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        this.$search.on('keydown', function (evt) {
          self.trigger('keypress', evt);

          self._keyUpPrevented = evt.isDefaultPrevented();
        });

        // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.
        this.$search.on('input', function (evt) {
          // Unbind the duplicated `keyup` event
          $(this).off('keyup');
        });

        this.$search.on('keyup input', function (evt) {
          self.handleSearch(evt);
        });

        container.on('open', function () {
          self.$search.attr('tabindex', 0);

          self.$search.focus();

          window.setTimeout(function () {
            self.$search.focus();
          }, 0);
        });

        container.on('close', function () {
          self.$search.attr('tabindex', -1);

          self.$search.val('');
        });

        container.on('focus', function () {
          if (container.isOpen()) {
            self.$search.focus();
          }
        });

        container.on('results:all', function (params) {
          if (params.query.term == null || params.query.term === '') {
            var showSearch = self.showSearch(params);

            if (showSearch) {
              self.$searchContainer.removeClass('select2-search--hide');
            } else {
              self.$searchContainer.addClass('select2-search--hide');
            }
          }
        });
      };

      Search.prototype.handleSearch = function (evt) {
        if (!this._keyUpPrevented) {
          var input = this.$search.val();

          this.trigger('query', {
            term: input
          });
        }

        this._keyUpPrevented = false;
      };

      Search.prototype.showSearch = function (_, params) {
        return true;
      };

      return Search;
    });

    S2.define('select2/dropdown/hidePlaceholder', [], function () {
      function HidePlaceholder(decorated, $element, options, dataAdapter) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

        decorated.call(this, $element, options, dataAdapter);
      }

      HidePlaceholder.prototype.append = function (decorated, data) {
        data.results = this.removePlaceholder(data.results);

        decorated.call(this, data);
      };

      HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }

        return placeholder;
      };

      HidePlaceholder.prototype.removePlaceholder = function (_, data) {
        var modifiedData = data.slice(0);

        for (var d = data.length - 1; d >= 0; d--) {
          var item = data[d];

          if (this.placeholder.id === item.id) {
            modifiedData.splice(d, 1);
          }
        }

        return modifiedData;
      };

      return HidePlaceholder;
    });

    S2.define('select2/dropdown/infiniteScroll', ['jquery'], function ($) {
      function InfiniteScroll(decorated, $element, options, dataAdapter) {
        this.lastParams = {};

        decorated.call(this, $element, options, dataAdapter);

        this.$loadingMore = this.createLoadingMore();
        this.loading = false;
      }

      InfiniteScroll.prototype.append = function (decorated, data) {
        this.$loadingMore.remove();
        this.loading = false;

        decorated.call(this, data);

        if (this.showLoadingMore(data)) {
          this.$results.append(this.$loadingMore);
        }
      };

      InfiniteScroll.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        container.on('query', function (params) {
          self.lastParams = params;
          self.loading = true;
        });

        container.on('query:append', function (params) {
          self.lastParams = params;
          self.loading = true;
        });

        this.$results.on('scroll', function () {
          var isLoadMoreVisible = $.contains(document.documentElement, self.$loadingMore[0]);

          if (self.loading || !isLoadMoreVisible) {
            return;
          }

          var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
          var loadingMoreOffset = self.$loadingMore.offset().top + self.$loadingMore.outerHeight(false);

          if (currentOffset + 50 >= loadingMoreOffset) {
            self.loadMore();
          }
        });
      };

      InfiniteScroll.prototype.loadMore = function () {
        this.loading = true;

        var params = $.extend({}, { page: 1 }, this.lastParams);

        params.page++;

        this.trigger('query:append', params);
      };

      InfiniteScroll.prototype.showLoadingMore = function (_, data) {
        return data.pagination && data.pagination.more;
      };

      InfiniteScroll.prototype.createLoadingMore = function () {
        var $option = $('<li ' + 'class="select2-results__option select2-results__option--load-more"' + 'role="treeitem" aria-disabled="true"></li>');

        var message = this.options.get('translations').get('loadingMore');

        $option.html(message(this.lastParams));

        return $option;
      };

      return InfiniteScroll;
    });

    S2.define('select2/dropdown/attachBody', ['jquery', '../utils'], function ($, Utils) {
      function AttachBody(decorated, $element, options) {
        this.$dropdownParent = options.get('dropdownParent') || $(document.body);

        decorated.call(this, $element, options);
      }

      AttachBody.prototype.bind = function (decorated, container, $container) {
        var self = this;

        var setupResultsEvents = false;

        decorated.call(this, container, $container);

        container.on('open', function () {
          self._showDropdown();
          self._attachPositioningHandler(container);

          if (!setupResultsEvents) {
            setupResultsEvents = true;

            container.on('results:all', function () {
              self._positionDropdown();
              self._resizeDropdown();
            });

            container.on('results:append', function () {
              self._positionDropdown();
              self._resizeDropdown();
            });
          }
        });

        container.on('close', function () {
          self._hideDropdown();
          self._detachPositioningHandler(container);
        });

        this.$dropdownContainer.on('mousedown', function (evt) {
          evt.stopPropagation();
        });
      };

      AttachBody.prototype.destroy = function (decorated) {
        decorated.call(this);

        this.$dropdownContainer.remove();
      };

      AttachBody.prototype.position = function (decorated, $dropdown, $container) {
        // Clone all of the container classes
        $dropdown.attr('class', $container.attr('class'));

        $dropdown.removeClass('select2');
        $dropdown.addClass('select2-container--open');

        $dropdown.css({
          position: 'absolute',
          top: -999999
        });

        this.$container = $container;
      };

      AttachBody.prototype.render = function (decorated) {
        var $container = $('<span></span>');

        var $dropdown = decorated.call(this);
        $container.append($dropdown);

        this.$dropdownContainer = $container;

        return $container;
      };

      AttachBody.prototype._hideDropdown = function (decorated) {
        this.$dropdownContainer.detach();
      };

      AttachBody.prototype._attachPositioningHandler = function (decorated, container) {
        var self = this;

        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;

        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.each(function () {
          $(this).data('select2-scroll-position', {
            x: $(this).scrollLeft(),
            y: $(this).scrollTop()
          });
        });

        $watchers.on(scrollEvent, function (ev) {
          var position = $(this).data('select2-scroll-position');
          $(this).scrollTop(position.y);
        });

        $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent, function (e) {
          self._positionDropdown();
          self._resizeDropdown();
        });
      };

      AttachBody.prototype._detachPositioningHandler = function (decorated, container) {
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;

        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.off(scrollEvent);

        $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
      };

      AttachBody.prototype._positionDropdown = function () {
        var $window = $(window);

        var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
        var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

        var newDirection = null;

        var offset = this.$container.offset();

        offset.bottom = offset.top + this.$container.outerHeight(false);

        var container = {
          height: this.$container.outerHeight(false)
        };

        container.top = offset.top;
        container.bottom = offset.top + container.height;

        var dropdown = {
          height: this.$dropdown.outerHeight(false)
        };

        var viewport = {
          top: $window.scrollTop(),
          bottom: $window.scrollTop() + $window.height()
        };

        var enoughRoomAbove = viewport.top < offset.top - dropdown.height;
        var enoughRoomBelow = viewport.bottom > offset.bottom + dropdown.height;

        var css = {
          left: offset.left,
          top: container.bottom
        };

        // Determine what the parent element is to use for calciulating the offset
        var $offsetParent = this.$dropdownParent;

        // For statically positoned elements, we need to get the element
        // that is determining the offset
        if ($offsetParent.css('position') === 'static') {
          $offsetParent = $offsetParent.offsetParent();
        }

        var parentOffset = $offsetParent.offset();

        css.top -= parentOffset.top;
        css.left -= parentOffset.left;

        if (!isCurrentlyAbove && !isCurrentlyBelow) {
          newDirection = 'below';
        }

        if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
          newDirection = 'above';
        } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
          newDirection = 'below';
        }

        if (newDirection == 'above' || isCurrentlyAbove && newDirection !== 'below') {
          css.top = container.top - parentOffset.top - dropdown.height;
        }

        if (newDirection != null) {
          this.$dropdown.removeClass('select2-dropdown--below select2-dropdown--above').addClass('select2-dropdown--' + newDirection);
          this.$container.removeClass('select2-container--below select2-container--above').addClass('select2-container--' + newDirection);
        }

        this.$dropdownContainer.css(css);
      };

      AttachBody.prototype._resizeDropdown = function () {
        var css = {
          width: this.$container.outerWidth(false) + 'px'
        };

        if (this.options.get('dropdownAutoWidth')) {
          css.minWidth = css.width;
          css.position = 'relative';
          css.width = 'auto';
        }

        this.$dropdown.css(css);
      };

      AttachBody.prototype._showDropdown = function (decorated) {
        this.$dropdownContainer.appendTo(this.$dropdownParent);

        this._positionDropdown();
        this._resizeDropdown();
      };

      return AttachBody;
    });

    S2.define('select2/dropdown/minimumResultsForSearch', [], function () {
      function countResults(data) {
        var count = 0;

        for (var d = 0; d < data.length; d++) {
          var item = data[d];

          if (item.children) {
            count += countResults(item.children);
          } else {
            count++;
          }
        }

        return count;
      }

      function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
        this.minimumResultsForSearch = options.get('minimumResultsForSearch');

        if (this.minimumResultsForSearch < 0) {
          this.minimumResultsForSearch = Infinity;
        }

        decorated.call(this, $element, options, dataAdapter);
      }

      MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
        if (countResults(params.data.results) < this.minimumResultsForSearch) {
          return false;
        }

        return decorated.call(this, params);
      };

      return MinimumResultsForSearch;
    });

    S2.define('select2/dropdown/selectOnClose', [], function () {
      function SelectOnClose() {}

      SelectOnClose.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        container.on('close', function (params) {
          self._handleSelectOnClose(params);
        });
      };

      SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
        if (params && params.originalSelect2Event != null) {
          var event = params.originalSelect2Event;

          // Don't select an item if the close event was triggered from a select or
          // unselect event
          if (event._type === 'select' || event._type === 'unselect') {
            return;
          }
        }

        var $highlightedResults = this.getHighlightedResults();

        // Only select highlighted results
        if ($highlightedResults.length < 1) {
          return;
        }

        var data = $highlightedResults.data('data');

        // Don't re-select already selected resulte
        if (data.element != null && data.element.selected || data.element == null && data.selected) {
          return;
        }

        this.trigger('select', {
          data: data
        });
      };

      return SelectOnClose;
    });

    S2.define('select2/dropdown/closeOnSelect', [], function () {
      function CloseOnSelect() {}

      CloseOnSelect.prototype.bind = function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        container.on('select', function (evt) {
          self._selectTriggered(evt);
        });

        container.on('unselect', function (evt) {
          self._selectTriggered(evt);
        });
      };

      CloseOnSelect.prototype._selectTriggered = function (_, evt) {
        var originalEvent = evt.originalEvent;

        // Don't close if the control key is being held
        if (originalEvent && originalEvent.ctrlKey) {
          return;
        }

        this.trigger('close', {
          originalEvent: originalEvent,
          originalSelect2Event: evt
        });
      };

      return CloseOnSelect;
    });

    S2.define('select2/i18n/en', [], function () {
      // English
      return {
        errorLoading: function errorLoading() {
          return 'The results could not be loaded.';
        },
        inputTooLong: function inputTooLong(args) {
          var overChars = args.input.length - args.maximum;

          var message = 'Please delete ' + overChars + ' character';

          if (overChars != 1) {
            message += 's';
          }

          return message;
        },
        inputTooShort: function inputTooShort(args) {
          var remainingChars = args.minimum - args.input.length;

          var message = 'Please enter ' + remainingChars + ' or more characters';

          return message;
        },
        loadingMore: function loadingMore() {
          return 'Loading more results…';
        },
        maximumSelected: function maximumSelected(args) {
          var message = 'You can only select ' + args.maximum + ' item';

          if (args.maximum != 1) {
            message += 's';
          }

          return message;
        },
        noResults: function noResults() {
          return 'No results found';
        },
        searching: function searching() {
          return 'Searching…';
        }
      };
    });

    S2.define('select2/defaults', ['jquery', 'require', './results', './selection/single', './selection/multiple', './selection/placeholder', './selection/allowClear', './selection/search', './selection/eventRelay', './utils', './translation', './diacritics', './data/select', './data/array', './data/ajax', './data/tags', './data/tokenizer', './data/minimumInputLength', './data/maximumInputLength', './data/maximumSelectionLength', './dropdown', './dropdown/search', './dropdown/hidePlaceholder', './dropdown/infiniteScroll', './dropdown/attachBody', './dropdown/minimumResultsForSearch', './dropdown/selectOnClose', './dropdown/closeOnSelect', './i18n/en'], function ($, require, ResultsList, SingleSelection, MultipleSelection, Placeholder, AllowClear, SelectionSearch, EventRelay, Utils, Translation, DIACRITICS, SelectData, ArrayData, AjaxData, Tags, Tokenizer, MinimumInputLength, MaximumInputLength, MaximumSelectionLength, Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll, AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect, EnglishTranslation) {
      function Defaults() {
        this.reset();
      }

      Defaults.prototype.apply = function (options) {
        options = $.extend(true, {}, this.defaults, options);

        if (options.dataAdapter == null) {
          if (options.ajax != null) {
            options.dataAdapter = AjaxData;
          } else if (options.data != null) {
            options.dataAdapter = ArrayData;
          } else {
            options.dataAdapter = SelectData;
          }

          if (options.minimumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength);
          }

          if (options.maximumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength);
          }

          if (options.maximumSelectionLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength);
          }

          if (options.tags) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
          }

          if (options.tokenSeparators != null || options.tokenizer != null) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer);
          }

          if (options.query != null) {
            var Query = require(options.amdBase + 'compat/query');

            options.dataAdapter = Utils.Decorate(options.dataAdapter, Query);
          }

          if (options.initSelection != null) {
            var InitSelection = require(options.amdBase + 'compat/initSelection');

            options.dataAdapter = Utils.Decorate(options.dataAdapter, InitSelection);
          }
        }

        if (options.resultsAdapter == null) {
          options.resultsAdapter = ResultsList;

          if (options.ajax != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll);
          }

          if (options.placeholder != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder);
          }

          if (options.selectOnClose) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose);
          }
        }

        if (options.dropdownAdapter == null) {
          if (options.multiple) {
            options.dropdownAdapter = Dropdown;
          } else {
            var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

            options.dropdownAdapter = SearchableDropdown;
          }

          if (options.minimumResultsForSearch !== 0) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch);
          }

          if (options.closeOnSelect) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect);
          }

          if (options.dropdownCssClass != null || options.dropdownCss != null || options.adaptDropdownCssClass != null) {
            var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, DropdownCSS);
          }

          options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody);
        }

        if (options.selectionAdapter == null) {
          if (options.multiple) {
            options.selectionAdapter = MultipleSelection;
          } else {
            options.selectionAdapter = SingleSelection;
          }

          // Add the placeholder mixin if a placeholder was specified
          if (options.placeholder != null) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder);
          }

          if (options.allowClear) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear);
          }

          if (options.multiple) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch);
          }

          if (options.containerCssClass != null || options.containerCss != null || options.adaptContainerCssClass != null) {
            var ContainerCSS = require(options.amdBase + 'compat/containerCss');

            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, ContainerCSS);
          }

          options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay);
        }

        if (typeof options.language === 'string') {
          // Check if the language is specified with a region
          if (options.language.indexOf('-') > 0) {
            // Extract the region information if it is included
            var languageParts = options.language.split('-');
            var baseLanguage = languageParts[0];

            options.language = [options.language, baseLanguage];
          } else {
            options.language = [options.language];
          }
        }

        if ($.isArray(options.language)) {
          var languages = new Translation();
          options.language.push('en');

          var languageNames = options.language;

          for (var l = 0; l < languageNames.length; l++) {
            var name = languageNames[l];
            var language = {};

            try {
              // Try to load it with the original name
              language = Translation.loadPath(name);
            } catch (e) {
              try {
                // If we couldn't load it, check if it wasn't the full path
                name = this.defaults.amdLanguageBase + name;
                language = Translation.loadPath(name);
              } catch (ex) {
                // The translation could not be loaded at all. Sometimes this is
                // because of a configuration problem, other times this can be
                // because of how Select2 helps load all possible translation files.
                if (options.debug && window.console && console.warn) {
                  console.warn('Select2: The language file for "' + name + '" could not be ' + 'automatically loaded. A fallback will be used instead.');
                }

                continue;
              }
            }

            languages.extend(language);
          }

          options.translations = languages;
        } else {
          var baseTranslation = Translation.loadPath(this.defaults.amdLanguageBase + 'en');
          var customTranslation = new Translation(options.language);

          customTranslation.extend(baseTranslation);

          options.translations = customTranslation;
        }

        return options;
      };

      Defaults.prototype.reset = function () {
        function stripDiacritics(text) {
          // Used 'uni range + named function' from http://jsperf.com/diacritics/18
          function match(a) {
            return DIACRITICS[a] || a;
          }

          return text.replace(/[^\u0000-\u007E]/g, match);
        }

        function matcher(params, data) {
          // Always return the object if there is nothing to compare
          if ($.trim(params.term) === '') {
            return data;
          }

          // Do a recursive check for options with children
          if (data.children && data.children.length > 0) {
            // Clone the data object if there are children
            // This is required as we modify the object to remove any non-matches
            var match = $.extend(true, {}, data);

            // Check each child of the option
            for (var c = data.children.length - 1; c >= 0; c--) {
              var child = data.children[c];

              var matches = matcher(params, child);

              // If there wasn't a match, remove the object in the array
              if (matches == null) {
                match.children.splice(c, 1);
              }
            }

            // If any children matched, return the new object
            if (match.children.length > 0) {
              return match;
            }

            // If there were no matching children, check just the plain object
            return matcher(params, match);
          }

          var original = stripDiacritics(data.text).toUpperCase();
          var term = stripDiacritics(params.term).toUpperCase();

          // Check if the text contains the term
          if (original.indexOf(term) > -1) {
            return data;
          }

          // If it doesn't contain the term, don't return anything
          return null;
        }

        this.defaults = {
          amdBase: './',
          amdLanguageBase: './i18n/',
          closeOnSelect: true,
          debug: false,
          dropdownAutoWidth: false,
          escapeMarkup: Utils.escapeMarkup,
          language: EnglishTranslation,
          matcher: matcher,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: false,
          sorter: function sorter(data) {
            return data;
          },
          templateResult: function templateResult(result) {
            return result.text;
          },
          templateSelection: function templateSelection(selection) {
            return selection.text;
          },
          theme: 'default',
          width: 'resolve'
        };
      };

      Defaults.prototype.set = function (key, value) {
        var camelKey = $.camelCase(key);

        var data = {};
        data[camelKey] = value;

        var convertedData = Utils._convertData(data);

        $.extend(this.defaults, convertedData);
      };

      var defaults = new Defaults();

      return defaults;
    });

    S2.define('select2/options', ['require', 'jquery', './defaults', './utils'], function (require, $, Defaults, Utils) {
      function Options(options, $element) {
        this.options = options;

        if ($element != null) {
          this.fromElement($element);
        }

        this.options = Defaults.apply(this.options);

        if ($element && $element.is('input')) {
          var InputCompat = require(this.get('amdBase') + 'compat/inputData');

          this.options.dataAdapter = Utils.Decorate(this.options.dataAdapter, InputCompat);
        }
      }

      Options.prototype.fromElement = function ($e) {
        var excludedData = ['select2'];

        if (this.options.multiple == null) {
          this.options.multiple = $e.prop('multiple');
        }

        if (this.options.disabled == null) {
          this.options.disabled = $e.prop('disabled');
        }

        if (this.options.language == null) {
          if ($e.prop('lang')) {
            this.options.language = $e.prop('lang').toLowerCase();
          } else if ($e.closest('[lang]').prop('lang')) {
            this.options.language = $e.closest('[lang]').prop('lang');
          }
        }

        if (this.options.dir == null) {
          if ($e.prop('dir')) {
            this.options.dir = $e.prop('dir');
          } else if ($e.closest('[dir]').prop('dir')) {
            this.options.dir = $e.closest('[dir]').prop('dir');
          } else {
            this.options.dir = 'ltr';
          }
        }

        $e.prop('disabled', this.options.disabled);
        $e.prop('multiple', this.options.multiple);

        if ($e.data('select2Tags')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-select2-tags` attribute has been changed to ' + 'use the `data-data` and `data-tags="true"` attributes and will be ' + 'removed in future versions of Select2.');
          }

          $e.data('data', $e.data('select2Tags'));
          $e.data('tags', true);
        }

        if ($e.data('ajaxUrl')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-ajax-url` attribute has been changed to ' + '`data-ajax--url` and support for the old attribute will be removed' + ' in future versions of Select2.');
          }

          $e.attr('ajax--url', $e.data('ajaxUrl'));
          $e.data('ajax--url', $e.data('ajaxUrl'));
        }

        var dataset = {};

        // Prefer the element's `dataset` attribute if it exists
        // jQuery 1.x does not correctly handle data attributes with multiple dashes
        if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
          dataset = $.extend(true, {}, $e[0].dataset, $e.data());
        } else {
          dataset = $e.data();
        }

        var data = $.extend(true, {}, dataset);

        data = Utils._convertData(data);

        for (var key in data) {
          if ($.inArray(key, excludedData) > -1) {
            continue;
          }

          if ($.isPlainObject(this.options[key])) {
            $.extend(this.options[key], data[key]);
          } else {
            this.options[key] = data[key];
          }
        }

        return this;
      };

      Options.prototype.get = function (key) {
        return this.options[key];
      };

      Options.prototype.set = function (key, val) {
        this.options[key] = val;
      };

      return Options;
    });

    S2.define('select2/core', ['jquery', './options', './utils', './keys'], function ($, Options, Utils, KEYS) {
      var Select2 = function Select2($element, options) {
        if ($element.data('select2') != null) {
          $element.data('select2').destroy();
        }

        this.$element = $element;

        this.id = this._generateId($element);

        options = options || {};

        this.options = new Options(options, $element);

        Select2.__super__.constructor.call(this);

        // Set up the tabindex

        var tabindex = $element.attr('tabindex') || 0;
        $element.data('old-tabindex', tabindex);
        $element.attr('tabindex', '-1');

        // Set up containers and adapters

        var DataAdapter = this.options.get('dataAdapter');
        this.dataAdapter = new DataAdapter($element, this.options);

        var $container = this.render();

        this._placeContainer($container);

        var SelectionAdapter = this.options.get('selectionAdapter');
        this.selection = new SelectionAdapter($element, this.options);
        this.$selection = this.selection.render();

        this.selection.position(this.$selection, $container);

        var DropdownAdapter = this.options.get('dropdownAdapter');
        this.dropdown = new DropdownAdapter($element, this.options);
        this.$dropdown = this.dropdown.render();

        this.dropdown.position(this.$dropdown, $container);

        var ResultsAdapter = this.options.get('resultsAdapter');
        this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
        this.$results = this.results.render();

        this.results.position(this.$results, this.$dropdown);

        // Bind events

        var self = this;

        // Bind the container to all of the adapters
        this._bindAdapters();

        // Register any DOM event handlers
        this._registerDomEvents();

        // Register any internal event handlers
        this._registerDataEvents();
        this._registerSelectionEvents();
        this._registerDropdownEvents();
        this._registerResultsEvents();
        this._registerEvents();

        // Set the initial state
        this.dataAdapter.current(function (initialData) {
          self.trigger('selection:update', {
            data: initialData
          });
        });

        // Hide the original select
        $element.addClass('select2-hidden-accessible');
        $element.attr('aria-hidden', 'true');

        // Synchronize any monitored attributes
        this._syncAttributes();

        $element.data('select2', this);
      };

      Utils.Extend(Select2, Utils.Observable);

      Select2.prototype._generateId = function ($element) {
        var id = '';

        if ($element.attr('id') != null) {
          id = $element.attr('id');
        } else if ($element.attr('name') != null) {
          id = $element.attr('name') + '-' + Utils.generateChars(2);
        } else {
          id = Utils.generateChars(4);
        }

        id = id.replace(/(:|\.|\[|\]|,)/g, '');
        id = 'select2-' + id;

        return id;
      };

      Select2.prototype._placeContainer = function ($container) {
        $container.insertAfter(this.$element);

        var width = this._resolveWidth(this.$element, this.options.get('width'));

        if (width != null) {
          $container.css('width', width);
        }
      };

      Select2.prototype._resolveWidth = function ($element, method) {
        var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

        if (method == 'resolve') {
          var styleWidth = this._resolveWidth($element, 'style');

          if (styleWidth != null) {
            return styleWidth;
          }

          return this._resolveWidth($element, 'element');
        }

        if (method == 'element') {
          var elementWidth = $element.outerWidth(false);

          if (elementWidth <= 0) {
            return 'auto';
          }

          return elementWidth + 'px';
        }

        if (method == 'style') {
          var style = $element.attr('style');

          if (typeof style !== 'string') {
            return null;
          }

          var attrs = style.split(';');

          for (var i = 0, l = attrs.length; i < l; i = i + 1) {
            var attr = attrs[i].replace(/\s/g, '');
            var matches = attr.match(WIDTH);

            if (matches !== null && matches.length >= 1) {
              return matches[1];
            }
          }

          return null;
        }

        return method;
      };

      Select2.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container);
        this.selection.bind(this, this.$container);

        this.dropdown.bind(this, this.$container);
        this.results.bind(this, this.$container);
      };

      Select2.prototype._registerDomEvents = function () {
        var self = this;

        this.$element.on('change.select2', function () {
          self.dataAdapter.current(function (data) {
            self.trigger('selection:update', {
              data: data
            });
          });
        });

        this.$element.on('focus.select2', function (evt) {
          self.trigger('focus', evt);
        });

        this._syncA = Utils.bind(this._syncAttributes, this);
        this._syncS = Utils.bind(this._syncSubtree, this);

        if (this.$element[0].attachEvent) {
          this.$element[0].attachEvent('onpropertychange', this._syncA);
        }

        var observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

        if (observer != null) {
          this._observer = new observer(function (mutations) {
            $.each(mutations, self._syncA);
            $.each(mutations, self._syncS);
          });
          this._observer.observe(this.$element[0], {
            attributes: true,
            childList: true,
            subtree: false
          });
        } else if (this.$element[0].addEventListener) {
          this.$element[0].addEventListener('DOMAttrModified', self._syncA, false);
          this.$element[0].addEventListener('DOMNodeInserted', self._syncS, false);
          this.$element[0].addEventListener('DOMNodeRemoved', self._syncS, false);
        }
      };

      Select2.prototype._registerDataEvents = function () {
        var self = this;

        this.dataAdapter.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerSelectionEvents = function () {
        var self = this;
        var nonRelayEvents = ['toggle', 'focus'];

        this.selection.on('toggle', function () {
          self.toggleDropdown();
        });

        this.selection.on('focus', function (params) {
          self.focus(params);
        });

        this.selection.on('*', function (name, params) {
          if ($.inArray(name, nonRelayEvents) !== -1) {
            return;
          }

          self.trigger(name, params);
        });
      };

      Select2.prototype._registerDropdownEvents = function () {
        var self = this;

        this.dropdown.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerResultsEvents = function () {
        var self = this;

        this.results.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };

      Select2.prototype._registerEvents = function () {
        var self = this;

        this.on('open', function () {
          self.$container.addClass('select2-container--open');
        });

        this.on('close', function () {
          self.$container.removeClass('select2-container--open');
        });

        this.on('enable', function () {
          self.$container.removeClass('select2-container--disabled');
        });

        this.on('disable', function () {
          self.$container.addClass('select2-container--disabled');
        });

        this.on('blur', function () {
          self.$container.removeClass('select2-container--focus');
        });

        this.on('query', function (params) {
          if (!self.isOpen()) {
            self.trigger('open', {});
          }

          this.dataAdapter.query(params, function (data) {
            self.trigger('results:all', {
              data: data,
              query: params
            });
          });
        });

        this.on('query:append', function (params) {
          this.dataAdapter.query(params, function (data) {
            self.trigger('results:append', {
              data: data,
              query: params
            });
          });
        });

        this.on('keypress', function (evt) {
          var key = evt.which;

          if (self.isOpen()) {
            if (key === KEYS.ESC || key === KEYS.TAB || key === KEYS.UP && evt.altKey) {
              self.close();

              evt.preventDefault();
            } else if (key === KEYS.ENTER) {
              self.trigger('results:select', {});

              evt.preventDefault();
            } else if (key === KEYS.SPACE && evt.ctrlKey) {
              self.trigger('results:toggle', {});

              evt.preventDefault();
            } else if (key === KEYS.UP) {
              self.trigger('results:previous', {});

              evt.preventDefault();
            } else if (key === KEYS.DOWN) {
              self.trigger('results:next', {});

              evt.preventDefault();
            }
          } else {
            if (key === KEYS.ENTER || key === KEYS.SPACE || key === KEYS.DOWN && evt.altKey) {
              self.open();

              evt.preventDefault();
            }
          }
        });
      };

      Select2.prototype._syncAttributes = function () {
        this.options.set('disabled', this.$element.prop('disabled'));

        if (this.options.get('disabled')) {
          if (this.isOpen()) {
            this.close();
          }

          this.trigger('disable', {});
        } else {
          this.trigger('enable', {});
        }
      };

      Select2.prototype._syncSubtree = function (evt, mutations) {
        var changed = false;
        var self = this;

        // Ignore any mutation events raised for elements that aren't options or
        // optgroups. This handles the case when the select element is destroyed
        if (evt && evt.target && evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP') {
          return;
        }

        if (!mutations) {
          // If mutation events aren't supported, then we can only assume that the
          // change affected the selections
          changed = true;
        } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
          for (var n = 0; n < mutations.addedNodes.length; n++) {
            var node = mutations.addedNodes[n];

            if (node.selected) {
              changed = true;
            }
          }
        } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
          changed = true;
        }

        // Only re-pull the data if we think there is a change
        if (changed) {
          this.dataAdapter.current(function (currentData) {
            self.trigger('selection:update', {
              data: currentData
            });
          });
        }
      };

      /**
       * Override the trigger method to automatically trigger pre-events when
       * there are events that can be prevented.
       */
      Select2.prototype.trigger = function (name, args) {
        var actualTrigger = Select2.__super__.trigger;
        var preTriggerMap = {
          'open': 'opening',
          'close': 'closing',
          'select': 'selecting',
          'unselect': 'unselecting'
        };

        if (args === undefined) {
          args = {};
        }

        if (name in preTriggerMap) {
          var preTriggerName = preTriggerMap[name];
          var preTriggerArgs = {
            prevented: false,
            name: name,
            args: args
          };

          actualTrigger.call(this, preTriggerName, preTriggerArgs);

          if (preTriggerArgs.prevented) {
            args.prevented = true;

            return;
          }
        }

        actualTrigger.call(this, name, args);
      };

      Select2.prototype.toggleDropdown = function () {
        if (this.options.get('disabled')) {
          return;
        }

        if (this.isOpen()) {
          this.close();
        } else {
          this.open();
        }
      };

      Select2.prototype.open = function () {
        if (this.isOpen()) {
          return;
        }

        this.trigger('query', {});
      };

      Select2.prototype.close = function () {
        if (!this.isOpen()) {
          return;
        }

        this.trigger('close', {});
      };

      Select2.prototype.isOpen = function () {
        return this.$container.hasClass('select2-container--open');
      };

      Select2.prototype.hasFocus = function () {
        return this.$container.hasClass('select2-container--focus');
      };

      Select2.prototype.focus = function (data) {
        // No need to re-trigger focus events if we are already focused
        if (this.hasFocus()) {
          return;
        }

        this.$container.addClass('select2-container--focus');
        this.trigger('focus', {});
      };

      Select2.prototype.enable = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("enable")` method has been deprecated and will' + ' be removed in later Select2 versions. Use $element.prop("disabled")' + ' instead.');
        }

        if (args == null || args.length === 0) {
          args = [true];
        }

        var disabled = !args[0];

        this.$element.prop('disabled', disabled);
      };

      Select2.prototype.data = function () {
        if (this.options.get('debug') && arguments.length > 0 && window.console && console.warn) {
          console.warn('Select2: Data can no longer be set using `select2("data")`. You ' + 'should consider setting the value instead using `$element.val()`.');
        }

        var data = [];

        this.dataAdapter.current(function (currentData) {
          data = currentData;
        });

        return data;
      };

      Select2.prototype.val = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("val")` method has been deprecated and will be' + ' removed in later Select2 versions. Use $element.val() instead.');
        }

        if (args == null || args.length === 0) {
          return this.$element.val();
        }

        var newVal = args[0];

        if ($.isArray(newVal)) {
          newVal = $.map(newVal, function (obj) {
            return obj.toString();
          });
        }

        this.$element.val(newVal).trigger('change');
      };

      Select2.prototype.destroy = function () {
        this.$container.remove();

        if (this.$element[0].detachEvent) {
          this.$element[0].detachEvent('onpropertychange', this._syncA);
        }

        if (this._observer != null) {
          this._observer.disconnect();
          this._observer = null;
        } else if (this.$element[0].removeEventListener) {
          this.$element[0].removeEventListener('DOMAttrModified', this._syncA, false);
          this.$element[0].removeEventListener('DOMNodeInserted', this._syncS, false);
          this.$element[0].removeEventListener('DOMNodeRemoved', this._syncS, false);
        }

        this._syncA = null;
        this._syncS = null;

        this.$element.off('.select2');
        this.$element.attr('tabindex', this.$element.data('old-tabindex'));

        this.$element.removeClass('select2-hidden-accessible');
        this.$element.attr('aria-hidden', 'false');
        this.$element.removeData('select2');

        this.dataAdapter.destroy();
        this.selection.destroy();
        this.dropdown.destroy();
        this.results.destroy();

        this.dataAdapter = null;
        this.selection = null;
        this.dropdown = null;
        this.results = null;
      };

      Select2.prototype.render = function () {
        var $container = $('<span class="select2 select2-container">' + '<span class="selection"></span>' + '<span class="dropdown-wrapper" aria-hidden="true"></span>' + '</span>');

        $container.attr('dir', this.options.get('dir'));

        this.$container = $container;

        this.$container.addClass('select2-container--' + this.options.get('theme'));

        $container.data('element', this.$element);

        return $container;
      };

      return Select2;
    });

    S2.define('jquery-mousewheel', ['jquery'], function ($) {
      // Used to shim jQuery.mousewheel for non-full builds.
      return $;
    });

    S2.define('jquery.select2', ['jquery', 'jquery-mousewheel', './select2/core', './select2/defaults'], function ($, _, Select2, Defaults) {
      if ($.fn.select2 == null) {
        // All methods that should return the element
        var thisMethods = ['open', 'close', 'destroy'];

        $.fn.select2 = function (options) {
          options = options || {};

          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            this.each(function () {
              var instanceOptions = $.extend(true, {}, options);

              var instance = new Select2($(this), instanceOptions);
            });

            return this;
          } else if (typeof options === 'string') {
            var ret;
            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function () {
              var instance = $(this).data('select2');

              if (instance == null && window.console && console.error) {
                console.error('The select2(\'' + options + '\') method was called on an ' + 'element that is not using Select2.');
              }

              ret = instance[options].apply(instance, args);
            });

            // Check if we should be returning `this`
            if ($.inArray(options, thisMethods) > -1) {
              return this;
            }

            return ret;
          } else {
            throw new Error('Invalid arguments for Select2: ' + options);
          }
        };
      }

      if ($.fn.select2.defaults == null) {
        $.fn.select2.defaults = Defaults;
      }

      return Select2;
    });

    // Return the AMD loader configuration so it can be used outside of this file
    return {
      define: S2.define,
      require: S2.require
    };
  }();

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./public/assets/vendor/select2/dist/js/select2.js");
__webpack_require__("./public/assets/vendor/leaflet/dist/leaflet.js");
__webpack_require__("./public/assets/vendor/leaflet-plugins/leaflet.geodesic.js");
__webpack_require__("./public/assets/vendor/leaflet-plugins/leaflet.rotatedMarker.js");
__webpack_require__("./public/assets/vendor/leaflet-ajax/dist/leaflet.ajax.min.js");
__webpack_require__("./public/assets/admin/vendor/sass/paper-dashboard.scss");
module.exports = __webpack_require__("./public/assets/frontend/sass/now-ui-kit.scss");


/***/ })

/******/ });