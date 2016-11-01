import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: ['listDetailHidden'],
    listDetailHidden: true, // set this as default to false
    actions: {
        toggleListDetail(){
            return this.toggleProperty('listDetailHidden');
        }
    }
});
