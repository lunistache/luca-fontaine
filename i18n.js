/* ============================================================
   Luca Fontaine — internationalization (EN · IT · FR · ES)
   English text in index.html is the fallback; these dictionaries
   override [data-i18n] (textContent) and [data-i18n-html] (innerHTML).
   ============================================================ */
(function () {
  "use strict";

  const I18N = {
    /* ---------------------------------------------------- English */
    en: {
      "meta.title": "Luca Fontaine — Actor",
      "nav.work": "Work",
      "nav.coaching": "Dialect Coaching",
      "nav.gallery": "Gallery",
      "nav.about": "About",
      "nav.contact": "Contact",
      "hero.eyebrow": "Actor · Juilliard MFA",
      "hero.tag": "French · Italian · American — moving between screen and stage on both sides of the Atlantic.",
      "hero.cta1": "Selected Work",
      "hero.cta2": "Get in touch",
      "work.eyebrow": "01 — Selected Work",
      "work.title": "Screen & Stage",
      "cat.film": "Film",
      "cat.tv": "Television",
      "cat.theatre": "Theatre",
      "role.supporting": "Supporting",
      "role.lead": "Lead",
      "role.supportinglead": "Supporting Lead",
      "role.writerlead": "Writer · Lead",
      "season2": "(Season 2)",
      "season4": "(Season 4)",
      "resumes.label": "Download résumé",
      "link.actEN": "Acting · English",
      "link.actFR": "Acting · French",
      "link.actIT": "Acting · Italian",
      "filmfeat.eyebrow": "Featured",
      "filmfeat.role": "Writer & Lead",
      "filmfeat.desc": "A short film written by and starring Luca Fontaine, directed by Mathery.",
      "filmfeat.watch": "Watch on YouTube",
      "break.quote": "“A native of three languages — at home in the silence between them.”",
      "coaching.eyebrow": "02 — Also",
      "coaching.title": "Dialect Coaching",
      "coaching.lede": "Accent precision and cross-cultural performance for award-winning actors across Broadway, film and television.",
      "coach.severance.meta": "Apple TV+ · dir. Ben Stiller",
      "coach.swansong.meta": "Apple TV+ · dir. Benjamin Cleary",
      "coach.camelot.meta": "Lincoln Center Theater · book by Aaron Sorkin",
      "coach.lifeofpi.meta": "Broadway / U.S. National Tour",
      "coach.lifeofpi.cast": "(Olivier Award winner)",
      "coach.fallenangels.meta": "Broadway · Roundabout Theatre Company",
      "coach.luckyones.meta": "Hulu · 20th Television",
      "coach.fletch.meta": "Feature · dir. Greg Mottola",
      "coach.betrayal.meta": "Broadway · dir. Jamie Lloyd",
      "coach.burnthis.meta": "Broadway · Hudson Theatre",
      "resumes.coachLabel": "Coaching résumé",
      "link.coachEN": "Coaching · English",
      "link.coachFR": "Coaching · French",
      "gallery.eyebrow": "03 — Gallery",
      "gallery.title": "Portraits",
      "about.eyebrow": "04 — About",
      "about.title": "Biography",
      "about.p1": "Luca Fontaine is a French–Italian–American actor trained at <strong>The Juilliard School</strong> (MFA, Group 51), the National Conservatoire of Dramatic Arts in Versailles and the Cours Simon in Paris. A native speaker of French, Italian and English — and fluent in Spanish and Portuguese — he moves fluidly between screen and stage on both sides of the Atlantic.",
      "about.p2": "Recent screen work includes Nathan Fielder's <em>The Rehearsal</em> (HBO), <em>Zorro</em> (Paramount+), Robert King's <em>EVIL</em> (CBS) and Oriol Paulo's <em>La Última Noche en Tremore</em> (Netflix), alongside films directed by Andrew Niccol and Luis Prieto. On stage he has toured internationally in Martha Clarke's <em>God's Fool</em> and performed with Exchange Theatre London and the National Youth Theatre of Great Britain.",
      "about.p3": "His honours include Juilliard's <strong>John Houseman Prize</strong>, the <strong>Career Advancement Fellowship</strong> and the <strong>Michael &amp; Suria Saint-Denis Prize</strong>. Beyond performance, Luca is a sought-after dialect coach to award-winning actors across Broadway, film and television.",
      "facts.languages": "Languages",
      "facts.languages.val": "French, Italian, English <em>(native)</em> · Spanish, Portuguese <em>(fluent)</em>",
      "facts.dialects": "Dialects",
      "facts.dialects.val": "US, UK & European accents",
      "facts.training": "Training",
      "facts.training.val": "The Juilliard School · CNSAD Versailles · Cours Simon · NYT (Great Britain)",
      "facts.skills": "Skills",
      "facts.skills.val": "Singing (tenor) · Guitar, drums, ukulele, harmonica · Stage combat · Salsa & ballroom · Driver's licence",
      "facts.height": "Height",
      "contact.eyebrow": "05 — Contact",
      "contact.title": "Representation & Enquiries",
      "contact.mgmt": "Management",
      "contact.direct": "Direct",
      "contact.profiles": "Profiles",
      "footer.meta": "Actor · Dialect Coach"
    },

    /* ---------------------------------------------------- Italiano */
    it: {
      "meta.title": "Luca Fontaine — Attore",
      "nav.work": "Lavori",
      "nav.coaching": "Coaching Dialettale",
      "nav.gallery": "Galleria",
      "nav.about": "Biografia",
      "nav.contact": "Contatti",
      "hero.eyebrow": "Attore · MFA Juilliard",
      "hero.tag": "Francese · Italiano · Americano — tra schermo e palcoscenico, su entrambe le sponde dell'Atlantico.",
      "hero.cta1": "Lavori scelti",
      "hero.cta2": "Contattami",
      "work.eyebrow": "01 — Lavori scelti",
      "work.title": "Schermo & Palcoscenico",
      "cat.film": "Cinema",
      "cat.tv": "Televisione",
      "cat.theatre": "Teatro",
      "role.supporting": "Non protagonista",
      "role.lead": "Protagonista",
      "role.supportinglead": "Co-protagonista",
      "role.writerlead": "Sceneggiatore · Protagonista",
      "season2": "(Stagione 2)",
      "season4": "(Stagione 4)",
      "resumes.label": "Scarica il curriculum",
      "link.actEN": "Recitazione · Inglese",
      "link.actFR": "Recitazione · Francese",
      "link.actIT": "Recitazione · Italiano",
      "filmfeat.eyebrow": "In evidenza",
      "filmfeat.role": "Sceneggiatore & Protagonista",
      "filmfeat.desc": "Un cortometraggio scritto e interpretato da Luca Fontaine, diretto da Mathery.",
      "filmfeat.watch": "Guarda su YouTube",
      "break.quote": "«Madrelingua di tre lingue — a suo agio nel silenzio tra l'una e l'altra.»",
      "coaching.eyebrow": "02 — Inoltre",
      "coaching.title": "Coaching Dialettale",
      "coaching.lede": "Precisione dell'accento e interpretazione interculturale per attori pluripremiati a Broadway, al cinema e in televisione.",
      "coach.severance.meta": "Apple TV+ · regia di Ben Stiller",
      "coach.swansong.meta": "Apple TV+ · regia di Benjamin Cleary",
      "coach.camelot.meta": "Lincoln Center Theater · libretto di Aaron Sorkin",
      "coach.lifeofpi.meta": "Broadway / Tournée nazionale USA",
      "coach.lifeofpi.cast": "(vincitore dell'Olivier Award)",
      "coach.fallenangels.meta": "Broadway · Roundabout Theatre Company",
      "coach.luckyones.meta": "Hulu · 20th Television",
      "coach.fletch.meta": "Lungometraggio · regia di Greg Mottola",
      "coach.betrayal.meta": "Broadway · regia di Jamie Lloyd",
      "coach.burnthis.meta": "Broadway · Hudson Theatre",
      "resumes.coachLabel": "Curriculum coaching",
      "link.coachEN": "Coaching · Inglese",
      "link.coachFR": "Coaching · Francese",
      "gallery.eyebrow": "03 — Galleria",
      "gallery.title": "Ritratti",
      "about.eyebrow": "04 — Biografia",
      "about.title": "Biografia",
      "about.p1": "Luca Fontaine è un attore franco-italo-americano formatosi alla <strong>Juilliard School</strong> (MFA, Gruppo 51), al Conservatorio Nazionale d'Arte Drammatica di Versailles e al Cours Simon di Parigi. Madrelingua francese, italiano e inglese — e fluente in spagnolo e portoghese — si muove con disinvoltura tra schermo e palcoscenico, su entrambe le sponde dell'Atlantico.",
      "about.p2": "Tra i lavori recenti sullo schermo: <em>The Rehearsal</em> di Nathan Fielder (HBO), <em>Zorro</em> (Paramount+), <em>EVIL</em> di Robert King (CBS) e <em>La Última Noche en Tremore</em> di Oriol Paulo (Netflix), oltre a film diretti da Andrew Niccol e Luis Prieto. A teatro è stato in tournée internazionale con <em>God's Fool</em> di Martha Clarke e ha recitato all'Exchange Theatre di Londra e al National Youth Theatre of Great Britain.",
      "about.p3": "Tra i suoi riconoscimenti, il <strong>John Houseman Prize</strong> della Juilliard, la <strong>Career Advancement Fellowship</strong> e il <strong>Michael &amp; Suria Saint-Denis Prize</strong>. Oltre alla recitazione, Luca è un ricercato dialect coach per attori pluripremiati a Broadway, al cinema e in televisione.",
      "facts.languages": "Lingue",
      "facts.languages.val": "Francese, italiano, inglese <em>(madrelingua)</em> · Spagnolo, portoghese <em>(fluente)</em>",
      "facts.dialects": "Accenti",
      "facts.dialects.val": "Accenti americani, britannici ed europei",
      "facts.training": "Formazione",
      "facts.training.val": "The Juilliard School · CNSAD Versailles · Cours Simon · NYT (Gran Bretagna)",
      "facts.skills": "Competenze",
      "facts.skills.val": "Canto (tenore) · Chitarra, batteria, ukulele, armonica · Combattimento scenico · Salsa e balli da sala · Patente di guida",
      "facts.height": "Altezza",
      "contact.eyebrow": "05 — Contatti",
      "contact.title": "Rappresentanza & Contatti",
      "contact.mgmt": "Management",
      "contact.direct": "Diretto",
      "contact.profiles": "Profili",
      "footer.meta": "Attore · Dialect Coach"
    },

    /* ---------------------------------------------------- Français */
    fr: {
      "meta.title": "Luca Fontaine — Comédien",
      "nav.work": "Parcours",
      "nav.coaching": "Coaching d'accent",
      "nav.gallery": "Galerie",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "hero.eyebrow": "Comédien · MFA Juilliard",
      "hero.tag": "Français · Italien · Américain — entre l'écran et la scène, des deux côtés de l'Atlantique.",
      "hero.cta1": "Travaux choisis",
      "hero.cta2": "Me contacter",
      "work.eyebrow": "01 — Travaux choisis",
      "work.title": "Écran & Scène",
      "cat.film": "Cinéma",
      "cat.tv": "Télévision",
      "cat.theatre": "Théâtre",
      "role.supporting": "Second rôle",
      "role.lead": "Premier rôle",
      "role.supportinglead": "Second rôle principal",
      "role.writerlead": "Scénariste · Premier rôle",
      "season2": "(Saison 2)",
      "season4": "(Saison 4)",
      "resumes.label": "Télécharger le CV",
      "link.actEN": "Jeu · Anglais",
      "link.actFR": "Jeu · Français",
      "link.actIT": "Jeu · Italien",
      "filmfeat.eyebrow": "À la une",
      "filmfeat.role": "Scénariste & Interprète principal",
      "filmfeat.desc": "Un court-métrage écrit et interprété par Luca Fontaine, réalisé par Mathery.",
      "filmfeat.watch": "Voir sur YouTube",
      "break.quote": "« Natif de trois langues — à l'aise dans le silence qui les sépare. »",
      "coaching.eyebrow": "02 — Également",
      "coaching.title": "Coaching d'accent",
      "coaching.lede": "Précision de l'accent et jeu interculturel pour des acteurs primés à Broadway, au cinéma et à la télévision.",
      "coach.severance.meta": "Apple TV+ · réal. Ben Stiller",
      "coach.swansong.meta": "Apple TV+ · réal. Benjamin Cleary",
      "coach.camelot.meta": "Lincoln Center Theater · livret d'Aaron Sorkin",
      "coach.lifeofpi.meta": "Broadway / Tournée nationale américaine",
      "coach.lifeofpi.cast": "(lauréat de l'Olivier Award)",
      "coach.fallenangels.meta": "Broadway · Roundabout Theatre Company",
      "coach.luckyones.meta": "Hulu · 20th Television",
      "coach.fletch.meta": "Long-métrage · réal. Greg Mottola",
      "coach.betrayal.meta": "Broadway · mise en scène Jamie Lloyd",
      "coach.burnthis.meta": "Broadway · Hudson Theatre",
      "resumes.coachLabel": "CV coaching",
      "link.coachEN": "Coaching · Anglais",
      "link.coachFR": "Coaching · Français",
      "gallery.eyebrow": "03 — Galerie",
      "gallery.title": "Portraits",
      "about.eyebrow": "04 — À propos",
      "about.title": "Biographie",
      "about.p1": "Luca Fontaine est un comédien franco-italo-américain formé à <strong>The Juilliard School</strong> (MFA, Groupe 51), au Conservatoire national d'art dramatique de Versailles et au Cours Simon à Paris. De langue maternelle française, italienne et anglaise — et parlant couramment l'espagnol et le portugais — il évolue avec aisance entre l'écran et la scène, des deux côtés de l'Atlantique.",
      "about.p2": "Parmi ses travaux récents à l'écran : <em>The Rehearsal</em> de Nathan Fielder (HBO), <em>Zorro</em> (Paramount+), <em>EVIL</em> de Robert King (CBS) et <em>La Última Noche en Tremore</em> d'Oriol Paulo (Netflix), ainsi que des films réalisés par Andrew Niccol et Luis Prieto. À la scène, il a été en tournée internationale dans <em>God's Fool</em> de Martha Clarke et a joué à l'Exchange Theatre de Londres et au National Youth Theatre of Great Britain.",
      "about.p3": "Parmi ses distinctions : le <strong>John Houseman Prize</strong> de la Juilliard, la <strong>Career Advancement Fellowship</strong> et le <strong>Michael &amp; Suria Saint-Denis Prize</strong>. Au-delà du jeu, Luca est un coach d'accent recherché par des acteurs primés à Broadway, au cinéma et à la télévision.",
      "facts.languages": "Langues",
      "facts.languages.val": "Français, italien, anglais <em>(langue maternelle)</em> · Espagnol, portugais <em>(courant)</em>",
      "facts.dialects": "Accents",
      "facts.dialects.val": "Accents américains, britanniques et européens",
      "facts.training": "Formation",
      "facts.training.val": "The Juilliard School · CNSAD Versailles · Cours Simon · NYT (Grande-Bretagne)",
      "facts.skills": "Compétences",
      "facts.skills.val": "Chant (ténor) · Guitare, batterie, ukulélé, harmonica · Combat scénique · Salsa & danses de salon · Permis de conduire",
      "facts.height": "Taille",
      "contact.eyebrow": "05 — Contact",
      "contact.title": "Représentation & Demandes",
      "contact.mgmt": "Management",
      "contact.direct": "Direct",
      "contact.profiles": "Profils",
      "footer.meta": "Comédien · Coach d'accent"
    },

    /* ---------------------------------------------------- Español */
    es: {
      "meta.title": "Luca Fontaine — Actor",
      "nav.work": "Trabajos",
      "nav.coaching": "Coaching de Dialectos",
      "nav.gallery": "Galería",
      "nav.about": "Acerca",
      "nav.contact": "Contacto",
      "hero.eyebrow": "Actor · MFA Juilliard",
      "hero.tag": "Francés · Italiano · Estadounidense — entre la pantalla y el escenario, a ambos lados del Atlántico.",
      "hero.cta1": "Trabajos seleccionados",
      "hero.cta2": "Contactar",
      "work.eyebrow": "01 — Trabajos seleccionados",
      "work.title": "Pantalla & Escenario",
      "cat.film": "Cine",
      "cat.tv": "Televisión",
      "cat.theatre": "Teatro",
      "role.supporting": "Reparto",
      "role.lead": "Protagonista",
      "role.supportinglead": "Co-protagonista",
      "role.writerlead": "Guionista · Protagonista",
      "season2": "(Temporada 2)",
      "season4": "(Temporada 4)",
      "resumes.label": "Descargar currículum",
      "link.actEN": "Interpretación · Inglés",
      "link.actFR": "Interpretación · Francés",
      "link.actIT": "Interpretación · Italiano",
      "filmfeat.eyebrow": "Destacado",
      "filmfeat.role": "Guionista & Protagonista",
      "filmfeat.desc": "Un cortometraje escrito y protagonizado por Luca Fontaine, dirigido por Mathery.",
      "filmfeat.watch": "Ver en YouTube",
      "break.quote": "«Nativo de tres idiomas — en casa en el silencio entre ellos.»",
      "coaching.eyebrow": "02 — Además",
      "coaching.title": "Coaching de Dialectos",
      "coaching.lede": "Precisión del acento e interpretación intercultural para actores premiados en Broadway, el cine y la televisión.",
      "coach.severance.meta": "Apple TV+ · dir. Ben Stiller",
      "coach.swansong.meta": "Apple TV+ · dir. Benjamin Cleary",
      "coach.camelot.meta": "Lincoln Center Theater · libreto de Aaron Sorkin",
      "coach.lifeofpi.meta": "Broadway / Gira nacional de EE. UU.",
      "coach.lifeofpi.cast": "(ganador del Olivier Award)",
      "coach.fallenangels.meta": "Broadway · Roundabout Theatre Company",
      "coach.luckyones.meta": "Hulu · 20th Television",
      "coach.fletch.meta": "Largometraje · dir. Greg Mottola",
      "coach.betrayal.meta": "Broadway · dir. Jamie Lloyd",
      "coach.burnthis.meta": "Broadway · Hudson Theatre",
      "resumes.coachLabel": "Currículum de coaching",
      "link.coachEN": "Coaching · Inglés",
      "link.coachFR": "Coaching · Francés",
      "gallery.eyebrow": "03 — Galería",
      "gallery.title": "Retratos",
      "about.eyebrow": "04 — Acerca",
      "about.title": "Biografía",
      "about.p1": "Luca Fontaine es un actor franco-italo-estadounidense formado en <strong>The Juilliard School</strong> (MFA, Grupo 51), el Conservatorio Nacional de Arte Dramático de Versalles y el Cours Simon de París. Hablante nativo de francés, italiano e inglés — y con dominio del español y el portugués — se mueve con fluidez entre la pantalla y el escenario, a ambos lados del Atlántico.",
      "about.p2": "Entre sus trabajos recientes en pantalla: <em>The Rehearsal</em> de Nathan Fielder (HBO), <em>Zorro</em> (Paramount+), <em>EVIL</em> de Robert King (CBS) y <em>La Última Noche en Tremore</em> de Oriol Paulo (Netflix), además de películas dirigidas por Andrew Niccol y Luis Prieto. En el teatro ha realizado giras internacionales con <em>God's Fool</em> de Martha Clarke y ha actuado en el Exchange Theatre de Londres y en el National Youth Theatre of Great Britain.",
      "about.p3": "Entre sus distinciones figuran el <strong>John Houseman Prize</strong> de Juilliard, la <strong>Career Advancement Fellowship</strong> y el <strong>Michael &amp; Suria Saint-Denis Prize</strong>. Más allá de la interpretación, Luca es un solicitado coach de dialectos para actores premiados en Broadway, el cine y la televisión.",
      "facts.languages": "Idiomas",
      "facts.languages.val": "Francés, italiano, inglés <em>(nativo)</em> · Español, portugués <em>(fluido)</em>",
      "facts.dialects": "Acentos",
      "facts.dialects.val": "Acentos estadounidenses, británicos y europeos",
      "facts.training": "Formación",
      "facts.training.val": "The Juilliard School · CNSAD Versailles · Cours Simon · NYT (Gran Bretaña)",
      "facts.skills": "Habilidades",
      "facts.skills.val": "Canto (tenor) · Guitarra, batería, ukelele, armónica · Combate escénico · Salsa y bailes de salón · Carné de conducir",
      "facts.height": "Estatura",
      "contact.eyebrow": "05 — Contacto",
      "contact.title": "Representación & Consultas",
      "contact.mgmt": "Mánager",
      "contact.direct": "Directo",
      "contact.profiles": "Perfiles",
      "footer.meta": "Actor · Coach de dialectos"
    }
  };

  const SUPPORTED = ["en", "it", "fr", "es"];

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    const dict = I18N[lang];
    const base = I18N.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      const v = dict[k] != null ? dict[k] : base[k];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const k = el.getAttribute("data-i18n-html");
      const v = dict[k] != null ? dict[k] : base[k];
      if (v != null) el.innerHTML = v;
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];
    document.documentElement.lang = lang;
    try { localStorage.setItem("lf-lang", lang); } catch (e) {}

    document.querySelectorAll("#lang button").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }

  function initialLang() {
    let saved = null;
    try { saved = localStorage.getItem("lf-lang"); } catch (e) {}
    if (saved && SUPPORTED.includes(saved)) return saved;
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : "en";
  }

  const start = () => {
    document.querySelectorAll("#lang button").forEach((b) =>
      b.addEventListener("click", () => applyLang(b.dataset.lang))
    );
    applyLang(initialLang());
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
