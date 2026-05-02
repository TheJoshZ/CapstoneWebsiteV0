/* Version 0 - Checkpoint */
import { useState, useEffect } from 'react';

const PROJECTS = [
  {
    id: '01',
    category: 'Academia',
    title: 'Capstone: Hermes - VTOL UAV for Search and Rescue',
    description: 'Designed and assembled a VTOL UAV for North Shore Rescue in Vancouver with a relay payload to maintain radio communications in rural terrain masked areas.',
    year: '2025',
    tools: ['SolidWorks', '3D Printing', 'FEM'],
    outcome: 'Prototype Tested',
    hasDetail: true
  },
  {
    id: '02',
    category: 'Academia',
    title: 'AIAA Unlimited Class Air Racer: SR-7',
    description: 'Designed a clean-sheet "Unlimited Class" air racer for the AIAA competition. Featured a flying-wing configuration with tandem pusher-puller propulsion, a prone pilot position, and optimized supercritical airfoils for Mach 0.8 racing speeds.',
    year: '2025',
    tools: ['SolidWorks', 'XFLR5', 'Aerodynamics'],
    outcome: 'Complete',
    hasDetail: true
  },
  {
    id: '03',
    category: 'Competition',
    title: 'Jellyfish',
    description: 'UBCO Aerospace\'s student-built drone for the 2025 AEAC Student UAS Competition, designed for wildfire detection and response.',
    year: '2023-2026',
    tools: ['SolidWorks', 'Carbon Fiber', 'AEAC'],
    outcome: 'Hardware Flight Test Completed',
    hasDetail: true
  },
/*
  {
    id: '04',
    category: 'Competition',
    title: 'Orca',
    description: 'Orca is Canada’s first student design team helicopter, developed for the AEAC competition and awarded second place. Designed to carry dummy passenger payloads, Orca demonstrated strong flight performance with speeds exceeding 80 km/h. Its lightweight carbon fiber layup shell helped improve structural efficiency while supporting the aircraft’s aerodynamic and mission requirements.',
    year: '2026',
    tools: ['FEA', 'CAD', '3D printing'],
    outcome: '2nd place at International competion (AEAC)',
    hasDetail: false
  },
*/
  {
    id: '05',
    category: 'Extra Curricular',
    title: 'Guardian',
    description: 'Guardian is a 2-meter wingspan fixed-wing aircraft designed with a canard configuration to improve stability, control, and high stall angle performance. The aircraft was developed with a strong focus on design for manufacturing, ensuring that aerodynamic performance, structural efficiency, and practical fabrication methods were balanced throughout the design process.',
    year: '2025-2026',
    tools: ['CFD', 'XFLR5', '3D printing', 'Composite Manufacturing', 'Flight mechanics'],
    outcome: 'Ongoing Development',
    hasDetail: true
  }
];

const SKILLS = [
  {
    title: 'CAD',
    skills: ['SolidWorks', 'Onshape']
  },
  {
    title: 'Hardware',
    skills: ['Milling', 'Lathe', 'Soldering', 'Carbon fiber layup']
  },
  {
    title: 'Software',
    skills: ['MATLAB', 'Simulink', 'Python', 'C++']
  },
  {
    title: 'Analysis',
    skills: ['ANSYS Fluent CFD', 'SolidWorks FEA', 'XFoil (XFLR5 and Flow5)']
  },
  {
    title: 'FDM Printing',
    skills: ['Bambu Slicer', 'Prusa Slicer', 'IdeaMaker']
  }
];

const TIMELINE = [
  { year: '2026', event: 'Graduating B.A.Sc Aerospace', detail: 'University of British Columbia - Aerospace Concentration.' },
  { year: '2025', event: 'Director of Fixed Wing', detail: 'UBCO Aerospace — Coordinated structures and aerodynamics across 6 subteams.' },
  { year: '2025', event: 'Internship Researcher', detail: 'Boeing Germany — Developed Python and C++ HUD avionics for research simulator.' },
  { year: '2024', event: 'Fixed Wing CAD Design', detail: 'UBCO Aerospace — Led structural design of the team\'s first canard fixed wing UAV.' },
  { year: '2023', event: 'UAV CAD Lead', detail: 'UBCO Aerospace — Led structural CAD for 2 airframes and 2 payloads.' }
];

