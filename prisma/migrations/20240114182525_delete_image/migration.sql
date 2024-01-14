/*
  Warnings:

  - You are about to drop the column `image` on the `Board` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Board" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Board" ("createdAt", "id", "title") SELECT "createdAt", "id", "title" FROM "Board";
DROP TABLE "Board";
ALTER TABLE "new_Board" RENAME TO "Board";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
