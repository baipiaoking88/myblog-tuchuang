window.addEventListener('DOMContentLoaded', function() {
      var bottomDiv = document.getElementById('bottomDiv');
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(bottomDiv);
});

import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';
init({
    el: '#waline',
    serverURL: 'https://remark.lovestudy.link',
});
