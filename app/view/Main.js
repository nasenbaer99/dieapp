Ext.define('HellowWorld.view.Main', {
extend: 'Ext.tab.Panel',
xtype: 'main',
requires: [
'Ext.TitleBar',
'Ext.Video'
],
config: {
tabBarPosition: 'bottom',
items: [
{
title: 'Luca',
iconCls: 'user',
styleHtmlContent: true,
scrollable: true,
items: {
docked: 'top',
xtype: 'titlebar',
title: 'Luca Spindler'
},
html: [
'<h2><a href="http://lucaspindler00.cloudcontrolled.com/" style="text-decoration:none">Hompage in der Cloud</a></h2>',

].join("")
},
{
title: 'HÜ1',
iconCls: 'info',
styleHtmlContent: true,
scrollable: true,
items: {
docked: 'top',
xtype: 'titlebar',
title: 'Hausübung IBS'
},
html: [
'<h2><a href="http://www.codecademy.com/nasenbaer00" style="text-decoration:none">Codecademy</a></h2>',
'<h2><a href="http://github.com/nasenbaer99" style="text-decoration:none">Github</a></h2>',
'<h2><a href="https://github.com/nasenbaer99/uebung/pull/1" style="text-decoration:none">Pull-Requests Torben Naumanns</a></h2>',
'<h2><a href="https://github.com/pbox2k/ibs2014/pull/1" style="text-decoration:none">Pull-Requests</a></h2>',
'<form role="search" action="http://de.wikipedia.org/wiki/Spezial:Suche">',
'<table>',
'<tbody><tr>',
'<td>',
'<input id="wikipedia" maxlength="255" size="25" name="search" type="text" placeholder="Suche in der Wikipedia">',
'<label for="wikipedia" class="obscure">Wikipedia-Suche</label>',
'<input value="de" name="hl" type="hidden">',
'<input type="submit" name="go" value="Artikel">',
'<input type="submit" name="fulltext" value="Suche">',
'</td>',
'</tr>',
'</table>',
].join("")
},
{
title: 'Impressum',
iconCls: 'team',
items: [
{
docked: 'top',
xtype: 'titlebar',
title: 'Impressum'
},
{
title: 'ARSnova Timer',
iconCls: 'Time',
styleHtmlContent: true,
scrollable: true,
items: {
docked: 'top',
xtype: 'titlebar',
title: 'Luca Spindler'
},
html: [
"folgt"
].join("")
},
{
html: ['Angaben gemäß § 5 TMG<br> ',
'Lucas Spindler<br>',
'Wilhelmstr. 33<br>',
'35037 Mabrurg <br>',
'E-Mail: luca.spindler(at)mni.thm.de<br>',
'<a href="http://lucaspindler00.cloudcontrolled.com/impressum.html" style="text-decoration:none">mehr</a>',
].join("")
}
]
}
]
}
});