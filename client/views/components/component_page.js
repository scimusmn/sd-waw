Template.componentPage.helpers({
    dork: function() {
        return 'whort';
    },
    pages: function() {
        return Pages.find({componentId: this._id});
    }
});
