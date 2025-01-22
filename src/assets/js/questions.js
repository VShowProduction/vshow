const questions = [
    {
      id: 1,
      text: 'Mejor Rigger:',
      answers: [
        { id:1, name: 'Tcherimint', image: '/vshow/Award/tcherimint.png' },
        { id:2, name: 'AmyDesu', image: '/vshow/Award/amydesu.png' },
        { id:3, name: 'kobotano2', image: '/vshow/Award/kobotano.png' },
        { id:4, name: 'MiaPaprika', image: '/vshow/Award/Mia-paprika.png' }
      ]
    },
    {
      id: 2,
      text: 'Mejor Diseño:',
      answers: [
        { id:1, name: 'Irelyh', image: '/vshow/Award/irelyth-diseno.png' },
        { id:2, name: 'Mixte Nex', image: '/vshow/Award/mixtenex-diseno.png' },
        { id:3, name: 'Eyra Flamenko', image: '/vshow/Award/eyraflamenko-diseno.png' },
        { id:4, name: 'Taiga Toragami', image: '/vshow/Award/taigatoragami-diseno.png' }
      ]
    },
    {
      id: 3,
      text: 'Mejor VT ilustrador:',
      answers: [
        { id:1, name: 'DahliaKaiVT', image: '/vshow/Award/dahliakai-ilustrador.png' },
        { id:2, name: 'MiaPaprika', image: '/vshow/Award/miapaprika-ilustrador.png' },
        { id:3, name: 'LatriUwu', image: '/vshow/Award/latriuwu-ilustrador.png' },
        { id:4, name: 'EmiilyExtacy', image: '/vshow/Award/emiilyextacy-ilustrador.png' }
      ]
    },
    {
      id: 4,
      text: 'Mejor Cover 2024:',
      answers: [
        { id:1,name: 'AuroraAtria - Insane (hazbin hotel)', image: '/vshow/Award/Aurora-INSANE.png' },
        { id:2,name: 'Keirame - I´M YOUR TREASURE BOX (marine)', image: '/vshow/Award/Keirame-IM-YOUR-TREASURE-BOX.png' },
        { id:3,name: 'Ruby Runeheart - Rosa Pastel (belanova)', image: '/vshow/Award/Ruby-ROSAPASTEL.png' },
        { id:4,name: '2Bines x Lunaria - Clown', image: '/vshow/Award/2bines-lunaria-CLOWN.png' }
      ]
    },
    {
      id: 5,
      text: 'Mejor Cancion Original 2024:',
      answers: [
        { id:1,name: 'Eru Nabura - Chapter TWO', image: '/vshow/Award/erunabura-chaptertwo.png' },
        { id:2,name: 'RyumiVT - La colette', image: '/vshow/Award/ryumivt-lacolette.png' },
        { id:3,name: 'Ayaka x Bastian Cortes - Lycoris', image: '/vshow/Award/ayakazaphyr-lycoris.png' },
        { id:4,name: 'Katarina Akina - Sunset', image: '/vshow/Award/katarina-sunset.png' }
      ]
    },
      {
        id: 6,
        text: "Mejor VT Fuera de contexto:",
        answers: [
          { id:1,name: "VomoriHiko", image: "/vshow/Award/vomorihiko.png"},
          { id:2,name: "CondesaVR", image: "/vshow/Award/condesavr.png" },
          { id:3,name: "KohAi", image: "/vshow/Award/kimox-kohai.png" },
          { id:4,name: "Kyria VTuber", image: "/vshow/Award/kyriavtuber.png" }
        ]
      },
      {
        id: 7,
        text: "Mejor VT SHITPOSTER:",
        answers: [
          { id:1,name: "Alexandro_2076", image: "/vshow/Award/alexandro.png" },
          { id:2,name: "TokoVT", image: "/vshow/Award/tokovt.png" },
          { id:3,name: "VomoriHiko", image: "/vshow/Award/vomorihiko.png" },
          { id:4,name: "LilyBell_VT", image: "/vshow/Award/lilybellvt.png" }
        ]
      },
      {
        id: 8,
        text: "Mejor VT de Reacciones:",
        answers: [
          { id:1,name: "Erispheria", image: "/vshow/Award/erispheria.png" },
          { id:2,name: "ChainaVT", image: "/vshow/Award/chainavt.png" },
          { id:3,name: "Chuymine", image: "/vshow/Award/chuymine.png" },
          { id:4,name: "Huntleo", image: "/vshow/Award/huntleo.png" }
        ]
      },
      {
        id: 9,
        text: "Mejor VT de ASMR:",
        answers: [
          { id:1,name: "Mikupinku", image: "/vshow/Award/mikupinku.png" },
          { id:2,name: "Anastasiawhite", image: "/vshow/Award/anastasiawhite.png" },
          { id:3,name: "Ruby Runeheart", image: "/vshow/Award/rubyruneheart.png" },
          { id:4,name: "Suunysuuris", image: "/vshow/Award/sunnysuuris.png" }
        ]
      },
      {
        id: 10,
        text: "Mejor Debut del 2024:",
        answers: [
          { id:1,name: "Ruby Runeheart", image: "/vshow/Award/rubyruneheart.png" },
          { id:2,name: "Aivy love&craft", image: "/vshow/Award/aivylovencraft.png" },
          { id:3,name: "Taiga Toragami", image: "/vshow/Award/taigatoragami.png" },
          { id:4,name: "Akugaki Koa", image: "/vshow/Award/akugaki-koa.png" }
        ]
      },
      {
        id: 11,
        text: "Mejor RE DEBUT del 2024:",
        answers: [
          { id:1,name: "Lunaria Ayaren (Redebut 3D)", image: "/vshow/Award/lunaria-ayaren.png" },
          { id:2,name: "Mai noboshi", image: "/vshow/Award/mainoboshi.png" },
          { id:3,name: "JazminVT", image: "/vshow/Award/jazminvt.png" },
          { id:4,name: "KuroAmyVT", image: "/vshow/Award/kuroamy.png" },
          { id:5, name: "Rakkun", image: "/vshow/Award/rakkun.png" }
        ]
      },
      {
        id: 12,
        text: "Diamante en bruto del 2024:",
        answers: [
          { id:1,name: "EyraFlamenko", image: "/vshow/Award/eyraflamenko.png" },
          { id:2,name: "Obabanchi", image: "/vshow/Award/obabanchi.png" },
          { id:3,name: "VomoriHiko", image: "/vshow/Award/vomorihiko.png" },
          { id:4,name: "Ignya Panthara", image: "/vshow/Award/ignyapanthara.png" }
        ]
      },
      {
        id: 13,
        text: "Mejor dinamica 2024:",
        answers: [
          { id:1,name: "Ireltyh - Preguntas incomodas", image: "/vshow/Award/Irelyth-PreguntasIncomodas.png" },
          { id:2,name: "AuroraAtria - El Club del oraculo", image: "/vshow/Award/AuroraAtria-ClubDelOraculo.png" },
          { id:3,name: "Taiga toragami - Warewolf Game", image: "/vshow/Award/TaigaToragami-WareworlfGame.png" },
          { id:4,name: "Nara shiranui - Dinamicas entre latinos y japoneses", image: "/vshow/Award/NaraShiranui.png" }
        ]
      },
      {
              id: 14,
        text: "Mejor Evento 2024:",
        answers: [
          { id:1, name: "Gachi - Gachi Stars", image: "/vshow/Award/GachiStar.png" },
          { id:2, name: "MeltyHitoru - Charming Melodies", image: "/vshow/Award/MeltyHitoru-CharmingMelodies.png" },
          { id:3, name: "Mai noboshi - MagicPrix", image: "/vshow/Award/MaiNoboshi-MagicPrix.png" },
          { id:4, name: "ShuraHiwa - 3D birthday Live", image: "/vshow/Award/ShuraHiwa-Birthday3DLive.png" }
        ]
      },
      {
        id: 15,
        text: "VT FAVORITO DE LA COMUNIDAD:",
        answers: [
          {id:1, name: "CrayonVT", image: "/vshow/Award/CrayonVT.png" },
          { id:2,name: "KotoriHikari", image: "/vshow/Award/KotoriHikari.png" },
          { id:3,name: "SayhoMl", image: "/vshow/Award/Sayhoml.png" },
          { id:4,name: "ShuraHiwa", image: "/vshow/Award/ShuraHiwa.png" }
        ]
      },
      {
        id: 16,

        text: "GrupoVT:",
        answers: [
          { id:1,name: "EstaSquad", image: "/vshow/Award/esta-squad.png" },
          { id:2,name: "Oneeshi_", image: "/vshow/Award/oneeshi.png" },
          {id:3, name: "Vjin", image: "/vshow/Award/vjin.png" },
          { id:4,name: "YumeGirls", image: "/vshow/Award/yumegirls.png" }
        ]
      },
      {
        id: 17,
        text: "VT revelación 2024:",
        answers: [
          { id:1,name: "TokoVT", image: "/vshow/Award/tokovt.png" },
          { id:2,name: "NeneisOnline", image: "/vshow/Award/Neneisonline.png" },
          { id:3,name: "Taiga Toragami", image: "/vshow/Award/taigatoragami.png" },
          { id:4,name: "AuroraAtria", image: "/vshow/Award/AuroraAtria.png" }
        ]
      },
      {
        id: 18,

        text: "VT DEL AÑO:",
        answers: [
          { id:1,name: "Meica05", image: "/vshow/Award/meica05.png" },
          { id:2,name: "Rakkun", image: "/vshow/Award/rakkun.png" },
          { id:3,name: "Irelyth", image: "/vshow/Award/irelyth.png" },
          { id:4,name: "ShuraHiwa", image: "/vshow/Award/ShuraHiwa.png" },
          { id:5,name: "Zilverk", image: "/vshow/Award/zilverk.png" }
        ]
      },
      {
        id: 19,

        text: "Clip del año:",
        answers: [
          { id:1, name: "LEFOLK \"Bueno y cuando se va\"", image: "/vshow/Award/LeFolk-Clip.png", link: 'https://clips.twitch.tv/CrackyAgreeableWalletPRChase-E3VjxTD2vzN4Wv-i' },
          { id:2, name: "Meica - Rubius \"Porquien llora hongo\"", image: "/vshow/Award/Meica05-Clip.png", link: 'https://www.twitch.tv/meica05/clip/ImpossibleWittyWolfGOWSkull-wXHNkGn_X0GiB7wv' },
          { id:3, name: "Akugaki Koa \"Que comience la fiesta\"", image: "/vshow/Award/AkugakiKoa-Clip.png", link: 'https://x.com/x_chuchin/status/1875155918385738194' },
          { id:4, name: "Ayaka x Chaina \"Chaina pescando\"", image: "/vshow/Award/AyakaChaina-Clip.png", link: 'https://www.twitch.tv/chainavt/clip/GracefulCuriousCrabsCoolStoryBro-H4mzM-jISB4EAugl' }
        ]
      }
    ]
  ;
  
  export default questions;
