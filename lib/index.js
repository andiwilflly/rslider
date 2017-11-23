(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("mobx-react"), require("mobx"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "mobx-react", "mobx"], factory);
	else if(typeof exports === 'object')
		exports["rSliderLib"] = factory(require("react"), require("prop-types"), require("mobx-react"), require("mobx"));
	else
		root["rSliderLib"] = factory(root["React"], root["prop-types"], root["mobx-react"], root["mobx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdaterSliderLib"];
/******/ 	this["webpackHotUpdaterSliderLib"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(requestTimeout) { // eslint-disable-line no-unused-vars
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if(typeof XMLHttpRequest === "undefined")
/******/ 				return reject(new Error("No browser support"));
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch(err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if(request.readyState !== 4) return;
/******/ 				if(request.status === 0) {
/******/ 					// timeout
/******/ 					reject(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 				} else if(request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if(request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch(e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "320f0496e3b3409e4fe0"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate).then(function(result) {
/******/ 				deferred.resolve(result);
/******/ 			}, function(err) {
/******/ 				deferred.reject(err);
/******/ 			});
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					dependency = moduleOutdatedDependencies[i];
/******/ 					cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++) {
/******/ 					cb = callbacks[i];
/******/ 					try {
/******/ 						cb(moduleOutdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "accept-errored",
/******/ 								moduleId: moduleId,
/******/ 								dependencyId: moduleOutdatedDependencies[i],
/******/ 								error: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err;
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(6)(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // React

// MobX


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobx = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// @SOURCE: https://mobx.js.org/refguide/modifiers.html#modifiers-for-observable
var RSliderModel = function () {
	function RSliderModel() {
		_classCallCheck(this, RSliderModel);

		this.rSliders = _mobx.observable.map();
		this.defaultSlider = {
			// Public (the same as in RSlider.core.observer.component [defaultProps] object)
			name: 'rSlider',
			className: '',
			style: {},
			devMode: false,
			media: false, // [false, object]
			customAnimation: false, // [ false, [fadeOutUp_fadeInDown bounceOutUp_bounceInDown_5000 (animate.css|https://daneden.github.io/animate.css/)] ]
			currentStep: 0,
			itemsShow: 1,
			itemsScroll: 1,
			infinity: true,
			draggable: false,
			draggableSensitivity: 10,
			autoPlay: false,
			stickOut: 0, // [0%-100%]
			// Public callbacks
			onReady: function onReady(slider) {},
			onStepChange: function onStepChange(slider) {},
			onDragEnd: function onDragEnd(slider, draggable) {},

			// Private
			leftPosition: 0,
			sliderWidth: 0,
			itemWidth: 0,
			innerWidth: 0,
			itemsCount: 0,
			currentVisibleItems: [],
			customAnimationStatus: 'disabled' // [started, running, disabled]
		};
		this.elements = ['RSliderArrowL', 'RSliderArrowR', 'RSliderItems', 'RSliderItem', 'RSliderPagination'];
	}

	_createClass(RSliderModel, [{
		key: 'create',
		value: function create(state) {
			var _this = this;

			(0, _mobx.runInAction)('\uD83E\uDD84-SLIDER-CREATE-' + (this.rSliders.get(state.name) ? 'ERROR (already exists)' : 'SUCCESS') + '-' + state.name, function () {
				_this.rSliders.set(state.name, (0, _mobx.observable)(Object.assign(_this.defaultSlider, state, {
					leftPosition: state.leftPosition || _this._getLeftPosition(Object.assign(_this.defaultSlider, state)),
					currentVisibleItems: _this._getCurrentVisibleItems(Object.assign(_this.defaultSlider, state))
				})));
			});
			return this;
		}
	}, {
		key: 'update',
		value: function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(state) {
				var rSlider;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								rSlider = this.rSliders.get(state.name);


								if (!rSlider) (0, _mobx.runInAction)('\uD83E\uDD84-SLIDER-UPDATE-ERROR (no such slider) ' + state.name, function () {});

								// Disable [rSlider] when [rSlider.customAnimation] is running

								if (!(rSlider.customAnimationStatus !== 'disabled')) {
									_context.next = 4;
									break;
								}

								return _context.abrupt('return', this);

							case 4:

								// [Last] slide already reached, but you trying to move further
								// Back to [first] slide after [last] if [infinity] mode On
								if (state.currentStep >= this.steps.all(rSlider)) state.currentStep = rSlider.infinity ? 0 : this.steps.all(rSlider) - 1;

								// [Firs] slide already reached, but you trying to move further
								// Back to [last] slider after [first] if [infinity] mode On
								if (state.currentStep < 0) state.currentStep = rSlider.infinity ? this.steps.all(rSlider) - 1 : 0;

								// Start of custom animation

								if (!this.slides.isCustomAnimationEffect(rSlider)) {
									_context.next = 10;
									break;
								}

								(0, _mobx.extendObservable)(rSlider, { customAnimationStatus: 'started' });
								_context.next = 10;
								return this.delay(this.slides.customAnimationDuration(rSlider) / 1.3);

							case 10:

								// Extend [state] with [rSlider]
								(0, _mobx.extendObservable)(rSlider, state);
								(0, _mobx.extendObservable)(rSlider, {
									leftPosition: state.leftPosition || this._getLeftPosition(rSlider),
									currentVisibleItems: this._getCurrentVisibleItems(rSlider)
								});

								// End of custom animation

								if (!this.slides.isCustomAnimationEffect(rSlider)) {
									_context.next = 17;
									break;
								}

								(0, _mobx.extendObservable)(rSlider, { customAnimationStatus: 'running' });
								_context.next = 16;
								return this.delay(this.slides.customAnimationDuration(rSlider));

							case 16:
								(0, _mobx.extendObservable)(rSlider, { customAnimationStatus: 'disabled' });

							case 17:
								return _context.abrupt('return', this);

							case 18:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function update(_x) {
				return _ref.apply(this, arguments);
			}

			return update;
		}()
	}, {
		key: 'remove',
		value: function remove(_ref2) {
			var name = _ref2.name;

			(0, _mobx.runInAction)('\uD83E\uDD84-SLIDER-REMOVE-' + (this.rSliders.delete(name) ? 'SUCCESS' : 'ERROR (no such slider)') + '-' + name, function () {});
			return this;
		}
	}, {
		key: 'delay',


		// @private
		value: function delay() {
			var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					resolve();
				}, duration);
			});
		}

		// @private

	}, {
		key: '_getLeftPosition',
		value: function _getLeftPosition(rSlider) {
			var difference = this.steps.isLast(rSlider) ? this.slides.difference(rSlider) * rSlider.itemWidth : 0;
			var leftPosition = -rSlider.currentStep * rSlider.itemsScroll * rSlider.itemWidth + difference;

			return rSlider.stickOut && this.steps.isLast(rSlider) ? leftPosition + +rSlider.stickOut : leftPosition;
		}

		// @private
		// TODO: Invalid>?>?

	}, {
		key: '_getCurrentVisibleItems',
		value: function _getCurrentVisibleItems(rSlider) {
			var startFrom = rSlider.currentStep * rSlider.itemsScroll - (this.steps.isLast(rSlider) ? this.slides.difference(rSlider) : 0);
			return new Array(+rSlider.itemsShow).fill(undefined).map(function (value, index) {
				return +startFrom + index;
			});
		}
	}, {
		key: 'slides',
		get: function get() {
			var _this2 = this;

			return {
				invisible: function invisible(rSlider) {
					return rSlider.itemsCount - rSlider.itemsShow;
				},
				mustBeInvisible: function mustBeInvisible(rSlider) {
					return _this2.steps.toEnd(rSlider) * rSlider.itemsScroll;
				},
				difference: function difference(rSlider) {
					return _this2.slides.mustBeInvisible(rSlider) - _this2.slides.invisible(rSlider);
				},
				isCustomAnimationEffect: function isCustomAnimationEffect(rSlider) {
					return rSlider.customAnimation && rSlider.itemsShow === 1 && rSlider.draggable === false;
				},
				customAnimationDuration: function customAnimationDuration(rSlider) {
					return rSlider.customAnimation && rSlider.customAnimation.split("_")[2] ? +rSlider.customAnimation.split("_")[2] : 1000;
				}
			};
		}
	}, {
		key: 'steps',
		get: function get() {
			var _this3 = this;

			return {
				toEnd: function toEnd(rSlider) {
					return Math.ceil(_this3.slides.invisible(rSlider) / rSlider.itemsScroll);
				},
				all: function all(rSlider) {
					return _this3.steps.toEnd(rSlider) + 1;
				},
				isLast: function isLast(rSlider) {
					return _this3.steps.all(rSlider) === rSlider.currentStep + 1;
				}
			};
		}
	}]);

	return RSliderModel;
}();

exports.default = new RSliderModel();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class; // React

// MobX

// Models


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobx = __webpack_require__(5);

var _rSlider = __webpack_require__(1);

var _rSlider2 = _interopRequireDefault(_rSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var RSliderBasic = (_class = function (_React$Component) {
	_inherits(RSliderBasic, _React$Component);

	function RSliderBasic() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RSliderBasic);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RSliderBasic.__proto__ || Object.getPrototypeOf(RSliderBasic)).call.apply(_ref, [this].concat(args))), _this), _this._lastMatchedMediaName = null, _this._timeout = {
			recalculateSliderItems: null,
			detectMediaMatch: null
		}, _this.onResizeSlider = function () {
			if (_this.slider && _this.slider.media) _this.detectMediaMatch();
		}, _this.recalculateSliderItems = function () {
			clearTimeout(_this._timeout['recalculateSliderItems']);
			_this._timeout['recalculateSliderItems'] = setTimeout(function () {
				if (!_this.slider) return;
				var childrenLength = _this.props.children.type ? 1 : _this.props.children.length;
				var isShortSlider = childrenLength <= _this.slider.itemsShow;

				var itemWidth = isShortSlider ? _this.getElementPureWidth(_this.slider.sliderEl) / childrenLength : _this.getElementPureWidth(_this.slider.sliderEl) / _this.slider.itemsShow;

				if (!_this.slider.itemsCount) _this.slider.onReady(_this.slider);

				_rSlider2.default.update(_extends({
					name: _this.sliderName,
					itemsCount: childrenLength,
					innerWidth: itemWidth * childrenLength,
					itemWidth: itemWidth,
					itemsShow: isShortSlider ? childrenLength : _this.slider.itemsShow,
					infinity: isShortSlider ? false : _this.slider.infinity
				}, typeof _this.props.stickOut !== 'undefined' && { stickOut: _this.props.stickOut }));
			}, 300);
		}, _this.detectMediaMatch = function () {
			clearTimeout(_this._timeout['detectMediaMatch']);
			_this._timeout['detectMediaMatch'] = setTimeout(function () {
				if (!_this.slider) return;
				var isMatched = false;

				Object.keys(_this.slider.media).some(function (mediaName) {
					var range = mediaName.split('*');
					range[0] = range[0] === '' ? 0 : +range[0];
					range[1] = range[1] === '' ? 99999 : +range[1] - 1;

					if (range[0] <= _this.documentWidth && _this.documentWidth <= range[1]) {
						isMatched = true;
						if (_this._lastMatchedMediaName === mediaName) return;
						_this._lastMatchedMediaName = mediaName;
						_rSlider2.default.update(_extends({
							name: _this.slider.name
						}, _this.slider.media[mediaName], {
							currentStep: 0
						}));
						return true; // Break loop if [matched]
					}
				});

				if (!isMatched && _this._lastMatchedMediaName !== 'default') {
					_this._lastMatchedMediaName = 'default';
					_rSlider2.default.update(_extends({
						name: _this.slider.name
					}, _this.props));
				}
			}, 300);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	// @private
	// Cache for better performance

	_createClass(RSliderBasic, [{
		key: 'getElementPureWidth',
		value: function getElementPureWidth(element) {
			var styles = window.getComputedStyle(element);
			var padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
			return element.offsetWidth - padding;
		}

		// Call from [RSliderItems]

	}, {
		key: 'sliderName',
		get: function get() {
			return this.props.name || this.context.name;
		}
	}, {
		key: 'slider',
		get: function get() {
			return _rSlider2.default.rSliders.get(this.sliderName);
		}
	}, {
		key: 'elements',
		get: function get() {
			return _rSlider2.default.elements;
		}
	}, {
		key: 'isCustomAnimationEffect',
		get: function get() {
			return _rSlider2.default.slides.isCustomAnimationEffect(this.slider);
		}
	}, {
		key: 'documentWidth',
		get: function get() {
			return Math.max(document.documentElement["clientWidth"], document.body["scrollWidth"], document.documentElement["scrollWidth"], document.body["offsetWidth"], document.documentElement["offsetWidth"]);
		}
	}]);

	return RSliderBasic;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'sliderName', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'sliderName'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'slider', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'slider'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'elements', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'elements'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'isCustomAnimationEffect', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'isCustomAnimationEffect'), _class.prototype)), _class);
exports.default = RSliderBasic;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _RSlider = __webpack_require__(8);

var _RSlider2 = _interopRequireDefault(_RSlider);

var _RSliderItems = __webpack_require__(9);

var _RSliderItems2 = _interopRequireDefault(_RSliderItems);

var _RSliderArrowL = __webpack_require__(12);

var _RSliderArrowL2 = _interopRequireDefault(_RSliderArrowL);

var _RSliderArrowR = __webpack_require__(13);

var _RSliderArrowR2 = _interopRequireDefault(_RSliderArrowR);

var _RSliderPagination = __webpack_require__(14);

var _RSliderPagination2 = _interopRequireDefault(_RSliderPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	RSlider: _RSlider2.default,
	RSliderItems: _RSliderItems2.default,
	RSliderArrowL: _RSliderArrowL2.default,
	RSliderArrowR: _RSliderArrowR2.default,
	RSliderPagination: _RSliderPagination2.default
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; // React

// MobX

// Models

// Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobx = __webpack_require__(5);

var _mobxReact = __webpack_require__(3);

var _rSlider = __webpack_require__(1);

var _rSlider2 = _interopRequireDefault(_rSlider);

var _RSliderBasic2 = __webpack_require__(4);

var _RSliderBasic3 = _interopRequireDefault(_RSliderBasic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RSlider = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_RSliderBasic) {
	_inherits(RSlider, _RSliderBasic);

	function RSlider() {
		_classCallCheck(this, RSlider);

		return _possibleConstructorReturn(this, (RSlider.__proto__ || Object.getPrototypeOf(RSlider)).apply(this, arguments));
	}

	_createClass(RSlider, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return { name: this.props.name };
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, nextState) {
			if (nextProps.stickOut === 0 && this.props.stickOut > 0) return;
			if (this.props.stickOut !== nextProps.stickOut) _rSlider2.default.update({
				name: this.props.name,
				stickOut: nextProps.stickOut
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			_rSlider2.default.create(_extends({}, this.props, {
				sliderEl: this.refs.rSlider,
				sliderWidth: this.refs.rSlider.offsetWidth,
				itemWidth: this.getElementPureWidth(this.refs.rSlider) / this.props.itemsShow
			}));

			if (this.slider.media) this.detectMediaMatch();
			window.addEventListener("resize", this.onResizeSlider);

			// Better call [rSlider.callbacks] from [reactions]
			this['RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()'] = (0, _mobx.reaction)(function () {
				return _this2.slider && _this2.slider.currentStep;
			}, function () {
				return _this2.slider && _this2.slider.onStepChange(_this2.slider);
			}, { name: 'RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()' });
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this['RSlider | changed: this.slider.currentStep | run: this.slider.onStepChange()']();
			window.removeEventListener("resize", this.onResizeSlider);
			// We need to take some time, before all RSlider [components] unMounted and remove their [reactions]
			if (this.slider) _rSlider2.default.remove({ name: this.slider.name });
		}

		// TODO: Add on key press events

	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'rslider ' + (this.slider ? this.slider.className : ''),
						ref: 'rSlider',
						style: this.slider ? _extends({}, this.slider.style, this.props.stickOut && { paddingRight: this.props.stickOut + 'px' }) : _extends({}, this.props.stickOut && { paddingRight: this.props.stickOut + 'px' }) },
					this.slider ? this.props.children : null
				),
				this.slider && this.slider.devMode ? _react2.default.createElement(
					'ul',
					{ style: { float: 'left', width: '100%' } },
					Object.keys(this.slider).map(function (name) {
						var prop = _this3.slider[name];
						return _react2.default.createElement(
							'p',
							{ key: name },
							name,
							': ',
							prop instanceof Object || prop instanceof Function || name === 'children' ? '[ content ]' : JSON.stringify(_this3.slider[name])
						);
					})
				) : null
			);
		}
	}]);

	return RSlider;
}(_RSliderBasic3.default), _class2.propTypes = {
	name: _propTypes2.default.string.isRequired,
	className: _propTypes2.default.string,
	style: _propTypes2.default.object,
	devMode: _propTypes2.default.bool,
	currentStep: _propTypes2.default.number
}, _class2.defaultProps = {
	name: 'rSlider',
	className: '',
	style: {},
	devMode: false,
	media: false,
	customAnimation: false,
	currentStep: 0,
	itemsShow: 1,
	itemsScroll: 1,
	infinity: true,
	draggable: false,
	draggableSensitivity: 10, // Diff more 10% from right or from left side cause [rSlider.currentStep] change (only for [draggable] mode)
	autoPlay: false,
	stickOut: 0, // [0%-100%]

	// Public callbacks
	onReady: function onReady(slider) {},
	onStepChange: function onStepChange(slider) {},
	onDragEnd: function onDragEnd(slider, draggable) {}
}, _class2.childContextTypes = {
	name: _propTypes2.default.string.isRequired
}, _temp)) || _class;

