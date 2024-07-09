const parseData = JSON.parse(data);
// console.log(parseData);
const contEl = document.querySelector('.content');
// console.log(contEl);
parseData.forEach(item => {
  contEl.insertAdjacentHTML('beforeend', `
    <p>${item.id}</p>
    <h2>${item.firstName} ${item.lastName}</h2>
    <img src="${item.image}" alt="imageid_${item.id}">
    `
  )
});