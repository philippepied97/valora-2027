// VALORA 2027 — Données des 12 pôles
window.POLES_DATA = {
  "01": {
    num: "01",
    slug: "eau-assainissement",
    title: "Eau <em>&</em><br/>Assainissement.",
    crumb: "Eau & Assainissement",
    lead: "La ressource qui tombe du ciel, celle que l'on traite et celle qui retourne à la mer. En Martinique, l'eau est une boucle complète — captage, distribution, assainissement — que l'on regarde ici d'un seul tenant.",
    meta: [
      { k: "Surface", v: "<em>320 m²</em>" },
      { k: "Exposants", v: "9 présents" },
      { k: "Conférences", v: "4 rendez-vous" },
      { k: "Acteurs", v: "ODE · Odyssi · <em>Comité de Bassin</em>" }
    ],
    figs: [
      { big: "<em>32</em>%", u: "pertes", cap: "des volumes d'eau potable perdus dans les réseaux — un des taux les plus élevés de France.", src: "Source · ODE Martinique, 2024" },
      { big: "<em>68</em>%", u: "conformes", cap: "des stations de traitement des eaux usées conformes aux normes — un retard à rattraper.", src: "Source · DEAL Martinique, 2023" },
      { big: "215", u: "M m³", cap: "d'eau brute prélevée chaque année pour alimenter le territoire — dont 80 % en surface.", src: "Source · Office de l'Eau, 2024" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Parler d'eau en Martinique, c'est parler de quotidien : des tours d'eau dans le Nord-Atlantique, des réseaux vieillissants qui perdent près d'un tiers des volumes distribués, et un assainissement collectif qui peine encore à suivre. Les grands discours s'effacent vite devant le robinet qui coule brun ou la station qui déborde.</p>
      <p>La bonne nouvelle — parce qu'il y en a — c'est que ce sont aussi les sujets sur lesquels la bascule est la plus mesurable. Un compteur intelligent, une canalisation remplacée, une station modernisée. Le pôle 01 rassemble ce qui se fait, et ce qui pourrait se faire.</p>
      <div class="pole-img ph">Photo · prise d'eau Vivé, Lorrain</div>

      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>La gouvernance et l'exploitation de l'eau en Martinique reposent sur un écosystème institutionnel et opérationnel bien identifié :</p>
      <ul class="actors">
        <li>Office de l'Eau Martinique<em>ODE · Gouvernance</em></li>
        <li>Comité de Bassin de Martinique<em>Stratégie territoriale</em></li>
        <li>Parc Naturel Marin de Martinique<em>Qualité milieux marins</em></li>
        <li>Fermiers de l'Eau<em>Fédération exploitants</em></li>
        <li>Odyssi<em>Régie · CACEM</em></li>
        <li>SME — Société Martiniquaise des Eaux<em>Délégataire</em></li>
        <li>SAUR<em>Délégataire</em></li>
      </ul>

      <p class="pull">« L'eau en Martinique n'est pas un problème technique. C'est un problème politique avec des solutions techniques. »</p>

      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Côté distribution : réduction des pertes par sectorisation (programme CACEM 2024–2028), remplacement des canalisations amiante-ciment, télé-relevé généralisé. Côté assainissement : mise aux normes des stations de Pointe-des-Sables et du Lamentin, raccordements prioritaires dans les quartiers informels, développement de l'assainissement non collectif encadré (ANC).</p>
      <p>Côté ressource : récupération d'eau de pluie obligatoire sur les bâtiments neufs depuis 2023, phyto-épuration dans cinq communes pilotes du Nord, premières installations de réutilisation des eaux usées traitées pour l'arrosage des espaces verts.</p>
      <div class="pole-img ph">Photo · station d'épuration Pointe-des-Sables</div>

      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>À Sainte-Lucie, la Water and Sewerage Company teste depuis 2024 un réseau à pression variable qui a fait chuter les pertes de 28 à 16 %. À la Barbade, les citernes de toiture sont obligatoires depuis 2007 — on en tire aujourd'hui un bilan de vingt ans que leur délégation partagera au Village. En Dominique, les programmes de protection des bassins versants servent de référence régionale.</p>

      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>Trois articles publiés sur martinique2050.com nourrissent ce pôle : le portrait de Léa Servant (ODE), l'enquête sur les tours d'eau du Nord et la tribune des Fermiers de l'Eau sur le renouvellement des réseaux.</p>
    `,
    standRange: "Stands 101 à 109",
    expos: [
      ["101", "Office de l'Eau Martinique", "Gouvernance · public"],
      ["102", "Comité de Bassin", "Stratégie · public"],
      ["103", "Parc Naturel Marin", "Milieux marins · public"],
      ["104", "Odyssi", "Régie · CACEM"],
      ["105", "SME", "Délégataire eau & assainissement"],
      ["106", "SAUR Caraïbe", "Délégataire · ingénierie"],
      ["107", "Fermiers de l'Eau", "Fédération professionnelle"],
      ["108", "Phyto Caraïbe", "Phyto-épuration · PME"],
      ["109", "Water & Sewerage St-Lucia", "Invité · Sainte-Lucie"]
    ]
  },

  "02": {
    num: "02", slug: "energie",
    title: "Énergie.",
    crumb: "Énergie",
    lead: "Produire, stocker, consommer mieux — et sortir de la dépendance au fioul. La Martinique joue sa transition énergétique avec le soleil, le vent, la biomasse et la mer.",
    meta: [
      { k: "Surface", v: "<em>340 m²</em>" },
      { k: "Exposants", v: "10 présents" },
      { k: "Conférences", v: "5 rendez-vous" },
      { k: "Acteurs", v: "EDF · ADEME · <em>SMEM</em>" }
    ],
    figs: [
      { big: "<em>24</em>%", u: "ENR", cap: "part des énergies renouvelables dans le mix martiniquais — objectif 100 % en 2030.", src: "Source · PPE Martinique, 2024" },
      { big: "4,2", u: "kWh/m²/j", cap: "de gisement solaire moyen — parmi les meilleurs d'Europe.", src: "Source · Météo France" },
      { big: "<em>1</em>ʳᵉ", u: "SWAC", cap: "installation de climatisation par eau de mer profonde testée au CHU en 2026.", src: "Source · EDF Archipel" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>L'île importe encore l'essentiel de son énergie. Sortir de cette dépendance, c'est sécuriser les factures, créer des emplois locaux et tenir les engagements climat. La trajectoire PPE vise 100 % ENR à l'horizon 2030 — un pari ambitieux qui se joue aujourd'hui.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>EDF Archipel Guadeloupe-Martinique, l'ADEME Martinique, le SMEM (Syndicat Mixte d'Électricité), la CTM, les producteurs ENR locaux (Albioma, Quadran, Valorem). Une filière photovoltaïque mature et une filière géothermie/SWAC en émergence.</p>
      <p class="pull">« Chaque kWh produit sur l'île, c'est un litre de fioul qui ne traverse pas l'Atlantique. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Autoconsommation collective, agrivoltaïsme, stockage batteries de Bellefontaine, projet SWAC du CHU, biomasse canne à sucre, éolien Grand-Rivière. Le pôle présente les retours d'expérience, les coûts réels et les temps de retour.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>La Dominique vise le 100 % géothermie. La Barbade a posé le plus grand parc solaire domestique des Petites Antilles. Sainte-Lucie mise sur l'hydrogène vert.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>L'enquête "Combien coûte réellement le kWh martiniquais ?" et l'interview du directeur EDF Archipel.</p>
    `,
    standRange: "Stands 201 à 210",
    expos: [
      ["201", "EDF Archipel", "Producteur · public"],
      ["202", "ADEME Martinique", "Agence · public"],
      ["203", "SMEM", "Syndicat mixte"],
      ["204", "Albioma Caraïbes", "Biomasse · ENR"],
      ["205", "Quadran Caraïbes", "Solaire · éolien"],
      ["206", "Tecsol", "Ingénierie solaire"],
      ["207", "Enercoop Antilles", "Coopérative"],
      ["208", "Valorem", "ENR"],
      ["209", "Hydrogène Vert MQ", "Start-up"],
      ["210", "DOMLEC Dominica", "Invité · Dominique"]
    ]
  },

  "03": {
    num: "03", slug: "biodiversite",
    title: "Bio<em>diversité.</em>",
    crumb: "Biodiversité",
    lead: "Hotspot mondial et laboratoire vivant. La Martinique abrite plus d'espèces endémiques que toute la France métropolitaine — et une pression qui les menace toutes.",
    meta: [
      { k: "Surface", v: "<em>280 m²</em>" },
      { k: "Exposants", v: "8 présents" },
      { k: "Conférences", v: "3 rendez-vous" },
      { k: "Acteurs", v: "PNM · PNR · <em>OFB</em>" }
    ],
    figs: [
      { big: "400+", u: "endémiques", cap: "espèces animales et végétales uniques à la Martinique.", src: "Source · OFB, 2023" },
      { big: "<em>40</em>%", u: "forêt", cap: "du territoire couvert par la forêt — principalement dans le Nord.", src: "Source · ONF" },
      { big: "3", u: "aires MPA", cap: "aires marines protégées actives — 47 000 ha au total.", src: "Source · Parc Naturel Marin" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Mangroves menacées par l'urbanisation, récifs en recul, forêt tropicale fragmentée, espèces invasives en progression. La Martinique protège et perd en même temps.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>Parc Naturel Marin, Parc Naturel Régional, OFB, Conservatoire du Littoral, ONF, associations Karu Living, Carbet des Sciences, réseau Tortues.</p>
      <p class="pull">« On ne protège pas un récif, on protège un système. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Restauration de mangrove à Génipa, replantation coralienne au Robert, plan de lutte contre le rat noir en forêt de Montravail, certifications Pavillon Bleu.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>Sainte-Lucie partage son expérience sur les zones marines gérées. La Dominique défend ses forêts primaires. La Barbade publie un atlas open-source des espèces.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>Reportage "Nuit de ponte au Diamant" et portrait d'un garde du PNM.</p>
    `,
    standRange: "Stands 301 à 308",
    expos: [
      ["301", "Parc Naturel Marin", "Public"],
      ["302", "PNR Martinique", "Public"],
      ["303", "OFB", "Établissement public"],
      ["304", "Conservatoire du Littoral", "Public"],
      ["305", "ONF Martinique", "Public"],
      ["306", "Réseau Tortues MQ", "Association"],
      ["307", "Karu Living", "Association"],
      ["308", "Carbet des Sciences", "Médiation"]
    ]
  },

  "04": {
    num: "04", slug: "agriculture-durable",
    title: "Agriculture <em>durable.</em>",
    crumb: "Agriculture durable",
    lead: "Nourrir l'île en produisant autrement. Sortir du chlordécone, réduire la dépendance aux imports, valoriser les filières courtes et les savoir-faire créoles.",
    meta: [
      { k: "Surface", v: "<em>360 m²</em>" },
      { k: "Exposants", v: "11 présents" },
      { k: "Conférences", v: "5 rendez-vous" },
      { k: "Acteurs", v: "Chambre d'Agri · FREDON · <em>INRAE</em>" }
    ],
    figs: [
      { big: "<em>20</em>%", u: "autonomie", cap: "des légumes frais consommés sont produits localement.", src: "Source · DAAF, 2023" },
      { big: "90%", u: "sols", cap: "des sols agricoles contaminés au chlordécone — héritage à gérer.", src: "Source · DEAL" },
      { big: "<em>1 300</em>", u: "fermes", cap: "exploitations agricoles recensées — dont 18 % en bio ou conversion.", src: "Source · Agreste" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Dépendance aux imports, pression foncière, changement climatique, vieillissement des agriculteurs. Et toujours, en toile de fond, le chlordécone qui impose de repenser ce que l'on cultive et où.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>Chambre d'Agriculture, DAAF, FREDON, INRAE Antilles-Guyane, Cap Nord, Espace Sud, CACEM (volet agricole), coopératives bananières, filière canne-rhum, producteurs bio.</p>
      <p class="pull">« Un îlien qui mange local, c'est une île qui respire mieux. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Agroforesterie, agriculture de conservation, paniers bio locaux, maraîchage en zone non contaminée, label Nou ka Vansé, circuits courts via les collectivités.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>La Barbade et sa politique de souveraineté alimentaire à 2030. Dominique et son modèle de microfermes. Sainte-Lucie et le cacao fin de bouche.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>Portrait d'une maraîchère du Vauclin, reportage sur la filière cacao retrouvée.</p>
    `,
    standRange: "Stands 401 à 411",
    expos: [
      ["401", "Chambre d'Agriculture", "Consulaire"],
      ["402", "DAAF Martinique", "Public"],
      ["403", "FREDON", "Santé végétal"],
      ["404", "INRAE Antilles", "Recherche"],
      ["405", "Cap Nord", "Collectivité"],
      ["406", "Espace Sud", "Collectivité"],
      ["407", "Nou Ka Vansé", "Label local"],
      ["408", "Agricultures & Territoires", "Réseau"],
      ["409", "Coop Banane", "Filière"],
      ["410", "Filière Cacao MQ", "Filière"],
      ["411", "Songhai Caraïbes", "Modèle africain"]
    ]
  },

  "05": {
    num: "05", slug: "patrimoine",
    title: "Patrimoine.",
    crumb: "Patrimoine",
    lead: "Bâti, immatériel, naturel. Un patrimoine créole qui se transmet, se restaure et s'invente — de l'habitation coloniale au gwoka, du bèlè aux plages.",
    meta: [
      { k: "Surface", v: "<em>240 m²</em>" },
      { k: "Exposants", v: "7 présents" },
      { k: "Conférences", v: "3 rendez-vous" },
      { k: "Acteurs", v: "DAC · CMT · <em>Fondation du Patrimoine</em>" }
    ],
    figs: [
      { big: "<em>280</em>+", u: "MH", cap: "monuments historiques protégés sur le territoire.", src: "Source · DRAC, 2024" },
      { big: "5", u: "UNESCO", cap: "sites inscrits ou en tentative d'inscription au patrimoine mondial.", src: "Source · UNESCO" },
      { big: "<em>60</em>%", u: "bâti", cap: "du bâti historique nécessite des interventions de restauration.", src: "Source · Fondation du Patrimoine" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Climat tropical agressif, séismes, urbanisation, perte des savoir-faire. Le patrimoine martiniquais se défend par l'usage autant que par la protection.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>DAC Martinique, Comité Martiniquais du Tourisme (CMT), Fondation du Patrimoine, communes, associations de sauvegarde, Écoles d'architecture créole.</p>
      <p class="pull">« Le patrimoine, c'est ce que l'on choisit de transmettre. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Restauration de l'Habitation Clément, réhabilitation des quartiers d'In-Bourg, chantiers d'insertion sur le bâti vernaculaire, transmission numérique des traditions orales.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>Barbade · Bridgetown UNESCO. Dominique · villages kalinagos. Sainte-Lucie · Pitons et patrimoine immatériel.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>"Cases créoles : comment les rebâtir ?" et portrait d'une tambourineuse du bèlè.</p>
    `,
    standRange: "Stands 501 à 507",
    expos: [
      ["501", "DAC Martinique", "Public"],
      ["502", "CMT", "Tourisme"],
      ["503", "Fondation du Patrimoine", "Association"],
      ["504", "École d'Architecture", "Formation"],
      ["505", "Habitation Clément", "Privé · patrimoine"],
      ["506", "ADEME · bâti durable", "Public"],
      ["507", "Aménagement Hub Caraïbe", "Privé"]
    ]
  },

  "06": {
    num: "06", slug: "mobilite",
    title: "Mobilité.",
    crumb: "Mobilité",
    lead: "Sortir du tout-voiture sur une île où l'embouteillage est un sport national. TCSP, vélo, covoiturage, véhicules électriques, maritime.",
    meta: [
      { k: "Surface", v: "<em>300 m²</em>" },
      { k: "Exposants", v: "9 présents" },
      { k: "Conférences", v: "4 rendez-vous" },
      { k: "Acteurs", v: "Martinique Transport · <em>CACEM</em> · Air France" }
    ],
    figs: [
      { big: "<em>400</em>", u: "kt CO₂", cap: "émis chaque année par les transports — 1er poste d'émission de l'île.", src: "Source · ADEME, 2023" },
      { big: "1,9", u: "pers./voit.", cap: "taux d'occupation moyen des véhicules aux heures de pointe.", src: "Source · AREC" },
      { big: "<em>12</em>km", u: "TCSP", cap: "de bus à haut niveau de service en service entre Fort-de-France et Le Lamentin.", src: "Source · Martinique Transport" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Congestion chronique, dépendance aux hydrocarbures, transports en commun sous-dimensionnés, vélo-taboo. La mobilité pèse lourd sur le climat et sur la vie quotidienne.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>Martinique Transport, CACEM, Cap Nord, Espace Sud, CTM (volet infra), Air France Caraïbe, Aéroport Aimé Césaire, ports, opérateurs maritimes.</p>
      <p class="pull">« La voiture individuelle n'est pas un droit, c'est une solution par défaut. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Extension TCSP vers le Nord, schéma cyclable métropolitain, bornes VE, auto-partage Valoroute, navette maritime Fort-de-France / Trois-Îlets renforcée.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>Barbade · flotte de bus électriques. Dominique · réseau de sentiers interconnectés. Sainte-Lucie · ferries inter-villages.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>"30 minutes de plus : géographie d'un embouteillage martiniquais" et interview du dir. Martinique Transport.</p>
    `,
    standRange: "Stands 601 à 609",
    expos: [
      ["601", "Martinique Transport", "AOM"],
      ["602", "CACEM · Mobilités", "Collectivité"],
      ["603", "Air France Caraïbe", "Transport aérien"],
      ["604", "Aéroport Aimé Césaire", "Infra"],
      ["605", "Grand Port Maritime", "Portuaire"],
      ["606", "Valoroute", "Auto-partage"],
      ["607", "Vélo Antilles", "Association"],
      ["608", "Mobil'é", "Bornes VE"],
      ["609", "Ferries Caraïbes", "Maritime"]
    ]
  },

  "07": {
    num: "07", slug: "dechets",
    title: "Déchets.",
    crumb: "Déchets",
    lead: "Réduire, trier, valoriser. Une île n'a pas le luxe d'enfouir indéfiniment — le réemploi et l'économie circulaire deviennent vitaux.",
    meta: [
      { k: "Surface", v: "<em>320 m²</em>" },
      { k: "Exposants", v: "10 présents" },
      { k: "Conférences", v: "4 rendez-vous" },
      { k: "Acteurs", v: "SMTVD · CITEO · <em>ADEME</em>" }
    ],
    figs: [
      { big: "<em>540</em>kg", u: "/hab/an", cap: "de déchets produits par habitant — 12 % de plus que la moyenne nationale.", src: "Source · SMTVD, 2024" },
      { big: "31%", u: "tri", cap: "taux de tri sélectif — objectif 55 % en 2030.", src: "Source · CITEO" },
      { big: "<em>1</em>", u: "ISDND", cap: "installation de stockage en fin de vie — le territoire doit changer de modèle.", src: "Source · DEAL" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Saturation du centre d'enfouissement, ferrailles et déchets dangereux à réexporter, sacs plastiques qui terminent en mer. Le territoire bascule vers la prévention et le réemploi.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>SMTVD (Syndicat Martiniquais de Traitement et Valorisation des Déchets), SMCM, CITEO, ADEME, Éco-organismes, recycleries, ressourceries communales.</p>
      <p class="pull">« Le meilleur déchet, c'est celui qu'on ne produit pas. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Nouveau centre de tri modernisé, développement des recycleries (Saint-Joseph, Schoelcher), compostage partagé, filière biodéchets, consigne du verre sur 3 communes pilotes.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>Barbade · interdiction plastiques depuis 2019. Dominique · compostage généralisé. Sainte-Lucie · coopérative de pêche zéro plastique.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>Reportage à la recyclerie de Saint-Joseph et enquête sur la filière verre.</p>
    `,
    standRange: "Stands 701 à 710",
    expos: [
      ["701", "SMTVD", "Syndicat"],
      ["702", "SMCM", "Syndicat"],
      ["703", "CITEO", "Éco-organisme"],
      ["704", "ADEME · Déchets", "Public"],
      ["705", "Recyclerie Saint-Joseph", "ESS"],
      ["706", "Ressourcerie Sud", "ESS"],
      ["707", "Consigne Caraïbe", "Start-up"],
      ["708", "Compost Caraïbes", "Association"],
      ["709", "Veolia Antilles", "Opérateur"],
      ["710", "Suez Antilles", "Opérateur"]
    ]
  },

  "08": {
    num: "08", slug: "tourisme-durable",
    title: "Tourisme <em>durable.</em>",
    crumb: "Tourisme durable",
    lead: "Accueillir sans saturer. La Martinique cherche un tourisme qui redistribue — à la nature, aux territoires, aux Martiniquais.",
    meta: [
      { k: "Surface", v: "<em>280 m²</em>" },
      { k: "Exposants", v: "8 présents" },
      { k: "Conférences", v: "3 rendez-vous" },
      { k: "Acteurs", v: "CMT · CCI · <em>Air France</em>" }
    ],
    figs: [
      { big: "<em>1</em>M", u: "visiteurs", cap: "touristes accueillis en 2024, dont 40 % de croisiéristes journée.", src: "Source · CMT, 2024" },
      { big: "12%", u: "PIB", cap: "poids direct et indirect du tourisme dans l'économie de l'île.", src: "Source · IEDOM" },
      { big: "<em>47</em>", u: "labels", cap: "hébergements certifiés Clef Verte ou équivalents.", src: "Source · CMT" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Concentration saisonnière, pression sur la ressource en eau, empreinte carbone de l'aérien, tourisme de masse vs. tourisme authentique.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>Comité Martiniquais du Tourisme (CMT), CCI Martinique, Air France Caraïbe, hébergeurs, guides agréés, réseau des éco-lodges.</p>
      <p class="pull">« On ne vend pas un paysage, on protège un art de vivre. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Plan "Tourisme 2030 zéro plastique", sentiers de grande randonnée HM-GR1, label Écogîte, nuits chez l'habitant, offres bas-carbone.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>Dominique · Nature Island. Barbade · accueil responsable. Sainte-Lucie · éco-resorts.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>"Les chiffres cachés du croisiérisme" et portrait d'un guide kayak du Robert.</p>
    `,
    standRange: "Stands 801 à 808",
    expos: [
      ["801", "CMT", "Tourisme"],
      ["802", "CCI Martinique", "Consulaire"],
      ["803", "Air France Caraïbe", "Transport"],
      ["804", "Clef Verte MQ", "Label"],
      ["805", "Réseau Écogîtes", "Hébergement"],
      ["806", "Guides Agréés MQ", "Fédération"],
      ["807", "Martinique Hub Caraïbe", "Dev éco"],
      ["808", "Dominica Discover", "Invité · Dominique"]
    ]
  },

  "09": {
    num: "09", slug: "risques-sargasses",
    title: "Risques <em>& sargasses.</em>",
    crumb: "Risques & sargasses",
    lead: "Cyclones, séismes, éruption, tsunamis, sargasses. Vivre avec l'aléa — et se préparer.",
    meta: [
      { k: "Surface", v: "<em>260 m²</em>" },
      { k: "Exposants", v: "8 présents" },
      { k: "Conférences", v: "4 rendez-vous" },
      { k: "Acteurs", v: "Préfecture · OVSM · <em>IFREMER</em>" }
    ],
    figs: [
      { big: "<em>1</em>ᵉʳ", u: "risque", cap: "département métropolitain sur l'exposition cumulée aux risques naturels majeurs.", src: "Source · MTE, 2023" },
      { big: "65", u: "jours/an", cap: "moyens d'échouage massif de sargasses sur la côte atlantique.", src: "Source · IFREMER" },
      { big: "<em>210</em>k", u: "habitants", cap: "exposés au risque cyclonique de niveau 4 ou 5.", src: "Source · DEAL" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Sargasses massives, saison cyclonique allongée, activité sismique régulière, Pelée en surveillance permanente. Culture du risque à renforcer.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>Préfecture (SIDPC), OVSM (Observatoire volcanologique), IFREMER, SDIS, associations de prévention, Météo France Antilles.</p>
      <p class="pull">« Se préparer, c'est le premier geste citoyen. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Barrages anti-sargasses, valorisation sargasses en biogaz, plan ORSEC mis à jour, exercice tsunami annuel, chaîne alerte SAIP.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>Coordination régionale sargasses (RESSAC). Barbade sur les cyclones. Dominique sur la reconstruction post-Maria.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>"Cinq jours d'échouage : journal d'un maire" et reportage à l'OVSM.</p>
    `,
    standRange: "Stands 901 à 908",
    expos: [
      ["901", "Préfecture · SIDPC", "Public"],
      ["902", "OVSM", "Observatoire"],
      ["903", "IFREMER", "Recherche"],
      ["904", "SDIS 972", "Secours"],
      ["905", "Météo France Antilles", "Public"],
      ["906", "Croix-Rouge MQ", "Association"],
      ["907", "Sarg-Énergie", "Start-up"],
      ["908", "RESSAC Caraïbes", "Réseau"]
    ]
  },

  "10": {
    num: "10", slug: "economie-circulaire",
    title: "Économie <em>circulaire.</em>",
    crumb: "Économie circulaire",
    lead: "Boucler les flux — matières, énergie, biens — sur un territoire fini. C'est l'ADN de Valora depuis l'origine.",
    meta: [
      { k: "Surface", v: "<em>340 m²</em>" },
      { k: "Exposants", v: "11 présents" },
      { k: "Conférences", v: "5 rendez-vous" },
      { k: "Acteurs", v: "ADEME · <em>3ED</em> · CACEM" }
    ],
    figs: [
      { big: "<em>8</em>%", u: "PIB", cap: "poids potentiel de l'ESS et de l'économie circulaire à horizon 2030.", src: "Source · INSEE, 2024" },
      { big: "120", u: "acteurs", cap: "entreprises et associations identifiées dans la filière circulaire martiniquaise.", src: "Source · 3ED" },
      { big: "<em>3</em>x", u: "croiss.", cap: "le nombre de recycleries en 5 ans — dynamique qui s'accélère.", src: "Source · CRESS" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Petit territoire, flux amont coûteux, flux aval à réexporter. L'économie circulaire n'est pas un luxe — c'est la règle du jeu insulaire.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>ADEME, Association 3ED (porteur Valora), CACEM, CRESS, pôle ESS, réseau recycleries, CCI, entrepreneurs zéro-déchet.</p>
      <p class="pull">« Sur une île, chaque objet raconte deux histoires : celle d'avant, et celle d'après. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Plateforme matières secondaires Banque des Territoires, réemploi sur chantiers publics, Fab Labs dans 5 lycées, label Entreprise circulaire Martinique 2027.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>Barbade · CEPEP. Dominique · microéconomie communale. Sainte-Lucie · maker spaces.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>"Fab Lab Ducos : démo" et portrait d'une entreprise d'upcycling textile.</p>
    `,
    standRange: "Stands 1001 à 1011",
    expos: [
      ["1001", "Association 3ED", "Organisateur Valora"],
      ["1002", "ADEME", "Public"],
      ["1003", "CACEM · ESS", "Collectivité"],
      ["1004", "CRESS Martinique", "Réseau ESS"],
      ["1005", "Banque des Territoires", "Financement"],
      ["1006", "AFD", "Financement"],
      ["1007", "CCI Martinique", "Consulaire"],
      ["1008", "Fab Lab Ducos", "Makers"],
      ["1009", "GBH · RSE", "Entreprise"],
      ["1010", "Crédit Agricole MQ", "Banque"],
      ["1011", "Antilla", "Média partenaire"]
    ]
  },

  "11": {
    num: "11", slug: "education-formation",
    title: "Éducation <em>& formation.</em>",
    crumb: "Éducation & formation",
    lead: "Former ceux qui feront la transition. Du primaire à la reconversion professionnelle, la bascule passe par l'école et les métiers.",
    meta: [
      { k: "Surface", v: "<em>260 m²</em>" },
      { k: "Exposants", v: "8 présents" },
      { k: "Conférences", v: "4 rendez-vous" },
      { k: "Acteurs", v: "Rectorat · <em>CTM</em> · CMA" }
    ],
    figs: [
      { big: "<em>85</em>k", u: "élèves", cap: "scolarisés sur le territoire — dont 12 % en lycée pro.", src: "Source · Rectorat, 2024" },
      { big: "32", u: "CFA", cap: "formations en apprentissage liées à la transition (ENR, bâti, eau).", src: "Source · CMA" },
      { big: "<em>2 400</em>", u: "stagiaires", cap: "adultes en reconversion dans les métiers verts chaque année.", src: "Source · CTM" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Décrochage, inadéquation formations/besoins locaux, fuite des talents vers la métropole. La transition a besoin de compétences locales, aujourd'hui.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>Rectorat de Martinique, CTM (formation pro), Chambre des Métiers et de l'Artisanat (CMA), Université des Antilles, CFA, associations éducatives.</p>
      <p class="pull">« Former sur le territoire, pour le territoire. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>CAP Énergies renouvelables, BTS Métiers de l'eau, écoles de la deuxième chance, Fab Labs scolaires, programme Graine de Valora pour les écoles primaires.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>University of the West Indies · campus partagé. Dominique · écoles forêts. Barbade · TVET.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>"Graine de Valora : trois classes témoignent" et interview du recteur.</p>
    `,
    standRange: "Stands 1101 à 1108",
    expos: [
      ["1101", "Rectorat MQ", "Public"],
      ["1102", "CTM · Formation", "Collectivité"],
      ["1103", "CMA Martinique", "Consulaire"],
      ["1104", "Université des Antilles", "Supérieur"],
      ["1105", "CFA BTP", "Apprentissage"],
      ["1106", "E2C Martinique", "École 2e chance"],
      ["1107", "Graine de Valora", "Programme 3ED"],
      ["1108", "UWI Cave Hill", "Invité · Barbade"]
    ]
  },

  "12": {
    num: "12", slug: "climat",
    title: "Climat.",
    crumb: "Climat",
    lead: "Adaptation, atténuation, résilience. Sur une île de 400 000 habitants, le climat ne se négocie pas — il se vit.",
    meta: [
      { k: "Surface", v: "<em>300 m²</em>" },
      { k: "Exposants", v: "9 présents" },
      { k: "Conférences", v: "5 rendez-vous" },
      { k: "Acteurs", v: "CTM · DEAL · <em>Météo France</em>" }
    ],
    figs: [
      { big: "<em>+1,4</em>°C", u: "", cap: "réchauffement observé depuis 1960 — supérieur à la moyenne mondiale.", src: "Source · Météo France, 2024" },
      { big: "+18", u: "cm", cap: "élévation du niveau marin depuis 1950, accélération en cours.", src: "Source · IPCC AR6" },
      { big: "<em>PCAET</em>", u: "×3", cap: "plans climat intercommunaux opérationnels sur le territoire.", src: "Source · DEAL" }
    ],
    article: `
      <h3 id="enjeux">Les enjeux, <em>vus d'ici.</em></h3>
      <p>Érosion côtière, vagues de chaleur, intensification des pluies extrêmes, stress hydrique. La Martinique est déjà en climat +1,4 °C — ce n'est pas un scénario, c'est l'agenda.</p>
      <h3 id="acteurs">Les acteurs <em>locaux.</em></h3>
      <p>CTM (Schéma Énergie Climat), DEAL, Météo France Antilles, Observatoire régional énergie-climat (AREC), collectivités porteuses de PCAET.</p>
      <p class="pull">« Le climat local est un écosystème politique autant qu'atmosphérique. »</p>
      <h3 id="solutions">Solutions <em>sur le terrain.</em></h3>
      <p>Repli stratégique de certaines zones littorales, végétalisation urbaine, plans canicule, assurances paramétriques cyclone pour les petits pêcheurs.</p>
      <h3 id="caraibe">Regards <em>caribéens.</em></h3>
      <p>Caribbean Community Climate Change Centre (5Cs), Barbade · finance climat, Dominique · pays climat-résilient en 2030.</p>
      <h3 id="lire">À lire dans <em>le Mag.</em></h3>
      <p>"Le littoral qui recule : carto interactive" et interview de la climatologue Valérie Daniel.</p>
    `,
    standRange: "Stands 1201 à 1209",
    expos: [
      ["1201", "CTM · Climat", "Collectivité"],
      ["1202", "DEAL Martinique", "Public"],
      ["1203", "Météo France Antilles", "Public"],
      ["1204", "AREC", "Observatoire"],
      ["1205", "CACEM · PCAET", "Collectivité"],
      ["1206", "Cap Nord · PCAET", "Collectivité"],
      ["1207", "Espace Sud · PCAET", "Collectivité"],
      ["1208", "Carbone 4 Caraïbe", "Conseil"],
      ["1209", "5Cs Belize", "Invité · régional"]
    ]
  }
};

window.POLE_ORDER = ["01","02","03","04","05","06","07","08","09","10","11","12"];
