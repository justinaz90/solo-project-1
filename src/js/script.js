/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

{
  'use strict';

  /* Sidebar */

  function toggleMenu(visible) {
    document.querySelector('.sidebar-menu').classList.toggle('show', visible);
  }

  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
  });


  /* Chart */
  function initChart(){
    const ctx = document.getElementById('myChart').getContext('2d');

    const chart = new Chart(ctx, {
      // 1
      type: 'bar',
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [{
          // 4
          label: 'Signups',
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [ 350, 200, 220, 340, 420, 400, 300, 280, 310 ],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 400, 150, 300, 270, 450, 110, 200, 490, 320 ],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 300, 200, 170, 300, 340, 220, 90, 150, 170 ],
          // 7
          hidden: true,
        }]
      },
      options: {
        responsive: true,
        legend: {
          color: '#979797',
          labels: {
            usePointStyle: true,
            fontFamily: 'Roboto, sans-serif',
            fontColor: '#80BFCA',
            fontSize: 16,
            padding: 40,
          }
        }
      },
    });
  }

  initChart();


  /* Active pages */

  const activatePage = function(event){
    event.preventDefault();
    const clickedElement = this;

    console.log('Link was clicked!');
    console.log(event);

    /* remove class 'active' from all sidebar links  */
    const activeLinks = document.querySelectorAll('.sidebar-list a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* remove class 'active' from all sections */
    const activeSections = document.querySelectorAll('.pages section.active');

    for(let activeSection of activeSections){
      activeSection.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const sectionSelector = clickedElement.getAttribute('href');
    console.log(sectionSelector);

    /* find the correct section using the selector (value of 'href' attribute) */
    const targetSection = document.querySelector(sectionSelector);
    console.log(targetSection);

    /* add class 'active' to the correct section*/
    targetSection.classList.add('active');
  };

  const links = document.querySelectorAll('.sidebar-list a');

  for(let link of links){
    link.addEventListener('click', activatePage);
  }


  /* Modals */

  /* Close modal */

  const closeModal = function() {
    document.getElementById('overlay').classList.remove('show');

    const activeModals = document.querySelectorAll('.overlay .show');

    for(let activeModal of activeModals){
      activeModal.classList.remove('show');
    }
  };

  document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();
    });
  });

  document.querySelector('#overlay').addEventListener('click', function(e) {
    if(e.target === this) {
      closeModal();
    }
  });

  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
      closeModal();
    }
  });


  /* Open modal */

  const openModal = function(event) {
    event.preventDefault();
    const clickedElement = this;

    /* add class 'show' to the clicked link and overlay */
    clickedElement.classList.add('show');
    console.log('clickedElement:', clickedElement);

    document.querySelector('#overlay').classList.add('show');

    /* get 'href' attribute from the clicked link */
    const modalSelector = clickedElement.getAttribute('href');
    console.log(modalSelector);

    /* find the correct modal using the selector (value of 'href' attribute) */
    const targetModal = document.querySelector(modalSelector);
    console.log(targetModal);

    /* add class 'show' to the correct modal */
    targetModal.classList.add('show');
  };

  const modals = document.querySelectorAll('.js--open-modal');

  for(let modal of modals){
    modal.addEventListener('click', openModal);
  }
}