;

exports.default = RSlider;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; // React

// MobX

// Models

// Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = __webpack_require__(3);

var _rSlider = __webpack_require__(1);

var _rSlider2 = _interopRequireDefault(_rSlider);

var _RSliderBasic2 = __webpack_require__(4);

var _RSliderBasic3 = _interopRequireDefault(_RSliderBasic2);

var _RSliderDraggable = __webpack_require__(10);

var _RSliderDraggable2 = _interopRequireDefault(_RSliderDraggable);

var _RSliderItem = __webpack_require__(11);

var _RSliderItem2 = _interopRequireDefault(_RSliderItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RSliderItems = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_RSliderBasic) {
	_inherits(RSliderItems, _RSliderBasic);

	function RSliderItems() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RSliderItems);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RSliderItems.__proto__ || Object.getPrototypeOf(RSliderItems)).call.apply(_ref, [this].concat(args))), _this), _this.renderSliderItems = function () {
			if (_this.props.children.type) return _this.renderSliderItem(_this.props.children, 0);
			return _this.props.children.map(function (child, i) {
				return _this.renderSliderItem(child, i);
			});
		}, _this.renderSliderItem = function (child, i) {
			return _react2.default.createElement(
				_RSliderItem2.default,
				{ itemIndex: i, key: i },
				child
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RSliderItems, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.recalculateSliderItems();
			window.addEventListener("resize", this.recalculateSliderItems);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener("resize", this.recalculateSliderItems);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this2 = this;

			// Fix problem when we have [children] count update after [rSlider] creation
			clearTimeout(this.timeout);
			this.timeout = setTimeout(function () {
				if (!_this2.slider) return;
				if (nextProps.children.length !== _this2.slider.itemsCount) {
					var event = document.createEvent('HTMLEvents');
					event.initEvent('resize', true, false);
					window.dispatchEvent(event);
					_rSlider2.default.update({
						name: _this2.slider.name,
						currentStep: 0
					});
				}
			}, 1000);
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.slider.devMode) console.log('RSliderItems render');

			return _react2.default.createElement(
				'div',
				{ className: 'rslider__list ' + this.props.className,
					style: _extends({}, this.props.style, { overflow: 'visible' }) },
				this.slider.draggable ? _react2.default.createElement(
					_RSliderDraggable2.default,
					null,
					this.renderSliderItems()
				) : this.isCustomAnimationEffect ? _react2.default.createElement(
					_RSliderItem2.default,
					{ itemIndex: this.slider.currentStep },
					this.props.children.type ? this.props.children : this.props.children[this.slider.currentStep]
				) : _react2.default.createElement(
					'div',
					{ className: 'rslider__track', style: {
							width: this.slider.innerWidth,
							left: this.slider.leftPosition
						} },
					this.renderSliderItems()
				)
			);
		}
	}]);

	return RSliderItems;
}(_RSliderBasic3.default), _class2._name = 'RSliderItems', _class2.propTypes = {
	className: _propTypes2.default.string,
	style: _propTypes2.default.object
}, _class2.defaultProps = {
	classes: '',
	style: {}
}, _class2.contextTypes = {
	name: _propTypes2.default.string.isRequired
}, _temp2)) || _class;

