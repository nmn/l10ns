function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['JavascriptWrapper']=function anonymous(it) {
var out=';(function() {\n  var localizations = {\n    \'en-US\': {\n      \'__getPluralKeyword\': function(cardinal) {\n        var cardinal = cardinal + \'\'\n          , n = cardinal\n          , i = parseInt(cardinal, 10)\n          , v = 0\n          , w = 0\n          , f = 0\n          , t = 0;\n\n        var hasFractionalDigitsSyntax = /\\.(\\d+)/;\n\n        if(hasFractionalDigitsSyntax.test(cardinal)) {\n          f = fractionalDigits.exec(cardinal)[1];\n          v = f.length;\n        }\n        if(hasFractionalDigitsSyntax.test(cardinal)) {\n          t = cardinal.replace(/+0$/, \'\');\n          t = fractionalDigits.exec(t)[1];\n          w = t.length;\n        }\n        if(i === 1 && v === 0) {\n          return \'one\';\n        }\n        return \'other\';\n      },\n      \'__getOrdinalKeyword\': function(cardinal) {\n        var cardinal = cardinal + \'\'\n          , n = cardinal\n          , i = parseInt(cardinal, 10)\n          , v = 0\n          , w = 0\n          , f = 0\n          , t = 0;\n\n        var hasFractionalDigitsSyntax = /\\.(\\d+)/;\n\n        if(hasFractionalDigitsSyntax.test(cardinal)) {\n          f = fractionalDigits.exec(cardinal)[1];\n          v = f.length;\n        }\n        if(hasFractionalDigitsSyntax.test(cardinal)) {\n          t = cardinal.replace(/+0$/, \'\');\n          t = fractionalDigits.exec(t)[1];\n          w = t.length;\n        }\n        if(n % 10 === 1 && n % 100 === 11) {\n          return \'one\';\n        }\n        else if(n % 10 === 2 && n % 100 === 12) {\n          return \'two\';\n        }\n        else if(n % 10 === 3 && n % 100 === 13) {\n          return \'few\';\n        }\n        return \'other\';\n      },\n      \'key-1\': function(it) {\n'+(it.functionBody)+'\n      }\n    }\n  };\n\n  function requireLocale(locale) {\n    return (function(locale) {\n      return function l(key) {\n        if(!(locale in localizations)) {\n          return \'LOCALE_NOT_IN_LOCALIZATIONS: \' + locale;\n        }\n        if(!(key in localizations[locale])) {\n          return \'KEY_NOT_IN_LOCALIZATIONS: \' + key;\n        }\n        var variables = {};\n        for(var variable in arguments[1]) {\n          variables[variable.replace(/^\\w+\\s+/, \'\')] = arguments[1][variable];\n        }\n        return localizations[locale][key].call(undefined, variables);\n      };\n    })(locale);\n  };\n\n  if(typeof require === "function" && typeof exports === \'object\' && typeof module === \'object\') {\n    module.exports = requireLocale;\n  }\n  else if (typeof define === "function" && define.amd) {\n    define(function() {\n      return requireLocale;\n    });\n  }\n  else {\n    window.requireLocale = requireLocale;\n  }\n})();\n';return out;
};
module.exports = tmpl;