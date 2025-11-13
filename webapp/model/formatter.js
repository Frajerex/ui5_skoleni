sap.ui.define([], 
    function () {
    "use strict";
    return {
        setState: function (sZzZadankaTyp) {
            if(sZzZadankaTyp == "1"){
                return "Success";
            }else{
                return "Error";
            }
        },
    };
});

