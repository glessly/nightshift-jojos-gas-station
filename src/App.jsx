import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('design');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAct, setSelectedAct] = useState('all');
  const [plotTwistRevealed, setPlotTwistRevealed] = useState(false);
  const [activeMap, setActiveMap] = useState('home');
  const [copiedColor, setCopiedColor] = useState(null);

  // Exact Color Scheme
  const colors = {
    almostBlack: '#020403',      // Main background
    darkForest: '#07100B',       // Atmospheric backgrounds
    deepGreen: '#0A100B',        // Containers and subtle lighting
    mutedMoss: '#68765B',        // Green accents
    fogGray: '#92988A',          // Body text
    distressedGray: '#626B60',   // Secondary text
    darkBloodRed: '#8B2925'      // Warning details and highlights
  };

  const actsData = [
    {
      act: "Act 1",
      title: "The House Scene",
      desc: "The protagonist wakes up tired and hungry, checks the fridge, cooks bacon and eggs, and watches TV until a breaking news report announces a fatal hit-and-run at Jojo's Gas Station—where they work. Shaken, they lock up and go to sleep."
    },
    {
      act: "Act 2",
      title: "Gas Station - Shift 1",
      desc: "Billy hands over the messy shift. The player cleans the floor with a mop, interacts with Steve (buying Coke), avoids restocking due to laziness, talks to Melia (who gives a chilling warning about the previous missing clerk), and encounters Junk (the eccentric vagrant) behind the stockroom."
    },
    {
      act: "Act 3",
      title: "The Thunderstorm (House)",
      desc: "Waking up to a fierce thunderstorm, someone knocks on the door. Refusing to let the stranger in, the player goes to wash up as a brownout strikes. After calling the manager, they are offered 2x bonus salary to brave the storm. A window shatters, revealing an Aswang outside (which turns out to be an injured pigeon hitting the glass)."
    },
    {
      act: "Act 4",
      title: "Gas Station - Shift 2 & Descent",
      desc: "Returning to the station, the player stocks shelves, assists Steve and John (who goes to the restroom), and encounters Melia speaking demonic language. Discovering John murdered in a pool of blood, the player calls 911, follows bloody footprints into the stockroom, gets locked inside, and faces a terrifying Aswang jumpscare that possesses them."
    },
    {
      act: "Act 5",
      title: "Awakening & The Twist",
      desc: "The player wakes up in bed thinking it was a nightmare. Walking into the living room, the lights flicker for a final jumpscare—revealing the devastating truth."
    }
  ];

  const charactersData = [
    { name: "Protagonist (Player)", role: "Night-Shift Clerk", desc: "Exhausted and pragmatic; unaware they are already dead, serving as the lens for this purgatorial loop." },
    { name: "Billy", role: "Day/Evening Clerk", desc: "Careless coworker who leaves the store messy and abandons his post during the storm." },
    { name: "Steve", role: "Regular Customer", desc: "Friendly local who buys soda and chips, grounding the player in a false sense of normalcy." },
    { name: "Melia", role: "Mysterious Customer", desc: "Foreshadows the disappearance of the previous clerk before speaking in demonic tongues." },
    { name: "Junk", role: "Vagrant", desc: "Eccentric local found behind the dumpster asking about wet socks." },
    { name: "John", role: "Customer / Victim", desc: "Asks to use the restroom in Act 4; his brutal murder triggers the supernatural climax." },
    { name: "The Aswang", role: "Supernatural Entity", desc: "Mythological monster stalking the station during lightning storms and possessing the player." }
  ];

  const teamData = [
    { name: "Emmanuel Levinne Tecson", role: "Game Development and Programming", desc: "Contributed to the development of the game's mechanics and interactions. Helped implement player movement and gameplay features. Assisted in integrating game elements and functionality." },
    { name: "Adrianne Sindian", role: "Game Design and Environment Development", desc: "Helped design the gas station environment and surrounding areas. Contributed to the arrangement of objects and interactive elements. Assisted in creating the game's overall atmosphere." },
    { name: "Aliyah Othelia Piel", role: "Story Development and Creative Direction", desc: "Contributed to the game's storyline, scenes, and character concepts. Helped develop the horror elements and unexpected events. Assisted in maintaining the game's suspenseful atmosphere." },
    { name: "Aiza Palin", role: "Website Development and UI Design", desc: "Developed the game's promotional website using React, Vite, and TypeScript. Designed the website's layout, color scheme, and visual presentation. Organized the game information, gallery, and team section." },
    { name: "Glessly Aguilar", role: "Game Assets and Visual Design", desc: "Helped prepare and organize visual assets used in the game. Contributed to the game's environment details and visual elements. Assisted in maintaining the horror theme and visual consistency." },
    { name: "Ryan Jacob Solomon", role: "Game Testing and Gameplay Support", desc: "Assisted in testing the game's mechanics and interactions. Helped identify bugs, errors, and areas that needed improvement. Contributed feedback to improve the gameplay experience." }
  ];

  const filteredActs = selectedAct === 'all' 
    ? actsData 
    : actsData.filter(a => a.act.toLowerCase() === selectedAct);

  const filteredCharacters = charactersData.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyColorCode = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div style={{ backgroundColor: colors.almostBlack, color: colors.fogGray, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=Inter:wght@400;500;600&family=Share+Tech+Mono&display=swap');
        
        .cinzel-font { font-family: 'Cinzel', serif; }
        .mono-font { font-family: 'Share Tech Mono', monospace; }
        .inter-font { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Top Header */}
      <header style={{ backgroundColor: colors.darkForest, borderBottom: `1px solid ${colors.mutedMoss}44`, padding: '2.5rem 1rem', textAlign: 'center' }}>
        <span className="mono-font" style={{ backgroundColor: colors.darkBloodRed, color: '#fff', fontSize: '0.8rem', fontWeight: 'bold', padding: '0.3rem 0.8rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          IT306 – Game Development Final Project (Documentation & Trailer)
        </span>
        <h1 className="cinzel-font" style={{ color: '#fff', fontSize: '2.8rem', margin: '0.8rem 0 0.4rem 0', fontWeight: '800', letterSpacing: '1px' }}>
          Nightshift: Jojo's Gas Station
        </h1>
        <p className="inter-font" style={{ color: colors.fogGray, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          A psychological horror and job simulation game exploring the blurred lines between reality, guilt, and the afterlife.
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav className="mono-font" style={{ backgroundColor: colors.deepGreen, display: 'flex', justifyContent: 'center', gap: '1rem', padding: '1rem', position: 'sticky', top: 0, zIndex: 100, borderBottom: `1px solid ${colors.mutedMoss}33`, flexWrap: 'wrap' }}>
        {[
          { id: 'design', label: '01 · Game Design' },
          { id: 'technical', label: '02 · Technical & Styling' },
          { id: 'trailer', label: '03 · Gameplay Trailer' },
          { id: 'record', label: '04 · Team & Record' },
          { id: 'palette', label: 'Theme Palette' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              backgroundColor: activeTab === tab.id ? colors.mutedMoss : 'transparent',
              color: activeTab === tab.id ? '#fff' : colors.fogGray,
              border: `1px solid ${activeTab === tab.id ? colors.mutedMoss : colors.mutedMoss + '55'}`,
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Main Container */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem 1rem' }}>
        
        {/* TAB 1: GAME DESIGN */}
        {activeTab === 'design' && (
          <div>
            <section style={{ marginBottom: '3rem' }}>
              <h2 className="cinzel-font" style={{ color: '#fff', borderBottom: `2px solid ${colors.darkBloodRed}`, paddingBottom: '0.5rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
                Concept, Genre & Target Players
              </h2>
              <div style={{ backgroundColor: colors.darkForest, padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.mutedMoss}33` }}>
                <p><strong>Genre:</strong> First-Person Psychological Horror / Job Simulation / Narrative Mystery</p>
                <p><strong>Core Concept:</strong> Inspired by indie atmospheric horror and Filipino folklore (Aswang), players perform mundane retail tasks that slowly devolve into supernatural dread.</p>
                <p><strong>Target Audience:</strong> Horror enthusiasts, narrative-driven walking simulator fans, and players aged 16+.</p>
              </div>
            </section>

            {/* Storyline & Acts Filter */}
            <section style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <h2 className="cinzel-font" style={{ color: '#fff', margin: 0, letterSpacing: '0.5px' }}>Full Storyline & Acts</h2>
                <div className="mono-font" style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {['all', 'act 1', 'act 2', 'act 3', 'act 4', 'act 5'].map(actKey => (
                    <button
                      key={actKey}
                      onClick={() => setSelectedAct(actKey)}
                      style={{
                        backgroundColor: selectedAct === actKey ? colors.darkBloodRed : colors.darkForest,
                        color: '#fff',
                        border: `1px solid ${colors.mutedMoss}55`,
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        textTransform: 'capitalize'
                      }}
                    >
                      {actKey}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gap: '1.2rem' }}>
                {filteredActs.map((item, idx) => (
                  <div key={idx} style={{ backgroundColor: colors.darkForest, padding: '1.5rem', borderRadius: '8px', borderLeft: `4px solid ${colors.darkBloodRed}` }}>
                    <span className="mono-font" style={{ color: colors.mutedMoss, fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{item.act}</span>
                    <h3 className="cinzel-font" style={{ color: '#fff', margin: '0.3rem 0 0.8rem 0' }}>{item.title}</h3>
                    <p style={{ margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Plot Twist Section */}
            <section style={{ marginBottom: '3rem', backgroundColor: `${colors.darkBloodRed}22`, border: `1px solid ${colors.darkBloodRed}`, padding: '2rem', borderRadius: '8px' }}>
              <h3 className="cinzel-font" style={{ color: '#fff', marginTop: 0 }}>🎭 The Narrative Plot Twist</h3>
              {!plotTwistRevealed ? (
                <div>
                  <p>The game features a major psychological revelation at the climax that reframes the entire narrative.</p>
                  <button 
                    className="mono-font"
                    onClick={() => setPlotTwistRevealed(true)}
                    style={{ backgroundColor: colors.darkBloodRed, color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Reveal Plot Twist Spoiler
                  </button>
                </div>
              ) : (
                <div style={{ backgroundColor: colors.almostBlack, padding: '1.2rem', borderRadius: '6px', borderLeft: `4px solid ${colors.darkBloodRed}` }}>
                  <p className="mono-font" style={{ color: '#fff', fontWeight: '600', margin: '0 0 0.5rem 0' }}>THE FINAL REVEAL:</p>
                  <p style={{ margin: 0 }}>
                    The victim killed in the hit-and-run on the Act 1 Breaking News broadcast <strong>was the protagonist all along</strong>. Having died before the game even began, every shift, customer interaction, and supernatural encounter was a purgatorial hallucination trapped inside the protagonist's fading afterlife.
                  </p>
                </div>
              )}
            </section>

            {/* Character Profiles with Search */}
            <section style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h2 className="cinzel-font" style={{ color: '#fff', margin: 0, letterSpacing: '0.5px' }}>Character Profiles</h2>
                <input 
                  className="mono-font"
                  type="text" 
                  placeholder="Search characters..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ backgroundColor: colors.darkForest, border: `1px solid ${colors.mutedMoss}`, color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                {filteredCharacters.map((char, idx) => (
                  <div key={idx} style={{ backgroundColor: colors.darkForest, padding: '1.2rem', borderRadius: '8px', border: `1px solid ${colors.mutedMoss}33` }}>
                    <h4 className="cinzel-font" style={{ color: '#fff', margin: '0 0 0.2rem 0', fontSize: '1.1rem' }}>{char.name}</h4>
                    <span className="mono-font" style={{ color: colors.mutedMoss, fontSize: '0.8rem', fontWeight: 'bold' }}>{char.role}</span>
                    <p style={{ margin: '0.8rem 0 0 0', fontSize: '0.95rem', lineHeight: '1.5' }}>{char.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Level Maps */}
            <section>
              <h2 className="cinzel-font" style={{ color: '#fff', borderBottom: `2px solid ${colors.darkBloodRed}`, paddingBottom: '0.5rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
                Level Design & Environments
              </h2>
              <div className="mono-font" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => setActiveMap('home')}
                  style={{ backgroundColor: activeMap === 'home' ? colors.mutedMoss : colors.darkForest, color: '#fff', border: `1px solid ${colors.mutedMoss}`, padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
                >
                  Map 01: Residence
                </button>
                <button 
                  onClick={() => setActiveMap('station')}
                  style={{ backgroundColor: activeMap === 'station' ? colors.mutedMoss : colors.darkForest, color: '#fff', border: `1px solid ${colors.mutedMoss}`, padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
                >
                  Map 02: Jojo's Gas Station
                </button>
              </div>
              <div style={{ backgroundColor: colors.darkForest, padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.mutedMoss}33` }}>
                {activeMap === 'home' ? (
                  <div>
                    <h3 className="cinzel-font" style={{ color: '#fff', marginTop: 0 }}>🏠 The Protagonist's House (Acts 1, 3, 5)</h3>
                    <p>Features kitchen (fridge/stove), living room (TV & front window where the pigeon and Aswang appear), bathroom (mirror & sink for the brownout sequence), and bedroom.</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="cinzel-font" style={{ color: '#fff', marginTop: 0 }}>⛽ Jojo's Gas Station (Acts 2 & 4)</h3>
                    <p>Features main convenience retail floor, checkout counter, public restroom (where John is found), back stockroom (mop, trash, inventory boxes), and rear alley dumpster.</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: TECHNICAL & TYPOGRAPHY STYLING */}
        {activeTab === 'technical' && (
          <div>
            <section style={{ marginBottom: '3rem' }}>
              <h2 className="cinzel-font" style={{ color: '#fff', borderBottom: `2px solid ${colors.darkBloodRed}`, paddingBottom: '0.5rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
                Engine, Version & Typography Standards
              </h2>
              <div style={{ backgroundColor: colors.darkForest, padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.mutedMoss}33` }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                  <li><strong>Game Engine:</strong> Unity 2022.3 LTS</li>
                  <li><strong>Scripting Language:</strong> C#</li>
                  <li><strong>Website Stack:</strong> React, Vite, and TypeScript</li>
                  <li><strong>Cinzel Font:</strong> Used for headings, logo, and titles to create a mysterious, classic horror feel.</li>
                  <li><strong>Share Tech Mono:</strong> Used for navigation, descriptions, labels, buttons, and VHS/terminal elements for a retro-tech aesthetic.</li>
                  <li><strong>Inter Font:</strong> Used as the base font for general text and readability.</li>
                </ul>
              </div>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="cinzel-font" style={{ color: '#fff', borderBottom: `2px solid ${colors.darkBloodRed}`, paddingBottom: '0.5rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
                Project & Script Structure
              </h2>
              <pre className="mono-font" style={{ backgroundColor: colors.darkForest, padding: '1.2rem', borderRadius: '8px', overflowX: 'auto', color: '#88cc88', fontSize: '0.9rem', border: `1px solid ${colors.mutedMoss}33` }}>
{`Nightshift-Jojos-Gas-Station/
├── Assets/
│   ├── Audio/          # Rain, thunder, POS beeps, demonic whispers
│   ├── Materials/      # Glass shatter, blood decals, wet shaders
│   ├── Models/         # Gas station props, GoChips, Snickers, mop
│   ├── Scenes/         # MainMenu, Act1_House, Act2_Gas, Act3_Storm, Act4_Night2, Act5_Ending
│   └── Scripts/
│       ├── Player/     # FirstPersonController.cs, InteractionRaycaster.cs
│       ├── Systems/    # DialogueManager.cs, CheckoutScanner.cs, TaskTracker.cs
│       └── Events/     # JumpscareTrigger.cs, ActTransitionManager.cs`}
              </pre>
            </section>

            <section>
              <h2 className="cinzel-font" style={{ color: '#fff', borderBottom: `2px solid ${colors.darkBloodRed}`, paddingBottom: '0.5rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
                Build & Repository Info
              </h2>
              <div style={{ backgroundColor: colors.darkForest, padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.mutedMoss}33` }}>
                <p><strong>Course Code:</strong> IT306 – Game Development</p>
                <p><strong>GitHub Repository:</strong> <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: colors.mutedMoss }}>github.com/le-em/nightshift-jojos-gas-station</a></p>
                <p><strong>Known Limitations:</strong> Minor physics jitter when dropping stock boxes onto the cashier counter; subtitle timing requires fine-tuning during rapid dialogue triggers.</p>
              </div>
            </section>
          </div>
        )}

        {/* TAB 3: GAMEPLAY TRAILER */}
        {activeTab === 'trailer' && (
          <div>
            <h2 className="cinzel-font" style={{ color: '#fff', borderBottom: `2px solid ${colors.darkBloodRed}`, paddingBottom: '0.5rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
              Official Gameplay Trailer
            </h2>
            <div style={{ backgroundColor: colors.darkForest, padding: '2rem', borderRadius: '8px', border: `1px solid ${colors.mutedMoss}33`, textAlign: 'center' }}>
              <p style={{ marginBottom: '1.5rem' }}>Watch the official promotional and gameplay walkthrough trailer for <strong>Nightshift: Jojo's Gas Station</strong>:</p>
              
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', backgroundColor: '#000', border: `1px solid ${colors.mutedMoss}` }}>
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Nightshift: Jojo's Gas Station Gameplay Trailer" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mono-font" style={{ fontSize: '0.85rem', color: colors.distressedGray, marginTop: '1rem' }}>
                *Note: Replace the YouTube embed link above with your actual gameplay trailer video link.*
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: TEAM & RECORD */}
        {activeTab === 'record' && (
          <div>
            <section style={{ marginBottom: '3rem' }}>
              <h2 className="cinzel-font" style={{ color: '#fff', borderBottom: `2px solid ${colors.darkBloodRed}`, paddingBottom: '0.5rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
                Team Members & Contributions (IT306)
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                {teamData.map((member, idx) => (
                  <div key={idx} style={{ backgroundColor: colors.darkForest, padding: '1.2rem', borderRadius: '8px', border: `1px solid ${colors.mutedMoss}33` }}>
                    <h4 className="cinzel-font" style={{ color: '#fff', margin: '0 0 0.2rem 0' }}>{member.name}</h4>
                    <span className="mono-font" style={{ color: colors.mutedMoss, fontSize: '0.85rem', fontWeight: 'bold', display: 'block', marginBottom: '0.6rem' }}>{member.role}</span>
                    <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: '1.5', color: colors.fogGray }}>{member.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 className="cinzel-font" style={{ color: '#fff', borderBottom: `2px solid ${colors.darkBloodRed}`, paddingBottom: '0.5rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
                Version History / Changelog
              </h2>
              <div style={{ backgroundColor: colors.darkForest, padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.mutedMoss}33` }}>
                <p><strong>v1.0.0 (Final Release):</strong> Integrated Acts 1–5, complete audio mixing, plot-twist ending sequence, and UI polish.</p>
                <p><strong>v0.3.0:</strong> Added brownout mechanics, candle lighting, thunderstorm audio, and jumpscare triggers.</p>
                <p><strong>v0.2.0:</strong> Implemented POS scanning, mopping/trash mechanics, and NPC dialogue trees.</p>
                <p><strong>v0.1.0:</strong> Initial prototype, first-person movement, and basic environment blockouts.</p>
              </div>
            </section>

            <section>
              <h2 className="cinzel-font" style={{ color: '#fff', borderBottom: `2px solid ${colors.darkBloodRed}`, paddingBottom: '0.5rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
                Playtest Feedback & Lessons Learned
              </h2>
              <div style={{ backgroundColor: colors.darkForest, padding: '1.5rem', borderRadius: '8px', border: `1px solid ${colors.mutedMoss}33` }}>
                <p><strong>Playtest Issue:</strong> Testers struggled to find the candle during the Act 3 brownout.</p>
                <p><strong>Fix Implemented:</strong> Added subtle moonlight bounce near the hallway and visual prompt guidance.</p>
                <p><strong>Takeaway:</strong> Pacing mundane retail work builds genuine vulnerability, making sudden horror moments significantly more effective.</p>
              </div>
            </section>
          </div>
        )}

        {/* TAB 5: THEME PALETTE */}
        {activeTab === 'palette' && (
          <div>
            <h2 className="cinzel-font" style={{ color: '#fff', borderBottom: `2px solid ${colors.darkBloodRed}`, paddingBottom: '0.5rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
              Color Palette Reference
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>Click any color swatch below to copy its hex code:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { name: 'Almost Black', hex: colors.almostBlack, desc: 'Main background' },
                { name: 'Dark Forest', hex: colors.darkForest, desc: 'Atmospheric backgrounds' },
                { name: 'Deep Green', hex: colors.deepGreen, desc: 'Containers and subtle lighting' },
                { name: 'Muted Moss', hex: colors.mutedMoss, desc: 'Green accents' },
                { name: 'Fog Gray', hex: colors.fogGray, desc: 'Body text' },
                { name: 'Distressed Gray', hex: colors.distressedGray, desc: 'Secondary text' },
                { name: 'Dark Blood Red', hex: colors.darkBloodRed, desc: 'Warning details and highlights' }
              ].map(c => (
                <div 
                  key={c.hex} 
                  onClick={() => copyColorCode(c.hex)}
                  style={{ backgroundColor: c.hex, border: `1px solid ${colors.mutedMoss}55`, padding: '1.2rem', borderRadius: '8px', cursor: 'pointer', position: 'relative' }}
                >
                  <div style={{ height: '40px', backgroundColor: c.hex, border: '1px solid rgba(255,255,255,0.2)', marginBottom: '0.8rem', borderRadius: '4px' }}></div>
                  <h4 className="cinzel-font" style={{ color: '#fff', margin: '0 0 0.2rem 0' }}>{c.name}</h4>
                  <code className="mono-font" style={{ color: colors.distressedGray, fontSize: '0.85rem' }}>{c.hex}</code>
                  <p style={{ color: colors.distressedGray, fontSize: '0.8rem', margin: '0.4rem 0 0 0' }}>{c.desc}</p>
                  {copiedColor === c.hex && (
                    <span className="mono-font" style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#fff', color: '#000', fontSize: '0.7rem', padding: '0.2rem 0.4rem', borderRadius: '3px', fontWeight: 'bold' }}>
                      Copied!
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mono-font" style={{ backgroundColor: colors.darkForest, borderTop: `1px solid ${colors.mutedMoss}44`, textAlign: 'center', padding: '1.5rem', marginTop: '3rem', fontSize: '0.9rem', color: colors.distressedGray }}>
        <p>IT306 – Game Development Final Project (Documentation & Trailer) | Nightshift: Jojo's Gas Station</p>
      </footer>

    </div>
  );
}