exports.default = RSliderItems;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; // React

// MobX

// Models

// Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = __webpack_require__(3);

var _rSlider = __webpack_require__(1);

var _rSlider2 = _interopRequireDefault(_rSlider);

var _RSliderBasic2 = __webpack_require__(4);

var _RSliderBasic3 = _interopRequireDefault(_RSliderBasic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RSliderDraggable = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_RSliderBasic) {
	_inherits(RSliderDraggable, _RSliderBasic);

	function RSliderDraggable() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RSliderDraggable);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RSliderDraggable.__proto__ || Object.getPrototypeOf(RSliderDraggable)).call.apply(_ref, [this].concat(args))), _this), _this.draggable = {
			x: 0,
			y: 0,
			startX: 0,
			realStartPos: { x: 0, y: 0 },
			el: null,
			isSelectedEl: false,
			moveCounter: 0,
			isVerticalDrag: false,

			init: function init(el) {
				_this.draggable.el = el;

				// Desktop drag events
				_this.draggable.el.addEventListener('mousedown', _this.draggable.start, false);
				document.addEventListener('mousemove', _this.draggable.move, false);
				document.addEventListener('mouseup', _this.draggable.stop, false);

				// Mobile drag events
				_this.draggable.el.addEventListener('touchstart', function (e) {
					_this.draggable.x = e.touches[0].pageX;
					_this.draggable.y = e.touches[0].pageY;
					_this.draggable.start();

					_this.draggable._isVerticalDrag({
						x: e.touches[0].pageX,
						y: e.touches[0].pageY
					});
					_this.draggable.el.addEventListener('touchmove', _this.draggable.move, false);
				}, false);
				window.addEventListener('touchend', _this.draggable.stop, false);
			},

			start: function start() {
				_this.draggable.isSelectedEl = true;
				_this.draggable.startX = _this.draggable.x - _this.draggable.el['offsetLeft'];
			},

			move: function move(e) {
				_this.draggable.x = e.touches && e.touches[0].pageX || (document.all ? window.event["clientX"] : e["pageX"]);
				_this.draggable.y = e.touches && e.touches[0].pageY || (document.all ? window.event["clientY"] : e["pageY"]);

				if (!_this.draggable.isSelectedEl) return;
				if (_this.draggable.isVerticalDrag) return _this.draggable.stop();

				// Prevent default for mobile devices (IOS Safari problems) when drag event is not [vertical]
				if (!_this.draggable._isVerticalDrag({
					x: _this.draggable.x,
					y: _this.draggable.y
				})) e.preventDefault();

				_this.draggable.el.className = 'rslider__track rslider__track_state_selected'; // Disable [transition]
				_rSlider2.default.update({
					name: _this.slider.name,
					leftPosition: _this.draggable.x - _this.draggable.startX
				});
			},

			stop: function stop() {
				if (!_this.draggable.isSelectedEl) return;

				_this.draggable.moveCounter = 0;
				_this.draggable.isVerticalDrag = false;
				_this.draggable.isSelectedEl = false;
				_this.draggable.el.className = 'rslider__track'; // Enable [transition]

				var step = _this.slider.itemWidth * _this.slider.itemsScroll;
				var diff = _this.draggable.startX - _this.draggable.x;
				var currentSlideDiff = diff - _this.slider.currentStep * step;
				var diffPercent = Math.round(Math.abs(currentSlideDiff * 100 / _this.slider.itemWidth));

				_rSlider2.default.update({
					name: _this.slider.name,
					currentStep: diffPercent > _this.slider.draggableSensitivity ? currentSlideDiff > 0 ? _this.slider.currentStep + 1 : _this.slider.currentStep - 1 : Math.round(diff / step)
				});

				// UnSubscribe
				_this.draggable.el.removeEventListener('touchmove', _this.draggable.move);
				// Callback
				_this.slider.onDragEnd(_this.slider, _this.draggable);
			},

			remove: function remove() {
				// Mobile drag events
				_this.draggable.el.removeEventListener('touchstart', _this.draggable.start);
				_this.draggable.el.removeEventListener('touchmove', _this.draggable.move);
				window.removeEventListener('touchend', _this.draggable.stop);

				// Desktop drag events
				_this.draggable.el.removeEventListener("mousedown", _this.draggable.start);
				document.removeEventListener("mousemove", _this.draggable.move);
				document.removeEventListener("mouseup", _this.draggable.stop);
			},

			_isVerticalDrag: function _isVerticalDrag(_ref2) {
				var x = _ref2.x,
				    y = _ref2.y;

				if (_this.draggable.moveCounter === 0) {
					_this.draggable.realStartPos = { x: x, y: y };
					_this.draggable.moveCounter += 1;
				} else {
					if (Math.abs(_this.draggable.realStartPos.x - x) <= Math.abs(_this.draggable.realStartPos.y - y)) {
						console.log('[vertical drag]');
						_this.draggable.isVerticalDrag = true;
						_this.draggable.moveCounter += 1;
						return true;
					} else {
						_this.draggable.moveCounter += 1;
						return false;
					}
				}
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RSliderDraggable, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.draggable.init(this.refs.rSliderDraggable);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.draggable.remove();
		}

		// @SOURCE: https://jsfiddle.net/tovic/Xcb8d/
		// @SOURCE: http://codepen.io/Shikkediel/pen/VLZKor [mobile]

	}, {
		key: 'render',
		value: function render() {
			if (this.slider.devMode) console.log('RSliderDraggable render');

			return _react2.default.createElement(
				'div',
				{ className: 'rslider__track', ref: 'rSliderDraggable', style: {
						width: this.slider.innerWidth,
						left: this.slider.leftPosition
					} },
				this.props.children
			);
		}
	}]);

	return RSliderDraggable;
}(_RSliderBasic3.default), _class2._name = 'RSliderArrowR', _class2.contextTypes = {
	name: _propTypes2.default.string.isRequired
}, _temp2)) || _class;

