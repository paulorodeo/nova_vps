import type { LegalDocument } from "@/types/content";

/**
 * Textos legais provisórios e neutros.
 * Devem ser revisados/substituídos por redação jurídica própria da empresa.
 */
export const legalLastUpdate = "2026-01-01";

const placeholderNotice =
  "[Conteúdo a validar juridicamente] Este texto é provisório e deve ser revisado por assessoria jurídica antes da publicação definitiva.";

export const privacyPolicy: LegalDocument = {
  intro:
    "Esta Política de Privacidade descreve como os dados pessoais informados por visitantes deste site são tratados. " +
    placeholderNotice,
  sections: [
    {
      heading: "1. Dados coletados",
      paragraphs: [
        "Coletamos apenas os dados fornecidos voluntariamente pelo visitante ao entrar em contato conosco, como nome, telefone, e-mail e a descrição do projeto ou terreno.",
      ],
      bullets: [
        "Dados de identificação e contato informados em formulários",
        "Conteúdo das mensagens enviadas por WhatsApp, e-mail ou telefone",
        "Dados técnicos de navegação eventualmente gerados por cookies",
      ],
    },
    {
      heading: "2. Finalidades do tratamento",
      paragraphs: [
        "Os dados são utilizados exclusivamente para responder solicitações, elaborar propostas comerciais e manter o histórico de atendimento.",
        "Não comercializamos dados pessoais e não os utilizamos para finalidades incompatíveis com aquelas informadas no momento da coleta.",
      ],
    },
    {
      heading: "3. Compartilhamento",
      paragraphs: [
        "Dados podem ser compartilhados com prestadores de serviço estritamente necessários à operação do site e do atendimento, sempre limitados à finalidade original.",
        "[Conteúdo a definir] A relação de operadores e fornecedores utilizados deve ser informada pela empresa.",
      ],
    },
    {
      heading: "4. Retenção e segurança",
      paragraphs: [
        "Os dados são mantidos pelo tempo necessário ao atendimento e ao cumprimento de obrigações legais, e são protegidos por medidas técnicas e administrativas razoáveis.",
      ],
    },
    {
      heading: "5. Direitos do titular",
      paragraphs: [
        "O titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação dos seus dados por meio dos canais de contato indicados neste site.",
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  intro:
    "Estes Termos de Uso regulam o acesso e a utilização deste site. " + placeholderNotice,
  sections: [
    {
      heading: "1. Aceitação",
      paragraphs: [
        "Ao navegar neste site, o visitante declara estar ciente e de acordo com estes Termos de Uso e com a Política de Privacidade.",
      ],
    },
    {
      heading: "2. Uso do conteúdo",
      paragraphs: [
        "Textos, imagens, projetos, marcas e demais elementos exibidos são protegidos por direitos de propriedade intelectual e não podem ser reproduzidos sem autorização prévia por escrito.",
      ],
    },
    {
      heading: "3. Caráter informativo",
      paragraphs: [
        "As informações apresentadas têm caráter informativo e não constituem proposta comercial vinculante. Prazos, valores e soluções técnicas são definidos apenas em documento contratual específico.",
      ],
    },
    {
      heading: "4. Disponibilidade e links externos",
      paragraphs: [
        "Empenhamo-nos em manter o site disponível, mas não garantimos funcionamento ininterrupto. Links para sites de terceiros são oferecidos por conveniência e não implicam responsabilidade sobre seus conteúdos.",
      ],
    },
    {
      heading: "5. Foro e alterações",
      paragraphs: [
        "Estes Termos podem ser atualizados a qualquer momento, passando a valer a partir da publicação nesta página.",
        "[Conteúdo a definir] A cláusula de foro deve ser preenchida com a comarca informada pela empresa.",
      ],
    },
  ],
};

export const cookiePolicy: LegalDocument = {
  intro:
    "Esta Política de Cookies explica quais tecnologias de armazenamento este site utiliza. " +
    placeholderNotice,
  sections: [
    {
      heading: "1. O que são cookies",
      paragraphs: [
        "Cookies são pequenos arquivos gravados no navegador que permitem reconhecer o dispositivo e melhorar a experiência de navegação.",
      ],
    },
    {
      heading: "2. Cookies utilizados",
      paragraphs: [
        "Atualmente este site utiliza apenas os recursos necessários ao seu funcionamento básico. Caso ferramentas de análise ou publicidade sejam adicionadas, esta política será atualizada.",
      ],
      bullets: [
        "Necessários: garantem o funcionamento das páginas",
        "Analíticos: [a definir] serão listados quando implementados",
        "Publicidade: [a definir] serão listados quando implementados",
      ],
    },
    {
      heading: "3. Gerenciamento",
      paragraphs: [
        "O visitante pode bloquear ou excluir cookies nas configurações do navegador. A desativação de cookies necessários pode afetar funcionalidades do site.",
      ],
    },
    {
      heading: "4. Conteúdos incorporados",
      paragraphs: [
        "Páginas podem exibir conteúdos de terceiros, como mapas incorporados, que seguem as políticas de privacidade dos respectivos provedores.",
      ],
    },
  ],
};

export const lgpdStatement: LegalDocument = {
  intro:
    "Esta página reúne informações sobre a adequação do tratamento de dados pessoais à Lei nº 13.709/2018 (LGPD). " +
    placeholderNotice,
  sections: [
    {
      heading: "1. Papel da empresa",
      paragraphs: [
        "Atuamos como controlador dos dados pessoais coletados por meio deste site, definindo as finalidades e os meios de tratamento.",
      ],
    },
    {
      heading: "2. Bases legais",
      paragraphs: [
        "O tratamento se apoia principalmente no consentimento do titular, na execução de procedimentos preliminares a contrato e no cumprimento de obrigação legal.",
      ],
    },
    {
      heading: "3. Direitos do titular",
      paragraphs: ["A LGPD assegura ao titular, entre outros, os seguintes direitos:"],
      bullets: [
        "Confirmação da existência de tratamento e acesso aos dados",
        "Correção de dados incompletos, inexatos ou desatualizados",
        "Anonimização, bloqueio ou eliminação de dados desnecessários",
        "Portabilidade e informação sobre compartilhamentos",
        "Revogação do consentimento",
      ],
    },
    {
      heading: "4. Canal de atendimento ao titular",
      paragraphs: [
        "Solicitações podem ser encaminhadas pelos canais de contato divulgados neste site.",
        "[Conteúdo a definir] O nome e o contato do Encarregado (DPO) devem ser informados pela empresa.",
      ],
    },
    {
      heading: "5. Incidentes de segurança",
      paragraphs: [
        "Em caso de incidente que possa acarretar risco relevante aos titulares, adotaremos as providências de comunicação previstas na legislação.",
      ],
    },
  ],
};
