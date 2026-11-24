/* =========================================================
   VOS CADEAUX — à remplir !
   Types possibles : citation, poeme, art, carte, science, musique, lecture
   Champs (tous facultatifs) : titre, texte, auteur, image, lien, video (lien YouTube)
   Astuce : les textes entre `accents graves` gardent leurs retours à la ligne.
   Exemple :
   3: { type:"art", titre:"La Grande Vague", texte:"Estampe d'Hokusai, vers 1831.",
        auteur:"", image:"images/vague.jpg", lien:"https://..." },
   ========================================================= */
const CADEAUX = {
  1:  { type:"citation", titre:"",
        texte:`(...) avaient donc quand même un certain degré d'accessibilité, tout simplement que le bonheur était possible, et c'est comme si cette découverte, dépassée, n'avait aucune valeur. Désormais il faut espérer moins de l'existence. Je croyais avoir accédé à quelque chose d'éternel et cet éternel s'est dérobé. Je croyais que c'était la vie et c'était la jeunesse.`,
        auteur:"Mathieu Lindon, <em>Ce qu’aimer veut dire</em>", image:"", lien:"" },

  2:  { type:"citation", titre:"",
        texte:`I don’t think existence wants you to be serious. I have not seen a serious tree. I have not seen a serious bird. I have not seen a serious sunrise. I have not seen a serious starry night. It seems they are all laughing in their own ways, dancing in their own ways. We may not understand it, but there is a subtle feeling that the whole existence is a celebration.`,
        auteur:"Osho", image:"", lien:"" },

  3:  { type:"citation", titre:"",
        texte:`Je me presse de rire de tout, de peur d'être obligé d'en pleurer.`,
        auteur:"Beaumarchais, <em>Le Barbier de Séville</em>", image:"", lien:"" },

  4:  { type:"citation", titre:"",
        texte:`I peeled my orange
That was so bright against
The gray of December
That, from some distance,
Someone might have thought
I was making a fire in my hands.`,
        auteur:"Gary Soto, <em>Oranges</em>", image:"", lien:"" },

  5:  { type:"citation", titre:"",
        texte:`Aimer la littérature, c'est être persuadé qu'il y a toujours une phrase écrite qui nous redonnera le goût de vivre.`,
        auteur:"Georges Perros", image:"", lien:"" },

  6:  { type:"lecture",
        titre:"Quel roi mage es-tu ?",
        texte:"Or, encens ou myrrhe ? 8 questions pour découvrir lequel des trois rois mages sommeille en toi.",
        auteur:"", image:"",
        lien:"jour-12.html" },

  7:  { type:"poeme", titre:"",
        texte:`L’Etat a failli.
Je le savais déjà
Mais j’en acte la réalisation à l’instant,
A la lecture du message de ma mère
« Les mamans ne peuvent s’empêcher de prodiguer des conseils :
fais attention à toi cette après-midi ».

La violence de l’Etat inquiète ma mère, nos mères.
Elles savent que jamais nous ne lancerons de parpaings, ni même oserons bousculer quelqu’un,
Et pourtant, s’inquiètent de l’effet de la police sur nos corps.
Nos corps innocents. Pourtant violentés.

Oui, Maman, j’ai caché du sérum physiologique dans mon soutien-gorge.
Ne t’en fais pas, tout ira bien.
Je l’espère, mais au fond, comme Maman, je suis un peu inquiète
De cette police censée nous protéger.

On m’a enseigné l’histoire de la France révolutionnaire.
J’ai pleuré devant le film Révolution Française, lors du discours du 12 juillet 1789 de Camille Desmoulins.
Aujourd’hui, sur le même parcours, devant ces mêmes bâtiments, je pleurerai de la répression.

Mes années de sciences politiques m’ont appris quelques notions, la violence légitime de l’Etat de Max Weber entre autres.
J’ai écouté, j’ai pris en notes, j’ai appris, j’ai réécrit sur mes copies, j’ai validé mon diplôme
Officiellement hier,
Pourtant
Je questionne encore la dite légitimité.

Comment faire société si tout le monde doute ?`,
        auteur:"Salomé", image:"", lien:"" },

  8:  { type:"poeme", titre:"",
        texte:`You say I’m being love-bombed but I tell you I’m being loved at first sight. And that is why I always get my heart broken, and you don’t.`,
        auteur:"Salomé", image:"", lien:"" },

  9:  { type:"poeme", titre:"",
        texte:`Parce que je suis de retour à Paris.
Architecture majestueuse, violence symbolique, dieu merci je vis dans le 11e.
Quoi qu’entre les bars à matchas et les concepts stores, tout respire le fake, le performatif.
Un café crème, sans vanille, sans sucre, sans chantilly.
Juste l’amertume du café équilibrée par la douceur lactée, s’il-vous-plaît.
Ici, je crois que si mon loyer n’était pas à 1060 sans charges, je pourrais m’y plaire.
Si tout n’était pas à 45 min de métro, davantage encore.
Mais je suis à 2h de TGV de tous les gens que j’aime, et c’est déjà très bien.
Dans une semaine, je récupère mon vélo,
dans un mois, ça sera presque le début du printemps, et
peut-être que j’aimerais cette ville,
cette vie.`,
        auteur:"Salomé", image:"", lien:"" },

  10: { type:"citation", titre:"",
        texte:`J'ai vingt ans. Je ne sais pas quoi faire de ma vie et, déprimé, apeuré, j'ai une discussion avec lui dans son bureau des éditions. Pour faire comprendre mon état, je lui dis que même si on me proposait d'être président de la République, ça ne me tenterait pas.
« Alors ne sois pas président de la République », me dit-il.`,
        auteur:"Mathieu Lindon, <em>Une Archive</em>", image:"", lien:"" },

  11: { type:"poeme", titre:"",
        texte:`Creativity is a muscle I mistook for a bone. I won’t take it for granted now that I have learned it the hard way.`,
        auteur:"Salomé", image:"", lien:"" },

  12: { type:"poeme", titre:"",
        texte:`Dès que je pense à ma mamie, je pleure.
C’est catastrophique.
Car même si je ne le dirai probablement jamais à voix haute,
Je pense (très) souvent à elle.
Je ne sais pas pourquoi,
Après toutes ces années,
Je me surprends encore à me demander ce qu’elle aurait pensé de telle ou telle situations.

Parfois,
Par peur de la perdre,
Alors que c’est déjà le cas,
Je fais des choses rien que pour elle.
Comme si elle pouvait le voir, et sourire.
Mais je crois surtout que ça me fait plaisir à moi, de me la remémorer.

Je me suis achetée des orchidées pour mon petit studio parisien, alors que je n’aime pas spécialement ces fleurs, juste parce que c’étaient ses préférées.
J’écris à mes amis « oh mazette » parce qu’en cliquant sur le bouton envoyer, je peux l’entendre le dire.
Hier, je me suis attardée devant les boudoirs au supermarché.

Elle nous trouvait gâtés, mon frère et moi.
Et je ne m’en rendais pas compte à l’époque,
Mes amies l’étaient autant que moi,
Mais je l’étais, je le suis encore.
Par rapport à elle, plus jeune,
Mais aussi par rapport aux autres enfants de mon âge.
Ce n’est pas que matériel,
c’est aussi l’amour inconditionnel.

Ma mamie, c’était le printemps et le cynisme.
Joli mélange.

Ma mamie, elle était devenue aigrie avec la vieillesse. C’est ce que maman nous répétait. Et si c’était vrai, je crois qu’elle avait toujours eu une prédisposition à râler. En plus de la vie qui l’avait rendue ainsi.
(Mais si j’avais vécu ne serait-ce que le quart de ce qu’elle a enduré, je pense que je serais plus qu’un peu aigrie.)

Mamie, c’était aussi le printemps. Avant toute chose, le printemps. Après tout, elle est née le 24 avril.
Mamie, c’est ma définition du printemps. Et Papy, son soleil.

Mamie, après l’hiver, après la guerre, la pauvreté, la faim, la mort de ton frère à moto, de ton père à la mine, après avoir renoncé à ta bourse d’études pour aider ta mère, après les enfants hors mariage, après les violences conjugales, tu te relèves.
Je pense que tu avais à peu près mon âge, ça me fait mal.
Je ne m’en serais pas sortie.

Mamie, t’as toujours été extrêmement fière de tes enfants,
Aujourd’hui, j’espère que tu ne le vois pas,
Mais ils ne se parlent plus.
Enfin si, mais pas tous,
– Pour des broutilles en plus,
Et je crois que cela te rendrait malade.
Je sais que ça rend Maman malade.
Et je l’espère de tout mon cœur, que cela n’est qu’une phase, un peu longue.
Je le crois.

Hormis ça, Mamie, ne t’en fais pas,
Tout le monde va bien, à peu près.

Quand je suis lasse de la vie, je pense à toi.
Le fardeau que tu m’as laissé est terrible,
Celui de devoir avoir foi, toujours, en le retour du printemps.

Merci Mamie pour les bourgeons
Je m’occupe des fleurs.`,
        auteur:"Salomé", image:"", lien:"" },

  13: { type:"poeme", titre:"",
        texte:`Maman me dit de déposer plainte pour agression,
A cette même police pour laquelle elle me dit de me protéger quand je descends dans la rue.

Comment la police peut-elle à la fois protéger et violenter ?`,
        auteur:"Salomé", image:"", lien:"" },

  14: { type:"citation", titre:"",
        texte:`Do remember, they can’t cancel the spring.`,
        auteur:"David Hockney", image:"", lien:"" },

  15: { type:"poeme", titre:"Convoitise",
        texte:`Je te convoite.
Tu me convoites.
Il me convoite.
Elle le convoite.
Nous nous convoitons.
« Vous vous convoitez ! », disent les amoureux.
Ils se convoitent.

Je ne t’aime pas, tu ne m’aimes pas. Nous nous convoitons. Et c’est terrible, car de l’amour je ne sais rien, et de la convoitise tout un roman.`,
        auteur:"Salomé", image:"", lien:"" },

  16: { type:"citation", titre:"",
        texte:`Au moment de la crise qui culmine vers Pâques 1848, Kierkegaard se rend compte que, loin d’être l’exception, il est au fond dans l’état universel ; tout le monde vit dans le désespoir, même ceux qui ne se savent y être, ayant suspendu leur vie au hasard, ayant fui leur moi pour tout ce que Pascal nomme le divertissement.`,
        auteur:"Jean-J. Gateau, introduction au <em>Traité du désespoir</em> de Sören Kierkegaard", image:"", lien:"" },

  17: { type:"citation", titre:"",
        texte:`(...) de quoi tu es capable ? C’est cette espèce d’expérimentation de la capacité, quoi. Essayer d’expérimenter la capacité, et en même temps, la construire en même temps qu’on l’expérimente. C’est très, c’est très concret. Or on n’a pas de savoir préalable. (...)
La situation limite, c’est vraiment la situation telle qu’elle ... j’apprends au dernier moment, parfois trop tard, ce dont j’étais capable, ce dont j’étais capable pour le pire ou pour le mieux. Mais on ne peut pas dire d’avance, c’est trop facile de dire : « Ah ça, ça jamais je le ferai, moi ». Et inversement. Alors, on passe notre temps, nous, à faire des trucs comme ça, et puis, ... Mais ce dont on est vraiment capable, on passe à côté.
Tant de gens meurent sans savoir, et ne sauront jamais ce dont ils étaient capables, encore une fois, dans l’atroce comme dans le très bien ... Bon, c’est des surprises, hein, [il] faut se faire des surprises à soi-même. On se dit : « Oh, tiens, ça, je n’aurais jamais cru que j’aurais fait ça ! ». Bon, les gens ils ont beaucoup d’art, vous savez, ils ont beaucoup d’art.`,
        auteur:"Gilles Deleuze, <em>Séminaire sur Spinoza, Les Vitesses de la pensée</em>, 20 janvier 1981",
        video:"https://youtu.be/JeVT-LLD4K4", image:"", lien:"" },

  18: { type:"citation", titre:"",
        texte:`Le monde doit être romantisé. C’est ainsi qu’on retrouvera le sens originel.`,
        auteur:"Novalis, <em>Le Monde doit être romantisé</em>", image:"", lien:"" },

  19: { type:"citation", titre:"",
        texte:`J'ai commencé à faire de moi-même un être littéraire, quelqu'un qui vit les choses comme si elles devaient être écrites un jour.`,
        auteur:"Annie Ernaux, <em>Mémoire de fille</em>", image:"", lien:"" },

  20: { type:"citation", titre:"",
        texte:`En fin de compte, tout s'arrange, sauf la difficulté d'être, qui ne s'arrange pas.`,
        auteur:"Jean Cocteau, <em>La Difficulté d'être</em>", image:"", lien:"" },
  21: { type:"carte",    titre:"", texte:"", auteur:"", image:"", lien:"" },
  22: { type:"science",  titre:"", texte:"", auteur:"", image:"", lien:"" },
  23: { type:"musique",  titre:"", texte:"", auteur:"", image:"", lien:"" },
  24: { type:"lecture",  titre:"", texte:"", auteur:"", image:"", lien:"" },
  25: { titre:"Joyeux Noël !", texte:"Votre sapin est décoré avec tous les cadeaux de décembre." },
};
