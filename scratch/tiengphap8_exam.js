// tiengphap8_exam.js
// 40 câu hỏi trắc nghiệm Đấu trường Trạng Nguyên Tiếng Pháp 8 (Thời gian: 60:00)
// Phân bố toàn diện chuẩn SGK Kết nối tri thức với cuộc sống

const examQuestions = [
  // --- PHẦN 1: VOCABULAIRE & THÉMATIQUES (Câu 1 - 10) ---
  {
    id: 1,
    cat: "Vocabulaire",
    q: "Dans l'Unité 1, quel mot désigne un livre de bande dessinée ?",
    options: ["A. Un roman", "B. Un album", "C. Un poème", "D. Un dictionnaire"],
    a: 1,
    exp: "Dans le domaine de la bande dessinée (BD), on appelle 'un album' un livre de BD."
  },
  {
    id: 2,
    cat: "Vocabulaire",
    q: "Quel artiste de rue fait des tours d'adresse en lançant plusieurs balles en l'air ?",
    options: ["A. Le jongleur", "B. Le clown", "C. La marionnette", "D. L'auteur"],
    a: 0,
    exp: "Le jongleur (nghệ sĩ tung hứng) lance et rattrape des objets en l'air."
  },
  {
    id: 3,
    cat: "Vocabulaire",
    q: "Quelle expression exprime la fonction d'un appareil ?",
    options: ["A. Être destiné à", "B. Servir à", "C. Avoir peur de", "D. S'intéresser à"],
    a: 1,
    exp: "'Servir à + infinitif' exprime la fonction ou l'utilité d'un objet (ex: Le téléphone sert à communiquer)."
  },
  {
    id: 4,
    cat: "Vocabulaire",
    q: "Quelle proportion correspond à l'expression 'un quart' ?",
    options: ["A. 50 %", "B. 33 %", "C. 25 %", "D. 20 %"],
    a: 2,
    exp: "Un quart = 1/4 = 25 %; un tiers = 1/3 ≈ 33 %; une moitié = 1/2 = 50 %."
  },
  {
    id: 5,
    cat: "Vocabulaire",
    q: "Quand on prend un livre à la bibliothèque pour une semaine, on dit qu'on l'____.",
    options: ["A. prête", "B. emprunte", "C. achète", "D. illustre"],
    a: 1,
    exp: "Le lecteur 'emprunte' un livre à la bibliothèque (mượn); la bibliothèque 'prête' le livre au lecteur (cho mượn)."
  },
  {
    id: 6,
    cat: "Vocabulaire",
    q: "Quel ustensile de cuisine utilise-t-on pour battre les œufs et mélanger la pâte à crêpes ?",
    options: ["A. La poêle", "B. Le saladier", "C. Le fouet", "D. L'assiette"],
    a: 2,
    exp: "Le fouet (cây đánh trứng) sert à battre les œufs et à mélanger la pâte liquide."
  },
  {
    id: 7,
    cat: "Vocabulaire",
    q: "Dans un restaurant français, quel plat sert-on en tout premier lieu ?",
    options: ["A. Le dessert", "B. Le plat principal", "C. L'entrée", "D. Le fromage"],
    a: 2,
    exp: "L'entrée (món khai vị) est servie au début du repas, avant le plat principal."
  },
  {
    id: 8,
    cat: "Vocabulaire",
    q: "Comment appelle-t-on une grande peinture réalisée directement sur un mur de la ville ?",
    options: ["A. Une fresque murale", "B. Une sculpture", "C. Une miniature", "D. Une esquisse"],
    a: 0,
    exp: "Une fresque murale (bích họa trên tường) est une peinture de grande dimension sur un mur urbain."
  },
  {
    id: 9,
    cat: "Vocabulaire",
    q: "Quel mot qualifie une œuvre d'art parfaite et d'une valeur exceptionnelle ?",
    options: ["A. Un croquis", "B. Un chef-d'œuvre", "C. Une copie", "D. Un brouillon"],
    a: 1,
    exp: "Un chef-d'œuvre (kiệt tác) désigne la réalisation la plus remarquable et admirable d'un artiste."
  },
  {
    id: 10,
    cat: "Vocabulaire",
    q: "Une exposition 'immersive', c'est une exposition où :",
    options: [
      "A. Les visiteurs regardent de petits tableaux classiques sous verre.",
      "B. Les images, lumières et sons enveloppent le visiteur au cœur de l'œuvre.",
      "C. Il est interdit d'entrer avec un téléphone portable.",
      "D. Les billets sont toujours vendus uniquement le matin."
    ],
    a: 1,
    exp: "Une exposition immersive projette des images et du son à 360° pour plonger le spectateur dans l'univers de l'artiste."
  },

  // --- PHẦN 2: GRAMMAIRE & CONJUGAISON (Câu 11 - 24) ---
  {
    id: 11,
    cat: "Grammaire",
    q: "Conjuguez 'avoir' au futur simple : 'L'année prochaine, nous (____) une nouvelle bibliothèque.'",
    options: ["A. aurons", "B. avons", "C. avions", "D. aurez"],
    a: 0,
    exp: "Au futur simple, le verbe 'avoir' avec le sujet 'nous' prend la forme 'aurons'."
  },
  {
    id: 12,
    cat: "Grammaire",
    q: "Complétez la comparaison de supériorité : 'Ce collège a (____) salles de classe que l'ancien.'",
    options: ["A. plus", "B. plus de", "C. aussi", "D. autant"],
    a: 1,
    exp: "Pour comparer une quantité de noms, on utilise 'plus de + nom + que'."
  },
  {
    id: 13,
    cat: "Grammaire",
    q: "Quelle phrase est à l'imparfait pour décrire le décor d'une fête ?",
    options: [
      "A. Nous avons visité le musée.",
      "B. Il y avait beaucoup de monde et les lumières brillaient.",
      "C. Les acrobates sont arrivés à dix heures.",
      "D. Elle a pris son appareil photo."
    ],
    a: 1,
    exp: "'Il y avait' et 'les lumières brillaient' sont à l'imparfait car ils décrivent le décor et l'ambiance."
  },
  {
    id: 14,
    cat: "Grammaire",
    q: "Choisissez la forme correcte au passé composé : 'Hier, Marie (____) au festival de la BD.'",
    options: ["A. est allé", "B. est allée", "C. a allé", "D. a allée"],
    a: 1,
    exp: "Le verbe 'aller' se conjugue avec 'être' et s'accorde en genre avec Marie (féminin) : 'est allée'."
  },
  {
    id: 15,
    cat: "Grammaire",
    q: "Conjuguez le verbe pronominal au passé composé : 'Les deux amies (____) devant la scène.' (se rencontrer)",
    options: [
      "A. ont rencontré",
      "B. se sont rencontré",
      "C. se sont rencontrées",
      "D. sont rencontrées"
    ],
    a: 2,
    exp: "Les verbes pronominaux se conjuguent avec 'être' et le participe s'accorde avec le sujet féminin pluriel : 'se sont rencontrées'."
  },
  {
    id: 16,
    cat: "Grammaire",
    q: "Complétez avec le pronom relatif : 'C'est un robot (____) parle trois langues.'",
    options: ["A. que", "B. qui", "C. qu'", "D. dont"],
    a: 1,
    exp: "'Qui' est sujet du verbe 'parle'."
  },
  {
    id: 17,
    cat: "Grammaire",
    q: "Complétez avec le pronom relatif : 'Voici la liseuse (____) mon grand-père m'a offerte.'",
    options: ["A. qui", "B. que", "C. qu'", "D. où"],
    a: 1,
    exp: "'Que' est complément d'objet direct (COD) du verbe 'a offerte', placé devant le sujet 'mon grand-père'."
  },
  {
    id: 18,
    cat: "Grammaire",
    q: "Remplacez le mot souligné par un pronom COD : 'Thomas lit _cette bande dessinée_ tous les soirs.'",
    options: [
      "A. Thomas lui lit tous les soirs.",
      "B. Thomas la lit tous les soirs.",
      "C. Thomas les lit tous les soirs.",
      "D. Thomas en lit tous les soirs."
    ],
    a: 1,
    exp: "'Cette bande dessinée' est un COD féminin singulier, remplacé par le pronom 'la' placé devant le verbe."
  },
  {
    id: 19,
    cat: "Grammaire",
    q: "Remplacez le mot souligné par un pronom COI : 'Je prête mon dictionnaire _à mes camarades_.'",
    options: [
      "A. Je les prête mon dictionnaire.",
      "B. Je lui prête mon dictionnaire.",
      "C. Je leur prête mon dictionnaire.",
      "D. Je y prête mon dictionnaire."
    ],
    a: 2,
    exp: "'À mes camarades' est un COI pluriel de personne (à + les camarades), remplacé par le pronom 'leur'."
  },
  {
    id: 20,
    cat: "Grammaire",
    q: "Quelle préposition indique une action commencée dans le passé et qui continue dans le présent ?",
    options: ["A. À partir de", "B. Depuis", "C. Pendant", "D. Dans"],
    a: 1,
    exp: "'Depuis' s'emploie pour une action qui a débuté dans le passé et se poursuit au moment où l'on parle."
  },
  {
    id: 21,
    cat: "Grammaire",
    q: "Complétez avec le semi-auxiliaire exprimant le passé récent : 'Nous (____) de terminer notre gâteau au chocolat.'",
    options: ["A. venons", "B. allons", "C. sommes en train", "D. commençons"],
    a: 0,
    exp: "'Venir de + infinitif' exprime le passé récent (vừa mới làm xong) : Nous venons de terminer."
  },
  {
    id: 22,
    cat: "Grammaire",
    q: "Dans la phrase 'Chaque élève apporte son livre', quel est le rôle de 'Chaque' ?",
    options: [
      "A. Pronom indéfini",
      "B. Adjectif indéfini placé devant un nom singulier",
      "C. Adverbe de quantité",
      "D. Conjonction de temps"
    ],
    a: 1,
    exp: "'Chaque' est un adjectif indéfini qui accompagne toujours un nom au singulier."
  },
  {
    id: 23,
    cat: "Grammaire",
    q: "Complétez avec la conjonction temporelle : '(____) le guide est arrivé, la visite a commencé.'",
    options: ["A. Dès", "B. Dès que", "C. Avant", "D. Après de"],
    a: 1,
    exp: "'Dès que + proposition' (Dès que + sujet + verbe) exprime l'immédiateté d'une action."
  },
  {
    id: 24,
    cat: "Grammaire",
    q: "Complétez : '(____) commencer à peindre, il faut préparer les pinceaux.'",
    options: ["A. Avant de", "B. Avant", "C. Après de", "D. Dès"],
    a: 0,
    exp: "Devant un verbe à l'infinitif ('commencer'), on emploie 'Avant de'."
  },

  // --- PHẦN 3: EXPRESSION & COMMUNICATION (Câu 25 - 32) ---
  {
    id: 25,
    cat: "Communication",
    q: "Votre ami dit : 'J'adore les spectacles d'acrobates.' Vous êtes d'accord avec lui, que répondez-vous ?",
    options: ["A. Moi non plus !", "B. Moi aussi !", "C. Pas du tout !", "D. De rien !"],
    a: 1,
    exp: "Pour approuver une phrase affirmative ('J'adore...'), on dit 'Moi aussi !'."
  },
  {
    id: 26,
    cat: "Communication",
    q: "Votre amie dit : 'Je n'aime pas les films d'horreur.' Vous partagez son avis négatif, vous dites :",
    options: ["A. Moi aussi !", "B. Moi non plus !", "C. C'est vrai !", "D. Pas mal !"],
    a: 1,
    exp: "Pour partager un avis négatif / phrase négative ('Je n'aime pas...'), on répond 'Moi non plus !'."
  },
  {
    id: 27,
    cat: "Communication",
    q: "Comment commander poliment un plat au restaurant ?",
    options: [
      "A. Je veux une crêpe tout de suite.",
      "B. Donne-moi une crêpe !",
      "C. Je voudrais une crêpe au chocolat, s'il vous plaît.",
      "D. La crêpe est là."
    ],
    a: 2,
    exp: "Au restaurant, on emploie le conditionnel de politesse : 'Je voudrais... s'il vous plaît'."
  },
  {
    id: 28,
    cat: "Communication",
    q: "Quelle structure permet de faire une proposition amicale pour sortir le week-end ?",
    options: [
      "A. Et si nous allions au cinéma ?",
      "B. Si nous irons au cinéma ?",
      "C. Pourquoi nous sommes allés au cinéma ?",
      "D. Nous devons aller au cinéma maintenant."
    ],
    a: 0,
    exp: "Pour proposer une sortie familière, on utilise la formule : 'Et si + sujet + Imparfait ?'."
  },
  {
    id: 29,
    cat: "Communication",
    q: "Vous n'avez pas bien entendu ce que le professeur a dit. Quelle phrase polie utilisez-vous ?",
    options: [
      "A. Répète encore !",
      "B. Qu'est-ce que vous dites ?",
      "C. Pouvez-vous répéter plus lentement, s'il vous plaît ?",
      "D. Je ne parle pas."
    ],
    a: 2,
    exp: "'Pouvez-vous répéter plus lentement, s'il vous plaît ?' est la formule de politesse standard en classe."
  },
  {
    id: 30,
    cat: "Communication",
    q: "Quelle phrase exprime une opinion enthousiaste et admirative sur une exposition d'art ?",
    options: [
      "A. C'était monotone et sans intérêt.",
      "B. C'était un chef-d'œuvre impressionnant et plein d'émotion !",
      "C. Ça manquait cruellement de diversité.",
      "D. C'était nul."
    ],
    a: 1,
    exp: "'C'était un chef-d'œuvre impressionnant et plein d'émotion !' exprime une appréciation très élogieuse."
  },
  {
    id: 31,
    cat: "Communication",
    q: "Pour indiquer les étapes d'une recette dans l'ordre chronologique, quels connecteurs emploie-t-on ?",
    options: [
      "A. D'abord, puis/ensuite, enfin.",
      "B. Jamais, souvent, toujours.",
      "C. Parce que, donc, mais.",
      "D. Hier, aujourd'hui, demain."
    ],
    a: 0,
    exp: "Les connecteurs chronologiques pour une recette sont : D'abord (đầu tiên) → Puis / Ensuite (tiếp theo) → Enfin / Finalement (cuối cùng)."
  },
  {
    id: 32,
    cat: "Communication",
    q: "Quelle phrase est une demande polie adressée au serveur pour obtenir l'addition ?",
    options: [
      "A. Apporte l'addition !",
      "B. Pourriez-vous nous apporter l'addition, s'il vous plaît ?",
      "C. Nous voulons payer l'argent.",
      "D. Combien coûte tout ?"
    ],
    a: 1,
    exp: "'Pourriez-vous nous apporter l'addition, s'il vous plaît ?' est la formule courtoise par excellence au restaurant."
  },

  // --- PHẦN 4: CULTURE & FRANCOPHONIE (Câu 33 - 40) ---
  {
    id: 33,
    cat: "Culture",
    q: "Dans quelle ville française se déroule chaque année en janvier le grand Festival international de la BD ?",
    options: ["A. Paris", "B. Avignon", "C. Angoulême", "D. Nice"],
    a: 2,
    exp: "Le Festival international de la bande dessinée a lieu chaque année à Angoulême (Tây Nam nước Pháp)."
  },
  {
    id: 34,
    cat: "Culture",
    q: "Le Festival d'Avignon, fondé par Jean Vilar en 1947, est célèbre dans le monde entier pour quel art ?",
    options: [
      "A. Le théâtre et les arts du spectacle vivant",
      "B. La gastronomie et le vin",
      "C. La peinture abstraite",
      "D. Les courses automobiles"
    ],
    a: 0,
    exp: "Le Festival d'Avignon est l'une des plus grandes manifestations internationales du spectacle vivant et du théâtre."
  },
  {
    id: 35,
    cat: "Culture",
    q: "Quel scientifique français du XIXe siècle a mis au point le vaccin contre la rage et le procédé de pasteurisation ?",
    options: ["A. Louis Braille", "B. Louis Pasteur", "C. Nicéphore Niépce", "D. Gustave Eiffel"],
    a: 1,
    exp: "Louis Pasteur a découvert le vaccin contre la rage en 1885 et a révolutionné la médecine moderne."
  },
  {
    id: 36,
    cat: "Culture",
    q: "Quelle invention doit-on à Louis Braille en 1829 ?",
    options: [
      "A. Le téléphone sans fil",
      "B. Le système d'écriture tactile à points saillants pour aveugles",
      "C. L'ampoule électrique",
      "D. L'appareil photographique"
    ],
    a: 1,
    exp: "Louis Braille a inventé l'alphabet en relief à points pour permettre aux personnes malvoyantes et non-voyantes de lire."
  },
  {
    id: 37,
    cat: "Culture",
    q: "Quel grand événement culturel en France invite le public à visiter bibliothèques et musées la nuit en janvier ?",
    options: [
      "A. La Nuit des étoiles",
      "B. Les Nuits de la lecture",
      "C. La Fête de la musique",
      "D. Le Salon de l'agriculture"
    ],
    a: 1,
    exp: "'Les Nuits de la lecture' célèbrent le plaisir de lire lors de nocturnes festives dans toute la France."
  },
  {
    id: 38,
    cat: "Culture",
    q: "Le 'repas gastronomique des Français', reconnu par l'UNESCO, met particulièrement en valeur :",
    options: [
      "A. Le fait de manger le plus vite possible devant la télévision.",
      "B. La convivialité, le partage, le respect des produits du terroir et l'art de la table.",
      "C. L'interdiction formelle de manger du pain.",
      "D. L'utilisation exclusive de couverts en plastique."
    ],
    a: 1,
    exp: "Le repas gastronomique français célèbre la convivialité, le plaisir du goût et l'harmonie entre l'être humain et les productions de la nature."
  },
  {
    id: 39,
    cat: "Culture",
    q: "Qu'est-ce que 'La Nuit Blanche' organisée chaque automne à Paris ?",
    options: [
      "A. Une fête où tout le monde s'habille en blanc pour faire du ski.",
      "B. Une manifestation culturelle nocturne gratuite consacrée à l'art contemporain.",
      "C. Un concours de cuisine de gâteaux à la crème.",
      "D. Une journée sans voitures dans les rues de la capitale."
    ],
    a: 1,
    exp: "La Nuit Blanche propose des parcours artistiques nocturnes gratuits dans la ville de Paris pour découvrir l'art contemporain."
  },
  {
    id: 40,
    cat: "Culture",
    q: "Quel est l'un des plus célèbres contes philosophiques de la littérature française, écrit par Antoine de Saint-Exupéry ?",
    options: [
      "A. Les Misérables",
      "B. Le Petit Prince",
      "C. Les Aventures de Tintin",
      "D. Candide"
    ],
    a: 1,
    exp: "'Le Petit Prince' d'Antoine de Saint-Exupéry (1943) est un conte poétique et philosophique lu par des millions de jeunes dans le monde entier."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { examQuestions };
}
