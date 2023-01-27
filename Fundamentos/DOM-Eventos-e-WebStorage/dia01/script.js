const title = document.getElementById('header-container').style.backgroundColor = 'green';

const emergency = document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#ffdbe1';

const titleEmergency = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < titleEmergency.length; index += 1) {
  titleEmergency[index].style.backgroundColor = 'purple';
}

const noEmergency = document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

const titleNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < titleNoEmergency.length; index += 1) {
  titleNoEmergency[index].style.backgroundColor = 'black';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'green';