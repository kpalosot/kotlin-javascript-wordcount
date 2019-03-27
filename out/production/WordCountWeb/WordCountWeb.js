if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'WordCountWeb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'WordCountWeb'.");
}
var WordCountWeb = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var equals = Kotlin.equals;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda$lambda(it) {
    return it.second;
  }
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var wrapFunction = Kotlin.wrapFunction;
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function main$lambda(it) {
    var tmp$, tmp$_0, tmp$_1;
    println('Clicked!');
    var textWord = (Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('word_text')), HTMLInputElement) ? tmp$ : throwCCE()).value;
    var regexWord = Regex_init('[^a-zA-Z]\\W+');
    var regexEnd = Regex_init('[\\.|\\n]');
    var $receiver = textWord.toLowerCase();
    var $receiver_0 = regexEnd.replace_x2uqeu$($receiver, ' ');
    var words = split(regexWord.replace_x2uqeu$($receiver_0, ' '), [' ']);
    var mappedWords = LinkedHashMap_init();
    tmp$_0 = words.iterator();
    while (tmp$_0.hasNext()) {
      var word = tmp$_0.next();
      if (!equals(word, '')) {
        if (mappedWords.get_11rb$(word) == null) {
          mappedWords.put_xwzc9p$(word, 1);
        }
         else {
          var currentWordCount = ensureNotNull(mappedWords.get_11rb$(word));
          var value = currentWordCount + 1 | 0;
          mappedWords.put_xwzc9p$(word, value);
        }
      }
    }
    var wordList = toList(mappedWords);
    var sortedList = sortedWith(wordList, new Comparator$ObjectLiteral(compareByDescending$lambda(main$lambda$lambda)));
    var htmlWordList = document.createElement('ul');
    tmp$_1 = sortedList.iterator();
    while (tmp$_1.hasNext()) {
      var word_0 = tmp$_1.next();
      var listItem = document.createElement('li');
      listItem.innerHTML = word_0.first + ' - ' + word_0.second;
      htmlWordList.appendChild(listItem);
      println(word_0.first + ' - ' + word_0.second);
    }
    ensureNotNull(document.body).appendChild(htmlWordList);
    return Unit;
  }
  function main(args) {
    println('Hello world');
    var button = document.getElementById('button');
    button != null ? (button.addEventListener('click', main$lambda), Unit) : null;
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('WordCountWeb', _);
  return _;
}(typeof WordCountWeb === 'undefined' ? {} : WordCountWeb, kotlin);
