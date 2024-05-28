/*
  Warnings:

  - Added the required column `entornoId` to the `Aspirante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entornoId` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entornoId` to the `Inscripcion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `aspirante` ADD COLUMN `entornoId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `curso` ADD COLUMN `entornoId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `inscripcion` ADD COLUMN `entornoId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Entorno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_entornoId_fkey` FOREIGN KEY (`entornoId`) REFERENCES `Entorno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aspirante` ADD CONSTRAINT `Aspirante_entornoId_fkey` FOREIGN KEY (`entornoId`) REFERENCES `Entorno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscripcion` ADD CONSTRAINT `Inscripcion_entornoId_fkey` FOREIGN KEY (`entornoId`) REFERENCES `Entorno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
