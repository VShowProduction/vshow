const questions = [
    {
      text: 'Mejor Rigger:',
      answers: [
        { name: 'Tcherimint', image: '/vshow/Award/300x300.png' },
        { name: 'AmyDesu', image: '/vshow/Award/300x300.png' },
        { name: 'kobotano2', image: '/vshow/Award/300x300.png' },
        { name: 'MiaPaprika', image: '/vshow/Award/300x300.png' }
      ]
    },
    {
      text: 'Mejor Diseño:',
      answers: [
        { name: 'Irelyh', image: '/Award/Irelyh.png' },
        { name: 'Mixte Nex', image: '/Award/MixteNex.png' },
        { name: 'Eyra Flamenko', image: '/Award/EyraFlamenko.png' },
        { name: 'Taiga Toragami', image: '/Award/TaigaToragami.png' }
      ]
    },
    {
      text: 'Mejor VT ilustrador:',
      answers: [
        { name: 'DahliaKaiVT', image: '/Award/DahliaKaiVT.png' },
        { name: 'MiaPaprika', image: '/Award/MiaPaprika.png' },
        { name: 'LatriUwu', image: '/Award/LatriUwu.png' },
        { name: 'EmiilyExtacy', image: '/Award/EmiilyExtacy.png' }
      ]
    },
    {
      text: 'Mejor Cover 2024:',
      answers: [
        { name: 'AuroraAtria - Insane (hazbin hotel)', image: '/Award/AuroraAtria.png' },
        { name: 'Keirame - I´M YOUR TREASURE BOX (marine)', image: '/Award/Keirame.png' },
        { name: 'Ruby Runeheart - Rosa Pastel (belanova)', image: '/Award/RubyRuneheart.png' },
        { name: '2Bines x Lunaria - Clown', image: '/Award/2BinesLunaria.png' }
      ]
    },
    {
      text: 'Mejor Cancion Original 2024:',
      answers: [
        { name: 'Eru Nabura - Chapter TWO', image: '/Award/EruNabura.png' },
        { name: 'RyumiVT - La colette', image: '/Award/RyumiVT.png' },
        { name: 'Ayaka x Bastian Cortes - Lycoris', image: '/Award/AyakaBastian.png' },
        { name: 'Katarina Akina - Sunset', image: '/Award/KatarinaAkina.png' }
      ]
    },
    {
      text: 'Mejor VT Fuera de contexto:',
      answers: [
        { name: 'VomoriHiko', image: '/Award/VomoriHiko.png' },
        { name: 'CondesaVR', image: '/Award/CondesaVR.png' },
        { name: 'KohAi', image: '/Award/KohAi.png' },
        { name: 'Kyria VTuber', image: '/Award/KyriaVTuber.png' }
      ]
    },
    {
      text: 'Mejor VT SHITPOSTER:',
      answers: [
        { name: 'Alexandro_2076', image: '/Award/Alexandro_2076.png' },
        { name: 'TokoVT', image: '/Award/TokoVT.png' },
        { name: 'VomoriHiko', image: '/Award/VomoriHiko.png' },
        { name: 'LilyBell_VT', image: '/Award/LilyBell_VT.png' }
      ]
    },
    {
      text: 'Mejor VT de Reacciones:',
      answers: [
        { name: 'Erispheria', image: '/Award/Erispheria.png' },
        { name: 'ChainaVT', image: '/Award/ChainaVT.png' },
        { name: 'Chuymine', image: '/Award/Chuymine.png' },
        { name: 'Huntleo', image: '/Award/Huntleo.png' }
      ]
    },
    {
      text: 'Mejor VT de ASMR:',
      answers: [
        { name: 'Mikupinku', image: '/Award/Mikupinku.png' },
        { name: 'Anastasiawhite', image: '/Award/Anastasiawhite.png' },
        { name: 'Ruby Runeheart', image: '/Award/RubyRuneheart.png' },
        { name: 'Suunysuuris', image: '/Award/Suunysuuris.png' }
      ]
    },
    {
      text: 'Mejor Debut del 2024:',
      answers: [
        { name: 'Ruby Runeheart', image: '/Award/RubyRuneheart.png' },
        { name: 'Aivy love&craft', image: '/Award/AivyLoveCraft.png' },
        { name: 'Taiga Toragami', image: '/Award/TaigaToragami.png' },
        { name: 'Akugaki Koa', image: '/Award/AkugakiKoa.png' }
      ]
    },
    {
      text: 'Mejor RE DEBUT del 2024:',
      answers: [
        { name: 'Lunaria Ayaren (Redebut 3D)', image: '/Award/LunariaAyaren.png' },
        { name: 'Mai noboshi', image: '/Award/MaiNoboshi.png' },
        { name: 'JazminVT', image: '/Award/JazminVT.png' },
        { name: 'KuroAmyVT', image: '/Award/KuroAmyVT.png' }
        { name: 'Rakkun', image: '/Award/Rakkun.png' }
      ]
    },
    {
      text: 'Diamante en bruto del 2024:',
      answers: [
        { name: 'EyraFlamenko', image: '/Award/EyraFlamenko.png' },
        { name: 'obabanchi', image: '/Award/obabanchi.png' },
        { name: 'VomoriHiko', image: '/Award/VomoriHiko.png' },
        { name: 'Ignya Panthara', image: '/Award/IgnyaPanthara.png' }
      ]
    },
    {
      text: 'Mejor dinamica 2024:',
      answers: [
        { name: 'Irelyh - Preguntas incomodas', image: '/Award/Irelyh.png' },
        { name: 'AuroraAtria - El Club del oraculo', image: '/Award/AuroraAtria.png' },
        { name: 'Taiga toragami - Warewolf Game', image: '/Award/TaigaToragami.png' },
        { name: 'Nara shiranui - Dinamicas entre latinos y japoneses', image: '/Award/NaraShiranui.png' }
      ]
    },
    {
      text: 'Mejor Evento 2024:',
      answers: [
        { name: 'Gachi - Gachi Stars', image: '/Award/Gachi.png' },
        { name: 'MeltyHitoru - Charming Melodies', image: '/Award/MeltyHitoru.png' },
        { name: 'Mai noboshi - MagicPrix', image: '/Award/MaiNoboshi.png' },
        { name: 'ShuraHiwa - 3D birthday Live', image: '/Award/ShuraHiwa.png' }
      ]
    },
    {
      text: 'VT FAVORITO DE LA COMUNIDAD:',
      answers: [
        { name: 'CrayonVT', image: '/Award/CrayonVT.png' },
        { name: 'KotoriHikari', image: '/Award/KotoriHikari.png' },
        { name: 'SayhoMl', image: '/Award/SayhoMl.png' },
        { name: 'ShuraHiwa', image: '/Award/ShuraHiwa.png' }
      ]
    },
    {
      text: 'GrupoVT:',
      answers: [
        { name: 'EstaSquad', image: '/Award/EstaSquad.png' },
        { name: 'Oneeshi_', image: '/Award/Oneeshi.png' },
        { name: 'Vjin', image: '/Award/Vjin.png' },
        { name: 'YumeGirls', image: '/Award/YumeGirls.png' }
      ]
    },
    {
      text: 'VT revelación 2024:',
      answers: [
        { name: 'TokoVT', image: '/Award/TokoVT.png' },
        { name: 'NeneisOnline', image: '/Award/NeneisOnline.png' },
        { name: 'Taiga Toragami', image: '/Award/TaigaToragami.png' },
        { name: 'AuroraAtria', image: '/Award/AuroraAtria.png' }
      ]
    },
    {
      text: 'VT DEL AÑO:',
      answers: [
        { name: 'Meica05', image: '/Award/Meica05.png' },
        { name: 'Rakkun', image: '/Award/Rakkun.png' },
        { name: 'Irelyth', image: '/Award/Irelyth.png' },
        { name: 'ShuraHiwa', image: '/Award/ShuraHiwa.png' },
        { name: 'Zilverk', image: '/Award/Zilverk.png' }
      ]
    },
    {
      text: 'Clip del año:',
      answers: [
        { name: 'LEFOLK "Bueno y cuando se va"', image: '/Award/LEFOLK.png' },
        { name: 'Meica - Rubius "Porquien llora hongo"', image: '/Award/MeicaRubius.png' },
        { name: 'Akugaki Koa "Que comience la fiesta"', image: '/Award/AkugakiKoa.png' },
        { name: 'Ayaka x Chaina "Chaina pescando"', image: '/Award/AyakaChaina.png' }
      ]
    }
  ];
  
  export default questions;
