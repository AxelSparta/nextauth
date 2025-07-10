import { prisma } from '@/libs/prisma'
import { registerUserSchema } from '@/libs/schemas'
import { NextResponse } from 'next/server'

export async function POST (request: Request) {
  const schema = registerUserSchema
  const body = await request.json()

  try {
    const parsedBody = schema.parse(body)
    console.log(parsedBody)
  } catch (error: unknown) {
    console.log(error)
    const errorMessage =
      error instanceof Error ? error.message : 'Something went wrong'
    return NextResponse.json(
      {
        error: errorMessage
      },
      {
        status: 400
      }
    )
  }
  const user = await prisma.user.create({
    data: {
      first_name: body.first_name,
      last_name: body.last_name,
      username: body.username,
      email: body.email,
      password: body.password
    }
  })
  return NextResponse.json(
    {
      message: 'user created successfully',
      user
    },
    {
      status: 201
    }
  )
}
