Handlebars.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});

Handlebars.registerHelper('lowerSpacesToDashes', function(input) {
    if (input) {
        return input.replace(/\s+/g, '-').toLowerCase();
    }
});
