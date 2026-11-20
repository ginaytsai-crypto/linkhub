(function () {
  const data = window.LINKHUB_DATA;
  if (!data) {
    console.error("LINKHUB_DATA missing");
    return;
  }

  const ICONS = {
    instagram: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.75a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z"/>
      </svg>`,
    line: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.5 3.5A9.5 9.5 0 0 0 4.2 16.4L3 20.5l4.3-1.1A9.5 9.5 0 1 0 19.5 3.5zM8.2 14.1H6.9V9.4h1.3zm3.4 0h-1.2l-.1-3.2-1.5 3.2H8.5L7 9.4h1.3l.9 2.5.9-2.5h1.3zm3.1 0h-2.6V9.4h2.6v1.1h-1.3v.7h1.2v1h-1.2v.8h1.3zm3.4 0h-1.3l-1.1-1.6v1.6h-1.2V9.4h1.2l1.1 1.6V9.4h1.3z"/>
      </svg>`,
    facebook: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"/>
      </svg>`,
    threads: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.8 1.5 12.23v-.154c.02-3.493.877-6.193 2.547-8.026C5.897 1.78 8.717.498 12.22.5h.014c2.582.003 4.698.647 6.288 1.912 1.502 1.196 2.399 2.877 2.665 4.997l.016.13h-3.017l-.01-.082c-.242-1.593-.913-2.77-1.996-3.497-1.145-.77-2.67-1.15-4.533-1.13-2.587.016-4.556.89-5.85 2.597C4.48 6.97 3.89 9.1 3.874 12.1v.13c.015 2.99.605 5.13 1.753 6.358 1.29 1.7 3.259 2.572 5.851 2.592 1.96.015 3.552-.36 4.73-1.112 1.24-.792 1.946-1.985 2.099-3.547.04-.41.06-.83.06-1.25 0-.1 0-.19-.01-.28h-4.38v2.4h1.54c-.12.72-.45 1.27-.97 1.63-.58.4-1.4.61-2.43.61-1.47 0-2.53-.42-3.15-1.25-.55-.73-.83-1.84-.83-3.3 0-1.45.28-2.56.83-3.29.62-.83 1.68-1.25 3.15-1.25 1.12 0 2.01.28 2.65.83.48.41.8 1 1 1.74h2.95c-.17-1.57-.75-2.85-1.74-3.8C15.3 7.3 13.85 6.7 12 6.7c-2.4 0-4.23.73-5.43 2.16-1.07 1.28-1.62 3.05-1.62 5.26s.55 3.98 1.62 5.26c1.2 1.43 3.03 2.16 5.43 2.16 1.97 0 3.54-.48 4.67-1.44 1.23-1.04 1.93-2.5 2.1-4.35h2.95c-.19 2.52-1.15 4.58-2.86 6.12C17.1 23.3 14.9 24 12.186 24z"/>
      </svg>`,
    people: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 9 11zm6 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM3.5 19.5v-1A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5v1zm10.2-1v-.7A5.7 5.7 0 0 0 12.4 14H16a4 4 0 0 1 4 4v1.5z"/>
      </svg>`,
    globe: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.9 9h-3.1a14.5 14.5 0 0 0-1.3-5.1A8 8 0 0 1 19.9 11zM12 4c.9 0 2.3 1.8 3 5H9c.7-3.2 2.1-5 3-5zM4.1 13h3.1a14.5 14.5 0 0 0 1.3 5.1A8 8 0 0 1 4.1 13zm3.1-2H4.1a8 8 0 0 1 4.4-5.1A14.5 14.5 0 0 0 7.2 11zM12 20c-.9 0-2.3-1.8-3-5h6c-.7 3.2-2.1 5-3 5zm1.7-7H10.3a12.7 12.7 0 0 1-1.2-5h5.8a12.7 12.7 0 0 1-1.2 5zm.7 5.1a14.5 14.5 0 0 0 1.3-5.1h3.1a8 8 0 0 1-4.4 5.1z"/>
      </svg>`,
    signup: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm0 2.5L17.5 8H14zM8 12h8v1.5H8zm0 3.5h8V17H8zm0-7h4V10H8z"/>
      </svg>`,
    courses: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 1 9l11 6 9-4.9V17h2V9zm0 13.2L4.2 12 3 12.7 12 18l9-5.3-.9-.6z"/>
      </svg>`,
    car: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 11 6.5 6.5A2 2 0 0 1 8.4 5.2h7.2a2 2 0 0 1 1.9 1.3L19 11h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1.1a2.5 2.5 0 0 1-4.8 0H9.9a2.5 2.5 0 0 1-4.8 0H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm2.2-3.5L6.4 11h11.2l-1-3.2a.5.5 0 0 0-.5-.3H7.7a.5.5 0 0 0-.5.3zM7.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
      </svg>`,
    robot: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a1 1 0 0 1 1 1v1.1A7 7 0 0 1 19 11v5a3 3 0 0 1-3 3h-1.2a2.5 2.5 0 0 1-4.6 0H9a3 3 0 0 1-3-3v-5a7 7 0 0 1 6-6.9V3a1 1 0 0 1 1-1zM9 11a1.2 1.2 0 1 0 0 2.4A1.2 1.2 0 0 0 9 11zm6 0a1.2 1.2 0 1 0 0 2.4A1.2 1.2 0 0 0 15 11zm-5.5 5h5a.8.8 0 0 0 0-1.6h-5a.8.8 0 0 0 0 1.6zM4.5 12.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm15 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"/>
      </svg>`,
    gear: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.4 13a7.7 7.7 0 0 0 .1-1 7.7 7.7 0 0 0-.1-1l2-1.6a.5.5 0 0 0 .1-.6l-1.9-3.3a.5.5 0 0 0-.6-.2l-2.4 1a7.3 7.3 0 0 0-1.7-1l-.4-2.5a.5.5 0 0 0-.5-.4h-3.8a.5.5 0 0 0-.5.4l-.4 2.5a7.3 7.3 0 0 0-1.7 1l-2.4-1a.5.5 0 0 0-.6.2L2.4 8.8a.5.5 0 0 0 .1.6l2 1.6a7.7 7.7 0 0 0-.1 1 7.7 7.7 0 0 0 .1 1l-2 1.6a.5.5 0 0 0-.1.6l1.9 3.3a.5.5 0 0 0 .6.2l2.4-1a7.3 7.3 0 0 0 1.7 1l.4 2.5a.5.5 0 0 0 .5.4h3.8a.5.5 0 0 0 .5-.4l.4-2.5a7.3 7.3 0 0 0 1.7-1l2.4 1a.5.5 0 0 0 .6-.2l1.9-3.3a.5.5 0 0 0-.1-.6zM12 15.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5z"/>
      </svg>`,
  };

  /* —— Profile —— */
  function renderProfile() {
    const p = data.profile;
    const logo = document.getElementById("profile-logo");
    logo.src = p.logo;
    logo.alt = p.brandName + " logo";
    document.getElementById("profile-brand").textContent = p.brandName;
    document.getElementById("profile-title").textContent = p.title;
    document.getElementById("profile-handle").textContent = p.handle;
    document.getElementById("profile-tagline").textContent = p.tagline;
    document.getElementById("profile-desc").textContent = p.description;
    document.title = p.brandName + " · Link in Bio";
  }

  /* —— Announcement marquee —— */
  function renderAnnounce() {
    const box = document.getElementById("announce");
    const track = document.getElementById("announce-track");
    const a = data.announce;
    if (!box || !track || !a || !a.text) {
      if (box) box.hidden = true;
      return;
    }

    const text = a.text;
    // Two identical halves for seamless loop (CSS shifts -50%)
    const segment =
      '<span class="announce__item">' +
      escapeHtml(text) +
      '</span><span class="announce__sep" aria-hidden="true">　✦　</span>';
    track.innerHTML =
      '<span class="announce__group">' +
      segment +
      segment +
      "</span>" +
      '<span class="announce__group">' +
      segment +
      segment +
      "</span>";
  }

  /* —— Social circles —— */
  function renderSocials() {
    const row = document.getElementById("socials");
    if (!row) return;
    row.innerHTML = "";

    (data.socials || []).forEach(function (social) {
      const a = document.createElement("a");
      a.className = "social-btn";
      a.href = social.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", social.label);

      const img = document.createElement("img");
      img.src = social.image;
      img.alt = "";
      img.decoding = "async";
      a.appendChild(img);

      row.appendChild(a);
    });
  }

  /* —— Course cards —— */
  function cityChip(name) {
    const style = cityStyle(name);
    return (
      '<span class="course-card__city" style="--city:' +
      style.color +
      '">' +
      escapeHtml(name) +
      "</span>"
    );
  }

  function renderCourses() {
    const intro = data.coursesIntro || {};
    const titleEl = document.getElementById("courses-title");
    const subEl = document.getElementById("courses-subtitle");
    if (titleEl) titleEl.textContent = intro.title || "";
    if (subEl) {
      subEl.textContent = intro.subtitle || "";
      subEl.hidden = !intro.subtitle;
    }

    const list = document.getElementById("courses-list");
    if (!list) return;
    list.innerHTML = "";

    (data.courses || []).forEach(function (course) {
      const article = document.createElement("article");
      article.className = "course-card";

      const schedules = (course.schedules || [])
        .map(function (row) {
          const cities = (row.cities || []).map(cityChip).join("");
          return (
            '<div class="course-card__row">' +
            '<span class="course-card__dates">' +
            escapeHtml(row.dates) +
            "</span>" +
            '<span class="course-card__cities">' +
            cities +
            "</span>" +
            "</div>"
          );
        })
        .join("");

      article.innerHTML =
        '<div class="course-card__top">' +
        '<span class="course-card__icon course-card__icon--' +
        escapeHtml(course.id || "") +
        '" style="background:' +
        (course.iconBg || "#fff3d6") +
        '"><span class="course-card__emoji">' +
        (course.emoji || "") +
        "</span></span>" +
        '<div class="course-card__head">' +
        '<h3 class="course-card__name">' +
        escapeHtml(course.title) +
        "</h3>" +
        '<p class="course-card__desc">' +
        escapeHtml(course.description || "") +
        "</p>" +
        "</div>" +
        "</div>" +
        '<div class="course-card__schedules">' +
        schedules +
        "</div>" +
        '<a class="course-card__cta" href="' +
        escapeHtml(course.url) +
        '" target="_blank" rel="noopener noreferrer">' +
        escapeHtml(course.cta || "報名") +
        " ›</a>";

      list.appendChild(article);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function cityStyle(city) {
    const cities = data.cities || {};
    return (
      cities[city] || {
        color: "#cfcfcf",
        textColor: "#333333",
      }
    );
  }

  function renderConsult() {
    const box = document.getElementById("consult");
    const c = data.consult;
    if (!box || !c) {
      if (box) box.hidden = true;
      return;
    }
    document.getElementById("consult-title").textContent = c.title || "";
    document.getElementById("consult-subtitle").textContent = c.subtitle || "";
    box.href = c.url || "#";
  }

  function renderWhy() {
    const box = document.getElementById("why");
    const titleEl = document.getElementById("why-title");
    const listEl = document.getElementById("why-list");
    const w = data.why;
    if (!box || !w) {
      if (box) box.hidden = true;
      return;
    }
    titleEl.textContent = w.title || "";
    listEl.innerHTML = "";
    (w.points || []).forEach(function (point) {
      const li = document.createElement("li");
      li.className = "why__item";
      li.innerHTML =
        '<span class="why__check" aria-hidden="true">✔</span>' +
        "<span>" +
        escapeHtml(point) +
        "</span>";
      listEl.appendChild(li);
    });
  }

  renderProfile();
  renderSocials();
  renderAnnounce();
  renderCourses();
  renderConsult();
  renderWhy();
})();
