export function addCover() {
  document.querySelector('.modal__cover').addEventListener('change', function() {
    if (this.files[0]) {
      var fr = new FileReader();

      fr.addEventListener('load', function() {
        document.querySelector('.modal__cover-added').style.backgroundImage = 'url(' + fr.result + ')';
      }, false);

      fr.readAsDataURL(this.files[0]);
      document.querySelector('.modal__cover-wrapper').style.before.display = 'none';
    }
  });
}
