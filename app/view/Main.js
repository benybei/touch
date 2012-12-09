Ext.define('MyApp.view.Main', {
	extend : 'Ext.tab.Panel',

	requires : [ 'Ext.TitleBar',

	],
	config : {
		tabBarPosition : 'bottom',
		/* pour laffichage du panneau welcom et get star */
		items : [ {
			xtype : 'homepanel',
		}, {
			xtype : 'blog',
			style : 'border: none',
		}, {
			xtype : 'contactform',
		}, {
			xtype : 'helppanel',
		}

		]
	}
});
