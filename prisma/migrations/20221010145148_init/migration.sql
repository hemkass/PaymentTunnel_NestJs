-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_cartId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deliveryId" INTEGER,
ADD COLUMN     "fullname" TEXT,
ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "AdressDelivery" (
    "deliveryId" SERIAL NOT NULL,
    "adress" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "AdressDelivery_pkey" PRIMARY KEY ("deliveryId")
);

-- CreateTable
CREATE TABLE "ProductPictures" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3),
    "productId" TEXT NOT NULL,

    CONSTRAINT "ProductPictures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "AdressDelivery"("deliveryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPictures" ADD CONSTRAINT "ProductPictures_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
