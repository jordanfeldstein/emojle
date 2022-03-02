# Emojile

This is a spinoff of [Wordle](https://www.powerlanguage.co.uk/wordle/) which uses emojis instead of words.

### Scoring

Since the words are different lengths and there are different numbers of words, the answers are judged somewhat differently. Each word is judged individually against the corresponding word in the correct answer. 

Green means it is in the correct position. Yellow means the letter is in the word, but in the wrong position. Gray means that letter is not in the word at all.

The spaces and period at the end of words are also judged differently. A green space means the word is the right length. A yellow space means the word is the wrong length. A gray space means that there is not supposed to be a space after this word (the correct emoji's name ends instead). Every emoji ends in a period.

### Emojis

The emojis used are only a subset of the full list. Only emojis that are represented with a single code point are used. This means that modifiers like skin tone/gender are excluded, and compound emojis like flags are excluded too.
