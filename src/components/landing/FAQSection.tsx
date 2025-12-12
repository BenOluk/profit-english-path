import { useState } from "react";

const faqs = [
  {
    question: "Como saber se meu conhecimento de inglês (ou outro segundo idioma) é suficiente para trabalhar com tradução?",
    answer:
      "O que eu sempre falo pro pessoal quando me perguntam isso na caixinha de perguntas do Instagram é o seguinte: se seu inglês (ou qualquer outro segundo idioma) é bom o suficiente para você ouvir músicas estrangeiras e entendê-las; se você consegue assistir às séries que gosta sem depender de legenda; e se você gosta de aprender coisas novas, seu conhecimento é suficiente sim para começar.\n\nO Tradutor Profissional não precisa saber TUDO de seus idiomas de trabalho. Temos ferramentas que podem nos ajudar durante os projetos, quando encontramos uma palavra que nunca vimos na vida. (PS: isso acontece com seu idioma materno também. Você talvez não conheça a palavra \"estapafúrdio\", e nem por isso você duvidaria da sua capacidade de falar português, certo? 🙂)",
  },
  {
    question: "Na Imersão, você explica como conseguir clientes? Essa é minha maior insegurança.",
    answer:
      "Sim, na imersão, eu dou algumas estratégias iniciais de prospecção para você saber por onde começar. No material complementar opcional Dashboard do Tradutor Iniciante, você recebe um checklist de sites para usar em sua rotina de prospecção. Acrescente ao seu ingresso se desejar.\n\nVocê também recebe um Bônus exclusivo para te ajudar a fechar seus primeiros trabalhos de tradução: a HOT LIST, uma lista de 25 sites altamente indicados para você prospectar clientes e começar a fazer dinheiro como tradutor profissional.",
  },
  {
    question: "Meu segundo idioma não é o inglês, posso participar da Imersão Inglês Lucrativo mesmo assim?",
    answer:
      "Claro! O Inglês Lucrativo não é uma aula de idiomas; ele é uma imersão que te orienta para iniciar como tradutor. Inscreva-se no Inglês Lucrativo para aprender os primeiros passos para usar o segundo idioma que você já sabe e transformá-lo numa ferramenta de trabalho. Aprenda o que você precisa saber sobre o mercado de tradução, programas e recursos que vão te ajudar a entregar qualidade em suas traduções, técnicas de prospecção de clientes e orientações para saber como precificar o trabalho.",
  },
  {
    question: "Não tenho muito tempo sobrando, a Imersão é muito longa?",
    answer:
      "A Imersão Inglês Lucrativo foi criada para entregar o máximo de conteúdo possível em aproximadamente 4h de forma leve e descontraída, ideal para jovens que têm PRESSA de fazer dinheiro. Por isso, é uma imersão relativamente curta sem ser superficial, e você não precisa de muita disponibilidade para assistir. Em pouco menos de 4h, você consegue assistir a todo o conteúdo da imersão e ainda tem acesso a um convite especial para levar seus estudos adiante de forma profissionalizante. Você também pode aplicar os conteúdos da imersão com a ajuda do material complementar opcional Dashboard do TRADUTOR INICIANTE, que você poderá acrescentar ao seu ingresso se desejar.",
  },
  {
    question: "Em quanto tempo consigo fazer dinheiro com essas habilidades?",
    answer:
      "Tenho relatos de alunos que, apenas 30 dias após começarem a estudar com a gente, já tinham fechado seu primeiro cliente na profissão da Tradução. A velocidade do resultado depende do quanto você vai se dedicar à prospecção de clientes e à busca por oportunidades que se encaixam no que você deseja. Muitos alunos nossos têm \"sangue nos olhos\" e se jogam com vontade, conseguindo resultados super rapidamente. Enquanto outros procrastinam e cedem ao autoboicote, e acabam demorando para ter resultado. Qual tipo de aluno você pretende ser? Aquele que faz o que tem que ser feito e constrói resultado, ou aquele que espera o cliente cair do céu?",
  },
  {
    question: "Quanto tempo de acesso?",
    answer:
      "A Imersão Inglês Lucrativo é um conteúdo online criado pra pessoas que têm pressa pra mudar de vida. Por isso, não queremos que você se enrole pra assistir!\n\nSeu ingresso te dá direito a 15 dias de acesso ao conteúdo, sendo que você pode começar AGORA MESMO, com o acesso imediato liberado logo após a confirmação do pagamento do ingresso.\n\nEntão, se não tiver disponibilidade pra começar HOJE a assistir, organize-se para assistir nos próximos 15 dias.\n\nVocê também tem a opção de adquirir o Resumão escrito da imersão no Notion, que poderá ser salvo na sua conta do Notion pra você guardar pra sempre e consultar a qualquer momento após seus 15 dias de acesso. Acrescente este e outros materiais complementares opcionais ao seu ingresso se desejar.",
  },
  {
    question: "A Imersão é só para quem nunca traduziu antes? Ou quem tem experiência também pode fazer?",
    answer:
      "A Imersão Inglês Lucrativo foi pensada para pessoas iniciantes no mercado da Tradução. Por isso, quem mais se beneficia deste conteúdo é a pessoa que não tem experiência no mercado da Tradução como profissional qualificado, ou pessoas que estão desatualizadas e desejam se informar sobre as tendências atuais do mercado.",
  },
  {
    question: "Como faço para assistir à Imersão Inglês Lucrativo?",
    answer:
      "Após finalizar sua matrícula, você receberá um e-mail com os dados de acesso no seu e-mail cadastrado na matrícula do Ingresso.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{
      padding: "64px 0 96px",
      backgroundColor: "#000000"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px"
      }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{
            color: "#FF7734",
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Dúvidas frequentes
          </span>
          <h2 style={{
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#FFFFFF",
            marginTop: "16px",
            marginBottom: "24px",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Perguntas{" "}
            <span style={{
              background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Frequentes</span>
          </h2>
        </div>

        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(26, 26, 26, 0.6)",
                  backdropFilter: "blur(24px)",
                  border: openIndex === index ? "1px solid rgba(126, 51, 255, 0.5)" : "1px solid rgba(51, 51, 51, 0.5)",
                  borderRadius: "12px",
                  padding: "0 24px",
                  overflow: "hidden",
                  transition: "border-color 0.3s"
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  <span style={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                    paddingRight: "16px",
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    {faq.question}
                  </span>
                  <span style={{
                    color: "#7E33FF",
                    fontSize: "24px",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s"
                  }}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div style={{
                    paddingBottom: "20px",
                    color: "rgba(179, 179, 179, 1)",
                    fontSize: "16px",
                    lineHeight: 1.7,
                    whiteSpace: "pre-line",
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
