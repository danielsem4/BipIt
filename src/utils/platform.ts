/**
 * Detects whether the user is on an Apple device (iOS / macOS)
 * and returns the appropriate URL.
 */
export function getPlatformUrl(appleUrl: string, androidUrl: string): string {
  const ua = navigator.userAgent;
  const isApple = /Mac|iPhone|iPad|iPod/.test(ua);
  return isApple ? appleUrl : androidUrl;
}

export const DOWNLOAD_URLS = {
  apple: 'https://itunes.apple.com/il/app/bip-it-pqwdwt-qwlywt/id750983890?mt=8',
  android: 'https://play.google.com/store/apps/details?id=com.pzlapps.bipit&hl=en',
} as const;

export const VIDEO_URLS = {
  apple: 'https://youtu.be/kaJ4_BPHNyM',
  android: 'https://youtu.be/STxF_gePVxE',
} as const;
