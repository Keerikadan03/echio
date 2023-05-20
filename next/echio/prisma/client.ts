import { PrismaClient } from '@prisma/client'

declare global {
  namespace NodeJS {
    interface Global {}
  }
}

interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient
}

declare const global : CustomNodeJsGlobal

const prisma = global.prisma || (() => {

  console.log('Creating new PrismaClient instance.');
  let _prisma = new PrismaClient()
  console.log('PrismaClient instance created.');
  return _prisma

})()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma
