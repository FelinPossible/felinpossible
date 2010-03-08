/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.form.manager._EnableMixin"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojox.form.manager._EnableMixin"] = true;
dojo.provide("dojox.form.manager._EnableMixin");

dojo.require("dojox.form.manager._Mixin");

(function(){
	var fm = dojox.form.manager,
		aa = fm.actionAdapter,
		ia = fm.inspectorAdapter;

	dojo.declare("dojox.form.manager._EnableMixin", null, {
		// summary:
		//		Form manager's mixin for controlling enable/disable state of
		//		form elements.
		// description:
		//		This mixin provides unified enable/disable functionality for
		//		form widgets and form elements. It should be used together
		//		with dojox.form.manager.Mixin.

		gatherEnableState: function(names){
			// summary:
			//		Gather enable state of all form elements and return as a dictionary.
			// names: Object?:
			//		If it is an array, it is a list of names to be processed.
			//		If it is an object, dictionary keys are names to be processed.
			//		If it is omitted, all known form elements are to be processed.

			var result = this.inspectFormWidgets(ia(function(name, widget){
				return !widget.attr("disabled");
			}), names);

			if(this.inspectFormNodes){
				dojo.mixin(result, this.inspectFormNodes(ia(function(name, node){
					return !dojo.attr(node, "disabled");
				}), names));
			}

			return result;	// Object
		},

		enable: function(state, defaultState){
			// summary:
			//		Enable form controls according to the supplied state object.
			// state: Object?:
			//		Optional. If a name-value dictionary, the value is true
			//		to enable and false to disable. If an array, all names in the
			//		array will be set to defaultState. If omitted, all form
			//		elements will be set to defaultState.
			// defaultState: Boolean:
			//		The default state (true, if omitted).

			if(arguments.length < 2 || defaultState === undefined){
				defaultState = true;
			}

			this.inspectFormWidgets(aa(function(name, widget, value){
				widget.attr("disabled", !value);
			}), state, defaultState);

			if(this.inspectFormNodes){
				this.inspectFormNodes(aa(function(name, node, value){
					dojo.attr(node, "disabled", !value);
				}), state, defaultState);
			}

			return this;	// self
		},

		disable: function(state){
			// summary:
			//		Disable form controls according to the supplied state object
			//		returning the previous state.
			// state: Object?:
			//		Optional. If a name-value dictionary, the value is true
			//		to enable and false to disable. If an array, all names in the
			//		array will be disabled. If omitted, disables all.
			var oldState = this.gatherEnableState();
			this.enable(state, false);
			return oldState;	// Object
		}
	});
})();

}
