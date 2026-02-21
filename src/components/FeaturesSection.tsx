import type { Feature } from '../types';

const FEATURES: Feature[] = [
  {
    image: 'https://web.archive.org/web/20170824143159im_/http://pzlapps.com/wp-content/uploads/2017/02/feature4.png',
    alt: 'אייקון ניווט קולי',
    title: 'ניווט קולי',
    description:
      'מאפשרת לך להגיע לכל יעד ללא צורך בהקלדות מיותרות בזמן נהיגה. פשוט אמור לאן והיא תפתח עבורך את ווייז או כל תכנת ניווט אחרת',
  },
  {
    image: 'https://web.archive.org/web/20170824143159im_/http://pzlapps.com/wp-content/uploads/2017/02/feature3.png',
    alt: 'אייקון תזכורות קוליות',
    title: 'תזכורות קוליות',
    description:
      'מאפשרת לך לקבוע פגישות, תזכורת ואפילו להתעורר לכל מוזיקה שתבחר. פשוט אמור מה ומתי והיא תבצע את כל השאר',
  },
  {
    image: 'https://web.archive.org/web/20170824143159im_/http://pzlapps.com/wp-content/uploads/2017/02/feature2.png',
    alt: 'אייקון ניגון מוזיקה',
    title: 'ניגון מוזיקה',
    description:
      'מאפשרת לך לנגן את כל שתרצה מספריית המוזיקה שבמכשירך או שירים מהיוטיוב בפקודה קולית',
  },
  {
    image: 'https://web.archive.org/web/20170824143159im_/http://pzlapps.com/wp-content/uploads/2017/02/feature1.png',
    alt: 'אייקון שיחות והודעות',
    title: 'שיחות והודעות',
    description:
      'מאפשרת לך להתקשר ולשלוח הודעות לאנשי הקשר שבמכשירך בהוראה קולית בלבד וללא כל נגיעה במכשיר',
  },
];

export default function FeaturesSection() {
  return (
    /*
     * Exact original:
     *   background-color: #EEE3CF
     *   height: 400px (auto on mobile)
     */
    <section
      id="featuresSection"
      aria-labelledby="features-heading"
      className="w-full py-16"
      style={{ backgroundColor: '#EEE3CF' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 id="features-heading" className="sr-only">
          תכונות האפליקציה
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col items-center text-center w-full max-w-xs"
              aria-label={feature.title}
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="h-16 object-contain mb-2"
              />

              {/* .featureBoxTitle: font-size 30px, font-weight 700, color black */}
              <h3
                className="font-bold mb-3"
                style={{ fontSize: '24px', color: 'black', paddingTop: '13px', paddingBottom: '10px' }}
              >
                {feature.title}
              </h3>

              {/* .featureBoxDescription: font-size 15px, font-weight 500, color black */}
              <p
                className="font-medium leading-relaxed"
                style={{ fontSize: '15px', color: 'black', direction: 'rtl' }}
              >
                {/* .blueTitleCompany: color #29B7C9 */}
                <span style={{ color: '#29B7C9' }}>Bip it </span>
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
