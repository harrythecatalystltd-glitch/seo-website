'use client'
import { useEffect } from 'react'

const FORM_HTML = `
<div id="mlb2-43256023" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-43256023">
  <div class="ml-form-align-center">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <div class="ml-form-embedContent" style="margin-bottom: 0px;"></div>
        <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2308037/forms/191783699663029294/subscribe" data-code="" method="post" target="_blank">
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
            <button type="submit" class="primary">Get my free tips to your inbox</button>
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

const FORM_CSS = `
.ml-form-embedSubmitLoad { display: inline-block; width: 20px; height: 20px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
.ml-form-embedSubmitLoad:after {
  content: " "; display: block; width: 11px; height: 11px; margin: 1px; border-radius: 50%;
  border: 4px solid #fff; border-color: #002b45 #002b45 #002b45 transparent;
  animation: ml-form-embedSubmitLoad 1.2s linear infinite;
}
@keyframes ml-form-embedSubmitLoad { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

#mlb2-43256023.ml-form-embedContainer { box-sizing: border-box; display: table; margin: 0 auto; width: 100% !important; }
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper {
  background-color: transparent; border-radius: 4px; box-sizing: border-box; display: inline-block !important; position: relative;
}
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper.embedForm { max-width: 400px; width: 100%; }
#mlb2-43256023.ml-form-embedContainer .ml-form-align-center { text-align: center; }
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody { padding: 20px 20px 0 20px; }
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form { margin: 0; width: 100%; }
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent { margin: 0 0 20px 0; width: 100%; }
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow { margin: 0 0 10px 0; width: 100%; }
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item { margin: 0; }
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
  background-color: #ffffff !important; color: #333333 !important; border: 1px solid #cccccc !important; border-radius: 4px !important;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif; font-size: 14px !important; line-height: 21px !important;
  margin: 0; padding: 10px 10px !important; width: 100% !important; box-sizing: border-box !important;
}
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit { margin: 0 0 20px 0; float: left; width: 100%; }
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
  background-color: #ffd700 !important; border: none !important; border-radius: 4px !important; box-shadow: none !important;
  color: #002b45 !important; cursor: pointer; font-family: 'Montserrat', sans-serif !important; font-size: 14px !important;
  font-weight: 700 !important; line-height: 21px !important; height: auto; padding: 10px !important; width: 100% !important; box-sizing: border-box !important;
}
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading { display: none; }
#mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover { background-color: #e6c200 !important; }
.ml-error input { border-color: #e05a4e !important; }
@media only screen and (max-width: 400px) {
  #mlb2-43256023.ml-form-embedContainer .ml-form-embedWrapper.embedForm { width: 100% !important; }
}
`

export default function MailerLiteForm() {
  useEffect(() => {
    (window as unknown as Record<string, unknown>).ml_webform_success_43256023 = function () {
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

    fetch('https://assets.mailerlite.com/jsonp/2308037/forms/191783699663029294/takel').catch(() => {})
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FORM_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: FORM_HTML }} />
    </>
  )
}
