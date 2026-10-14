const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  const errors = [], bad = [];
  page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });
  page.on('response', r => { if (r.status() >= 400) bad.push(r.status() + ' ' + r.url()); });

  await page.goto('http://localhost:4190/arquimedes/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);

  const info = await page.evaluate(() => {
    const overflow = [];
    document.querySelectorAll('*').forEach(el => { const r = el.getBoundingClientRect(); if (r.width > window.innerWidth + 2) overflow.push(el.className || el.tagName); });
    const secs = [...document.querySelectorAll('main > section')].map(s => ({ id: s.id || '(sem id)', h: Math.round(s.getBoundingClientRect().height) }));
    return {
      lang: document.documentElement.lang,
      title: document.title,
      h1: document.querySelector('h1').innerText.replace(/\s+/g, ' '),
      h2s: [...document.querySelectorAll('h2')].map(h => h.innerText.replace(/\s+/g,' ')),
      agentes: document.querySelectorAll('.acard').length,
      recursos: document.querySelectorAll('.rcard').length,
      etapas: document.querySelectorAll('.step').length,
      perguntas: document.querySelectorAll('.faq details').length,
      secs,
      overflow: [...new Set(overflow)].slice(0, 8),
      overflowX: document.documentElement.scrollWidth > window.innerWidth + 2,
      docH: document.body.scrollHeight,
      // inglês residual em texto visível
      englishLeftovers: (document.body.innerText.match(/\b(the|your|with|from|that|this|work|agents?|build)\b/gi) || []).slice(0, 10),
    };
  });

  // contraste do acento sobre o fundo
  const cores = await page.evaluate(() => {
    const g = (sel, p) => { const el = document.querySelector(sel); return el ? getComputedStyle(el)[p] : null; };
    return { bodyBg: getComputedStyle(document.body).backgroundColor, h1: g('h1','color'), accent: g('.btn-primary','backgroundColor'), accentText: g('.btn-primary','color') };
  });

  await page.screenshot({ path: 'C:/Users/Correta Engenharia/AppData/Local/Temp/arq-hero.png' });
  await page.screenshot({ path: 'C:/Users/Correta Engenharia/AppData/Local/Temp/arq-full-dark.png', fullPage: true });

  // tema claro
  await page.click('button[aria-label="Alternar tema claro e escuro"]');
  await page.waitForTimeout(900);
  const claro = await page.evaluate(() => ({ tema: document.documentElement.dataset.theme, bg: getComputedStyle(document.body).backgroundColor }));
  await page.screenshot({ path: 'C:/Users/Correta Engenharia/AppData/Local/Temp/arq-full-light.png', fullPage: true });

  // mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(800);
  const mob = await page.evaluate(() => ({ overflowX: document.documentElement.scrollWidth > window.innerWidth + 2, sw: document.documentElement.scrollWidth }));
  await page.screenshot({ path: 'C:/Users/Correta Engenharia/AppData/Local/Temp/arq-mobile.png', fullPage: true });

  console.log(JSON.stringify({ info, cores, claro, mob, httpErrors: [...new Set(bad)], errors }, null, 1));
  await browser.close();
})();