exports.default = RSliderDraggable;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2, _class3, _temp; // React

// MobX

// Models

// Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobx = __webpack_require__(5);

var _mobxReact = __webpack_require__(3);

var _rSlider = __webpack_require__(1);

var _rSlider2 = _interopRequireDefault(_rSlider);

var _RSliderBasic2 = __webpack_require__(4);

var _RSliderBasic3 = _interopRequireDefault(_RSliderBasic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var RSliderItem = (0, _mobxReact.observer)(_class = (_class2 = (_temp = _class3 = function (_RSliderBasic) {
	_inherits(RSliderItem, _RSliderBasic);

	function RSliderItem() {
		_classCallCheck(this, RSliderItem);

		return _possibleConstructorReturn(this, (RSliderItem.__proto__ || Object.getPrototypeOf(RSliderItem)).apply(this, arguments));
	}

	_createClass(RSliderItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (!this.slider.autoPlay) return;
			this['RSliderItem | changed: rSliderModel.currentStep | run: this.startItemAutoPlayInterval()'] = (0, _mobx.reaction)(function () {
				return _this2.slider && _this2.slider.currentVisibleItems[0] === _this2.props.itemIndex;
			}, function () {
				return _this2.slider && _this2.isAutoPlay ? _this2.startItemAutoPlayInterval() : clearTimeout(_this2.timer);
			}, {
				name: 'RSliderItem | changed: rSliderModel.currentStep | run: this.startItemAutoPlayInterval()',
				fireImmediately: this.isAutoPlay
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (!this['RSliderItem | changed: rSliderModel.currentStep | run: this.startItemAutoPlayInterval()']) return;
			this['RSliderItem | changed: rSliderModel.currentStep | run: this.startItemAutoPlayInterval()']();
		}
	}, {
		key: 'startItemAutoPlayInterval',
		value: function startItemAutoPlayInterval() {
			var _this3 = this;

			this.timer = setTimeout(function () {
				if (!_this3.slider) return; // RSlider was removed before
				_rSlider2.default.update({
					name: _this3.slider.name,
					currentStep: _rSlider2.default.steps.isLast(_this3.slider) ? 0 : _this3.slider.currentStep + 1
				});
			}, this.duration);
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.slider.devMode) console.log('RSliderItem render');

			return _react2.default.createElement(
				'div',
				{ className: this.className + (' ' + (this.isCurrentVisibleItem ? "rslider__slide_state_active" : "")),
					style: {
						width: this.slider.itemWidth,
						height: this.isCurrentVisibleItem ? 'auto' : 0,
						animationDuration: this.animationDurationStyle
					} },
				this.props.children
			);
		}
	}, {
		key: 'isAutoPlay',
		get: function get() {
			return this.slider.currentVisibleItems[0] === this.props.itemIndex && this.slider.autoPlay;
		}
	}, {
		key: 'duration',
		get: function get() {
			return this.props.children.props ? this.props.children.props['data-duration'] || 7000 : null;
		}
	}, {
		key: 'isCurrentVisibleItem',
		get: function get() {
			return this.slider.currentVisibleItems.includes(this.props.itemIndex);
		}
	}, {
		key: 'className',
		get: function get() {
			switch (this.slider.customAnimationStatus) {
				case 'started':
					return 'rslider__slide animated ' + this.slider.customAnimation.split('_')[0];
					break;
				case 'running':
					return 'rslider__slide animated ' + this.slider.customAnimation.split('_')[1];
					break;
				case 'disabled':
					return 'rslider__slide ';
					break;
			}
		}
	}, {
		key: 'animationDurationStyle',
		get: function get() {
			return this.isCustomAnimationEffect ? _rSlider2.default.slides.customAnimationDuration(this.slider) / 1000 + 's' : '';
		}
	}]);

	return RSliderItem;
}(_RSliderBasic3.default), _class3._name = 'RSliderItems', _class3.propTypes = {
	itemIndex: _propTypes2.default.number.isRequired
}, _class3.contextTypes = {
	name: _propTypes2.default.string.isRequired
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'isAutoPlay', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'isAutoPlay'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'duration', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'duration'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'isCurrentVisibleItem', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'isCurrentVisibleItem'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'className', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'className'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'animationDurationStyle', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'animationDurationStyle'), _class2.prototype)), _class2)) || _class;

