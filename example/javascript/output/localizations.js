;(function() {
  var localizations = {
    'en-US': {
      '__getPluralKeyword': function(cardinal) {
        var cardinal = cardinal + ''
          , n = cardinal
          , i = parseInt(cardinal, 10)
          , v = 0
          , w = 0
          , f = 0
          , t = 0;

        var hasFractionalDigitsSyntax = /\.(\d+)/;

        if(hasFractionalDigitsSyntax.test(cardinal)) {
          f = fractionalDigits.exec(cardinal)[1];
          v = f.length;
        }
        if(hasFractionalDigitsSyntax.test(cardinal)) {
          t = cardinal.replace(/+0$/, '');
          t = fractionalDigits.exec(t)[1];
          w = t.length;
        }
        if(i === 1 && v === 0) {
          return 'one';
        }
        return 'other';
      },
      '__getOrdinalKeyword': function(cardinal) {
        var cardinal = cardinal + ''
          , n = cardinal
          , i = parseInt(cardinal, 10)
          , v = 0
          , w = 0
          , f = 0
          , t = 0;

        var hasFractionalDigitsSyntax = /\.(\d+)/;

        if(hasFractionalDigitsSyntax.test(cardinal)) {
          f = fractionalDigits.exec(cardinal)[1];
          v = f.length;
        }
        if(hasFractionalDigitsSyntax.test(cardinal)) {
          t = cardinal.replace(/+0$/, '');
          t = fractionalDigits.exec(t)[1];
          w = t.length;
        }
        if(n % 10 === 1 && n % 100 === 11) {
          return 'one';
        }
        else if(n % 10 === 2 && n % 100 === 12) {
          return 'two';
        }
        else if(n % 10 === 3 && n % 100 === 13) {
          return 'few';
        }
        return 'other';
      },
      'INDEX1': function(it) {
        var string = '';
        var _case;
        _case = localizations['en-US'].__getPluralKeyword(it.variable1);
        switch(_case) {
          case 'one':
            string += 'bajs';
            break;
          default:
            string += 'hora';
            break;
        }
        return string;
      }
    },
    'zh-CN': {
      '__getPluralKeyword': function(cardinal) {
        return 'other';
      },
      '__getOrdinalKeyword': function(cardinal) {
        return 'other';
      },
      'INDEX1': function(it) {
        var string = '';

        return string;
      }
    }
  };

  function requireLocale(locale) {
    return (function(locale) {
      return function l(key) {
        if(!(locale in localizations)) {
          return 'LOCALE_NOT_IN_LOCALIZATIONS: ' + locale;
        }
        if(!(key in localizations[locale])) {
          return 'KEY_NOT_IN_LOCALIZATIONS: ' + key;
        }
        var variables = {};
        for(var variable in arguments[1]) {
          variables[variable.replace(/^\w+\s+/, '')] = arguments[1][variable];
        }
        return localizations[locale][key].call(undefined, variables);
      };
    })(locale);
  };

  if(typeof require === "function" && typeof exports === 'object' && typeof module === 'object') {
    module.exports = requireLocale;
  }
  else if (typeof define === "function" && define.amd) {
    define(function() {
      return requireLocale;
    });
  }
  else {
    window.requireLocale = requireLocale;
  }
})();
