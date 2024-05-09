"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPorID = void 0;
function buscarPorID(elementos, id, callback) {
    var encontrado = elementos.find(function (e) { return e.id === id; });
    if (encontrado) {
        callback(null, encontrado);
    }
    else {
        callback("No se encontro ningun objeto con el ID proporcionado", null);
    }
}
exports.buscarPorID = buscarPorID;
