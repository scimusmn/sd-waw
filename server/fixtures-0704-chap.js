/**
 * Chaparral
 */
var colorPalate = 'chaparral';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {

    var chaparral = Components.insert({
        colorPalate: colorPalate,
        link: 'wetlands',
        title: 'The Chaparral',
        titleEsp: 'El Chaparral',
        componentNum: '0704',
        order: 6,
        mural: 'chap-mural.jpg',
    });
}
