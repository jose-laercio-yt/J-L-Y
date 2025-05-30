//Json dos versículos
//Caso queira adicionar uma explicação ao versículo, basta colar em URL.
const verses = [
  {
    index: 1,
    reflection: "URL",
    text: "A saber: Se, com a tua boca, confessares ao Senhor Jesus e, em teu coração, creres que Deus o ressuscitou dos mortos, serás salvo.",
    reference: "Romanos 10:9",
  },
  {
    index: 1,
    reflection: "URL",
    text: "Há caminho que ao homem parece direito, mas o fim dele são os caminhos da morte.",
    reference: "Provérbios 14:12",
  },
  {
    index: 1,
    reflection: "URL",
    text: "O Senhor é o meu pastor, nada me faltará.",
    reference: "Salmos 23:1",
  },
  {
    index: 2,
    reflection: "URL",
    text: "Posso todas as coisas naquele que me fortalece.",
    reference: "Filipenses 4:13",
  },
  {
    index: 3,
    reflection: "URL",
    text: "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça.",
    reference: "Números 6:24-25",
  },
  {
    index: 4,
    reflection: "URL",
    text: "O Senhor é a minha luz e a minha salvação; de quem terei medo?",
    reference: "Salmos 27:1",
  },
  {
    index: 5,
    reflection: "URL",
    text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
    reference: "Provérbios 3:5",
  },
  {
    index: 6,
    reflection: "URL",
    text: "Bem-aventurados os que choram, porque serão consolados.",
    reference: "Mateus 5:4",
  },
  {
    index: 7,
    reflection: "URL",
    text: "O amor é paciente, o amor é bondoso.",
    reference: "1 Coríntios 13:4",
  },
  {
    index: 8,
    reflection: "URL",
    text: "Clama a mim, e responder-te-ei e anunciar-te-ei coisas grandes e firmes que não sabes.",
    reference: "Jeremias 33:3",
  },
  {
    index: 9,
    reflection: "URL",
    text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    reference: "Salmos 46:1",
  },
  {
    index: 10,
    reflection: "URL",
    text: "Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.",
    reference: "Romanos 8:37",
  },
  {
    index: 11,
    reflection: "URL",
    text: "Pois estou convencido de que nem morte nem vida, nem anjos nem demônios, nem o presente nem o futuro, nem quaisquer poderes, nem altura nem profundidade, nem qualquer outra coisa na criação será capaz de nos separar do amor de Deus que está em Cristo Jesus, nosso Senhor.",
    reference: "Romanos 8:38-39",
  },
  {
    index: 12,
    reflection: "URL",
    text: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.",
    reference: "Mateus 11:28",
  },
  {
    index: 13,
    reflection: "URL",
    text: "Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.",
    reference: "Romanos 8:28",
  },
  {
    index: 14,
    reflection: "URL",
    text: "Ele dá força ao cansado e aumenta o vigor do que está sem forças.",
    reference: "Isaías 40:29",
  },
  {
    index: 15,
    reflection: "URL",
    text: "O Senhor dos Exércitos está conosco; o Deus de Jacó é o nosso refúgio.",
    reference: "Salmos 46:7",
  },
  {
    index: 16,
    reflection: "URL",
    text: "A tua palavra é lâmpada para os meus pés e luz para o meu caminho.",
    reference: "Salmos 119:105",
  },
  {
    index: 17,
    reflection: "URL",
    text: "Pois tu és a minha rocha e a minha fortaleza; por amor do teu nome, guia-me e encaminha-me.",
    reference: "Salmos 31:3",
  },
  {
    index: 18,
    reflection: "URL",
    text: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
    reference: "Jeremias 29:11",
  },
  {
    index: 19,
    reflection: "URL",
    text: "A minha alma se gloriará no Senhor; os mansos o ouvirão e se alegrarão.",
    reference: "Salmos 34:2",
  },
  {
    index: 20,
    reflection: "URL",
    text: "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam.",
    reference: "Naum 1:7",
  },
  {
    index: 21,
    reflection: "URL",
    text: "Mas bendito é o homem cuja confiança está no Senhor, cuja confiança nele está.",
    reference: "Jeremias 17:7",
  },
  {
    index: 22,
    reflection: "URL",
    text: "Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria.",
    reference: "Salmos 90:12",
  },
  {
    index: 23,
    reflection: "URL",
    text: "Não fostes vós que me escolhestes a mim; pelo contrário, eu vos escolhi a vós outros e vos designei para que vades e deis fruto, e o vosso fruto permaneça.",
    reference: "João 15:16",
  },
  {
    index: 24,
    reflection: "URL",
    text: "E não nos cansemos de fazer o bem, pois no tempo próprio colheremos, se não desanimarmos.",
    reference: "Gálatas 6:9",
  },
  {
    index: 25,
    reflection: "URL",
    text: "O Senhor dará força ao seu povo; o Senhor abençoará o seu povo com paz.",
    reference: "Salmos 29:11",
  },
  {
    index: 26,
    reflection: "URL",
    text: "Porque os meus pensamentos não são os vossos pensamentos, nem os vossos caminhos os meus caminhos, diz o Senhor.",
    reference: "Isaías 55:8",
  },
  {
    index: 27,
    reflection: "URL",
    text: "Lança o teu cuidado sobre o Senhor, e ele te susterá; nunca permitirá que o justo seja abalado.",
    reference: "Salmos 55:22",
  },
  {
    index: 28,
    reflection: "URL",
    text: "E esta é a confiança que temos nele, que se pedirmos alguma coisa, segundo a sua vontade, ele nos ouve.",
    reference: "1 João 5:14",
  },
  {
    index: 29,
    reflection: "URL",
    text: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
    reference: "Salmos 91:1",
  },
  {
    index: 30,
    reflection: "URL",
    text: "Venham, vamos refletir juntos, diz o Senhor. Embora os seus pecados sejam vermelhos como a escarlate, eles se tornarão brancos como a neve.",
    reference: "Isaías 1:18",
  },
  {
    index: 31,
    reflection: "URL",
    text: "O Senhor é a minha força e o meu cântico; ele me foi por salvação; este é o meu Deus, portanto, eu o louvarei; ele é o Deus de meu pai, e eu o exaltarei.",
    reference: "Êxodo 15:2",
  },
  {
    index: 32,
    reflection: "URL",
    text: "Sendo justificados gratuitamente pela sua graça, pela redenção que há em Cristo Jesus.",
    reference: "Romanos 3:24",
  },
  {
    index: 33,
    reflection: "URL",
    text: "Bendito seja o Senhor, porque me ouviu as vozes súplices.",
    reference: "Salmos 28:6",
  },
  {
    index: 34,
    reflection: "URL",
    text: "Em paz me deito e logo adormeço, porque só tu, Senhor, me fazes viver em segurança.",
    reference: "Salmos 4:8",
  },
  {
    index: 35,
    reflection: "URL",
    text: "Mas os que esperam no Senhor renovarão as suas forças. Subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.",
    reference: "Isaías 40:31",
  },
  {
    index: 36,
    reflection: "URL",
    text: "E sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
    reference: "Romanos 8:28",
  },
  {
    index: 37,
    reflection: "URL",
    text: "Pois sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
    reference: "Jeremias 29:11",
  },
  {
    index: 38,
    reflection: "URL",
    text: "O Senhor dá sabedoria; da sua boca procedem o conhecimento e o entendimento.",
    reference: "Provérbios 2:6",
  },
  {
    index: 39,
    reflection: "URL",
    text: "Ele cura os quebrantados de coração e lhes trata as feridas.",
    reference: "Salmos 147:3",
  },
  {
    index: 40,
    reflection: "URL",
    text: "Tu és o meu refúgio e a minha fortaleza, o meu Deus, em quem confio.",
    reference: "Salmos 91:2",
  },
  {
    index: 41,
    reflection: "URL",
    text: "O Senhor é a minha rocha, a minha fortaleza e o meu libertador; o meu Deus é o meu rochedo, em quem me refugio.",
    reference: "Salmos 18:2",
  },
  {
    index: 42,
    reflection: "URL",
    text: "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam.",
    reference: "Naum 1:7",
  },
  {
    index: 43,
    reflection: "URL",
    text: "Em todas estas coisas, porém, somos mais que vencedores, por meio daquele que nos amou.",
    reference: "Romanos 8:37",
  },
  {
    index: 44,
    reflection: "URL",
    text: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e as vossas mentes em Cristo Jesus.",
    reference: "Filipenses 4:7",
  },
  {
    index: 45,
    reflection: "URL",
    text: "O Senhor é a minha luz e a minha salvação; de quem terei medo? O Senhor é a fortaleza da minha vida; a quem temerei?",
    reference: "Salmos 27:1",
  },
  {
    index: 46,
    reflection: "URL",
    text: "Eu sou o bom pastor; o bom pastor dá a sua vida pelas ovelhas.",
    reference: "João 10:11",
  },
  {
    index: 47,
    reflection: "URL",
    text: "Aqueles que conhecem o teu nome confiam em ti, pois tu, Senhor, jamais abandonas os que te buscam.",
    reference: "Salmos 9:10",
  },
  {
    index: 48,
    reflection: "URL",
    text: "Porque estou certo de que nem morte, nem vida, nem anjos, nem principados, nem potestades, nem o presente, nem o porvir, nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus, nosso Senhor.",
    reference: "Romanos 8:38-39",
  },
  {
    index: 49,
    reflection: "URL",
    text: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.",
    reference: "Isaías 40:31",
  },
  {
    index: 50,
    reflection: "URL",
    text: "E a esperança não traz confusão, porquanto o amor de Deus está derramado em nossos corações pelo Espírito Santo que nos foi dado.",
    reference: "Romanos 5:5",
  },
  {
    index: 51,
    reflection: "URL",
    text: "Em paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.",
    reference: "Salmos 4:8",
  },
  {
    index: 52,
    reflection: "URL",
    text: "O meu Deus suprirá todas as vossas necessidades segundo as suas riquezas na glória em Cristo Jesus.",
    reference: "Filipenses 4:19",
  },
  {
    index: 53,
    reflection: "URL",
    text: "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e tenha misericórdia de ti; o Senhor sobre ti levante o seu rosto e te dê a paz.",
    reference: "Números 6:24-26",
  },
  {
    index: 54,
    reflection: "URL",
    text: "Os que semeiam em lágrimas segarão com alegria.",
    reference: "Salmos 126:5",
  },
  {
    index: 55,
    reflection: "URL",
    text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    reference: "Salmos 46:1",
  },
  {
    index: 56,
    reflection: "URL",
    text: "Porque o Senhor teu Deus é contigo, por onde quer que andares.",
    reference: "Josué 1:9",
  },
  {
    index: 57,
    reflection: "URL",
    text: "Os humilhados serão exaltados.",
    reference: "Mateus 23:12",
  },
  {
    index: 58,
    reflection: "URL",
    text: "Lança o teu fardo sobre o Senhor, e ele te sustentará; nunca permitirá que o justo seja abalado.",
    reference: "Salmos 55:22",
  },
  {
    index: 59,
    reflection: "URL",
    text: "Nunca te deixarei, nunca jamais te abandonarei.",
    reference: "Hebreus 13:5",
  },
  {
    index: 60,
    reflection: "URL",
    text: "O Senhor é compassivo e misericordioso, paciente e transborda de amor.",
    reference: "Salmos 103:8",
  },
  {
    index: 61,
    reflection: "URL",
    text: "Deem graças ao Senhor, porque ele é bom; o seu amor dura para sempre.",
    reference: "Salmos 107:1",
  },
  {
    index: 62,
    reflection: "URL",
    text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
    reference: "Provérbios 3:5-6",
  },
  {
    index: 63,
    reflection: "URL",
    text: "O Senhor recompensará cada um conforme a sua justiça e a sua fidelidade.",
    reference: "1 Samuel 26:23",
  },
  {
    index: 64,
    reflection: "URL",
    text: "Deem graças ao Senhor, porque ele é bom; o seu amor leal dura para sempre.",
    reference: "Salmos 118:1",
  },
  {
    index: 65,
    reflection: "URL",
    text: "Não tenham medo, pois estou com vocês; não se apavorem, pois eu sou o seu Deus. Eu os fortalecerei e os ajudarei; eu os segurarei com a minha mão direita vitoriosa.",
    reference: "Isaías 41:10",
  },
  {
    index: 66,
    reflection: "URL",
    text: "O Senhor é bom para todos; a sua compaixão alcança todas as suas criaturas.",
    reference: "Salmos 145:9",
  },
  {
    index: 67,
    reflection: "URL",
    text: "Ouve, Israel, o Senhor, nosso Deus, é o único Senhor. Ame o Senhor, seu Deus, de todo o seu coração, de toda a sua alma, de todo o seu entendimento e de todas as suas forças.",
    reference: "Marcos 12:29-30",
  },
  {
    index: 68,
    reflection: "URL",
    text: "Porque o Senhor dá a sabedoria; da sua boca é que vem o conhecimento e o entendimento.",
    reference: "Provérbios 2:6",
  },
  {
    index: 69,
    reflection: "URL",
    text: "A alegria do Senhor é a nossa força.",
    reference: "Neemias 8:10",
  },
  {
    index: 70,
    reflection: "URL",
    text: "Não se turbe o vosso coração; credes em Deus, crede também em mim.",
    reference: "João 14:1",
  },
  {
    index: 71,
    reflection: "URL",
    text: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
    reference: "Mateus 11:28",
  },
  {
    index: 72,
    reflection: "URL",
    text: "No mundo, passais por aflições; mas tende bom ânimo; eu venci o mundo.",
    reference: "João 16:33",
  },
  {
    index: 73,
    reflection: "URL",
    text: "O Senhor é o meu pastor; nada me faltará.",
    reference: "Salmos 23:1",
  },
  {
    index: 74,
    reflection: "URL",
    text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    reference: "Salmos 46:1",
  },
  {
    index: 75,
    reflection: "URL",
    text: "Se Deus é por nós, quem será contra nós?",
    reference: "Romanos 8:31",
  },
  {
    index: 76,
    reflection: "URL",
    text: "No amor não há medo; pelo contrário, o perfeito amor expulsa o medo.",
    reference: "1 João 4:18",
  },
  {
    index: 77,
    reflection: "URL",
    text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel.",
    reference: "Isaías 41:10",
  },
  {
    index: 78,
    reflection: "URL",
    text: "O Senhor te guardará de todo mal; ele guardará a tua alma.",
    reference: "Salmos 121:7",
  },
  {
    index: 79,
    reflection: "URL",
    text: "Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, o Pai das misericórdias e Deus de toda consolação.",
    reference: "2 Coríntios 1:3",
  },
  {
    index: 80,
    reflection: "URL",
    text: "O meu Deus, segundo as suas riquezas, suprirá todas as vossas necessidades em glória, por Cristo Jesus.",
    reference: "Filipenses 4:19",
  },
  {
    index: 81,
    reflection: "URL",
    text: "Porque, assim como os céus são mais altos do que a terra, assim são os meus caminhos mais altos do que os vossos caminhos, e os meus pensamentos, mais altos do que os vossos pensamentos.",
    reference: "Isaías 55:9",
  },
  {
    index: 82,
    reflection: "URL",
    text: "Porque a nossa leve e momentânea tribulação produz para nós um peso eterno de glória mui excelente.",
    reference: "2 Coríntios 4:17",
  },
  {
    index: 83,
    reflection: "URL",
    text: "Pedi, e dar-se-vos-á; buscai e achareis; batei, e abrir-se-vos-á.",
    reference: "Mateus 7:7",
  },
  {
    index: 85,
    reflection: "URL",
    text: "Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai das luzes, em quem não há mudança nem sombra de variação.",
    reference: "Tiago 1:17",
  },
  {
    index: 86,
    reflection: "URL",
    text: "Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio.",
    reference: "2 Timóteo 1:7",
  },
  {
    index: 87,
    reflection: "URL",
    text: "Bem-aventurados os pacificadores, porque serão chamados filhos de Deus.",
    reference: "Mateus 5:9",
  },
  {
    index: 88,
    reflection: "URL",
    text: "Não se turbe o vosso coração; credes em Deus, crede também em mim.",
    reference: "João 14:1",
  },
  {
    index: 89,
    reflection: "URL",
    text: "Não digas: Vingar-me-ei do mal; espera pelo Senhor, e ele te livrará.",
    reference: "Provérbios 20:22",
  },
  {
    index: 90,
    reflection: "URL",
    text: "Bem-aventurados os limpos de coração, porque eles verão a Deus.",
    reference: "Mateus 5:8",
  },
  {
    index: 91,
    reflection: "URL",
    text: "Eu lhes asseguro que, se vocês tiverem fé do tamanho de um grão de mostarda, poderão dizer a este monte: 'Vá daqui para lá', e ele irá. Nada será impossível para vocês.",
    reference: "Mateus 17:20",
  },
  {
    index: 92,
    reflection: "URL",
    text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
    reference: "Provérbios 3:5",
  },
  {
    index: 93,
    reflection: "URL",
    text: "O Senhor é o meu pastor; nada me faltará.",
    reference: "Salmos 23:1",
  },
  {
    index: 94,
    reflection: "URL",
    text: "O Senhor é o meu pastor; nada me faltará.",
    reference: "Salmos 23:1",
  },
  {
    index: 95,
    reflection: "URL",
    text: "Porque o Senhor repreende aquele a quem ama, assim como o pai, ao filho a quem quer bem.",
    reference: "Provérbios 3:12",
  },
  {
    index: 96,
    reflection: "URL",
    text: "Por isso, não desanimamos. Embora exteriormente estejamos a desgastar-nos, interiormente estamos sendo renovados dia após dia.",
    reference: "2 Coríntios 4:16",
  },
  {
    index: 97,
    reflection: "URL",
    text: "Deem graças ao Senhor, porque ele é bom; o seu amor dura para sempre.",
    reference: "Salmos 107:1",
  },
  {
    index: 98,
    reflection: "URL",
    text: "Mas buscai primeiro o seu reino e a sua justiça, e todas estas coisas vos serão acrescentadas.",
    reference: "Mateus 6:33",
  },
  {
    index: 99,
    reflection: "URL",
    text: "Porque a nossa leve e momentânea tribulação produz para nós um peso eterno de glória mui excelente.",
    reference: "2 Coríntios 4:17",
  },
  {
    index: 100,
    reflection: "URL",
    text: "Porque o Senhor dá a sabedoria; da sua boca é que vem o conhecimento e o entendimento.",
    reference: "Provérbios 2:6",
  },
  {
    index: 1,
    reflection: "URL",
    text: "A saber: Se, com a tua boca, confessares ao Senhor Jesus e, em teu coração, creres que Deus o ressuscitou dos mortos, serás salvo.",
    reference: "Romanos 10:9",
  },
  {
    index: 2,
    reflection: "URL",
    text: "Antes, santificai a Cristo, como Senhor, em vosso coração; e estai sempre preparados para responder com mansidão e temor a qualquer que vos pedir a razão da esperança que há em vós.",
    reference: "1 Pedro 3:15",
  },
  {
    index: 3,
    reflection: "URL",
    text: "Àquele que não conheceu pecado, o fez pecado por nós; para que, nele, fôssemos feitos justiça de Deus.",
    reference: "2 Coríntios 5:21",
  },
  {
    index: 4,
    reflection: "URL",
    text: "Assim que, se alguém está em Cristo, nova criatura é: as coisas velhas já passaram; eis que tudo se fez novo.",
    reference: "2 Coríntios 5:17",
  },
  {
    index: 5,
    reflection: "URL",
    text: "Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem o vosso Pai, que está nos céus.",
    reference: "Mateus 5:16",
  },
  {
    index: 6,
    reflection: "URL",
    text: "Bem-aventurado o varão que sofre a tentação; porque, quando for provado, receberá a coroa da vida, a qual o Senhor tem prometido aos que o amam.",
    reference: "Tiago 1:12",
  },
  {
    index: 7,
    reflection: "URL",
    text: "Cheguemos, pois, com confiança ao trono da graça, para que possamos alcançar misericórdia e achar graça, a fim de sermos ajudados em tempo oportuno.",
    reference: "Hebreus 4:16",
  },
  {
    index: 8,
    reflection: "URL",
    text: "Como o orvalho do Hermom, que desce sobre os montes de Sião; porque ali o Senhor ordena a bênção e a vida para sempre.",
    reference: "Salmos 133:3",
  },
  {
    index: 9,
    reflection: "URL",
    text: "Confessai as vossas culpas uns aos outros e orai uns pelos outros, para que sareis; a oração feita por um justo pode muito em seus efeitos.",
    reference: "Tiago 5:16",
  },
  {
    index: 10,
    reflection: "URL",
    text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.",
    reference: "Provérbios 3:5",
  },
  {
    index: 11,
    reflection: "URL",
    text: "Conhecemos o amor nisto: que ele deu a sua vida por nós, e nós devemos dar a vida pelos irmãos.",
    reference: "1 João 3:16",
  },
  {
    index: 12,
    reflection: "URL",
    text: "Contra essas coisas não há lei.",
    reference: "Gálatas 5:23",
  },
  {
    index: 13,
    reflection: "URL",
    text: "De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.",
    reference: "Romanos 10:17",
  },
  {
    index: 14,
    reflection: "URL",
    text: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
    reference: "João 14:27",
  },
  {
    index: 15,
    reflection: "URL",
    text: "Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração.",
    reference: "Salmos 37:4",
  },
  {
    index: 16,
    reflection: "URL",
    text: "Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá.",
    reference: "João 11:25",
  },
  {
    index: 17,
    reflection: "URL",
    text: "Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim.",
    reference: "João 14:6",
  },
  {
    index: 18,
    reflection: "URL",
    text: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.",
    reference: "Filipenses 4:7",
  },
  {
    index: 19,
    reflection: "URL",
    text: "É como o óleo precioso sobre a cabeça, que desce sobre a barba, a barba de Arão, e que desce à orla das suas vestes.",
    reference: "Salmos 133:2",
  },
  {
    index: 20,
    reflection: "URL",
    text: "E criou Deus o homem à sua imagem; à imagem de Deus o criou; macho e fêmea os criou.",
    reference: "Gênesis 1:27",
  },
  {
    index: 21,
    reflection: "URL",
    text: "E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo réptil que se move sobre a terra.",
    reference: "Gênesis 1:26",
  },
  {
    index: 22,
    reflection: "URL",
    text: "E disse o Senhor, em visão, a Paulo: Não temas, mas fala e não te cales.",
    reference: "Atos 18:9",
  },
  {
    index: 23,
    reflection: "URL",
    text: "E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo para perdão dos pecados, e recebereis o dom do Espírito Santo.",
    reference: "Atos 2:38",
  },
  {
    index: 24,
    reflection: "URL",
    text: "E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo.",
    reference: "2 Coríntios 12:9",
  },
  {
    index: 25,
    reflection: "URL",
    text: "E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos.",
    reference: "Atos 4:12",
  },
  {
    index: 26,
    reflection: "URL",
    text: "E ficou ali um ano e seis meses, ensinando entre eles a palavra de Deus.",
    reference: "Atos 18:11",
  },
  {
    index: 27,
    reflection: "URL",
    text: "E Jesus disse-lhe: Amarás o Senhor, teu Deus, de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento.",
    reference: "Mateus 22:37",
  },
  {
    index: 28,
    reflection: "URL",
    text: "E não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus.",
    reference: "Romanos 12:2",
  },
  {
    index: 29,
    reflection: "URL",
    text: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto.",
    reference: "Romanos 8:28",
  },
  {
    index: 30,
    reflection: "URL",
    text: "E, chegando-se Jesus, falou-lhes, dizendo: É-me dado todo o poder no céu e na terra.",
    reference: "Mateus 28:18",
  },
  {
    index: 31,
    reflection: "URL",
    text: "E, tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor e não aos homens.",
    reference: "Colossenses 3:23",
  },
  {
    index: 32,
    reflection: "URL",
    text: "Ele te declarou, ó homem, o que é bom; e que é o que o Senhor pede de ti, senão que pratiques a justiça, e ames a beneficência, e andes humildemente com o teu Deus?",
    reference: "Miquéias 6:8",
  },
  {
    index: 33,
    reflection: "URL",
    text: "Ensinando-as a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até à consumação dos séculos. Amém!",
    reference: "Mateus 28:20",
  },
  {
    index: 34,
    reflection: "URL",
    text: "Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim; e a vida que agora vivo na carne vivo-a na fé do Filho de Deus, o qual me amou e se entregou a si mesmo por mim.",
    reference: "Gálatas 2:20",
  },
  {
    index: 35,
    reflection: "URL",
    text: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
    reference: "1 Pedro 5:7",
  },
  {
    index: 36,
    reflection: "URL",
    text: "Levando ele mesmo em seu corpo os nossos pecados sobre o madeiro, para que, mortos para os pecados, pudéssemos viver para a justiça; e pelas suas feridas fostes sarados.",
    reference: "1 Pedro 2:24",
  },
  {
    index: 37,
    reflection: "URL",
    text: "Mas a todos quantos o receberam deu-lhes o poder de serem feitos filhos de Deus: aos que creem no seu nome",
    reference: "João 1:12",
  },
  {
    index: 38,
    reflection: "URL",
    text: "Mas buscai primeiro o Reino de Deus, e a sua justiça, e todas essas coisas vos serão acrescentadas.",
    reference: "Mateus 6:33",
  },
  {
    index: 39,
    reflection: "URL",
    text: "Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.",
    reference: "Romanos 5:8",
  },
  {
    index: 40,
    reflection: "URL",
    text: "Mas ele foi ferido pelas nossas transgressões e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e, pelas suas pisaduras, fomos sarados.",
    reference: "Isaías 53:5",
  },
  {
    index: 41,
    reflection: "URL",
    text: "Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.",
    reference: "Gálatas 5:22",
  },
  {
    index: 42,
    reflection: "URL",
    text: "Mas os que esperam no Senhor renovarão as suas forças e subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.",
    reference: "Isaías 40:31",
  },
  {
    index: 43,
    reflection: "URL",
    text: "Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas tanto em Jerusalém como em toda a Judeia e Samaria e até aos confins da terra.",
    reference: "Atos 1:8",
  },
  {
    index: 44,
    reflection: "URL",
    text: "Meus irmãos, tende grande gozo quando cairdes em várias tentações",
    reference: "Tiago 1:2",
  },
  {
    index: 45,
    reflection: "URL",
    text: "Na verdade, na verdade vos digo que quem ouve a minha palavra e crê naquele que me enviou tem a vida eterna e não entrará em condenação, mas passou da morte para a vida.",
    reference: "João 5:24",
  },
  {
    index: 46,
    reflection: "URL",
    text: "Não deixando a nossa congregação, como é costume de alguns; antes, admoestando-nos uns aos outros; e tanto mais quanto vedes que se vai aproximando aquele dia.",
    reference: "Hebreus 10:25",
  },
  {
    index: 47,
    reflection: "URL",
    text: "Não estejais inquietos por coisa alguma; antes, as vossas petições sejam em tudo conhecidas diante de Deus, pela oração e súplicas, com ação de graças.",
    reference: "Filipenses 4:6",
  },
  {
    index: 48,
    reflection: "URL",
    text: "Não se aparte da tua boca o livro desta Lei; antes, medita nele dia e noite, para que tenhas cuidado de fazer conforme tudo quanto nele está escrito; porque, então, farás prosperar o teu caminho e, então, prudentemente te conduzirás.",
    reference: "Josué 1:8",
  },
  {
    index: 49,
    reflection: "URL",
    text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te esforço, e te ajudo, e te sustento com a destra da minha justiça.",
    reference: "Isaías 41:10",
  },
  {
    index: 50,
    reflection: "URL",
    text: "Não te mandei eu? Esforça-te e tem bom ânimo; não pasmes, nem te espantes, porque o Senhor, teu Deus, é contigo, por onde quer que andares.",
    reference: "Josué 1:9",
  },
  {
    index: 51,
    reflection: "URL",
    text: "Não veio sobre vós tentação, senão humana; mas fiel é Deus, que vos não deixará tentar acima do que podeis; antes, com a tentação dará também o escape, para que a possais suportar.",
    reference: "1 Coríntios 10:13",
  },
  {
    index: 52,
    reflection: "URL",
    text: "Não vem das obras, para que ninguém se glorie.",
    reference: "Efésios 2:9",
  },
  {
    index: 53,
    reflection: "URL",
    text: "Nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus, nosso Senhor!",
    reference: "Romanos 8:39",
  },
  {
    index: 54,
    reflection: "URL",
    text: "Ninguém tem maior amor do que este: de dar alguém a sua vida pelos seus amigos.",
    reference: "João 15:13",
  },
  {
    index: 55,
    reflection: "URL",
    text: "Nisto todos conhecerão que sois meus discípulos, se vos amardes uns aos outros.",
    reference: "João 13:35",
  },
  {
    index: 56,
    reflection: "URL",
    text: "No princípio, criou Deus os céus e a terra.",
    reference: "Gênesis 1:1",
  },
  {
    index: 57,
    reflection: "URL",
    text: "No princípio, era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.",
    reference: "João 1:1",
  },
  {
    index: 58,
    reflection: "URL",
    text: "O ladrão não vem senão a roubar, a matar e a destruir; eu vim para que tenham vida e a tenham com abundância.",
    reference: "João 10:10",
  },
  {
    index: 59,
    reflection: "URL",
    text: "O meu Deus, segundo as suas riquezas, suprirá todas as vossas necessidades em glória, por Cristo Jesus.",
    reference: "Filipenses 4:19",
  },
  {
    index: 60,
    reflection: "URL",
    text: "Oh! Quão bom e quão suave é que os irmãos vivam em união!",
    reference: "Salmos 133:1",
  },
  {
    index: 61,
    reflection: "URL",
    text: "Olhando para Jesus, autor e consumador da fé, o qual, pelo gozo que lhe estava proposto, suportou a cruz, desprezando a afronta, e assentou-se à destra do trono de Deus.",
    reference: "Hebreus 12:2",
  },
  {
    index: 62,
    reflection: "URL",
    text: "Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem.",
    reference: "Hebreus 11:1",
  },
  {
    index: 63,
    reflection: "URL",
    text: "Ora, àquele que é poderoso para fazer tudo muito mais abundantemente além daquilo que pedimos ou pensamos, segundo o poder que em nós opera.",
    reference: "Efésios 3:20",
  },
  {
    index: 64,
    reflection: "URL",
    text: "Ora, estes foram mais nobres do que os que estavam em Tessalônica, porque de bom grado receberam a palavra, examinando cada dia nas Escrituras se estas coisas eram assim.",
    reference: "Atos 17:11",
  },
  {
    index: 65,
    reflection: "URL",
    text: "Ora, o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pela virtude do Espírito Santo.",
    reference: "Romanos 15:13",
  },
  {
    index: 66,
    reflection: "URL",
    text: "Ora, sem fé é impossível agradar-lhe, porque é necessário que aquele que se aproxima de Deus creia que ele existe e que é galardoador dos que o buscam.",
    reference: "Hebreus 11:6",
  },
  {
    index: 67,
    reflection: "URL",
    text: "Ou não sabeis que o nosso corpo é o templo do Espírito Santo, que habita em vós, proveniente de Deus, e que não sois de vós mesmos?",
    reference: "1 Coríntios 6:19",
  },
  {
    index: 68,
    reflection: "URL",
    text: "Pelas quais ele nos tem dado grandíssimas e preciosas promessas, para que por elas fiqueis participantes da natureza divina, havendo escapado da corrupção, que, pela concupiscência, há no mundo.",
    reference: "2 Pedro 1:4",
  },
  {
    index: 69,
    reflection: "URL",
    text: "Porque a palavra de Deus é viva, e eficaz, e mais penetrante do que qualquer espada de dois gumes, e penetra até à divisão da alma, e do espírito, e das juntas e medulas, e é apta para discernir os pensamentos e intenções do coração.",
    reference: "Hebreus 4:12",
  },
  {
    index: 70,
    reflection: "URL",
    text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    reference: "João 3:16",
  },
  {
    index: 71,
    reflection: "URL",
    text: "Porque Deus enviou o seu Filho ao mundo não para que condenasse o mundo, mas para que o mundo fosse salvo por ele.",
    reference: "João 3:17",
  },
  {
    index: 72,
    reflection: "URL",
    text: "Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.",
    reference: "2 Timóteo 1:7",
  },
  {
    index: 73,
    reflection: "URL",
    text: "Porque estou certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir.",
    reference: "Romanos 8:38",
  },
  {
    index: 74,
    reflection: "URL",
    text: "Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais.",
    reference: "Jeremias 29:11",
  },
  {
    index: 75,
    reflection: "URL",
    text: "Porque eu sou contigo, e ninguém lançará mão de ti para te fazer mal, pois tenho muito povo nesta cidade.",
    reference: "Atos 18:10",
  },
  {
    index: 76,
    reflection: "URL",
    text: "Porque não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas; porém um que, como nós, em tudo foi tentado, mas sem pecado.",
    reference: "Hebreus 4:15",
  },
  {
    index: 77,
    reflection: "URL",
    text: "Porque o meu jugo é suave, e o meu fardo é leve.",
    reference: "Mateus 11:30",
  },
  {
    index: 78,
    reflection: "URL",
    text: "Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus, nosso Senhor.",
    reference: "Romanos 6:23",
  },
  {
    index: 79,
    reflection: "URL",
    text: "Porque os meus pensamentos não são os vossos pensamentos, nem os vossos caminhos, os meus caminhos, diz o Senhor.",
    reference: "Isaías 55:8",
  },
  {
    index: 80,
    reflection: "URL",
    text: "Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus.",
    reference: "Efésios 2:8",
  },
];

function getRandomVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  return verses[randomIndex];
}

function getRandomGradient() {
  const colors = [
    "#ff7e5f",
    "#feb47b",
    "#6a11cb",
    "#2575fc",
    "#00d2ff",
    "#3a7bd5",
    "#ee9ca7",
    "#ffdde1",
    "#4568dc",
    "#b06ab3",
    "#ec008c",
    "#fc6767",
    "#ffcc29",
    "#4cb8c4",
    "#f4786e",
    "#6874e8",
    "#a2d729",
    "#e8764e",
    "#c8c8c8",
    "#ff5733",
    "#ffa700",
    "#ffcc00",
    "#33ff33",
    "#00ffcc",
    "#00ccff",
    "#0066ff",
    "#9933ff",
    "#ff33ff",
    "#ff66b2",
    "#ff5050",
    "#ff9933",
    "#ffbf00",
    "#99cc00",
    "#66cc66",
    "#66cccc",
    "#3366ff",
    "#993366",
    "#cc6699",
    "#ff99cc",
    "#ffccff",
    "#ff6666",
    "#ff9966",
    "#ffcc99",
    "#ffff99",
    "#ccff99",
    "#99ff99",
    "#99ffff",
    "#66ccff",
  ];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(to right, ${color1}, ${color2})`;
}

document.addEventListener("DOMContentLoaded", () => {
  const verseElement = document.getElementById("verse");
  const referenceElement = document.getElementById("reference");

  const verse = getRandomVerse();
  verseElement.textContent = verse.text;
  referenceElement.textContent = verse.reference;

  document.body.style.background = getRandomGradient();

  const reflectionButton = document.getElementById("reflection");
  if (verse.reflection && isValidUrl(verse.reflection)) {
    reflectionButton.style.display = "block";
  } else {
    reflectionButton.style.display = "none";
  }
});

document.getElementById("copy").addEventListener("click", () => {
  const verseText = document.getElementById("verse").textContent;
  const referenceText = document.getElementById("reference").textContent;
  const textToCopy = `${verseText} - ${referenceText}`;
  navigator.clipboard.writeText(textToCopy).then(
    () => {
      alert("Versículo copiado!");
    },
    () => {
      alert("Erro ao copiar o versículo.");
    }
  );
});

document.getElementById("share").addEventListener("click", () => {
  const verseText = document.getElementById("verse").textContent;
  const referenceText = document.getElementById("reference").textContent;
  const textToShare = `${verseText} - ${referenceText}`;
  if (navigator.share) {
    navigator
      .share({
        title: "Versículo Bíblico",
        text: textToShare,
      })
      .then(() => {
        console.log("Versículo compartilhado com sucesso.");
      })
      .catch((error) => {
        console.log("Erro ao compartilhar o versículo:", error);
      });
  } else {
    alert(
      "A funcionalidade de compartilhamento não é suportada neste navegador."
    );
  }
});

document.getElementById("reflection").addEventListener("click", () => {
  const reflectionUrl = verses.find((v) => v.index === 2).reflection;
  window.open(reflectionUrl, "_blank");
});

document.getElementById("churchLogo").addEventListener("click", () => {
  const buttonsContainer = document.querySelector(".buttons");
  const churchInfoElements = document.querySelectorAll(".church-info");

  if (buttonsContainer.style.display === "none") {
    buttonsContainer.style.display = "flex";
    churchInfoElements.forEach((element) => {
      element.style.display = "block";
    });
  } else {
    buttonsContainer.style.display = "none";
    churchInfoElements.forEach((element) => {
      element.style.display = "none";
    });
  }
});

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
