document.addEventListener('DOMContentLoaded', init, false);

let data, table, sortCol;
let sortAsc = false;
const pageSize = 3;
let curPage = 1;

async function init() {

  table = document.querySelector('#Table tbody');
  
  let resp = await fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
  data = await resp.json();
  renderTable();
  
  
  document.querySelectorAll('#Table thead tr th').forEach(t => {
     t.addEventListener('click', sort, false);
  });
  
  document.querySelector('#nextButton').addEventListener('click', nextPage, false);
  document.querySelector('#prevButton').addEventListener('click', previousPage, false);
}

function renderTable() {
  
  let result = '';
  data.filter((row, index) => {
        let start = (curPage-1)*pageSize;
        let end =curPage*pageSize;
        if(index >= start && index < end) return true;
  }).forEach(c => {
     result += `<tr>
     <td>${c.id}</td>
     <td>${c.name}</td>
     <td>${c.email}</td>
     </tr>`;
  });
  table.innerHTML = result;
}

function sort(e) {
  let thisSort = e.target.dataset.sort;
  if(sortCol === thisSort) sortAsc = !sortAsc;
  sortCol = thisSort;
  console.log('sort dir is ', sortAsc);
  data.sort((a, b) => {
    if(a[sortCol] < b[sortCol]) return sortAsc?1:-1;
    if(a[sortCol] > b[sortCol]) return sortAsc?-1:1;
    return 0;
  });
  renderTable();
}

function previousPage() {
  if(curPage > 1) curPage--;
  renderTable();
}

function nextPage() {
  if((curPage * pageSize) < data.length) curPage++;
  renderTable();
}
