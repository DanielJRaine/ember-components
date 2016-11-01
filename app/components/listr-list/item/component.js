import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    classNameBindings: ['itemStrikethrough'],
    itemStrikethrough: false,
    actions: {
        toggleStrikethrough(){
            return this.toggleProperty('itemStrikethrough');
        }
    }
});