export default function InfoSection() {
  return (
    /*
     * Exact original:
     *   background-color: #EEE3CF  (same as features section)
     *   direction: rtl
     *   text-align: right
     */
    <section
      id="infoSection"
      aria-labelledby="info-heading"
      className="w-full py-16"
      style={{ backgroundColor: '#EEE3CF', direction: 'rtl' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Text */}
          <div className="flex-1 text-right">
            {/*
             * .infoSectionTitle: font-size 50px, font-weight 700, color rgb(41,184,201) = #29B7C9
             *   padding-top: 85px
             */}
            <h2
              id="info-heading"
              className="font-bold"
              style={{ fontSize: '45px', color: '#29B7C9', paddingTop: '20px' }}
            >
              לא רק בנהיגה
            </h2>

            {/*
             * .infoSectionDescription: font-size 26px, font-weight 500, color #4E361D
             *   padding-top: 37px, line-height: 27px, max-width: 603px
             */}
            <p
              className="font-medium"
              style={{
                fontSize: '20px',
                color: '#4E361D',
                paddingTop: '30px',
                lineHeight: '27px',
                maxWidth: '603px',
              }}
            >
              <span style={{ color: '#29B7C9' }}>Bip it</span> חוסכת זמן ומאפשרת גישה מהירה
              למבחר יישומים ופקודות מבלי להתעסק עם הנייד: שיחות, הודעות, ווטסאפ, תזכורות,
              שעון מעורר, ניווט, תרגום, צילום ועוד.
              <br />
              פשוט אומרים פקודה קולית והאפליקציה מבצעת אותה עבורכם ומשאירה את הידיים
              והעיניים שלכם פנויות.
            </p>
          </div>

          {/* App image */}
          <div className="flex-shrink-0 flex justify-center">
            <img
              src="https://web.archive.org/web/20170824143159im_/http://pzlapps.com/wp-content/uploads/2017/02/info.png"
              alt="הדגמת שימוש באפליקציית Bip it"
              className="w-56 md:w-72 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
