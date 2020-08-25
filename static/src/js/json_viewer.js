odoo.define('ambigroup_json_viewer.Field', function(require){
    "use strict";
    var basic_fields = require('web.basic_fields');
    var field_registry = require('web.field_registry');
    
    var AGJSONViewer = basic_fields.FieldText.extend({
        widget_class:'o_field_text o_field_widget o_input',
        template: 'AgJSONViewer',

        _renderReadonly: function () {
            var options = this.attrs.options;
            try{
                var data = JSON.parse(this.value)
                if(options === undefined){
                    this.$el.find('div#json_viewer').jsonViewer(data);
                }else{
                    this.$el.find('div#json_viewer').jsonViewer(data, options);
                }
            } catch(error)
            {
                this.$el.find('div#json_viewer').append(error);
            }
        },
    });
    field_registry.add('ag_json_viewer', AGJSONViewer);
});
