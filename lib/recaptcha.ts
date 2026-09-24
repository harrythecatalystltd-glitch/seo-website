/* reCAPTCHA for the MailerLite embeds.
   The raw embed ships a <script src=".../recaptcha/api.js"> inside its HTML, but
   scripts injected via dangerouslySetInnerHTML never run, and auto-render only
   scans the page once, so a form reached by client-side navigation would show no
   widget. Instead the API is loaded once in explicit mode and every unrendered
   .g-recaptcha is rendered on mount. MailerLite checks the token server side, so
   the form is rejected without it. */

const MAILERLITE_RECAPTCHA_SITE_KEY = '6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD'
const SCRIPT_ID = 'google-recaptcha-script'
const ONLOAD = 'mlRecaptchaOnload'

type Grecaptcha = { render: (el: Element, opts: { sitekey: string }) => number }

function renderAll() {
  const g = (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha
  if (!g?.render) return
  document.querySelectorAll<HTMLElement>('.g-recaptcha:not([data-rendered])').forEach((el) => {
    el.dataset.rendered = '1'
    g.render(el, { sitekey: MAILERLITE_RECAPTCHA_SITE_KEY })
  })
}

export function loadRecaptcha() {
  ;(window as unknown as Record<string, unknown>)[ONLOAD] = renderAll
  if (document.getElementById(SCRIPT_ID)) {
    renderAll()
    return
  }
  const script = document.createElement('script')
  script.id = SCRIPT_ID
  script.src = `https://www.google.com/recaptcha/api.js?onload=${ONLOAD}&render=explicit`
  script.async = true
  document.body.appendChild(script)
}
