sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
],
function (Controller, formatter) {
    "use strict";

    return Controller.extend("zdb.letiste.skoleni.controller.Detail", {
        formatter: formatter,
        onInit: function () {
            this.getOwnerComponent().getRouter()
            .getRoute("RouteDetail").attachPatternMatched(this.onPatternMatched, this);
        },

        onPatternMatched: function(oEvent){
            var oArguments = oEvent.getParameters().arguments;
            var sGuid = oArguments.guid;
            this.onBindJSONData(sGuid)
        },

        onBindJSONData: function(sGuid){
            var oData = this.getOwnerComponent().getModel().getData();
            var iIndex = undefined;
            oData.find((oEntry, index) => {
                if(oEntry.ZzZadankaGuid === sGuid){
                    iIndex = index;
                    return true;
                }
                return false;
            })
            this.getView().bindElement({
                path: "/" + iIndex,
            })
        },
        
        onBindData: function(sGuid){
            var sPath = this.getView().getModel()
            .createKey("/ZgisZadankaODSet", { ZzZadankaGuid : sGuid });
            this.getView().bindElement({
                path: sPath,
            })
        },

        handleNavButtonPress: function(){
            this.getOwnerComponent().getRouter().navTo("RouteMain", { });
        },
    });
});
