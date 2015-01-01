/**
 * Chaparral
 */
var colorPalate = 'chaparral';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });
dimsum.configure({ flavor: 'jabberwocky' });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {

    var chaparral = Components.insert({
        title: 'Chaparral',
        componentNum: '0704',
        order: 5,
        bodyCopy: dimsum()
    });
}
