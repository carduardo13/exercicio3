sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("exercicio3.controller.Main", {
            onInit: function () {

                var oModel = new sap.ui.model.json.JSONModel();

                var oPessoa =  {
                    "nome": "Carlos",
                    "status": false
                }

                oModel.setData(oPessoa);
                this.getView().setModel(oModel, "pessoa");



            }
        });
    });
