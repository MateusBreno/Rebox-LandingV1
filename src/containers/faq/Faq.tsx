import { useLocation } from 'react-router-dom';
import {
  faAngleRight,
  faCaretUp,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import useMeasure from 'react-use-measure';
import { useSpring } from 'react-spring';
import {
  CollapsedDiv,
  Container,
  FaqWrapper,
  Header,
  Options,
  OptionText,
  OptionWrapper,
  Question,
  QuestionDesc,
  QuestionDescWrapper,
  QuestionTitle,
  QuestionTitleWrapper,
  Separator,
  Title,
} from './Styles';

import questions from '../../constants/faqQuestions.json';
import Manual from '../../assets/Manual do Cliente Rebox.pdf';
import { GeneralCondition, PrivacyPolicy, UsageRules } from '../../components';
import { useScroll } from '../../hooks/useScroll';


interface OptionProps {
  text: string;
  handleClick: () => void;
}

const MyDivider: React.FC = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        textAlign: 'center',
        width: '228px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <FontAwesomeIcon
        color={theme.colors.primary}
        icon={faCaretUp}
        style={{ marginRight: '10px' }}
        fontSize="20px"
      />
      <Separator />
    </div>
  );
};

const Option: React.FC<OptionProps> = ({ text, handleClick }) => {
  const theme = useTheme();

  return (
    <>
      <OptionWrapper
        onClick={(): void => {
          handleClick();
        }}
      >
        <FontAwesomeIcon className="icon" icon={faAngleRight} color={theme.colors.text} />

        <OptionText>{text == "Manual do Cliente" ? <a href={Manual} target = '_blank'>{text}</a> :  text }</OptionText>

      </OptionWrapper>
    </>
  );
};

const QuestionItem: React.FC<{ type: string; title: string; desc: string }> = ({
  type,
  title,
  desc,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [ref, bounds] = useMeasure();

  const collapseAnimation = useSpring({
    height: open ? bounds.height : 0,
  });

  return type === 'faq' ? (
    <CollapsedDiv style={{ maxWidth: '510px' }}>
      <Question open={open} onClick={(): void => setOpen(prev => !prev)}>
        <QuestionTitleWrapper>
          <QuestionTitle open={open}>{title}</QuestionTitle>
          <FontAwesomeIcon icon={!open ? faPlus : faMinus} />
        </QuestionTitleWrapper>
        <QuestionDescWrapper style={collapseAnimation}>
          <QuestionDesc ref={ref} dangerouslySetInnerHTML={{ __html: desc }} />
        </QuestionDescWrapper>
      </Question>
    </CollapsedDiv>
  ) : type === 'privacyPolicy' ? (
    <CollapsedDiv />
  ) : (
    <CollapsedDiv />
  );
};

const Faq: React.FC = () => {
  const [idx, setIdx] = useState<number>(-1);
  const options = [
    {
      key: 'id-1',
      component: (
        <Option text="Perguntas Frequentes" handleClick={(): void => setIdx(0)} />
      ),
    },
    {
      key: 'id-2',
      component: (
        <Option text="Política de Privacidade" handleClick={(): void => setIdx(1)} />
      ),
    },
    {
      key: 'id-3',
      component: <Option text="Manual do Cliente" handleClick={(): void => setIdx(2)} />,
    },
    // {
    //   key: 'id-4',
    //   component: <Option text="Regras de Uso" handleClick={(): void => setIdx(3)} />,
    // },
  ];
  const location = useLocation();
  useScroll(location);

  return (
    <Container id="faq">
      <Header>
        <Title>Dúvidas Frequentes</Title>
        <MyDivider />
      </Header>
      <Options>
        {options.map((option, i) => (
          <div key={option.key} className={idx === i ? 'active' : ''}>
            {option.component}
          </div>
        ))}
      </Options>
      {idx === 0 ? (
        <FaqWrapper>
          {questions.map(question => (
            <QuestionItem
              type="faq"
              key={question.id}
              title={question.title}
              desc={question.desc}
            />
          ))}
        </FaqWrapper>
      ) : idx === 1 ? (
        <CollapsedDiv>
          <PrivacyPolicy />
        </CollapsedDiv>
      ) : idx === 2 ? (
        <CollapsedDiv>
          <a href={Manual}>
            -
          </a>

        </CollapsedDiv>
      // ) : (
      //   idx === 3 && (
      //     <CollapsedDiv>
      //       <UsageRules />
      //     </CollapsedDiv>
      //   )
      ): null}
    </Container>
  );
};

export default Faq;
