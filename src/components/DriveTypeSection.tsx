import type { DriveFeature, DriveOption } from '../types';

const BASE = '/images';

const DRIVE_OPTIONS: DriveOption[] = [
  { image: `${BASE}/option1.png`, alt: 'הפעלה על ידי חיישן תנועה' },
  { image: `${BASE}/option2.png`, alt: 'הפעלה על ידי חיבור Bluetooth' },
  { image: `${BASE}/option3.png`, alt: 'הפעלה על ידי חיבור חשמל' },
];

const DRIVE_FEATURES: DriveFeature[] = [
  {
    image: `${BASE}/type3.png`,
    alt: 'אייקון הקראת שיחות',
    title: 'הקראת שיחות',
    description:
      'במצב נהיגה Bip it מקריאה את שם המתקשר בכל שיחה נכנסת ונותנת אפשרות למענה בהוראה קולית',
  },
  {
    image: `${BASE}/type2.png`,
    alt: 'אייקון הקראת הודעות',
    title: 'הקראת הודעות',
    description:
      'מיד עם קבלת הודעת טקסט או ווטסאפ Bip it מקריאה אותה ונותנת אפשרות להכתיב תשובה בחזרה',
  },
  {
    image: `${BASE}/type1.png`,
    alt: 'אייקון הפעלה קולית',
    title: 'הפעלה קולית',
    description:
      'על ידי אמירת "Execute Bip it" או צירוף מפתח אחר שתקבע תוכל לפתוח את האפליקציה ישירות למצב האזנה לכל פקודה נוספת שתרצה לבצע',
  },
];

export default function DriveTypeSection() {
  return (
    /*
     * Exact original:
     *   background-color: rgb(41, 184, 201) = #29B7C9 (TEAL)
     *   direction: rtl
     */
    <section
      id="driveTypeSection"
      aria-labelledby="drive-type-heading"
      className="w-full py-16"
      style={{ backgroundColor: '#29B7C9', direction: 'rtl' }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/*
         * .driveTypeMainTitle: color #4d351d, font-size 50px, font-weight 700
         *   text-align center, padding-top 80px
         */}
        <h2
          id="drive-type-heading"
          className="font-bold text-center text-4xl md:text-5xl"
          style={{ color: '#4d351d', paddingTop: '20px' }}
        >
          מצב נהיגה
        </h2>

        {/*
         * .driveTypeSecondTitle: color white, font-size 30px, font-weight 700
         *   text-align center, padding-top 25px
         */}
        <p
          className="font-bold text-center text-xl md:text-2xl"
          style={{ color: 'white', paddingTop: '20px' }}
        >
          מצב נהיגה פועל באמצעות
        </p>

        {/* Activation options */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mt-8"
          role="list"
          aria-label="אפשרויות הפעלת מצב נהיגה"
        >
          {DRIVE_OPTIONS.map((option, index) => (
            <div key={option.alt} className="flex items-center gap-2" role="listitem">
              <img
                src={option.image}
                alt={option.alt}
                className="h-20 w-auto object-contain"
                style={{ marginTop: index === 0 ? '10px' : '0' }}
              />
              {index < DRIVE_OPTIONS.length - 1 && (
                /* .orOptionTitle: color white, font-size 18px */
                <span
                  className="font-medium px-4"
                  style={{ color: 'white', fontSize: '18px' }}
                  aria-hidden="true"
                >
                  או
                </span>
              )}
            </div>
          ))}
        </div>

        {/*
         * .driveTypeThirdTitle: color white, font-size 30px, font-weight 700
         *   text-align center, padding-top 50px
         * Inner <div> has color #4d351d for "במצב נהיגה"
         */}
        <div className="text-center mt-10">
          <div
            className="font-bold text-4xl md:text-5xl"
            style={{ color: '#4d351d' }}
          >
            במצב נהיגה
          </div>
          <p
            className="font-bold text-xl md:text-2xl"
            style={{ color: 'white', marginTop: '12px' }}
          >
            כל שירותי הרקע פעילים והוא מאפשר
          </p>
        </div>

        {/* Separation line — original: background #4d351d, height 1px */}
        <div
          className="my-6 w-full"
          style={{ backgroundColor: '#4d351d', height: '1px' }}
          role="separator"
          aria-hidden="true"
        />

        {/* Drive features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {DRIVE_FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col items-center text-center"
              aria-label={feature.title}
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="h-24 object-contain mb-3"
              />

              {/*
               * .driveTypeSection .featureBoxTitle:
               *   font-size 30px, font-weight 700, color white
               *   padding-top 20px, padding-bottom 23px
               */}
              <h3
                className="font-bold text-xl md:text-2xl"
                style={{
                  color: 'white',
                  paddingTop: '20px',
                  paddingBottom: '16px',
                }}
              >
                {feature.title}
              </h3>

              <p
                className="font-light text-center text-base md:text-lg"
                style={{ color: 'white' }}
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
