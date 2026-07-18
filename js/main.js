document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => observer.observe(el));

  // Sticky warning after scroll
  const sticky = document.querySelector('.sticky-warning');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      sticky.classList.add('show');
    } else {
      sticky.classList.remove('show');
    }
  });

  // Lightbox for evidence images
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  document.querySelectorAll('[data-lightbox]').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  // Auto-scroll chat windows slowly on hover (showcase effect)
  document.querySelectorAll('.wa-chat').forEach((chat) => {
    chat.addEventListener('mouseenter', () => {
      const scrollHeight = chat.scrollHeight - chat.clientHeight;
      if (scrollHeight <= 0) return;
      let pos = 0;
      const step = () => {
        pos += 0.5;
        if (pos >= scrollHeight) pos = 0;
        chat.scrollTop = pos;
        chat._animFrame = requestAnimationFrame(step);
      };
      chat._animFrame = requestAnimationFrame(step);
    });
    chat.addEventListener('mouseleave', () => {
      cancelAnimationFrame(chat._animFrame);
    });
  });

  // Dynamic share URLs
  const pageUrl = encodeURIComponent(window.location.href.split('#')[0]);
  document.querySelectorAll('[data-share-wa]').forEach((el) => {
    el.href = `https://wa.me/?text=${encodeURIComponent('WARNING: Do NOT book Ajaykumar Photography - documented fraud with full evidence. See here: ')}${pageUrl}`;
  });
  document.querySelectorAll('[data-share-x]').forEach((el) => {
    el.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent('Do NOT book Ajaykumar Photography (Ajay Kumar E) - documented fraud: ₹6,500 taken, incomplete delivery, blocked after payment.')}&url=${pageUrl}`;
  });

  // Copy phone number
  document.querySelectorAll('[data-copy]').forEach((el) => {
    el.addEventListener('click', () => {
      navigator.clipboard.writeText(el.dataset.copy).then(() => {
        const orig = el.textContent;
        el.textContent = 'Copied!';
        setTimeout(() => { el.textContent = orig; }, 1500);
      });
    });
  });
});
