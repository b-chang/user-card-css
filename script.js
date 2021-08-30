console.log('hello world')

const handleRequest = (event) => {
  let parentNode = event.parentNode.parentNode;
  let numberOfRequests = parseInt(document.querySelector(".pending-requests").textContent);
  parentNode.remove();
  numberOfRequests--;
  numberOfRequests >= 0 ? document.querySelector(".pending-requests").innerText = numberOfRequests : numberOfRequests;

  if(event.alt == 'accept') {
    let connections = parseInt(document.querySelector(".connections").textContent);
    connections++;
    document.querySelector(".connections").innerText = connections;
  }
}

const editProfile = (event) => {
  const name = document.querySelector(".bottom h1");
  name.innerText === 'Jane Doe' ? name.innerText = 'John Doe' : name.innerText = 'Jane Doe';
}