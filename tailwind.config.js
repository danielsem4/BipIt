/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Fjalla One"', 'sans-serif'],
        body: ['"Alef Hebrew"', 'Cantarell', 'sans-serif'],
      },
      colors: {
        brand: {
          teal:        '#29B7C9',  /* primary accent, "Bip it" blue, buttons */
          'dark-bg':   '#28180b',  /* header background  rgb(40,24,11) */
          'hero-bg':   '#4E361D',  /* hero / footer background */
          'brown-dark':'#4d351d',  /* separation line, drive title */
          'brown-mid': '#7f6b52',  /* watch-video button */
          'brown-alt': '#806C53',  /* review box titles */
          'section-bg':'#EEE3CF',  /* features / info section background */
          'cream':     '#EDE2CE',  /* hero text, footer copyright */
          'form-bg':   '#EFEFEF',  /* contact form background */
          'nav-text':  '#F2F2F2',  /* header nav link text */
          'warm-grey': '#B9B0A5',  /* footer secondary text */
        },
      },
    },
  },
  plugins: [],
};
