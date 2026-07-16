import type { Region } from "@/types";

export const regions: Region[] = [
  {
    id: "boucle-du-mouhoun",
    nom: "Boucle du Mouhoun",
    chef_lieu: "Dédougou",
    population: "1 800 000",
    superficie: "34 497 km²",
    description:
      "Région de l'ouest du Burkina Faso, traversée par la rivière Mouhoun (anciennement Volta Noire). Berceau des civilisations Bwaba et Marka.",
    couleur: "#2D6A4F",
    groupesEthniques: [
      {
        id: "bwaba",
        nom: "Bwaba",
        variantes: ["Bwa", "Boua", "Bwamu"],
        regionId: "boucle-du-mouhoun",
        localisation:
          "Dédougou, Safané, Bagassi, Boromo, Pa, Toma et villages environnants",
        langue: "Bwamu (Boo)",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~400 000",
        specificitesCulturelles:
          "Peuple agriculteur réputé pour ses masques en fibres végétales utilisés lors des rituels initiatiques et funéraires. Leur art masqué est inscrit au Patrimoine culturel immatériel de l'UNESCO. Grande expertise dans le travail du coton et du tissage.",
        traditions:
          "Le Do est la grande célébration annuelle mettant en scène des masques feuilles spectaculaires. Les masques Bwaba représentent des esprits de la nature et des ancêtres. La circoncision et l'excision marquaient le passage à l'âge adulte. Les funérailles durent plusieurs jours avec danses, tam-tams et festivités.",
        organisationSociale:
          "Société organisée en clans patrilinéaires. Le chef de village (Tèn-soaba) joue un rôle central. Chaque village est autonome. Les forgerons occupent une place sociale particulière.",
        croyances:
          "Animisme profond avec culte des ancêtres et des esprits de la nature. Le Do est la grande puissance invisible qui régit l'ordre du monde. L'islam et le christianisme coexistent avec les croyances traditionnelles.",
        familles: [
          { nom: "Kaboré", description: "Clan fondateur historique de la région" },
          { nom: "Ouédraogo", description: "Grande famille implantée dans la zone" },
          { nom: "Coulibaly", description: "Famille présente dans plusieurs villages" },
          { nom: "Sanou", description: "Famille de cultivateurs et artisans" },
          { nom: "Traoré", description: "Famille aux origines manding" },
          { nom: "Diallo", description: "Famille d'éleveurs peul intégrée" },
          { nom: "Dah", description: "Nom de clan Bwaba traditionnel" },
          { nom: "Hien", description: "Clan présent dans la région de Safané" },
          { nom: "Poda", description: "Famille de la zone de Boromo" },
          { nom: "Sawadogo", description: "Famille mossi intégrée à la communauté" },
        ],
        sources: ["INSD Burkina Faso", "Ethnologue.com", "UNESCO"],
      },
      {
        id: "marka",
        nom: "Marka",
        variantes: ["Dafing", "Marka-Dafing", "Marka-Dioula"],
        regionId: "boucle-du-mouhoun",
        localisation: "Nouna, Solenzo, Dédougou, Balavé",
        langue: "Marka (Dafing)",
        familleLinguistique: "Mandé",
        population: "~250 000",
        specificitesCulturelles:
          "Peuple islamisé de longue date, commerçants et lettrés coraniques. Grands tisserands produisant des pagnes striés colorés. Réputés pour leur hospitalité et leur rôle d'intermédiaires commerciaux dans l'histoire précoloniale.",
        traditions:
          "Les fêtes islamiques (Aïd, Maouloud) sont célébrées avec ferveur. La récitation coranique et l'enseignement religieux sont au cœur de la vie communautaire. Les griots jouent un rôle important dans la préservation de l'histoire orale.",
        organisationSociale:
          "Organisation en clans sous la direction d'un chef de canton (Marka-tigi). Forte influence des imams dans la vie sociale. Société relativement hiérarchisée avec castes d'artisans.",
        croyances:
          "Islam sunnite profondément ancré depuis plusieurs siècles, tout en conservant certains éléments de l'animisme originel.",
        familles: [
          { nom: "Coulibaly", description: "Grande famille dirigeante Marka" },
          { nom: "Diallo", description: "Famille de commerçants et érudits" },
          { nom: "Traoré", description: "Famille influente dans la région" },
          { nom: "Konaté", description: "Famille griot et historienne" },
          { nom: "Sanogo", description: "Famille de tisserands réputés" },
          { nom: "Barro", description: "Famille présente à Nouna" },
          { nom: "Kourouma", description: "Famille commerçante" },
          { nom: "Dao", description: "Famille d'enseignants coraniques" },
          { nom: "Diarra", description: "Famille de l'aristocratie marka" },
          { nom: "Dramé", description: "Famille de lettrés islamiques" },
        ],
      },
      {
        id: "samo",
        nom: "Samo",
        variantes: ["San", "Saaba", "Seeku"],
        regionId: "boucle-du-mouhoun",
        localisation: "Tougan, Toma, Yaba, Lanfièra",
        langue: "Samo (Seeku)",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~180 000",
        specificitesCulturelles:
          "Peuple agriculteur réputé pour la résistance à la colonisation. Cultivateurs de mil, sorgho et coton. Tradition de statuaire en bois et de poterie.",
        traditions:
          "Rituels agraires importants liés aux cycles des saisons. Danses masquées lors des funérailles et des initiations. Les fêtes de récolte rassemblent toute la communauté.",
        organisationSociale:
          "Organisation clanique patrilinéaire. Les aînés forment un conseil de sages. Le forgeron est un personnage clé de la vie sociale.",
        croyances:
          "Animisme traditionnel coexistant avec l'islam et le christianisme. Culte des esprits ancestraux et des forces de la nature.",
        familles: [
          { nom: "Coulibaly", description: "Famille dominante chez les Samo" },
          { nom: "Diabaté", description: "Famille de griots et historiens" },
          { nom: "Diarra", description: "Clan présent dans la zone de Tougan" },
          { nom: "Barro", description: "Famille agricultrice" },
          { nom: "Zerbo", description: "Famille autochtone Samo" },
          { nom: "Sawadogo", description: "Famille d'agriculteurs" },
          { nom: "Sanou", description: "Clan artisan et cultivateur" },
        ],
      },
      {
        id: "nuna-mouhoun",
        nom: "Nuna",
        variantes: ["Nouna", "Nuni", "Gurunsi-Nuna"],
        regionId: "boucle-du-mouhoun",
        localisation: "Boromo, Bagassi, Po (zones frontalières)",
        langue: "Nuni",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~120 000",
        specificitesCulturelles:
          "Agriculteurs et artisans céramistes. Connus pour leurs masques peints aux motifs géométriques multicolores utilisés dans les cérémonies rituelles.",
        traditions:
          "Rituels funéraires élaborés avec masques. Danses initiatiques. Pratiques agricoles rythmant la vie sociale.",
        organisationSociale:
          "Société acéphale organisée en lignages. Pas de chefferie centralisée. Les anciens règlent les litiges communautaires.",
        croyances:
          "Animisme. Culte des ancêtres et esprits protecteurs du terroir.",
        familles: [
          { nom: "Ouédraogo", description: "Famille présente dans la région" },
          { nom: "Kaboré", description: "Clan Nuna du plateau central" },
          { nom: "Sawadogo", description: "Famille intégrée de la zone" },
          { nom: "Tougma", description: "Famille autochtone Nuna" },
          { nom: "Thiombiano", description: "Clan de la zone frontalière" },
        ],
      },
      {
        id: "peul-mouhoun",
        nom: "Peul (Fulani)",
        variantes: ["Fulbé", "Fula", "Peulh", "Foulbé"],
        regionId: "boucle-du-mouhoun",
        localisation: "Dispersés dans toute la région, camps nomades et semi-nomades",
        langue: "Fulfuldé",
        familleLinguistique: "Atlantique (Niger-Congo)",
        population: "~150 000",
        specificitesCulturelles:
          "Pasteurs nomades et semi-nomades spécialisés dans l'élevage bovin. Code d'honneur (Pulaaku) basé sur la pudeur, la sagesse et le courage. Artisanat du cuir et de la vannerie.",
        traditions:
          "Le Sharo ou Shadi (épreuve de flagellation pour les jeunes hommes). La transhumance saisonnière structure la vie sociale. Les griots peul (Mabo) chantent les généalogies.",
        organisationSociale:
          "Organisation en lignages (leyde). Le Ardo ou Lamiido dirige le groupe. Hiérarchie basée sur la pureté du sang et la richesse en bétail.",
        croyances:
          "Islam sunnite majoritaire, parfois teinté de pratiques animistes ancestrales.",
        familles: [
          { nom: "Diallo", description: "Grande famille peul présente partout au Burkina" },
          { nom: "Barry", description: "Famille de la aristocratie peul" },
          { nom: "Balde", description: "Famille peul du Fouta" },
          { nom: "Sow", description: "Famille peul de l'ouest" },
          { nom: "Bah", description: "Clan peul traditionnel" },
          { nom: "Sankaré", description: "Famille de la Boucle du Mouhoun" },
          { nom: "Baro", description: "Lignage peul de la région" },
        ],
      },
    ],
  },
  {
    id: "cascades",
    nom: "Cascades",
    chef_lieu: "Banfora",
    population: "900 000",
    superficie: "18 013 km²",
    description:
      "Région au sud-ouest du Burkina Faso, frontalière de la Côte d'Ivoire et du Mali. Célèbre pour les cascades de Banfora et la diversité culturelle exceptionnelle.",
    couleur: "#1B6CA8",
    groupesEthniques: [
      {
        id: "toussian",
        nom: "Toussian",
        variantes: ["Tusia", "Tusian", "Tousian"],
        regionId: "cascades",
        localisation: "Diébougou, Sindou, zones de collines",
        langue: "Tusia",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~50 000",
        specificitesCulturelles:
          "Peuple des collines et des zones rocheuses, cultivateurs de sorgho et mil. Connus pour leurs pratiques initiatiques secrètes et leurs masques. Art de la poterie très développé.",
        traditions:
          "Cérémonies initiatiques (poro) importantes. Danses masquées lors des funérailles. Rituels agraires.",
        organisationSociale:
          "Organisation clanique. Les sociétés secrètes jouent un rôle régulateur. Anciens et chef de village assurent la gouvernance.",
        croyances: "Animisme avec culte des ancêtres et esprits de la nature.",
        familles: [
          { nom: "Traoré", description: "Famille dominante chez les Toussian" },
          { nom: "Sanou", description: "Clan traditionnel Toussian" },
          { nom: "Coulibaly", description: "Famille présente dans la région" },
          { nom: "Hien", description: "Clan autochtone" },
          { nom: "Somda", description: "Famille de la zone de Sindou" },
        ],
      },
      {
        id: "karaboro",
        nom: "Karaboro",
        variantes: ["Kara", "Karabora"],
        regionId: "cascades",
        localisation: "Banfora, Tiéfora, Niangoloko",
        langue: "Karaboro",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~80 000",
        specificitesCulturelles:
          "Agriculteurs de la zone soudanienne. Cultivateurs de maïs, igname et manioc. Excellent production de karité. Connus pour leurs cases rondes décorées.",
        traditions:
          "Fêtes de récolte avec danses et chants. Rituels de passage à l'âge adulte. Pratiques de divination.",
        organisationSociale:
          "Villages dirigés par des chefs de lignage. Conseil des anciens. Forgerons et griots ont un statut particulier.",
        croyances:
          "Animisme. Certaines communautés ont adopté l'islam ou le christianisme.",
        familles: [
          { nom: "Sanou", description: "Grande famille Karaboro" },
          { nom: "Coulibaly", description: "Famille influente" },
          { nom: "Traoré", description: "Clan présent depuis longtemps" },
          { nom: "Koné", description: "Famille de la zone de Banfora" },
          { nom: "Bamba", description: "Famille traditionnelle" },
          { nom: "Diamé", description: "Clan autochtone Karaboro" },
        ],
      },
      {
        id: "gouin",
        nom: "Gouin",
        variantes: ["Cerma", "Goin", "Gwin"],
        regionId: "cascades",
        localisation: "Diébougou (à cheval avec le Sud-Ouest), Léo",
        langue: "Cerma (Gouin)",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~60 000",
        specificitesCulturelles:
          "Peuple agriculteur vivant sur les rives du Mouhoun et ses affluents. Pratiquent la pêche et l'agriculture. Connus pour leurs greniers à mil cylindriques.",
        traditions:
          "Rituels liés à l'eau et aux esprits fluviaux. Danses de funérailles. Pratiques divinatoires.",
        organisationSociale:
          "Organisation lignagère. Chefs de terre (Teng-naba) régissent l'accès à la terre.",
        croyances: "Animisme et culte des eaux et des ancêtres.",
        familles: [
          { nom: "Hien", description: "Famille dominante Gouin" },
          { nom: "Somda", description: "Clan traditionnel" },
          { nom: "Coulibaly", description: "Famille de commerçants intégrée" },
          { nom: "Palé", description: "Famille autochtone" },
          { nom: "Kambou", description: "Clan de pêcheurs" },
        ],
      },
      {
        id: "siamou",
        nom: "Siamou",
        variantes: ["Sia", "Sya"],
        regionId: "cascades",
        localisation: "Région de Banfora, zone frontalière Mali-Côte d'Ivoire",
        langue: "Siamou",
        familleLinguistique: "Gur (Niger-Congo) — isolat",
        population: "~20 000",
        specificitesCulturelles:
          "Petit groupe ethnique très peu documenté. Cultivateurs vivant dans une zone de transition forêt-savane. Artisans du bois.",
        traditions:
          "Cérémonies d'initiation. Cultes agraires. Traditions musicales propres.",
        organisationSociale:
          "Organisation clanique simple. Anciens et sages régissent la vie communautaire.",
        croyances: "Animisme et pratiques syncrétiques.",
        familles: [
          { nom: "Sanou", description: "Famille Siamou connue" },
          { nom: "Coulibaly", description: "Famille intégrée à la communauté" },
          { nom: "Traoré", description: "Clan présent dans la zone" },
        ],
      },
      {
        id: "dioula-cascades",
        nom: "Dioula",
        variantes: ["Dyula", "Jula", "Wangara"],
        regionId: "cascades",
        localisation: "Banfora, Niangoloko, marchés et centres urbains",
        langue: "Dioula (Jula)",
        familleLinguistique: "Mandé",
        population: "~100 000 (dans la région)",
        specificitesCulturelles:
          "Commerçants et artisans islamisés présents dans tout le commerce régional. Maîtrisent les réseaux commerciaux transfrontaliers. Tisserands, cordonniers et marchands.",
        traditions:
          "Fêtes islamiques célébrées grandiosement. Commerce longue distance (tradition ancienne). Griots (Jeli) préservent l'histoire familiale.",
        organisationSociale:
          "Communautés structurées autour des mosquées et des marchés. Chef de communauté élu. Réseau d'entraide entre marchands.",
        croyances: "Islam sunnite (malékite).",
        familles: [
          { nom: "Coulibaly", description: "Famille marchande Dioula" },
          { nom: "Traoré", description: "Grand clan commerçant" },
          { nom: "Konaté", description: "Famille d'artisans et commerçants" },
          { nom: "Diabaté", description: "Famille griot et historienne" },
          { nom: "Kouyaté", description: "Famille de griots mandingues" },
          { nom: "Cissé", description: "Clan de lettrés islamiques" },
          { nom: "Bamba", description: "Famille commerçante influente" },
        ],
      },
    ],
  },
  {
    id: "centre",
    nom: "Centre",
    chef_lieu: "Ouagadougou",
    population: "2 800 000",
    superficie: "2 815 km²",
    description:
      "Région la plus densément peuplée, abritant la capitale Ouagadougou. Cœur politique et économique du Burkina Faso, cosmopolite avec toutes les ethnies du pays représentées.",
    couleur: "#C1121F",
    groupesEthniques: [
      {
        id: "mossi-centre",
        nom: "Mossi",
        variantes: ["Moaga", "Moore", "Mosi"],
        regionId: "centre",
        localisation: "Ouagadougou et tout le plateau central, villages environnants",
        langue: "Mooré",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~7 000 000 au niveau national",
        specificitesCulturelles:
          "Peuple le plus nombreux du Burkina Faso (environ 52% de la population). Organisés en royaumes puissants depuis le XVème siècle. Grands agriculteurs (mil, sorgho, maïs). Le Mogho Naaba est l'empereur Mossi, dont la cour est à Ouagadougou. Artisanat du bronze et du fer.",
        traditions:
          "La cérémonie du Ouaga Naaba (vendredi matin) est une tradition royale maintenue. Les rites funéraires (Yam Beoogo) durent plusieurs jours. Les griots (Zoodo-Naanba) chantent les généalogies royales. Le Basga est la fête des semailles.",
        organisationSociale:
          "Royaumes organisés avec Mogho Naaba au sommet, puis Naaba provinciaux, chefs de village (Naaba). Système de castes : nobles (Nakomse), gens du commun (Talse), griots, forgerons. Société patrilinéaire.",
        croyances:
          "Animisme ancestral (culte du Tenga - la terre), islam et christianisme très répandus. Syncrétisme fréquent.",
        familles: [
          { nom: "Ouédraogo", description: "Famille royale Mossi, clan fondateur" },
          { nom: "Kaboré", description: "Grand clan Mossi du plateau central" },
          { nom: "Sawadogo", description: "Famille Mossi très répandue" },
          { nom: "Compaoré", description: "Famille noble de la région centrale" },
          { nom: "Zongo", description: "Famille de quartier étranger, commerçants" },
          { nom: "Tapsoba", description: "Clan Mossi influent" },
          { nom: "Rabo", description: "Famille Mossi traditionelle" },
          { nom: "Tiendrebeogo", description: "Famille de la cour royale" },
          { nom: "Belem", description: "Clan de guerriers Mossi" },
          { nom: "Zoungrana", description: "Famille de chefs traditionnels" },
          { nom: "Nana", description: "Famille noble Mossi" },
          { nom: "Badini", description: "Clan de conseillers royaux" },
          { nom: "Lompo", description: "Famille de la région Est" },
          { nom: "Barro", description: "Famille Mossi nordique" },
          { nom: "Dao", description: "Clan agriculteur" },
        ],
      },
      {
        id: "yarse",
        nom: "Yarsé",
        variantes: ["Yarse", "Yarcé"],
        regionId: "centre",
        localisation: "Ouagadougou, Koudougou, villes et marchés",
        langue: "Mooré (adopté) et Dioula",
        familleLinguistique: "Gur / Mandé",
        population: "~200 000",
        specificitesCulturelles:
          "Groupe d'origine manding islamisé, intégré à la société Mossi comme marchands et lettrés. Rôle historique de propagateurs de l'islam au pays Mossi. Maîtrisent le commerce longue distance.",
        traditions:
          "Fêtes islamiques. Commerce des kola et des tissus. Enseignement coranique.",
        organisationSociale:
          "Communautés organisées autour des mosquées. Chef de communauté islamique (Imam).",
        croyances: "Islam sunnite.",
        familles: [
          { nom: "Ouédraogo", description: "Nom Mossi adopté par des Yarsé" },
          { nom: "Sawadogo", description: "Famille Yarsé commerçante" },
          { nom: "Traoré", description: "Famille d'origine Manding" },
          { nom: "Zongo", description: "Famille de commerçants étrangers intégrés" },
          { nom: "Cissé", description: "Famille de lettrés islamiques" },
          { nom: "Koné", description: "Clan marchand Yarsé" },
        ],
      },
    ],
  },
  {
    id: "centre-est",
    nom: "Centre-Est",
    chef_lieu: "Tenkodogo",
    population: "1 500 000",
    superficie: "14 442 km²",
    description:
      "Région à l'est du centre du pays. Berceau du royaume de Tenkodogo, l'un des plus anciens royaumes Mossi. Zone de contact culturel entre Mossi et Bissa.",
    couleur: "#E76F51",
    groupesEthniques: [
      {
        id: "mossi-centre-est",
        nom: "Mossi",
        variantes: ["Moaga", "Moore"],
        regionId: "centre-est",
        localisation: "Tenkodogo, Garango, Bittou, Zabré",
        langue: "Mooré",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~900 000",
        specificitesCulturelles:
          "Le royaume de Tenkodogo est considéré comme l'un des plus anciens royaumes Mossi. Agricultures du mil et sorgho. Le Naaba de Tenkodogo est une figure historique majeure.",
        traditions:
          "Rites royaux spécifiques au royaume de Tenkodogo. Funérailles royales élaborées. Fêtes agraires.",
        organisationSociale:
          "Royaume Mossi traditionnel avec cour royale. Naaba (roi), chefs de district et chefs de village.",
        croyances: "Animisme, islam et christianisme.",
        familles: [
          { nom: "Ouédraogo", description: "Famille royale Mossi" },
          { nom: "Kaboré", description: "Clan influent de la région" },
          { nom: "Sawadogo", description: "Grande famille de la zone" },
          { nom: "Compaoré", description: "Famille noble" },
          { nom: "Tapsoba", description: "Clan présent à Tenkodogo" },
          { nom: "Lompo", description: "Famille de guerriers" },
          { nom: "Rabo", description: "Clan agriculteur" },
          { nom: "Tiendrebeogo", description: "Famille de la cour" },
          { nom: "Nana", description: "Famille noble" },
          { nom: "Kanazoe", description: "Famille commerçante influente de l'Est" },
        ],
      },
      {
        id: "bissa",
        nom: "Bissa",
        variantes: ["Bisa", "Busanse"],
        regionId: "centre-est",
        localisation: "Garango, Zabré, Manga, Pô (zones de contact)",
        langue: "Bissa (Bisa)",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~600 000",
        specificitesCulturelles:
          "Peuple agriculteur de la zone de transition. Cultivent le sorgho, mil, sésame. Connus pour leur artisanat en bronze et leur tradition de sculpture. Excellents musiciens.",
        traditions:
          "Célébration des récoltes avec musique et danse. Rituels initiatiques. Funérailles avec masques.",
        organisationSociale:
          "Chefferies villageoises. Organisation clanique. Les griots préservent les traditions orales.",
        croyances:
          "Animisme, culte des ancêtres. L'islam et le christianisme ont progressé.",
        familles: [
          { nom: "Sawadogo", description: "Famille Bissa présente dans la région" },
          { nom: "Coulibaly", description: "Famille intégrée via commerce" },
          { nom: "Kaboré", description: "Clan de la zone de contact" },
          { nom: "Thiombiano", description: "Famille Bissa" },
          { nom: "Ouoba", description: "Clan traditionnel Bissa" },
          { nom: "Kaboré", description: "Famille cultivatrice" },
          { nom: "Bayala", description: "Clan Bissa de la zone de Garango" },
        ],
      },
      {
        id: "nankana",
        nom: "Nankana",
        variantes: ["Kassena-Nankana", "Nankani"],
        regionId: "centre-est",
        localisation: "Zone frontalière avec le Ghana, Pô, Tiébélé",
        langue: "Nankana",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~80 000",
        specificitesCulturelles:
          "Célèbres pour leurs maisons décorées aux peintures géométriques spectaculaires (patrimoine mondial à Tiébélé). Sculpteurs et artistes. Agriculture et élevage.",
        traditions:
          "Les femmes peignent les maisons avec des motifs symboliques. Cérémonies funéraires élaborées. Danses du crocodile (animal totem).",
        organisationSociale: "Organisation clanique acéphale. Anciens décident collectivement.",
        croyances:
          "Animisme fort. Culte du crocodile sacré. Pratiques divinatoires.",
        familles: [
          { nom: "Atinga", description: "Famille Nankana de Tiébélé" },
          { nom: "Nabie", description: "Clan traditionnel" },
          { nom: "Zongo", description: "Famille présente dans la zone" },
          { nom: "Yaro", description: "Clan de la zone de Pô" },
        ],
      },
    ],
  },
  {
    id: "centre-nord",
    nom: "Centre-Nord",
    chef_lieu: "Kaya",
    population: "1 800 000",
    superficie: "19 442 km²",
    description:
      "Région du nord du centre du pays, zone Sahélienne semi-aride. Important pour l'élevage et l'agriculture pluviale. Carrefour des ethnies Mossi et Peul.",
    couleur: "#D4A017",
    groupesEthniques: [
      {
        id: "mossi-centre-nord",
        nom: "Mossi",
        variantes: ["Moaga", "Moose"],
        regionId: "centre-nord",
        localisation: "Kaya, Boulsa, Kongoussi, Ziniaré",
        langue: "Mooré",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~1 200 000",
        specificitesCulturelles:
          "Zone de forte concentration Mossi. Le Naaba de Boussouma est une figure importante. Élevage important en complément de l'agriculture. Artisanat du cuir et textile.",
        traditions:
          "Cérémonies royales de Boussouma. Rites agricoles. Funérailles traditionnelles.",
        organisationSociale:
          "Royaumes Mossi de Boussouma et Kaya. Organisation féodale avec niveaux de chefferie.",
        croyances: "Animisme ancestral, islam et christianisme.",
        familles: [
          { nom: "Ouédraogo", description: "Famille royale dominant la région" },
          { nom: "Sawadogo", description: "Grand clan de la région Nord" },
          { nom: "Kaboré", description: "Famille influente" },
          { nom: "Tapsoba", description: "Clan noble Mossi" },
          { nom: "Belem", description: "Famille de guerriers" },
          { nom: "Rabo", description: "Clan agriculteur" },
          { nom: "Nonguierma", description: "Famille de Kaya" },
          { nom: "Zoungrana", description: "Famille de chefs" },
        ],
      },
      {
        id: "peul-centre-nord",
        nom: "Peul (Fulani)",
        variantes: ["Fulbé", "Fula", "Rimaïbé"],
        regionId: "centre-nord",
        localisation: "Pâturages et zones d'élevage dispersées, Kongoussi, Tikaré",
        langue: "Fulfuldé",
        familleLinguistique: "Atlantique (Niger-Congo)",
        population: "~400 000",
        specificitesCulturelles:
          "Éleveurs nomades possédant de grands troupeaux de zébus. Les Rimaïbé sont des descendants d'anciens esclaves peul, maintenant intégrés à la communauté.",
        traditions:
          "Transhumance saisonnière. Épreuve de flagellation (Sharo). Chants de bergers (Woyel).",
        organisationSociale:
          "Groupes nomades dirigés par un Ardo. Hiérarchie basée sur la richesse en bétail.",
        croyances: "Islam sunnite.",
        familles: [
          { nom: "Diallo", description: "Grande famille peul" },
          { nom: "Barry", description: "Famille de l'aristocratie peul" },
          { nom: "Bah", description: "Clan peul" },
          { nom: "Sow", description: "Famille d'éleveurs" },
          { nom: "Sankara", description: "Famille peul du Centre-Nord" },
        ],
      },
      {
        id: "kado",
        nom: "Kado",
        variantes: ["Kaduo", "Komono"],
        regionId: "centre-nord",
        localisation: "Zone de Kaya, villages ruraux",
        langue: "Kado",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~30 000",
        specificitesCulturelles:
          "Petit groupe autochtone de la zone. Agriculteurs. Ont été progressivement assimilés culturellement par les Mossi.",
        traditions: "Rituels agraires traditionnels. Pratiques ancestrales préservées.",
        organisationSociale: "Villages dirigés par des anciens.",
        croyances: "Animisme.",
        familles: [
          { nom: "Sawadogo", description: "Nom mossi adopté" },
          { nom: "Ouédraogo", description: "Famille intégrée" },
        ],
      },
    ],
  },
  {
    id: "centre-ouest",
    nom: "Centre-Ouest",
    chef_lieu: "Koudougou",
    population: "1 600 000",
    superficie: "21 983 km²",
    description:
      "Région à l'ouest du centre, entre les plateaux Mossi et les savanes de l'ouest. Zone de grande diversité ethnique avec les Gurunsi (groupe générique) aux côtés des Mossi.",
    couleur: "#8B5E3C",
    groupesEthniques: [
      {
        id: "mossi-centre-ouest",
        nom: "Mossi",
        variantes: ["Moaga"],
        regionId: "centre-ouest",
        localisation: "Koudougou, Réo, Pouni, Tenado",
        langue: "Mooré",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~800 000",
        specificitesCulturelles:
          "Mossi de l'ouest, zone de contact avec les Gurunsi. Le royaume de Tenkodogo a eu de l'influence ici. Agriculture pluviale dominante.",
        traditions: "Rites royaux Mossi. Funérailles. Danses masquées.",
        organisationSociale: "Royaumes Mossi. Naaba locaux.",
        croyances: "Animisme, islam, christianisme.",
        familles: [
          { nom: "Ouédraogo", description: "Famille royale" },
          { nom: "Kaboré", description: "Clan dominant" },
          { nom: "Sawadogo", description: "Famille répandue" },
          { nom: "Badini", description: "Famille de conseillers" },
          { nom: "Zoungrana", description: "Clan de chefs" },
        ],
      },
      {
        id: "nuna-centre-ouest",
        nom: "Nuna",
        variantes: ["Nouna", "Nuni", "Léla"],
        regionId: "centre-ouest",
        localisation: "Leo, Sapouy, Réo",
        langue: "Nuni",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~200 000",
        specificitesCulturelles:
          "Artisans céramistes remarquables. Masques aux motifs géométriques polychromes utilisés dans les cérémonies. Cultivateurs de sorgho.",
        traditions:
          "Rituels avec masques géométriques colorés. Danses funéraires. Cérémonies d'initiation.",
        organisationSociale:
          "Société acéphale. Anciens et chefs de lignage. Pas de roi central.",
        croyances: "Animisme profond.",
        familles: [
          { nom: "Ouoba", description: "Famille Nuna traditionnelle" },
          { nom: "Tougma", description: "Clan des céramistes" },
          { nom: "Thiombiano", description: "Grande famille Gurunsi" },
          { nom: "Kaboré", description: "Famille de contact Mossi-Nuna" },
          { nom: "Zongo", description: "Famille commerçante intégrée" },
        ],
      },
      {
        id: "ko",
        nom: "Ko",
        variantes: ["Kouroumba"],
        regionId: "centre-ouest",
        localisation: "Titao, Ouahigouya (zones frontalières Centre-Ouest/Nord)",
        langue: "Kouroumba",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~40 000",
        specificitesCulturelles:
          "Peuple des falaises. Pêcheurs et cultivateurs. Connus pour leurs masques antilopes et leurs cérémonies funéraires.",
        traditions:
          "Masques antilopes lors des funérailles. Chasse rituelle. Cultes de la nature.",
        organisationSociale: "Chefferies locales. Organisation clanique.",
        croyances: "Animisme.",
        familles: [
          { nom: "Ouoba", description: "Famille Ko" },
          { nom: "Sawadogo", description: "Intégration Mossi" },
        ],
      },
      {
        id: "pougouli",
        nom: "Pougouli",
        variantes: ["Puguli", "Birifor du Nord"],
        regionId: "centre-ouest",
        localisation: "Diébougou, zone de transition Centre-Ouest/Sud-Ouest",
        langue: "Puguli",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~50 000",
        specificitesCulturelles:
          "Agriculteurs proches des Dagara et Birifor. Pratiques culturelles similaires aux peuples du Sud-Ouest. Cultivent le mil, le sorgho.",
        traditions:
          "Cultes des ancêtres. Danses masquées. Rituels agraires.",
        organisationSociale: "Clans exogames. Anciens décident.",
        croyances: "Animisme.",
        familles: [
          { nom: "Hien", description: "Grande famille Pougouli" },
          { nom: "Somda", description: "Clan traditionnel" },
          { nom: "Coulibaly", description: "Famille intégrée" },
        ],
      },
    ],
  },
  {
    id: "centre-sud",
    nom: "Centre-Sud",
    chef_lieu: "Manga",
    population: "800 000",
    superficie: "15 082 km²",
    description:
      "Région au sud du centre, frontalière du Ghana. Zone de contact entre Mossi, Bissa et Kassena-Nankana. Connue pour le site de Tiébélé et ses maisons décorées.",
    couleur: "#6D6875",
    groupesEthniques: [
      {
        id: "mossi-centre-sud",
        nom: "Mossi",
        variantes: ["Moaga"],
        regionId: "centre-sud",
        localisation: "Manga, Kombissiri, Sapouy",
        langue: "Mooré",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~400 000",
        specificitesCulturelles:
          "Mossi du sud, en contact avec les cultures du Ghana. Agriculture de décrue. Élevage. Artisanat du cuir.",
        traditions: "Rites royaux. Funérailles. Fêtes agraires.",
        organisationSociale: "Royaumes Mossi du sud.",
        croyances: "Animisme, islam, christianisme.",
        familles: [
          { nom: "Ouédraogo", description: "Famille royale" },
          { nom: "Sawadogo", description: "Clan agriculteur" },
          { nom: "Kaboré", description: "Famille influente" },
          { nom: "Compaoré", description: "Clan noble" },
          { nom: "Rabo", description: "Famille traditionnelle" },
        ],
      },
      {
        id: "bissa-centre-sud",
        nom: "Bissa",
        variantes: ["Bisa"],
        regionId: "centre-sud",
        localisation: "Manga, Garango",
        langue: "Bissa",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~200 000",
        specificitesCulturelles:
          "Cultivateurs et artisans. Tradition musicale riche (balafon). Excellents conteurs.",
        traditions:
          "Fêtes de récolte. Danses au balafon. Rituels d'initiation.",
        organisationSociale: "Organisation clanique. Chefs de village.",
        croyances: "Animisme, islam.",
        familles: [
          { nom: "Ouoba", description: "Famille Bissa" },
          { nom: "Bayala", description: "Clan de la zone" },
          { nom: "Sawadogo", description: "Famille intégrée" },
          { nom: "Thiombiano", description: "Grand clan" },
        ],
      },
      {
        id: "kassena",
        nom: "Kassena",
        variantes: ["Kasena", "Kassena-Nankana"],
        regionId: "centre-sud",
        localisation: "Pô, Tiébélé (site UNESCO), zone frontalière Ghana",
        langue: "Kasem",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~100 000",
        specificitesCulturelles:
          "Peuple célèbre pour les maisons décorées de Tiébélé (fresques géométriques). Les femmes sont les artistes principales. Excellent agriculture de case et élevage.",
        traditions:
          "Peinture des concessions (fresques géométriques). Fêtes du crocodile. Rituels de passage.",
        organisationSociale:
          "Clans patrilinéaires. Conseil des anciens. Pas de royauté.",
        croyances:
          "Animisme. Le crocodile est animal totem. Culte des ancêtres.",
        familles: [
          { nom: "Atinga", description: "Grande famille Kassena" },
          { nom: "Ayamé", description: "Clan de Tiébélé" },
          { nom: "Nabie", description: "Famille traditionnelle" },
          { nom: "Tamini", description: "Clan agriculteur" },
        ],
      },
    ],
  },
  {
    id: "est",
    nom: "Est",
    chef_lieu: "Fada N'Gourma",
    population: "1 600 000",
    superficie: "47 085 km²",
    description:
      "La plus grande région du Burkina Faso en superficie. Berceau des Gourmantché et porte d'entrée vers le Niger. Zone de biodiversité avec les parcs nationaux d'Arly et du W.",
    couleur: "#40916C",
    groupesEthniques: [
      {
        id: "gourmantche",
        nom: "Gourmantché",
        variantes: ["Gurma", "Gourma", "Gourmantché"],
        regionId: "est",
        localisation: "Fada N'Gourma, Diapaga, Bogandé, Kantchari, Pama",
        langue: "Gourmanchéma",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~800 000",
        specificitesCulturelles:
          "Peuple fondateur du royaume de Gulmu (l'un des royaumes les plus anciens du Burkina Faso). Agriculteurs et chasseurs. Grand expertise dans la chasse traditionnelle. Artisanat du cuir et de la poterie.",
        traditions:
          "Chasse rituelle (Gakpoani) avec cérémonies spéciales. Funérailles royales. Danses du lion et du crocodile. Masques animaux.",
        organisationSociale:
          "Royaume de Gulmu avec le Gourmantché-Naaba au sommet. Organisation féodale. Castes de nobles, gens du commun, griots et forgerons.",
        croyances:
          "Animisme profond. Culte des ancêtres royaux. Islam présent dans les zones urbaines.",
        familles: [
          { nom: "Lompo", description: "Famille royale Gourmantché" },
          { nom: "Yago", description: "Grand clan guerrier" },
          { nom: "Tibiri", description: "Famille de nobles" },
          { nom: "Lankoandé", description: "Clan de la zone de Fada" },
          { nom: "Kombary", description: "Famille de chasseurs traditionnels" },
          { nom: "Tamou", description: "Famille du Gulmu" },
          { nom: "Idrissa", description: "Famille islamisée" },
          { nom: "Bokoum", description: "Clan de l'Est" },
          { nom: "Porgo", description: "Famille du Fada" },
          { nom: "Nikiéma", description: "Clan agriculteur" },
          { nom: "Rouamba", description: "Famille de la zone" },
        ],
      },
      {
        id: "peul-est",
        nom: "Peul (Fulani)",
        variantes: ["Fulbé", "Wodaabe", "Bororo"],
        regionId: "est",
        localisation: "Plaines pastorales de l'Est, zones du parc d'Arly, Kompienga",
        langue: "Fulfuldé",
        familleLinguistique: "Atlantique (Niger-Congo)",
        population: "~300 000",
        specificitesCulturelles:
          "Nomades pastoraux traversant les savanes de l'Est. Les Bororo sont réputés pour leurs ornements corporels et leurs concours de beauté masculine (Wodaabe). Grands éleveurs de zébus.",
        traditions:
          "Geerewol (concours de beauté masculin Wodaabe). Guerewol (fête annuelle). Transhumance vers le Ghana et le Niger.",
        organisationSociale:
          "Groupes nomades en campements (ruga). Ardo dirige le groupe. Hiérarchie pastorale.",
        croyances: "Islam avec pratiques animistes conservées.",
        familles: [
          { nom: "Diallo", description: "Grande famille peul" },
          { nom: "Barry", description: "Aristocratie peul" },
          { nom: "Bah", description: "Clan peul" },
          { nom: "Hamidou", description: "Famille peul de l'Est" },
          { nom: "Idrissa", description: "Famille peul islamisée" },
        ],
      },
      {
        id: "bella",
        nom: "Bella",
        variantes: ["Bellah", "Kel Tamashek esclaves"],
        regionId: "est",
        localisation: "Zone du Sahel à Est, Dori, Sebba",
        langue: "Fulfuldé ou Tamashek",
        familleLinguistique: "Atlantique / Berbère",
        population: "~30 000",
        specificitesCulturelles:
          "Descendants d'anciens captifs des Touareg, maintenant groupe indépendant. Éleveurs et agriculteurs. Artisans du cuir et du métal.",
        traditions:
          "Fêtes communes avec Peul et Touareg. Conservation de pratiques mixtes.",
        organisationSociale:
          "Groupes semi-nomades. Organisation communautaire propre.",
        croyances: "Islam sunnite.",
        familles: [
          { nom: "Ag", description: "Préfixe Tamashek (fils de)" },
          { nom: "Walet", description: "Préfixe féminin Tamashek" },
        ],
      },
    ],
  },
  {
    id: "hauts-bassins",
    nom: "Hauts-Bassins",
    chef_lieu: "Bobo-Dioulasso",
    population: "2 200 000",
    superficie: "25 047 km²",
    description:
      "Deuxième ville du pays avec Bobo-Dioulasso, capitale économique et culturelle. Région la plus diversifiée culturellement avec Bobo, Dioula et nombreux autres groupes.",
    couleur: "#7B2D8B",
    groupesEthniques: [
      {
        id: "bobo",
        nom: "Bobo",
        variantes: ["Bwa", "Bobo-Fing", "Bobo-Oulé"],
        regionId: "hauts-bassins",
        localisation: "Bobo-Dioulasso, Koumi, Bama, Satiri",
        langue: "Bobo (Bwamou) et ses dialectes",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~300 000",
        specificitesCulturelles:
          "Peuple fondateur de Bobo-Dioulasso. Grands cultivateurs et artisans tisserands. Connus pour leurs masques en fibres végétales et les danses du Dwo (puissance divine). La ville de Sya (Bobo-Dioulasso) est leur cité historique.",
        traditions:
          "Le Dwo est la cérémonie centrale annuelle avec masques feuilles géants. Funérailles avec feux d'artifice et danses. Les forgerons Bobo ont un statut particulier. Fabrication du dolo (bière de mil).",
        organisationSociale:
          "Société acéphale sans roi. Chefs de quartier (dugu-tigi). Conseils d'anciens. Sociétés initiatiques régulent la vie sociale.",
        croyances:
          "Animisme profond avec le Dwo comme puissance surnaturelle principale. Islam présent à Bobo-Dioulasso.",
        familles: [
          { nom: "Sanou", description: "Grande famille Bobo fondatrice" },
          { nom: "Ouattara", description: "Famille Bobo de Bobo-Dioulasso" },
          { nom: "Coulibaly", description: "Clan Bobo influent" },
          { nom: "Koné", description: "Famille de la communauté Bobo" },
          { nom: "Dembélé", description: "Clan Bobo-Fing" },
          { nom: "Barro", description: "Famille de cultivateurs" },
          { nom: "Sana", description: "Clan autochtone Bobo" },
          { nom: "Dao", description: "Famille traditionnelle" },
          { nom: "Traoré", description: "Famille présente depuis longtemps" },
        ],
      },
      {
        id: "dioula-hauts-bassins",
        nom: "Dioula",
        variantes: ["Jula", "Dyula", "Wangara", "Manding"],
        regionId: "hauts-bassins",
        localisation: "Bobo-Dioulasso (toute la ville), Houndé, Orodara",
        langue: "Dioula (langue franche commerciale)",
        familleLinguistique: "Mandé",
        population: "~700 000",
        specificitesCulturelles:
          "Commerçants et artisans islamisés dominant la vie économique de Bobo-Dioulasso. Tisserands de renom. La mosquée de Bobo-Dioulasso (17ème siècle) témoigne de leur implantation ancienne.",
        traditions:
          "Fêtes du Ramadan et Aid el Kébir grandiosement célébrées. Commerce des kola, tissus et bétail. Griots (Jeli) chantent les généalogies.",
        organisationSociale:
          "Organisation autour des mosquées et marchés. Imam communautaire. Réseau familial commercial étendu.",
        croyances: "Islam sunnite malékite.",
        familles: [
          { nom: "Coulibaly", description: "Première famille Dioula de Bobo" },
          { nom: "Traoré", description: "Grand clan commerçant" },
          { nom: "Konaté", description: "Famille d'artisans" },
          { nom: "Diabaté", description: "Famille de griots" },
          { nom: "Kouyaté", description: "Clan griot mandingue" },
          { nom: "Sanogo", description: "Famille commerçante" },
          { nom: "Ouattara", description: "Famille influente du nord de Côte d'Ivoire" },
          { nom: "Bamba", description: "Clan présent à Bobo" },
          { nom: "Cissé", description: "Famille de marabouts" },
          { nom: "Dembélé", description: "Famille de tisserands" },
        ],
      },
      {
        id: "tiefo",
        nom: "Tiéfo",
        variantes: ["Tefo", "Tiefo"],
        regionId: "hauts-bassins",
        localisation: "Diébougou-Houndé corridor, zone rurale",
        langue: "Tiéfo",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~50 000",
        specificitesCulturelles:
          "Peuple agriculteur autochtone de la région. Progressivement intégré culturellement aux Dioula. Cultivent le sorgho, maïs et arachide.",
        traditions: "Cérémonies agraires. Danses traditionnelles.",
        organisationSociale: "Villages dirigés par anciens.",
        croyances: "Animisme, islam progressant.",
        familles: [
          { nom: "Sanou", description: "Famille Tiéfo répandue" },
          { nom: "Koné", description: "Clan de la région" },
          { nom: "Coulibaly", description: "Famille intégrée aux Dioula" },
        ],
      },
      {
        id: "toussian-hauts",
        nom: "Toussian",
        variantes: ["Tusia"],
        regionId: "hauts-bassins",
        localisation: "Sindou, Koloko (zone frontalière Mali)",
        langue: "Tusia",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~40 000",
        specificitesCulturelles:
          "Cultivateurs des collines de Sindou (falaises célèbres). Agriculture en terrasses. Artisanat.",
        traditions: "Cérémonies initiatiques. Danses des falaises.",
        organisationSociale: "Villages en falaise. Anciens gouvernent.",
        croyances: "Animisme.",
        familles: [
          { nom: "Traoré", description: "Famille Toussian de Sindou" },
          { nom: "Sanou", description: "Clan traditionnel" },
        ],
      },
    ],
  },
  {
    id: "nord",
    nom: "Nord",
    chef_lieu: "Ouahigouya",
    population: "1 400 000",
    superficie: "16 325 km²",
    description:
      "Région sahélienne au nord du pays. Zone d'émigration importante. Berceau du puissant royaume Mossi de Yatenga avec Ouahigouya comme capitale royale.",
    couleur: "#C77DFF",
    groupesEthniques: [
      {
        id: "mossi-nord",
        nom: "Mossi du Yatenga",
        variantes: ["Moaga", "Yatenga-Nakomse"],
        regionId: "nord",
        localisation: "Ouahigouya, Titao, Séguénéga, Thiou",
        langue: "Mooré",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~900 000",
        specificitesCulturelles:
          "Le royaume du Yatenga est l'un des plus puissants royaumes Mossi. Le Yatenga Naaba réside à Ouahigouya. Zone aride nécessitant adaptation agricole (mil et élevage). Forte tradition guerrière et royale.",
        traditions:
          "Cour royale du Yatenga Naaba. Fête Yamba (fête des semences). Rites funéraires royaux. Griots royaux (Zoodo-Naanba).",
        organisationSociale:
          "Royaume du Yatenga avec hiérarchie complète. Cour royale permanente à Ouahigouya.",
        croyances: "Animisme royal, islam, christianisme.",
        familles: [
          { nom: "Ouédraogo", description: "Famille royale du Yatenga" },
          { nom: "Sawadogo", description: "Grand clan du Nord" },
          { nom: "Kaboré", description: "Famille noble" },
          { nom: "Belem", description: "Famille guerrière" },
          { nom: "Tapsoba", description: "Clan noble" },
          { nom: "Nonguierma", description: "Famille du Yatenga" },
          { nom: "Tiendrebeogo", description: "Famille de la cour" },
          { nom: "Rabo", description: "Clan agriculteur" },
          { nom: "Nikiéma", description: "Famille royale" },
        ],
      },
      {
        id: "peul-nord",
        nom: "Peul (Fulani)",
        variantes: ["Fulbé", "Silmi-Mossi"],
        regionId: "nord",
        localisation: "Zones pastorales du Nord, Thiou, Banh",
        langue: "Fulfuldé",
        familleLinguistique: "Atlantique (Niger-Congo)",
        population: "~300 000",
        specificitesCulturelles:
          "Les Silmi-Mossi sont des métis Mossi-Peul, intégrés à la société Mossi mais conservant l'élevage. Pasteurs adaptés au Sahel. Élevage caprin et bovin.",
        traditions:
          "Transhumance. Mariage entre communautés (Peul-Mossi). Échanges de lait contre céréales.",
        organisationSociale: "Intégrés aux structures Mossi mais avec identité propre.",
        croyances: "Islam et animisme.",
        familles: [
          { nom: "Diallo", description: "Grande famille peul" },
          { nom: "Barry", description: "Famille peul du Nord" },
          { nom: "Bah", description: "Clan peul" },
          { nom: "Ouédraogo", description: "Nom Mossi adopté par certains Silmi" },
        ],
      },
      {
        id: "samo-nord",
        nom: "Samo",
        variantes: ["San", "Northern Samo"],
        regionId: "nord",
        localisation: "Titao, Lanfièra",
        langue: "Samo du Nord",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~80 000",
        specificitesCulturelles:
          "Agriculeurs adaptés au Sahel. Ont résisté aux royaumes Mossi. Culture traditionnelle préservée.",
        traditions: "Rituels agraires. Danses masquées. Fêtes de récolte.",
        organisationSociale: "Organisation clanique sans royauté.",
        croyances: "Animisme.",
        familles: [
          { nom: "Coulibaly", description: "Famille Samo principale" },
          { nom: "Diarra", description: "Clan traditionnel" },
          { nom: "Barro", description: "Famille cultivatrice" },
        ],
      },
    ],
  },
  {
    id: "plateau-central",
    nom: "Plateau-Central",
    chef_lieu: "Ziniaré",
    population: "700 000",
    superficie: "8 010 km²",
    description:
      "Petite région autour de Ziniaré, au nord-est de Ouagadougou. Coeur du peuplement Mossi. Zone de plateaux latéritiques. Capitale présidentielle historique.",
    couleur: "#F4845F",
    groupesEthniques: [
      {
        id: "mossi-plateau",
        nom: "Mossi",
        variantes: ["Moaga"],
        regionId: "plateau-central",
        localisation: "Ziniaré, Zorgho, Boussé",
        langue: "Mooré",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~600 000",
        specificitesCulturelles:
          "Cœur du plateau Mossi. Zone d'origine des migrations Mossi. Agriculture de plateaux. Artisanat du bronze (bijoux et bronzes). Ziniaré est une ville historique.",
        traditions:
          "Rites agricoles du Basga. Funérailles traditionnelles. Danses royales.",
        organisationSociale: "Royaumes Mossi du plateau. Chefferie bien structurée.",
        croyances: "Animisme, islam et christianisme.",
        familles: [
          { nom: "Ouédraogo", description: "Famille royale omniprésente" },
          { nom: "Compaoré", description: "Famille noble originaire de Ziniaré" },
          { nom: "Sawadogo", description: "Clan dominant du plateau" },
          { nom: "Kaboré", description: "Grande famille Mossi" },
          { nom: "Tapsoba", description: "Clan noble" },
          { nom: "Zoungrana", description: "Famille de chefs" },
          { nom: "Belem", description: "Famille guerrière" },
          { nom: "Rabo", description: "Clan traditionnel" },
        ],
      },
      {
        id: "bissa-plateau",
        nom: "Bissa",
        variantes: ["Bisa"],
        regionId: "plateau-central",
        localisation: "Zone de Zorgho, villages du sud-est du plateau",
        langue: "Bissa",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~80 000",
        specificitesCulturelles:
          "Communauté Bissa du plateau. Cultivateurs de sorgho et mil. Artisans.",
        traditions: "Danses au balafon. Rituels funéraires.",
        organisationSociale: "Organisation clanique.",
        croyances: "Animisme et islam.",
        familles: [
          { nom: "Ouoba", description: "Famille Bissa" },
          { nom: "Bayala", description: "Clan de la zone" },
          { nom: "Thiombiano", description: "Grand clan" },
        ],
      },
    ],
  },
  {
    id: "sahel",
    nom: "Sahel",
    chef_lieu: "Dori",
    population: "1 200 000",
    superficie: "33 756 km²",
    description:
      "Région la plus septentrionale du Burkina Faso, zone sahélo-saharienne. Peuplée majoritairement par les Peul et les Touareg. Zone d'élevage extensif et de grande sécheresse.",
    couleur: "#F3722C",
    groupesEthniques: [
      {
        id: "peul-sahel",
        nom: "Peul (Fulani)",
        variantes: ["Fulbé", "Wodaabe", "Jelgooji", "Liptaako"],
        regionId: "sahel",
        localisation: "Dori, Gorom-Gorom, Djibo, Sebba",
        langue: "Fulfuldé",
        familleLinguistique: "Atlantique (Niger-Congo)",
        population: "~500 000",
        specificitesCulturelles:
          "Groupe dominant du Sahel burkinabè. Pasteurs nomades avec d'immenses troupeaux. Le Liptaako (capitale Dori) était un important émirat peul au 19ème siècle. Les Jelgooji ont une tradition étatique forte.",
        traditions:
          "Épreuve du Sharo (flagellation rituelle). Fête du Geerewol (concours de beauté). Littérature orale riche (épopées peul). Chants de bergers (Woyel).",
        organisationSociale:
          "Émirat du Liptaako (ancienne organisation étatique). Ardo/Lamiido dirige les communautés. Hiérarchie claire entre nobles Fulbé, artisans et Rimaïbé.",
        croyances:
          "Islam sunnite profondément ancré depuis le 18ème siècle. Jihad de Cheikou Amadou au 19ème siècle.",
        familles: [
          { nom: "Diallo", description: "Grande famille peul dominante" },
          { nom: "Barry", description: "Aristocratie peul du Liptaako" },
          { nom: "Bah", description: "Famille noble peul" },
          { nom: "Sow", description: "Clan d'éleveurs" },
          { nom: "Balde", description: "Famille peul réputée" },
          { nom: "Sankaré", description: "Famille du Sahel burkinabè" },
          { nom: "Hamidou", description: "Famille islamisée" },
          { nom: "Tamboura", description: "Clan du Sahel" },
          { nom: "Idrissa", description: "Famille de lettrés islamiques" },
        ],
      },
      {
        id: "touareg",
        nom: "Touareg",
        variantes: ["Tamashek", "Kel Tamashek", "Kel Tamasheq"],
        regionId: "sahel",
        localisation: "Gorom-Gorom, Markoye, zone frontalière Mali-Niger",
        langue: "Tamashek (Tamasheq)",
        familleLinguistique: "Berbère (Afro-Asiatique)",
        population: "~80 000",
        specificitesCulturelles:
          "Peuple berbère nomade du Sahara et Sahel. Confédérations tribales avec inégalités sociales. Artisans du cuir, de l'argent et du fer. Poètes et musiciens (imzad, guitare tiniardent). Les femmes ne portent pas le voile, les hommes oui (tagelmust bleu).",
        traditions:
          "Festival Tabaski. Concours de courses de chameaux. Poésie et musique Touareg. Caravanes commerciales.",
        organisationSociale:
          "Confédérations tribales. Amenokal (chef de confédération). Castes : Ihaggaren (nobles), Imghad (tributaires), Inaden (forgerons), Iklan (anciens esclaves).",
        croyances: "Islam avec pratiques berbères et animistes conservées.",
        familles: [
          { nom: "Ag Ghaly", description: "Grande famille noble Touareg" },
          { nom: "Walet Mohamed", description: "Famille noble féminine" },
          { nom: "Ag Bahanga", description: "Clan guerrier" },
          { nom: "Ag Intalla", description: "Famille de l'amenokal" },
        ],
      },
      {
        id: "songhay",
        nom: "Songhay",
        variantes: ["Songhaï", "Zarma", "Djerma"],
        regionId: "sahel",
        localisation: "Zones frontalières du Niger, Gorom-Gorom",
        langue: "Songhay (Zarma)",
        familleLinguistique: "Nilo-Saharienne",
        population: "~40 000",
        specificitesCulturelles:
          "Descendants de l'Empire Songhay. Pêcheurs, agriculteurs et commerçants. Présence ancienne le long des cours d'eau (Béli, Gorouol).",
        traditions:
          "Culte Hauka (possession rituelle). Fêtes liées aux cours d'eau. Pêche rituelle.",
        organisationSociale:
          "Villages dirigés par des chefs de communauté. Organisation clanique.",
        croyances: "Islam avec syncrétisme Hauka.",
        familles: [
          { nom: "Maïga", description: "Grande famille Songhay" },
          { nom: "Touré", description: "Clan de commerçants" },
          { nom: "Cissé", description: "Famille de lettrés" },
          { nom: "Hamma", description: "Famille du Niger" },
        ],
      },
      {
        id: "bella-sahel",
        nom: "Bella",
        variantes: ["Bellah", "Kel Tamasheq esclaves libérés"],
        regionId: "sahel",
        localisation: "Dispersés dans le Sahel, camps semi-sédentaires",
        langue: "Tamashek ou Fulfuldé",
        familleLinguistique: "Berbère / Atlantique",
        population: "~50 000",
        specificitesCulturelles:
          "Descendants d'anciens captifs des Touareg. Intégrés comme groupe autonome. Éleveurs et artisans. Vivent souvent près des communautés Touareg ou Peul.",
        traditions: "Fêtes mixtes. Conservation de pratiques des deux cultures.",
        organisationSociale: "Organisation communautaire propre en campements.",
        croyances: "Islam.",
        familles: [
          { nom: "Ibrahim", description: "Famille Bella courante" },
          { nom: "Mohamed", description: "Famille islamique intégrée" },
        ],
      },
    ],
  },
  {
    id: "sud-ouest",
    nom: "Sud-Ouest",
    chef_lieu: "Gaoua",
    population: "800 000",
    superficie: "16 925 km²",
    description:
      "Région montagneuse et forestière du sud-ouest du Burkina Faso. Grande diversité ethnique avec Lobi, Dagara, Birifor et autres. Connue pour sa richesse culturelle et naturelle.",
    couleur: "#457B9D",
    groupesEthniques: [
      {
        id: "dagara",
        nom: "Dagara",
        variantes: ["Dagari", "Dagaari", "Dagara-Wulé"],
        regionId: "sud-ouest",
        localisation: "Diébougou, Batié, Kampti, Dano, Dissin",
        langue: "Dagara",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~400 000",
        specificitesCulturelles:
          "Peuple de la zone forestière et des savanes du Sud-Ouest. Agriculteurs cultivant igname, mil, sorgho. Grande tradition de sculpture sur bois et de poterie. Excellents danseurs. Résistants à la colonisation.",
        traditions:
          "Funérailles élaborées avec des dizaines de danses différentes. Le Joro est la société masquée principale. Initiations importantes. Xylophones et tambours sont centraux.",
        organisationSociale:
          "Société acéphale et égalitaire. Pas de roi. Les anciens (tendganab) gèrent la terre. Organisation en clans exogames. Les forgerons (saab) ont un statut particulier.",
        croyances:
          "Animisme profond avec culte des ancêtres (les Kontomble ou esprits). Le tengan (esprit de la terre) est central. Christianisme très présent (missions catholiques).",
        familles: [
          { nom: "Hien", description: "Grande famille Dagara" },
          { nom: "Somda", description: "Clan traditionnel majeur" },
          { nom: "Dah", description: "Famille de cultivateurs Dagara" },
          { nom: "Palé", description: "Grand clan du Sud-Ouest" },
          { nom: "Kambou", description: "Famille de pêcheurs et agriculteurs" },
          { nom: "Poda", description: "Clan Dagara influent" },
          { nom: "Bayala", description: "Famille présente" },
          { nom: "Bognini", description: "Clan de la zone de Batié" },
          { nom: "Ouattara", description: "Famille intégrée" },
          { nom: "Da", description: "Clan Dagara fondamental" },
          { nom: "Ky", description: "Famille Dagara-Wulé" },
          { nom: "Sanwidi", description: "Clan de la zone de Diébougou" },
        ],
      },
      {
        id: "lobi",
        nom: "Lobi",
        variantes: ["Lobiri", "Lowiili"],
        regionId: "sud-ouest",
        localisation: "Gaoua, Diébougou, Kampti, zone frontalière Ghana-Côte d'Ivoire",
        langue: "Lobiri",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~250 000",
        specificitesCulturelles:
          "Peuple célèbre pour ses statues en bois (bateba) utilisées pour communiquer avec les esprits (thila). Art sculptural parmi les plus importants d'Afrique de l'Ouest. Cultivateurs d'igname et chasseurs. Résistance farouche à la colonisation française.",
        traditions:
          "Le Thil est l'esprit tutélaire qui guide chaque personne. Statues bateba représentant différentes postures d'esprits. Initiations (initiation des jeunes hommes avec épreuves). Divination importante.",
        organisationSociale:
          "Société acéphale et individualiste. Pas de chef politique. Chaque chef de famille est indépendant. Le devin (dibia) est très influent. Les Lobi traversent souvent les frontières entre Ghana, Burkina et Côte d'Ivoire.",
        croyances:
          "Animisme très fort. Culte des thila (esprits). Chaque concession a son propre thil. Résistance au christianisme et à l'islam.",
        familles: [
          { nom: "Hien", description: "Famille Lobi répandue" },
          { nom: "Palé", description: "Grand clan Lobi" },
          { nom: "Kambou", description: "Famille traditionnelle" },
          { nom: "Somda", description: "Clan influent" },
          { nom: "Poda", description: "Famille Lobi de Gaoua" },
          { nom: "Bonkoungou", description: "Clan de la zone" },
          { nom: "Bognini", description: "Famille Lobi" },
          { nom: "Da", description: "Clan autochtone" },
        ],
      },
      {
        id: "birifor",
        nom: "Birifor",
        variantes: ["Birifor", "Birfor", "Southern Dagaari"],
        regionId: "sud-ouest",
        localisation: "Batié, Kampti, Diébougou (zone frontalière Ghana)",
        langue: "Birifor",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~150 000",
        specificitesCulturelles:
          "Proches parents des Dagara et des Lobi. Cultivateurs et chasseurs. Tradition de masques en fibres végétales. Excellents en vannerie et poterie.",
        traditions:
          "Danses masquées lors des funérailles. Initiations des jeunes. Chasse rituelle.",
        organisationSociale:
          "Société acéphale. Anciens décident. Organisation en lignages.",
        croyances: "Animisme. Culte des ancêtres.",
        familles: [
          { nom: "Hien", description: "Famille Birifor principale" },
          { nom: "Somda", description: "Clan de la zone" },
          { nom: "Palé", description: "Famille influente" },
          { nom: "Da", description: "Clan Birifor" },
          { nom: "Poda", description: "Famille de Batié" },
        ],
      },
      {
        id: "dyan",
        nom: "Dyan",
        variantes: ["Dian", "Dyan-Wulé"],
        regionId: "sud-ouest",
        localisation: "Gaoua, villages périphériques",
        langue: "Dyan",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~30 000",
        specificitesCulturelles:
          "Petit groupe autochtone vivant en marge des Lobi et Dagara. Cultivateurs. Traditions propres préservées.",
        traditions: "Rituels agraires. Fêtes de village.",
        organisationSociale: "Villages autonomes. Anciens décident.",
        croyances: "Animisme.",
        familles: [
          { nom: "Hien", description: "Famille intégrée au réseau Dyan" },
          { nom: "Somda", description: "Clan Dyan" },
        ],
      },
      {
        id: "gan",
        nom: "Gan",
        variantes: ["Gan", "Gane"],
        regionId: "sud-ouest",
        localisation: "Léo, zone frontalière Ghana",
        langue: "Gan",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~25 000",
        specificitesCulturelles:
          "Petit groupe d'origine ghanaienne. Cultivateurs et éleveurs. Ont conservé une culture propre malgré l'influence des voisins.",
        traditions: "Danses traditionnelles. Fêtes communautaires.",
        organisationSociale: "Villages dirigés par anciens.",
        croyances: "Animisme et christianisme.",
        familles: [
          { nom: "Palé", description: "Famille Gan" },
          { nom: "Kambou", description: "Clan traditionnel" },
        ],
      },
      {
        id: "phuo",
        nom: "Phuo",
        variantes: ["Pwo", "Phuo"],
        regionId: "sud-ouest",
        localisation: "Zone de Diébougou",
        langue: "Phuo",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~15 000",
        specificitesCulturelles:
          "Très petit groupe ethnique peu documenté. Cultivateurs vivant dans les zones boisées.",
        traditions: "Pratiques agraires. Cultes locaux.",
        organisationSociale: "Clans familiaux.",
        croyances: "Animisme.",
        familles: [
          { nom: "Hien", description: "Famille présente dans la zone" },
          { nom: "Da", description: "Clan Phuo" },
        ],
      },
      {
        id: "wara",
        nom: "Wara",
        variantes: ["Waara", "Wilé"],
        regionId: "sud-ouest",
        localisation: "Gaoua et environs",
        langue: "Wara",
        familleLinguistique: "Gur (Niger-Congo)",
        population: "~20 000",
        specificitesCulturelles:
          "Groupe de la région de Gaoua, cultivateurs et éleveurs. Traditions proches des Lobi.",
        traditions: "Cérémonies funéraires. Agriculture rituelle.",
        organisationSociale: "Lignages et anciens.",
        croyances: "Animisme.",
        familles: [
          { nom: "Hien", description: "Famille Wara" },
          { nom: "Palé", description: "Clan de la zone" },
        ],
      },
    ],
  },
];

// Toutes les ethnies à plat pour la recherche
export const tousGroupes = regions.flatMap((r) => r.groupesEthniques);

// Toutes les langues uniques
export const toutesLangues = [...new Set(tousGroupes.map((g) => g.langue))].sort();

// Toutes les familles linguistiques uniques
export const toutessFamillesLinguistiques = [
  ...new Set(tousGroupes.map((g) => g.familleLinguistique)),
].sort();

export const getRegionById = (id: string) => regions.find((r) => r.id === id);
export const getGroupeById = (regionId: string, groupeId: string) => {
  const region = getRegionById(regionId);
  return region?.groupesEthniques.find((g) => g.id === groupeId);
};
export const searchGroupes = (query: string) => {
  const q = query.toLowerCase();
  return tousGroupes.filter(
    (g) =>
      g.nom.toLowerCase().includes(q) ||
      g.variantes?.some((v) => v.toLowerCase().includes(q)) ||
      g.langue.toLowerCase().includes(q) ||
      g.familles.some((f) => f.nom.toLowerCase().includes(q)) ||
      g.localisation.toLowerCase().includes(q)
  );
};
