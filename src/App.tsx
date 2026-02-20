import { useCallback } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import InfoSection from './components/InfoSection';
import DriveTypeSection from './components/DriveTypeSection';
import ReviewsSection from './components/ReviewsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { getPlatformUrl, DOWNLOAD_URLS, VIDEO_URLS } from './utils/platform';

/*
 * .separationLine: background-color #4d351d, width 100%, height 1px
 */
function SeparationLine({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      style={{ backgroundColor: '#4d351d', width: '100%', height: '1px', ...style }}
    />
  );
}

export default function App() {
  const handleDownload = useCallback(() => {
    window.open(getPlatformUrl(DOWNLOAD_URLS.apple, DOWNLOAD_URLS.android), '_blank', 'noopener');
  }, []);

  const handleWatchVideo = useCallback(() => {
    window.open(getPlatformUrl(VIDEO_URLS.apple, VIDEO_URLS.android), '_blank', 'noopener');
  }, []);

  return (
    <div className="min-h-screen" style={{ color: '#333' }}>
      <Header />

      <main>
        <HeroSection onDownload={handleDownload} onWatchVideo={handleWatchVideo} />
        <FeaturesSection />
        <SeparationLine />
        <InfoSection />
        <SeparationLine style={{ marginTop: 0 }} />
        <DriveTypeSection />
        <SeparationLine />
        <ReviewsSection />
        <SeparationLine />
        <ContactForm />
      </main>

      <Footer onDownload={handleDownload} />
    </div>
  );
}
