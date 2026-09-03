const perks = [
     //-----survivor perks
    {
        name: "A Place For Us",
        type: "survivor",
        description: `
        while healing another survivor, both gain elusive. 
        whenever you finish healing the Obsession, you both gain elusive for 30s.
        `,
        image: "assets/aplaceforus.jpg"
    },

    {
        name: "ACE In The Hole",
        type: "survivor",
        description: `
        Whenever you loot an item from a chest, it will have: 
        •a Visceral or lower rarity add-on.
        •100% chance for uncommon or lower rarity add-on.
        `,
        image: "assets/aceinthehole.png"
    },

    {
        name: "Adrenaline",
        type: "survivor",
        description: `
        When all generators are completed, if you are downed or injured, heal instantly. 
        Then, ignoring exhausted:
        •Gain 50% haste for 4s 
        •gain exhausted for 40s
        `,
        image: "assets/adrenaline.png"
    },

    {
        name: "Aftercare",
        type: "survivor",
        description: `
        You and up to 3 survivors see eachothers auras whenever: 
        •you unhook them or they unhook you. You finish healing them, or they finish healing you. 
        this effect lasts until unhooked
        `,
        image: "assets/aftercare.png"
    },

    {
        name: "Alert",
        type: "survivor",
        description: `
        Whenever the killer breaks a pallet or breakable, or damages a generator: 
        •you hear a sound cue. you see their aura for 5s
        `,
        image: "assets/alert.png"
    },

    {
        name: "Any Means Necessary",
        type: "survivor",
        description: `
        While next to a Dropped Pallet, use 'A', 'circle' or 'left Click' for 3s to reset it. 
        you see the aura of dropped pallets
        `,
        image: "assets/anymeansnecessary.png"
    },

    {
        name: "Apocalyptic Ingenuity",
        type: "survivor",
        description: `
        After you rummage or unlock 1 chest, while next to a broken pallet, 
        use 'A', 'circle' or 'left Click'for 3s to create fragile pallet. 
        within 32m, you see the aura of broken pallets
        `,
        image: "assets/apocalypticingenuity.jpg"
    },

    {
        name: "Appraisal",
        type: "survivor",
        description: `
        when the trial starts you earn 4 token. 
        spend 1 token to rummage an empty chest up to 2 times per chest. 
        rummage 80% faster
        `,
        image: "assets/appraisal.png"
    },

   {
    name: "Autodidact",
    type: "survivor",

    description: `
         You start the trial with 0 tokens, up to 5.
         Your good basic healing skill checks give 15% less progress.

         While healing another survivor without a med-kit:

        • Whenever you hit a basic skill check, earn 1 token.
         • For each token, you gain 10% more progress.
          • You cannot get great basic skill checks.
          `,

    image: "assets/autodidact.png"
},
    {
        name: "Babysitter",
        type: "survivor",
        description: `
        whenever you unhook a survivor:
        •they gain haste 10% for 30s
        •they leave no Pools of blood for 30s
        •they leave no scratch marks for 30s
        •You see the killers aura for 8s
        `,
        image: "assets/babysitter.png"
    },

 {
        name: "Background Player",
        type: "survivor",
        description: `
       whenever the killer Picks-up another survivor, for
       then next 10s, when you start running: 
        •gain 50% haste for 5s
        •gain exhausted for 20 S
        `,
        image: "assets/backgroundplayer.jpg"
    },

  {
        name: "Bada Bada Boom",
        type: "survivor",
        description: `
      After repairing 20% of generators, while next to a 
      window, use ability button to trap it for 60s. all survivors see
      that windows's aura for that time

      when the killer vaults that window, the trap
      explodes and they gain 50% hindered for 6s
        `,
        image: "assets/badabadaboom.jpg"
    },

 {
        name: "Balanced Landing",
        type: "survivor",
        description: `
     Whenever you fall from atleast 1.25m:
        •Gain 50% haste for 3s 
        •gain exhausted for 40s
        •Your stagger is 75% shorter
        •Your grunts from falling are 100% quieter
        `,
        image: "assets/balancedlanding.jpg"
    },

      {
        name: "Bardic Inspiration",
        type: "survivor",
        description: `
        While idle, use "A", "circle" or "Left click" to perform,
        empowering all survivors within 16m for up to 15s. 
        while you are performing, other survivors will see your aura
        roll a D 20:
        •1| You scream, nothing happens
        •2-10| basic skill check give 1% progress
        •11-19| Basic skill checks give 2% progress
        •20| Basic skill checks give 3% progress

        If you complete the performance, this effect ends after 90s. Cooldown: 90S
        `,
        image: "assets/bardicinspiration.jpg"
    },

 {
        name: "Better Than New",
        type: "survivor",
        description: `
       Whenever you finish healing another survivor, 
       until they take damage:
        •They Bless and cleanse totems 16% faster
        •They heal 16% faster
        •They unlock chest 16% faster
        `,
        image: "assets/betterthannew.jpg"
    },

{
        name: "Better Together",
        type: "survivor",
        description: `
       While you are repairing a generator:
        •Other survivors see that generators aura
        •whenever the killer downs a survivor, you see
        the auras of all survivor for 30s
        `,
        image: "assets/bettertogether.jpg"
    },

     {
        name: "Bite The Bullet",
        type: "survivor",
        description: `
     While healing, you and the healed survivor make no
     noises, or grunts of pain. whenever you miss a
     basic skill check:
     
        •You loose only 1% progress
        •The killer is not alerted
        `,
        image: "assets/bitethebullet.jpg"
    },

     {
        name: "Blast Mine",
        type: "survivor",
        description: `
      After repairing 40% of generratos, while next to a
      generator, use interact button to trap it for 120s. all survivors
      see that generator's aura for that time

      when the killer damages that generator, the trap 
      explodes, then:
        •They are stunned for 4ss
        •Everyone nearby looking at the detonation is blinded
        `,
        image: "assets/blastmine.webp"
    },

     {
        name: "Blood Pact",
        type: "survivor",
        description: `
while you are not the obsession:
 •while you or the obsession are injured, you see eachother's auras
  •whenever you finish healing the obsession, or 
  they finish healing you, while within 16m of each
  other, you both gain 7% haste

  when trial starts, you are less likely to be the obession
        `,
        image: "assets/bloodpact.jpg"
    },

  {
        name: "Blood Rush",
        type: "survivor",
        description: `
        Until all generators are completed, whenever you are 
        unhooked, for the next 60s, while exhausted use 
        "A", "circle" or "Left Click" to lose ehausted instantly

        This is disabled by conspicuous actions
        `,
        image: "assets/bloodrush.jpg"
    },
     
      //---------killer perks
    {
        name: "A Nurse's Calling",
        type: "killer",
        description: `
        Within 32m of survivors who are healing or being healed, 
        see their auras
        `,
        image: "assets/anursescalling.webp"
    },

    {
        name: "Agitation",
        type: "killer",
        description: `
        While carrying a survivor:
        •You gain 18% haste
        •Your terror radius is 12m larger
        `,
        image: "assets/agitation.webp"
    },

    {
        name: "Alien Instinct",
        type: "killer",
        description: `
        Whenever you hook a survivor, the farthest injured survivor:
        •gains Oblivious for 60s
        •You see their aura for 8s
     `,
        image: "assets/alieninstinct.webp"
    },

    {
        name: "All Shaking Thunder",
        type: "killer",
        description: `
        Whenever you fall from atleast 1.25m, 
        your lunge attacks are 75% longer for 25s. 
        cooldown:5s
        `,
        image: "assets/allshakingthunder.webp"
    },

    {
        name: "Awakened Awareness",
        type: "killer",
        description: `
        While carrying a survivor, within 20m of you,
        you see the auras of other survivors
        `,
        image: "assets/awakenedawareness.webp"
    },
     
    {
        name: "Bamboozle",
        type: "killer",
        description: `
       Whenever you vault a Window, it is blocked for survivors for 16s
       You Basic-vault Windows 15% faster
       Only 1 window can be blocked at a time
        `,
        image: "assets/bamboozle.webp"
    },

     
    {
        name: "Barbecue & Chili",
        type: "killer",
        description: `
       Whenever you hook a survivor, for 5s, you see the 
       auras of all Survivors who are atleast 40m away 
       from the hooked survivor
        `,
        image: "assets/barbecue.webp"
    },
     
    {
        name: "Batteries Included",
        type: "killer",
        description: `
     Within 16m of a completed generator, you gain 5% haste.
     when you leave the range, this ends after 5s
        `,
        image: "assets/batteriesincluded.webp"
    },

         {
        name: "Beast of Prey",
        type: "killer",
        description: `
     Whenever you gain blood lust, gain undetectable for 40s
        `,
        image: "assets/beastsofprey.webp"
    },

         {
        name: "Bitter Murmur",
        type: "killer",
        description: `
      Whenever a generator is completed, you see the 
      auras of all survivors within 16m of it for 5s

      When all generators are completed, you see the auras
      of all the survivors for 10s
        `,
        image: "assets/bittermurmur.webp"
    },

    {
        name: "Blood Echo",
        type: "killer",
        description: `
     Whenever you hook a survivor, for 30s, all injured survivors:
      •gain exhausted
      •gain Hemorrhage
        `,
        image: "assets/bloodecho.webp"
    },

    {
        name: "Blood Warden",
        type: "killer",
        description: `
     When an exit gate is opened, once per trial, when
     you hook a survivor, both exits are blocked for 60s.

     you see the aura of survivors within exit thresholds
        `,
        image: "assets/bloodwarden.webp"
    },
    {
        name: "Bloodhound",
        type: "killer",
        description: `
      Pools of blood are brighter and last 4s longer
        `,
        image: ""
    },
    {
        name: "Brutal Strength",
        type: "killer",
        description: `
     You basic-break pallets and breakable walls, and damage generators 20% faster
        `,
        image: "assets/brutalstrength.webp"
    },
    {
        name: "Call Of Brine",
        type: "killer",
        description: `
     Whenever you damage a generator, it regresses
     50% faster for 90s

     For that time, whenever a survivor hits a good basic 
     skill check while repairing that generator, you are alerted
        `,
        image: "assets/callofbrine.webp"
    },

{
        name: "Celestial Witness",
        type: "killer",
        description: `
        Every 20s, if the obsession is atleast 40m away
        from you, you see their aura for 3s. otherwise, the
        farthest survivor becomes the obsession
        `,
        image: "assets/celestialwitness.webp"
    },

{
        name: "Corrupt intervention",
        type: "killer",
        description: `
    When the trial starts, the 3 farthest generators
    from you are blocked for 120s, or until you down a Survivor
        `,
        image: "assets/corruptintervention.webp"
    },

{
        name: "Coulrophobia",
        type: "killer",
        description: `
    Survivors within your terror radius:
     •heal 30% slower
      •While healing, basic skill 
      checks spin 50% faster
        `,
        image: "assets/coulrophobia.webp"
    },

{
        name: "Coup De Grace",
        type: "killer",
        description: `
     Whenever a generator is completed, you earn 2 
     tokens up to 5


     whenever you lounge-attack, spend 1 token to make
     it 80% longer
        `,
        image: "assets/coupdegrace.webp"
    },

{
        name: "Cruel Limits",
        type: "killer",
        description: `
    Whenever a Generator is completed:
     •You see the auras of all windows for 30s
      •All windows are blocked for survivors for 30s
        `,
        image: "assets/cruellimits.webp"
    },




     
];
