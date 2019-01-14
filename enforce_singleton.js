/*jslint node: true */
"use strict";

if (global._bWntCoreLoaded)
	throw Error("Looks like you are loading multiple copies of wntcore, which is not supported.\nRunning 'npm dedupe' might help.");

global._bWntCoreLoaded = true;
