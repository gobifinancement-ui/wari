/* Wari Network : comportements du site (langue, version publiée, animations). */
(function () {
  'use strict';

  var CONFIG = window.WARI_CONFIG || {};
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Traductions : le français est écrit dans le HTML, l'anglais ici.
  ------------------------------------------------------------------ */
  var EN = {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.features': 'Features', 'nav.benefits': 'Benefits',
    'nav.roadmap': 'Roadmap', 'nav.faq': 'FAQ', 'nav.download': 'Download the app',
    'hero.chip': 'AI × Blockchain × Mining',
    'hero.title': 'Artificial Intelligence <span class="accent">powering mining</span>',
    'hero.lead': 'Wari Network puts artificial intelligence to work for simple mining that anyone can access: a 7-hour session from your Android phone, without draining its resources.',
    'hero.download': 'Download the app', 'hero.more': 'Learn more',
    'hero.proof1': 'Free', 'hero.proof2': 'Easy to use', 'hero.proof3': 'Open to everyone',
    'hero.release': 'Android 7.0 or later', 'common.version': 'Version',
    'stage.ai': 'AI boosts', 'stage.aiText': 'Up to 5 WARI per session',
    'stage.perf': '7 hours', 'stage.perfText': 'per mining session',
    'stage.secure': 'Secure network', 'stage.secureText': 'Validated server-side',
    'stage.world': 'Worldwide access', 'stage.worldText': '195 countries, 10 languages',
    'facts.countriesLabel': 'Countries', 'facts.countries': 'supported countries',
    'facts.languagesLabel': 'Languages', 'facts.languages': 'languages in the app',
    'facts.sessionLabel': 'Session', 'facts.session': 'per mining session',
    'facts.supplyLabel': 'Supply', 'facts.supplyValue': '1 billion', 'facts.supply': 'WARI: total supply',
    'about.chip': 'A global vision', 'about.title': 'Smart mining without borders',
    'about.lead': 'Wari Network opens mining to everyone through artificial intelligence. Wherever you are, you mine from your phone, with a visible history of every movement of value.',
    'about.f1': 'AI technology', 'about.f1t': '10 boost levels, from 3.50 to 5.00 WARI per session.',
    'about.f2': 'Secure and transparent', 'about.f2t': 'Every reward, bonus and withdrawal is recorded in your history.',
    'about.f3': 'Open to everyone', 'about.f3t': '195 countries and 10 languages: French, English, Spanish, Portuguese, German, Russian, Chinese, Hindi, Japanese, Vietnamese.',
    'about.f4': 'Light on your phone', 'about.f4t': 'Mining does not use heavy resources on your device.',
    'how.chip': 'Simple process', 'how.title': 'How does it work?', 'how.lead': 'Start mining in four steps.',
    'how.s1': 'Download the app', 'how.s1t': 'Install the official Wari Network APK from this website.',
    'how.s2': 'Create your account', 'how.s2t': 'Choose your country: the phone dial code is added for you. Referral code optional.',
    'how.s3': 'Start mining', 'how.s3t': 'Launch a 7-hour session and unlock boosts to earn more.',
    'how.s4': 'Earn WARI', 'how.s4t': 'Claim your WARI at the end of the session and follow them in your history.',
    'gen.chip': 'Why Wari Network?', 'gen.title': 'A new generation of mining',
    'gen.lead': 'Wari Network brings together artificial intelligence, clear economic rules and the blockchain networks used for USDT withdrawals (BEP20, TRC20, ERC20).',
    'gen.f1': 'AI-assisted mining', 'gen.f1t': 'Sessions capped at 5 WARI for controlled issuance.',
    'gen.f2': 'Simple, modern interface', 'gen.f2t': 'A smooth app designed for every Android phone.',
    'gen.f3': 'Global community', 'gen.f3t': 'Invite your friends: 10 WARI for you, 5 welcome WARI for them.',
    'gen.f4': 'Always improving', 'gen.f4t': 'Every new version installs directly from the app.',
    'rules.chip': 'Benefits', 'rules.title': 'Clear rules, enforced by the server',
    'rules.lead': 'Every reward is calculated server-side and recorded in your account history.',
    'rules.r1': 'Mining session', 'rules.r1t': 'Every 7 hours, depending on your boost level (1 to 10).',
    'rules.r2': 'Mining bonus', 'rules.r2t': 'For every 100 WARI earned through mining.',
    'rules.r3': 'Referral', 'rules.r3t': 'For you, for each friend who signs up with your code.',
    'rules.r4': 'Welcome bonus', 'rules.r4t': 'When you sign up with a valid referral code. No code, no bonus.',
    'rules.r5': 'Staking', 'rules.perYear': '/ year', 'rules.r5t': 'From 100 WARI, locked for 2 years.',
    'rules.r6': 'Withdrawal', 'rules.r6t': 'With an approved KYC and a trust score of at least 50.',
    'rules.note': 'Partner offers add extra WARI, once per offer and per account.',
    'road.chip': 'Roadmap', 'road.title': 'From 2026 to 2031', 'road.lead': 'The main milestones planned in the official whitepaper, version 1.1.',
    'road.now': 'In progress',
    'road.y2026': 'Official launch, first members, referrals and rewards.',
    'road.y2027': 'Target of 100,000 active users and gradual opening of USDT withdrawals for verified accounts.',
    'road.y2028': 'Target of one million users, smart contract preparation and first blockchain integrations.',
    'road.y2029': 'Gradual listing, Wari AI digital wallet and community governance.',
    'road.y2030': 'Wari AI payment card, merchant partnerships and a target of 5 million users.',
    'road.y2031': 'Mature ecosystem, target of 10 million users and more decentralised governance.',
    'token.title': 'WARI token distribution', 'token.supply': 'WARI: target total supply',
    'token.lead': 'The allocation puts the community at the heart of the project while funding the development and stability of the ecosystem.',
    'token.disclaimer': 'Founding goal: aim for 5 USD per WARI if the project reaches one million active users before the first half of 2028. This goal depends on adoption, regulation and market conditions; it is neither a promise of returns nor a price guarantee.',
    'token.a1': 'Community participation and daily rewards', 'token.a2': 'Staking and yields',
    'token.a3': 'Strategic reserve and stabilisation', 'token.a4': 'Development, marketing and partnerships',
    'token.a5': 'Market liquidity and listing support',
    'paper.title': 'Official whitepaper', 'paper.short': 'Whitepaper',
    'paper.lead': 'Vision, economic rules, security and the complete roadmap. Version 1.1, 2026 edition, available in 10 languages.',
    'cta.chip': 'Join us now', 'cta.title': 'Be part of the revolution',
    'cta.lead': 'Download the Wari Network app now and start mining with artificial intelligence.',
    'cta.download': 'Download the app', 'cta.android': 'Android 7.0 or later', 'cta.free': 'Free',
    'install.s1': 'Download the APK', 'install.s1t': 'Only use this official website: the app is not distributed on the Play Store.',
    'install.s2': 'Allow the installation', 'install.s2t': 'Open the file, then accept “Allow from this source” if Android asks.',
    'install.s3': 'Stay up to date', 'install.s3t': 'New versions are announced in the app and install in one tap.',
    'install.checksum': 'File SHA-256 fingerprint:',
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'Is Wari Network free?',
    'faq.a1': 'Yes. Downloading, signing up and mining are free. Boost levels are unlocked by watching a rewarded ad, confirmed by the server.',
    'faq.q2': 'How are rewards generated?',
    'faq.a2': 'You start a 7-hour mining session. Depending on your boost level (1 to 10), it earns 3.50 to 5.00 WARI, which you claim at the end of the session. A session never exceeds 5.00 WARI.',
    'faq.q3': 'Can I withdraw my WARI?',
    'faq.a3': 'Withdrawals are made in USDT. Every 100 WARI earned through mining credits 10 USDT to your balance. A withdrawal requires at least 10 USDT, an approved KYC and a trust score of at least 50, on the BEP20, TRC20 or ERC20 networks.',
    'faq.q4': 'Is the app secure?',
    'faq.a4': 'Your sign-in tokens are kept in the phone’s protected storage, financial operations run as atomic server-side transactions, and KYC documents are stored privately, accessible only to authorised administrators.',
    'faq.q5': 'Is a referral code required?',
    'faq.a5': 'No. You can sign up without a code. With a valid code you receive 5 welcome WARI and your referrer receives 10 WARI. Without a code, no sign-up bonus is granted.',
    'faq.q6': 'Why is the app not on the Play Store?',
    'faq.a6': 'Wari Network is distributed directly from this website. The app checks for new versions itself, downloads the update and verifies the file before starting the installation.',
    'faq.q7': 'What is a WARI worth?',
    'faq.a7': 'WARI is a digital unit tied to participation in the ecosystem. The 5 USD per WARI goal depends on real adoption and market conditions: it is not a guarantee.',
    'help.title': 'Still have questions?', 'help.lead': 'Our team is here to help.',
    'help.cta': 'Contact us', 'help.fallback': 'Follow the official announcements directly in the app.',
    'footer.tagline': 'AI powering mining. Official Android app.',
    'footer.links': 'Useful links', 'footer.resources': 'Resources', 'footer.install': 'Install the app',
    'footer.follow': 'Follow us', 'footer.app': 'App', 'footer.news': 'Stay informed', 'footer.newsLead': 'Get our latest news.',
    'footer.emailLabel': 'Your email', 'footer.rights': 'All rights reserved.',
    'footer.terms': 'Terms of use', 'footer.privacy': 'Privacy policy',
  };
  var MESSAGES = {
    fr: { ok: 'Merci, vous êtes inscrit.', invalid: 'Saisissez une adresse e-mail valide.', error: 'Service indisponible. Réessayez plus tard.', mb: 'Mo' },
    en: { ok: 'Thank you, you are subscribed.', invalid: 'Enter a valid email address.', error: 'Service unavailable. Please try again later.', mb: 'MB' },
  };

  var FR = {};
  var currentLang = 'fr';
  var release = null;

  function storage(action, key, value) {
    try {
      if (action === 'get') return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) { /* stockage indisponible : la page fonctionne sans */ }
    return null;
  }

  function translate(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!(key in FR)) FR[key] = el.textContent;
      el.textContent = lang === 'en' && EN[key] ? EN[key] : FR[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (!(key in FR)) FR[key] = el.innerHTML;
      el.innerHTML = lang === 'en' && EN[key] ? EN[key] : FR[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = 'placeholder:' + el.getAttribute('data-i18n-placeholder');
      if (!(key in FR)) FR[key] = el.getAttribute('placeholder');
      el.setAttribute('placeholder', lang === 'en' ? EN[el.getAttribute('data-i18n-placeholder')] : FR[key]);
    });
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });
    document.querySelectorAll('#paper-langs a').forEach(function (a) {
      a.classList.toggle('is-current', a.getAttribute('hreflang') === lang);
    });
    document.querySelectorAll('.js-paper-link').forEach(function (a) {
      a.setAttribute('href', 'docs/wari_whitepaper_' + lang + '.pdf');
    });
    renderRelease();
  }

  function initLanguage() {
    var saved = storage('get', 'wari-lang');
    var browser = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    var lang = saved === 'fr' || saved === 'en' ? saved : (browser === 'fr' ? 'fr' : (browser === 'en' ? 'en' : 'fr'));
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var chosen = btn.getAttribute('data-lang');
        storage('set', 'wari-lang', chosen);
        translate(chosen);
      });
    });
    translate(lang);
  }

  /* ------------------------------------------------------------------
     Version publiée (version.json, mis à jour par le script de publication)
  ------------------------------------------------------------------ */
  function renderRelease() {
    if (!release) return;
    var android = release.android || {};
    var base = new URL('version.json', window.location.href);
    if (android.apk_url) {
      var apk = new URL(android.apk_url, base).href;
      document.querySelectorAll('.js-download').forEach(function (a) { a.setAttribute('href', apk); });
    }
    if (android.version_name) {
      document.querySelectorAll('.js-version').forEach(function (el) { el.textContent = android.version_name; });
    }
    if (android.size_bytes) {
      var mb = (android.size_bytes / 1048576).toFixed(1);
      if (currentLang === 'fr') mb = mb.replace('.', ',');
      document.querySelectorAll('.js-size').forEach(function (el) { el.textContent = ' · ' + mb + ' ' + MESSAGES[currentLang].mb; });
    }
    if (android.sha256) {
      document.querySelectorAll('.js-sha').forEach(function (el) { el.textContent = android.sha256; });
      document.querySelectorAll('.js-checksum').forEach(function (el) { el.hidden = false; });
    }
  }

  function loadRelease() {
    if (!window.fetch) return;
    fetch('version.json', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) { if (data) { release = data; renderRelease(); } })
      .catch(function () { /* lien par défaut conservé */ });
  }

  /* ------------------------------------------------------------------
     Navigation
  ------------------------------------------------------------------ */
  function initNav() {
    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.menu-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = !header.classList.contains('menu-open');
        header.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-expanded', String(open));
      });
      document.querySelectorAll('.nav-links a').forEach(function (a) {
        a.addEventListener('click', function () {
          header.classList.remove('menu-open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
    if (!('IntersectionObserver' in window)) return;
    var links = {};
    document.querySelectorAll('.nav-links a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || !links[entry.target.id]) return;
        Object.keys(links).forEach(function (id) { links[id].removeAttribute('aria-current'); });
        links[entry.target.id].setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ------------------------------------------------------------------
     Contact, réseaux sociaux et lettre d'information (selon config.js)
  ------------------------------------------------------------------ */
  var SOCIAL_ICONS = {
    telegram: '<path d="M21.4 4.1 2.8 11.3c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.5c.2.6.4.8.9.8.4 0 .6-.2.9-.4l2.3-2.2 4.7 3.4c.9.5 1.5.2 1.7-.8l3.1-14.5c.3-1.3-.5-1.8-1.3-1.5zM9.4 14.6l-.3 3.8-1.4-4.5 10.2-6.4c.5-.3.9-.1.5.3z"/>',
    facebook: '<path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v7h4v-7h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z"/>',
    x: '<path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.3l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/>',
    youtube: '<path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12a31 31 0 0 0 .4 3.8 3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.4-1.2.4-3.8.4-3.8s0-2.6-.4-3.8zM10 15V9l5.2 3z"/>',
  };
  var SOCIAL_NAMES = { telegram: 'Telegram', facebook: 'Facebook', x: 'X', youtube: 'YouTube' };

  function initConfig() {
    var email = (CONFIG.contactEmail || '').trim();
    if (email) {
      document.querySelectorAll('.js-contact-email').forEach(function (el) { el.textContent = email; el.hidden = false; });
      document.querySelectorAll('.js-contact').forEach(function (a) { a.href = 'mailto:' + email; a.hidden = false; });
      document.querySelectorAll('.js-contact-fallback').forEach(function (el) { el.hidden = true; });
    }

    var social = CONFIG.social || {};
    var container = document.querySelector('.js-socials');
    var count = 0;
    Object.keys(SOCIAL_ICONS).forEach(function (name) {
      var url = (social[name] || '').trim();
      if (!url || !container) return;
      var a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.setAttribute('aria-label', SOCIAL_NAMES[name]);
      a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + SOCIAL_ICONS[name] + '</svg>';
      container.appendChild(a);
      count += 1;
    });
    if (count) document.querySelectorAll('.js-social-block').forEach(function (el) { el.hidden = false; });

    var api = (CONFIG.apiBaseUrl || '').replace(/\/+$/, '');
    var form = document.querySelector('.js-newsletter');
    if (!api || !form) return;
    form.hidden = false;
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var value = input.value.trim();
      status.className = 'form-status';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
        status.textContent = MESSAGES[currentLang].invalid;
        status.classList.add('err');
        return;
      }
      fetch(api + '/site/newsletter/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value, language: currentLang }),
      }).then(function (r) {
        if (r.status === 200 || r.status === 201) {
          status.textContent = MESSAGES[currentLang].ok;
          status.classList.add('ok');
          form.reset();
        } else if (r.status === 400) {
          status.textContent = MESSAGES[currentLang].invalid;
          status.classList.add('err');
        } else {
          throw new Error('HTTP ' + r.status);
        }
      }).catch(function () {
        status.textContent = MESSAGES[currentLang].error;
        status.classList.add('err');
      });
    });
  }

  /* ------------------------------------------------------------------
     Toiles animées (braises, relief, globe)
  ------------------------------------------------------------------ */
  function setupCanvas(canvas, draw) {
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var state = { w: 0, h: 0, dpr: 1, visible: true, t0: performance.now() };
    function resize() {
      var rect = canvas.getBoundingClientRect();
      state.dpr = Math.min(window.devicePixelRatio || 1, 2);
      state.w = Math.max(1, rect.width);
      state.h = Math.max(1, rect.height);
      canvas.width = Math.round(state.w * state.dpr);
      canvas.height = Math.round(state.h * state.dpr);
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
      if (draw.resize) draw.resize(state);
      if (reduceMotion) draw.frame(ctx, state, 0);
    }
    resize();
    window.addEventListener('resize', resize);
    if (reduceMotion) return;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        state.visible = entries[0].isIntersecting;
      }).observe(canvas);
    }
    function loop(now) {
      if (state.visible && !document.hidden) {
        // L'horodatage de la premiere image peut preceder t0 : le temps reste positif.
        draw.frame(ctx, state, Math.max(0, now - state.t0) / 1000);
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  // Générateur pseudo-aléatoire déterministe : le relief reste identique d'une visite à l'autre.
  function seeded(seed) {
    return function () {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
  }

  function embers(count, area) {
    var rand = seeded(7);
    var list = [];
    for (var i = 0; i < count; i++) {
      list.push({ x: rand(), y: rand(), r: 0.6 + rand() * 1.8, speed: 0.02 + rand() * 0.06, drift: (rand() - 0.5) * 0.04, phase: rand() * Math.PI * 2, area: area });
    }
    return list;
  }

  function drawEmbers(ctx, state, t, list) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    list.forEach(function (p) {
      var life = (p.y + t * p.speed) % 1;
      var x = (p.x + Math.sin(t * 0.6 + p.phase) * 0.01 + p.drift * life) * state.w;
      var y = state.h * (1 - life * p.area);
      var alpha = Math.sin(life * Math.PI) * (0.55 + 0.45 * Math.sin(t * 3 + p.phase));
      var r = p.r * (1 + 2.5 * (1 - life));
      var g = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
      g.addColorStop(0, 'rgba(255, 210, 120,' + (0.9 * alpha).toFixed(3) + ')');
      g.addColorStop(0.4, 'rgba(255, 140, 20,' + (0.45 * alpha).toFixed(3) + ')');
      g.addColorStop(1, 'rgba(255, 90, 0, 0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r * 3, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
  }

  function heroScene() {
    var ridges = [];
    var particles = embers(70, 0.95);
    var rand = seeded(42);
    var layers = [
      { base: 0.80, amp: 0.10, color: '#1a120d', rim: 0.18 },
      { base: 0.88, amp: 0.09, color: '#120c09', rim: 0.35 },
      { base: 0.95, amp: 0.07, color: '#0b0807', rim: 0.6 },
    ];
    layers.forEach(function (layer) {
      var pts = [];
      var n = 48;
      var offsets = [rand() * 10, rand() * 10, rand() * 10];
      for (var i = 0; i <= n; i++) {
        var u = i / n;
        var v = 0.5 * Math.sin(u * 7 + offsets[0]) + 0.3 * Math.sin(u * 17 + offsets[1]) + 0.2 * Math.sin(u * 31 + offsets[2]);
        pts.push([u, layer.base - layer.amp * (0.5 + 0.5 * v) - (rand() * 0.015)]);
      }
      ridges.push({ layer: layer, pts: pts });
    });
    return {
      frame: function (ctx, state, t) {
        ctx.clearRect(0, 0, state.w, state.h);
        drawEmbers(ctx, state, t, particles);
        ridges.forEach(function (ridge) {
          ctx.beginPath();
          ctx.moveTo(0, state.h);
          ridge.pts.forEach(function (p) { ctx.lineTo(p[0] * state.w, p[1] * state.h); });
          ctx.lineTo(state.w, state.h);
          ctx.closePath();
          ctx.fillStyle = ridge.layer.color;
          ctx.fill();
          // Liseré lumineux sur la crête, plus intense près du socle (à droite).
          var grad = ctx.createLinearGradient(0, 0, state.w, 0);
          grad.addColorStop(0, 'rgba(255, 120, 20, 0.05)');
          grad.addColorStop(0.7, 'rgba(255, 150, 40,' + ridge.layer.rim + ')');
          grad.addColorStop(1, 'rgba(255, 120, 20, 0.12)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ridge.pts.forEach(function (p, i) {
            var x = p[0] * state.w, y = p[1] * state.h;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
          });
          ctx.stroke();
        });
      },
    };
  }

  function ctaScene() {
    var particles = embers(40, 1);
    return { frame: function (ctx, state, t) { ctx.clearRect(0, 0, state.w, state.h); drawEmbers(ctx, state, t, particles); } };
  }

  function globeScene() {
    var cells = [];
    var rows = LANDMASK.data.length;
    var cols = LANDMASK.cols;
    LANDMASK.data.forEach(function (hex, r) {
      var lat = 90 - (r + 0.5) * 180 / rows;
      for (var c = 0; c < cols; c++) {
        var nibble = parseInt(hex.charAt(Math.floor(c / 4)), 16);
        if (nibble & (8 >> (c % 4))) {
          var lon = -180 + (c + 0.5) * 360 / cols;
          cells.push([lat * Math.PI / 180, lon * Math.PI / 180]);
        }
      }
    });
    var deg = Math.PI / 180;
    var CITY = {
      lome: [6.13, 1.22], abidjan: [5.36, -4.0], dakar: [14.7, -17.4], lagos: [6.5, 3.4],
      kinshasa: [-4.3, 15.3], nairobi: [-1.3, 36.8], joburg: [-26.2, 28.0], cairo: [30.0, 31.2],
      paris: [48.9, 2.35], dubai: [25.2, 55.3], mumbai: [19.1, 72.9], saopaulo: [-23.5, -46.6],
      newyork: [40.7, -74.0], hanoi: [21.0, 105.8],
    };
    var ROUTES = [
      ['lome', 'paris'], ['lome', 'nairobi'], ['lome', 'saopaulo'], ['lome', 'dubai'],
      ['dakar', 'newyork'], ['lagos', 'joburg'], ['cairo', 'mumbai'], ['dubai', 'hanoi'],
      ['kinshasa', 'cairo'], ['abidjan', 'dakar'],
    ];
    var logo = new Image();
    logo.src = 'assets/img/logo-128.webp';

    function vec(lat, lon) {
      return [Math.cos(lat) * Math.cos(lon), Math.cos(lat) * Math.sin(lon), Math.sin(lat)];
    }
    function project(v, lon0, lat0) {
      // Rotation autour de l'axe polaire puis inclinaison.
      var cl = Math.cos(-lon0), sl = Math.sin(-lon0);
      var x = v[0] * cl - v[1] * sl, y = v[0] * sl + v[1] * cl, z = v[2];
      var ct = Math.cos(lat0), st = Math.sin(lat0);
      var depth = x * ct + z * st;
      var up = -x * st + z * ct;
      return [y, up, depth];
    }
    function slerp(a, b, t) {
      var dot = Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
      var om = Math.acos(dot), so = Math.sin(om);
      if (so < 1e-6) return a;
      var k1 = Math.sin((1 - t) * om) / so, k2 = Math.sin(t * om) / so;
      return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
    }

    return {
      frame: function (ctx, state, t) {
        var w = state.w, h = state.h;
        var R = Math.min(w, h) * 0.38;
        var cx = w / 2, cy = h / 2;
        var lon0 = (12 + 48 * Math.sin(t * 0.07)) * deg;
        var lat0 = 14 * deg;
        ctx.clearRect(0, 0, w, h);

        // Halo et sphère.
        // Le halo s'arrete avant le bord du canevas pour ne jamais dessiner de carre.
        var halo = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, Math.min(w, h) * 0.5 - 1);
        halo.addColorStop(0, 'rgba(255, 140, 20, 0.35)');
        halo.addColorStop(1, 'rgba(255, 140, 20, 0)');
        ctx.fillStyle = halo;
        ctx.fillRect(0, 0, w, h);
        var sphere = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
        sphere.addColorStop(0, '#2a1d14');
        sphere.addColorStop(0.7, '#120d0a');
        sphere.addColorStop(1, '#1c120b');
        ctx.fillStyle = sphere;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 170, 60, 0.55)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Graticule discret.
        ctx.strokeStyle = 'rgba(255, 160, 50, 0.08)';
        ctx.lineWidth = 0.8;
        for (var la = -60; la <= 60; la += 30) {
          ctx.beginPath();
          var started = false;
          for (var lo = -180; lo <= 180; lo += 6) {
            var p = project(vec(la * deg, lo * deg), lon0, lat0);
            if (p[2] < 0) { started = false; continue; }
            var px = cx + p[0] * R, py = cy - p[1] * R;
            if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py);
          }
          ctx.stroke();
        }

        // Continents en points.
        for (var i = 0; i < cells.length; i++) {
          var q = project(vec(cells[i][0], cells[i][1]), lon0, lat0);
          if (q[2] <= 0.02) continue;
          var size = 0.6 + 1.3 * q[2];
          ctx.fillStyle = 'rgba(255, ' + Math.round(130 + 60 * q[2]) + ', 40, ' + (0.18 + 0.72 * q[2]).toFixed(3) + ')';
          ctx.fillRect(cx + q[0] * R - size / 2, cy - q[1] * R - size / 2, size, size);
        }

        // Liaisons entre villes, avec une étincelle qui voyage.
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ROUTES.forEach(function (route, index) {
          var a = vec(CITY[route[0]][0] * deg, CITY[route[0]][1] * deg);
          var b = vec(CITY[route[1]][0] * deg, CITY[route[1]][1] * deg);
          var pts = [];
          for (var s = 0; s <= 32; s++) {
            var u = s / 32;
            var m = slerp(a, b, u);
            var lift = 1 + 0.18 * Math.sin(Math.PI * u);
            var pp = project(m, lon0, lat0);
            pts.push([cx + pp[0] * R * lift, cy - pp[1] * R * lift, pp[2]]);
          }
          ctx.strokeStyle = 'rgba(255, 170, 60, 0.45)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          var on = false;
          pts.forEach(function (pt) {
            if (pt[2] < -0.05) { on = false; return; }
            if (!on) { ctx.moveTo(pt[0], pt[1]); on = true; } else ctx.lineTo(pt[0], pt[1]);
          });
          ctx.stroke();
          var k = Math.min(32, Math.floor(((t * 0.25 + index * 0.137) % 1) * 32));
          var spark = pts[k];
          if (spark[2] > -0.05) {
            var g = ctx.createRadialGradient(spark[0], spark[1], 0, spark[0], spark[1], 6);
            g.addColorStop(0, 'rgba(255, 230, 160, 0.95)');
            g.addColorStop(1, 'rgba(255, 140, 20, 0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(spark[0], spark[1], 6, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        Object.keys(CITY).forEach(function (name) {
          var c = project(vec(CITY[name][0] * deg, CITY[name][1] * deg), lon0, lat0);
          if (c[2] <= 0) return;
          var x = cx + c[0] * R, y = cy - c[1] * R;
          var g = ctx.createRadialGradient(x, y, 0, x, y, 7);
          g.addColorStop(0, 'rgba(255, 220, 140, 0.95)');
          g.addColorStop(1, 'rgba(255, 140, 20, 0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, 7, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();

        // Repère Wari Network.
        var hub = project(vec(CITY.lome[0] * deg, CITY.lome[1] * deg), lon0, lat0);
        if (hub[2] > 0.15 && logo.complete && logo.naturalWidth) {
          var hx = cx + hub[0] * R, hy = cy - hub[1] * R;
          var s2 = Math.max(26, R * 0.16);
          ctx.globalAlpha = Math.min(1, (hub[2] - 0.15) * 4);
          ctx.strokeStyle = 'rgba(255, 190, 80, 0.8)';
          ctx.beginPath();
          ctx.moveTo(hx, hy);
          ctx.lineTo(hx, hy - s2 * 0.55);
          ctx.stroke();
          ctx.drawImage(logo, hx - s2 / 2, hy - s2 * 1.55, s2, s2);
          ctx.globalAlpha = 1;
        }
      },
    };
  }

  var LANDMASK = window.WARI_LANDMASK || { cols: 120, data: [] };

  document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initNav();
    initConfig();
    loadRelease();
    setupCanvas(document.getElementById('hero-canvas'), heroScene());
    setupCanvas(document.getElementById('cta-canvas'), ctaScene());
    if (LANDMASK.data.length) setupCanvas(document.getElementById('globe-canvas'), globeScene());
  });
})();
