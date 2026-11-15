import { ServiceItem } from "../entities/service/types";
import { BlogPost } from "../types";

export const SERVICE_OPTIONS: string[] = [
  'FULL TECHNICAL SETUP',
  'INFRASTRUCTURE & HOSTING',
  'DOMAIN & DNS MANAGEMENT',
  'BUSINESS EMAIL SETUP',
  'CRM INTEGRATION',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'infrastructure',
    number: '01',
    title: 'INFRASTRUCTURE & HOSTING',
    description:
      'Scalable cloud setup, automated deployment pipelines, and reliable uptime engineered from day one.',
    deliverables: 'AWS / VERCEL / DOCKER / CI-CD',
  },
  {
    id: 'domains',
    number: '02',
    title: 'DOMAIN & DNS MANAGEMENT',
    description:
      'Domain acquisition, SSL security certificates, traffic routing, and zero-headache DNS architecture.',
    deliverables: 'CLOUDFLARE / SSL / DNSSEC / ROUTING',
  },
  {
    id: 'email',
    number: '03',
    title: 'BUSINESS EMAIL SETUP',
    description:
      'Custom workspace configuration, strict deliverability records, and seamless team onboarding.',
    deliverables: 'GOOGLE WORKSPACE / SPF / DKIM / DMARC',
  },
  {
    id: 'crm',
    number: '04',
    title: 'CRM INTEGRATION',
    description:
      'Automated lead capture, pipeline syncing, and clean customer data flows across your entire stack.',
    deliverables: 'CRM / HUBSPOT / ATTIO / WEBHOOKS',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'chatwoot-mailcow-crm',
    number: '01',
    tag: '01 / OPEN SOURCE STACK',
    readTime: '3 MIN READ',
    title: 'CRM INTEGRATION',
    excerpt:
      'Turn self-hosted email into a shared customer CRM and support inbox without paying per-seat SaaS fees.',
    relatedService: 'CRM INTEGRATION',
    ctaHeading: 'WANT THIS DEPLOYED FOR YOUR TEAM?',
    ctaSubheading: 'WE SET UP + END-TO-END.',
    sections: [
      {
        heading: '01 / WHAT IT IS',
        type: 'paragraph',
        content:
          'Connecting (a self-hosted open-source email server) with (an open-source customer support & CRM inbox) turns every incoming customer email into a trackable conversation—giving early-stage teams a complete CRM workflow without expensive per-seat SaaS fees.',
      },
      {
        heading: '02 / SIMPLE 3-STEP SETUP',
        type: 'steps',
        steps: [
          {
            step: 'STEP 01',
            title: 'HOST & ON YOUR OWN INFRASTRUCTURE',
            detail:
              'Deploy both containers on your VPS with clean DNS records (MX, SPF, DKIM, and DMARC) so your emails land in inboxes, never spam.',
          },
          {
            step: 'STEP 02',
            title: 'CONNECT IMAP/SMTP INTO CRM',
            detail:
              'Add your mailbox directly inside CRM as an Email Channel so incoming messages sync automatically and replies send from your domain.',
          },
          {
            step: 'STEP 03',
            title: 'ROUTE TEAM ADDRESSES INTO SHARED INBOXES',
            detail:
              'Pipe support@, sales@, and founders@ into shared team queues with custom labels, owner assignment, and full customer contact history.',
          },
        ],
      },
      {
        heading: '03 / WHY STARTUPS LOVE IT',
        type: 'checklist',
        items: [
          'FULL DATA OWNERSHIP ON YOUR OWN SERVERS',
          'ZERO PER-AGENT OR PER-SEAT PRICING AS YOUR TEAM GROWS',
          'ONE UNIFIED INBOX FOR EMAIL, LIVE CHAT, AND CUSTOMER HISTORY',
        ],
      },
    ],
  },
];
