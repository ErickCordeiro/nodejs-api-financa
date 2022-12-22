import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const main = async () => {
    await prisma.address.deleteMany({});
    await prisma.app_cards_credit.deleteMany({});
    await prisma.app_categories.deleteMany({});
    await prisma.app_invoices.deleteMany({});
    await prisma.app_orders.deleteMany({});
    await prisma.app_plans.deleteMany({});
    await prisma.app_subscriptions.deleteMany({});
    await prisma.app_wallets.deleteMany({});
    await prisma.mail_queue.deleteMany({});
    await prisma.notifications.deleteMany({});
    await prisma.users.deleteMany({});

    const user = await prisma.users.create({
        data: {
            name: 'Erick Cordeiro',
            email: 'erickcordeiroa@gmail.com',
            password: 'erick2020',
            level: 1
        }
    });

    const wallet = await prisma.app_wallets.create({
        data: {
            user_id: user.id,
            wallet: 'Minha Carteira',
            free: 1
        }
    });
}


main();