exports.default = RSliderItem;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2, _class3, _temp2; // React

// MobX

// Models

// Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobx = __webpack_require__(5);

var _mobxReact = __webpack_require__(3);

var _rSlider = __webpack_require__(1);

var _rSlider2 = _interopRequireDefault(_rSlider);

var _RSliderBasic2 = __webpack_require__(4);

var _RSliderBasic3 = _interopRequireDefault(_RSliderBasic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var RSliderArrowL = (0, _mobxReact.observer)(_class = (_class2 = (_temp2 = _class3 = function (_RSliderBasic) {
	_inherits(RSliderArrowL, _RSliderBasic);

	function RSliderArrowL() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RSliderArrowL);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RSliderArrowL.__proto__ || Object.getPrototypeOf(RSliderArrowL)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
			_rSlider2.default.update({
				name: _this.slider.name,
				currentStep: _this.slider.currentStep - 1
			});
			if (_this.props.onClick) _this.props.onClick(_this.slider);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RSliderArrowL, [{
		key: 'render',
		value: function render() {
			if (this.slider.devMode) console.log('RSliderArrowL render');

			return _react2.default.createElement(
				'button',
				{ className: this.arrowClasses,
					style: this.props.style,
					tabIndex: '1',
					onClick: this.onClick },
				'prev'
			);
		}
	}, {
		key: 'disableArrow',
		get: function get() {
			return this.slider.currentStep === 0 && !this.slider.infinity;
		}
	}, {
		key: 'arrowState',
		get: function get() {
			return this.disableArrow ? 'rslider__arrow_state_disabled' : '';
		}
	}, {
		key: 'arrowClasses',
		get: function get() {
			return 'rslider__arrow rslider__arrow_type_left ' + this.arrowState + ' ' + this.props.classes;
		}
	}]);

	return RSliderArrowL;
}(_RSliderBasic3.default), _class3._name = 'RSliderArrowL', _class3.propTypes = {
	classes: _propTypes2.default.string,
	style: _propTypes2.default.object,
	onClick: _propTypes2.default.func
}, _class3.defaultProps = {
	classes: '',
	style: {},
	onClick: null
}, _class3.contextTypes = {
	name: _propTypes2.default.string.isRequired
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'disableArrow', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'disableArrow'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'arrowState', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'arrowState'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'arrowClasses', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'arrowClasses'), _class2.prototype)), _class2)) || _class;