const ACHIEVEMENTS = [
  { mark: '★', title: '2nd Place - AEAC Competition', description: 'Earned 2nd place in the Canadian UAV competition for structural CAD and payload design.' },
  { mark: '★', title: 'Boeing Internship Researcher', description: 'Selected for a prestigious research internship at Boeing Germany, focusing on HUD avionics.' },
  { mark: '★', title: 'Horten IV Restoration Team', description: 'One of the few students selected to work on the world\'s last airworthy Horten flying wing.' },
  { mark: '★', title: 'Director of Fixed Wing', description: 'Leading a team of 30+ members in the design and manufacturing of advanced UAV platforms.' }
];

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [coords, setCoords] = useState('0.0°N · 0.0°W');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = ((e.clientX / window.innerWidth) * 360 - 180).toFixed(1);
      const y = ((e.clientY / window.innerHeight) * -180 + 90).toFixed(1);
      setCoords(`${Math.abs(Number(y))}°${Number(y) >= 0 ? 'N' : 'S'} · ${Math.abs(Number(x))}°${Number(x) >= 0 ? 'E' : 'W'}`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const showPage = (id: string) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav>
        <div className="nav-logo" onClick={() => showPage('home')}>JOSHUA<span>.</span>ZHU</div>
        <div className="nav-center">
          <a onClick={() => showPage('home')} className={activePage === 'home' ? 'active' : ''}>Home</a>
          <a onClick={() => showPage('about')} className={activePage === 'about' ? 'active' : ''}>About</a>
          <a onClick={() => showPage('projects')} className={activePage === 'projects' ? 'active' : ''}>Projects</a>
        </div>
        <div className="nav-coords">{coords}</div>
      </nav>

      <main className="flex-grow">
        {/* HOME PAGE */}
        <div id="home" className={`page ${activePage === 'home' ? 'active' : ''}`}>
          <div className="ruler-top"></div>
          <section className="hero">
            <div className="hero-left">
              <div className="cross cross-tl"></div>
              <div className="cross cross-br"></div>
              <div className="annot a-tl">FIG. 01 — PRINCIPAL VIEW</div>
              <div className="annot a-br">REF: JZ-2025-001</div>
              
              <div className="hero-eyebrow">Aerospace & Mechanical Engineer</div>
              <h1 className="hero-name">
                JOSHUA<br/>ZHU
                <span className="it">B.A.Sc Mechanical Engineering (Exp. 2026)</span>
              </h1>
              <p className="hero-sub">
                Passionate about CAD, mechanical mechanisms, and aircraft and UAV design.
              </p>
              <div className="hero-cta">
                <button className="btn btn-fill" onClick={() => showPage('projects')}>View Projects</button>
                <button className="btn btn-ghost" onClick={() => showPage('about')}>About Me</button>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-img-container">
                <img src="/image.jpg" alt="Joshua Zhu" className="hero-img" referrerPolicy="no-referrer" />
              </div>
              <div className="figure-caption">Figure 1 — Joshua Zhu with the Horten IV flying wing.</div>
            </div>
          </section>

          <section className="h-section">
            <div className="sec-label">Who I Am</div>
            <h2 className="sec-title readable-title" style={{ fontWeight: 300 }}>
              <strong>Director</strong> of Fixed Wing Division,<br/>
              <strong>Boeing</strong> Avionics Research Intern,<br/>
              AEAC UAV <strong>Competition</strong>.
            </h2>
            
            <div className="about-grid">
              <div>
                <p className="about-p">
                  I am a Mechanical and Aerospace Engineering student at University of British Columbia, specializing in aircraft and UAV design. My experience ranges from developing HUD avionics at <strong>Boeing</strong> Germany to restoring the world's last airworthy Horten IV flying wing with Akaflieg Darmstadt.
                </p>
                <p className="about-p mt-4">
                  I am deeply passionate about aerodynamics, flight mechanics, CAD, FEA, and mechanical design in general. As <strong>Director</strong> of Fixed Wing at UBCO Aerospace, I lead multidisciplinary teams to push the boundaries of what's possible in the skies.
                </p>
                <div className="skills-grid-new !grid-cols-2 !gap-x-8">
                  {SKILLS.slice(0, 4).map((cat) => (
                    <div key={cat.title} className="skill-cat-group">
                      <div className="skill-cat-name">{cat.title}</div>
                      <div className="skill-blocks">
                        {cat.skills.map(skill => (
                          <span key={skill} className="skill-block">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="more-link" onClick={() => showPage('about')}>Full profile</div>
              </div>
              
              <div className="stats-col">
                <div className="stat-box">
                  <span className="stat-box-n">UBC</span>
                  <span className="stat-box-l">Aerospace Concentration</span>
                </div>
                <div className="stat-box">
                  <span className="stat-box-n">6+</span>
                  <span className="stat-box-l">Major Projects</span>
                </div>
              </div>
            </div>
          </section>

          <section className="h-section" style={{background:'var(--parchment)'}}>
            <div className="sec-label">Selected Work</div>
            <h2 className="sec-title">Projects.</h2>
            
            <div className="proj-home-grid">
              {PROJECTS.slice(0, 3).map((proj) => (
                <div key={proj.id} className="phcard" onClick={() => showPage('projects')}>
                  <div className="phcard-num">{proj.id}</div>
                  <h3 className="phcard-title">{proj.title}</h3>
                  <p className="phcard-desc">{proj.description.substring(0, 100)}...</p>
                  <span className="phcard-cat">{proj.category}</span>
                </div>
              ))}
            </div>
            
            <div className="btn btn-ghost" style={{marginTop:'3rem',display:'inline-block'}} onClick={() => showPage('projects')}>All Projects</div>
          </section>
        </div>

        {/* ABOUT PAGE */}
        <div id="about" className={`page ${activePage === 'about' ? 'active' : ''}`}>
          <div className="page-hero">
            <div className="cross cross-tl"></div>
            <div className="cross cross-br"></div>
            <div className="annot a-tl">FIG. 01 — BIOGRAPHY</div>
            <div className="ph-eyebrow">// About Me</div>
            <h1 className="ph-title" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
              <strong>Director</strong> of Fixed Wing Division,<br/>
              <strong>Boeing</strong> Avionics Research Intern,<br/>
              AEAC UAV <strong>Competition</strong>.
            </h1>
            <div className="ph-bg">JZ</div>
          </div>

          <div className="bio-wrap">
            <div className="bio-col">
              <h2 className="bio-heading">Hi, I'm Joshua.</h2>
              <p className="bio-p">I am a Mechanical and Aerospace Engineering student at University of British Columbia, specializing in aircraft and UAV design. My experience ranges from developing HUD avionics at <strong>Boeing</strong> Germany to restoring the world's last airworthy Horten IV flying wing with Akaflieg Darmstadt.</p>
              <p className="bio-p">I am deeply passionate about aerodynamics, flight mechanics, CAD, FEA, and mechanical design in general. As <strong>Director</strong> of Fixed Wing at UBCO Aerospace, I lead multidisciplinary teams to push the boundaries of what's possible in the skies.</p>
            </div>
            <div className="bio-col" style={{background:'var(--parchment)',display:'flex',flexDirection:'column',alignItems:'center', padding: '2rem'}}>
              <div className="photo-box" style={{background: 'none', width: 'auto', border: 'none'}}>
                <img src="/IMG_2756.jpg" alt="Joshua Zhu" className="about-img" referrerPolicy="no-referrer" />
              </div>
              <div className="figure-caption">Figure 1 — Joshua Zhu at a museum.</div>
            </div>
          </div>

          <section className="skills-wrap">
            <div className="sec-label">Capabilities</div>
            <h2 className="sec-title">Technical Skills.</h2>
            <div className="skills-grid-new">
              {SKILLS.map((cat) => (
                <div key={cat.title} className="skill-cat-group">
                  <div className="skill-cat-name">{cat.title}</div>
                  <div className="skill-blocks">
                    {cat.skills.map(skill => (
                      <span key={skill} className="skill-block">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="ach-wrap">
            <div className="sec-label">Recognition</div>
            <h2 className="sec-title">Achievements.</h2>
            <div className="ach-grid">
              {ACHIEVEMENTS.map(ach => (
                <div key={ach.title} className="ach-item">
                  <div className="ach-mark">{ach.mark}</div>
                  <div>
                    <div className="ach-title">{ach.title}</div>
                    <div className="ach-desc">{ach.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="tl-wrap">
            <div className="sec-label">Journey</div>
            <h2 className="sec-title">Timeline.</h2>
            <div className="timeline">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="tl-item">
                  <div className="tl-year">
                    {idx > 0 && TIMELINE[idx-1].year === item.year ? "↳" : item.year}
                  </div>
                  <div className="tl-spine">
                    <div className="tl-line" style={{height:'20px',flex:'none', background: idx === 0 ? 'transparent' : 'var(--line)'}}></div>
                    <div className="tl-dot"></div>
                    <div className="tl-line" style={{background: idx === TIMELINE.length - 1 ? 'transparent' : 'var(--line)'}}></div>
                  </div>
                  <div className="tl-content">
                    <div className="tl-event">{item.event}</div>
                    <div className="tl-detail">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* PROJECTS PAGE */}
        <div id="projects" className={`page ${activePage === 'projects' ? 'active' : ''}`}>
          <div className="page-hero">
            <div className="cross cross-tl"></div>
            <div className="cross cross-br"></div>
            <div className="annot a-tl">FIG. 01 — TECHNICAL WORK</div>
            <div className="ph-eyebrow">// Projects</div>
            <h1 className="ph-title">
              Work I'm<br/>
              <span className="it">proud of.</span>
            </h1>
            <div className="ph-bg">PROJ</div>
          </div>

          <div className="proj-list">
            {['Academia', 'Competition', 'Extra Curricular'].map(category => (
              <div key={category} className="mb-16">
                <h2 className="font-display text-4xl text-brown mb-8 border-b border-line pb-2">{category}</h2>
                <div className="space-y-8">
                  {PROJECTS.filter(p => p.category === category).map(proj => (
                    <div key={proj.id} className="proj-card" onClick={() => proj.hasDetail && setSelectedProject(proj.id)}>
                      <div className="proj-thumb">
                        <div className="proj-n">{proj.id}</div>
                        {proj.id === '01' ? (
                          <img src="/Proj-Capstone-Thumb.png" alt="Hermes Thumbnail" className="w-full h-full object-contain p-4 opacity-80" referrerPolicy="no-referrer" />
                        ) : proj.id === '02' ? (
                          <img src="/Porj-AIAA/ENGR 493 Project phase 4-3 Image[70].jpg" alt="SR-7 Thumbnail" className="w-full h-full object-contain p-4 opacity-80" referrerPolicy="no-referrer" />
                        ) : proj.id === '03' ? (
                          <img src="/Proj-Jellyfish/Proj-Jelly-Thumb.png" alt="Jellyfish Thumbnail" className="w-full h-full object-contain p-4 opacity-80" referrerPolicy="no-referrer" />
                        ) : proj.id === '05' ? (
                          <img src="/Proj-Guard/DSCF1022.png" alt="Guardian Thumbnail" className="w-full h-full object-contain p-4 opacity-80" referrerPolicy="no-referrer" />
                        ) : (
                          <svg className="proj-thumb-svg" viewBox="0 0 200 90" fill="none" stroke="#4A2F1A" strokeWidth="1">
                            <path d="M15 45 Q55 28 105 42 Q145 54 185 44" />
                            <path d="M55 42 L58 62 L95 62 L92 42" strokeWidth=".8" />
                          </svg>
                        )}
                      </div>
                      <div className="proj-info">
                        <div className="proj-tags-row">
                          {proj.tools.map(tool => (
                            <span key={tool} className="ptag">{tool}</span>
                          ))}
                        </div>
                        <h2 className="proj-title-big">{proj.title}</h2>
                        <p className="proj-body">{proj.description}</p>
                        <div className="proj-meta-row">
                          <div><div className="pmeta-k">Year</div><div className="pmeta-v">{proj.year}</div></div>
                          <div><div className="pmeta-k">Outcome</div><div className="pmeta-v">{proj.outcome}</div></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECT DETAIL OVERLAY: Jellyfish */}
        {selectedProject === '03' && (
          <div className="project-detail-overlay">
            <button className="close-detail" onClick={() => setSelectedProject(null)}>Close [ESC]</button>
            <div className="project-detail-container">
              <header className="project-detail-header">
                <div className="flex justify-between items-start mb-8">
                  <div className="annot">FIG. 03 — COMPETITION DRONE</div>
                  <div className="flex gap-6 items-center">
                    <img src="/ubc-logo-png-transparent.png" alt="UBC Logo" className="h-12 w-auto opacity-80" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <h1 className="project-detail-title">Jellyfish</h1>
                <div className="project-detail-meta" style={{fontSize: '1.35rem', color: 'var(--ink)', opacity: '1', fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.01em', lineHeight: '1.6', fontWeight: '500'}}>
                  <span><strong style={{fontWeight: '800', color: 'var(--terracotta)'}}>Competition:</strong> AEAC Student UAS</span>
                  <span><strong style={{fontWeight: '800', color: 'var(--terracotta)'}}>Year:</strong> 2025</span>
                  <span><strong style={{fontWeight: '800', color: 'var(--terracotta)'}}>Role:</strong> Structural CAD & Payload Design</span>
                </div>
              </header>

              <div className="project-detail-content">
                <section className="project-section">
                  <h2 className="project-section-title">0.0 Summary</h2>
                  <div className="project-grid-2">
                    <p className="project-text italic border-l-2 border-terracotta pl-6 py-2 bg-parchment/50">
                      Jellyfish is UBCO Aerospace's student-built drone, designed to compete in the 2025 Aerial Evolution Association of Canada (AEAC) Student UAS Competition. This national competition challenges university teams to design, build, and fly drones capable of supporting wildfire detection and response.
                    </p>
                    <div className="project-image-box">
                      <img src="/Proj-Jellyfish/Proj-Jelly-Task12026.png" alt="Jellyfish" className="project-image-full" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Figure 1 — Jellyfish: The Club's Wildfire Response Drone.</div>
                    </div>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">1.0 Why We Built Jellyfish</h2>
                  <div className="project-text">
                    After Canada's record-breaking wildfire season in 2023, the AEAC created a competition where students design drones to help detect fires early and deliver water to hotspots.
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">2.0 The Competition Tasks</h2>
                  <div className="project-text">
                    The AEAC competition required teams to complete two missions:
                    <ol className="list-decimal pl-5 mt-4 space-y-4">
                      <li>
                        <strong>Hotspot Detection and Mapping:</strong>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Find simulated wildfire "hotspots" (infrared beacons).</li>
                          <li>Identify the cause of the fire.</li>
                          <li>Submit a digital map (KML file).</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Water Transport:</strong>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Pick up water from a large tank.</li>
                          <li>Drop it into smaller target buckets across the field.</li>
                          <li>Deliver as much water as possible, as evenly as possible.</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">3.0 The Drone: Jellyfish</h2>
                  <div className="project-text">
                    Jellyfish was designed from the ground up to meet these wildfire challenges.
                  </div>
                  <div className="project-text mt-8">
                    <ul className="list-disc pl-5 space-y-4">
                      <li><strong>Aircraft Design:</strong> Carbon fiber quadcopter frame.</li>
                      <li><strong>Motors & Power:</strong> MN8012 Antigravity motors + dual 27Ah Li-ion batteries for <strong>30+ minutes of flight</strong>.</li>
                      <li><strong>Payload:</strong>
                        <ul className="list-disc pl-5 mt-2">
                          <li><strong>Hotspot Detection:</strong> Infrared camera with custom filter + onboard AI.</li>
                          <li><strong>Water Transport:</strong> Cylindrical baffled tank with dual pumps and solenoid valves.</li>
                        </ul>
                      </li>
                      <li><strong>Autonomy:</strong> Capable of automated takeoff, mapping, and water drops — with manual override for safety.</li>
                    </ul>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">4.0 Performance at the 2025 AEAC Competition</h2>
                  <h3 className="text-xl font-bold mb-4">Task 1 – Hotspot Detection</h3>
                  <div className="project-text mt-4">
                    Jellyfish began its autonomous search but faced camera and telemetry issues. Midway, a motor controller (ESC) failure forced an emergency landing.
                  </div>

                  <h3 className="text-xl font-bold mt-12 mb-4">Task 2 – Water Transport</h3>
                  <div className="project-text mt-4">
                    In Task 2, Jellyfish successfully pumped and carried water. Strong prairie winds and connectivity issues required manual intervention, but the tank and pump system validated well under real-world conditions.
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">5.0 What We Learned</h2>
                  <div className="project-text">
                    <ul className="list-disc pl-5 space-y-4">
                      <li><strong>Reliability is key:</strong> A single solder fault caused a mission-ending ESC failure.</li>
                      <li><strong>Autonomy under pressure:</strong> Our AI and pumping systems worked in testing but struggled in competition.</li>
                      <li><strong>Weather resilience:</strong> Tank baffles and vibration dampers kept Jellyfish stable in high winds.</li>
                    </ul>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">6.0 Looking Ahead</h2>
                  <div className="project-text">
                    Future work will focus on:
                    <ul className="list-disc pl-5 mt-4 space-y-2">
                      <li>More robust electronics and redundancy.</li>
                      <li>Improved real-time hotspot detection.</li>
                      <li>Greater autonomy in water pickup and delivery.</li>
                    </ul>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">About the Team</h2>
                  <p className="project-text">
                    The <strong>UBCO Aerospace</strong> is a student-run group developing drones and aerospace tech. Competitions like AEAC allow us to test designs against real-world wildfire challenges.
                  </p>
                  <div className="project-logo-strip mt-12">
                    <div className="font-mono text-xs uppercase tracking-widest opacity-50">Institution //</div>
                    <div className="text-brown font-display text-xl">UNIVERSITY OF BRITISH COLUMBIA</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT DETAIL OVERLAY: AIAA SR-7 */}
        {selectedProject === '02' && (
          <div className="project-detail-overlay">
            <button className="close-detail" onClick={() => setSelectedProject(null)}>Close [ESC]</button>
            <div className="project-detail-container">
              <header className="project-detail-header">
                <div className="flex justify-between items-start mb-8">
                  <div className="annot">FIG. 02 — AIAA AIR RACER</div>
                  <div className="flex gap-6 items-center">
                    <img src="/ubc-logo-png-transparent.png" alt="UBC Logo" className="h-12 w-auto opacity-80" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <h1 className="project-detail-title">Sepehr-Racer 7 (SR-7): Unlimited Class Racer</h1>
                <div className="project-detail-meta" style={{fontSize: '1.35rem', color: 'var(--ink)', opacity: '1', fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.01em', lineHeight: '1.6', fontWeight: '500'}}>
                  <span><strong style={{fontWeight: '800', color: 'var(--terracotta)'}}>Competition:</strong> AIAA Unlimited Class</span>
                  <span><strong style={{fontWeight: '800', color: 'var(--terracotta)'}}>Year:</strong> 2025</span>
                  <span><strong style={{fontWeight: '800', color: 'var(--terracotta)'}}>Role:</strong> Aerodynamic Analysis & CAD Design</span>
                </div>
              </header>

              <div className="project-detail-content">
                <section className="project-section">
                  <h2 className="project-section-title">0.0 Summary</h2>
                  <div className="project-grid-2">
                    <p className="project-text italic border-l-2 border-terracotta pl-6 py-2 bg-parchment/50">
                      The SR-7 is a clean-sheet aircraft designed to outperform existing race records at the National Championship Air Races. By prioritizing aerodynamic efficiency and "Performance Driven Innovation," the team developed a radical flying-wing configuration that challenges traditional racing aircraft norms.
                    </p>
                    <div className="project-image-box">
                      <img src="/Porj-AIAA/ENGR 493 Project phase 4-3 Image[1].jpg" alt="SR-7 Cover" className="project-image-full" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Figure 1 — AIAA Unlimited Class Air Racer Project Cover.</div>
                    </div>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">1.0 The Competition & Philosophy</h2>
                  <div className="project-text">
                    <p className="mb-6">
                      The <strong>AIAA Unlimited Class Air Racer</strong> competition challenges teams to design a "clean-sheet" aircraft capable of outperforming existing records at the National Championship Air Races. Unlike historical entries which often rely on modified WWII-era airframes, this Request for Design (RfD) demands original engineering solutions for high-speed pylon racing.
                    </p>
                    <p className="mb-6 italic border-l-2 border-terracotta pl-6 py-2 bg-parchment/50">
                      Our design philosophy, <strong>"Performance Driven Innovation,"</strong> focuses on maximizing aerodynamic efficiency. Minimizing drag and maximizing speed guided every major decision, from wing planform to supercritical airfoil selection, while maintaining feasibility through rigorous stability analysis.
                    </p>
                  </div>
                  
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-left border-collapse font-mono text-xs">
                      <thead>
                        <tr className="border-b border-terracotta/30 text-terracotta">
                          <th className="py-2 pr-4">Requirement</th>
                          <th className="py-2">Constraint</th>
                        </tr>
                      </thead>
                      <tbody className="opacity-80">
                        <tr className="border-b border-line/10"><td className="py-2 pr-4">Power Plant</td><td className="py-2">Piston-engine (Turbo-charging allowed)</td></tr>
                        <tr className="border-b border-line/10"><td className="py-2 pr-4">Crew</td><td className="py-2">1 Pilot (Prone position utilized)</td></tr>
                        <tr className="border-b border-line/10"><td className="py-2 pr-4">Empty Weight</td><td className="py-2">&gt; 4,500 lb (Class Rule)</td></tr>
                        <tr className="border-b border-line/10"><td className="py-2 pr-4">Structural Loading</td><td className="py-2">Sustain +6g</td></tr>
                        <tr className="border-b border-line/10"><td className="py-2 pr-4">Ferry Range</td><td className="py-2">≥ 500 nmi</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">2.0 Innovation & Engineering</h2>
                  <div className="project-grid-2 mb-8">
                    <div className="project-text">
                      <h3 className="text-xl font-bold mb-4">2.1 Flying Wing & Prone Position</h3>
                      The SR-7 deviates from conventional layouts by eliminating the fuselage and tail, significantly reducing skin friction and interference drag. To further optimize the profile, the pilot is positioned in a <strong>prone (laying down) position</strong>, similar to the Horten IV glider. This not only reduces the cross-sectional area but also increases the pilot's G-tolerance during high-speed pylon turns.
                    </div>
                    <div className="project-image-box">
                      <img src="/Porj-AIAA/ENGR 493 Project phase 4-3 Image[70].jpg" alt="SR-7 Isometric" className="project-image-full" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Figure 2 — Isometric view of the Sepehr-Racer 7 (SR-7).</div>
                    </div>
                  </div>

                  <div className="project-grid-2">
                    <div className="project-text">
                      <h3 className="text-xl font-bold mb-4">2.2 Aerodynamic Stability</h3>
                      Tailless aircraft face inherent longitudinal stability challenges. We resolved this through two primary mechanisms:
                      <ul className="list-disc pl-5 mt-4 space-y-2">
                        <li><strong>Reflexed Airfoils:</strong> Utilized NASA SC(2)-0610 supercritical airfoils with reflexed trailing edges to generate a restoring nose-up pitching moment.</li>
                        <li><strong>Geometric Washout:</strong> Integrated wing twist (washout) to ensure the wingtips have a lower angle of incidence, creating a stabilizing couple.</li>
                      </ul>
                    </div>
                    <div className="project-image-box">
                      <img src="/Porj-AIAA/ENGR 493 Project phase 4-3 Image[71].jpg" alt="SR-7 3-Body View" className="project-image-full" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Figure 3 — 3-Body view showing internal layout and control surfaces.</div>
                    </div>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">2.3 Conceptual Alternatives</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="project-image-box">
                      <img src="/Porj-AIAA/ENGR 493 Project phase 4-3 Image[17].jpg" alt="Design A" className="project-image-full h-48 object-contain" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Design A: Conventional</div>
                    </div>
                    <div className="project-image-box">
                      <img src="/Porj-AIAA/ENGR 493 Project phase 4-3 Image[19].jpg" alt="Design B" className="project-image-full h-48 object-contain" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Design B: Flying Wing</div>
                    </div>
                    <div className="project-image-box">
                      <img src="/Porj-AIAA/ENGR 493 Project phase 4-3 Image[20].jpg" alt="Design C" className="project-image-full h-48 object-contain" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Design C: Tandem Pusher-Puller</div>
                    </div>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">3.0 Methodology & Design Cycle</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="border-l border-terracotta/30 pl-4">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-terracotta mb-4">Phase I: Definition</h3>
                      <p className="text-sm leading-relaxed opacity-80">
                        Started with the AIAA RfD. Conducted market analysis to define the mission, generated three conceptual designs, and used a ranking matrix to select the <strong>Flying Wing (Design B)</strong>.
                      </p>
                    </div>
                    <div className="border-l border-terracotta/30 pl-4">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-terracotta mb-4">Phase II: Sizing</h3>
                      <p className="text-sm leading-relaxed opacity-80">
                        Defined initial parameters (Mach 0.8). Selected the <strong>SC(2)-0610 airfoil</strong> and established initial wing geometry including Area, AR, Sweep, and Taper.
                      </p>
                    </div>
                    <div className="border-l border-terracotta/30 pl-4">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-terracotta mb-4">Phase III: Validation</h3>
                      <p className="text-sm leading-relaxed opacity-80">
                        Validated via <strong>XFLR5</strong>. Identified deficiencies like aft CG and dynamic instability, then implemented mitigations to reach a validated design.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/30 p-6 border border-line">
                    <div className="font-mono text-[0.65rem] uppercase tracking-widest mb-4 opacity-50 text-center">Table 11: Design Selection Ranking Matrix //</div>
                    <table className="w-full text-left border-collapse font-mono text-[0.7rem]">
                      <thead>
                        <tr className="border-b border-terracotta/30 text-terracotta">
                          <th className="py-2">Merit Factor</th>
                          <th className="py-2">Weight</th>
                          <th className="py-2 text-center">Design B (Selected)</th>
                        </tr>
                      </thead>
                      <tbody className="opacity-80">
                        <tr className="border-b border-line/10"><td className="py-2">Aerodynamic Efficiency (L/D)</td><td className="py-2">0.5</td><td className="py-2 text-center">1</td></tr>
                        <tr className="border-b border-line/10"><td className="py-2">Speed Potential</td><td className="py-2">0.3</td><td className="py-2 text-center">1</td></tr>
                        <tr className="border-b border-line/10"><td className="py-2">Stability & Control</td><td className="py-2">0.1</td><td className="py-2 text-center">-1</td></tr>
                        <tr className="border-b border-line/10"><td className="py-2">Manufacturability</td><td className="py-2">0.05</td><td className="py-2 text-center">-1</td></tr>
                        <tr className="border-b border-line/10"><td className="py-2">Ferry Mission Compatibility</td><td className="py-2">0.05</td><td className="py-2 text-center">-1</td></tr>
                        <tr className="font-bold text-brown"><td className="py-2">Weighted Total</td><td className="py-2">1.0</td><td className="py-2 text-center">0.6</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">4.0 Performance Analysis</h2>
                  <div className="project-grid-2 mb-8">
                    <div className="project-text">
                      Through iterative refinement using carpet plots, we optimized the aircraft for two distinct missions. The tandem engine configuration utilizes two Rolls Royce Griffon 130 engines, providing explosive thrust for the racing mission while maintaining efficient cruise for the ferry mission.
                    </div>
                    <div className="project-image-box">
                      <img src="/Porj-AIAA/ENGR 493 Project phase 4-3 Image[28].jpg" alt="Simulated Drag" className="project-image-full" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Figure 4 — Simulated Drag Surface Analysis.</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/30 p-6 border border-line">
                      <div className="font-mono text-[0.65rem] uppercase tracking-widest mb-4 opacity-50">Mission 1: Racing //</div>
                      <table className="w-full text-left border-collapse font-mono text-xs">
                        <tbody className="opacity-80">
                          <tr className="border-b border-line/10"><td className="py-2 pr-4">Fuel Weight</td><td className="py-2">1,658 lb</td></tr>
                          <tr className="border-b border-line/10"><td className="py-2 pr-4">MTOW</td><td className="py-2">7,037 lb</td></tr>
                          <tr className="border-b border-line/10"><td className="py-2 pr-4">Wing Loading</td><td className="py-2">11 lb/ft²</td></tr>
                          <tr className="border-b border-line/10"><td className="py-2 pr-4">Power Loading</td><td className="py-2">1.537 lb/hp</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-white/30 p-6 border border-line">
                      <div className="font-mono text-[0.65rem] uppercase tracking-widest mb-4 opacity-50">Mission 2: Ferry //</div>
                      <table className="w-full text-left border-collapse font-mono text-xs">
                        <tbody className="opacity-80">
                          <tr className="border-b border-line/10"><td className="py-2 pr-4">Fuel Weight</td><td className="py-2">2,180 lb</td></tr>
                          <tr className="border-b border-line/10"><td className="py-2 pr-4">MTOW</td><td className="py-2">12,647 lb</td></tr>
                          <tr className="border-b border-line/10"><td className="py-2 pr-4">Wing Loading</td><td className="py-2">17 lb/ft²</td></tr>
                          <tr className="border-b border-line/10"><td className="py-2 pr-4">Power Loading</td><td className="py-2">2.675 lb/hp</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="project-logo-strip mt-12">
                    <div className="font-mono text-xs uppercase tracking-widest opacity-50">Institution //</div>
                    <div className="text-brown font-display text-xl">UNIVERSITY OF BRITISH COLUMBIA</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT DETAIL OVERLAY: Guardian */}
        {selectedProject === '05' && (
          <div className="project-detail-overlay">
            <button className="close-detail" onClick={() => setSelectedProject(null)}>CLOSE [ESC]</button>
            
            <div className="project-detail-container">
              <header className="project-detail-header">
                <div className="flex justify-between items-start mb-8">
                  <div className="annot">FIG. 05 — FLIGHT TESTING PROGRAM</div>
                  <div className="flex gap-6 items-center">
                    <img src="/ubc-logo-png-transparent.png" alt="UBC Logo" className="h-10 w-auto opacity-80" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <h1 className="project-detail-title">Project Guardian: Canard UAV Platform</h1>
                <div className="project-detail-meta" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginTop: '2.5rem', borderTop: '1px solid var(--line)', paddingTop: '2rem' }}>
                  <div className="meta-item-box">
                    <div className="meta-label">ROLE</div>
                    <div className="meta-val">Director of Fixed Wing</div>
                  </div>
                  <div className="meta-item-box">
                    <div className="meta-label">STATUS</div>
                    <div className="meta-val">V2 Completed</div>
                  </div>
                  <div className="meta-item-box">
                    <div className="meta-label">SYSTEM</div>
                    <div className="meta-val">Canard Configuration</div>
                  </div>
                  <div className="meta-item-box">
                    <div className="meta-label">WINGSPAN</div>
                    <div className="meta-val">2.0 Meters</div>
                  </div>
                </div>
              </header>

              <div className="project-detail-content">
                <section className="project-section">
                  <h2 className="project-section-title">0.0 Summary</h2>
                  <div className="project-grid-2">
                    <p className="project-text italic border-l-2 border-terracotta pl-6 py-2 bg-parchment/50">
                      The Guardian is the first fixed wing aircraft designed fully by the fixed wing division from UBCO Aerospace. This aircraft was created with the ultimate goal of enabling the division to compete in international competitions such as SAE, DBF, and other competitions of similar nature.
                    </p>
                    <div className="project-image-box">
                      <img src="/Proj-Guard/IMG_6471.JPG" alt="Guardian Aircraft" className="project-image-full" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Figure 1 — Guardian: The First In-House Fixed Wing Design.</div>
                    </div>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">1.0 Motivation: Why did we build the Guardian?</h2>
                  <div className="project-text">
                    The guardian was created with the ultimate goal of enabling the division to compete in international competitions. The aircraft was created with the dual long term intent of training members on aircraft design, manufacturing, flying and for the design to undergo iterative improvement.
                  </div>
                  <div className="project-text mt-4">
                    In the past, the division has had other small and similarly sized aircraft, none of which combined the elements of being fully designed by the entire division, being actively maintained, and being of medium size. 
                  </div>
                  <div className="project-image-box mt-8">
                    <img src="/Proj-Guard/20260205_232458.jpg" alt="Guardian Research" className="project-image-full" referrerPolicy="no-referrer" />
                    <div className="figure-caption">Figure 2 — Testing and iteration are core to the Guardian program.</div>
                  </div>
                  <div className="project-text mt-8">
                    Having the ability to iteratively improve ultimately allows the aircraft to be a testbed for new electronics, aerodynamics, and manufacturing processes and design. As the time and monetary cost for crashing a competition ready fixed wing is high, having the aircraft as a platform to test higher risk aerodynamics and structural designs is of great benefit.
                  </div>
                </section>

                <section className="project-section" style={{background:'var(--parchment)', margin:'4rem -2.5rem', padding:'4rem 2.5rem'}}>
                  <h2 className="project-section-title">2.0 Design Philosophy: Why the Lifting Canard?</h2>
                  <div className="project-text">
                    In 2025, the initial conceptual design for the Guardian was to be a conventional aircraft, similar to the size and weight of another previous design called the Borzoi. However, a point of divergence came when deciding how to mount the propeller.
                  </div>
                  <div className="project-image-box my-8">
                    <img src="/Proj-Guard/image2.png" alt="Design Schematic" className="project-image-full" referrerPolicy="no-referrer" />
                    <div className="figure-caption">Figure 3 — Canard configuration schematic optimized and verified using CFD. Note the large wake on the rear</div>
                  </div>
                  <div className="project-text">
                    Inspired by 2 real life canard aircraft found in a video game that many fixed wing members played, the <strong>Curtiss XP-55</strong> and the <strong>Kyūshū J7W Shinden</strong>, it was realized that by using a canard design, the rear mounted pusher propeller can be fully protected, regardless of whether the aircraft performs a conventional landing or a hard touchdown.
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">3.0 Specifications and Versions</h2>
                  
                  <div className="version-box mb-12 p-8 border border-line bg-white rounded-lg">
                    <h3 className="text-xl font-bold text-brown mb-4 uppercase tracking-wider">Guardian V1</h3>
                    <p className="project-text mb-6">
                      Constructed primarily of hotwired foam boards and carbon fiber rods connected by 3D printed joints. The wings and canards are both made with monkoted foam.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="spec-item p-4 bg-parchment/30 border border-line/20 rounded">
                          <div className="meta-label !m-0 !mb-1">Wingspan</div>
                          <div className="text-xl font-medium">2m</div>
                        </div>
                        <div className="spec-item p-4 bg-parchment/30 border border-line/20 rounded">
                          <div className="meta-label !m-0 !mb-1">Weight</div>
                          <div className="text-xl font-medium">~3.5 kg</div>
                        </div>
                        <div className="spec-item p-4 bg-parchment/30 border border-line/20 rounded">
                          <div className="meta-label !m-0 !mb-1">Stall Angle</div>
                          <div className="text-xl font-medium">14°</div>
                        </div>
                        <div className="spec-item p-4 bg-parchment/30 border border-line/20 rounded">
                          <div className="meta-label !m-0 !mb-1">Max Cl/Cd</div>
                          <div className="text-xl font-medium">16</div>
                        </div>
                      </div>
                      <div className="project-image-box">
                        <img src="/Proj-Guard/IMG_6464.JPG" alt="Guardian V1 Structure" className="project-image-full" referrerPolicy="no-referrer" />
                        <div className="figure-caption">Figure 4 — Guardian V1: Maiden Flight</div>
                      </div>
                    </div>
                  </div>

                  <div className="version-box p-8 border-2 border-terracotta bg-white/40 shadow-sm rounded-lg">
                    <h3 className="text-xl font-bold text-terracotta mb-4 uppercase tracking-wider">Guardian V2</h3>
                    <p className="project-text mb-6">
                      V2 aims to use <strong>stressed skin construction</strong> techniques by replacing the main wings with ribs contained by paper-reinforced foam skin, significantly increasing tensile strength and reliability.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <div className="grid grid-cols-2 gap-4 h-fit">
                        <div className="spec-item p-4 bg-white/50 border border-terracotta/20 rounded">
                          <div className="meta-label !m-0 !mb-1 text-terracotta">Wingspan</div>
                          <div className="text-xl font-medium">2m</div>
                        </div>
                        <div className="spec-item p-4 bg-white/50 border border-terracotta/20 rounded">
                          <div className="meta-label !m-0 !mb-1 text-terracotta">Weight</div>
                          <div className="text-xl font-medium">~3.5 kg</div>
                        </div>
                        <div className="spec-item p-4 bg-white/50 border border-terracotta/20 rounded">
                          <div className="meta-label !m-0 !mb-1 text-terracotta">Stall Angle</div>
                          <div className="text-xl font-medium">17°</div>
                        </div>
                        <div className="spec-item p-4 bg-white/50 border border-terracotta/20 rounded">
                          <div className="meta-label !m-0 !mb-1 text-terracotta">Stall Speed</div>
                          <div className="text-xl font-medium">6.3 m/s</div>
                        </div>
                      </div>
                      <div className="project-image-box">
                        <img src="/Proj-Guard/IMG_6880.jpg" alt="Guardian V2 Final" className="project-image-full" referrerPolicy="no-referrer" />
                        <div className="figure-caption">Figure 5 — Guardian V2: Final assembly with stressed skin rib-based wings.</div>
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-ink/70 italic">* Completed: February 2026</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}


        {/* PROJECT DETAIL OVERLAY: Hermes */}
        {selectedProject === '01' && (
          <div className="project-detail-overlay">
            <button className="close-detail" onClick={() => setSelectedProject(null)}>Close [ESC]</button>
            <div className="project-detail-container">
              <header className="project-detail-header">
                <div className="flex justify-between items-start mb-8">
                  <div className="annot">FIG. 01 — CAPSTONE PROJECT</div>
                  <div className="flex gap-6 items-center">
                    <img src="/ubc-logo-png-transparent.png" alt="UBC Logo" className="h-12 w-auto opacity-80" referrerPolicy="no-referrer" />
                    <img src="/Proj-Capstone-NSR-1.jpg" alt="North Shore Rescue Logo" className="h-12 w-auto opacity-80" referrerPolicy="no-referrer" />
                    <img src="/Capstone Logo.png" alt="Capstone Logo" className="h-12 w-auto opacity-80" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <h1 className="project-detail-title">Hermes: VTOL UAV Signal Relay</h1>
                <div className="project-detail-meta" style={{fontSize: '1.35rem', color: 'var(--ink)', opacity: '1', fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.01em', lineHeight: '1.6', fontWeight: '500'}}>
                  <span><strong style={{fontWeight: '800', color: 'var(--terracotta)'}}>Client:</strong> <a href="https://www.northshorerescue.com/" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta underline decoration-line underline-offset-4">North Shore Search & Rescue</a></span>
                  <span><strong style={{fontWeight: '800', color: 'var(--terracotta)'}}>Year:</strong> 2025-2026</span>
                  <span><strong style={{fontWeight: '800', color: 'var(--terracotta)'}}>Role:</strong> cad design aircraft aerodynamic analyses and design</span>
                </div>
              </header>

              <div className="project-detail-content">
                <section className="project-section">
                  <h2 className="project-section-title">0.0 Summary</h2>
                  <p className="project-text italic border-l-2 border-terracotta pl-6 py-2 bg-parchment/50">
                    As a part of my fourth year capstone project, we approached various search and rescue teams, ultimately collaborating with North Shore Rescue (NSR) at Vancouver, Canada, to design a signal relay UAV. Upon conducting research on the current market for VTOL capable UAVs that can meet our mission endurance and cost, we decided to target a goal of low initial cost and maintenance cost.
                    <br/><br/>
                    The final product cost <strong>2100</strong> CAD (shipping of items and tax inclusive).
                  </p>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">1.0 The Mission</h2>
                  <div className="project-grid-2">
                    <div className="project-text">
                      Through our first meeting with North Shore Rescues (NSR), we learnt that search and Rescue (SAR) operations in mountainous environments face a critical bottleneck: communication. Terrain obstruction quickly interferes with radio and telemetry signals, limiting the effective range of standard UAVs. NSR recounts experiences where their DJI Maverick 3s, a small quadcopter drone used to locate victims, would have benefited from a relay UAV enormously in erratic terrain such as mountains.
                      <br/><br/>
                      Our objective was to design <strong>Hermes</strong>, an aerial communication support platform that acts as a dedicated signal relay. By positioning Hermes at a high-altitude midpoint, we enable existing SAR drones to operate beyond line of sight (BVLOS) while maintaining stable control and video links.
                      <br/><br/>
                      NSR’s mission requirements are that the vehicle must possess 3 hours of loiter time, and be capable of STOL or VTOL (Short take off and landing, vertical take off and landing) due to the large variation of environment the team operates in. Initial requirements requested the UAV to be backpack portable, however in our third meeting the requirement was changed to allow for a larger wingspan, aircraft length, and mass.
                    </div>
                    <div className="project-image-box">
                      <img src="/Proj-Capstone-Team2.png" alt="Hermes Capstone Team" className="project-image-full" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Figure 1 — The Hermes Capstone Team with the final prototype.</div>
                    </div>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">2.0 Engineering & Iteration</h2>
                  <div className="project-text">
                    <h3 className="text-xl font-bold mb-4">2.1 Layout Selection: Why the Quad-Fixed Wing?</h3>
                    We initially considered several UAV layouts. It became apparent that the largest limiting factor in the design requirement is the STOL/VTOL capability. This eliminates the purely fixed wing option, leaving VTOL fixed wing, quadcopter and helicopter as the only valid layouts. As the helicopter is complex in terms of software and mechanical design, and the quadcopter does not provide the flight time required, the team chose to pursue a VTOL fixed wing.
                    <br/><br/>
                    We considered multiple layouts, tilt rotors, tail-sitters, but ultimately selected a hybrid quadplane architecture: combining the vertical takeoff capability of a quadcopter with the long-endurance efficiency of a fixed-wing airframe. This allows deployment in confined forest clearings where no runway exists. Although there are other aerodynamically superior configurations, the quadplane design is most robust, practical, well known, and simple.
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 my-8">
                    <div className="project-image-box">
                      <img src="/Proj-Capstone-topdown.jpg" alt="Hermes Top Down" className="project-image-full" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Figure 2 — Top-down view of the hybrid quadplane layout.</div>
                    </div>
                    <div className="project-image-box">
                      <img src="/Proj-Capstone-battery.jpg" alt="Battery Pack" className="project-image-full" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Figure 3 — Custom high-capacity battery pack assembly.</div>
                    </div>
                  </div>

                  <div className="project-grid-2 mt-8">
                    <div className="project-text">
                      <strong>2.2 Iterations:</strong>
                      <ul className="list-disc pl-5 mt-4 space-y-2">
                        <li><strong>Iteration 1-2:</strong> Initial tests showed insufficient lift. We diagnosed a current bottleneck in the battery packs and reinforced the foam airframe after a glue failure.</li>
                        <li><strong>Iteration 3:</strong> Discovered that the wings were blocking airflow from the quad motors. We completely redesigned the wing extenders to position the motors <em>below</em> the wings, drastically increasing thrust.</li>
                        <li><strong>Iteration 4:</strong> Achieved stable vertical flight. Discovered a synchronization issue in the tail motor ESC, which we resolved through firmware recalibration.</li>
                      </ul>
                    </div>
                    <div className="project-image-box">
                      <img src="/Proj-Capstone-batteryIN.jpg" alt="Battery Integration" className="project-image-full" referrerPolicy="no-referrer" />
                      <div className="figure-caption">Figure 4 — Battery integration within the fuselage.</div>
                    </div>
                  </div>

                  <div className="project-image-box mt-8">
                    <img src="/Iteration 4 Flight.gif" alt="Iteration 4 Flight Test" className="project-image-full" referrerPolicy="no-referrer" />
                    <div className="figure-caption">Figure 5 — Iteration 3: Successful vertical flight test.</div>
                  </div>

                  <div className="project-image-box mt-8">
                    <img src="/Proj-Capstone-sideview.png" alt="Hermes Side View" className="project-image-full" referrerPolicy="no-referrer" />
                    <div className="figure-caption">Figure 6 — Side profile view of the Hermes UAV prototype.</div>
                  </div>
                </section>

                <section className="project-section">
                  <h2 className="project-section-title">3.0 Outcome</h2>
                  <p className="project-text">
                    The final prototype successfully validated the airframe and flight capability in quadcopter mode. While time constraints limited full fixed-wing transition testing, the project demonstrated that a low-cost, repairable VTOL relay is a feasible solution for civilian SAR organizations.
                  </p>
                  <div className="project-logo-strip">
                    <div className="font-mono text-xs uppercase tracking-widest opacity-50">Partners //</div>
                    <div className="text-brown font-display text-xl">UBC OKANAGAN</div>
                    <div className="text-brown font-display text-xl">NORTH SHORE SAR</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer>
        <div className="ft-logo">JOSHUA ZHU <span className="text-[0.6rem] opacity-40 ml-2 font-mono">v0.0.0</span></div>
        <div className="ft-copy">© 2025 — ALL RIGHTS RESERVED</div>
        <div className="ft-links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Email</a>
        </div>
      </footer>
    </div>
  );
}
