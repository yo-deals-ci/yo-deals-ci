const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  const tabs = document.querySelectorAll('.tab');
  const tickets = document.querySelectorAll('.ticket');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      tickets.forEach(ticket => {
        ticket.classList.toggle('hide', filter !== 'all' && ticket.dataset.cat !== filter);
      });
    });
  });