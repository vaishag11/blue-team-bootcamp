/**
 * BLUE TEAM BOOTCAMP — Minimal White Gallery Application
 * Jyothi Engineering College, Thrissur
 * Dept. of CSE (Cyber Security) & Cyber Club (CYBERTON)
 */

document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'blue_team_bootcamp_user_photos';

  // Elements
  const allFoldersView = document.getElementById('allFoldersView');
  const singleFolderView = document.getElementById('singleFolderView');
  const schoolsGrid = document.getElementById('schoolsGrid');
  
  const btnBackToGrid = document.getElementById('btnBackToGrid');
  const folderTitle = document.getElementById('folderTitle');
  const folderSubtitle = document.getElementById('folderSubtitle');
  const folderPathPill = document.getElementById('folderPathPill');
  const dropzoneCodePath = document.getElementById('dropzoneCodePath');
  const folderPhotosGrid = document.getElementById('folderPhotosGrid');
  const emptyPhotosState = document.getElementById('emptyPhotosState');

  const folderDropzone = document.getElementById('folderDropzone');
  const folderFileInput = document.getElementById('folderFileInput');

  // Lightbox & Poster Modals
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxMeta = document.getElementById('lightboxMeta');
  const lightboxDownload = document.getElementById('lightboxDownload');
  const btnCloseLightbox = document.getElementById('btnCloseLightbox');

  const posterModal = document.getElementById('posterModal');
  const btnOpenPoster = document.getElementById('btnOpenPoster');
  const btnClosePoster = document.getElementById('btnClosePoster');

  let activeSchoolId = null;

  // Local Storage Helpers
  function getCustomPhotos() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCustomPhoto(photo) {
    const photos = getCustomPhotos();
    photos.push(photo);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    } catch (e) {
      console.warn('LocalStorage limit reached:', e);
    }
  }

  // Get all photos for a school
  function getPhotosForSchool(schoolId) {
    const defaults = OUTREACH_DATA.photos.filter(p => p.schoolId === schoolId);
    const custom = getCustomPhotos().filter(p => p.schoolId === schoolId);
    return [...defaults, ...custom];
  }

  // Render 6 Folder Cards in 3x2 Grid
  function renderAllFolders() {
    if (!schoolsGrid) return;

    schoolsGrid.innerHTML = OUTREACH_DATA.schools.map(school => {
      const schoolPhotos = getPhotosForSchool(school.id);
      const count = schoolPhotos.length;
      const titleImg = school.coverImage || "assets/images/banner/title_image.png";

      return `
        <div class="folder-card" data-school-id="${school.id}">
          <div class="card-preview">
            <img src="${titleImg}" alt="${school.name}" class="card-preview-img" loading="lazy">
            ${count > 0 ? `<span class="badge-count">${count} photo${count === 1 ? '' : 's'}</span>` : ''}
          </div>

          <div class="card-details">
            <h3 class="card-school-name">${school.name}</h3>
            <div class="card-date">${school.date} &bull; ${school.day}</div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to cards
    schoolsGrid.querySelectorAll('.folder-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-school-id');
        openSchoolFolder(id);
      });
    });
  }

  // Open Single School Folder View
  function openSchoolFolder(schoolId) {
    activeSchoolId = schoolId;
    const school = OUTREACH_DATA.schools.find(s => s.id === schoolId);
    if (!school) return;

    folderTitle.textContent = school.name;
    folderSubtitle.textContent = `${school.date} — ${school.day}`;
    if (folderPathPill) folderPathPill.textContent = school.folderPath;
    if (dropzoneCodePath) dropzoneCodePath.textContent = school.folderPath;

    renderSchoolPhotos(schoolId);

    allFoldersView.classList.add('view-hidden');
    singleFolderView.classList.remove('view-hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Render Photos inside Single School Folder
  function renderSchoolPhotos(schoolId) {
    const photos = getPhotosForSchool(schoolId);

    if (photos.length === 0) {
      folderPhotosGrid.innerHTML = '';
      emptyPhotosState.classList.remove('view-hidden');
      return;
    }

    emptyPhotosState.classList.add('view-hidden');
    folderPhotosGrid.innerHTML = photos.map((photo, idx) => `
      <div class="photo-item" data-index="${idx}">
        <div class="photo-img-wrap">
          <img src="${photo.src}" alt="${photo.title}" class="photo-img" loading="lazy">
        </div>
        <div class="photo-info">
          <span class="photo-title">${photo.title || 'Outreach Photo'}</span>
          <span class="photo-date">${photo.date || ''}</span>
        </div>
      </div>
    `).join('');

    // Lightbox click
    folderPhotosGrid.querySelectorAll('.photo-item').forEach((item, index) => {
      item.addEventListener('click', () => {
        openLightbox(photos[index]);
      });
    });
  }

  // Delete a specific photo
  function deletePhoto(photoId, photoSrc) {
    if (!confirm('Are you sure you want to delete this photo?')) return;

    let custom = getCustomPhotos();
    custom = custom.filter(p => (photoId ? p.id !== photoId : true) && (photoSrc ? p.src !== photoSrc : true));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
    } catch (e) {
      console.warn(e);
    }

    OUTREACH_DATA.photos = OUTREACH_DATA.photos.filter(p => (photoId ? p.id !== photoId : true) && (photoSrc ? p.src !== photoSrc : true));

    if (activeSchoolId) {
      renderSchoolPhotos(activeSchoolId);
    }
    renderAllFolders();
    closeLightbox();
  }

  // Back button returns to grid view
  if (btnBackToGrid) {
    btnBackToGrid.addEventListener('click', () => {
      singleFolderView.classList.add('view-hidden');
      allFoldersView.classList.remove('view-hidden');
      renderAllFolders();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // File Upload / Drag & Drop
  if (folderDropzone && folderFileInput) {
    folderDropzone.addEventListener('click', () => folderFileInput.click());

    ['dragenter', 'dragover'].forEach(name => {
      folderDropzone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        folderDropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      folderDropzone.addEventListener(name, (e) => {
        e.preventDefault();
        e.stopPropagation();
        folderDropzone.classList.remove('dragover');
      });
    });

    folderDropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      handlePhotoFiles(files);
    });

    folderFileInput.addEventListener('change', (e) => {
      const files = e.target.files;
      handlePhotoFiles(files);
    });
  }

  function handlePhotoFiles(files) {
    if (!files || files.length === 0 || !activeSchoolId) return;
    const school = OUTREACH_DATA.schools.find(s => s.id === activeSchoolId);
    
    Array.from(files).forEach((file, index) => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Data = e.target.result;
        const newPhoto = {
          id: `custom-${Date.now()}-${index}`,
          schoolId: activeSchoolId,
          title: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
          src: base64Data,
          date: school ? school.date : ''
        };

        saveCustomPhoto(newPhoto);
        renderSchoolPhotos(activeSchoolId);
      };

      reader.readAsDataURL(file);
    });
  }

  let currentLightboxPhoto = null;

  // Lightbox
  function openLightbox(photo) {
    if (!photo) return;
    currentLightboxPhoto = photo;
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.title || 'Photo';
    lightboxTitle.textContent = photo.title || 'Outreach Photo';
    
    const school = OUTREACH_DATA.schools.find(s => s.id === photo.schoolId);
    lightboxMeta.textContent = `${photo.date || ''} ${school ? '• ' + school.name : ''}`;
    lightboxDownload.href = photo.src;
    lightboxDownload.setAttribute('download', `${(photo.title || 'photo').replace(/\s+/g, '_')}.jpg`);

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    currentLightboxPhoto = null;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  const lightboxDelete = document.getElementById('lightboxDelete');
  if (lightboxDelete) {
    lightboxDelete.addEventListener('click', () => {
      if (currentLightboxPhoto) {
        deletePhoto(currentLightboxPhoto.id, currentLightboxPhoto.src);
      }
    });
  }

  const btnClearSchoolPhotos = document.getElementById('btnClearSchoolPhotos');
  if (btnClearSchoolPhotos) {
    btnClearSchoolPhotos.addEventListener('click', () => {
      if (!activeSchoolId) return;
      const school = OUTREACH_DATA.schools.find(s => s.id === activeSchoolId);
      const schoolName = school ? school.name : 'this school';
      if (!confirm(`Are you sure you want to delete all photos for ${schoolName}?`)) return;

      let custom = getCustomPhotos().filter(p => p.schoolId !== activeSchoolId);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
      } catch (e) {
        console.warn(e);
      }

      OUTREACH_DATA.photos = OUTREACH_DATA.photos.filter(p => p.schoolId !== activeSchoolId);
      renderSchoolPhotos(activeSchoolId);
      renderAllFolders();
    });
  }

  if (btnCloseLightbox) btnCloseLightbox.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Official Poster Modal
  if (btnOpenPoster && posterModal) {
    btnOpenPoster.addEventListener('click', () => {
      posterModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (btnClosePoster && posterModal) {
    btnClosePoster.addEventListener('click', () => {
      posterModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (posterModal) {
    posterModal.addEventListener('click', (e) => {
      if (e.target === posterModal) {
        posterModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      if (posterModal) {
        posterModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // Initial render
  renderAllFolders();
});
