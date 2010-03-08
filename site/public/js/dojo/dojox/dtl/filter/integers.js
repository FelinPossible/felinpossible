/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["dojox.dtl.filter.integers"]){ //_hasResource checks added by build. Do not use _hasResource directly in your code.
dojo._hasResource["dojox.dtl.filter.integers"] = true;
dojo.provide("dojox.dtl.filter.integers");

dojo.mixin(dojox.dtl.filter.integers, {
	add: function(value, arg){
		value = parseInt(value, 10);
		arg = parseInt(arg, 10);
		return isNaN(arg) ? value : value + arg;
	},
	get_digit: function(value, arg){
		// summary:
		//		Given a whole number, returns the 1-based requested digit of it
		// desciprtion:
		//		1 is the right-most digit, 2 is the second-right-most digit, etc. Returns the
		//		original value for invalid input (if input or argument is not an integer,
		//		or if argument is less than 1). Otherwise, output is always an integer.
		value = parseInt(value, 10);
		arg = parseInt(arg, 10) - 1;
		if(arg >= 0){
			value += "";
			if(arg < value.length){
				value = parseInt(value.charAt(arg), 10);
			}else{
				value = 0;
			}
		}
		return (isNaN(value) ? 0 : value);
	}
});

}
