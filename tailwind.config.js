module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      'primary': '#545548',
      'gray':'#767272',
      'graybox':'#DCDCDC',
      'secound': '#faebd7',
      'third':'#837f78',
      'fourth':'#deb399'
     },
     backgroundImage: {
      'hero-pattern': "url('/src/assets/bghome.jpg')",      
     },
     textColor: {
      'primary': '#545548',//4
      'secound': '#faebd7',//2
      'third':'#837f78',//3
      'fourth':'#deb399',//1
      'gray':'#767272',
      'white':'#ffff'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
