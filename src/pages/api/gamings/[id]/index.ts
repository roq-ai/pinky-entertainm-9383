import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { gamingValidationSchema } from 'validationSchema/gamings';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.gaming
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getGamingById();
    case 'PUT':
      return updateGamingById();
    case 'DELETE':
      return deleteGamingById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getGamingById() {
    const data = await prisma.gaming.findFirst(convertQueryToPrismaUtil(req.query, 'gaming'));
    return res.status(200).json(data);
  }

  async function updateGamingById() {
    await gamingValidationSchema.validate(req.body);
    const data = await prisma.gaming.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteGamingById() {
    const data = await prisma.gaming.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
