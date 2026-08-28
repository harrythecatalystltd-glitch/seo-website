'use client'
import { useEffect } from 'react'

/* MailerLite form for The Catalyst Method 30 Day Challenge.
   Same trimmed pattern as MailerLiteForm: the raw embed ships ~600 lines of CSS
   scoped to its own id, most of it for field types this form does not use.
   Kept: the loader, the field/button styling, and the success redirect.
   Changed from the raw embed: the wrapper background is transparent rather than
   #002b45, because it sits inside a card that already provides the surface. */

const FORM_ID = '45307605'
const FORM_ENDPOINT = 'https://assets.mailerlite.com/jsonp/2308037/forms/197035990258288031'

const FORM_HTML = `
<div id="mlb2-45307605" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-45307605">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <div class="ml-form-embedContent" style="margin-bottom: 0px;"></div>
        <form class="ml-block-form" action="${FORM_ENDPOINT}/subscribe" data-code="" method="post" target="_blank">
          <div class="ml-form-formContent">
            <div class="ml-form-fieldRow">
              <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                <input aria-label="email" aria-required="true" type="email" class="form-control" name="fields[email]" placeholder="Email" autocomplete="email">
              </div>
            </div>
            <div class="ml-form-fieldRow ml-last-item">
              <div class="ml-field-group ml-field-name ml-validate-required">
                <input aria-label="name" aria-required="true" type="text" class="form-control" name="fields[name]" placeholder="Name" autocomplete="given-name">
              </div>
            </div>
          </div>
          <input type="hidden" name="ml-submit" value="1">
          <div class="ml-form-embedSubmit">
            <button type="submit" class="primary">Start Your 30 Day Challenge</button>
            <button disabled="disabled" style="display: none;" type="button" class="loading">
              <div class="ml-form-embedSubmitLoad"></div>
              <span class="sr-only">Loading...</span>
            </button>
          </div>
          <input type="hidden" name="anticsrf" value="true">
        </form>
      </div>
    </div>
  </div>
</div>
`

/* The loader and .sr-only rules are unscoped class selectors, and MailerLiteForm
   only defines them on the pages it renders on. Repeated here, identical, so this
   form works on a page where that component is absent. */
const FORM_CSS = `
.ml-form-embedSubmitLoad { display: inline-block; width: 20px; height: 20px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
.ml-form-embedSubmitLoad:after {
  content: " "; display: block; width: 11px; height: 11px; margin: 1px; border-radius: 50%;
  border: 4px solid #fff; border-color: #002b45 #002b45 #002b45 transparent;
  animation: ml-form-embedSubmitLoad 1.2s linear infinite;
}
@keyframes ml-form-embedSubmitLoad { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

#mlb2-${FORM_ID}.ml-form-embedContainer { box-sizing: border-box; display: table; margin: 0 auto; width: 100% !important; }
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper {
  background-color: transparent; border-radius: 4px; box-sizing: border-box; display: inline-block !important; position: relative;
}
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper.embedForm { max-width: 400px; width: 100%; }
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-align-center { text-align: center; }
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody { padding: 20px 20px 0 20px; }
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form { margin: 0; width: 100%; }
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent { margin: 0 0 20px 0; width: 100%; }
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow { margin: 0 0 10px 0; width: 100%; }
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item { margin: 0; }
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
  background-color: #ffffff !important; color: #333333 !important; border: 1px solid #cccccc !important; border-radius: 4px !important;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif; font-size: 14px !important; line-height: 21px !important;
  margin: 0; padding: 10px 10px !important; width: 100% !important; box-sizing: border-box !important;
}
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit { margin: 0 0 20px 0; float: left; width: 100%; }
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
  background-color: #ffd700 !important; border: none !important; border-radius: 4px !important; box-shadow: none !important;
  color: #002b45 !important; cursor: pointer; font-family: 'Montserrat', sans-serif !important; font-size: 14px !important;
  font-weight: 700 !important; line-height: 21px !important; height: auto; padding: 10px !important; width: 100% !important; box-sizing: border-box !important;
}
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading { display: none; }
#mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover { background-color: #e6c200 !important; }
.ml-error input { border-color: #e05a4e !important; }
@media only screen and (max-width: 400px) {
  #mlb2-${FORM_ID}.ml-form-embedContainer .ml-form-embedWrapper.embedForm { width: 100% !important; }
}
`

export default function ChallengeForm() {
  useEffect(() => {
    ;(window as unknown as Record<string, unknown>).ml_webform_success_45307605 = function () {
      try {
        window.top!.location.href = 'https://www.thecatalystmethod.co.uk/thankyou'
      } catch {
        window.location.href = 'https://www.thecatalystmethod.co.uk/thankyou'
      }
    }

    if (!document.getElementById('mailerlite-webforms-script')) {
      const script = document.createElement('script')
      script.id = 'mailerlite-webforms-script'
      script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519'
      script.async = true
      document.body.appendChild(script)
    }

    fetch(`${FORM_ENDPOINT}/takel`).catch(() => {})
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FORM_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: FORM_HTML }} />
    </>
  )
}
