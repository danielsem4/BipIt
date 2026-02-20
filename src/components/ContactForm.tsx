import { useState, useCallback } from 'react';
import type { ContactFormData, ContactFormErrors, FormStatus } from '../types';

const EMAIL_RE =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!data.name.trim()) errors.name = 'נא למלא שם';
  if (!EMAIL_RE.test(data.email)) errors.email = 'נא למלא כתובת אימייל תקינה';
  if (!data.content.trim()) errors.content = 'נא למלא תוכן הפנייה';
  return errors;
}

const INITIAL_FORM: ContactFormData = { name: '', email: '', content: '' };

/*
 * Shared input style — original: border 1px solid black, padding 8px, border-radius 0
 */
const INPUT_BASE: React.CSSProperties = {
  border: '1px solid black',
  borderRadius: '0',
  padding: '8px',
  direction: 'rtl',
  width: '100%',
  fontSize: '15px',
  backgroundColor: '#fff',
  outline: 'none',
};

const INPUT_ERROR: React.CSSProperties = {
  border: '2px solid #FF9292', /* exact original error color */
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setStatus('submitting');
      try {
        await new Promise<void>((resolve) => setTimeout(resolve, 1200));
        setStatus('success');
        setFormData(INITIAL_FORM);
        setErrors({});
      } catch {
        setStatus('error');
      }
    },
    [formData],
  );

  return (
    /*
     * .contactUsFormSection: background-color #EFEFEF, height 350px (auto on mobile)
     */
    <section
      id="contactUsFormSection"
      aria-labelledby="contact-heading"
      className="w-full py-14"
      style={{ backgroundColor: '#EFEFEF' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/*
         * .contactUsFormStructure: width 370px, centered, padding-top 55px
         * We add the circular "צרו קשר" button next to the form (original is absolute-positioned)
         */}
        <div className="flex flex-col sm:flex-row items-start justify-center gap-8">

          {/*
           * .contactUsFormSection .submitButton (circular):
           *   color #4d351d, font-size 31px, background #29b7c9
           *   width 125px, height 81px, border-radius 200px
           *   border 1px solid #4E361D, font-weight 700, text-align center
           */}
          <div
            className="flex-shrink-0 flex flex-col items-center justify-center font-bold text-center cursor-default self-center"
            style={{
              backgroundColor: '#29b7c9',
              color: '#4d351d',
              fontSize: '28px',
              width: '125px',
              height: '81px',
              borderRadius: '200px',
              border: '1px solid #4E361D',
              lineHeight: '23px',
            }}
            aria-hidden="true"
          >
            צרו<br />קשר
          </div>

          {/* Form */}
          <div style={{ width: '370px', maxWidth: '100%' }}>
            {status === 'success' ? (
              <p
                role="status"
                className="text-lg py-6"
                style={{ color: '#4E361D', direction: 'rtl', fontSize: '18px' }}
              >
                תודה על פנייתך, ניצור איתך קשר בהקדם.
              </p>
            ) : (
              <form
                id="contact_frm"
                onSubmit={handleSubmit}
                noValidate
                aria-label="טופס יצירת קשר"
              >
                {/* Name */}
                <div className="mb-2">
                  <label htmlFor="nameInput" className="sr-only">שם</label>
                  <input
                    id="nameInput"
                    name="name"
                    type="text"
                    placeholder="שם"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'nameError' : undefined}
                    style={{ ...INPUT_BASE, ...(errors.name ? INPUT_ERROR : {}) }}
                  />
                  {errors.name && (
                    <p id="nameError" role="alert" className="text-xs mt-1" style={{ color: '#d14' }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-2">
                  <label htmlFor="emailInput" className="sr-only">אימייל</label>
                  <input
                    id="emailInput"
                    name="email"
                    type="email"
                    placeholder="אימייל"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'emailError' : undefined}
                    style={{ ...INPUT_BASE, ...(errors.email ? INPUT_ERROR : {}) }}
                  />
                  {errors.email && (
                    <p id="emailError" role="alert" className="text-xs mt-1" style={{ color: '#d14' }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Content */}
                <div className="mb-4">
                  <label htmlFor="contentInput" className="sr-only">תוכן הפנייה</label>
                  <textarea
                    id="contentInput"
                    name="content"
                    placeholder="תוכן הפנייה"
                    value={formData.content}
                    onChange={handleChange}
                    rows={4}
                    aria-required="true"
                    aria-invalid={!!errors.content}
                    aria-describedby={errors.content ? 'contentError' : undefined}
                    style={{
                      ...INPUT_BASE,
                      height: '70px',
                      resize: 'none',
                      borderRadius: '0',
                      ...(errors.content ? INPUT_ERROR : {}),
                    }}
                  />
                  {errors.content && (
                    <p id="contentError" role="alert" className="text-xs mt-1" style={{ color: '#d14' }}>
                      {errors.content}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-sm mb-3 text-center" style={{ color: '#d14' }}>
                    אירעה שגיאה בעת שליחה, נסה שנית.
                  </p>
                )}

                {/*
                 * .submitButtonCu:
                 *   background-color #29B7C9, border 1px solid #000000
                 *   color #4E361D, font-size 24px, padding 9px, width 194px
                 */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="cursor-pointer transition-opacity hover:opacity-80 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: '#29B7C9',
                      border: '1px solid #000000',
                      color: '#4E361D',
                      fontSize: '24px',
                      padding: '9px',
                      width: '194px',
                      textAlign: 'center',
                    }}
                    aria-busy={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'שולח...' : 'שלח/י'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
