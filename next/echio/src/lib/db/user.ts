import prisma from "../prisma"

/**
 * Get the user object by their credentials.
 * Assumes email and password are clean.
 */
export async function getUserByCredentials(email: string, password: string) {
  const user = await prisma.credentials.findUnique({
    where: {
      email: email
    }
  })

  if (!user) {
    return null
  }

  if (user.password !== password) {
    return null
  }

  return user
}

/**
 * Create the user and credentials object by their credentials.
 * Assumes email, password and name are clean.
 */
export async function createUserByCredentials(email: string, password: string, name: string) {
  const user = await prisma.users.create({
    data: {
      name: name,
      email: email
    }
  })

  const creds = await prisma.credentials.create({
    data: {
      email: email,
      password: password,
      userId: user.id
    }
  })

  return user
}

/**
 * Get the user object by their email.
 * Assumes email is clean.
 */
export async function getUserByEmail(email: string) {
  const user = await prisma.users.findUnique({
    where: {
      email: email
    }
  })

  return user
}
