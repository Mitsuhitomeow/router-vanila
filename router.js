document.addEventListener('click', event => {
  console.log(event.target.tagName)
  if (event.target.tagName === 'A') {
    route(event)
  }
  event.preventDefault()
})

const route = (event) => {
  window.history.pushState({}, '', event.target.href);
  handleLocation();
}

const routers = {
  '/main': 'main.html',
  '/contacts': 'contacts.html',
  '/settings': 'settings.html'
}

const handleLocation = async () => {
  const path = window.location.pathname;
  const html = await fetch(routers[path]).then(data => data.text());
  document.querySelector('.container').innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();