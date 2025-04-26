document.addEventListener('DOMContentLoaded', function () {
    const anecdotes = [
        "Les étoiles naissent dans d'immenses nuages de gaz et de poussière, appelés nébuleuses.",
        "La lumière d'une étoile peut voyager à 300 000 km par seconde, mais même à cette vitesse, elle met des millions d'années pour traverser l'univers.",
        "L'étoile la plus proche de la Terre après le Soleil est Proxima Centauri, située à 4,24 années-lumière.",
        "Le Soleil est une naine jaune, mais il est beaucoup plus gros que la Terre : 1,3 million de Terres pourraient tenir à l'intérieur de lui.",
        "Quand tu vois une étoile, tu la vois telle qu'elle était dans le passé, car sa lumière met du temps à arriver jusqu'à nous.",
        "Betelgeuse est une supergéante rouge, et si elle se trouvait à la place du Soleil, elle engloberait même la Terre.",
        "Les trous noirs sont des régions de l'espace où la gravité est si forte que même la lumière ne peut s'en échapper.",
        "Une étoile à neutrons est tellement dense qu'une cuillère de sa matière pèserait des milliards de tonnes.",
        "Les étoiles filantes ne sont pas des étoiles, mais des météores qui brûlent dans l'atmosphère de la Terre.",
        "Il existe une galaxie, M87, qui possède un trou noir supermassif au centre. Il a été photographié pour la première fois en 2019.",
        "Le ciel nocturne que nous voyons contient environ 5 000 étoiles visibles à l'œil nu, mais il existe des milliards d'autres étoiles invisibles.",
        "Le vent solaire, produit par le Soleil, transporte des particules chargées qui peuvent interférer avec les communications sur Terre.",
        "La Voie Lactée est une galaxie spirale qui abrite notre Soleil et des centaines de milliards d'autres étoiles.",
        "Les nébuleuses sont des nuages de gaz et de poussière où les étoiles naissent, se forment et parfois meurent.",
        "La lumière d'une étoile peut prendre des millions d'années pour atteindre la Terre, mais elle arrive toujours à l'instant où tu l'observes.",
        "La plus grande étoile connue, UY Scuti, est une supergéante rouge située dans la constellation du Dragon.",
        "Une année-lumière est la distance que la lumière parcourt en une année, soit environ 9,46 trillions de kilomètres.",
        "Sirius, dans la constellation du Chien, est l'étoile la plus brillante du ciel nocturne, bien plus brillante que notre Soleil.",
        "La durée de vie d'une étoile dépend de sa masse. Les étoiles massives vivent moins longtemps que les petites étoiles.",
        "Les étoiles bleues sont les plus chaudes et les plus jeunes, tandis que les étoiles rouges sont plus froides et plus anciennes.",
        "Il existe des étoiles qui ne sont pas dans des galaxies, appelées étoiles vagabondes. Elles errent seules dans l'univers.",
        "La Voie Lactée a un diamètre d'environ 100 000 années-lumière et contient des centaines de milliards d'étoiles.",
        "Une étoile peut vivre entre quelques millions d'années et plusieurs milliards d'années, en fonction de sa masse.",
        "Les étoiles binaires sont des systèmes où deux étoiles tournent autour d'un même centre de gravité.",
        "L'une des plus grandes découvertes astronomiques de ces dernières années a été la détection d'ondes gravitationnelles, qui proviennent de la fusion de trous noirs.",
        "Un des phénomènes les plus étranges de l'univers est le paradoxe du fermier : comment deux trous noirs peuvent-ils fusionner et produire des ondes gravitationnelles ?",
        "Les quasars sont des noyaux de galaxies extrêmement brillants, alimentés par des trous noirs supermassifs.",
        "La lumière de certaines étoiles qui nous parvient aujourd'hui a quitté ces étoiles il y a des millions voire des milliards d'années.",
        "La découverte des exoplanètes a ouvert une nouvelle ère d'exploration cosmique, car de nombreuses planètes en dehors de notre système solaire ont été identifiées.",
        "Le télescope Hubble a fourni certaines des images les plus impressionnantes de l'univers lointain, permettant aux scientifiques de mieux comprendre la formation des galaxies.",
        "Les éclipses solaires se produisent lorsque la Lune se trouve directement entre la Terre et le Soleil, créant une ombre sur notre planète.",
        "Les supernovae sont des explosions d'étoiles massives, qui dispersent des éléments lourds dans l'espace et jouent un rôle clé dans la création de nouvelles étoiles.",
        "Le Soleil produit une énorme quantité d'énergie, mais seulement une petite fraction atteint la Terre sous forme de lumière et de chaleur.",
        "La distance entre la Terre et la Lune n'est pas constante, mais varie légèrement à cause de l'orbite elliptique de la Lune autour de la Terre.",
        "La vitesse d'échappement d'un objet à la surface de la Terre est d'environ 11,2 km par seconde, ce qui est nécessaire pour échapper à la gravité de notre planète.",
        "Les supergéantes rouges, comme Aldebaran, sont des étoiles en fin de vie qui ont épuisé leur carburant nucléaire et gonflé considérablement.",
        "Le premier homme à avoir marché sur la Lune était Neil Armstrong en 1969, lors de la mission Apollo 11.",
        "La Terre tourne autour du Soleil à une vitesse de 107 000 km/h, mais sa vitesse de rotation sur elle-même est de 1670 km/h à l'équateur.",
        "La plus grande galaxie connue est IC 1101, qui est environ 6 millions de fois plus brillante que la Voie Lactée.",
        "Les étoiles naissent, vivent et meurent dans un cycle cosmique de millions voire de milliards d'années.",
        "Il y a des milliards de galaxies dans l'univers observable, chacune contenant des milliards d'étoiles.",
        "La couleur des étoiles dépend de leur température, les étoiles bleues étant les plus chaudes et les rouges les plus froides.",
        "L'univers continue d'étendre, et certaines galaxies s'éloignent à une vitesse si élevée qu'elles nous sont invisibles à cause de la lumière qui ne peut plus nous atteindre.",
        "Les comètes sont des objets célestes faits de glace et de roche, qui deviennent brillants lorsqu'ils s'approchent du Soleil.",
        "Le Soleil est une étoile de type G2V, ce qui signifie qu'il est une naine jaune chaude.",
        "Les rayons cosmiques sont des particules subatomiques provenant de l'espace, qui peuvent endommager les satellites et les astronautes dans l'espace.",
        "Les météores brillants que l'on voit traverser le ciel la nuit sont en fait des petites roches brûlantes qui pénètrent dans l'atmosphère.",
        "La température à la surface du Soleil peut atteindre environ 5 500°C, tandis que dans son noyau, elle monte à 15 millions de degrés Celsius.",
        "La galaxie d'Andromède, qui est notre voisine la plus proche, se rapproche de la Voie Lactée à une vitesse de 110 kilomètres par seconde.",
        "Les étoiles massives qui se transforment en supernovae peuvent créer des éléments lourds comme l'or et le platine dans l'univers.",
        "Les ceintures de radiation de Van Allen sont des zones de l'espace autour de la Terre où les particules solaires sont piégées par le champ magnétique terrestre.",
        "L'espace est presque totalement vide, mais il contient tout de même des particules et des radiations qui se déplacent à travers lui.",
        "Les trous noirs supermassifs, qui se trouvent au centre des grandes galaxies, peuvent avoir une masse équivalente à des milliards de fois celle du Soleil.",
        "La planète Mars, qui est parfois appelée la planète rouge, doit son apparence à la rouille dans son sol, causée par le fer.",
        "Les étoiles à neutrons peuvent avoir des champs magnétiques incroyablement puissants, des millions de fois plus forts que celui de la Terre.",
        "Le Soleil possède environ 99,86 % de la masse totale du système solaire.",
        "La planète Neptune a des vents soufflant à plus de 2 000 km/h, faisant d'elle la planète la plus venteuse du système solaire.",
        "Les étoiles les plus anciennes observées ont environ 13,8 milliards d'années, presque aussi vieilles que l'univers lui-même.",
        "Les auroras, ou aurores boréales, sont causées par des particules solaires entrant en collision avec l'atmosphère terrestre.",
        "Une étoile peut disparaître dans un trou noir si elle passe trop près de celui-ci, un processus appelé 'spaghettification'.",
        "L'étoile la plus éloignée observée se trouve à environ 13,4 milliards d'années-lumière de la Terre.",
        "Il y a environ 100 milliards de galaxies dans l'univers observable, chacune avec des milliards d'étoiles.",
        "Les étoiles à neutrons tournent extrêmement vite, parfois plusieurs centaines de fois par seconde.",
        "La Lune est le cinquième plus grand satellite naturel du système solaire et affecte les marées de la Terre.",
        "Les météorites sont des morceaux de débris spatiaux qui pénètrent dans l'atmosphère terrestre et qui peuvent devenir des météores ou des comètes.",
        "Un phénomène appelé 'pluie d'étoiles filantes' se produit lors des pluies de météores, lorsqu'une grande quantité de météores brûle dans l'atmosphère.",
        "Une galaxie spirale, comme la Voie Lactée, possède un noyau central entouré de bras spiraux.",
        "Les astronomes ont détecté des vagues gravitationnelles, qui sont des ondulations dans le tissu de l'espace-temps causées par des événements massifs comme les fusions de trous noirs.",
        "La planète Jupiter a une atmosphère dense avec des nuages de gaz et des tempêtes géantes, dont la plus célèbre est la Grande Tache Rouge.",
        "Les étoiles sont classées par couleur, de bleues pour les plus chaudes à rouges pour les plus froides.",
        "L'étoile Sirius, située dans la constellation du Chien, est deux fois plus massive que notre Soleil.",
        "Les étoiles filantes sont en fait des débris de comètes ou d'astéroïdes entrant dans l'atmosphère terrestre à grande vitesse.",
        "Le système solaire est situé dans un bras spiral de la Voie Lactée, appelé le bras d'Orion.",
        "Le télescope James Webb, lancé en 2021, permet aux astronomes de voir des galaxies et des étoiles anciennes, dont la lumière a voyagé pendant des milliards d'années.",
        "La planète Saturne possède des anneaux spectaculaires faits de particules de glace et de roche.",
        "Un phénomène rare, appelé 'lune bleue', se produit lorsque deux pleines lunes se produisent dans un même mois.",
        "Le système solaire contient huit planètes principales, mais il existe aussi de nombreux objets plus petits comme les astéroïdes et les comètes.",
        "Le ciel nocturne change au fil de l'année, car la Terre orbite autour du Soleil, modifiant ainsi notre vue des étoiles et des constellations.",
        "Les trous noirs ne peuvent pas être vus directement, mais leur présence est révélée par l'effet gravitationnel qu'ils exercent sur les objets voisins.",
        "La lumière de certaines étoiles que nous observons aujourd'hui a été émise il y a des millions d'années.",
        "La chaleur de l'intérieur du Soleil provient de réactions nucléaires de fusion qui transforment de l'hydrogène en hélium.",
        "Les étoiles sont souvent les lieux de naissance de nouveaux éléments, produits lors de la fusion dans leur noyau.",
        "Une supernova peut être vue dans le ciel comme une explosion d'une étoile mourante, brilla-t-elle brièvement avant de s'éteindre.",
        "La planète Mars, avec son sol rougeâtre, a un climat froid et sec et une faible gravité.",
        "L'atmosphère de Vénus est composée principalement de dioxyde de carbone, avec des nuages d'acide sulfurique.",
        "La lumière de l'étoile la plus proche du Soleil met plus de 4 ans pour nous atteindre, malgré la vitesse incroyable de la lumière.",
        "La Voie Lactée contient environ 200 à 400 milliards d'étoiles, dont notre propre Soleil.",
        "Les géantes gazeuses, comme Jupiter et Saturne, sont principalement composées de gaz et ont des atmosphères épaisses.",
        "La planète Uranus est inclinée sur son axe à environ 98 degrés, ce qui la fait 'rouler' autour du Soleil.",
        "L'observation d'objets éloignés dans l'univers peut nous montrer à quoi ressemblait l'univers il y a des milliards d'années.",
        "Le Soleil est responsable des éruptions solaires, qui peuvent perturber les communications et les satellites sur Terre.",
        "La plus grande comète observée, la comète C/1995 O1 Hale-Bopp, a été visible à l'œil nu pendant plus de 18 mois.",
        "L'univers n'a pas de centre connu ; il se dilate de manière homogène dans toutes les directions.",
        "Les pulsars sont des étoiles à neutrons en rotation rapide qui émettent des ondes radio régulières.",
        "La distance entre la Terre et la Lune est d'environ 384 400 km, ce qui permet aux astronautes de faire le voyage en environ 3 jours.",
        "La théorie de la relativité d'Einstein a changé notre compréhension du temps et de l'espace, prouvant que le temps peut se dilater sous l'effet de la gravité.",
        "Le Big Bang est l'événement qui a marqué la naissance de l'univers, il y a environ 13,8 milliards d'années.",
        "La Voie Lactée est en train de se diriger vers la galaxie d'Andromède, et dans environ 4 milliards d'années, elles se fusionneront pour former une nouvelle galaxie.",
        "Les exoplanètes sont des planètes qui orbitent autour d'étoiles autres que notre Soleil et pourraient abriter des conditions favorables à la vie.",
        "La planète Venus est parfois appelée l'étoile du matin ou du soir, car elle est souvent visible juste avant le lever du soleil ou juste après le coucher.",
        "La planète Neptune, découverte en 1846, possède une atmosphère composée principalement de méthane, ce qui lui donne sa couleur bleue distincte.",
        "Une lumière d'étoile peut voyager dans l'univers pendant des milliards d'années avant d'atteindre la Terre, nous permettant de voir des images du passé lointain.",
        "Les étoiles massives peuvent finir leur vie en une supernova, une explosion d'une puissance inimaginable.",
        "L'univers continue d'expansion, et les galaxies s'éloignent de plus en plus les unes des autres à mesure que le temps passe.",
        "Les astéroïdes sont des objets rocheux qui se déplacent dans l'espace, certains peuvent croiser la trajectoire de la Terre.",
        "Le noyau du Soleil atteint des températures de 15 millions de degrés Celsius, alors que la surface n'est qu'à environ 5 500 degrés Celsius."
    ];

    // Calculer quel jour de l'année on est
    const date = new Date();
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Afficher l'anecdote du jour
    const anecdote = anecdotes[dayOfYear % anecdotes.length];
    document.getElementById('anecdote').textContent = anecdote;

    // Créer des étoiles aléatoires
    const universe = document.getElementById('universe');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Positionner les étoiles de manière aléatoire
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;
        const size = Math.random() * 3 + 2; // Taille aléatoire entre 2px et 5px
        const animationDuration = Math.random() * 5 + 2; // Durée d'animation entre 2s et 7s
        
        star.style.left = `${xPos}px`;
        star.style.top = `${yPos}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${animationDuration}s`;
        
        universe.appendChild(star);
    }

    // Etoiles filantes aléatoires
    setInterval(() => {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        
        // Positionner l'étoile filante de manière aléatoire
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        
        shootingStar.style.left = `${startX}px`;
        shootingStar.style.top = `${startY}px`;
        
        universe.appendChild(shootingStar);
        
        // Supprimer l'étoile filante après l'animation
        setTimeout(() => {
            shootingStar.remove();
        }, 3000); // Durée de l'animation (en ms)
    }, 2000); // Créer une étoile filante toutes les 2 secondes
});



