/**
 * Streams
 */
var colorPalate = 'streams';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });
dimsum.configure({ flavor: 'jabberwocky' });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {

    /**
     **************************************************************************
     * Streams
     **************************************************************************
     */
    var streams = Components.insert({
        colorPalate: 'streams',
        link: 'streams',
        title: 'The Rivers and Streams',
        titleEsp: 'Los Ríos y Arroyos',
        componentNum: '0616',
        order: 4,
        mural: 'mtn-mural.jpg'
    });

    Pages.insert({
        colorPalate: colorPalate,
        componentId: streams,
        link: 'where-is-it',
        buttonTitle: 'Where is it?',
        espButtonTitle: '¿Dónde está?',
        order: 1,
        bodyCopy: 'The Cuyamaca Mountains, the setting for the scene in front of you, are just 50 miles from the Museum',
        espBodyCopy: 'Las montañas Cuyamaca, el marco de la escena delante de ti, están apenas a 50 millas del  Museo. ',
        backgroundMapClass: 'map-mtn-where',
        bodyImages: [
            {fileName: 'mtn-where.jpg'},
        ],
    });
}
