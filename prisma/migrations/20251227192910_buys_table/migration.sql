-- CreateTable
CREATE TABLE "Buy" (
    "buyId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userCPF" TEXT NOT NULL,
    "productID" TEXT NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productPrice" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Buy_pkey" PRIMARY KEY ("buyId")
);

-- AddForeignKey
ALTER TABLE "Buy" ADD CONSTRAINT "Buy_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