exports.default = RSliderArrowL;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2, _class3, _temp2; // React

// MobX

// Models

// Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobx = __webpack_require__(5);

var _mobxReact = __webpack_require__(3);

var _rSlider = __webpack_require__(1);

var _rSlider2 = _interopRequireDefault(_rSlider);

var _RSliderBasic2 = __webpack_require__(4);

var _RSliderBasic3 = _interopRequireDefault(_RSliderBasic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var RSliderArrowR = (0, _mobxReact.observer)(_class = (_class2 = (_temp2 = _class3 = function (_RSliderBasic) {
	_inherits(RSliderArrowR, _RSliderBasic);

	function RSliderArrowR() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RSliderArrowR);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RSliderArrowR.__proto__ || Object.getPrototypeOf(RSliderArrowR)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
			_rSlider2.default.update({
				name: _this.slider.name,
				currentStep: _this.slider.currentStep + 1
			});
			if (_this.props.onClick) _this.props.onClick(_this.slider);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RSliderArrowR, [{
		key: 'render',
		value: function render() {
			if (this.slider.devMode) console.log('RSliderArrowR render');

			return _react2.default.createElement(
				'div',
				{ className: this.arrowClasses,
					style: this.props.style,
					tabIndex: '1',
					onClick: this.onClick },
				this.props.children
			);
		}
	}, {
		key: 'disableArrow',
		get: function get() {
			return _rSlider2.default.steps.isLast(this.slider) && !this.slider.infinity;
		}
	}, {
		key: 'arrowState',
		get: function get() {
			return this.disableArrow ? 'rslider__arrow_state_disabled' : '';
		}
	}, {
		key: 'arrowClasses',
		get: function get() {
			return 'rslider__arrow rslider__arrow_type_right ' + this.arrowState + ' ' + this.props.classes;
		}
	}]);

	return RSliderArrowR;
}(_RSliderBasic3.default), _class3._name = 'RSliderArrowR', _class3.propTypes = {
	classes: _propTypes2.default.string,
	style: _propTypes2.default.object,
	onClick: _propTypes2.default.func
}, _class3.defaultProps = {
	classes: '',
	style: {},
	onClick: null
}, _class3.contextTypes = {
	name: _propTypes2.default.string.isRequired
}, _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'disableArrow', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'disableArrow'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'arrowState', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'arrowState'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'arrowClasses', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'arrowClasses'), _class2.prototype)), _class2)) || _class;

