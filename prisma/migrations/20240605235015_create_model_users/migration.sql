-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Desenvolvedor', 'Engenheiro', 'Arquiteto');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
