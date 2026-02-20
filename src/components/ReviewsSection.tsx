import type { Review } from '../types';

const BASE = 'https://web.archive.org/web/20170824143159im_/http://pzlapps.com/wp-content/uploads/2017/02';

const REVIEWS: Review[] = [
  {
    image: `${BASE}/review4.png`,
    alt: 'לוגו אתר גאדג׳טי',
    title: 'אתר גאדג׳טי',
    description: 'מדריך משתמש מלא ומפורט לשימוש באפליקציה באתר גאדג׳טי',
    link: 'http://ggty.co/bipit',
    imageStyle: { paddingTop: '51px' },
  },
  {
    image: `${BASE}/review3.png`,
    alt: 'לוגו כלכליסט',
    title: 'כלכליסט',
    description: '״מדובר באחת האפליקציות היותר שימושיות וטובות מסוגה״',
    link: 'http://www.calcalist.co.il/internet/articles/0,7340,L-3657999,00.html',
  },
  {
    image: `${BASE}/review2.png`,
    alt: 'לוגו תכנית אורלי וגיא',
    title: 'אורלי וגיא',
    description: 'הדגמה חייה והסיפור שמאחורי פיתוח האפליקציה בתכנית הבוקר של אורלי וגיא',
    link: 'https://youtu.be/x1Q9MnSdCEg',
    imageStyle: { paddingTop: '37px' },
  },
  {
    image: `${BASE}/review1.png`,
    alt: 'לוגו מהדורה מרכזית ערוץ 10',
    title: 'מהדורה מרכזית ערוץ 10',
    description: 'נסיעת מבחן עם האפליקציה בכתבה של אביב פרנקל למהדורה המרכזית של ערוץ 10',
    link: 'https://youtu.be/M0pxN1XLJzI',
    imageStyle: { paddingTop: '54px' },
  },
  {
    image: `${BASE}/review5.png`,
    alt: 'לוגו ישראל היום',
    title: 'ישראל היום',
    description: 'פקודה קולית תמנע תאונה',
    link: 'http://www.israelhayom.co.il/article/253795',
    imageStyle: { paddingTop: '51px' },
  },
  {
    image: `${BASE}/review7.png`,
    alt: 'לוגו חורים ברשת',
    title: 'חורים ברשת',
    description:
      '״הזיהוי הקולי עצמו עובד מצויין. האפליקציה מבינה מה שאומרים לה בלי שום בעיות, ופועלת בצורה זריזה למדי״',
    link: 'http://www.holesinthenet.co.il/holesinthenet-media-story-18041',
    imageStyle: { marginTop: '-24px' },
  },
  {
    image: `${BASE}/review6.png`,
    alt: 'לוגו ערוץ 2',
    title: 'ערוץ 2',
    description: '״התשובה הציונית לסירי״ כתבה מאת עידו סולומון בתכנית שש עם עודד בן עמי',
    link: 'http://www.mako.co.il/news-channel2/Six-Newscast/Article-293d787bf5bd441004.htm',
    imageStyle: { paddingTop: '37px', width: '55px' },
  },
  {
    image: `${BASE}/review8.png`,
    alt: 'לוגו Ynet',
    title: 'Ynet',
    description: 'אפליקציית נהיגה שינתה את חייו של נער עיוור',
    link: 'http://www.ynet.co.il/articles/0,7340,L-4655566,00.html',
    imageStyle: { paddingTop: '54px', width: '120px' },
  },
];

interface ReviewCardProps {
  review: Review;
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    /*
     * .reviewsSection .featureBox: width 240px, height 290px, text-align center
     * .reviewsSection .featureBoxTitle: font-size 20px, font-weight 700, color #806C53
     * .reviewsSection .featureBoxDescription: font-size 20px, font-weight 700, color black, text-align center
     * .reviewsSection img: padding-top 60px, padding-bottom 20px
     */
    <a
      href={review.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`קרא את הכתבה על Bip it ב${review.title}`}
      className="flex flex-col items-center text-center no-underline hover:opacity-80 transition-opacity group"
      style={{ width: '240px', minHeight: '290px' }}
    >
      {/* Image area */}
      <div className="h-28 flex items-end justify-center w-full">
        <img
          src={review.image}
          alt={review.alt}
          className="max-h-24 object-contain"
          style={review.imageStyle}
        />
      </div>

      {/* Title — color #806C53 */}
      <h3
        className="font-bold mt-3 mb-2"
        style={{ fontSize: '18px', color: '#806C53' }}
      >
        {review.title}
      </h3>

      {/* Description — color black */}
      <p
        className="font-bold text-center"
        style={{ fontSize: '15px', color: 'black' }}
      >
        {review.description}
      </p>
    </a>
  );
}

export default function ReviewsSection() {
  return (
    /*
     * .reviewsSection: height 700px (auto on mobile), background white (default)
     * .reviewsSectionMainTitle: font-size 30px, font-weight 700, color #4E361D
     *   text-align center, padding-top 30px
     */
    <section
      id="reviewsSection"
      aria-labelledby="reviews-heading"
      className="w-full py-10 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          id="reviews-heading"
          className="font-bold text-center"
          style={{ fontSize: '28px', color: '#4E361D', paddingTop: '20px', paddingBottom: '5px' }}
        >
          מספרים עלינו
        </h2>

        {/* Separation line — original: background #4d351d, height 1px */}
        <div
          className="my-4 w-full"
          style={{ backgroundColor: '#4d351d', height: '1px' }}
          role="separator"
          aria-hidden="true"
        />

        <div
          className="flex flex-wrap justify-center gap-4 pt-4"
          role="list"
          aria-label="כתבות על Bip it"
        >
          {REVIEWS.map((review) => (
            <div key={review.title} role="listitem">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
