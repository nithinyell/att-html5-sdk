Ext.data.JsonP.SampleApp_view_sms_Voting({"tagname":"class","name":"SampleApp.view.sms.Voting","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Voting.js","href":"Voting.html#SampleApp-view-sms-Voting"}],"aliases":{"widget":["att-sms-voting"]},"alternateClassNames":[],"extends":"Ext.Container","mixins":[],"requires":["Ext.form.FieldSet","Ext.form.Panel","SampleApp.Config","SampleApp.view.Footer","SampleApp.view.Header"],"uses":[],"members":[{"name":"defaults","tagname":"cfg","owner":"SampleApp.view.sms.Voting","id":"cfg-defaults","meta":{"private":true}},{"name":"scrollable","tagname":"cfg","owner":"SampleApp.view.sms.Voting","id":"cfg-scrollable","meta":{"private":true}},{"name":"title","tagname":"cfg","owner":"SampleApp.view.sms.Voting","id":"cfg-title","meta":{"private":true}},{"name":"buildHeader","tagname":"method","owner":"SampleApp.view.sms.Voting","id":"method-buildHeader","meta":{}},{"name":"buildVoteList","tagname":"method","owner":"SampleApp.view.sms.Voting","id":"method-buildVoteList","meta":{}},{"name":"getDefaults","tagname":"method","owner":"SampleApp.view.sms.Voting","id":"method-getDefaults","meta":{}},{"name":"getScrollable","tagname":"method","owner":"SampleApp.view.sms.Voting","id":"method-getScrollable","meta":{}},{"name":"getTitle","tagname":"method","owner":"SampleApp.view.sms.Voting","id":"method-getTitle","meta":{}},{"name":"initialize","tagname":"method","owner":"SampleApp.view.sms.Voting","id":"method-initialize","meta":{"private":true}},{"name":"setDefaults","tagname":"method","owner":"SampleApp.view.sms.Voting","id":"method-setDefaults","meta":{}},{"name":"setScrollable","tagname":"method","owner":"SampleApp.view.sms.Voting","id":"method-setScrollable","meta":{}},{"name":"setTitle","tagname":"method","owner":"SampleApp.view.sms.Voting","id":"method-setTitle","meta":{}}],"code_type":"ext_define","id":"class-SampleApp.view.sms.Voting","short_doc":"User Interface for the SMS Voting application. ...","component":false,"superclasses":["Ext.Container"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Container<div class='subclass '><strong>SampleApp.view.sms.Voting</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.form.FieldSet</div><div class='dependency'>Ext.form.Panel</div><div class='dependency'><a href='#!/api/SampleApp.Config' rel='SampleApp.Config' class='docClass'>SampleApp.Config</a></div><div class='dependency'><a href='#!/api/SampleApp.view.Footer' rel='SampleApp.view.Footer' class='docClass'>SampleApp.view.Footer</a></div><div class='dependency'><a href='#!/api/SampleApp.view.Header' rel='SampleApp.view.Header' class='docClass'>SampleApp.view.Header</a></div><h4>Files</h4><div class='dependency'><a href='source/Voting.html#SampleApp-view-sms-Voting' target='_blank'>Voting.js</a></div></pre><div class='doc-contents'><p>User Interface for the SMS Voting application.</p>\n\n<p><strong>Note</strong> In order to get this sample working you must configure the <a href=\"#!/api/SampleApp.Config-property-shortCode\" rel=\"SampleApp.Config-property-shortCode\" class=\"docClass\">SampleApp.Config.shortCode</a> properly\nand your short code URI should point to /att/sms/votelistener in your application configuration.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaults' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-cfg-defaults' class='name expandable'>defaults</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{scrollable: null}</code></p></div></div></div><div id='cfg-scrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-cfg-scrollable' class='name expandable'>scrollable</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'vertical'</code></p></div></div></div><div id='cfg-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-cfg-title' class='name expandable'>title</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'SMS Voting'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-buildHeader' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-method-buildHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-method-buildHeader' class='name expandable'>buildHeader</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the UI components for Feature 1: Calculate Votes. ...</div><div class='long'><p>Builds the UI components for Feature 1: Calculate Votes.</p>\n</div></div></div><div id='method-buildVoteList' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-method-buildVoteList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-method-buildVoteList' class='name expandable'>buildVoteList</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds the list to display the votes. ...</div><div class='long'><p>Builds the list to display the votes.</p>\n</div></div></div><div id='method-getDefaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-method-getDefaults' class='name expandable'>getDefaults</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of defaults. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.sms.Voting-cfg-defaults\" rel=\"SampleApp.view.sms.Voting-cfg-defaults\" class=\"docClass\">defaults</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-method-getScrollable' class='name expandable'>getScrollable</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of scrollable. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.sms.Voting-cfg-scrollable\" rel=\"SampleApp.view.sms.Voting-cfg-scrollable\" class=\"docClass\">scrollable</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-method-getTitle' class='name expandable'>getTitle</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of title. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.view.sms.Voting-cfg-title\" rel=\"SampleApp.view.sms.Voting-cfg-title\" class=\"docClass\">title</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>override ...</div><div class='long'><p>override</p>\n</div></div></div><div id='method-setDefaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-cfg-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-method-setDefaults' class='name expandable'>setDefaults</a>( <span class='pre'>defaults</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of defaults. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.sms.Voting-cfg-defaults\" rel=\"SampleApp.view.sms.Voting-cfg-defaults\" class=\"docClass\">defaults</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>defaults</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setScrollable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-cfg-scrollable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-method-setScrollable' class='name expandable'>setScrollable</a>( <span class='pre'>scrollable</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of scrollable. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.sms.Voting-cfg-scrollable\" rel=\"SampleApp.view.sms.Voting-cfg-scrollable\" class=\"docClass\">scrollable</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scrollable</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.view.sms.Voting'>SampleApp.view.sms.Voting</span><br/><a href='source/Voting.html#SampleApp-view-sms-Voting-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.view.sms.Voting-method-setTitle' class='name expandable'>setTitle</a>( <span class='pre'>title</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of title. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.view.sms.Voting-cfg-title\" rel=\"SampleApp.view.sms.Voting-cfg-title\" class=\"docClass\">title</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});