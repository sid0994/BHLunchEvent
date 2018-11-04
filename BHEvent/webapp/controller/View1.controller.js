sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageBox',
	'../model/models'
], function(Controller, JSONModel, MessageBox, MainModel) {
	"use strict";

	return Controller.extend("BHEvent.controller.View1", {
		onInit: function() {
			// create model
			var oModel = new JSONModel();
			debugger;
			
			//matchLunchEvent(Events) takes the events and modifies the data so that it fits the model 
			var eventList = MainModel.matchLunchEvent([{
				start: 225,
				end: 285
			}, {
				start: 210,
				end: 270
			}, {
				start: 180,
				end: 240
			}, {
				start: 240,
				end: 300
			}, {
				start: 300,
				end: 360
			}, {
				start: 270,
				end: 330
			}]);
			var data = {
				startDate: new Date("2018", "11", "04", "09", "00"),
				people: [{

					appointments: eventList

				}]
			};
			oModel.setData(data);
			this.getView().setModel(oModel);

		}
	});

});