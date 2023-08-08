// div use <div id="bottomDiv">code</div>
window.addEventListener('DOMContentLoaded', function() {
      var bottomDiv = document.getElementById('bottomDiv');
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(bottomDiv);
});
