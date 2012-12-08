Ext.define('MyApp.controller.main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	blog:'blog',
        },
        control: {
            'blog list':{
            	itemtap:'showPost'
            }
        }
        
    },
    
showPost:function(list, index, element, record){
	/*fait reference a la liste du fichier blog la partie record du fichier json*/
	this.getBlog().push({
		xtype:'panel',
		title:record.get('title'),
		html:record.get('content'),
		scrollable:true,
		styleHtmlContent:true,
	})
	}
});