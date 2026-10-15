/**
 * Legacy compatibility wrapper.
 *
 * The previous EmailCapture logged the address to the console and showed a
 * timed fake success. That behaviour is removed. Any legacy page that still
 * renders <EmailCapture /> (with whatever props it passed before) now shows
 * the truthful "not available yet" state from EmailSignup. Nothing is sent
 * or stored.
 *
 * New pages should import EmailSignup directly and pass a real `subscribe`
 * server action once the email provider is securely configured.
 */
import { EmailSignup } from './EmailSignup';

// Accepts and ignores the legacy prop shape so existing call sites keep compiling.
export function EmailCapture(_legacyProps: { [key: string]: unknown }) {
  return <EmailSignup />;
}

export default EmailCapture;
