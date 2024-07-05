function changeGrades() {
  const grades = document.getElementsByClassName("ps_box-value");

  
  for (let i = 0; i < grades.length; ++i) {
    if (
      grades[i].innerText === 'A-' ||
      grades[i].innerText === 'B+' ||
      grades[i].innerText === 'B' ||
      grades[i].innerText === 'B-' ||
      grades[i].innerText === 'C+' ||
      grades[i].innerText === 'C' ||
      grades[i].innerText === 'C-' ||
      grades[i].innerText === 'D+' ||
      grades[i].innerText === 'D-' ||
      grades[i].innerText === 'D' ||
      grades[i].innerText === 'E' ||
      grades[i].innerText === 'F' ||
      grades[i].innerText === 'U'
    ) {
      grades[i].innerText = 'A';
    }
  }
}
if(window.location.hostname === 'events.williams.edu/event'){
  setInterval(changeGrades,300);
}