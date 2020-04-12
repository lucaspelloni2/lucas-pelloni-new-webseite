import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { SubTitle, Title } from "../../Layout/Typography";
import { SPACING } from "../../Layout/Theme";
import { ScrollDownIcon } from "../../components/ScrollDownIcon";
import { setTranslation } from "../../reducers/translation/actions";
import { Direction } from "../../reducers/translation/types";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import {Rain} from "../../components/Rain/Rain";

const Container = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyTitle = styled(Title)`
  font-size: 60px;
`;

const Sub = styled(SubTitle)`
  margin-top: -${SPACING * 3}px;
`;

export const StoryIntro = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Rain />
      <MyTitle>Lucas Pelloni, 18.03.1993</MyTitle>
      <Sub>Naglerwiesenstrasse 88, 8049 Zürich</Sub>
      <Button>I hope your are</Button>
      <ScrollDownIcon
        onClick={() => {
          dispatch(setTranslation(Direction.DOWN));
        }}
      />
    </Container>
  );
};
