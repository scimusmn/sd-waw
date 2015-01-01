/**
 * Desert
 */
var colorPalate = 'desert';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {

    var desert = Components.insert({
        colorPalate: colorPalate,
        link: 'wetlands',
        title: 'The Colorado Desert',
        titleEsp: 'El Desierto del Colorado',
        componentNum: '0916',
        order: 8,
        mural: 'desert-mural.jpg',
    });

}
