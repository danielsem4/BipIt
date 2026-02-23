interface HeroSectionProps {
  onDownload: () => void;
  onWatchVideo: () => void;
}

export default function HeroSection({ onDownload, onWatchVideo }: HeroSectionProps) {
  return (
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
      <div className="max-w-5xl mx-auto px-6 py-10 w-full flex flex-col-reverse md:flex-row items-center gap-16 md:gap-20">

        {/* Phone mockup — first in DOM = right side in RTL */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
          <img
            src="https://web.archive.org/web/20170824143159im_/http://pzlapps.com/wp-content/uploads/2017/02/coverImage.png"
            alt="צילום מסך של אפליקציית Bip it"
            className="w-64 sm:w-72 md:w-96"
          />
        </div>

        {/* Text + buttons — second in DOM = left side in RTL */}
        <div className="flex-1 flex flex-col items-center gap-8">

          {/* Title */}
          <div className="text-center">
            <p
              className="font-body font-bold leading-snug"
              style={{ fontSize: '50px', color: '#EDE2CE' }}
            >
              פקודות קוליות
            </p>
            <p
              className="font-body font-bold leading-none"
              style={{ fontSize: '95px', color: '#EDE2CE' }}
            >
              בעברית
            </p>
          </div>

          {/* Action buttons — centered under the text */}
          <div className="flex flex-row items-center justify-center gap-5">
            {/* Watch Video — gray circle, text only */}
            <button
              onClick={onWatchVideo}
              className="font-bold cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 flex items-center justify-center"
              style={{
                backgroundColor: '#7f6b52',
                color: '#ede2ce',
                fontSize: '22px',
                borderRadius: '50%',
                width: '120px',
                height: '120px',
                boxShadow: '1px 2px 4px rgba(0,0,0,0.6)',
                border: 'none',
                textAlign: 'center',
                lineHeight: 1.2,
                padding: '8px',
              }}
              aria-label="צפה בסרטון של אפליקציית Bip it"
            >
              לצפייה בסרטון
            </button>

            {/* Download — teal circle */}
            <button
              onClick={onDownload}
              className="font-bold cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 flex items-center justify-center"
              style={{
                backgroundColor: '#29b7c9',
                color: '#4d351d',
                fontSize: '22px',
                borderRadius: '50%',
                width: '120px',
                height: '120px',
                boxShadow: '1px 2px 4px rgba(0,0,0,0.6)',
                border: 'none',
              }}
              aria-label="הורד את אפליקציית Bip it"
            >
              להורדה
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
