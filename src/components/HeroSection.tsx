interface HeroSectionProps {
  onDownload: () => void;
  onWatchVideo: () => void;
}

export default function HeroSection({ onDownload, onWatchVideo }: HeroSectionProps) {
  return (
    /*
     * Exact original:
     *   background-color: #4E361D
     *   height: 538px (we allow auto on mobile)
     *   margin-top compensated by fixed header
     */
    <section
      id="coverSection"
      aria-label="כותרת ראשית"
      className="w-full flex items-center"
      style={{
        backgroundColor: '#4F361D',
        paddingTop: '70px',
        minHeight: '538px',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12 w-full flex flex-col-reverse md:flex-row items-center gap-14">

        {/* Phone mockup + action buttons below */}
        <div className="flex-shrink-0 flex flex-col items-center gap-8 w-full md:w-auto">
          <img
            src="https://web.archive.org/web/20170824143159im_/http://pzlapps.com/wp-content/uploads/2017/02/coverImage.png"
            alt="צילום מסך של אפליקציית Bip it"
            className="w-48 sm:w-60 md:w-72"
          />

          {/* Action buttons — side by side under the image */}
          <div className="flex flex-row items-center gap-5">
            {/* Download button */}
            <button
              onClick={onDownload}
              className="font-bold cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              style={{
                backgroundColor: '#29b7c9',
                color: '#4d351d',
                fontSize: '22px',
                borderRadius: '200px',
                width: '130px',
                height: '58px',
                boxShadow: '1px 2px 3px black',
                border: 'none',
              }}
              aria-label="הורד את אפליקציית Bip it"
            >
              להורדה
            </button>

            {/* Watch Video — circular play button */}
            <button
              onClick={onWatchVideo}
              className="cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 flex flex-col items-center justify-center"
              style={{
                backgroundColor: '#7f6b52',
                color: '#ede2ce',
                borderRadius: '50%',
                width: '96px',
                height: '96px',
                boxShadow: '1px 2px 4px black',
                border: 'none',
                gap: '3px',
              }}
              aria-label="צפה בסרטון של אפליקציית Bip it"
            >
              <span style={{ fontSize: '30px', lineHeight: 1 }}>&#9654;</span>
              <span style={{ fontSize: '11px', fontWeight: '700', lineHeight: 1 }}>לצפייה בסרטון</span>
            </button>
          </div>
        </div>

        {/* Text block — original: float left, width 420px */}
        <div className="flex-1 text-center md:text-right">
          {/*
           * .secondCoverTitle: font-size 50px, font-weight 700, color #EDE2CE
           * .mainCoverTitle: font-size 95px, font-weight 700, color #EDE2CE
           */}
          <p
            className="font-body font-bold leading-tight mb-0"
            style={{ fontSize: '75px', color: '#EDE2CE' }}
          >
          פקודות קוליות בעיברית
          </p>
          {/* <p
            className="font-body font-bold leading-tight"
            style={{ fontSize: '95px', color: '#EDE2CE', lineHeight: '1' }}
          >
            בעברית
          </p> */}
        </div>
      </div>
    </section>
  );
}
