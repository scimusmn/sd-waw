/**
 * Simple pluralizer
 */
Handlebars.registerHelper('pluralize', function(n, thing) {
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});

/**
 * Turn titles into CSS classes
 *
 * Remove puncuation
 * Spaces to undescores
 * Lowercase text
 */
Handlebars.registerHelper('lowerSpacesToDashes', function(input) {
    if (input) {
        return input.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').replace(/\s+/g, '-').toLowerCase();
    }
});

/**
 * Strip HTML from a string
 *
 * This is obviously imperfect, but I trust the data source...me.
 */
Handlebars.registerHelper('brToSpace', function(input) {
    if (input) {
        return input.replace(/<br ?\/?>/g, " ")
    }
});
