/**
 * Desert
 */
var colorPalate = 'desert';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });
dimsum.configure({ flavor: 'jabberwocky' });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {

    var desert = Components.insert({
        title: 'Desert',
        componentNum: '0916',
        order: 8,
        bodyCopy: dimsum()
    });

}
