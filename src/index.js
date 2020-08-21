window.addEventListener('DOMContentLoaded', function() {
  function component() {
    const root = document.getElementById('root');
    root.innerHTML = _.join(['Hello', 'webpack'], ' ');
  }
  
  component();
});