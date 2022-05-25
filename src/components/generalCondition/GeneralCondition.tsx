import React,{memo} from 'react';
import { Container } from './Styles';

const GeneralCondition: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <b>Definições e Termos</b>
        </li>
      </ul>
      <ol>
        <li style={{ listStyleType: 'none' }}>
          <ol>
            <li style={{ fontWeight: '400' }}>
              <span style={{ fontWeight: '400' }}>O </span>
              <b>PLANO ANUAL DE ASSISTÊNCIA AUTO 24h </b>
              <span style={{ fontWeight: '400' }}>da </span>
              <b>REBOX </b>
              <span style={{ fontWeight: '400' }}>
                é um conjunto de serviços oferecido exclusivamente a veículos de passeio
                com peso até 2 toneladas e até 30 anos de fabricação. As principais
                vantagens da{' '}
              </span>
              <b>ASSISTÊNCIA AUTO 24h </b>
              <span style={{ fontWeight: '400' }}>da </span>
              <b>REBOX </b>
              <span style={{ fontWeight: '400' }}>
                são a tranquilidade e segurança de poder contar com um serviço de
                qualidade em situações emergenciais, tais como pane mecânica e elétrica,
                acidente ou quebra/perda das chaves, além de benefícios exclusivos para
                todo associado, como desconto em compra de medicamentos e participação de
                sorteio de prêmios.
              </span>
            </li>
          </ol>
        </li>
      </ol>
      <p>
        <span style={{ fontWeight: '400' }}>
          Os serviços de Assistência são prestados por{' '}
        </span>
        <b>REBOX SOLUÇÕES INTEGRADAS LTDA</b>
        <span style={{ fontWeight: '400' }}>, inscrita no </span>
        <b>CNPJ 37.667.543/0001-77</b>
        <span style={{ fontWeight: '400' }}>.</span>
      </p>
      <ol>
        <li style={{ fontWeight: '400' }}>
          <b>USUÁRIO: </b>
          <span style={{ fontWeight: '400' }}>
            Entende-se por usuário, a pessoa física que estiver conduzindo o veículo no
            momento do evento.
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <b>VEÍCULO: </b>
          <span style={{ fontWeight: '400' }}>
            Veículo particular (automóvel de passeio) devidamente cadastrado. Não estão
            incluídos veículos destinados a transporte público de mercadoria ou
            passageiros, de aluguel, que tenha peso superior a 2.000 kg, limitado a 30
            anos de fabricação de carros e 20 anos de fabricação para motos.
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <b>OCORRÊNCIA: </b>
          <span style={{ fontWeight: '400' }}>
            É um fato danoso e imprevisível, produzido no veículo, tais como acidente,
            pane seca ou qualquer problema mecânico, que provoque sua imobilização e
            necessite de acionamento de serviços.
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <b>PANE: </b>
          <span style={{ fontWeight: '400' }}>
            Defeito de origem mecânica ou elétrica, que impeça a locomoção do veículo por
            seus próprios meios, incluindo os casos de falta de combustível, troca de
            pneus e perda ou quebra de chaves.
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <b>VIGÊNCIA: </b>
          <span style={{ fontWeight: '400' }}>
            É prazo em que o associado pode solicitar os serviços, através dos canais da{' '}
          </span>
          <b>REBOX</b>
          <span style={{ fontWeight: '400' }}>.</span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <b>ACOMPANHANTES:</b> <span style={{ fontWeight: '400' }}>São</span>{' '}
          <span style={{ fontWeight: '400' }}>considerados</span>{' '}
          <span style={{ fontWeight: '400' }}>acompanhantes</span>{' '}
          <span style={{ fontWeight: '400' }}>os</span>{' '}
          <span style={{ fontWeight: '400' }}>
            demais ocupantes do veículo, desde que afetados por acidente, incêndio, pane,
            roubo ou furto do veículo, respeitando sua capacidade legal.
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <b>DOMICÍLIO DO USUÁRIO: </b>
          <span style={{ fontWeight: '400' }}>
            É o município de domicílio do usuário constante do cadastro.
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <b>FRANQUIA: </b>
          <span style={{ fontWeight: '400' }}>
            É o critério de limitação ou exclusão do direito ao serviço de assistência a
            ser prestado, estabelecido em função de:
          </span>
        </li>
      </ol>
      <ul>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            A distância, em trajeto terrestre normal e viável, entre o local onde ocorreu
            o evento previsto ou pane e o local de domicílio do usuário;ou
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>A distância em trajeto normal</span>{' '}
          <span style={{ fontWeight: '400' }}>e viável entre</span>{' '}
          <span style={{ fontWeight: '400' }}>o local onde ocorreu</span>{' '}
          <span style={{ fontWeight: '400' }}>o evento&nbsp;</span>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          previsto ou pane e o destino de jornada do usuário.
        </span>
      </p>
      <ol>
        <li style={{ fontWeight: '400' }}>
          <b>NÚMERO DE UTILIZAÇÃO: </b>
          <span style={{ fontWeight: '400' }}>
            Diz respeito ao limite de utilização dos serviços descritos no plano de
            assistência adquirido pelo associado.
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <b>CARÊNCIA PARA UTILIZAÇÃO DO PLANO: </b>
          <span style={{ fontWeight: '400' }}>Período mínimo em que o</span>
        </li>
      </ol>
      <p>
        <span style={{ fontWeight: '400' }}>
          associado deve aguardar para solicitar os serviços do seu plano.
        </span>
      </p>
      <ol>
        <li style={{ fontWeight: '400' }}>
          <b>EXCLUSÕES: </b>
          <span style={{ fontWeight: '400' }}>
            São os serviços e situações que não são contemplados pelo plano de assistência
            da{' '}
          </span>
          <b>REBOX</b>
          <span style={{ fontWeight: '400' }}>.</span>
        </li>
      </ol>
      <ul>
        <li>
          <h1>
            <b>CONDIÇÕES GERAIS:</b>
          </h1>
        </li>
      </ul>
      <ol>
        <li style={{ listStyleType: 'none' }}>
          <ol>
            <li style={{ fontWeight: '400' }}>
              <span style={{ fontWeight: '400' }}>
                Os serviços oferecidos neste contrato são de assistência emergencial e não
                se configuram como um seguro. Os serviços, em questão, somente serão
                prestados em situações emergenciais por ano, que se caracterizem como um
                dos eventos previstos neste manual.
              </span>
            </li>
            <li style={{ fontWeight: '400' }}>
              <span style={{ fontWeight: '400' }}>
                Por não se confundirem com um seguro, os serviços de assistência auto 24h
                têm regras próprias e coberturas limitadas.
              </span>
            </li>
            <li style={{ fontWeight: '400' }}>
              <span style={{ fontWeight: '400' }}>
                Todos os serviços de assistência automotiva, previstos neste contrato,
                devem ser previamente solicitados para a Central de Assistência 24h da{' '}
              </span>
              <b>Rebox</b>
              <span style={{ fontWeight: '400' }}>
                , através dos canais disponíveis acima, a fim de que esta autorize e/ou
                organize a prestação dos mesmos.
              </span>
            </li>
            <li style={{ fontWeight: '400' }}>
              <span style={{ fontWeight: '400' }}>
                Os serviços organizados sem autorização prévia ou participação da Central
                de Assistência 24h da{' '}
              </span>
              <b>Rebox</b>
              <span style={{ fontWeight: '400' }}>
                {' '}
                não serão reembolsados ao usuário ou a quem tiver feito qualquer pagamento
                em nome deste.
              </span>
            </li>
            <li style={{ fontWeight: '400' }}>
              <span style={{ fontWeight: '400' }}>
                Apesar dos serviços descritos neste contrato serem de caráter emergencial,
                a prestação dos mesmos será feita de acordo com a infraestrutura,
                regulamentos, legislação e costumes do país/local do evento, localização e
                horário, natureza e urgência do atendimento necessário e requerido.
              </span>
            </li>
            <li style={{ fontWeight: '400' }}>
              <span style={{ fontWeight: '400' }}>
                Devido ao caráter emergencial dos serviços prestados ao usuário,&nbsp; a
                Central de Assistência está desobrigada a prestar qualquer atendimento aos
                veículos que já se encontrem em uma oficina ou que coloque em risco a
                integridade física do prestador dos serviços.
              </span>
            </li>
            <li style={{ fontWeight: '400' }}>
              <span style={{ fontWeight: '400' }}>
                Em caso de carros importados ou veículos em garantia de fábrica, o reboque
                será efetuado até uma oficina ou concessionária mais próxima no raio
                máximo contratado, ficando a cargo do&nbsp; usuário as&nbsp;
                despesas&nbsp; excedentes&nbsp; em caso de escolha por um reboque até uma
                oficina ou concessionária fora deste raio de ação.
              </span>
            </li>
            <li style={{ fontWeight: '400' }}>
              <span style={{ fontWeight: '400' }}>
                O usuário deverá sempre providenciar previamente a&nbsp; remoção&nbsp; de
                eventual carga&nbsp; que prejudique ou impeça o reboque.
              </span>
            </li>
            <li style={{ fontWeight: '400' }}>
              <span style={{ fontWeight: '400' }}>A </span>
              <b>REBOX</b>
              <span style={{ fontWeight: '400' }}>
                {' '}
                estará desobrigada da prestação de serviços&nbsp; nos&nbsp; casos alheios
                à vontade, tais como enchentes, fortes chuvas que impeçam a locomoção,
                greves, convulsões sociais, atos de vandalismo, interdições de rodovias
                e/ou de outras vias de acesso, casos de fortuitos ou de força maior.
              </span>
            </li>
          </ol>
        </li>
      </ol>
      <p>
        <b>2.10</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          &nbsp; &nbsp; São dados essenciais ao atendimento: nome, CPF do cliente e
          identificação do veículo, sem prejuízo de outros que sejam considerados
          necessários conforme a natureza do caso. A{' '}
        </span>
        <b>Rebox</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          se resguarda o direito de solicitar todo e qualquer documento que entender
          pertinente para a prestação dos serviços acima mencionados.{' '}
        </span>
        <b>
          A negativa no fornecimento de qualquer um dos documentos ou esclarecimento por
          parte do beneficiário, implicará na desobrigação da REBOX em prestar os
          serviços.
        </b>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>
          Os serviços somente serão prestados na presença do assistido ou de um
          representante legalmente capaz, munido do número do ID, chaves do veículo e
          documentos do veículo.
        </span>
      </p>
      <p>
        <b>2.11 ÂMBITO GEOGRÁFICO: </b>
        <span style={{ fontWeight: '400' }}>
          Esta assistência se aplica única e exclusivamente a veículos no território
          brasileiro.
        </span>
      </p>
      <h1>
        <b>4 SERVIÇOS PARA O VEÍCULO ASSISTIDO</b>
      </h1>
      <ul>
        <li>
          <b>RESUMO DA COBERTURA</b>
        </li>
      </ul>
      <ul>
        <li>
          <h1>
            <b>SOCORRO MECÂNICO</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          Na hipótese de pane que impossibilite a locomoção própria do veículo, será
          providenciado o envio de um mecânico para realizar o conserto no local, se
          tecnicamente possível. Caso não seja possível efetuar o conserto, mesmo após
          envio do mecânico, o automóvel será rebocado. A{' '}
        </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          se responsabilizará apenas pelas despesas com mão de obra do prestador, no
          momento do atendimento emergencial. Qualquer despesa relativa à reposição de
          peças será de responsabilidade do usuário.
        </span>
      </p>
      <h1>
        <b>Limite</b>
        <span style={{ fontWeight: '400' }}>: cobertura do plano escolhido</span>
      </h1>
      <ul>
        <li>
          <b>REBOQUE OU RECOLHA APÓS PANE OU EVENTO PREVISTO</b>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          O veículo será rebocado até a oficina ou concessionária mais próxima, indicada
          pelo usuário e localizada até o raio máximo contratado.
        </span>
      </p>
      <h1>
        <b>Limite</b>
        <span style={{ fontWeight: '400' }}>: cobertura do plano escolhido</span>
      </h1>
      <p>
        <b>IMPORTANTE: </b>
        <span style={{ fontWeight: '400' }}>
          Para o cálculo de raio, entende-se a distância percorrida pelo serviço de
          reboque, contada do local em que o veículo se encontra, até o destino escolhido
          pelo cliente, bem como o retorno do reboque até o local em que o veículo&nbsp;
          se&nbsp; encontrava, no momento da solicitação do reboque.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>
          Caso o percurso escolhido exceda o limite, o usuário será responsável pela
          quilometragem excedente de ida e volta do reboque.
        </span>
      </p>
      <p>
        <b>NOTAS IMPORTANTES:</b>
        <span style={{ fontWeight: '400' }}>&nbsp;</span>
      </p>
      <p>
        <b>1)</b>{' '}
        <span style={{ fontWeight: '400' }}>
          As despesas com pedágio (ida e volta) do presador, quando previstas na remoção,
          serão pagas pelo Cliente, diretamente ao prestador;
        </span>
      </p>
      <p>
        <b>2)</b>{' '}
        <span style={{ fontWeight: '400' }}>
          Caso haja roda travada e seja necessário a utilização de{' '}
        </span>
        <b>PATINS</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          para guinchar o veículo, esse custo será por conta do cliente;
        </span>
      </p>
      <p>
        <b>3) </b>
        <span style={{ fontWeight: '400' }}>
          Caso exceda o KM contratado, o cliente negociará o km excedente diretamente com
          o prestador.
        </span>
      </p>
      <ul>
        <li>
          <h1>
            <b>TROCA DE PNEUS</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>Na hipótese de danos aos pneus, a </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          disponibilizará um profissional para solução do problema. Caso não seja possível
          a realização do serviço, a veículo será rebocado até o borracheiro. As despesas
          para o conserto do pneu, câmara, aro, borracheiro, caso seja necessário, entre
          outras, ocorrerão por conta do usuário.
        </span>
      </p>
      <h1>
        <b>Limite: </b>
        <span style={{ fontWeight: '400' }}>cobertura do plano escolhido</span>
      </h1>
      <ul>
        <li>
          <h1>
            <b>PANE SECA</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          Na hipótese da impossibilidade de locomoção do automóvel por falta de
          combustível, a{' '}
        </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          providenciará o reboque até o posto de abastecimento mais próximo para que o
          usuário possa abastecê-lo. A{' '}
        </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          arcará apenas com o custo do reboque, ficando a cargo do usuário os gastos com o
          combustível.
        </span>
      </p>
      <h1>
        <b>Limite:</b>
        <span style={{ fontWeight: '400' }}> cobertura do plano escolhido</span>
      </h1>
      <ul>
        <li>
          <h1>
            <b>CHAVEIRO PARA AUTO</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          Na hipótese de perda, esquecimento da chave no interior do veículo ou quebra na
          ignição, fechadura ou na tranca de direção, havendo necessidade, a{' '}
        </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          providenciará o envio de um prestador de serviços para{' '}
        </span>
        <b>abertura do veículo</b>
        <span style={{ fontWeight: '400' }}>, sem arrombamento e sem danos.</span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>A responsabilidade da </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          restringe-se ao custo desta mão de obra{' '}
        </span>
        <span style={{ fontWeight: '400' }}>apenas</span>{' '}
        <span style={{ fontWeight: '400' }}>para abertura de porta</span>
        <span style={{ fontWeight: '400' }}>
          , não cobre conserto, compra de peças ou fabricação de cópias de chaves.&nbsp;
        </span>
      </p>
      <h1>
        <b>Limite:</b>
        <span style={{ fontWeight: '400' }}> cobertura do plano escolhido</span>
      </h1>
      <ul>
        <li>
          <h1>
            <b>CARGA NA BATERIA</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          Na impossibilidade do veículo não funcionar, por falta de energia na bateria, a{' '}
        </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          providenciará mão de obra para efetuar carga na bateria. Caso a carga na bateria
          não solucione o problema, a{' '}
        </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          rebocará o veículo até a oficina maispróxima.
        </span>
      </p>
      <h1>
        <b>Limite:</b>
        <span style={{ fontWeight: '400' }}> cobertura do plano escolhido</span>
      </h1>
      <ul>
        <li>
          <h1>
            <b>HOSPEDAGEM</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          Caso a ocorrência aconteça a mais de 250km de distância da residência do
          associado e o reparo no veiculo demore mais de 48h, será providenciada
          hospedagem (diárias) em hotel, até a conclusão dos serviços de reparos do
          veículo. BENEFÍCIO PARA O CLIENTE
        </span>
      </p>
      <ul>
        <li>
          <h1>
            <b>REDE DE DESCONTO EM FARMÁCIA</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          Farmácia e medicamentos é um serviço que propicia acesso a medicamentos com
          descontos, adquiridos em drogarias credenciadas pela e-Pharma. O produto é um
          conjunto de serviços de suporte aos nossos clientes.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>
          Sempre que necessário, o usuário terá à sua disposição uma rede de farmácias
          credenciadas, onde poderá adquirir medicamentos com descontos sobre o preço
          máximo ao consumidor, conforme abaixo: Descontos de 15% a 80% sobre o Preço
          Máximo ao Consumidor (PMC) para os medicamentos contemplados na lista.
        </span>
      </p>
      <p>
        <b>IMPORTANTE: </b>
        <span style={{ fontWeight: '400' }}>
          E-Pharma praticará o menor preço entre o preço e-Pharma e o preço promocional do
          dia da loja. Não são considerados preços promocionais aqueles decorrentes de
          programas de fidelidade da farmácia, programas de adesão ao tratamento, entre
          outros. Não será autorizada pelo Sistema e-Pharma a venda de medicamentos
          fracionados e manipulados.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>
          A política de preços e descontos de medicamentos são de inteira responsabilidade
          de das farmácias, que podem alterar os preços sem consulta prévia, não tendo a{' '}
        </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          , nenhuma influência sobre tal decisão, pois trata-se apenas de um benefício
          estendido aos seus clientes.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>
          Para utilizar os descontos, basta informar no balcão de
        </span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>pagamento, que você tem o </span>
        <b>convênio E-PHARMA </b>
        <span style={{ fontWeight: '400' }}>e&nbsp;</span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>informar o seu </span>
        <b>CPF</b>
        <b>.</b>
      </p>
      <h1>
        <b>Franquia:</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          Utilização ilimitada, enquanto durar a vigência do plano. Abrangência: Em todo
          território nacional.
        </span>
      </h1>
      <ul>
        <li>
          <b>UTILIZAÇÃO DOS SERVIÇOS E PRAZOS</b>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>O </span>
        <b>PLANO DE ASSISTÊNCIA AUTO 24h</b>
        <span style={{ fontWeight: '400' }}> da </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          será automaticamente ativado após a confirmação do pagamento da primeira
          mensalidade e tem duração de um ano (12 meses), a partir dessa data.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>
          Os serviços de assistências 24 horas terão{' '}
        </span>
        <b>03 (três) DIAS ÚTEIS DE CARÊNCIA</b>
        <span style={{ fontWeight: '400' }}>
          , contados&nbsp; &nbsp; a partir da confirmação do pagamento da primeira
          mensalidade.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>Em caso de </span>
        <b>inadimplência</b>
        <span style={{ fontWeight: '400' }}> até </span>
        <b>07 (sete)</b>{' '}
        <span style={{ fontWeight: '400' }}>dias, o cliente terá que cumprir uma </span>
        <b>CARÊNCIA </b>
        <span style={{ fontWeight: '400' }}>de </span>
        <b>03 (três)</b> <b>dias úteis</b>
        <span style={{ fontWeight: '400' }}>
          , após confirmação do pagamento. Caso a{' '}
        </span>
        <b>inadimplência</b> <span style={{ fontWeight: '400' }}>seja superior a </span>
        <b>07 (sete)</b> <b>dias</b>
        <span style={{ fontWeight: '400' }}>, o cliente terá que cumprir uma </span>
        <b>CARÊNCIA</b>
        <span style={{ fontWeight: '400' }}>&nbsp; </span>
        <span style={{ fontWeight: '400' }}>de </span>
        <b>07 (sete)</b> <b>dias</b>
        <span style={{ fontWeight: '400' }}>.&nbsp; </span>
        <b>&nbsp;&nbsp;</b>
      </p>
      <ul>
        <li>
          <h1>
            <b>SUBSTITUIÇÃO DO VEÍCULO DO CLIENTE</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          A qualquer momento durante a vigência do{' '}
        </span>
        <b>PLANO DE ASSISTÊNCIA AUTO 24h</b>
        <span style={{ fontWeight: '400' }}> da&nbsp; </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          , o cliente poderá substituir o veículo – 1 (uma) vez durante a vigência do
          plano
        </span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>
          – desde que a documentação do veículo esteja em dia e que seja de propriedade do
          titular do plano, bastando para isso entrar em contato com a Central de
          Atendimento, através de um dos nossos canais.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>
          O veículo substituto deverá se submeter às mesmas regras previstas nesse
          contrato e obedecer o prazo de carência de 72 horas para a utilização dos
          serviços.
        </span>
      </p>
      <ul>
        <li>
          <h1>
            <b>SOBRE O CANCELAMENTO</b>
          </h1>
        </li>
      </ul>
      <ul>
        <li>
          <b>DO PLANO</b>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          O plano de assistência auto 24h pode ser{' '}
        </span>
        <b>CANCELADO </b>
        <span style={{ fontWeight: '400' }}>
          a qualquer momento, pois não há fidelidade.&nbsp;
        </span>
      </p>
      <p>
        <span style={{ fontWeight: '400' }}>A </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          se reserva o direito de cancelar automaticamente o serviço do Cliente ou negar a
          prestação de serviço quando este causar ou provocar intencionalmente um fato que
          dê origem à necessidade de prestação de qualquer um dos serviços aqui descritos,
          ou quando o Cliente omitir ou fornecer intencionalmente informações falsas.
        </span>
      </p>
      <ul>
        <li>
          <h1>
            <b>DE AGENDAMENTOS</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          Em caso de agendamento de um serviço de assistência para uma data posterior, o
          cliente poderá cancelar o agendamento até 2 (duas) horas antes do horário
          estabelecido para a execução do serviço, sem prejuízo ao número de utilizações
          de que tem direito.
        </span>
      </p>
      <ul>
        <li>
          <h1>
            <b>DE ASSISTÊNCIA NO DIA</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>
          O cliente, que solicitar um serviço de assistência, terá 10 (dez) minutos para
          cancelar o seu pedido sem prejuízo à franquia adquirida. Caso peça o
          cancelamento após o tempo estabelecido, esse serviço será contabilizado como
          executado e descontado de sua franquia.
        </span>
      </p>
      <ul>
        <li>
          <h1>
            <b>EXCLUSÕES GERAIS</b>
          </h1>
        </li>
      </ul>
      <ul>
        <li>
          <b>NÃO ESTÃO COBERTOS POR ESTA ASSISTÊNCIA:</b>
        </li>
      </ul>
      <ul>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Não fazemos para veículo do tipo &nbsp; Rebaixado;
          </span>
        </li>
      </ul>
      <ul>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Serviços providenciados diretamente pelo usuário ou terceiros, sem prévio
            contato com Central de Atendimento da{' '}
          </span>
          <b>REBOX</b>
          <span style={{ fontWeight: '400' }}>;</span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Ocorrências fora dos âmbitos definidos;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Mão de obra para reparação do veículo;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Eventos ocorridos com veículos com peso superior a 2 toneladas;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Estão excluídos modelos como motocicletas e derivados, caminhonetes,
            caminhões, suv (sport utility vehicle), pickups grandes, veículos destinados
            ao transporte público de mercadorias, passageiros ou de aluguel;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Os serviços de assistência 24 horas descritos nestas condições gerais não são
            um produto de seguro;
          </span>
        </li>
      </ul>
      <ul>
        <li>
          <span style={{ fontWeight: '400' }}>
            Serviços de assistência para veículos utilizados para fins comerciais;
          </span>
        </li>
      </ul>
      <ul>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Mão de obra para reparação do veículo (exceto nos casos de reparo no local,
            quando de acordo com os termos da tabela de serviços);
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>Consertos de pneus;</span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Substituição de peças defeituosas no veículo;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Fornecimento de qualquer material destinado à reparação do veículo;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>Fornecimento de combustível;</span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Pagamento de diárias em depósitos de carros;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Serviços de assistência para terceiros;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Serviços que impliquem o rompimento de lacres quando o veículo estiver na
            garantia de fábrica;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Atendimento para veículos em trânsito por trilhas ou caminhos de difícil
            acesso, impedidos ou não abertos ao tráfego ou de areias fofas ou movediças;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Eventos que ocorram em situação de guerra, manifestações populares, atos de
            terrorismo e sabotagem, greves, enchentes, interdições de rodovias e/ou outras
            vias de acesso, detenções por parte de qualquer autoridade por delito não
            derivado de acidente de transito e restrições à livre circulação, casos
            fortuitos e de força maior;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Assistências em que o usuário oculte informações necessárias para a prestação
            do serviço ou descaracterização proposital de um fato ocorrido;
          </span>
        </li>
        <li style={{ fontWeight: '400' }}>
          <span style={{ fontWeight: '400' }}>
            Automóveis que estiverem sendo utilizadas para prática de atividades off-road,
            trilhas, passeios em dunas, ou locais de difícil ou impossível acesso para o
            veículo de reboque, como montanhas, praias, encostas, ou outro local que não
            possua via pública de acesso.
          </span>
        </li>
      </ul>
      <ul>
        <li>
          <h1>
            <b>FORUM</b>
          </h1>
        </li>
      </ul>
      <p>
        <span style={{ fontWeight: '400' }}>A </span>
        <b>REBOX</b>
        <span style={{ fontWeight: '400' }}>
          {' '}
          estabelece que o foro competente para dirimir eventuais questões oriundas destas
          Condições Gerais será sempre o do domicílio da{' '}
        </span>
        <b>Rebox</b>
        <span style={{ fontWeight: '400' }}>.</span>
      </p>
    </Container>
  );
};

export default memo(GeneralCondition);
