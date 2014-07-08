Template.page.helpers({
    pageClass: function() {
        pageId = this.buttonTitle;
        //pageClass = pageId.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        pageClass = pageId.replace(/\s+/g, '-').toLowerCase();
        return pageClass;
    },
});
