import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

export const EMAIL_COLORS = {
  pageBg: '#F6F7F9',
  cardBg: '#FFFFFF',
  fg: '#0F172A',
  fgStrong: '#020617',
  fgMuted: '#64748B',
  fgFaint: '#94A3B8',
  border: '#E2E8F0',
  borderSubtle: '#F1F5F9',
  surface: '#F8FAFC',
  primary: '#3B82F6',
  primaryDark: '#1D4ED8',
  accent: '#9C60D7',
} as const;

const PORTFOLIO_URL = 'https://alfredmouelle.com';

interface EmailLayoutProps {
  preview: string;
  children: React.ReactNode;
}

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: EMAIL_COLORS.pageBg,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            backgroundColor: EMAIL_COLORS.cardBg,
            border: `1px solid ${EMAIL_COLORS.border}`,
            borderRadius: 16,
            margin: '40px auto',
            maxWidth: 560,
            overflow: 'hidden',
            padding: 0,
          }}
        >
          <Section
            style={{
              background: `linear-gradient(135deg, ${EMAIL_COLORS.primary} 0%, ${EMAIL_COLORS.accent} 100%)`,
              padding: '24px 32px',
            }}
          >
            <Text
              style={{
                color: '#FFFFFF',
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.18em',
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              Alfred Mouelle
            </Text>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: 12,
                margin: '4px 0 0',
              }}
            >
              Portfolio · FullStack Developer
            </Text>
          </Section>

          <Section style={{ padding: '32px 32px 24px' }}>{children}</Section>

          <Section
            style={{
              backgroundColor: EMAIL_COLORS.surface,
              borderTop: `1px solid ${EMAIL_COLORS.borderSubtle}`,
              padding: '20px 32px 24px',
            }}
          >
            <Text
              style={{
                color: EMAIL_COLORS.fgMuted,
                fontSize: 12,
                lineHeight: '18px',
                margin: 0,
              }}
            >
              Notification envoyée depuis le formulaire de contact de{' '}
              <Link
                href={PORTFOLIO_URL}
                style={{
                  color: EMAIL_COLORS.primary,
                  textDecoration: 'underline',
                  textUnderlineOffset: 2,
                }}
              >
                alfredmouelle.com
              </Link>
              .
            </Text>
            <Text
              style={{
                color: EMAIL_COLORS.fgFaint,
                fontSize: 11,
                margin: '10px 0 0',
              }}
            >
              © {new Date().getFullYear()} Alfred Mouelle
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

interface EmailHeadingProps {
  children: React.ReactNode;
  kicker?: string;
}

export function EmailHeading({ children, kicker }: EmailHeadingProps) {
  return (
    <>
      {kicker && (
        <Text
          style={{
            color: EMAIL_COLORS.primary,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.2em',
            margin: '0 0 10px',
            textTransform: 'uppercase',
          }}
        >
          {kicker}
        </Text>
      )}
      <Text
        style={{
          color: EMAIL_COLORS.fgStrong,
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: '1.2',
          margin: 0,
        }}
      >
        {children}
      </Text>
    </>
  );
}

interface EmailFieldProps {
  label: string;
  children: React.ReactNode;
}

export function EmailField({ label, children }: EmailFieldProps) {
  return (
    <Section style={{ margin: '20px 0 0' }}>
      <Text
        style={{
          color: EMAIL_COLORS.fgMuted,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.08em',
          margin: '0 0 6px',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          color: EMAIL_COLORS.fg,
          fontSize: 15,
          lineHeight: '22px',
          margin: 0,
        }}
      >
        {children}
      </Text>
    </Section>
  );
}

interface EmailBlockquoteProps {
  children: React.ReactNode;
}

export function EmailBlockquote({ children }: EmailBlockquoteProps) {
  return (
    <Section
      style={{
        backgroundColor: EMAIL_COLORS.surface,
        borderLeft: `3px solid ${EMAIL_COLORS.primary}`,
        borderRadius: '0 8px 8px 0',
        margin: '20px 0 0',
        padding: '14px 18px',
      }}
    >
      <Text
        style={{
          color: EMAIL_COLORS.fg,
          fontSize: 14,
          lineHeight: '22px',
          margin: 0,
          whiteSpace: 'pre-wrap',
        }}
      >
        {children}
      </Text>
    </Section>
  );
}

interface EmailDividerProps {
  spacing?: number;
}

export function EmailDivider({ spacing = 24 }: EmailDividerProps) {
  return (
    <Hr
      style={{
        border: 'none',
        borderTop: `1px solid ${EMAIL_COLORS.borderSubtle}`,
        margin: `${spacing}px 0 0`,
      }}
    />
  );
}
