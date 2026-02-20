import type { DriveFeature, DriveOption } from '../types';

const DRIVE_OPTIONS: DriveOption[] = [
  { image: '/images/option1.png', alt: 'הפעלה על ידי חיישן תנועה' },
  { image: '/images/option2.png', alt: 'הפעלה על ידי חיבור Bluetooth' },
  { image: '/images/option3.png', alt: 'הפעלה על ידי חיבור חשמל' },
];

const DRIVE_FEATURES: DriveFeature[] = [
  {
    image: '/images/type3.png',
    alt: 'אייקון הקראת שיחות',
    title: 'הקראת שיחות',
    description:
      'במצב נהיגה Bip it מקריאה את שם המתקשר בכל שיחה נכנסת ונותנת אפשרות למענה בהוראה קולית',
  },
  {
    image: '/images/type2.png',
    alt: 'אייקון הקראת הודעות',
    title: 'הקראת הודעות',
    description:
      'מיד עם קבלת הודעת טקסט או ווטסאפ Bip it מקריאה אותה ונותנת אפשרות להכתיב תשובה בחזרה',
  },
  {
    image: '/images/type1.png',
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
          className="font-bold text-center"
          style={{ fontSize: '45px', color: '#4d351d', paddingTop: '20px' }}
        >
          מצב נהיגה
        </h2>

        {/*
         * .driveTypeSecondTitle: color white, font-size 30px, font-weight 700
         *   text-align center, padding-top 25px
         */}
        <p
          className="font-bold text-center"
          style={{ fontSize: '26px', color: 'white', paddingTop: '20px' }}
        >
          מצב נהיגה פועל באמצעות
        </p>

        {/* Activation options — original: images float left with "או" between */}
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
                className="h-16 object-contain"
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
        <div
          className="font-bold text-center mt-10"
          style={{ fontSize: '26px', color: 'white' }}
        >
          <div style={{ color: '#4d351d', marginBottom: '8px' }}>במצב נהיגה</div>
          <p className="m-0">כל שירותי הרקע פעילים והוא מאפשר</p>
        </div>

        {/* Separation line — original: background #4d351d, height 1px */}
        <div
          className="my-6 w-full"
          style={{ backgroundColor: '#4d351d', height: '1px' }}
          role="separator"
          aria-hidden="true"
        />

        {/* Drive features */}
        <div className="flex flex-wrap justify-center gap-6">
          {DRIVE_FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col items-center text-center"
              style={{ width: '270px' }}
              aria-label={feature.title}
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="h-16 object-contain mb-3"
              />

              {/*
               * .driveTypeSection .featureBoxTitle:
               *   font-size 30px, font-weight 700, color white
               *   padding-top 20px, padding-bottom 23px
               */}
              <h3
                className="font-bold"
                style={{
                  fontSize: '26px',
                  color: 'white',
                  paddingTop: '20px',
                  paddingBottom: '16px',
                }}
              >
                {feature.title}
              </h3>

              {/*
               * .driveTypeSection .featureBoxDescription:
               *   font-size 20px, font-weight 200, color white, text-align center
               */}
              <p
                className="font-light text-center"
                style={{ fontSize: '17px', color: 'white' }}
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
