export function mostrarCursos(curso) {
    console.log("Esta es la informacion de los cursos: ");
    curso.forEach((curso) => {
      console.log(`ID: ${curso.id}, Descripción: ${curso.descripcion}, Fecha de inicio: ${curso.fecha_de_inicio}`);
    });
  }

export function mostrarAspirantes(aspirante) {
    console.log("Esta es la informacion de los aspirantes: ");
    for (const indice in aspirante) {
      console.log(`ID: ${aspirante[indice].id}, Nombre: ${aspirante[indice].nombre}, Identificación: ${aspirante[indice].identificacion}`);
    }
  }

export function mostrarInscripciones(inscripcion) {
    console.log("Esta es la información de las isncripciones: ");
    for (const i of inscripcion) {
      console.log(`ID: ${i.id}, Curso ID: ${i.curso_id}, Aspirante ID: ${i.aspirante_id}, Fecha: ${i.fecha}, Hora: ${i.hora}, Valor cancelado: ${i.valor_cancelado}`);
    }
  }