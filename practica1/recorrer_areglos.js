"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarInscripciones = exports.mostrarAspirantes = exports.mostrarCursos = void 0;
function mostrarCursos(curso) {
    console.log("Esta es la informacion de los cursos: ");
    curso.forEach(function (curso) {
        console.log("ID: ".concat(curso.id, ", Descripci\u00F3n: ").concat(curso.descripcion, ", Fecha de inicio: ").concat(curso.fecha_de_inicio));
    });
}
exports.mostrarCursos = mostrarCursos;
function mostrarAspirantes(aspirante) {
    console.log("Esta es la informacion de los aspirantes: ");
    for (var indice in aspirante) {
        console.log("ID: ".concat(aspirante[indice].id, ", Nombre: ").concat(aspirante[indice].nombre, ", Identificaci\u00F3n: ").concat(aspirante[indice].identificacion));
    }
}
exports.mostrarAspirantes = mostrarAspirantes;
function mostrarInscripciones(inscripcion) {
    console.log("Esta es la información de las isncripciones: ");
    for (var _i = 0, inscripcion_1 = inscripcion; _i < inscripcion_1.length; _i++) {
        var i = inscripcion_1[_i];
        console.log("ID: ".concat(i.id, ", Curso ID: ").concat(i.curso_id, ", Aspirante ID: ").concat(i.aspirante_id, ", Fecha: ").concat(i.fecha, ", Hora: ").concat(i.hora, ", Valor cancelado: ").concat(i.valor_cancelado));
    }
}
exports.mostrarInscripciones = mostrarInscripciones;
