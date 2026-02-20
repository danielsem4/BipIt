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
        backgroundColor: '#4E361D',
        paddingTop: '70px',
        minHeight: '538px',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-8 w-full flex flex-col-reverse md:flex-row items-center gap-8">

        {/* Phone mockup — original floats right */}
        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
          <img
            src="https://web.archive.org/web/20170824143159im_/http://pzlapps.com/wp-content/uploads/2017/02/coverImage.png"
            alt="צילום מסך של אפליקציית Bip it"
            className="w-48 sm:w-60 md:w-72 drop-shadow-2xl"
          />
        </div>

        {/* Text block — original: float left, width 420px */}
        <div className="flex-1 text-center md:text-right">
          {/*
           * .secondCoverTitle: font-size 50px, font-weight 700, color #EDE2CE
           * .mainCoverTitle: font-size 95px, font-weight 700, color #EDE2CE
           */}
          <p
            className="font-body font-bold leading-tight mb-0"
            style={{ fontSize: '50px', color: '#EDE2CE' }}
          >
            פקודות קוליות
          </p>
          <p
            className="font-body font-bold leading-tight mb-8"
            style={{ fontSize: '95px', color: '#EDE2CE', lineHeight: '1' }}
          >
            בעברית
          </p>

          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            {/*
             * .rightIcon (Download):
             *   background #29b7c9 (teal), color #4d351d (dark brown)
             *   border-radius 200px, font-size 31px, font-weight 700
             *   box-shadow 1px 2px 3px black
             */}
            <button
              onClick={onDownload}
              className="font-bold cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              style={{
                backgroundColor: '#29b7c9',
                color: '#4d351d',
                fontSize: '24px',
                borderRadius: '200px',
                width: '125px',
                height: '80px',
                boxShadow: '1px 2px 3px black',
                border: 'none',
              }}
              aria-label="הורד את אפליקציית Bip it"
            >
              להורדה
            </button>

            {/*
             * .leftIcon (Watch Video):
             *   background #7f6b52 (medium brown), color #ede2ce (cream)
             *   border-radius 200px, font-size 31px, font-weight 700
             *   box-shadow 1px 2px 3px black
             */}
            <button
              onClick={onWatchVideo}
              className="font-bold cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              style={{
                backgroundColor: '#7f6b52',
                color: '#ede2ce',
                fontSize: '22px',
                borderRadius: '200px',
                width: '125px',
                height: '80px',
                boxShadow: '1px 2px 3px black',
                border: 'none',
              }}
              aria-label="צפה בסרטון של אפליקציית Bip it"
            >
              לצפייה בסרטון
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