exports.default = RSliderArrowR;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; // React

// MobX

// Models

// Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = __webpack_require__(3);

var _rSlider = __webpack_require__(1);

var _rSlider2 = _interopRequireDefault(_rSlider);

var _RSliderBasic2 = __webpack_require__(4);

var _RSliderBasic3 = _interopRequireDefault(_RSliderBasic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RSliderPagination = (0, _mobxReact.observer)(_class = (_temp2 = _class2 = function (_RSliderBasic) {
	_inherits(RSliderPagination, _RSliderBasic);

	function RSliderPagination() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RSliderPagination);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RSliderPagination.__proto__ || Object.getPrototypeOf(RSliderPagination)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (step) {
			_rSlider2.default.update({
				name: _this.slider.name,
				currentStep: step
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RSliderPagination, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (_rSlider2.default.steps.all(this.slider) < 2) return null; // not loaded or enough slides

			if (this.slider.devMode) console.log('RSliderPagination render');

			return _react2.default.createElement(
				'ul',
				{ className: 'rslider__pagination ' + this.props.className },
				new Array(_rSlider2.default.steps.all(this.slider)).fill(undefined).map(function (value, step) {
					return _react2.default.createElement(
						'li',
						{ key: step,
							className: 'rslider__pager-item ' + (_this2.slider.currentStep === step ? 'rslider__pager-item_state_active' : ''),
							onClick: function onClick() {
								return _this2.onClick(step);
							} },
						_this2.props.children ? _this2.props.children[step] || _react2.default.createElement(
							'button',
							{ className: 'rslider__pager-btn' },
							step
						) // custom pagination case
						: _react2.default.createElement(
							'button',
							{ className: 'rslider__pager-btn' },
							step
						)
					);
				})
			);
		}
	}]);

	return RSliderPagination;
}(_RSliderBasic3.default), _class2._name = 'RSliderPagination', _class2.propTypes = {
	className: _propTypes2.default.string
}, _class2.defaultProps = {
	className: ''
}, _class2.contextTypes = {
	name: _propTypes2.default.string.isRequired
}, _temp2)) || _class;

exports.default = RSliderPagination;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map