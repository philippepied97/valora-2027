// Logos partenaires VALORA — noms officiels et couleurs d'identité
// Rendu en "logo-chip" : texte stylisé (grayscale → couleur au survol)
window.VALORA_PARTNERS = [
  { name: "L'Europe s'engage en Martinique", short: "FEDER", color: "#003399", url: "#" },
  { name: "République française", short: "RF", color: "#000091", url: "#" },
  { name: "ADEME", short: "ADEME", color: "#009640", url: "https://martinique.ademe.fr" },
  { name: "Collectivité Territoriale de Martinique", short: "CTM", color: "#00843D", url: "https://www.collectivitedemartinique.mq" },
  { name: "Ville de Fort-de-France", short: "Fort-de-France", color: "#004488", url: "#" },
  { name: "ODE Martinique", short: "ODE", color: "#0096C8", url: "https://www.eaumartinique.fr" },
  { name: "CITEO", short: "CITEO", color: "#E30613", url: "https://www.citeo.com" },
  { name: "Banque des Territoires", short: "Banque des Territoires", color: "#E2001A", url: "https://www.banquedesterritoires.fr" },
  { name: "AFD", short: "AFD", color: "#E30613", url: "https://www.afd.fr" },
  { name: "SMTVD", short: "SMTVD", color: "#2E7D32", url: "#" },
  { name: "SMCM", short: "SMCM", color: "#F57C00", url: "#" },
  { name: "EDF", short: "EDF", color: "#0066CC", url: "https://martinique.edf.fr" },
  { name: "Comité Martiniquais du Tourisme", short: "CMT", color: "#0066B3", url: "https://www.martinique.org" },
  { name: "GBH", short: "GBH", color: "#000000", url: "https://www.gbh.fr" },
  { name: "Espace Sud", short: "Espace Sud", color: "#FAAA1B", url: "https://www.espacesud.fr" },
  { name: "CACEM", short: "CACEM", color: "#00A650", url: "https://www.cacem.org" },
  { name: "Cap Nord Martinique", short: "Cap Nord", color: "#8CC63F", url: "https://www.capnordmartinique.fr" },
  { name: "Agricultures & Territoires", short: "A&T", color: "#7AB51D", url: "#" },
  { name: "Chambre de Métiers et de l'Artisanat", short: "CMA", color: "#B22222", url: "#" },
  { name: "CCI Martinique", short: "CCI Martinique", color: "#004B8D", url: "https://www.martinique.cci.fr" },
  { name: "Odyssi", short: "Odyssi", color: "#005DAA", url: "https://www.odyssi.fr" },
  { name: "SME — Société Martiniquaise des Eaux", short: "SME", color: "#0077B6", url: "#" },
  { name: "Aéroport Aimé Césaire", short: "Aéroport MQ", color: "#003366", url: "https://www.martinique.aeroport.fr" },
  { name: "ARS Martinique", short: "ARS", color: "#00579E", url: "#" },
  { name: "Martinique Hub Caraïbe", short: "MHC", color: "#0093D0", url: "#" },
  { name: "Crédit Agricole Martinique-Guyane", short: "Crédit Agricole", color: "#009640", url: "https://www.ca-martinique.fr" },
  { name: "Air France", short: "AIRFRANCE", color: "#002157", url: "https://www.airfrance.fr" },
  { name: "SFR", short: "SFR", color: "#E2001A", url: "https://www.sfr.fr" },
  { name: "Martinique La 1ère", short: "Martinique·1", color: "#000000", url: "https://la1ere.francetvinfo.fr/martinique" },
  { name: "Association 3ED", short: "3ED", color: "#E6007E", url: "#" },
  { name: "Antilla", short: "ANTILLA", color: "#E30613", url: "https://www.antilla-martinique.com" },
  { name: "Le Mensuel", short: "Le Mensuel", color: "#2E7D32", url: "#" },
  { name: "Songhai Caraïbes", short: "Songhai", color: "#009640", url: "#" }
];

// Rendu en chip avec nom + couleur au hover
(function(){
  const mount = document.querySelector('[data-partners-marquee]');
  if (!mount) return;
  const html = (list) => list.map(p => `
    <a class="logo-chip" href="${p.url}" target="_blank" rel="noopener" title="${p.name}">
      <span class="nm" style="--hc:${p.color};">${p.short}</span>
    </a>
  `).join('');
  // duplicate for seamless marquee
  mount.innerHTML = html(window.VALORA_PARTNERS) + html(window.VALORA_PARTNERS);
})();
