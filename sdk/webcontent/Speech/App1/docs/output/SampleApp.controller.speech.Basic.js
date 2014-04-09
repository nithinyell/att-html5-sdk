Ext.data.JsonP.SampleApp_controller_speech_Basic({"tagname":"class","name":"SampleApp.controller.speech.Basic","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Basic.js","href":"Basic2.html#SampleApp-controller-speech-Basic"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.app.Controller","mixins":[],"requires":["Att.ApiResults","Att.Provider","SampleApp.Config"],"uses":[],"members":[{"name":"control","tagname":"cfg","owner":"SampleApp.controller.speech.Basic","id":"cfg-control","meta":{"private":true}},{"name":"provider","tagname":"cfg","owner":"SampleApp.controller.speech.Basic","id":"cfg-provider","meta":{"private":true}},{"name":"refs","tagname":"cfg","owner":"SampleApp.controller.speech.Basic","id":"cfg-refs","meta":{"private":true}},{"name":"applyProvider","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-applyProvider","meta":{}},{"name":"getControl","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-getControl","meta":{}},{"name":"getProvider","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-getProvider","meta":{}},{"name":"getRefs","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-getRefs","meta":{}},{"name":"onCloseResponseView","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-onCloseResponseView","meta":{"private":true}},{"name":"onSendSpeech","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-onSendSpeech","meta":{}},{"name":"onUseDictionary","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-onUseDictionary","meta":{"private":true}},{"name":"setControl","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-setControl","meta":{}},{"name":"setProvider","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-setProvider","meta":{}},{"name":"setRefs","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-setRefs","meta":{}},{"name":"showResponseView","tagname":"method","owner":"SampleApp.controller.speech.Basic","id":"method-showResponseView","meta":{"private":true}}],"code_type":"ext_define","id":"class-SampleApp.controller.speech.Basic","component":false,"superclasses":["Ext.app.Controller"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.Controller<div class='subclass '><strong>SampleApp.controller.speech.Basic</strong></div></div><h4>Requires</h4><div class='dependency'>Att.ApiResults</div><div class='dependency'>Att.Provider</div><div class='dependency'><a href='#!/api/SampleApp.Config' rel='SampleApp.Config' class='docClass'>SampleApp.Config</a></div><h4>Files</h4><div class='dependency'><a href='source/Basic2.html#SampleApp-controller-speech-Basic' target='_blank'>Basic.js</a></div></pre><div class='doc-contents'><p>Controller that interacts with the Basic Speech to Text application.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-cfg-control' class='name expandable'>control</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{'att-speech-basic button[action=sendspeech]': {'tap': 'onSendSpeech'}, 'actionsheet button[action=close]': {'tap': 'onCloseResponseView'}, 'att-speech-basic checkboxfield[name=customDictionary]': {'change': 'onUseDictionary'}}</code></p></div></div></div><div id='cfg-provider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-cfg-provider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-cfg-provider' class='name expandable'>provider</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-refs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-cfg-refs' class='name expandable'>refs</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{view: 'att-speech-basic', formContext: 'selectfield[name=context]', formCustomContext: 'selectfield[name=customContext]', responseView: {xtype: 'apiresults', selector: 'apiresults', hidden: true, autoCreate: true}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyProvider' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-method-applyProvider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-applyProvider' class='name expandable'>applyProvider</a>( <span class='pre'>provider</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets called internally when provider property is set during config initialization. ...</div><div class='long'><p>Gets called internally when provider property is set during config initialization.\nWe'll initialize here our Att.Provider instance to perform the API calls.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : Object<div class='sub-desc'><p>the value we set in config option for this property.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-getControl' class='name expandable'>getControl</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of control. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.speech.Basic-cfg-control\" rel=\"SampleApp.controller.speech.Basic-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProvider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-cfg-provider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-getProvider' class='name expandable'>getProvider</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of provider. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.speech.Basic-cfg-provider\" rel=\"SampleApp.controller.speech.Basic-cfg-provider\" class=\"docClass\">provider</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-getRefs' class='name expandable'>getRefs</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of refs. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SampleApp.controller.speech.Basic-cfg-refs\" rel=\"SampleApp.controller.speech.Basic-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onCloseResponseView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-method-onCloseResponseView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-onCloseResponseView' class='name expandable'>onCloseResponseView</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onSendSpeech' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-method-onSendSpeech' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-onSendSpeech' class='name expandable'>onSendSpeech</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handler for Send speech button ...</div><div class='long'><p>Handler for Send speech button</p>\n</div></div></div><div id='method-onUseDictionary' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-method-onUseDictionary' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-onUseDictionary' class='name expandable'>onUseDictionary</a>( <span class='pre'>o</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-cfg-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-setControl' class='name expandable'>setControl</a>( <span class='pre'>control</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of control. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.speech.Basic-cfg-control\" rel=\"SampleApp.controller.speech.Basic-cfg-control\" class=\"docClass\">control</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>control</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setProvider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-cfg-provider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-setProvider' class='name expandable'>setProvider</a>( <span class='pre'>provider</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of provider. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.speech.Basic-cfg-provider\" rel=\"SampleApp.controller.speech.Basic-cfg-provider\" class=\"docClass\">provider</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setRefs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-cfg-refs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-setRefs' class='name expandable'>setRefs</a>( <span class='pre'>refs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of refs. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SampleApp.controller.speech.Basic-cfg-refs\" rel=\"SampleApp.controller.speech.Basic-cfg-refs\" class=\"docClass\">refs</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>refs</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-showResponseView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SampleApp.controller.speech.Basic'>SampleApp.controller.speech.Basic</span><br/><a href='source/Basic2.html#SampleApp-controller-speech-Basic-method-showResponseView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SampleApp.controller.speech.Basic-method-showResponseView' class='name expandable'>showResponseView</a>( <span class='pre'>success, response</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>success</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>response</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});