// Iran Crisis 2025-2026 — Complete Events Database
// Generated from Al Jazeera, Britannica, Amnesty International, Critical Threats,
// Alma Research, FDD, Wikipedia, CNN, NPR, PBS, Times of Israel, CBS News

const events = [
  // ═══════════════════════════════════════════════════════════════
  // PHASE 1: PROTESTS (Dec 28 2025 - Jan 27 2026)
  // Sources: Wikipedia, Amnesty International, HRW, HRANA, NCRI,
  // NPR, PBS, CNN, Iran International, Critical Threats, IranWire
  // ═══════════════════════════════════════════════════════════════

  // ── Day 0: Dec 28 — Bazaar Strike Begins ──
  { day: 0, lat: 35.6892, lng: 51.3890, title: "Alaeddin Shopping Centre Strike", desc: "Shopkeepers at Alaeddin mobile phone complex shut doors as USD hits 145,000 tomans. Law enforcement fires tear gas at demonstrators outside.", type: "protest", size: "large", phase: "protests" },
  { day: 0, lat: 35.6960, lng: 51.3980, title: "Charsou Mall Closure", desc: "Charsou mobile phone complex — major tech trade hub — closes in solidarity with Alaeddin merchants.", type: "protest", phase: "protests" },
  { day: 0, lat: 35.6725, lng: 51.4216, title: "Tehran Grand Bazaar Strike", desc: "Gold, currency, fabric, footwear and home appliance corridors partially or fully closed. Inflation at 42%, food prices up 72%.", type: "protest", size: "large", phase: "protests" },

  // ── Day 1: Dec 29 — Protests Spread Beyond Tehran ──
  { day: 1, lat: 35.660, lng: 51.330, title: "Tehran Bazaar Strike Day 2", desc: "Second day of strikes paralyzes Grand Bazaar. 20 buses of riot troops deployed near Alaeddin Passage.", type: "protest", size: "large", phase: "protests" },
  { day: 1, lat: 26.9564, lng: 56.2707, title: "Qeshm Island Protests", desc: "Nighttime protests erupt on Qeshm Island in southern Iran.", type: "protest", phase: "protests" },
  { day: 1, lat: 36.6736, lng: 48.4787, title: "Zanjan Protests", desc: "Nighttime demonstrations reported in Zanjan, northwestern Iran.", type: "protest", phase: "protests" },
  { day: 1, lat: 34.7988, lng: 48.5146, title: "Hamadan Protests", desc: "Protests reported overnight in Hamadan province.", type: "protest", phase: "protests" },

  // ── Day 2: Dec 30 — Universities Join ──
  { day: 2, lat: 35.7022, lng: 51.3953, title: "Tehran University Student Protests", desc: "Students from Tehran University, Sharif, Amirkabir, Khajeh Nasir, and Beheshti universities join bazaar uprising. Basij attacks students at Amirkabir — one severely injured.", type: "protest", size: "large", phase: "protests" },
  { day: 2, lat: 35.6580, lng: 51.3919, title: "Tehran — Mellat Street Clashes", desc: "Demonstrations on Mellat Street and at Shush and Javadieh squares lead to clashes with security forces.", type: "protest", phase: "protests" },
  { day: 2, lat: 32.6539, lng: 51.6660, title: "Isfahan University of Technology", desc: "Students at Isfahan University of Technology join protests, chanting 'Death to the dictator'.", type: "protest", phase: "protests" },
  { day: 2, lat: 31.8974, lng: 54.3569, title: "Yazd University Protests", desc: "Yazd University students march with anti-regime slogans.", type: "protest", phase: "protests" },

  // ── Day 3: Dec 31 — Live Fire & Kuhdasht Killing ──
  { day: 3, lat: 32.6546, lng: 51.6779, title: "Isfahan — Naqsh-e Jahan Square Sit-in", desc: "Women stage sit-in at Naqsh-e Jahan Square. Security forces attack sitting women with pepper spray. Strikes also at Imam Square, Goldasteh Street, Ahmadabad Roundabout.", type: "protest", phase: "protests" },
  { day: 3, lat: 29.6257, lng: 52.5310, title: "Shiraz — Kazemi Street Bazaar Shutdown", desc: "Extensive shutdowns in Kazemi Street market. Protests continue across Shiraz.", type: "protest", phase: "protests" },
  { day: 3, lat: 33.4435, lng: 47.6073, title: "Kuhdasht — Protester Shot Dead", desc: "Amirhesam Khodayarifard (21) shot in the head by plainclothes agent during protests. Live fire used to disperse crowds in at least two locations.", type: "humanitarian", phase: "protests" },
  { day: 3, lat: 35.660, lng: 51.335, title: "Tehran — Universities Go Remote", desc: "Regime orders universities to switch to remote learning, citing 'cold weather'. Authorities dismiss security managers at several universities for 'mistreatment of students'.", type: "political", phase: "protests" },

  // ── Day 4: Jan 1 — Kuhdasht Funeral, Protests Expand ──
  { day: 4, lat: 33.4435, lng: 47.6073, title: "Kuhdasht — Funeral Turns Protest", desc: "Funeral of Khodayarifard held under heavy security. Crowd resists when security forces try to seize body — stones thrown at forces. Attendees chant anti-regime slogans.", type: "protest", phase: "protests" },
  { day: 4, lat: 34.6399, lng: 50.8759, title: "Qom — Second Night of Protests", desc: "Intense protests for second night. Youths set fire to SSF motorcycle, chanting 'This year is the year of blood, Seyed Ali will be overthrown'.", type: "protest", phase: "protests" },
  { day: 4, lat: 38.0800, lng: 46.2919, title: "Tabriz Protests Begin", desc: "Protests erupt in Tabriz. Striking images of massive crowds circulate on social media.", type: "protest", phase: "protests" },

  // ── Day 5: Jan 2 — 70 Protests Recorded, Trump Warns ──
  { day: 5, lat: 35.660, lng: 51.340, title: "Tehran — Protests Continue in Force", desc: "70 protests recorded nationwide (up from 56 on Jan 1). Protests in Tehran, Qom, Isfahan, Shiraz, Ilam, Mashhad, Karaj, Zanjan, Hamadan, and Qeshm.", type: "protest", size: "large", phase: "protests" },
  { day: 5, lat: 36.2605, lng: 59.6168, title: "Mashhad — Mass Demonstrations", desc: "Iran's second-largest city sees massive protests as movement enters second week.", type: "protest", size: "large", phase: "protests" },
  { day: 5, lat: 33.6374, lng: 46.4227, title: "Ilam Province — IRGC Kills 4 in Malekshahi", desc: "IRGC forces violently suppress peaceful demos in Malekshahi County, killing at least 4 including one child.", type: "humanitarian", phase: "protests" },
  { day: 5, lat: 38.9072, lng: -77.0369, title: "Trump Warns Iran", desc: "President Trump warns Iranian authorities will be 'hit very hard' should additional protesters be killed.", type: "political", phase: "protests" },

  // ── Day 6: Jan 3 — Greater Geographic Spread ──
  { day: 6, lat: 35.660, lng: 51.345, title: "Protests Surpass Previous Days", desc: "Jan 3 protests greater in geographic spread and protester numbers than all previous days. Security presence also increases dramatically.", type: "protest", size: "large", phase: "protests" },
  { day: 6, lat: 33.6374, lng: 46.4227, title: "Ilam — Hospital Raided (Day 1)", desc: "IRGC forces raid Imam Khomeini Hospital in Ilam — forcing entry into wards, destroying doors, attempting to arrest injured protesters.", type: "humanitarian", phase: "protests" },
  { day: 6, lat: 30.2839, lng: 57.0834, title: "Kerman Joins — Regime Change Demands", desc: "Chants in Kerman shift from economic grievances to explicit regime change demands.", type: "protest", phase: "protests" },

  // ── Day 7: Jan 4 — 107 Cities, Hospital Attacks ──
  { day: 7, lat: 35.7219, lng: 51.3347, title: "Tehran — 20+ Neighborhoods Protest", desc: "Clashes in Jomhouri, Moshiriyeh, Sadeghieh, Narmak (Haft Hoz), Tehransar, Valiasr Town, Jannat Abad, Chaharrah-e Sirous. Chants of 'Death to Khamenei'.", type: "protest", size: "large", phase: "protests" },
  { day: 7, lat: 33.6374, lng: 46.4227, title: "Ilam — Hospital Raided (Day 2)", desc: "Security forces in full riot gear storm Imam Khomeini Hospital again — attack medical personnel with tear gas and shotgun pellets, arrest injured protesters.", type: "humanitarian", phase: "protests" },
  { day: 7, lat: 35.660, lng: 51.350, title: "Saadi & Hafez Streets — Tear Gas", desc: "Morning raid: tear gas and pellet guns against merchants on Saadi and Hafez streets and around Alaeddin/Charsou. Youths resist by setting fires and creating roadblocks.", type: "protest", phase: "protests" },

  // ── Day 8: Jan 5 — 107 Cities, Islamabad-e Gharb Seized ──
  { day: 8, lat: 34.1093, lng: 46.5312, title: "Islamabad-e Gharb Seized by Protesters", desc: "Protesters control the city until 2 PM. Governor's office and government buildings seized or set ablaze. All surveillance cameras disabled. 6 security force members killed in clashes.", type: "protest", size: "large", phase: "protests" },
  { day: 8, lat: 34.3142, lng: 47.0650, title: "Kermanshah — Heavy Clashes", desc: "Heavy clashes in Dareh Derizh district. People respond to attacks with weapons. 41 citizens with gunfire wounds hospitalized at one Kermanshah hospital.", type: "humanitarian", phase: "protests" },
  { day: 8, lat: 35.3200, lng: 46.9900, title: "Sonqor — Live Fire", desc: "Security forces open fire in Sonqor, Kermanshah province. Despite live ammunition, people stand ground and continue rallying late into the night.", type: "protest", phase: "protests" },
  { day: 8, lat: 35.660, lng: 51.355, title: "Uprising Reaches 107 Cities", desc: "NCRI reports uprising has now spread to 107 cities across Iran in 8 days. HRANA counts 348 sites in 111 cities across all 31 provinces.", type: "protest", size: "large", phase: "protests" },

  // ── Day 9: Jan 6 — Abdanan Falls, Bazaar War Zone ──
  { day: 9, lat: 32.9928, lng: 47.4186, title: "Abdanan Falls to Protesters", desc: "City of 25,000 effectively falls under people's control. Regime security apparatus collapses. Massive rally at dusk with chants: 'This is the year of blood, Seyyed Ali will be overthrown'.", type: "protest", size: "large", phase: "protests" },
  { day: 9, lat: 35.660, lng: 51.360, title: "Grand Bazaar Sit-in & Tear Gas", desc: "Protesters sit-in inside Grand Bazaar passages. Security fires tear gas. Witnesses describe bazaar as 'war zone'. 20 buses of troops and water cannons at Alaeddin.", type: "protest", phase: "protests" },
  { day: 9, lat: 35.7150, lng: 51.4100, title: "Sina Hospital Tehran — Raided", desc: "Security forces assault Sina Hospital in Tehran, attacking medical staff and seizing injured protesters.", type: "humanitarian", phase: "protests" },
  { day: 9, lat: 35.660, lng: 51.365, title: "Death Toll Reaches 36", desc: "Activist groups report at least 36 killed since protests began. CHRI documents 27+ civilians including 6 children killed by gunfire Dec 28 - Jan 5.", type: "humanitarian", phase: "protests" },

  // ── Day 10: Jan 7 — Oil Workers Strike, Kurdish Calls ──
  { day: 10, lat: 27.5260, lng: 52.6103, title: "South Pars Oil Workers Strike", desc: "Workers at South Pars refineries in Asaluyeh join nationwide strikes — major escalation threatening Iran's energy sector.", type: "protest", size: "large", phase: "protests" },
  { day: 10, lat: 35.660, lng: 51.370, title: "Grand Bazaar — Hammamchal, Pachenar, Kaffashha", desc: "Merchants in Bein-ol-Haramein, Pachenar, Hammamchal districts and Gold & Jewelry Bazaar and Shoemakers Bazaar keep shutters down.", type: "protest", phase: "protests" },
  { day: 10, lat: 35.3219, lng: 46.9862, title: "Kurdish Parties Call for Strike", desc: "Reza Pahlavi and Kurdish political parties issue joint call for protests and strikes. Shopkeepers and merchants in Sanandaj respond with strikes.", type: "political", phase: "protests" },
  { day: 10, lat: 34.7988, lng: 48.5146, title: "Qazvin Bazaar Strikes", desc: "Shopkeepers in Qazvin main bazaar close stores while chanting 'Death to the dictator'.", type: "protest", phase: "protests" },

  // ── Day 11: Jan 8 — THE MASSACRE BEGINS ──
  { day: 11, lat: 35.660, lng: 51.375, title: "Reza Pahlavi's Call — 80M Views", desc: "Prince Reza Pahlavi's Instagram video calling for 8 PM protests reaches 80 million views. Massive turnout across country in response.", type: "political", size: "large", phase: "protests" },
  { day: 11, lat: 35.7000, lng: 51.3300, title: "Tehran — Sadeghieh Square Massacre", desc: "IRGC opens fire on protesters without warning in Sadeghieh Square. Eyewitness: 'Dozens fell — wounded, seriously injured.' Shooting from rooftops of buildings, mosques, police stations.", type: "humanitarian", size: "large", phase: "protests" },
  { day: 11, lat: 35.7150, lng: 51.3100, title: "Tehran — Ekbatan Killings", desc: "Hit-and-run battles in Ekbatan Town. IRGC and Basij fire live rounds. Significant casualties reported.", type: "humanitarian", phase: "protests" },
  { day: 11, lat: 35.6600, lng: 51.3100, title: "Tehran — Moshiriyeh Massacre", desc: "Southern Tehran neighborhoods devastated. Disproportionate killing in poorer southern districts.", type: "humanitarian", phase: "protests" },
  { day: 11, lat: 35.6892, lng: 51.4200, title: "Tehran — 217 Dead at 6 Hospitals", desc: "Six hospitals in Tehran record 217 deaths of protesters, mostly from live ammunition. Thousands more believed killed across southern Tehran.", type: "humanitarian", size: "large", phase: "protests" },
  { day: 11, lat: 35.660, lng: 51.380, title: "Total Internet Blackout Begins", desc: "Authorities cut all internet and phone service across 31 provinces. 97% fall in internet usage. Mobile antennas disabled, phone lines cut, SIM cards deactivated.", type: "political", size: "large", phase: "protests" },
  { day: 11, lat: 37.2682, lng: 49.5891, title: "Rasht Bazaar Massacre", desc: "Security forces surround and trap protesters inside Rasht Bazaar, set it on fire. People killed while surrendering or escaping. Wounded 'finished off' in streets and hospitals.", type: "humanitarian", size: "large", phase: "protests" },
  { day: 11, lat: 32.6546, lng: 51.6779, title: "Isfahan Massacre — 2,000+ Killed", desc: "Mass killings across Isfahan, Najafabad, and Khorasgan. More than 2,000 estimated killed. Hospitals overwhelmed.", type: "humanitarian", size: "large", phase: "protests" },
  { day: 11, lat: 35.3219, lng: 46.9862, title: "Sanandaj — Strikes and Gunfire", desc: "Street protests across Sanandaj following joint Kurdish party call. Videos show citizens gathering amid audible gunfire.", type: "protest", phase: "protests" },

  // ── Day 12: Jan 9 — Massacre Continues, Millions in Streets ──
  { day: 12, lat: 35.660, lng: 51.385, title: "Millions Across All 31 Provinces", desc: "Millions take to streets across all 31 provinces despite massacres the previous night. 180+ cities in uprising.", type: "protest", size: "large", phase: "protests" },
  { day: 12, lat: 36.2605, lng: 59.6168, title: "Mashhad Massacre — 1,800+ Killed", desc: "150 bodies taken to one hospital alone between 7 PM and 2 AM. At least 1,800 estimated killed. Eyewitness on Vakilabad Blvd: 'The smell of blood is still in my nostrils'.", type: "humanitarian", size: "large", phase: "protests" },
  { day: 12, lat: 35.8400, lng: 50.9700, title: "Karaj Massacre — 3,000+ Killed", desc: "At least 3,000 killed across Karaj, Shahriar, and Andisheh. 44 bodies to Madani Hospital, 36 to Ghaem Hospital on one day alone. Intense violence in Fardis.", type: "humanitarian", size: "large", phase: "protests" },
  { day: 12, lat: 37.2682, lng: 49.5891, title: "Rasht — Death Toll Reaches 392+", desc: "HRANA confirms at least 392 killed in Rasht, vast majority since Jan 8 internet blackout began.", type: "humanitarian", size: "large", phase: "protests" },
  { day: 12, lat: 29.6257, lng: 52.5310, title: "Shiraz — Zand & Ostad Square", desc: "Huge crowds at Zand Intersection and Ostad Square. Live fire against demonstrators. Areas later occupied by security forces.", type: "humanitarian", phase: "protests" },
  { day: 12, lat: 31.3183, lng: 48.6706, title: "Ahvaz — Foreign Militia Deployed", desc: "Foreign militia troops gathered at base in Ahvaz before dispatch to various regions to assist in suppressing protests.", type: "humanitarian", phase: "protests" },

  // ── Day 13: Jan 10 — Kahrizak Morgue, Mohareb Charges ──
  { day: 13, lat: 35.5200, lng: 51.3800, title: "Kahrizak Morgue Overflows", desc: "Footage emerges of makeshift morgue at Legal Medicine Organization in Kahrizak. Amnesty identifies 205+ body bags. Distraught families search for loved ones.", type: "humanitarian", size: "large", phase: "protests" },
  { day: 13, lat: 35.660, lng: 51.390, title: "Protesters Labeled 'Mohareb'", desc: "Prosecutor General declares protesters 'mohareb' (waging war against God) — carrying the death penalty. Provincial prosecutors follow suit.", type: "political", size: "large", phase: "protests" },
  { day: 13, lat: 35.660, lng: 51.395, title: "Dr. Sarv-e Naz Amiri Arrested", desc: "Tehran physician Dr. Sarv-e Naz Amiri arrested for treating wounded protesters. Beginning of systematic targeting of medical workers.", type: "humanitarian", phase: "protests" },

  // ── Day 14: Jan 11 — Death Toll Tops 496 (HRANA Confirmed) ──
  { day: 14, lat: 35.660, lng: 51.400, title: "HRANA: 496 Confirmed Dead, 10,681 Arrested", desc: "HRANA confirms 496 deaths and 10,681 arrests. True toll believed far higher due to internet blackout concealing scale. Ministry of Health internal estimate: 30,000+ killed in 48 hours.", type: "humanitarian", size: "large", phase: "protests" },
  { day: 14, lat: 35.6892, lng: 51.3500, title: "Funeral Protests Erupt", desc: "Mourners at cemeteries chant 'Death to Khamenei' and 'I will kill the one who killed my brother' as massacre victims are buried.", type: "protest", phase: "protests" },

  // ── Day 15: Jan 12 — 3,428 Killed in Peak Days ──
  { day: 15, lat: 35.660, lng: 51.405, title: "Peak Violence: 3,428 Killed Jan 8-12", desc: "At least 3,428 protesters killed and 10,000+ arrested during peak of unrest Jan 8-12. Security forces continue operations.", type: "humanitarian", size: "large", phase: "protests" },

  // ── Day 16: Jan 13 — Trump Warning, Televised Mohareb ──
  { day: 16, lat: 38.9072, lng: -77.0369, title: "Trump: 'Very Strong Action' if Executions", desc: "President Trump states if protesters are executed, 'we will take very strong action' and 'help is on its way'.", type: "political", phase: "protests" },
  { day: 16, lat: 35.660, lng: 51.410, title: "Tehran Prosecutor — Mohareb on TV", desc: "Tehran prosecutor announces on national television that undisclosed number of protesters will be charged with moharebeh (death penalty offense).", type: "political", phase: "protests" },
  { day: 16, lat: 35.660, lng: 51.415, title: "Dr. Golnar Naraqi Arrested", desc: "Emergency physician Golnar Naraqi arrested and transferred to Qarchak Prison for treating protest wounded.", type: "humanitarian", phase: "protests" },

  // ── Day 17: Jan 14 — NPR: 2,500+ Dead ──
  { day: 17, lat: 35.660, lng: 51.420, title: "NPR: Death Toll Passes 2,500", desc: "NPR reports Iran crackdown death toll passes 2,500. HRANA reports 18,400+ arrested. Internet remains completely cut.", type: "humanitarian", size: "large", phase: "protests" },
  { day: 17, lat: 38.9072, lng: -77.0369, title: "Trump: 'Killing Has Stopped'", desc: "Trump says he has been told the killing has stopped and expresses 'respect' for Iran halting planned executions.", type: "political", phase: "protests" },

  // ── Day 18: Jan 15 — US Sanctions Iranian Officials ──
  { day: 18, lat: 38.9072, lng: -77.0369, title: "US Sanctions 5 Iranian Officials", desc: "US Treasury sanctions 5 Iranian officials including 2 IRGC officers for role in protest crackdown.", type: "political", phase: "protests" },
  { day: 18, lat: 32.6546, lng: 51.6779, title: "Isfahan — Hospitals Overwhelmed", desc: "Hospitals in Isfahan and Tehran continue to receive wounded. Medical staff report being unable to cope with casualties.", type: "humanitarian", phase: "protests" },

  // ── Day 19: Jan 16 — HRW: Countrywide Massacres ──
  { day: 19, lat: 40.7128, lng: -74.0060, title: "HRW: Growing Evidence of Countrywide Massacres", desc: "Human Rights Watch publishes report documenting evidence of massacres across multiple cities. Calls for international investigation.", type: "political", phase: "protests" },
  { day: 19, lat: 35.660, lng: 51.425, title: "Authorities: 3,117 Killed (Official)", desc: "Iranian authorities release official figures later (Jan 21): 3,117 deaths. Independent estimates range from HRANA's 7,007 to Iran International's 36,500.", type: "political", phase: "protests" },

  // ── Day 20: Jan 17 — Khamenei Acknowledges 'Thousands' ──
  { day: 20, lat: 35.660, lng: 51.430, title: "Khamenei: 'Thousands Killed'", desc: "In public speech, Supreme Leader Khamenei acknowledges 'thousands of people' were killed. First regime admission of massacre scale.", type: "political", size: "large", phase: "protests" },
  { day: 20, lat: 35.660, lng: 51.435, title: "HRANA: 24,669 Detained", desc: "HRANA reports 24,669 protesters detained nationwide. Systematic torture and enforced disappearances documented.", type: "humanitarian", phase: "protests" },

  // ── Day 21: Jan 18 — Brief Internet, Then Cut Again ──
  { day: 21, lat: 35.660, lng: 51.440, title: "Internet Briefly Restored, Then Cut", desc: "Limited internet access briefly restored on Jan 18 before being suspended again. Severe restrictions persist.", type: "political", phase: "protests" },
  { day: 21, lat: 35.660, lng: 51.445, title: "Regime Reasserts Control", desc: "Government assessed to have reasserted control over most protest areas. Burial sites controlled, mourning rituals restricted to prevent further unrest.", type: "political", phase: "protests" },

  // ── Day 22-23: Jan 19-20 — Ongoing Arrests ──
  { day: 22, lat: 35.660, lng: 51.450, title: "Mass Arrests Continue", desc: "Tens of thousands detained including children. Forced confessions, torture, enforced disappearances reported by Amnesty International.", type: "humanitarian", phase: "protests" },
  { day: 22, lat: 48.8566, lng: 2.3522, title: "Paris Solidarity Rally", desc: "Demonstrators rally in Paris in solidarity with Iranian protesters, urging Western governments to support the Iranian people.", type: "political", phase: "protests" },
  { day: 22, lat: 54.6872, lng: 25.2797, title: "Vilnius Solidarity Rally", desc: "Solidarity protests in Vilnius, Lithuania.", type: "political", phase: "protests" },
  { day: 22, lat: 51.5074, lng: -0.1278, title: "London Solidarity Rally", desc: "Demonstrators in London rally for Iranian protesters and urge Western support.", type: "political", phase: "protests" },

  // ── Day 24: Jan 21 — Official Death Toll ──
  { day: 24, lat: 35.660, lng: 51.455, title: "Iran's Supreme Council: 3,117 Killed", desc: "Supreme Council of National Security officially states 3,117 killed. HRANA's documented count: 7,007. Iran International's leaked documents: 36,500+.", type: "political", size: "large", phase: "protests" },

  // ── Day 25: Jan 22 — US Additional Sanctions ──
  { day: 25, lat: 38.9072, lng: -77.0369, title: "US Announces Additional Sanctions", desc: "Second round of US sanctions on Jan 23 targeting additional Iranian security officials responsible for protest crackdown.", type: "political", phase: "protests" },

  // ── Day 27: Jan 24 — Internet Briefly Returns ──
  { day: 27, lat: 35.660, lng: 51.460, title: "Internet Connections Briefly Detected", desc: "First internet connections from Iran briefly detected on Jan 24. Full blackout had lasted 16 days.", type: "political", phase: "protests" },

  // ── Day 28: Jan 25 — Iran International Leak ──
  { day: 28, lat: 35.660, lng: 51.465, title: "Leaked Documents: 36,500+ Killed", desc: "Iran International publishes leaked documents suggesting 36,500+ killed in Jan 8-9 crackdown — deadliest two-day protest massacre in modern history.", type: "humanitarian", size: "large", phase: "protests" },

  // ── Day 29: Jan 26 — UN Fact-Finding Mission ──
  { day: 29, lat: 46.2044, lng: 6.1432, title: "UN Fact-Finding Mission Statement", desc: "UN Fact-Finding Mission calls for immediate restoration of internet and adherence to international human rights law.", type: "political", phase: "protests" },

  // ── Day 31: Jan 28 — Internet Blackout Relaxed ──
  { day: 31, lat: 35.660, lng: 51.470, title: "Internet Blackout Partially Relaxed", desc: "Blackout relaxed on Jan 28 after 20 days. Severe restrictions remain — whitelist system only allows pre-approved websites. Cost to economy: $35.7M/day.", type: "political", phase: "protests" },

  // ── Day 32: Jan 29 — EU Proscribes IRGC ──
  { day: 32, lat: 50.8503, lng: 4.3517, title: "EU Proscribes IRGC", desc: "EU announces proscription of the Islamic Revolutionary Guard Corps. EU also sanctions 15 top officials and 6 organizations for 'serious human rights violations'.", type: "political", size: "large", phase: "protests" },

  // ── Day 33+: Jan 30-Feb — HRANA Final Report ──
  { day: 33, lat: 35.660, lng: 51.475, title: "HRANA: 51,790 Arrested Total", desc: "HRANA reports 51,790 total arrests. 7,007 deaths confirmed by name (6,488 adult protesters, 236 minors, 207 security, 76 bystanders). 11,744 additional cases under review.", type: "humanitarian", size: "large", phase: "protests" },

  // ═══════════════════════════════════════════════════════════════
  // ═══════════════════════════════════════════════════════════════
  // PHASE 2: FEBRUARY BUILDUP (Feb 1-27, 2026) — Days 35-61
  // ═══════════════════════════════════════════════════════════════
  { day: 35, lat: 38.87, lng: -77.06, title: "IDF Chief Zamir at Pentagon", desc: "Secret talks with Gen. Caine (CJCS) and CENTCOM chief Adm. Cooper on Iran strike options.", type: "political", size: "large", phase: "regional" },
  { day: 37, lat: 26.56, lng: 56.25, title: "IRGC Attempts to Seize US Tanker", desc: "IRGCN boats try to board US-flagged MV Stena Imperative in Strait of Hormuz. USS McFaul escorts to safety.", type: "naval", phase: "regional" },
  { day: 37, lat: 23.50, lng: 59.50, title: "F-35C Downs Iranian Drone", desc: "Marine F-35C from USS Abraham Lincoln shoots down Shahed-139 approaching carrier in Arabian Sea.", type: "naval", phase: "regional" },
  { day: 40, lat: 23.61, lng: 58.59, title: "Iran-US Indirect Talks in Muscat", desc: "First Oman-mediated nuclear talks. FM Araghchi and envoy Witkoff lead delegations. 'A good start.'", type: "political", phase: "regional" },
  { day: 44, lat: 33.73, lng: 51.73, title: "Natanz Fortification Detected", desc: "Satellite imagery shows Iran hardening tunnel entrances with concrete, soil, and cement mixers.", type: "nuclear", phase: "regional" },
  { day: 45, lat: 35.7, lng: 51.45, title: "47th Revolution Anniversary", desc: "State-organized rallies with 'Death to America' chants. Anti-government slogans from homes overnight.", type: "political", phase: "regional" },
  { day: 47, lat: 36.85, lng: -76.30, title: "USS Gerald R. Ford Ordered to ME", desc: "Trump orders carrier redeployed from Venezuela to Middle East. CSG-12 begins transit.", type: "naval", size: "large", phase: "regional" },
  { day: 47, lat: 38.90, lng: -77.04, title: "Trump: Regime Change 'Best Thing'", desc: "States regime change would be 'the best thing that could happen,' escalating rhetoric.", type: "political", phase: "regional" },
  { day: 48, lat: 38.87, lng: -77.06, title: "Pentagon Plans Weeks-Long Ops", desc: "Officials tell Reuters military preparing for potentially weeks-long sustained operations.", type: "political", size: "large", phase: "regional" },
  { day: 48, lat: 48.14, lng: 11.58, title: "250,000 Protest in Munich", desc: "Massive Iranian diaspora rally at Munich Security Conference demands regime change.", type: "political", phase: "regional" },
  { day: 50, lat: 26.56, lng: 56.25, title: "IRGC 'Smart Control' Drills", desc: "Live-fire naval exercises in Strait of Hormuz. Anti-ship missiles fired. Strait briefly closed.", type: "naval", size: "large", phase: "regional" },
  { day: 50, lat: 31.83, lng: 36.78, title: "THAAD Deployed to Jordan", desc: "THAAD battery at Muwaffaq Salti Air Base. Patriot batteries across Gulf.", type: "naval", phase: "regional" },
  { day: 50, lat: 52.41, lng: 0.56, title: "18 F-35s Depart RAF Lakenheath", desc: "48th Fighter Wing deploys toward Middle East with aerial refueling tankers.", type: "naval", phase: "regional" },
  { day: 51, lat: 35.81, lng: 51.43, title: "Khamenei: 'US Warships Could Be Sunk'", desc: "Warns warships could go 'to bottom of the sea.' State TV airs AI simulation of Lincoln sinking.", type: "political", size: "large", phase: "regional" },
  { day: 51, lat: 25.30, lng: 57.80, title: "Russia-China-Iran Naval Drills", desc: "'Maritime Security Belt 2026' in Strait of Hormuz. IRGCN fires Sayyad-3G from VLS.", type: "naval", phase: "regional" },
  { day: 51, lat: 46.22, lng: 6.14, title: "Geneva Round 2: 'Good Progress'", desc: "Second Oman-mediated talks. Araghchi hails progress but key differences remain.", type: "political", phase: "regional" },
  { day: 52, lat: 32.65, lng: 51.68, title: "Isfahan Nuclear Site Hardening", desc: "Satellite shows tunnel entrances buried under 'concrete sarcophagi' to resist bunker-busters.", type: "nuclear", phase: "regional" },
  { day: 53, lat: 25.28, lng: 55.36, title: "Largest Buildup Since 2003", desc: "US military presence described as largest in Middle East since 2003 Iraq invasion.", type: "naval", size: "large", phase: "regional" },
  { day: 54, lat: 35.98, lng: -5.60, title: "USS Ford Crosses Gibraltar", desc: "Ford CSG transits Strait of Gibraltar with destroyers Churchill, Bainbridge, Mahan.", type: "naval", phase: "regional" },
  { day: 54, lat: 38.90, lng: -77.04, title: "Trump Issues 10-Day Deadline", desc: "Gives Iran 10-15 days to make a 'meaningful deal' or face military action.", type: "political", size: "large", phase: "regional" },
  { day: 55, lat: 35.73, lng: 51.44, title: "University Protests Restart", desc: "Anti-government wave restarts at Iranian universities despite ongoing crackdown.", type: "political", phase: "regional" },
  { day: 57, lat: 38.90, lng: -77.04, title: "Netanyahu-Trump Call: Khamenei Location", desc: "Netanyahu tells Trump Khamenei and advisors will gather at one location Feb 28. CIA confirms. War set in motion.", type: "political", size: "large", phase: "regional" },
  { day: 58, lat: 38.90, lng: -77.04, title: "State of the Union: Iran Ultimatum", desc: "Trump accuses Iran of reviving nuclear weapons. 'We will never allow Iran to have a nuclear weapon.'", type: "political", size: "large", phase: "regional" },
  { day: 58, lat: 29.94, lng: 34.94, title: "F-22 Raptors Deploy to Israel", desc: "12 F-22s land at Ovda Airbase — first-ever US offensive combat deployment in Israel.", type: "naval", size: "large", phase: "regional" },
  { day: 59, lat: 35.69, lng: 51.39, title: "Araghchi: Deal 'Within Reach'", desc: "Iranian FM says 'historic' agreement to avert war is 'within reach' if diplomacy prioritized.", type: "political", phase: "regional" },
  { day: 59, lat: 38.90, lng: -77.04, title: "New US Sanctions on Iran Oil Ships", desc: "Sanctions targeting ships selling Iranian oil to fund ballistic missile program.", type: "political", phase: "regional" },
  { day: 60, lat: 46.22, lng: 6.14, title: "Geneva Round 3: No Deal", desc: "Americans leave disappointed. Oman claims 'significant progress.' Technical talks planned.", type: "political", size: "large", phase: "regional" },
  { day: 60, lat: 35.00, lng: 25.00, title: "Ford CSG Enters Eastern Med", desc: "Dual-carrier presence operational with Lincoln in Arabian Sea.", type: "naval", phase: "regional" },
  { day: 60, lat: 25.28, lng: 55.36, title: "Largest Naval Force in Decades", desc: "Two CSGs, AWACS, tankers, stealth fighters in position. Military Times: largest in decades.", type: "naval", size: "large", phase: "regional" },
  { day: 60, lat: -7.31, lng: 72.41, title: "F-16s Deploy to Diego Garcia", desc: "Fighters, tankers, transports confirmed at Diego Garcia to protect Indian Ocean outpost.", type: "naval", phase: "regional" },
  { day: 61, lat: 48.22, lng: 16.37, title: "IAEA: No Verification Access", desc: "No access to any enrichment facility. Cannot verify stockpile. 60% HEU at Isfahan tunnels.", type: "nuclear", size: "large", phase: "regional" },
  { day: 61, lat: 23.61, lng: 58.59, title: "Oman Claims 'Breakthrough' Deal", desc: "FM Al-Busaidi says Iran agreed to IAEA verification. Announced hours before strikes begin.", type: "political", phase: "regional" },
  { day: 61, lat: 38.73, lng: -93.55, title: "B-2 Spirits Prepare at Whiteman", desc: "Stealth bombers prepare for 37-hour round-trip missions with GBU-57 Massive Ordnance Penetrators.", type: "naval", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // PHASE 3: OPERATION EPIC FURY — FEB 28 (Day 62)
  // ═══════════════════════════════════════════════════════════════
  // Tehran targets
  { day: 62, lat: 35.80, lng: 51.43, title: "Leadership House — Khamenei Killed", desc: "IAF decapitation strike destroys Supreme Leader's compound. Khamenei and senior aides killed.", type: "strike", size: "large", phase: "war" },
  { day: 62, lat: 35.70, lng: 51.38, title: "Basij HQ Destroyed", desc: "Basij paramilitary headquarters leveled in eastern Tehran.", type: "strike", phase: "war" },
  { day: 62, lat: 35.72, lng: 51.44, title: "IRGC Command Center Hit", desc: "IRGC Malek-Ashtar building destroyed by cruise missiles.", type: "strike", phase: "war" },
  { day: 62, lat: 35.70, lng: 51.41, title: "Ministry of Intelligence", desc: "MOIS headquarters struck by cruise missiles.", type: "strike", phase: "war" },
  { day: 62, lat: 35.72, lng: 51.39, title: "Ministry of Defence", desc: "Defence ministry complex destroyed.", type: "strike", phase: "war" },
  { day: 62, lat: 35.69, lng: 51.64, title: "Khojir Missile Center", desc: "Surface-to-surface and SAM component production facility east of Tehran.", type: "strike", phase: "war" },
  { day: 62, lat: 35.69, lng: 51.42, title: "IRGC Solid-Fuel Plant", desc: "Main solid-fuel missile production facility destroyed.", type: "strike", phase: "war" },
  { day: 62, lat: 35.76, lng: 51.49, title: "Malek Ashtar University", desc: "IRGC ballistic missile and nuclear component R&D center leveled.", type: "nuclear", phase: "war" },
  { day: 62, lat: 35.70, lng: 51.40, title: "AEOI Headquarters", desc: "Atomic Energy Organization of Iran headquarters struck.", type: "nuclear", phase: "war" },
  { day: 62, lat: 35.71, lng: 51.41, title: "IRIB State TV HQ", desc: "State broadcaster headquarters struck by Israeli air operation.", type: "strike", phase: "war" },
  // Nuclear facilities
  { day: 62, lat: 33.73, lng: 51.73, title: "Natanz Struck", desc: "B-2 Spirit bombers drop GBU-57 bunker busters on primary enrichment site.", type: "nuclear", size: "large", phase: "war" },
  { day: 62, lat: 34.89, lng: 51.99, title: "Fordow Struck", desc: "12 Massive Ordnance Penetrators dropped on deeply buried facility.", type: "nuclear", size: "large", phase: "war" },
  { day: 62, lat: 32.65, lng: 51.68, title: "Isfahan Nuclear Center", desc: "Tomahawks destroy Isfahan Nuclear Technology Center.", type: "nuclear", size: "large", phase: "war" },
  { day: 62, lat: 34.38, lng: 49.24, title: "Arak Reactor", desc: "Heavy water reactor facility struck.", type: "nuclear", phase: "war" },
  { day: 62, lat: 35.52, lng: 51.77, title: "Parchin Complex", desc: "IAF hits nuclear weapons research facility at Parchin-Taleghan.", type: "nuclear", phase: "war" },
  // Military bases across Iran
  { day: 62, lat: 32.62, lng: 51.69, title: "Isfahan: 8th TAB Airbase", desc: "12+ munitions on Artesh Air Force 8th Tactical Airbase.", type: "strike", phase: "war" },
  { day: 62, lat: 32.66, lng: 51.72, title: "Isfahan: IRGC Badr Base", desc: "IRGC Aerospace Force base at Isfahan Airport destroyed.", type: "strike", phase: "war" },
  { day: 62, lat: 29.62, lng: 52.53, title: "Shiraz: Fajr Division Base", desc: "Airstrike on IRGC Fajr Division base.", type: "strike", phase: "war" },
  { day: 62, lat: 38.07, lng: 46.30, title: "Tabriz Military Base", desc: "IRGC and Basij facilities struck.", type: "strike", phase: "war" },
  { day: 62, lat: 36.67, lng: 48.49, title: "Zanjan Base", desc: "Military installations targeted.", type: "strike", phase: "war" },
  { day: 62, lat: 34.80, lng: 48.52, title: "Hamadan Airbase", desc: "Strikes on military airbase.", type: "strike", phase: "war" },
  { day: 62, lat: 35.84, lng: 50.94, title: "Karaj IRGC Facility", desc: "IRGC facility near Karaj destroyed.", type: "strike", phase: "war" },
  { day: 62, lat: 31.32, lng: 48.67, title: "Ahvaz Military Complex", desc: "IRGC and police installations struck.", type: "strike", phase: "war" },
  { day: 62, lat: 33.64, lng: 46.42, title: "Ilam Military Base", desc: "IRGC base targeted.", type: "strike", phase: "war" },
  { day: 62, lat: 35.32, lng: 46.99, title: "Sanandaj Base", desc: "Military installations in Kurdistan province struck.", type: "strike", phase: "war" },
  { day: 62, lat: 29.50, lng: 60.86, title: "Zahedan IRGC Base", desc: "IRGC facility in Sistan-Baluchestan.", type: "strike", phase: "war" },
  { day: 62, lat: 31.90, lng: 54.37, title: "Yazd Military Site", desc: "Basij and IRGC installations struck.", type: "strike", phase: "war" },
  { day: 62, lat: 35.59, lng: 53.40, title: "Semnan Missile Base", desc: "Missile production/storage facility targeted.", type: "strike", phase: "war" },
  { day: 62, lat: 36.27, lng: 59.62, title: "Mashhad IRGC Facility", desc: "IRGC headquarters and Basij base struck.", type: "strike", phase: "war" },
  { day: 62, lat: 34.31, lng: 47.07, title: "Kermanshah Missile Base", desc: "Panj Pelleh underground base storing Qiam-1 and Fateh-110 missiles.", type: "strike", phase: "war" },
  { day: 62, lat: 37.55, lng: 45.08, title: "Urmia Military Targets", desc: "Military installations in West Azerbaijan struck.", type: "strike", phase: "war" },
  { day: 62, lat: 34.64, lng: 50.88, title: "Qom Military Sites", desc: "Explosions near military installations in Qom.", type: "strike", phase: "war" },
  { day: 62, lat: 35.71, lng: 52.05, title: "Damavand Facility", desc: "Military targets near Damavand struck.", type: "strike", phase: "war" },
  // Naval targets
  { day: 62, lat: 28.97, lng: 50.84, title: "Bushehr Naval Base", desc: "Naval infrastructure and vessels destroyed.", type: "naval", phase: "war" },
  { day: 62, lat: 27.15, lng: 56.28, title: "Bandar Abbas Naval Base", desc: "IRGC Navy HQ, IRIN Forward Southern Fleet HQ struck. Kilo-class sub likely sunk.", type: "naval", phase: "war" },
  { day: 62, lat: 25.29, lng: 60.64, title: "Chabahar Naval Base", desc: "IRGC Imam Ali base destroyed. IRIS Jamaran sunk. Iran's only deep-water Indian Ocean port.", type: "naval", phase: "war" },
  { day: 62, lat: 25.35, lng: 57.78, title: "Jask Naval Facility", desc: "IRGC Navy forward base struck.", type: "naval", phase: "war" },
  { day: 62, lat: 25.58, lng: 57.78, title: "Konarak Naval Base", desc: "IRIN 3rd Naval District HQ destroyed. IRIS Bayandor and Naghdi sunk.", type: "naval", phase: "war" },
  { day: 62, lat: 26.53, lng: 54.88, title: "Bandar Lengeh Port", desc: "IRGC naval forward port on Strait of Hormuz destroyed.", type: "naval", phase: "war" },
  // Retaliation — Israel
  { day: 62, lat: 32.10, lng: 34.79, title: "Tel Aviv Missile Hit", desc: "Iranian retaliatory missile strikes Tel Aviv. 1 killed, 22 injured.", type: "retaliation", phase: "war" },
  // Retaliation — Gulf states
  { day: 62, lat: 26.23, lng: 50.59, title: "Bahrain Under Fire", desc: "Missiles at US Fifth Fleet HQ. Drone hits Crowne Plaza hotel.", type: "retaliation", phase: "regional" },
  { day: 62, lat: 25.12, lng: 56.34, title: "Fujairah Port — UAE", desc: "IRGC ballistic missiles hit Fujairah port. Oil tanks burning.", type: "retaliation", phase: "regional" },
  // Naval sinking
  { day: 62, lat: 6.03, lng: 80.22, title: "IRIS Dena Sunk", desc: "US submarine sinks Iranian warship off Sri Lanka. 87 crew killed.", type: "naval", phase: "war" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 1 (Day 63)
  // ═══════════════════════════════════════════════════════════════
  { day: 63, lat: 31.73, lng: 35.00, title: "Beit Shemesh — 9 Dead", desc: "Missile destroys synagogue and bomb shelter. 9 killed including 3 teenage siblings, 49 injured.", type: "retaliation", size: "large", phase: "war" },
  { day: 63, lat: 31.77, lng: 35.23, title: "Jerusalem Struck", desc: "Ballistic missile hits Jerusalem area. 6 wounded.", type: "retaliation", phase: "war" },
  { day: 63, lat: 35.660, lng: 51.480, title: "Top Officials Confirmed Dead", desc: "Chief of Staff Mousavi, ex-president Ahmadinejad killed in strikes.", type: "strike", phase: "war" },
  { day: 63, lat: 35.82, lng: 51.42, title: "Saadabad Palace Area Struck", desc: "Large explosions near Saadabad Palace complex, north Tehran.", type: "strike", phase: "war" },
  { day: 63, lat: 34.37, lng: 47.07, title: "Imam Ali Missile Base — Kermanshah", desc: "US-Israel strike destroys Imam Ali ballistic missile base.", type: "strike", phase: "war" },
  { day: 63, lat: 38.08, lng: 46.29, title: "Fighter Jets Destroyed — Tabriz", desc: "Strikes destroy Iranian fighter jets at Tabriz air base.", type: "strike", phase: "war" },
  { day: 63, lat: 29.08, lng: 48.08, title: "6 US Troops Killed — Kuwait", desc: "Iranian Shahed-136 kamikaze drone hits tactical operations center at Port of Shuaiba.", type: "retaliation", phase: "regional" },
  { day: 63, lat: 35.8, lng: 51.4, title: "Interim Leadership Council Formed", desc: "Iran establishes Interim Leadership Council following Khamenei's assassination.", type: "political", phase: "war" },
  { day: 63, lat: 26.56, lng: 56.25, title: "Hormuz Closure Begins", desc: "IRGC warns all vessels against Strait passage. Maritime traffic plummets.", type: "naval", size: "large", phase: "regional" },
  { day: 63, lat: 21.49, lng: 59.83, title: "Iranian Drones Strike Duqm — Oman", desc: "Iran launches drone strikes on Port of Duqm, Oman, targeting US-used facilities.", type: "retaliation", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 2 (Day 64)
  // ═══════════════════════════════════════════════════════════════
  { day: 64, lat: 35.660, lng: 51.485, title: "IRGC Building Flattened", desc: "Video confirms total destruction of IRGC compound in Tehran.", type: "strike", phase: "war" },
  { day: 64, lat: 35.71, lng: 51.38, title: "20 Civilians Killed — Niloofar Square", desc: "Iranian state media reports 20 civilians killed at Tehran's Niloofar Square from strikes.", type: "humanitarian", phase: "war" },
  { day: 64, lat: 33.89, lng: 35.50, title: "Hezbollah Opens Front", desc: "Hezbollah launches missiles/drones at Israel. Israel strikes Beirut.", type: "hezbollah", size: "large", phase: "regional" },
  { day: 64, lat: 32.82, lng: 34.99, title: "Haifa Air Raid Sirens", desc: "Hezbollah rocket salvos trigger sirens across Haifa and Upper Galilee.", type: "hezbollah", phase: "regional" },
  { day: 64, lat: 33.89, lng: 45.96, title: "PJAK Kurdish Offensive into Iran", desc: "Thousands of Kurdish fighters launch ground offensive from Iraq into Iranian territory.", type: "strike", phase: "regional" },
  { day: 64, lat: 26.24, lng: 50.65, title: "Stena Imperative Hit — Bahrain", desc: "US-flagged tanker struck twice at Port of Bahrain. 1 port worker killed.", type: "naval", phase: "regional" },
  { day: 64, lat: 26.56, lng: 56.25, title: "Athe Nova Hit by Drones — Hormuz", desc: "Honduras-flagged tanker struck by two IRGC drones in Strait of Hormuz and set ablaze.", type: "naval", phase: "regional" },
  { day: 64, lat: 26.56, lng: 56.40, title: "IRGC Declares Strait Closed", desc: "Tanker traffic begins 70% decline; 150+ ships anchor outside strait.", type: "naval", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 3 (Day 65)
  // ═══════════════════════════════════════════════════════════════
  { day: 65, lat: 35.660, lng: 51.490, title: "Assembly of Experts Bombed", desc: "Israel bombs 84-member Assembly of Experts during session on supreme leader election.", type: "strike", phase: "war" },
  { day: 65, lat: 35.71, lng: 51.4, title: "SNSC Headquarters Destroyed", desc: "Supreme National Security Council headquarters in Tehran destroyed.", type: "strike", phase: "war" },
  { day: 65, lat: 34.32, lng: 47.10, title: "Mahidasht Drone Base", desc: "Satellite confirms strikes on IRGC drone base west of Kermanshah.", type: "strike", phase: "war" },
  { day: 65, lat: 38.07, lng: 46.30, title: "Basij Checkpoint Struck — Tabriz", desc: "13 fighters killed, 18 injured at Basij checkpoint.", type: "strike", phase: "war" },
  { day: 65, lat: 35.73, lng: 51.43, title: "Red Crescent: 600+ Civilians Killed", desc: "Iranian Red Crescent reports over 600 civilians killed since Feb 28.", type: "humanitarian", phase: "war" },
  { day: 65, lat: 33.27, lng: 35.20, title: "Israel Authorizes Lebanon Invasion", desc: "Defense Minister authorizes IDF ground invasion of Lebanon.", type: "political", phase: "regional" },
  { day: 65, lat: 32.09, lng: 34.84, title: "Bnei Brak Shrapnel", desc: "Iranian missile fragments injure 7 in residential area.", type: "retaliation", phase: "war" },
  { day: 65, lat: 32.10, lng: 34.96, title: "Rosh HaAyin Hit", desc: "Iranian strikes cause injuries.", type: "retaliation", phase: "war" },
  { day: 65, lat: 25.25, lng: 55.37, title: "Dubai Airport Briefly Closed", desc: "Airport closed after intercept attempt. Smoke visible over city.", type: "retaliation", phase: "regional" },
  { day: 65, lat: 26.16, lng: 50.61, title: "Sitra Drone Attack — Bahrain", desc: "32 Bahraini citizens injured including children.", type: "retaliation", phase: "regional" },
  { day: 65, lat: 32.79, lng: 34.99, title: "100+ Missiles at Haifa", desc: "Hezbollah fires ~100 missiles and drone swarm at Israeli military base.", type: "hezbollah", phase: "regional" },
  { day: 65, lat: 21.49, lng: 59.83, title: "Duqm Fuel Tank Hit Again — Oman", desc: "More drones hit Duqm Port. Oman intercepts drones in Dhofar.", type: "retaliation", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 4 (Day 66)
  // ═══════════════════════════════════════════════════════════════
  { day: 66, lat: 33.31, lng: 35.56, title: "Hezbollah Anti-Tank — Margaliot", desc: "Anti-tank missile kills 1 Indian national, injures 7.", type: "hezbollah", phase: "regional" },
  { day: 66, lat: 33.85, lng: 35.49, title: "Dahiyeh Strikes — Beirut", desc: "Heavy Israeli strikes on Hezbollah's Dahiyeh stronghold.", type: "strike", phase: "regional" },
  { day: 66, lat: 6.00, lng: 80.50, title: "IRIS Dena Torpedoed — Sri Lanka", desc: "USS Charlotte torpedoes frigate. Ship sinks in 2-3 min. ~87 killed. First US submarine kill since WWII.", type: "naval", size: "large", phase: "war" },
  { day: 66, lat: 26.26, lng: 56.41, title: "Safeen Prestige Hit — Hormuz", desc: "Malta-flagged container ship hit by missile. 24 crew rescued by Royal Oman Navy.", type: "naval", phase: "regional" },
  { day: 66, lat: 32.01, lng: 34.89, title: "Ben Gurion Airport Struck", desc: "3 private planes damaged by missile strike near airport.", type: "retaliation", phase: "war" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 5 (Day 67)
  // ═══════════════════════════════════════════════════════════════
  { day: 67, lat: 29.22, lng: 48.10, title: "Tanker Sonangol Namibe Hit — Kuwait", desc: "Iranian kamikaze drone boat strikes oil tanker anchored near Mubarak Al Kabeer Port.", type: "naval", phase: "regional" },
  { day: 67, lat: 26.55, lng: 56.25, title: "IRGC: Hormuz Closed to Western Ships", desc: "Strait closed only to US, Israel, and Western allies. Others may transit.", type: "naval", phase: "regional" },
  { day: 67, lat: 38.89, lng: -77.01, title: "House Rejects War Powers Resolution", desc: "US House narrowly rejects Iran war powers resolution 212-219.", type: "political", phase: "war" },
  { day: 67, lat: 35.68, lng: 51.48, title: "Iran: 500+ Missiles Fired Since Feb 28", desc: "Fars News: 500+ ballistic/naval missiles and ~2,000 drones fired at targets.", type: "retaliation", phase: "war" },
  { day: 67, lat: 31.50, lng: 35.00, title: "Moshav Adanim Casualty", desc: "Thai foreign worker killed by shrapnel.", type: "retaliation", phase: "war" },
  { day: 67, lat: 29.35, lng: 47.52, title: "Ali al-Salem Air Base — Kuwait", desc: "Ballistic missiles fired at US air base. All intercepted.", type: "retaliation", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 6 (Day 68)
  // ═══════════════════════════════════════════════════════════════
  { day: 68, lat: 35.76, lng: 51.41, title: "B-2s Strike Buried Launchers — Tehran", desc: "US B-2 stealth bombers drop dozens of 2,000lb GPS-guided penetrating munitions.", type: "strike", phase: "war" },
  { day: 68, lat: 32.65, lng: 51.68, title: "IDF Strikes 200 Targets Incl. Isfahan", desc: "Over 24 hours IDF strikes ~200 targets across western and central Iran.", type: "strike", phase: "war" },
  { day: 68, lat: 34.60, lng: 32.90, title: "Cyprus RAF Base — Drone Hit", desc: "Iranian drone strikes UK RAF Akrotiri runway in Cyprus.", type: "retaliation", phase: "regional" },
  { day: 68, lat: 29.35, lng: 47.97, title: "7 Drones Target Kuwait Airport", desc: "Seven Iranian drones target Kuwait airport; all intercepted.", type: "retaliation", phase: "regional" },
  { day: 68, lat: 26.60, lng: 56.30, title: "Tugboat Sunk — Hormuz", desc: "Tugboat assisting Safeen Prestige hit by two missiles. 3 crew missing.", type: "naval", phase: "regional" },
  { day: 68, lat: 33.85, lng: 36.00, title: "Beqaa Valley Strikes", desc: "Israeli jets hit Hezbollah weapons depots.", type: "strike", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 7 (Day 69)
  // ═══════════════════════════════════════════════════════════════
  { day: 69, lat: 35.78, lng: 51.47, title: "Tehran Oil Depots Hit — Black Rain", desc: "Israeli strikes hit 3 oil depots. Thick toxic smoke blankets city. Residents report acid black rain.", type: "strike", size: "large", phase: "war" },
  { day: 69, lat: 35.84, lng: 51.00, title: "Karaj Oil Depot Struck", desc: "First strikes on Iranian oil infrastructure since war began.", type: "strike", phase: "war" },
  { day: 69, lat: 32.65, lng: 51.68, title: "Isfahan Oil Facilities Hit", desc: "Multiple oil facilities in Isfahan struck. Fires blanket area.", type: "strike", phase: "war" },
  { day: 69, lat: 28.83, lng: 51.58, title: "Projectile Near Bushehr Nuclear Plant", desc: "Projectile struck 350m from reactor. No radioactive leakage. Iran reports to IAEA.", type: "strike", phase: "war" },
  { day: 69, lat: 26.77, lng: 55.90, title: "Qeshm Island Desalination Plant", desc: "Water plant damaged, affecting 30 villages. US denies targeting civilians.", type: "humanitarian", phase: "war" },
  { day: 69, lat: 26.22, lng: 50.55, title: "Iran Hits Bahrain Desalination Plant", desc: "Bahrain accuses Iran of damaging desalination plant. 3 injured.", type: "retaliation", phase: "regional" },
  { day: 69, lat: 35.660, lng: 51.495, title: "Red Crescent: Acid Rain Warning", desc: "Toxic hydrocarbons, sulphur, nitrogen oxides. Rainfall causing skin burns and lung damage.", type: "humanitarian", phase: "war" },
  { day: 69, lat: 35.68, lng: 51.45, title: "IAF: 400+ Targets Over Weekend", desc: "1,465 munitions dropped on regime military sites across March 6-7.", type: "strike", phase: "war" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 8 (Day 70)
  // ═══════════════════════════════════════════════════════════════
  { day: 70, lat: 35.81, lng: 51.42, title: "Mojtaba Khamenei Named Supreme Leader", desc: "Elected to replace his father. Some Iranians chant 'Death to Mojtaba' from windows.", type: "political", size: "large", phase: "war" },
  { day: 70, lat: 26.56, lng: 56.40, title: "Oil Hits $100/Barrel", desc: "Brent crude surpasses $100 first time in 4 years. Eventually peaks at $126.", type: "naval", phase: "regional" },
  { day: 70, lat: 29.50, lng: 48.20, title: "Sonangol Namibe — Drone Boat off Kuwait", desc: "Crude tanker struck by explosive-laden remote boat. 800km from Hormuz — major range escalation.", type: "naval", phase: "regional" },
  { day: 70, lat: 33.20, lng: 35.40, title: "50 S. Lebanon Villages Struck", desc: "Israel issues evacuation orders and strikes 50 villages.", type: "strike", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 9 (Day 71)
  // ═══════════════════════════════════════════════════════════════
  { day: 71, lat: 32.03, lng: 34.89, title: "Yehud Cluster Bomb — 2 Killed", desc: "Two construction workers killed by Iranian cluster munition submunitions.", type: "retaliation", phase: "war" },
  { day: 71, lat: 35.74, lng: 51.47, title: "IRGC Quds Force HQ Struck — Tehran", desc: "IAF strikes Quds Force HQ with 170+ munitions across Tehran, Isfahan, Shiraz.", type: "strike", phase: "war" },
  { day: 71, lat: 26.24, lng: 50.55, title: "Millennium Tower Hit — Manama", desc: "Iranian drone hits Millennium Tower in Bahrain capital. 1 killed, 8 injured.", type: "retaliation", phase: "regional" },
  { day: 71, lat: 37.07, lng: 37.38, title: "NATO Intercepts Missile Over Turkey", desc: "Second ballistic missile intercepted over Turkish airspace near Gaziantep.", type: "retaliation", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 10 (Day 72)
  // ═══════════════════════════════════════════════════════════════
  { day: 72, lat: 35.66, lng: 51.38, title: "Most Intense Overnight Strikes — Tehran", desc: "Most intense strikes since war began. Airstrikes in 8+ districts across Tehran Province.", type: "strike", size: "large", phase: "war" },
  { day: 72, lat: 27.19, lng: 56.28, title: "Bandar Abbas Airbase Struck", desc: "9th Tactical Airbase hit. Smoke rising from airbase.", type: "strike", phase: "war" },
  { day: 72, lat: 24.09, lng: 52.65, title: "Ruwais Refinery — Abu Dhabi", desc: "Iranian drones hit ADNOC Ruwais refinery (922k bbl/day). Fire breaks out. UAE intercepted 8/9 missiles, 26/35 drones.", type: "retaliation", size: "large", phase: "regional" },
  { day: 72, lat: 35.72, lng: 51.36, title: "Iran Claims 1,332 Civilian Deaths", desc: "Iran's UN Ambassador states at least 1,332 Iranian civilians killed since Feb 28.", type: "humanitarian", phase: "war" },
  { day: 72, lat: 26.56, lng: 56.40, title: "Iran Begins Mining Hormuz", desc: "US intelligence reports Iran laying naval mines. A few dozen mines placed.", type: "naval", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 11 (Day 73)
  // ═══════════════════════════════════════════════════════════════
  { day: 73, lat: 51.68, lng: -1.79, title: "B-1 & B-52 Bombers Deploy to UK", desc: "11 B-1 and 3 B-52 bombers deployed to RAF Fairford for Iran operations.", type: "strike", phase: "war" },
  { day: 73, lat: 26.27, lng: 50.63, title: "Bahrain Airport Fuel Tanks Hit", desc: "Iranian drones set fuel tanks on fire. Bahrain intercepts 114 missiles, 190 drones.", type: "retaliation", phase: "regional" },
  { day: 73, lat: 26.40, lng: 56.30, title: "Mayuree Naree Set Ablaze — Hormuz", desc: "Thai cargo ship hit. Fire breaks out. 20 crew rescued, 3 missing.", type: "naval", phase: "regional" },
  { day: 73, lat: 26.30, lng: 56.20, title: "Express Room Hit — Hormuz", desc: "Liberian container ship struck by Iranian projectiles.", type: "naval", phase: "regional" },
  { day: 73, lat: 25.50, lng: 55.50, title: "ONE Majesty Damaged Off UAE", desc: "Japanese container ship sustains damage from unidentified projectile.", type: "naval", phase: "regional" },
  { day: 73, lat: 17.02, lng: 54.09, title: "Salalah Port Drones — Oman", desc: "Iranian drones strike Salalah Port. Two fuel tanks set on fire.", type: "retaliation", phase: "regional" },
  { day: 73, lat: 33.32, lng: 35.45, title: "Hezbollah Fires 220 Munitions", desc: "36 attack waves. ~220 munitions launched from Lebanon overnight.", type: "hezbollah", phase: "regional" },
  { day: 73, lat: 35.67, lng: 51.44, title: "IDF: 300 Missile Launchers Destroyed", desc: "~60% of Iran's total ballistic missile launcher stockpile eliminated.", type: "strike", phase: "war" },
  { day: 73, lat: 48.00, lng: 2.00, title: "IEA Releases Record 400M Barrels", desc: "International Energy Agency agrees to release record oil reserves.", type: "political", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 12 (Day 74)
  // ═══════════════════════════════════════════════════════════════
  { day: 74, lat: 35.72, lng: 51.33, title: "Hakimabad Garrison Struck — Tehran", desc: "IRGC 20th Ramezan Independent Armored Brigade hit.", type: "strike", phase: "war" },
  { day: 74, lat: 30.34, lng: 57.07, title: "Kerman Airport — Aircraft Destroyed", desc: "Il-76, C-130, P-3 Orion destroyed. 13 soldiers killed at Kerman base.", type: "strike", phase: "war" },
  { day: 74, lat: 28.97, lng: 50.84, title: "Bushehr Air Base Struck", desc: "Air base in Bushehr hit in broader attack wave.", type: "strike", phase: "war" },
  { day: 74, lat: 26.55, lng: 53.35, title: "Sirik Naval Base Struck", desc: "Naval base in Hormozgan Province destroyed.", type: "naval", phase: "war" },
  { day: 74, lat: 27.08, lng: 56.46, title: "Hormuz Island Base Struck", desc: "Military base on Hormuz Island hit.", type: "strike", phase: "war" },
  { day: 74, lat: 30.34, lng: 48.28, title: "Abadan Refinery Area Struck", desc: "Strike near oil refinery in Khuzestan Province.", type: "strike", phase: "war" },
  { day: 74, lat: 33.67, lng: 48.27, title: "Borujerd Special Forces HQ", desc: "Special forces HQ in Lorestan struck.", type: "strike", phase: "war" },
  { day: 74, lat: 33.94, lng: 44.39, title: "KC-135 Crash — 6 US Crew Killed — Iraq", desc: "Refueling plane crashes in western Iraq. All 6 crew killed (non-hostile). Total US deaths reach 13.", type: "humanitarian", phase: "war" },
  { day: 74, lat: 36.19, lng: 44.01, title: "French Soldier Killed — Erbil Drone", desc: "CWO Arnaud Frion killed by Shahed drone. First European military death in war.", type: "retaliation", phase: "regional" },
  { day: 74, lat: 29.67, lng: 48.76, title: "Safesea Vishnu Hit Off Basra", desc: "Iranian drone boat hits tanker. 1 Indian crew member killed.", type: "naval", phase: "regional" },
  { day: 74, lat: 35.660, lng: 51.500, title: "UNICEF: 1,100 Children Killed/Injured", desc: "200 dead in Iran, 91 in Lebanon, 4 in Israel, 1 in Kuwait.", type: "humanitarian", phase: "war" },
  { day: 74, lat: 27.11, lng: 57.08, title: "Minab School — US Responsible", desc: "NYT: US Tomahawk hit Shajareh Tayyebeh school Feb 28. 175-180 killed (110 children). UN calls potential war crime.", type: "humanitarian", size: "large", phase: "war" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 13 (Day 75)
  // ═══════════════════════════════════════════════════════════════
  { day: 75, lat: 29.38, lng: 50.33, title: "Kharg Island Raid — 90+ Targets", desc: "US Air Force bombs Iran's main oil export hub (90% of exports). 90+ military targets. Oil infrastructure spared. Trump: 'most powerful bombing raid.'", type: "strike", size: "large", phase: "war" },
  { day: 75, lat: 35.70, lng: 51.42, title: "Explosion at Quds Day Rally — Tehran", desc: "Explosion rocks Ferdowsi Square during rally. President Pezeshkian present. 1 woman killed.", type: "strike", phase: "war" },
  { day: 75, lat: 31.32, lng: 48.67, title: "Khuzestan: Ahvaz, Dezful Struck", desc: "IDF strikes Law Enforcement HQ, 292nd Armored Brigade, IRGC Ground Forces HQ.", type: "strike", phase: "war" },
  { day: 75, lat: 37.00, lng: 35.33, title: "3rd Iranian Missile Over Turkey", desc: "NATO intercepts near Incirlik Air Base, Adana. Sirens at 3:25am.", type: "retaliation", phase: "regional" },
  { day: 75, lat: 35.67, lng: 51.41, title: "80% of Iran Air Defenses Destroyed", desc: "Bloomberg cites Israeli assessments.", type: "strike", phase: "war" },
  { day: 75, lat: 24.35, lng: 56.71, title: "Sohar Drone Strike — Oman", desc: "Drone falls in industrial area. 2 expatriates killed, 10 injured.", type: "retaliation", phase: "regional" },
  { day: 75, lat: 26.56, lng: 56.40, title: "Turkey, India Ships Allowed Through", desc: "Iran allows selective transit. Strait remains closed to Western-allied shipping.", type: "naval", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 14 (Day 76)
  // ═══════════════════════════════════════════════════════════════
  { day: 76, lat: 35.70, lng: 51.35, title: "Tehran Police Stations Struck", desc: "LEC Station 108 (Navab) and 148 (Enghelab) targeted.", type: "strike", phase: "war" },
  { day: 76, lat: 32.49, lng: 51.61, title: "Isfahan: 15-24 Killed, UNESCO Damaged", desc: "Factory hit kills 15. 56 museums and historic sites damaged incl. Naqsh-e Jahan Square.", type: "strike", phase: "war" },
  { day: 76, lat: 25.29, lng: 51.53, title: "Qatar LNG Facility Hit", desc: "Iran strikes Ras Laffan. 17% of Qatar LNG output lost. 3-5 years to repair.", type: "retaliation", size: "large", phase: "regional" },
  { day: 76, lat: 28.57, lng: 47.95, title: "Ahmad al-Jaber Airbase — Kuwait", desc: "Two missiles strike perimeter. 3 soldiers wounded.", type: "retaliation", phase: "regional" },
  { day: 76, lat: 29.23, lng: 47.97, title: "Kuwait Airport Radar Destroyed", desc: "Iranian drones strike radar system. Airport shut until further notice.", type: "retaliation", phase: "regional" },
  { day: 76, lat: 35.660, lng: 51.505, title: "New Supreme Leader: Keep Hormuz Closed", desc: "Mojtaba Khamenei's first address warns attacks continue unless US bases close.", type: "political", phase: "war" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 15 (Day 77)
  // ═══════════════════════════════════════════════════════════════
  { day: 77, lat: 32.65, lng: 51.68, title: "Isfahan: Heaviest Night Bombardment", desc: "Heaviest single-night bombardment since Feb 28. Airbase, army base, factory hit. 15 killed.", type: "strike", size: "large", phase: "war" },
  { day: 77, lat: 29.62, lng: 52.53, title: "Shiraz: 20 Explosions", desc: "20 explosions heard near Shiraz. Strikes across six provinces.", type: "strike", phase: "war" },
  { day: 77, lat: 32.38, lng: 48.40, title: "Dezful Air Base Struck", desc: "Air base targeted in overnight bombardment wave.", type: "strike", phase: "war" },
  { day: 77, lat: 25.64, lng: 57.77, title: "Jask Port Strike", desc: "Extensive damage to Jask port in Hormozgan Province.", type: "strike", phase: "war" },
  { day: 77, lat: 32.08, lng: 34.78, title: "10 Missiles at Tel Aviv — 124 Injured", desc: "Iran fires 10 ballistic missiles with multiple warheads. Targets Palmachim Airbase and Shin Bet HQ.", type: "retaliation", size: "large", phase: "war" },
  { day: 77, lat: 33.89, lng: 35.50, title: "Hezbollah: Continued Fighting", desc: "Hezbollah claims 280+ attacks to date.", type: "hezbollah", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 16 (Day 78)
  // ═══════════════════════════════════════════════════════════════
  { day: 78, lat: 29.23, lng: 50.32, title: "Kharg Island — 90+ Military Targets", desc: "US strikes Iran's critical oil export hub handling 90% of crude exports. Mine storage, missile bunkers destroyed.", type: "strike", size: "large", phase: "war" },
  { day: 78, lat: 35.69, lng: 51.31, title: "Khamenei Aircraft Destroyed — Mehrabad", desc: "IAF precision strike destroys aircraft used by late Supreme Leader at Mehrabad Airport.", type: "strike", phase: "war" },
  { day: 78, lat: 25.25, lng: 55.36, title: "Dubai Airport Drone Attack", desc: "Shahed drone hits fuel tank. Flights suspended 7+ hours. Emirates cancels flights.", type: "retaliation", phase: "regional" },
  { day: 78, lat: 26.56, lng: 56.40, title: "Hormuz: Only 2 Vessel Crossings", desc: "Sustained collapse of commercial traffic through world's most critical energy chokepoint.", type: "naval", phase: "regional" },
  { day: 78, lat: 35.68, lng: 51.37, title: "100+ Naval Vessels Destroyed", desc: "Adm. Brad Cooper: over 100 Iranian vessels destroyed incl. 30+ mine-laying boats.", type: "naval", size: "large", phase: "war" },
  { day: 78, lat: 35.67, lng: 51.43, title: "1,250+ Targets Hit — 6,000+ Sorties", desc: "CENTCOM confirms cumulative strike totals.", type: "strike", phase: "war" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 17 (Day 79)
  // ═══════════════════════════════════════════════════════════════
  { day: 79, lat: 35.660, lng: 51.510, title: "Larijani & Soleimani Assassinated", desc: "Israeli airstrikes kill Ali Larijani and Basij chief Gholamreza Soleimani.", type: "strike", phase: "war" },
  { day: 79, lat: 32.08, lng: 34.81, title: "Ramat Gan — 2 Killed", desc: "Cluster warhead missile hits building. Two elderly residents killed near safe room.", type: "retaliation", phase: "war" },
  { day: 79, lat: 33.27, lng: 35.20, title: "Israel Ground Invasion of Lebanon", desc: "IDF launches 'limited and targeted ground operations.' 1M+ displaced since Mar 2.", type: "strike", size: "large", phase: "regional" },
  { day: 79, lat: 33.86, lng: 35.50, title: "Beirut Airstrikes — Kafaat, Haret Hreik", desc: "Hezbollah command centers hit. Evacuation warning for Tyre.", type: "strike", phase: "regional" },
  { day: 79, lat: 14.80, lng: 42.95, title: "Mystery of Absent Houthi Attacks", desc: "3 weeks in, Houthis have NOT attacked Red Sea shipping. Analysts cite depleted stockpiles.", type: "political", phase: "regional" },
  { day: 79, lat: 35.15, lng: 24.47, title: "USS Gerald Ford Withdraws", desc: "Aircraft carrier sails toward Crete for repairs after fire. Major gap in US forces.", type: "naval", phase: "war" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 18 (Day 80)
  // ═══════════════════════════════════════════════════════════════
  { day: 80, lat: 27.50, lng: 52.60, title: "South Pars Gas Field Struck", desc: "Israel strikes world's largest natural gas field. ~12% of Iran's gas production damaged. Gas flow to Iraq halted.", type: "strike", size: "large", phase: "war" },
  { day: 80, lat: 27.48, lng: 52.58, title: "Asaluyeh Refinery Destroyed", desc: "Two refineries with 100M cubic meters/day capacity halted. Oil jumps $103 to $108.", type: "strike", phase: "war" },
  { day: 80, lat: 25.93, lng: 51.53, title: "Ras Laffan LNG Retaliation — Qatar", desc: "Iran retaliates by striking world's largest LNG export facility. 'Extensive damage.'", type: "retaliation", size: "large", phase: "regional" },
  { day: 80, lat: 24.09, lng: 38.06, title: "Yanbu SAMREF Refinery — Saudi Arabia", desc: "Iranian drone strikes Saudi Aramco-Exxon refinery. First Red Sea coast oil facility hit.", type: "retaliation", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 19 (Day 81)
  // ═══════════════════════════════════════════════════════════════
  { day: 81, lat: 32.82, lng: 34.97, title: "Haifa Oil Refinery Struck", desc: "Iranian missile hits Bazan refinery — produces half of Israel's domestic fuel.", type: "retaliation", size: "large", phase: "war" },
  { day: 81, lat: 31.78, lng: 35.23, title: "5 Missile Salvos at Jerusalem", desc: "Iran fires 5 salvos within one hour. 19 attack waves total: 6 Tel Aviv, 5 Jerusalem.", type: "retaliation", phase: "war" },
  { day: 81, lat: 31.77, lng: 35.23, title: "Missile Fragment Near Temple Mount", desc: "Warhead fragment lands in Jewish Quarter parking lot. Less than 1km from Western Wall and Al-Aqsa.", type: "retaliation", phase: "war" },
  { day: 81, lat: 26.56, lng: 56.40, title: "US Aerial Campaign to Reopen Hormuz", desc: "A-10 Warthogs and AH-64 Apaches deployed to hunt IRGC fast-attack craft.", type: "naval", phase: "regional" },
  { day: 81, lat: 35.72, lng: 51.38, title: "200+ Targets Struck — Western/Central Iran", desc: "IAF hits missile storage, UAV facilities, air defense, weapons production sites.", type: "strike", phase: "war" },
  { day: 81, lat: 32.95, lng: 35.50, title: "49 Hezbollah Attack Waves", desc: "77.6% using rockets/missiles. Targets: Galilee, Golan Heights, Haifa area.", type: "hezbollah", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 20 (Day 82)
  // ═══════════════════════════════════════════════════════════════
  { day: 82, lat: 35.83, lng: 50.97, title: "Karaj Missile Factory Destroyed", desc: "CENTCOM precision strike. Satellite shows buildings fully collapsed.", type: "strike", phase: "war" },
  { day: 82, lat: 31.90, lng: 54.37, title: "Yazd Strikes", desc: "IDF targets 130+ infrastructures including ballistic missile launchers.", type: "strike", phase: "war" },
  { day: 82, lat: 31.32, lng: 48.67, title: "Ahvaz: Al-Hadid Garrison", desc: "Military facilities targeted in Khuzestan Province.", type: "strike", phase: "war" },
  { day: 82, lat: 27.50, lng: 52.60, title: "South Pars — Continued Strikes", desc: "Israel strikes South Pars again. Iran threatens 'zero restraint.'", type: "strike", phase: "war" },
  { day: 82, lat: 33.89, lng: 35.50, title: "Beirut Centers Hit", desc: "Israel strikes key Hezbollah command centers.", type: "strike", phase: "regional" },
  { day: 82, lat: 31.25, lng: 34.79, title: "Dimona Struck", desc: "Iranian missile hits near Israel's nuclear site.", type: "retaliation", phase: "war" },
  { day: 82, lat: 31.26, lng: 35.21, title: "Arad Mass Casualty", desc: "Missiles hit Arad. Mass casualty event declared.", type: "retaliation", size: "large", phase: "war" },
  { day: 82, lat: 29.08, lng: 48.08, title: "Kuwait Mina Al-Ahmadi Refinery", desc: "Iranian drones strike refinery (730k bbl/day) on Eid al-Fitr. Fires in multiple units.", type: "retaliation", phase: "regional" },
  { day: 82, lat: 35.660, lng: 51.515, title: "Trump: 'Winding Down' — More Marines Deploy", desc: "Trump posts on Truth Social about meeting objectives while more Marines deploy.", type: "political", phase: "war" },
  { day: 82, lat: 15.35, lng: 44.21, title: "Houthi: 'All Military Options Possible'", desc: "Houthi politburo member declares all options possible. Considering naval blockade.", type: "political", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // MARCH 21 (Day 83)
  // ═══════════════════════════════════════════════════════════════
  { day: 83, lat: 33.73, lng: 51.73, title: "Natanz Struck Again", desc: "Second major attack on Natanz as campaign enters 4th week. IAEA: no radiation leakage.", type: "nuclear", size: "large", phase: "war" },
  { day: 83, lat: 31.07, lng: 35.03, title: "Dimona — 30+ Injured", desc: "Iranian missiles hit Dimona, 10km from nuclear research center. Air defense failed.", type: "retaliation", size: "large", phase: "war" },
  { day: 83, lat: 31.26, lng: 35.21, title: "Arad — 64 Wounded", desc: "Direct hit on Arad. 7 serious, 15 moderate, 42 light injuries. 150+ injured across region.", type: "retaliation", phase: "war" },
  { day: 83, lat: -7.32, lng: 72.41, title: "Diego Garcia Missile Attack", desc: "Iran fires 2 IRBMs at US-UK base 4,000km away — double claimed range. 1 shot down, 1 failed.", type: "retaliation", phase: "regional" },
  { day: 83, lat: 38.90, lng: -77.04, title: "Trump: 48-Hour Hormuz Ultimatum", desc: "Threatens to 'obliterate' power plants if Hormuz not reopened.", type: "political", phase: "regional" },
  { day: 83, lat: 35.660, lng: 51.520, title: "Tehran Strikes Continue", desc: "Israeli military strikes Tehran. Iranian attacks down 90% from early war days.", type: "strike", phase: "war" },
  { day: 83, lat: 35.73, lng: 51.4, title: "Iran Death Toll Passes 1,500", desc: "State broadcaster reports 1,500+ killed. War enters 4th week. No end in sight.", type: "humanitarian", size: "large", phase: "war" },
  { day: 83, lat: 33.27, lng: 35.20, title: "IDF Mortar Casualties — Lebanon", desc: "Two IDF soldiers wounded by mortar from Lebanon as ground op continues.", type: "hezbollah", phase: "regional" },
  { day: 83, lat: 26.56, lng: 56.40, title: "Hormuz Still Closed — Week 4", desc: "20+ commercial vessels hit total. Houthis still holding fire in Red Sea.", type: "naval", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // HUMANITARIAN, ECONOMIC & GLOBAL IMPACT
  // ═══════════════════════════════════════════════════════════════
  { day: 62, lat: 26.91, lng: 57.09, title: "Minab School Attack — 175 Killed", desc: "US missile destroys girls' elementary school in Minab. 175-180 killed, mostly schoolgirls aged 7-12.", type: "humanitarian", size: "large", phase: "war" },
  { day: 63, lat: 40.71, lng: -74.01, title: "Wall Street Drops — Dow -400", desc: "S&P 500 drops 0.7%. Exxon/Chevron rise on oil. Markets try to 'buy the dip.'", type: "political", phase: "regional" },
  { day: 63, lat: 37.98, lng: 23.73, title: "Athens: 1,300 Protest at US Embassy", desc: "'Hands Off Iran' banners. Effigies burned outside US and Israeli embassies.", type: "political", phase: "regional" },
  { day: 63, lat: 24.86, lng: 67.01, title: "Pakistan: 26 Killed in Pro-Iran Protests", desc: "Marines fire on protesters at US Consulate Karachi. 13 killed in Gilgit-Baltistan. UN offices ablaze.", type: "political", phase: "regional" },
  { day: 63, lat: 25.01, lng: 55.06, title: "Jebel Ali Port Fire — Dubai", desc: "Intercepted missile debris ignites fire at Middle East's largest container terminal.", type: "humanitarian", phase: "regional" },
  { day: 64, lat: 28.92, lng: 50.82, title: "Bushehr Hospital Neonatal Evacuated", desc: "Blast waves damage Persian Gulf Martyrs Hospital. Neonatal unit unusable; infants evacuated.", type: "humanitarian", phase: "war" },
  { day: 64, lat: 35.74, lng: 51.45, title: "Gandhi Hospital Tehran Damaged", desc: "IVF department destroyed. Patients including newborns evacuated. 1 of 13+ health facilities hit.", type: "humanitarian", phase: "war" },
  { day: 66, lat: 37.57, lng: 126.98, title: "KOSPI Crashes 12% — Worst Day Ever", desc: "South Korea crashes, surpassing 9/11 record. Samsung, SK Hynix hammered. Circuit breaker triggered.", type: "political", phase: "regional" },
  { day: 67, lat: 40.71, lng: -74.01, title: "Dow Tumbles 785 Points", desc: "Briefly down 1,100 intraday. US crude jumps 8.5% — biggest single-day gain since 2020.", type: "political", phase: "regional" },
  { day: 67, lat: 31.32, lng: 48.69, title: "Ahvaz Children's Hospital Damaged", desc: "Aboozar Children's Hospital damaged. Medical centers in 4 provinces also hit.", type: "humanitarian", phase: "war" },
  { day: 68, lat: 38.91, lng: -77.04, title: "US Launches $20B Reinsurance Program", desc: "Trump admin announces maritime reinsurance via DFC to restart Gulf shipping.", type: "political", phase: "regional" },
  { day: 69, lat: 51.51, lng: -0.13, title: "50,000 March in London Against War", desc: "'Hands Off Iran' march to US Embassy. CND, Stop The War, Palestine Solidarity Campaign.", type: "political", phase: "regional" },
  { day: 69, lat: 35.74, lng: 51.39, title: "WHO: 1,300 Dead, 9,000 Injured", desc: "Six hospitals evacuated. Health system 'holding up.' 11 healthcare workers killed.", type: "humanitarian", phase: "war" },
  { day: 70, lat: 46.20, lng: 6.14, title: "IMF: Every 10% Oil Rise = 0.4% Inflation", desc: "Chatham House warns of 1970s-style stagflation risk. Asia and Europe most vulnerable.", type: "political", phase: "regional" },
  { day: 71, lat: 29.05, lng: 50.82, title: "Brent Spikes to $119.50", desc: "65% increase from pre-war $73. Oil prices swing wildly amid mixed signals.", type: "political", phase: "regional" },
  { day: 72, lat: 35.71, lng: 51.44, title: "4,300 Killed in First 10 Days", desc: "Hengaw: 4,300 including 390 civilians. Highest in Tehran, Hormozgan, Kermanshah, Fars.", type: "humanitarian", phase: "war" },
  { day: 73, lat: 48.00, lng: 2.00, title: "IEA Releases Record 400M Barrels", desc: "International Energy Agency agrees to release record crude reserves.", type: "political", phase: "regional" },
  { day: 74, lat: 35.75, lng: 51.41, title: "UNHCR: 3.2M Displaced Inside Iran", desc: "600K-1M households displaced. Fastest internal displacement in decades. Afghan refugees doubly displaced.", type: "humanitarian", phase: "war" },
  { day: 74, lat: 52.37, lng: 4.90, title: "European Gas Prices Nearly Double", desc: "Dutch TTF benchmarks nearly double to EUR 60+/MWh. Storage at just 30%. Eurozone growth cut.", type: "political", phase: "regional" },
  { day: 74, lat: 35.660, lng: 51.525, title: "UNICEF: 1,100 Children Killed/Injured", desc: "200 dead in Iran, 91 in Lebanon, 4 in Israel, 1 in Kuwait.", type: "humanitarian", phase: "war" },
  { day: 76, lat: 35.72, lng: 51.42, title: "5,300 Killed Including 511 Civilians", desc: "Hengaw: 127 minors, 168 women. Strikes hit 178 cities across 25 provinces.", type: "humanitarian", phase: "war" },
  { day: 78, lat: 38.91, lng: -77.04, title: "US Gas Prices Surge 90 Cents", desc: "Average climbs from under $3 to $3.89. California exceeds $5/gallon.", type: "political", phase: "regional" },
  { day: 82, lat: 29.05, lng: 50.82, title: "Dubai Crude Surpasses $150/Barrel", desc: "Physical crude tops $150. Brent at $112. Analysts warn $200 possible if war drags on.", type: "political", phase: "regional" },
  { day: 82, lat: 40.71, lng: -74.01, title: "Dow: Worst 4-Week Streak in 3 Years", desc: "S&P -1.51%, Nasdaq -2.01%. JPMorgan cuts S&P target. $5.7T options expiry.", type: "political", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // HEZBOLLAH / LEBANON FRONT — DETAILED
  // ═══════════════════════════════════════════════════════════════
  { day: 64, lat: 32.75, lng: 34.95, title: "Hezbollah Strikes Mishmar HaCarmel", desc: "Precision missiles and drone swarm at air defense site south of Haifa. First attack since ceasefire.", type: "hezbollah", size: "large", phase: "regional" },
  { day: 64, lat: 33.86, lng: 35.51, title: "IDF Kills Hezbollah Intel Chief Makled", desc: "Israeli jets bomb Dahieh at 3am. Intelligence chief Hussein Makled killed.", type: "strike", size: "large", phase: "regional" },
  { day: 64, lat: 33.87, lng: 35.48, title: "Al-Manar TV HQ Struck — Beirut", desc: "Israel strikes Hezbollah's Al-Manar television headquarters.", type: "strike", phase: "regional" },
  { day: 64, lat: 33.9, lng: 35.48, title: "PM Salam Bans Hezbollah Military", desc: "Lebanese PM bans all Hezbollah military activities. Demands weapons surrender.", type: "political", size: "large", phase: "regional" },
  { day: 64, lat: 33.88, lng: 35.51, title: "Lebanon: 52 Dead, 154 Wounded (Day 1)", desc: "Initial toll from Israeli retaliatory strikes across Lebanon.", type: "humanitarian", phase: "regional" },
  { day: 65, lat: 33.27, lng: 35.20, title: "IDF Crosses Blue Line — UNIFIL Observes", desc: "Soldiers cross near Markaba, Al Adeisse, Kfar Kela, Ramyah.", type: "strike", phase: "regional" },
  { day: 65, lat: 33.89, lng: 35.47, title: "Beirut Jnah & Bir Hassan Struck", desc: "First strikes near central Beirut since 2024 ceasefire.", type: "strike", phase: "regional" },
  { day: 65, lat: 33.89, lng: 35.50, title: "Qassem: 'Victory or Martyrdom'", desc: "30-min speech vows to continue fighting until 'victory in battle or martyrdom.'", type: "political", phase: "regional" },
  { day: 68, lat: 33.15, lng: 35.30, title: "3 UNIFIL Peacekeepers Injured", desc: "Ghanaian peacekeepers hit by missiles at Al Qawzah base. One critically wounded.", type: "humanitarian", size: "large", phase: "regional" },
  { day: 69, lat: 33.85, lng: 36.00, title: "41 Killed in Bekaa — Nabi Chit", desc: "Air-and-ground raids kill 41 including 3 Lebanese soldiers and 1 General Security officer.", type: "humanitarian", size: "large", phase: "regional" },
  { day: 71, lat: 33.88, lng: 35.5, title: "Lebanon: 450+ Dead in One Week", desc: "Health Ministry reports over 450 killed since March 2. Displacement reaches 500,000.", type: "humanitarian", phase: "regional" },
  { day: 72, lat: 33.56, lng: 35.37, title: "Sidon: Paramedic Killed", desc: "Israeli airstrike hits car on Sidon waterfront. Paramedic among two killed.", type: "humanitarian", phase: "regional" },
  { day: 73, lat: 33.9, lng: 35.51, title: "Central Beirut Residential Hit — 64 Killed", desc: "Israel strikes residential building in central Beirut.", type: "strike", phase: "regional" },
  { day: 74, lat: 32.09, lng: 34.78, title: "Hezbollah Targets Glilot/Tel Aviv", desc: "200 rockets + 20 drones in integrated op with Iran. Long-range rockets at 8200 Intel HQ.", type: "hezbollah", size: "large", phase: "regional" },
  { day: 74, lat: 33.87, lng: 35.51, title: "Lebanon: 687 Dead, 1,774 Wounded", desc: "20% of casualties are children. Less than two weeks of fighting.", type: "humanitarian", phase: "regional" },
  { day: 74, lat: 36.19, lng: 44.01, title: "French Soldier Killed — Erbil", desc: "CWO Frion killed by Shahed drone at Mala Qara base. First European military death.", type: "retaliation", phase: "regional" },
  { day: 75, lat: 33.89, lng: 35.50, title: "Ramada Hotel — 5 IRGC Commanders Killed", desc: "Israel strikes Ramada hotel in central Beirut. Including Ali Musallam Tabaja.", type: "strike", size: "large", phase: "regional" },
  { day: 76, lat: 32.82, lng: 34.99, title: "56 Attack Waves — Record Day", desc: "Highest daily figure. Targets: border towns, Galilee, Krayot, Haifa.", type: "hezbollah", size: "large", phase: "regional" },
  { day: 77, lat: 33.06, lng: 35.37, title: "UNIFIL Patrols Fired Upon x3", desc: "Shot at near Yatar (5m), Dayr Kifa (100m), Qallawiyah (200m). Two patrols return fire.", type: "humanitarian", phase: "regional" },
  { day: 78, lat: 33.22, lng: 35.57, title: "IDF Ground Op — Khiam", desc: "91st Division begins operations. 146th Reserve and 36th Div in western/eastern sectors.", type: "strike", size: "large", phase: "regional" },
  { day: 78, lat: 33.20, lng: 35.40, title: "886 Killed, 2,141 Wounded in Lebanon", desc: "67 women, 111 children, 38 health workers. 1,049,328 displaced.", type: "humanitarian", size: "large", phase: "regional" },
  { day: 79, lat: 32.98, lng: 35.09, title: "100-Rocket Barrage — Haifa to Acre", desc: "Hezbollah fires massive barrage at Haifa, Acre, Krayot. Multiple towns hit.", type: "hezbollah", phase: "regional" },
  { day: 79, lat: 33.89, lng: 35.50, title: "1 Million Displaced in Lebanon", desc: "19% of Lebanon's population. 132,742 in shelters. Fastest displacement in Lebanon's history.", type: "humanitarian", size: "large", phase: "regional" },
  { day: 80, lat: 33.27, lng: 35.20, title: "Litani River Bridges Destroyed", desc: "Israeli warplanes destroy at least 2 bridges, cutting southern Lebanon from rest of country.", type: "strike", phase: "regional" },
  { day: 81, lat: 33.09, lng: 35.13, title: "4 Hurt — Kiryat Shmona Rocket", desc: "Hezbollah rocket hits home, injuring 4. Evacuees who just returned forced to flee again.", type: "hezbollah", phase: "regional" },
  { day: 81, lat: 33.20, lng: 35.40, title: "Health Center Strike — 12 Medics Killed", desc: "Israeli strike on health center kills 12 medical workers instantly.", type: "humanitarian", size: "large", phase: "regional" },
  { day: 82, lat: 33.20, lng: 35.40, title: "668 Hezbollah Attack Waves Total", desc: "474 rockets/missiles, 169 UAVs, 22 anti-tank, 3 IEDs. Avg 37/day since Mar 2.", type: "hezbollah", phase: "regional" },
  { day: 82, lat: 33.88, lng: 35.49, title: "968 Killed, 2,432 Wounded in Lebanon", desc: "IDF has hit 2,000+ targets, 570+ operatives killed.", type: "humanitarian", phase: "regional" },
  { day: 83, lat: 33.87, lng: 35.48, title: "1,000+ Dead in Lebanon — War Week 3", desc: "Nearly 1 million displaced — 19% of entire population.", type: "humanitarian", size: "large", phase: "regional" },
  { day: 83, lat: 33.89, lng: 35.50, title: "Qassem: 'Prepared for Long War'", desc: "'We have prepared for a long war of attrition. The enemy will be surprised.'", type: "political", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // GAP-FILL: EMPTY DAYS + ADDITIONAL SHIPS & RETALIATION
  // ═══════════════════════════════════════════════════════════════
  // Jan 15 (day 18)
  { day: 18, lat: 35.75, lng: 51.42, title: "Zero Protests — Crackdown Holds", desc: "No protests for second consecutive day. Regime's securitization measures suppress all activity.", type: "humanitarian", phase: "protests" },
  { day: 18, lat: 40.75, lng: -73.97, title: "UN Security Council Convenes on Iran", desc: "US Ambassador Waltz: 'all options on the table to stop the slaughter.'", type: "political", phase: "protests" },
  // Jan 18 (day 21)
  { day: 21, lat: 35.76, lng: 51.44, title: "24,669 Arrested — Executions Loom", desc: "HRANA count. Government signals 'moharebeh' (war against God) charges for protesters.", type: "humanitarian", phase: "protests" },
  { day: 21, lat: 51.51, lng: -0.13, title: "Sunday Times: 16,500 Killed, 330K Injured", desc: "Medical sources inside Iran. 8,000+ may have sustained blindness or severe eye injuries.", type: "humanitarian", phase: "protests" },
  // Jan 22 (day 25)
  { day: 25, lat: 46.20, lng: 6.14, title: "UN Rapporteur: Death Toll May Exceed 20,000", desc: "HRANA verified count: 4,714 adults, 42 minors dead. 9,798 cases under investigation.", type: "humanitarian", phase: "protests" },
  { day: 25, lat: 35.73, lng: 51.41, title: "Judiciary Chief: Swift Executions", desc: "Mohseni Eje'i calls for harsh sentences against detained protesters.", type: "political", phase: "protests" },
  // Jan 28 (day 31)
  { day: 31, lat: 46.20, lng: 6.14, title: "UN Human Rights Council Adopts Resolution", desc: "Votes 25-7 to extend Fact-Finding Mission mandate on Iran protest crackdown.", type: "political", phase: "protests" },
  { day: 31, lat: 38.90, lng: -77.04, title: "US Sanctions Crackdown Architects", desc: "OFAC designates SCNS Secretary Ali Larijani and senior officials.", type: "political", phase: "protests" },
  // Feb 2 (day 36)
  { day: 36, lat: 50.45, lng: 30.52, title: "Ukraine Designates IRGC Terrorist Org", desc: "Citing crackdown on protesters and Shahed drones to Russia.", type: "political", phase: "regional" },
  { day: 36, lat: 51.51, lng: -0.13, title: "UK Sanctions 10 Iranian Officials", desc: "Interior Minister, police chiefs, and FARAJA law enforcement designated.", type: "political", phase: "regional" },
  // Feb 4 (day 38)
  { day: 38, lat: 40.75, lng: -73.97, title: "HRW: Crisis Spiraling Deeper", desc: "Documents mass killings, detention, torture. 2,000+ executions in 2025 — highest since late 1980s.", type: "humanitarian", phase: "regional" },
  // Feb 5 (day 39)
  { day: 39, lat: 48.22, lng: 16.37, title: "IAEA: Iran Blocking Inspector Access", desc: "Iran says inspections are 'legally untenable' due to 'acts of aggression and threats.'", type: "nuclear", phase: "regional" },
  // Feb 7 (day 41)
  { day: 41, lat: 38.90, lng: -77.04, title: "Trump Signs Iran Tariff Executive Order", desc: "Up to 25% tariffs on countries trading with Iran.", type: "political", phase: "regional" },
  { day: 41, lat: 23.50, lng: 62.00, title: "CENTCOM Commander Aboard USS Lincoln", desc: "Adm. Cooper makes force posture announcements from carrier in Arabian Sea.", type: "naval", phase: "regional" },
  // Feb 8 (day 42)
  { day: 42, lat: 26.27, lng: 56.40, title: "IRGC Gunboats Try to Board US Tanker", desc: "Three pairs of IRGC Navy gunboats with machine guns intercept MV Stena Imperative in Hormuz.", type: "naval", phase: "regional" },
  // Feb 9 (day 43)
  { day: 43, lat: 38.90, lng: -77.04, title: "US Sanctions Iran's Shadow Oil Fleet", desc: "14 vessels, 15 entities, 2 individuals designated to cut revenue funding terrorism.", type: "political", phase: "regional" },
  // Feb 12 (day 46)
  { day: 46, lat: 35.71, lng: 51.43, title: "Coerced Revolution Anniversary Rallies", desc: "Detainee families forced to attend under threat of executions. Counter-chants from homes.", type: "political", phase: "regional" },
  // Feb 15 (day 49)
  { day: 49, lat: 24.00, lng: 58.00, title: "USS Ford 422 Miles From Iran", desc: "Two-carrier deployment operational. Largest naval concentration since 2003.", type: "naval", phase: "regional" },
  { day: 49, lat: 48.22, lng: 16.37, title: "IAEA Inspects LOF & Karaj Facilities", desc: "Verification activities amid severely restricted access to enrichment sites.", type: "nuclear", phase: "regional" },
  // Feb 22 (day 56)
  { day: 56, lat: 38.90, lng: -77.04, title: "US Military Strike-Ready", desc: "Prepared to strike as early as Feb 21. Senior officials discuss interim deal at upcoming Geneva talks.", type: "political", phase: "regional" },
  { day: 56, lat: 35.81, lng: 51.44, title: "Khamenei Names Successors", desc: "Four potential successors named. Iraqi militias pledge 'open fronts' if US attacks.", type: "political", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // ADDITIONAL NAMED SHIPS ATTACKED
  // ═══════════════════════════════════════════════════════════════
  { day: 68, lat: 26.22, lng: 56.28, title: "Tug Mussafah 2 Sunk — 4 Killed", desc: "UAE-flagged tug struck by two missiles 18nm off Khasab while assisting Safeen Prestige. 4 seafarers killed, 3 seriously injured.", type: "naval", phase: "regional" },
  { day: 69, lat: 26.55, lng: 56.40, title: "Chemical Tanker Prima Hit by Drone", desc: "Malta-flagged chemical tanker struck by IRGC drone. Owned by Kyotonia Ltd (Cyprus).", type: "naval", phase: "regional" },
  { day: 69, lat: 26.60, lng: 56.35, title: "Oil Tanker Louis P Hit by Drone", desc: "US-flagged tanker struck by IRGC drone. IRGC claimed vessel violated transit prohibition.", type: "naval", phase: "regional" },
  { day: 73, lat: 25.40, lng: 55.10, title: "Source Blessing Hit Near Jebel Ali", desc: "Liberia-flagged 3,273-TEU container ship (Maersk/Hapag-Lloyd) struck 35nm north of Jebel Ali at 02:20.", type: "naval", phase: "regional" },
  { day: 79, lat: 25.35, lng: 56.50, title: "LPG Tanker Gas Al Ahmadiah Hit", desc: "Kuwait-flagged LPG tanker struck 23nm east of Fujairah. Likely collateral from airborne interception.", type: "naval", phase: "regional" },
  { day: 80, lat: 25.35, lng: 56.40, title: "Chemical Tanker Parimal Ablaze", desc: "Palau-flagged tanker struck east of Khor Fakkan. 15 crew evacuated. Captain missing. Shadow fleet vessel.", type: "naval", phase: "regional" },
  { day: 80, lat: 26.25, lng: 56.32, title: "Safeen Prestige Struck Again While Adrift", desc: "Malta-flagged ship burning again — struck a second time while still drifting abandoned since Mar 4.", type: "naval", phase: "regional" },
  { day: 81, lat: 25.90, lng: 51.55, title: "Vessel Halul 69 Hit Off Ras Laffan", desc: "Qatar-flagged offshore vessel struck by debris off Ras Laffan during Iranian strikes on Qatar energy.", type: "naval", phase: "regional" },

  // ═══════════════════════════════════════════════════════════════
  // ADDITIONAL ISRAELI CITIES HIT
  // ═══════════════════════════════════════════════════════════════
  { day: 64, lat: 31.25, lng: 34.79, title: "Beersheba — 19 Wounded", desc: "Ballistic missile direct hit. 1 moderate, 18 light injuries. Several homes destroyed.", type: "retaliation", phase: "war" },
  { day: 79, lat: 31.85, lng: 34.85, title: "Moshav Adanim — Thai Worker Killed", desc: "Cluster bomb struck agricultural shed. Chaiwat Waewnil (30) killed. Wife and child survive.", type: "retaliation", phase: "war" },
  { day: 79, lat: 31.48, lng: 34.95, title: "Beit Awwa — 4 Women Killed", desc: "Missile fragments hit beauty salon near Hebron. 4 Palestinian women killed, 13 wounded.", type: "retaliation", phase: "war" },
  { day: 79, lat: 32.33, lng: 34.86, title: "Cluster Missile Barrage Over Netanya", desc: "Multiple cluster warhead missile trails visible over coastal city. Shrapnel injuries across Tel Aviv metro.", type: "retaliation", phase: "war" },
];
