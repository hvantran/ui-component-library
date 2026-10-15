export interface PetSkillDefinition {
  name: string;
  description: string;
  videoFile: string;
}

export const PET_STAGE_ABILITIES: Record<string, PetSkillDefinition> = {
  'sproutling-stage-1': {
    name: 'Seedling Sprout',
    description: 'Emits gentle chlorophyll mist that calms exam anxiety and restores 5 Vitality per minute of sustained focus.',
    videoFile: 'sproutling-stage-1-sproutling.mp4',
  },
  'sproutling-stage-2': {
    name: 'Blossom Ward',
    description: 'Shields focus from sudden alert fatigue, converting study milestones into bonus bond points.',
    videoFile: 'sproutling-stage-2-bloomfaun.mp4',
  },
  'sproutling-stage-3': {
    name: 'Ancient Sylvan Canopy',
    description: 'Channels deep forest roots to grant immunity to distraction spikes and boosts integrity streak exp by +15%.',
    videoFile: 'sproutling-stage-3-verdant-forest-stag.mp4',
  },
  'pipflick-stage-1': {
    name: 'Bubble Trickle',
    description: 'Splashes cool droplets to refresh fatigued eyes and reset short attention lapses.',
    videoFile: 'pipflick-stage-1-pipflick.mp4',
  },
  'pipflick-stage-2': {
    name: 'Tidal Current',
    description: 'Establishes a steady rhythmic stream that smooths test pacing during timed question blocks.',
    videoFile: 'pipflick-stage-2-aquafinne.mp4',
  },
  'pipflick-stage-3': {
    name: 'Oceanic Surge',
    description: 'Unleashes a tidal crest that cleanses session tension and awards +20% Integrity Bond upon exam completion.',
    videoFile: 'pipflick-stage-3-leviataide.mp4',
  },
  'embersqueak-stage-1': {
    name: 'Spark Nibble',
    description: 'Ignites tiny hearth embers that kindle motivation and ward off early study lethargy.',
    videoFile: 'embersqueak-stage-1-embersqueak.mp4',
  },
  'embersqueak-stage-2': {
    name: 'Flame Claw',
    description: 'Strikes through challenging problem sets with radiant heat, boosting problem-solving momentum.',
    videoFile: 'embersqueak-stage-2-pyreclaw.mp4',
  },
  'embersqueak-stage-3': {
    name: 'Solar Flare Prowl',
    description: 'Radiates solar warmth across the workspace, increasing critical thinking accuracy during high-stakes exams.',
    videoFile: 'embersqueak-stage-3-solartiger.mp4',
  },
  'zephyrpuff-stage-1': {
    name: 'Breeze Hop',
    description: 'Stirs a gentle updraft that clears mental haze during routine test-taking.',
    videoFile: 'zephyrpuff-stage-1-pufftail.mp4',
  },
  'zephyrpuff-stage-2': {
    name: 'Gale Leap',
    description: 'Propels quick comprehension through dense reading passages with swirling wind vortexes.',
    videoFile: 'zephyrpuff-stage-2-zephyrhare.mp4',
  },
  'zephyrpuff-stage-3': {
    name: 'Cyclonic Grace',
    description: 'Commands serene cyclonic currents that stabilize heart rate and sustain uninterrupted deep concentration.',
    videoFile: 'zephyrpuff-stage-3-tempest-lop.mp4',
  },
  'frostpaw-stage-1': {
    name: 'Chilled Paws',
    description: 'Touches the workspace with cool frost, soothing test anxiety and rapid pulse.',
    videoFile: 'frostpaw-stage-1-frostpup.mp4',
  },
  'frostpaw-stage-2': {
    name: 'Glacial Prowl',
    description: 'Freezes intrusive thoughts and distractions in their tracks with crystalline chill.',
    videoFile: 'frostpaw-stage-2-cryoleo.mp4',
  },
  'frostpaw-stage-3': {
    name: 'Avalanche Roar',
    description: 'Unleashes an icy roar that locks in cognitive clarity and shields from peripheral movements.',
    videoFile: 'frostpaw-stage-3-glacial-panthera.mp4',
  },
  'frostpaw-stage-4': {
    name: 'Absolute Zero Sanctuary',
    description: 'Envelops the candidate in an impenetrable diamond-ice sanctuary, ensuring zero integrity infractions.',
    videoFile: 'frostpaw-stage-4-primordial-frost-overlord.mp4',
  },
  'magmafang-stage-1': {
    name: 'Cinder Snort',
    description: 'Snorts glowing embers that spark determined perseverance when facing tricky arithmetic.',
    videoFile: 'magmafang-stage-1-cinderpig.mp4',
  },
  'magmafang-stage-2': {
    name: 'Tectonic Charge',
    description: 'Slams hooves to shatter hesitation, providing an immediate burst of exam stamina.',
    videoFile: 'magmafang-stage-2-pyrotusk.mp4',
  },
  'magmafang-stage-3': {
    name: 'Caldera Eruption',
    description: 'Channels molten subterranean power to burn away self-doubt during complex essay sections.',
    videoFile: 'magmafang-stage-3-caldera-razorback.mp4',
  },
  'magmafang-stage-4': {
    name: 'Volcanic Core Titan',
    description: 'Erects an unbreakable obsidian bastion infused with core magma, granting absolute test-room tenacity.',
    videoFile: 'magmafang-stage-4-volcanoking-behemoth.mp4',
  },
  'voltwing-stage-1': {
    name: 'Static Chirp',
    description: 'Sends a pleasant static pulse through posture, correcting slouching and drowsy focus.',
    videoFile: 'voltwing-stage-1-sparkhoot.mp4',
  },
  'voltwing-stage-2': {
    name: 'Thunder Glide',
    description: 'Glides on ionic thermal updrafts to accelerate rapid analytical synthesis.',
    videoFile: 'voltwing-stage-2-electrofeather.mp4',
  },
  'voltwing-stage-3': {
    name: 'Lightning Talon Dive',
    description: 'Strikes precise knowledge recall into long-term memory with pinpoint electrical precision.',
    videoFile: 'voltwing-stage-3-tempest-talon.mp4',
  },
  'voltwing-stage-4': {
    name: 'Raijin Storm Tempest',
    description: 'Unfurls electrified gale wings that banish brain fog and supercharge test calculation velocity by +25%.',
    videoFile: 'voltwing-stage-4-raijin-strix-overlord.mp4',
  },
  'thundercat-stage-1': {
    name: 'Spark Pounce',
    description: 'Pounces playfully with crackling claws to re-engage attention after prolonged stillness.',
    videoFile: 'thundercat-stage-1-sparkpaw.mp4',
  },
  'thundercat-stage-2': {
    name: 'Volt Fang',
    description: 'Bites into complex questions with instantaneous logic sparks and decisive clarity.',
    videoFile: 'thundercat-stage-2-boltfang.mp4',
  },
  'thundercat-stage-3': {
    name: 'Raijin Thunderclap',
    description: 'Summons rolling thunder reverberations that dissolve surrounding acoustic noise.',
    videoFile: 'thundercat-stage-3-raijintiger.mp4',
  },
  'thundercat-stage-4': {
    name: 'Tempest Overlord Surge',
    description: 'Engulfs the entire test chamber in controlled lightning plasma, locking total student focus into flow state.',
    videoFile: 'thundercat-stage-4-tempest-overlord.mp4',
  },
  'phoenix-stage-1': {
    name: 'Solar Sparkle',
    description: 'Flickers warm golden embers that reassure and uplift the student during initial exam jitters.',
    videoFile: 'phoenix-stage-1-sun-ember-fledgling.mp4',
  },
  'phoenix-stage-2': {
    name: 'Ignited Radiance',
    description: 'Flares radiant sunfire across the mind, incinerating second-guessing and hesitation.',
    videoFile: 'phoenix-stage-2-ignited-pyrepaw.mp4',
  },
  'phoenix-stage-3': {
    name: 'Solar Phoenix Dive',
    description: 'Cascades blazing solar feathers to reignite flagging energy halfway through multi-hour exams.',
    videoFile: 'phoenix-stage-3-solar-firebird.mp4',
  },
  'phoenix-stage-4': {
    name: 'Pyre Sovereign Rebirth',
    description: 'Triggers an exam comeback aura, restoring integrity shield after unintentional tab blips.',
    videoFile: 'phoenix-stage-4-pyre-sovereign.mp4',
  },
  'phoenix-stage-5': {
    name: 'Primordial Solar Corona',
    description: 'Radiates cosmic solar supremacy, bestowing immaculate focus, maximum star yield, and radiant integrity.',
    videoFile: 'phoenix-stage-5-primordial-solar-emperor.mp4',
  },
  'chronochimera-stage-1': {
    name: 'Chrono Tick',
    description: 'Synchronizes breathing with steady second-hand clicks, settling anxious rush.',
    videoFile: 'chronochimera-stage-1-chronopip.mp4',
  },
  'chronochimera-stage-2': {
    name: 'Temporal Stitch',
    description: 'Mends fragmented attention spans by weaving split seconds into coherent thought blocks.',
    videoFile: 'chronochimera-stage-2-chronokit.mp4',
  },
  'chronochimera-stage-3': {
    name: 'Aeon Howl',
    description: 'Echoes across timelines to grant immediate recollection of reviewed revision notes.',
    videoFile: 'chronochimera-stage-3-chrono-hound.mp4',
  },
  'chronochimera-stage-4': {
    name: 'Spacetime Horn Charge',
    description: 'Charges through temporal distortions, preserving deep focus even under strict countdown limits.',
    videoFile: 'chronochimera-stage-4-tempoceros.mp4',
  },
  'chronochimera-stage-5': {
    name: 'Prime Chronos Sovereign',
    description: 'Freezes external study stress in suspended animation, allowing serene mastery of all exam sections.',
    videoFile: 'chronochimera-stage-5-chronos-prime-sovereign.mp4',
  },
  'shadowpanther-stage-1': {
    name: 'Umbral Stalk',
    description: 'Blends into quiet room shadows, shielding the test-taker from ambient eye-strain.',
    videoFile: 'shadowpanther-stage-1-umbralpaw.mp4',
  },
  'shadowpanther-stage-2': {
    name: 'Night Stalker Veil',
    description: 'Veils the candidate in soothing darkness, keeping ambient lighting glare from disrupting focus.',
    videoFile: 'shadowpanther-stage-2-nightstalker.mp4',
  },
  'shadowpanther-stage-3': {
    name: 'Eclipse Fang',
    description: 'Snuffs out background chatter and screen distractions with midnight shadow tendrils.',
    videoFile: 'shadowpanther-stage-3-eclipsefang.mp4',
  },
  'shadowpanther-stage-4': {
    name: 'Umbral Nemesis Cloak',
    description: 'Wraps peripheral vision in deep twilight, channeling 100% sensory bandwidth onto exam prompts.',
    videoFile: 'shadowpanther-stage-4-umbral-nemesis.mp4',
  },
  'shadowpanther-stage-5': {
    name: 'Primordial Umbral Eclipse',
    description: 'Commands the eternal cosmic night, making the proctoring environment serene, silent, and flawlessly secure.',
    videoFile: 'shadowpanther-stage-5-primordial-umbral-monarch.mp4',
  },
  'stormstag-stage-1': {
    name: 'Spark Antler Gleam',
    description: 'Gleams with static sparks from velvet antlers, sharpening initial problem identification.',
    videoFile: 'stormstag-stage-1-sparkfawn.mp4',
  },
  'stormstag-stage-2': {
    name: 'Bolt Leap',
    description: 'Leaps through complex multi-step reasoning with swift electrical bounding strides.',
    videoFile: 'stormstag-stage-2-boltstag.mp4',
  },
  'stormstag-stage-3': {
    name: 'Tempest Antler Arc',
    description: 'Discharges controlled ionized arcs that dissolve fatigue and revitalize problem-solving stamina.',
    videoFile: 'stormstag-stage-3-tempest-buck.mp4',
  },
  'stormstag-stage-4': {
    name: 'Thunderlord Majesty',
    description: 'Summons an encompassing magnetic field that repels wandering glances and keeps posture upright.',
    videoFile: 'stormstag-stage-4-thunderlord-cervus.mp4',
  },
  'stormstag-stage-5': {
    name: 'Primordial Storm Crown',
    description: 'Ascends into the storm heavens, blessing the scholar with lightning-fast comprehension and boundless vitality.',
    videoFile: 'stormstag-stage-5-primordial-storm-sovereign.mp4',
  },
  'astraldragon-stage-1': {
    name: 'Stardust Glimmer',
    description: 'Spill twinkling stardust across the desk, instilling tranquil cosmic wonder.',
    videoFile: 'astraldragon-stage-1-stardrop-wyrmlet.mp4',
  },
  'astraldragon-stage-2': {
    name: 'Astral Glide',
    description: 'Glides on solar winds to navigate complex exam questions with effortless agility.',
    videoFile: 'astraldragon-stage-2-astral-drakelet.mp4',
  },
  'astraldragon-stage-3': {
    name: 'Nebula Flare Breath',
    description: 'Breathes iridescent nebular flames that illuminate obscure concepts and tricky math formulas.',
    videoFile: 'astraldragon-stage-3-nebula-drake.mp4',
  },
  'astraldragon-stage-4': {
    name: 'Constellation Aegis',
    description: 'Aligns zodiacal star bridges into an unyielding integrity shield, preventing proctor flags.',
    videoFile: 'astraldragon-stage-4-constellation-wyrm.mp4',
  },
  'astraldragon-stage-5': {
    name: 'Supernova Roar',
    description: 'Roars with supernova luminescence, shattering cognitive roadblocks during critical final review.',
    videoFile: 'astraldragon-stage-5-astral-sovereign-wyrm.mp4',
  },
  'astraldragon-stage-6': {
    name: 'Cosmic Singularity Transcendence',
    description: 'Channels the primordial celestial matrix, bestowing god-tier academic flow and supreme integrity mastery.',
    videoFile: 'astraldragon-stage-6-primordial-astral-sovereign.mp4',
  },
  'astralleviathan-stage-1': {
    name: 'Astraea Splash',
    description: 'Ripples celestial pond water to bring refreshing calm during initial question intake.',
    videoFile: 'astralleviathan-stage-1-astraea-pip.mp4',
  },
  'astralleviathan-stage-2': {
    name: 'Starlight Drift',
    description: 'Drifts gracefully across cosmic oceanic currents, stabilizing pace through long exam stretches.',
    videoFile: 'astralleviathan-stage-2-stardrifter.mp4',
  },
  'astralleviathan-stage-3': {
    name: 'Nebula Tide Fluke',
    description: 'Swishes flukes to cast nebular bioluminescence, dispelling mental fatigue and eye strain.',
    videoFile: 'astralleviathan-stage-3-nebula-leviathan.mp4',
  },
  'astralleviathan-stage-4': {
    name: 'Starborne Spout',
    description: 'Spouts a geyser of starlight that showers the workspace with enhanced analytical focus.',
    videoFile: 'astralleviathan-stage-4-starborne-titan.mp4',
  },
  'astralleviathan-stage-5': {
    name: 'Astral Tide Convergence',
    description: 'Merges water and stellar cosmos into an oceanic barrier that absorbs test pressure completely.',
    videoFile: 'astralleviathan-stage-6-primordial-astral-leviathan-overlord.mp4',
  },
  'astralleviathan-stage-6': {
    name: 'Primordial Cosmic Oceanic Song',
    description: 'Sings the song of ancient celestial seas, bestowing boundless stamina and divine exam harmony.',
    videoFile: 'astralleviathan-stage-5-cosmos-emperor-leviathan.mp4',
  },
  'solarwyvern-stage-1': {
    name: 'Solar Chirp',
    description: 'Emits a cheerful solar chirp that banishes morning exam drowsiness and warms focus.',
    videoFile: 'solarwyvern-stage-1-solarpup.mp4',
  },
  'solarwyvern-stage-2': {
    name: 'Sunfire Wing Flap',
    description: 'Beats fiery wings to fan away stagnant air, infusing fresh oxygen and clarity into thinking.',
    videoFile: 'solarwyvern-stage-2-pyrodrake.mp4',
  },
  'solarwyvern-stage-3': {
    name: 'Solar Flare Breath',
    description: 'Exhales dazzling solar plasma that incinerates doubts and clarifies challenging test stems.',
    videoFile: 'solarwyvern-stage-3-sunflare-wyrm.mp4',
  },
  'solarwyvern-stage-4': {
    name: 'Helios Sunstorm',
    description: 'Unleashes a sweeping solar gale that accelerates reading speed and sharpens recall precision.',
    videoFile: 'solarwyvern-stage-4-helios-sovereign-wyvern.mp4',
  },
  'solarwyvern-stage-5': {
    name: 'Corona Archon Flame',
    description: 'Crowning solar coronas burn away time pressure, creating a golden dome of uninterrupted composure.',
    videoFile: 'solarwyvern-stage-5-primordial-corona-drake.mp4',
  },
  'solarwyvern-stage-6': {
    name: 'Sol Invictus Supernova',
    description: 'Ignites primordial apex solar fire, guaranteeing triumphant exam excellence and stellar bond.',
    videoFile: 'solarwyvern-stage-6-sol-invictus-primordial-overlord.mp4',
  },
  'voiddragon-stage-1': {
    name: 'Abyssal Spark',
    description: 'Flickers tiny purple abyssal motes that ground nervous tremors before testing commences.',
    videoFile: 'voiddragon-stage-1-voidling-pip.mp4',
  },
  'voiddragon-stage-2': {
    name: 'Nether Drake Gaze',
    description: 'Fixes an unblinking nether gaze that zeroes in on difficult exam questions without wavering.',
    videoFile: 'voiddragon-stage-2-abyssal-wyrmlet.mp4',
  },
  'voiddragon-stage-3': {
    name: 'Void Pulse',
    description: 'Pulses silent void waves that swallow ambient noise and chat echoes in the exam hall.',
    videoFile: 'voiddragon-stage-3-nether-drake.mp4',
  },
  'voiddragon-stage-4': {
    name: 'Netherfire Breath',
    description: 'Unleashes shadowy violet dragonflame that burns away peripheral temptations and multitasking urges.',
    videoFile: 'voiddragon-stage-4-void-wyrm-knight.mp4',
  },
  'voiddragon-stage-5': {
    name: 'Dimensional Rift Tear',
    description: 'Opens a micro-tear in space to isolate the student workspace into an inviolable study dimension.',
    videoFile: 'voiddragon-stage-5-nether-shadow-sovereign.mp4',
  },
  'voiddragon-stage-6': {
    name: 'Event Horizon Claws',
    description: 'Rips through tricky false choices with gravity-bending claws, ensuring pristine test discernment.',
    videoFile: 'voiddragon-stage-6-dimensional-void-wyrm.mp4',
  },
  'voiddragon-stage-7': {
    name: 'Cosmic Rift Breath',
    description: 'Unleash a rift of cosmic energy.',
    videoFile: 'voiddragon-stage-7-event-horizon-dragon.mp4',
  },
  'voiddragon-stage-8': {
    name: 'Void Singularity',
    description: 'Summon a cinematic black hole.',
    videoFile: 'voiddragon-stage-8-primordial-void-singularity-overlord.mp4',
  },
  'chronodraco-stage-1': {
    name: 'Chrono Flap',
    description: 'Flaps translucent bronze wings to balance the flow of time at the beginning of an exam.',
    videoFile: 'chronodraco-stage-1-chronowing-pip.mp4',
  },
  'chronodraco-stage-2': {
    name: 'Hourglass Spark',
    description: 'Spills luminous hourglass grains that grant a subconscious intuition for section time limits.',
    videoFile: 'chronodraco-stage-2-chrono-drakelet.mp4',
  },
  'chronodraco-stage-3': {
    name: 'Temporal Drake Roar',
    description: 'Roars across the timeline to reclaim wasted seconds from unexpected computer lag or stutter.',
    videoFile: 'chronodraco-stage-3-rift-drake.mp4',
  },
  'chronodraco-stage-4': {
    name: 'Astrolabe Starlight Dial',
    description: 'Projects celestial astrolabe dials that calculate the optimal order of tackling test questions.',
    videoFile: 'chronodraco-stage-4-astrolabe-wyrm.mp4',
  },
  'chronodraco-stage-5': {
    name: 'Continuum Lightning Breath',
    description: 'Breathes temporal lightning plasma that accelerates neuronal synapse firing for instant answers.',
    videoFile: 'chronodraco-stage-5-chrono-sovereign-drake.mp4',
  },
  'chronodraco-stage-6': {
    name: 'Temporal Sovereign Distortion',
    description: 'Bends the perceptual fabric of time, making intense 60-minute blocks feel calm and unhurried.',
    videoFile: 'chronodraco-stage-6-continuum-wyrm-sovereign.mp4',
  },
  'chronodraco-stage-7': {
    name: 'Aeon Singularity Burst',
    description: 'Triggers an aeon burst of cosmic chronology, resetting cognitive fatigue back to full freshness.',
    videoFile: 'chronodraco-stage-7-aeon-singularity-dragon.mp4',
  },
  'chronodraco-stage-8': {
    name: 'Lord of All Timelines',
    description: 'Rules every dimension of the continuum, conferring flawless exam mastery across past, present, and future.',
    videoFile: 'chronodraco-stage-8-primordial-chrono-dragon-overlord.mp4',
  },
  'aegispaladin-stage-1': {
    name: 'Shield Tap',
    description: 'Taps a miniature divine buckler to banish early nervousness and erect basic focus posture.',
    videoFile: 'aegispaladin-stage-1-aegis-pip.mp4',
  },
  'aegispaladin-stage-2': {
    name: 'Righteous Glow',
    description: 'Glows with virtuous golden light, reminding the scholar of the honor of honest academic effort.',
    videoFile: 'aegispaladin-stage-2-aegis-drakeling.mp4',
  },
  'aegispaladin-stage-3': {
    name: 'Earth Bastion Stomp',
    description: 'Stomps grounded granite tremors to firmly anchor physical posture and prevent restless fidgeting.',
    videoFile: 'aegispaladin-stage-3-bastion-draco-knight.mp4',
  },
  'aegispaladin-stage-4': {
    name: 'Sacred Judicator Smite',
    description: 'Smites dishonest impulses and shortcut temptations with blinding celestial dragon justice.',
    videoFile: 'aegispaladin-stage-4-holy-crest-crusader.mp4',
  },
  'aegispaladin-stage-5': {
    name: 'Divine Solar Aegis',
    description: 'Summons an orbital radiant sun shield that absorbs exam stress and reflects confidence.',
    videoFile: 'aegispaladin-stage-5-radiant-grand-sovereign.mp4',
  },
  'aegispaladin-stage-6': {
    name: 'Astral Justiciar Wings',
    description: 'Spreads six cosmic wings of holy judgment, elevating integrity compliance score to perfection.',
    videoFile: 'aegispaladin-stage-6-astral-justiciar-wyrm.mp4',
  },
  'aegispaladin-stage-7': {
    name: 'Seraphic Deity Sanction',
    description: 'Channels ancient divine deity seals that purge fatigue and bestow profound intellectual serenity.',
    videoFile: 'aegispaladin-stage-7-seraphic-aegis-deity.mp4',
  },
  'aegispaladin-stage-8': {
    name: 'Galactic Aegis Bastion',
    description: 'Manifests a grounded sacred sanctuary of cosmic starlight, conferring supreme integrity honors and immortal bond.',
    videoFile: 'aegispaladin-stage-8-primordial-celestial-paladin-overlord.mp4',
  },
};

