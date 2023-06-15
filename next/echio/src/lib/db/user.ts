import prisma from "../prisma";




export async function getUserByCredentials(email: string, password: string) {
    const user = await prisma.credentials.findUnique({
        where: {
            email: email,
        }
    })

    if (!user) {
        return null;
    }

    if (user.password !== password) {
        return null;
    }

    return user

}

export async function createUserByCredentials(email: string, password: string, name: string) {
    const user = await prisma.users.create({
      data: {
        name: name,
        email: email,
      }
    })


    const creds = await prisma.credentials.create({
        data: {
            email: email,
            password: password,
            userId: user.id
        }
      }
    )

    return user
}

export async function getUserByEmail(email: string) {
    const user = await prisma.users.findUnique({
        where: {
            email: email,
        }
    })

    return user
}
