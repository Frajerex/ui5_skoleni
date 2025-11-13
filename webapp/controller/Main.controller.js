sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
],
function (Controller, formatter) {
    "use strict";

    return Controller.extend("zdb.letiste.skoleni.controller.Main", {
        formatter: formatter,
        onInit: function () {
            //this.getRouter().getRoute("Create").attachPatternMatched(this.handlePatternMatched, this);

        },
        
        handlePressButton: function (oControlEvent) {
           var oButton = oControlEvent.getSource();
           var sText = oButton.getText();
           alert("Button " + sText + " was pressed!");
        },

        handlePressItem: function(oControlEvent){
            var oColumnListItem = oControlEvent.getSource();
            var oBindingContext = oColumnListItem.getBindingContext();
            var sZzZadankaGuid = oBindingContext.getProperty("ZzZadankaGuid");
            //alert(sZzZadankaGuid);
            this.getOwnerComponent().getRouter().navTo("RouteDetail", { guid: sZzZadankaGuid });
        },


        //ZzZadankaId, ZzZadankaTyp, ZzZadankaDatum, ZzZadankaSchvaleno {/#ZzZadankaGuid/ZzZadankaTyp/@sap:label}
    });
});
