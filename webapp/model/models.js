sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createDataModel: function(){
            var oModel = new JSONModel([{"ZzZadankaGuid":"1b5dc687-bacc-4dde-9459-1ae61ff4b488","ZzZadankaId":"272471674","ZzZadankaDatum":"10/24/2025","ZzZadankaSchvaleno":false,"ZzZadankaTyp":3},
{"ZzZadankaGuid":"2be91749-ce2d-47c0-b65d-8aac18fb6bbc","ZzZadankaId":"053208040","ZzZadankaDatum":"1/5/2025","ZzZadankaSchvaleno":false,"ZzZadankaTyp":3},
{"ZzZadankaGuid":"cc95020a-86b7-495d-bd4b-1e9ea61b2f28","ZzZadankaId":"062102933","ZzZadankaDatum":"2/16/2025","ZzZadankaSchvaleno":false,"ZzZadankaTyp":1},
{"ZzZadankaGuid":"1ccecdd3-8609-4b6e-b4ff-f3d77cd89755","ZzZadankaId":"031100490","ZzZadankaDatum":"8/4/2025","ZzZadankaSchvaleno":false,"ZzZadankaTyp":3},
{"ZzZadankaGuid":"fed5b508-ac44-4b03-9f16-0485f8ccfbd1","ZzZadankaId":"274970937","ZzZadankaDatum":"4/20/2025","ZzZadankaSchvaleno":true,"ZzZadankaTyp":3},
{"ZzZadankaGuid":"c1a28b4f-3f08-4859-89f4-d3eee350427d","ZzZadankaId":"111925359","ZzZadankaDatum":"12/13/2024","ZzZadankaSchvaleno":false,"ZzZadankaTyp":3},
{"ZzZadankaGuid":"0e35d75c-3986-4e64-8d4c-7746253d6411","ZzZadankaId":"031314749","ZzZadankaDatum":"1/16/2025","ZzZadankaSchvaleno":false,"ZzZadankaTyp":1},
{"ZzZadankaGuid":"1151e6f6-66f5-4d5a-9b17-23c6b2cabb35","ZzZadankaId":"104901034","ZzZadankaDatum":"3/24/2025","ZzZadankaSchvaleno":true,"ZzZadankaTyp":2},
{"ZzZadankaGuid":"07c0ea87-b5c3-4216-89ac-0625a8448313","ZzZadankaId":"031201328","ZzZadankaDatum":"7/9/2025","ZzZadankaSchvaleno":true,"ZzZadankaTyp":2},
{"ZzZadankaGuid":"069139aa-2efd-4175-85a0-1552fe296c27","ZzZadankaId":"071911584","ZzZadankaDatum":"5/23/2025","ZzZadankaSchvaleno":false,"ZzZadankaTyp":3},
{"ZzZadankaGuid":"52d19d5d-d9e6-45c3-aa53-a9887e53cdeb","ZzZadankaId":"111316612","ZzZadankaDatum":"10/22/2024","ZzZadankaSchvaleno":false,"ZzZadankaTyp":2},
{"ZzZadankaGuid":"bb4ab48c-ea0d-4d11-9579-b3784f843af9","ZzZadankaId":"053109877","ZzZadankaDatum":"5/18/2025","ZzZadankaSchvaleno":false,"ZzZadankaTyp":2},
{"ZzZadankaGuid":"e63f4776-3b3f-4fc7-9f5b-ff078a764514","ZzZadankaId":"111904338","ZzZadankaDatum":"3/23/2025","ZzZadankaSchvaleno":true,"ZzZadankaTyp":2},
{"ZzZadankaGuid":"bb70e7c5-a59f-4464-b2c2-2f5102ba8d94","ZzZadankaId":"061120961","ZzZadankaDatum":"3/19/2025","ZzZadankaSchvaleno":true,"ZzZadankaTyp":2},
{"ZzZadankaGuid":"4783ef8b-7bf4-488a-a384-09d6d9372517","ZzZadankaId":"113012503","ZzZadankaDatum":"3/10/2025","ZzZadankaSchvaleno":true,"ZzZadankaTyp":3},
{"ZzZadankaGuid":"6df39081-d23f-47c1-8c97-8b07420ccd9f","ZzZadankaId":"111915398","ZzZadankaDatum":"9/6/2025","ZzZadankaSchvaleno":true,"ZzZadankaTyp":1},
{"ZzZadankaGuid":"088fa13d-b29f-4767-b8c7-663a1c5c9f3d","ZzZadankaId":"065104116","ZzZadankaDatum":"10/15/2025","ZzZadankaSchvaleno":false,"ZzZadankaTyp":2},
{"ZzZadankaGuid":"ead0afa6-bb5e-4de0-84ec-785b849e014d","ZzZadankaId":"291471066","ZzZadankaDatum":"2/17/2025","ZzZadankaSchvaleno":true,"ZzZadankaTyp":2},
{"ZzZadankaGuid":"245aff4c-2d67-4727-9b3d-79e601253548","ZzZadankaId":"053908081","ZzZadankaDatum":"9/13/2025","ZzZadankaSchvaleno":true,"ZzZadankaTyp":1},
{"ZzZadankaGuid":"ff9e1f52-6e2d-48cb-ae13-84d3ca82f964","ZzZadankaId":"083901744","ZzZadankaDatum":"10/5/2025","ZzZadankaSchvaleno":true,"ZzZadankaTyp":3}]);
            oModel.setDefaultBindingMode("TwoWay");
            return oModel;
        }
    };

});