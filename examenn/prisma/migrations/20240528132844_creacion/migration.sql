-- CreateTable
CREATE TABLE `Curso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `fecha_de_inicio` VARCHAR(191) NULL,
    `estado` ENUM('Activo', 'Pendiente', 'Eliminado') NOT NULL DEFAULT 'Activo',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aspirante` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `identificacion` INTEGER NOT NULL,
    `estado` ENUM('Activo', 'Pendiente', 'Eliminado') NOT NULL DEFAULT 'Activo',

    UNIQUE INDEX `Aspirante_identificacion_key`(`identificacion`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inscripcion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `hora` VARCHAR(191) NOT NULL,
    `valor_cancelado` DOUBLE NOT NULL,
    `cursoId` INTEGER NOT NULL,
    `aspiranteId` INTEGER NOT NULL,
    `estado` ENUM('Activo', 'Pendiente', 'Eliminado') NOT NULL DEFAULT 'Activo',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inscripcion` ADD CONSTRAINT `Inscripcion_cursoId_fkey` FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscripcion` ADD CONSTRAINT `Inscripcion_aspiranteId_fkey` FOREIGN KEY (`aspiranteId`) REFERENCES `Aspirante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
