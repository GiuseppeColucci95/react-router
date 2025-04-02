import { useNavigate, useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Ciambellone",
    slug: "ciambellone",
    content: "Sarà che una volta le cose erano più semplici, ma erano anche molto buone. Come le crostate, i biscotti o il ciambellone che la nonna preparava anche all'ultimo sapendo che sareste passati per la merenda: uova, zucchero e farina. Niente di più basic ma che tra le sue mani, mescolando e infornando, diventava una delle prelibatezze per accompagnare il succo di frutta al pomeriggio o il latte e caffè al mattino. Ecco la nostra ricetta del ciambellone a quale atmosfera si ispira, quella di casa e genuinità: con una manciata di scorze di limone o di arancia e una spolverata di zucchero a velo renderete questa soffice delizia profumata e invitante. E per una volta sarà la nonna a farvi i complimenti per aver preparato un morbido ciambellone, così buono che non passa mai di moda!",
    image: "ciambellone.jpeg",
    tags: ["Dolci", "Torte", "Ricette vegetariane", "Ricette al forno"],
  },
  {
    id: 2,
    title: "Cracker alla barbabietola",
    slug: "cracker-alla-barbabeitola",
    content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
              Cracker di farro
              Cracker di lupini
              Cracker allo zafferano
              Cracker ai semi`,
    image: "cracker_barbabietola.jpeg",
    tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
  },
  {
    id: 3,
    title: "Pasta barbabietola e gorgonzola",
    slug: "pasta-barbabietola-e-gorgonzola",
    content: `La nostra ricetta della pasta barbabietola e gorgonzola vuole ricreare in questo primo piatto un abbinamento appetitoso, già proposto con la torta salata alla barbabietola! Per un pranzo veloce ma gustoso, per chi ama giocare con consistenze e colori naturali in cucina, questa pasta è perfetta! La dolcezza della barbabietola smorza il gusto deciso che caratterizza questo formaggio erborinato molto amato, un'abbinata vincente e molto gustosa. Provate un nuovo condimento per la vostra pasta e sperimentate altre sfiziose varianti:
            Pasta con barbabietola e pecorino
            Gnocchi di barbabietola
            Tagliatelle alla barbabietola con asparagi`,
    image: "pasta_barbabietola.jpeg",
    tags: ["Primi piatti", "Ricette vegetariane"],
  },
  {
    id: 4,
    title: "Pane fritto dolce",
    slug: "pane-fritto-dolce",
    content: `Il pane fritto dolce è la versione più antica dell'odierno french toast! Una deliziosa ricetta antispreco che le nonne preparavano ai bambini per merenda, utilizzando gli ingredienti che si avevano sempre a disposizione in casa: pane raffermo, uova, latte e zucchero, che noi abbiamo deciso di aromatizzare con un pizzico di cannella. Facile e veloce da realizzare, il pane fritto dolce vi riporterà con la mente ai sapori dell'infanzia… gustatelo da solo o accompagnatelo con frutta fresca e yogurt per uno spuntino tanto goloso quanto genuino!`,
    image: "pane_fritto_dolce.jpeg",
    tags: ["Dolci", "Dolci veloci", "Ricette veloci", "Ricette vegetariane"],
  },
  {
    id: 5,
    title: "Torta paesana",
    slug: "torta-paesana",
    content: `La torta paesana è un dolce di origine lombarda e precisamente della Brianza, la zona compresa tra la provincia a nord di Milano e il lago di Lecco-Como. E' un dolce di origine contadina, dalle infinite varianti, ma realizzata principalmente con pane raffermo bagnato nel latte. E' infatti conosciuta anche come torta di pane o, in dialetto locale, “michelacc” ovvero mica e lac (pane e latte). A seconda dei gusti e delle disponibilità del momento, al pane ammollato ogni famiglia univa ingredienti diversi, chi l'uvetta o chi i pinoli ad esempio. Noi vi presentiamo la nostra versione con l'aggiunta di cacao e amaretti: perfetta da gustare per una merenda dal sapore rustico, la torta paesana è un perfetto dolce di recupero quando si ha del pane avanzato… ed è ancora più buona il giorno dopo!`,
    image: "torta_paesana.jpeg",
    tags: ["Dolci", "Dolci al cioccolato", "Torte", "Ricette vegetariane", "Ricette al forno"],
  },
];

export default function Post() {

  const { id } = useParams();
  const foundPost = posts.find(post => Number(post.id) === Number(id));

  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex flex-column align-items-center my-5">
        <h1>{foundPost.title}</h1>
        <div className=" w-100 d-flex align-items-center justify-content-between">
          {
            (id > 1) ? (<button className="btn btn-warning" onClick={() => navigate(`/posts/${id - 1}`)}>Indietro</button>)
              : (<button disabled className="btn btn-warning ">Indietro</button>)
          }
          <img className="border border-3 border-dark rounded-3 w-75 my-5" src={`/${foundPost.image}`} alt={foundPost.title} />
          {
            (id < (posts.length)) ? (<button className="btn btn-warning" onClick={() => navigate(`/posts/${Number(id) + 1}`)}>Avanti</button>)
              : (<button disabled className="btn btn-warning ">Avanti</button>)
          }
        </div>
        <p>{foundPost.content}</p>
      </div>
    </>
  );
}