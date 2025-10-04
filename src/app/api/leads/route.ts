import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendLeadNotification } from '@/services/telegram-sender';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, email, company, service, message, source = 'website' } = data;

    // Validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Name, phone, and service are required' },
        { status: 400 }
      );
    }

    // Create lead
    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        email,
        company,
        service,
        message,
        source,
        status: 'new',
        priority: 'medium',
      },
    });

    // Send Telegram notification
    const telegramResult = await sendLeadNotification({
      name,
      phone,
      email,
      company,
      service,
      message,
    });

    if (telegramResult.success) {
      await prisma.lead.update({
        where: { id: lead.id },
        data: { telegramSent: true },
      });
    }

    // Track analytics
    await prisma.analytics.create({
      data: {
        page: '/contact',
        event: 'lead_created',
        metadata: { service, source },
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Arizangiz qabul qilindi! Tez orada siz bilan bog\'lanamiz.',
      lead: { id: lead.id },
    });
  } catch (error: any) {
    console.error('Lead creation error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    const where: any = {};
    if (status) where.status = status;
    if (priority) where.priority = priority;

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.lead.count({ where }),
    ]);

    return NextResponse.json({
      leads,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error('Leads fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}
