/*
  Warnings:

  - You are about to drop the `Ciudadanoa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Preguntaa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Respuestaa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Respuestaa" DROP CONSTRAINT "Respuestaa_ciudadanoaId_fkey";

-- DropForeignKey
ALTER TABLE "Respuestaa" DROP CONSTRAINT "Respuestaa_preguntaaId_fkey";

-- DropTable
DROP TABLE "Ciudadanoa";

-- DropTable
DROP TABLE "Preguntaa";

-- DropTable
DROP TABLE "Respuestaa";

-- CreateTable
CREATE TABLE "Curso" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha_de_inicio" TEXT,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aspirante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "identificacion" INTEGER NOT NULL,

    CONSTRAINT "Aspirante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inscripcion" (
    "id" SERIAL NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "aspiranteId" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "valor_cancelado" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Inscripcion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aspirante_identificacion_key" ON "Aspirante"("identificacion");

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_aspiranteId_fkey" FOREIGN KEY ("aspiranteId") REFERENCES "Aspirante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
