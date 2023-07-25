/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PetPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "petName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "dateFrom" DATETIME NOT NULL,
    "dateTo" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Image" (
    "imageId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "main" BOOLEAN NOT NULL,
    "imagePath" TEXT NOT NULL,
    CONSTRAINT "Image_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "PetPost" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
