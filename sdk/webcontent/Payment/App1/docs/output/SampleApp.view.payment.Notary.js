Ext.data.JsonP.SampleApp_view_payment_Notary({"tagname":"class","name":"SampleApp.view.payment.Notary","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Notary.js","href":"Notary.html#SampleApp-view-payment-Notary"}],"aliases":{"widget":["att-payment-notary"]},"alternateClassNames":[],"extends":"Ext.Container","mixins":[],"requires":["Ext.form.FieldSet","Ext.form.Panel","SampleApp.Config","SampleApp.view.Footer","SampleApp.view.Header"],"uses":[],"members":[{"name":"defaults","tagname":"cfg","owner":"SampleApp.view.payment.Notary","id":"cfg-defaults","meta":{"private":true}},{"name":"scrollable","tagname":"cfg","owner":"SampleApp.view.payment.Notary","id":"cfg-scrollable","meta":{"private":true}},{"name":"title","tagname":"cfg","owner":"SampleApp.view.payment.Notary","id":"cfg-title","meta":{"private":true}},{"name":"buildSignPayloadForm","tagname":"method","owner":"SampleApp.view.payment.Notary","id":"method-buildSignPayloadForm","meta":{}},{"name":"getDefaults","tagname":"method","owner":"SampleApp.view.payment.Notary","id":"method-getDefaults","meta":{}},{"name":"getScrollable","tagname":"method","owner":"SampleApp.view.payment.Notary","id":"method-getScrollable","meta":{}},{"name":"getTitle","tagname":"method","owner":"SampleApp.view.payment.Notary","id":"method-getTitle","meta":{}},{"name":"initialize","tagname":"method","owner":"SampleApp.view.payment.Notary","id":"method-initialize","meta":{"private":true}},{"name":"setDefaults","tagname":"method","owner":"SampleApp.view.payment.Notary","id":"method-setDefaults","meta":{}},{"name":"setScrollable","tagname":"method","owner":"SampleApp.view.payment.Notary","id":"method-setScrollable","meta":{}},{"name":"setTitle","tagname":"method","owner":"SampleApp.view.payment.Notary","id":"method-setTitle","meta":{}}],"code_type":"ext_define","id":"class-SampleApp.view.payment.Notary","component":false,"superclasses":["Ext.Container"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Container<div class='subclass '><strong>SampleApp.view.payment.Notary</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.form.FieldSet</div><div class='dependency'>Ext.form.Panel</div><div class='dependency'><a href='#!/api/SampleApp.Config' rel='SampleApp.Config' class='docClass'>SampleApp.Config</a></div><div class='dependency'><a href='#!/api/SampleApp.view.Footer' rel='SampleApp.view.Footer' class='docClass'>SampleApp.view.Footer</a></div><div class='dependency'><a href='#!/api/SampleApp.view.Header' rel='SampleApp.view.Header' class='docClass'>SampleApp.view.Header</a></div><h4>Files</h4><div class='dependency'><a href='source/Notary.html#SampleApp-view-payment-Notary' target='_blank'>Notary.js</a></div></pre><div class='doc-contents'><p>User Interface for the Notary application.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaults' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-cfg-defaults' class='name expandable'>defaults</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{scrollable: null}</code></p></div></div></div><div id='cfg-scrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-cfg-scrollable' class='name expandable'>scrollable</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'vertical'</code></p></div></div></div><div id='cfg-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-cfg-title' class='name expandable'>title</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Notary App'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-buildSignPayloadForm' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-method-buildSignPayloadForm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-method-buildSignPayloadForm' class='name expandable'>buildSignPayloadForm</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the UI components for Feature 1: Sign Payload. ...</div><div class='long'><p>Builds the UI components for Feature 1: Sign Payload.</p>\n</div></div></div><div id='method-getDefaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-method-getDefaults' class='name expandable'>getDefaults</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of defaults. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.Notary-cfg-defaults\" rel=\"SampleApp.view.payment.Notary-cfg-defaults\" class=\"docClass\">defaults</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-method-getScrollable' class='name expandable'>getScrollable</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of scrollable. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.Notary-cfg-scrollable\" rel=\"SampleApp.view.payment.Notary-cfg-scrollable\" class=\"docClass\">scrollable</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-method-getTitle' class='name expandable'>getTitle</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of title. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.payment.Notary-cfg-title\" rel=\"SampleApp.view.payment.Notary-cfg-title\" class=\"docClass\">title</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>override ...</div><div class='long'><p>override</p>\n</div></div></div><div id='method-setDefaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-method-setDefaults' class='name expandable'>setDefaults</a>( <span class='pre'>defaults</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of defaults. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.Notary-cfg-defaults\" rel=\"SampleApp.view.payment.Notary-cfg-defaults\" class=\"docClass\">defaults</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>defaults</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setScrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-method-setScrollable' class='name expandable'>setScrollable</a>( <span class='pre'>scrollable</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of scrollable. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.Notary-cfg-scrollable\" rel=\"SampleApp.view.payment.Notary-cfg-scrollable\" class=\"docClass\">scrollable</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scrollable</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.payment.Notary'>SampleApp.view.payment.Notary</span><br/><a href='source/Notary.html#SampleApp-view-payment-Notary-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.payment.Notary-method-setTitle' class='name expandable'>setTitle</a>( <span class='pre'>title</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of title. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.payment.Notary-cfg-title\" rel=\"SampleApp.view.payment.Notary-cfg-title\" class=\"docClass\">title</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});