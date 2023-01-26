import { PrismaClient } from "@prisma/client";
import { carsList } from "./cars.js";

const prisma = new PrismaClient();
async function main() {
  const cars = await prisma.cars.createMany({ data: [...carsList] });
  console.log(cars);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
