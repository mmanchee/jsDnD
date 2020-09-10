const monsterList = {
  cr0 : [
    {url: "/api/monsters/awakened-shrub", pic: "https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg"},
    {url: "/api/monsters/bat", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/305/1000/1000/636379812593010967.jpeg"},
    {url: "/api/monsters/jackal", pic: "http://srd.dndtools.org/srd/resource/images/sand/87616.jpg"},
    {url: "/api/monsters/spider", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/575/1000/1000/636376359864842950.jpeg"},
    {url: "/api/monsters/weasel", pic: "https://koboldpress.com/wp-content/uploads/2019/08/weasel-albino-death.jpg"}],
  cr125 : [
    {url: "/api/monsters/blood-hawk", pic: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg"},
    {url: "/api/monsters/giant-crab", pic: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg"},
    {url: "/api/monsters/giant-rat", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/538/1000/1000/636376332197953299.jpeg"},
    {url: "/api/monsters/kobold", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/379/1000/1000/636252780450300625.jpeg"},
    {url: "/api/monsters/poisonous-snake", pic: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg"}],
  cr025 : [
    {url: "/api/monsters/giant-centipede", pic: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg"},
    {url: "/api/monsters/goblin", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/351/1000/1000/636252777818652432.jpeg"},
    {url: "/api/monsters/skeleton", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/472/1000/1000/636376294573239565.jpeg"},
    {url: "/api/monsters/sprite", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/115/1000/1000/636252746444973630.jpeg"},
    {url: "/api/monsters/wolf", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/482/1000/1000/636376300223855327.jpeg"}],
  cr05 : [
    {url: "/api/monsters/crocodile", pic: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg"},
    {url: "/api/monsters/giant-wasp", pic: "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg"},
    {url: "/api/monsters/orc", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg"},
    {url: "/api/monsters/satyr", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/169/1000/1000/636252760706340605.jpeg"},
    {url: "/api/monsters/worg", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/52/1000/1000/636252724662073178.jpeg"}],
  cr1 : [
    {url: "/api/monsters/dire-wolf", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/482/1000/1000/636376300223855327.jpeg"},
    {url: "/api/monsters/ghoul", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/483/1000/1000/636364323937041514.png"},
    {url: "/api/monsters/harpy", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/391/1000/1000/636252781955908234.jpeg"},
    {url: "/api/monsters/imp", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/361/1000/1000/636252778560366227.jpeg"},
    {url: "/api/monsters/specter", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/119/1000/1000/636252747399435720.jpeg"}],
  cr2 : [
    {url: "/api/monsters/will-o-wisp", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/585/1000/1000/636376363763232290.jpeg"},
    {url: "/api/monsters/gargoyle", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/407/1000/1000/636252786295384889.jpeg"},
    {url: "/api/monsters/griffon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/373/1000/1000/636252779693862725.jpeg"},
    {url: "/api/monsters/mimic", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/211/1000/1000/636252764731637373.jpeg"},
    {url: "/api/monsters/ogre", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/285/1000/1000/636252770535203221.jpeg"}],
  cr3 : [
    {url: "/api/monsters/bearded-devil", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/193/1000/1000/636252763397604505.jpeg"},
    {url: "/api/monsters/giant-scorpion", pic: "https://vignette.wikia.nocookie.net/rollplaydnd/images/4/4c/Pzo1127_scorpion_by_critical_dean-d6t11mh.jpg/revision/latest/scale-to-width-down/340?cb=20150515122955"},
    {url: "/api/monsters/hell-hound", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/393/1000/1000/636252782461361426.jpeg"},
    {url: "/api/monsters/manticore", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/187/1000/1000/636252762623266809.jpeg"},
    {url: "/api/monsters/owlbear", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/315/1000/1000/636252772225295187.jpeg"}],
  cr4 : [
    {url: "/api/monsters/black-pudding", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/201/1000/1000/636252764027417823.jpeg"},
    {url: "/api/monsters/ettin", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/341/1000/1000/636252776953634777.jpeg"},
    {url: "/api/monsters/wereboar", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/80/1000/1000/636252735506840152.jpeg"},
    {url: "/api/monsters/succubus-incubus", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/103/1000/1000/636252742573312994.jpeg"},
    {url: "/api/monsters/weretiger", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/76/1000/1000/636252734783831163.jpeg"}],
  cr5 : [
    {url: "/api/monsters/air-elemental", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/127/1000/1000/636252755648556800.jpeg"},
    {url: "/api/monsters/barbed-devil", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/486/1000/1000/636376302569423870.jpeg"},
    {url: "/api/monsters/bulette", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/223/1000/1000/636252765369632881.jpeg"},
    {url: "/api/monsters/unicorn", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/93/1000/1000/636252739248798123.jpeg"},
    {url: "/api/monsters/otyugh", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/305/1000/1000/636252771931366466.jpeg"}],
  cr6 : [
    {url: "/api/monsters/chimera", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/237/1000/1000/636252766770156389.jpeg"},
    {url: "/api/monsters/drider", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/295/1000/1000/636252771409285458.jpeg"},
    {url: "/api/monsters/medusa", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/580/1000/1000/636376361850900325.jpeg"},
    {url: "/api/monsters/vrock", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/87/1000/1000/636252737538172594.jpeg"},
    {url: "/api/monsters/wyvern", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/48/1000/1000/636252723695596000.jpeg"}],
  cr7 = [
    {url: "/api/monsters/giant-ape", pic: "https://www.jing.fm/clipimg/detail/45-453539_giant-ape-dnd-5e.png"},
    {url: "/api/monsters/oni", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/297/1000/1000/636252771507213738.jpeg"},
    {url: "/api/monsters/shield-guardian", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/145/1000/1000/636252758362792494.jpeg"},
    {url: "/api/monsters/stone-giant", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/109/1000/1000/636252744518731463.jpeg"},
    {url: "/api/monsters/young-copper-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/62/1000/1000/636252729761648292.jpeg"}],
  cr8 : [
    {url: "/api/monsters/assassin", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7727/189/1000/1000/637091785255046787.png"},
    {url: "/api/monsters/frost-giant", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/405/1000/1000/636252786158646348.jpeg"},
    {url: "/api/monsters/hydra", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/349/1000/1000/636252777669218389.jpeg"},
    {url: "/api/monsters/spirit-naga", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/117/1000/1000/636252746851035686.jpeg"},
    {url: "/api/monsters/tyrannosaurus-rex", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/594/1000/1000/636376369004412963.jpeg"}],
  cr9 : [
    {url: "/api/monsters/clay-golem", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/243/1000/1000/636252767318152303.jpeg"},
    {url: "/api/monsters/cloud-giant", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/249/1000/1000/636252767619414260.jpeg"},
    {url: "/api/monsters/fire-giant", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/357/1000/1000/636252778143767005.jpeg"},
    {url: "/api/monsters/glabrezu", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/337/1000/1000/636252776677682465.jpeg"},
    {url: "/api/monsters/treant", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/97/1000/1000/636252740537990664.jpeg"}],
  cr10 : [
    {url: "/api/monsters/aboleth", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/11/1000/1000/636238825975375671.jpeg"},
    {url: "/api/monsters/deva", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/267/1000/1000/636252768980059444.jpeg"},
    {url: "/api/monsters/guardian-naga", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/377/1000/1000/636252780447421771.jpeg"},
    {url: "/api/monsters/stone-golem", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/107/1000/1000/636252743780112834.jpeg"},
    {url: "/api/monsters/young-gold-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/60/1000/1000/636252729283446963.jpeg"}],
  cr11 : [
    {url: "/api/monsters/behir", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/195/1000/1000/636252763748680024.jpeg"},
    {url: "/api/monsters/djinni", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/281/1000/1000/636252770322204007.jpeg"},
    {url: "/api/monsters/efreeti", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/325/1000/1000/636252775714332067.jpeg"},
    {url: "/api/monsters/gynosphinx", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/383/1000/1000/636252780786457550.jpeg"},
    {url: "/api/monsters/horned-devil", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/347/1000/1000/636252777255936976.jpeg"}],
  cr12 : [
    {url: "/api/monsters/archmage", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/167/1000/1000/636252760213195530.jpeg"},
    {url: "/api/monsters/bone-devil", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/481/1000/1000/636328225187253200.jpeg"},
    {url: "/api/monsters/erinyes", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/329/1000/1000/636252776041158657.jpeg"}],
  cr13 : [
    {url: "/api/monsters/adult-brass-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/18/1000/1000/636238885681129014.jpeg"},
    {url: "/api/monsters/nalfeshnee", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/261/1000/1000/636252768396688147.jpeg"},
    {url: "/api/monsters/rakshasa", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/247/1000/1000/636252767480157951.jpeg"},
    {url: "/api/monsters/storm-giant", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/105/1000/1000/636252743254029469.jpeg"},
    {url: "/api/monsters/vampire", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/91/1000/1000/636252738665379794.jpeg"}],
  cr14 : [
    {url: "/api/monsters/adult-black-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/13/1000/1000/636238871029832086.jpeg"},
    {url: "/api/monsters/adult-copper-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/22/1000/1000/636238956325913912.jpeg"},
    {url: "/api/monsters/ice-devil", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/353/1000/1000/636252777966974765.jpeg"}],
  cr15 : [
    {url: "/api/monsters/adult-bronze-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/20/1000/1000/636238888310108665.jpeg"},
    {url: "/api/monsters/adult-green-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/26/1000/1000/636238962276510242.jpeg"},
    {url: "/api/monsters/mummy-lord", pic: "https://media-waterdeep.cursecdn.com/attachments/2/660/undead.jpg"},
    {url: "/api/monsters/purple-worm", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/275/1000/1000/636252769846436684.jpeg"}],
  cr16 : [
    {url: "/api/monsters/adult-blue-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/16/1000/1000/636238882493439723.jpeg"},
    {url: "/api/monsters/adult-silver-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/123/1000/1000/636252753945133025.jpeg"},
    {url: "/api/monsters/iron-golem", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/371/1000/1000/636252779460570049.jpeg"},
    {url: "/api/monsters/marilith", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/189/1000/1000/636252763036079032.jpeg"},
    {url: "/api/monsters/planetar", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/303/1000/1000/636252771762002496.jpeg"}],
  cr17 : [
    {url: "/api/monsters/adult-gold-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/24/1000/1000/636238958915127190.jpeg"},
    {url: "/api/monsters/androsphinx", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/157/1000/1000/636252759145617281.jpeg"},
    {url: "/api/monsters/adult-red-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/28/1000/1000/636238971817119794.jpeg"},
    {url: "/api/monsters/dragon-turtle", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/291/1000/1000/636252771128151641.jpeg"}],
  cr19 : [
    {url: "/api/monsters/balor", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/175/1000/1000/636252761612038117.jpeg"}],
  cr20 : [
    {url: "/api/monsters/ancient-brass-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/133/1000/1000/636252756157427258.jpeg"},
    {url: "/api/monsters/ancient-white-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/153/1000/1000/636252758955886210.jpeg"},
    {url: "/api/monsters/pit-fiend", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/311/1000/1000/636252772132434763.jpeg"}],
  cr21 : [
    {url: "/api/monsters/ancient-black-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/129/1000/1000/636252755854649337.jpeg"},
    {url: "/api/monsters/ancient-copper-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/137/1000/1000/636252756714896878.jpeg"},
    {url: "/api/monsters/lich", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/165/1000/1000/636252760084366499.jpeg"},
    {url: "/api/monsters/solar", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/121/1000/1000/636252748079664097.jpeg"}],
  cr22 : [
    {url: "/api/monsters/ancient-bronze-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/135/1000/1000/636252756372367681.jpeg"},
    {url: "/api/monsters/ancient-green-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/141/1000/1000/636252757319464533.jpeg"}],
  cr23 : [
    {url: "/api/monsters/ancient-blue-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/131/1000/1000/636252756020185006.jpeg"},
    {url: "/api/monsters/ancient-silver-dragon", pic:"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/151/1000/1000/636252758799225927.jpeg"},
    {url: "/api/monsters/kraken", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/381/1000/1000/636252780680163799.jpeg"}],
  cr24 : [
    {url: "/api/monsters/ancient-gold-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/139/1000/1000/636252756930565101.jpeg"},
    {url: "/api/monsters/ancient-red-dragon", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/147/332/315/636252758629652181.jpeg"}],
  cr30 : [
    {url: "/api/monsters/tarrasque", pic: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/101/299/315/636252741877524077.jpeg"}]
}
