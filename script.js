// ===================== PAGE NAVIGATION =====================

/**
 * showPage — Switches the visible page section and updates the active nav link.
 * @param {string} page   - The page id suffix (e.g. 'home', 'login', 'dashboard')
 * @param {Element} navEl - The nav link element to mark as active
 */
function showPage(page, navEl) {
  // Hide all page sections
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));

  // Remove active state from all nav links
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  // Show the target page
  document.getElementById('page-' + page).classList.add('active');

  // Activate the corresponding nav link
  if (navEl) navEl.classList.add('active');

  // Close the mobile menu if open
  document.getElementById('navLinks').classList.remove('open');
}

// ===================== MOBILE MENU =====================

/**
 * toggleMenu — Opens or closes the mobile navigation menu.
 */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===================== LOGIN PAGE =====================

/**
 * switchLogin — Toggles between Resident and Admin login cards.
 * @param {string} type - 'resident' or 'admin'
 */
function switchLogin(type) {
  const cardResident = document.getElementById('card-resident');
  const cardAdmin    = document.getElementById('card-admin');
  const btnResident  = document.getElementById('btn-resident');
  const btnAdmin     = document.getElementById('btn-admin');

  if (type === 'resident') {
    cardResident.classList.add('visible');
    cardAdmin.classList.remove('visible');
    btnResident.classList.add('active');
    btnAdmin.classList.remove('active');
  } else {
    cardAdmin.classList.add('visible');
    cardResident.classList.remove('visible');
    btnAdmin.classList.add('active');
    btnResident.classList.remove('active');
  }
}

/**
 * loginResident — Logs in as resident and opens the resident dashboard view.
 */
function loginResident() {
  showPage('dashboard', document.querySelectorAll('.nav-link')[2]);
  setView('resident');
}

/**
 * loginAdmin — Logs in as admin and opens the admin dashboard view.
 */
function loginAdmin() {
  showPage('dashboard', document.querySelectorAll('.nav-link')[2]);
  setView('admin');
}

// ===================== DASHBOARD =====================

/**
 * setView — Switches the dashboard between Resident and Admin views.
 * @param {string} type - 'resident' or 'admin'
 */
function setView(type) {
  const resView  = document.getElementById('resident-view');
  const admView  = document.getElementById('admin-view');
  const btnRes   = document.getElementById('btn-res-view');
  const btnAdm   = document.getElementById('btn-adm-view');
  const title    = document.getElementById('dash-title');
  const subtitle = document.getElementById('dash-subtitle');

  if (type === 'resident') {
    resView.style.display = 'block';
    admView.style.display = 'none';
    btnRes.classList.add('active');
    btnAdm.classList.remove('active');
    title.textContent    = 'My Dashboard';
    subtitle.textContent = 'Raise and track your maintenance requests';
  } else {
    admView.style.display = 'block';
    resView.style.display = 'none';
    btnAdm.classList.add('active');
    btnRes.classList.remove('active');
    title.textContent    = 'Admin Dashboard';
    subtitle.textContent = 'Manage and resolve building complaints';
  }
}

// ===================== COMPLAINT FORM =====================

/**
 * submitComplaint — Validates and submits the resident complaint form.
 *                   Shows a success alert and resets the form on success.
 */
function submitComplaint() {
  const title = document.getElementById('comp-title').value.trim();
  const cat   = document.getElementById('comp-cat').value;
  const desc  = document.getElementById('comp-desc').value.trim();

  if (!title || !cat || !desc) {
    alert('⚠️ Please fill in all fields before submitting.');
    return;
  }

  alert('✅ Complaint Submitted Successfully!\n\nYour ticket has been logged and our team will get back to you shortly.');

  // Reset the form fields
  document.getElementById('comp-title').value = '';
  document.getElementById('comp-cat').value   = '';
  document.getElementById('comp-desc').value  = '';
}

// ===================== ADMIN FILTER =====================

/**
 * filterComplaints — Filters the admin complaint list by status.
 * @param {string}  status - 'all', 'open', 'progress', or 'resolved'
 * @param {Element} btn    - The filter button element that was clicked
 */
function filterComplaints(status, btn) {
  // Update the active filter button styling
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show or hide complaint cards based on status
  document.querySelectorAll('.complaint-card').forEach(card => {
    const cardStatus = card.getAttribute('data-status');
    if (status === 'all') {
      card.classList.remove('hidden');
    } else {
      if (cardStatus === status) card.classList.remove('hidden');
      else card.classList.add('hidden');
    }
  });
}
