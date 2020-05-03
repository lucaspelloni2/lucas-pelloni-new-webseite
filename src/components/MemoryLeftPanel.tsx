import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  __COLORS,
  LEFT_PANEL_TRANSITION,
  MEMORY_LEFT_PANEL_WIDTH,
  SPACING
} from "../Layout/Theme";
import { CloseIcon } from "./CloseIcon";
import useAppState from "../reducers/useAppState";
import { fadeInBezier } from "../Layout/AnimationHelper";
import { useMemoryColor } from "../hooks/useMemoryColor";
import { MemoryLogo } from "./MemoryLogo";

const Container = styled.div<{ isLeftPanelOpen: boolean }>`
  width: ${props => (props.isLeftPanelOpen ? MEMORY_LEFT_PANEL_WIDTH : 0)};
  background: ${__COLORS.WHITE};
  transition: ${LEFT_PANEL_TRANSITION};
  position: absolute;
  left: 0;
  height: 100%;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div<{ background: string }>`
  height: 15%;
  background: ${props => props.background};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Body = styled.div<{ isLeftPanelOpen: boolean }>`
  flex: 1;
  overflow-y: scroll;
  padding: ${props =>
    props.isLeftPanelOpen ? `${SPACING * 5}px ${SPACING * 5}` : 0}px;
  transition: inherit;
  text-align: justify;
`;

const Footer = styled.div`
  min-height: 100px;
`;

const TextDelay = styled.div<{ showText: boolean }>`
  animation: ${props =>
    props.showText
      ? css`
          ${fadeInBezier} 5s forwards
        `
      : "none"};
  color: ${__COLORS.PRIMARY};
  font-size: 18px;
`;
type Props = {
  isActive: boolean;
};
export const MemoryLeftPanel = ({ isActive }: Props) => {
  const { isLeftPanelOpen } = useAppState(s => s.memory);
  const [showText, setShowText] = useState(false);
  const { color } = useMemoryColor();

  useEffect(() => {
    if (isLeftPanelOpen && isActive) {
      setShowText(true);
    } else if (!isLeftPanelOpen && isActive) {
      setShowText(false);
    }
  }, [isActive, isLeftPanelOpen]);
  return (
    <Container isLeftPanelOpen={isLeftPanelOpen}>
      <Header background={color}>
        <CloseIcon />
        <MemoryLogo />
      </Header>
      <Body isLeftPanelOpen={isLeftPanelOpen}>
        <TextDelay showText={showText}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            at autem consequuntur excepturi nemo officiis quae quaerat
            voluptatem? Alias autem deleniti harum nam non quo suscipit ullam
            velit vitae! Laborum.
          </div>
          <div>
            Accusantium adipisci alias commodi debitis distinctio ea eaque enim,
            esse, ex explicabo fuga in magni maxime modi molestiae mollitia nemo
            omnis optio perspiciatis quas repellendus sapiente similique,
            tempora totam voluptatibus.
          </div>
          <div>
            Nisi tempora tenetur voluptatibus. Ab ad amet at, aut, delectus
            deserunt in ipsa iure laboriosam libero minima non odio, optio
            praesentium quas quasi qui quos recusandae saepe sequi tempora unde!
          </div>
          <div>
            Blanditiis consectetur id ipsa perspiciatis voluptatum? Aut labore
            minima numquam rem veritatis. Adipisci, aspernatur ducimus ex facere
            fugit inventore magnam magni minima minus, nemo nulla reiciendis
            repellat repudiandae vero voluptas.
          </div>
          <div>
            Aliquid at atque distinctio dolor dolorum eaque fugiat impedit ipsam
            minus natus nobis numquam obcaecati omnis perferendis, porro quod
            repellendus repudiandae tempora? Cupiditate delectus deleniti dicta
            modi molestias perspiciatis quas.
          </div>
          <div>
            Aliquid aspernatur consectetur deserunt distinctio dolor doloremque,
            ea esse facilis hic non nostrum odio officiis pariatur quas quo
            reprehenderit sit ullam. At commodi consequatur dolore facilis ipsam
            nam provident temporibus.
          </div>
          <div>
            A accusamus alias animi architecto autem deserunt dolores ea enim,
            est et eum ex incidunt ipsam ipsum laborum, minus qui, quidem quo
            quos reiciendis repellat totam ut vero voluptas voluptate.
          </div>
          <div>
            A amet culpa cumque, dolor dolores dolorum ducimus eaque earum
            eligendi enim id illum iusto labore officia omnis perferendis
            placeat provident quae quidem quos rem sapiente, suscipit tenetur
            totam veritatis!
          </div>
          <div>
            Adipisci aliquam animi aut autem blanditiis commodi consectetur
            consequatur dolorum eaque enim incidunt inventore labore libero odio
            quidem, tempore veniam. Excepturi explicabo hic laboriosam mollitia
            quas quibusdam sit totam vitae!
          </div>
          <div>
            Ab, aliquid architecto blanditiis delectus dicta eum fugit illum
            incidunt, ipsum laborum maxime nemo numquam officiis optio provident
            quae quam quidem quis reiciendis ut. Odit optio perferendis
            repudiandae ut vitae.
          </div>
          <div>
            Dicta est expedita ratione? Autem dolorum excepturi laborum
            perferendis, qui sint. Aspernatur dolor error ex illo, maxime
            nesciunt quisquam. Assumenda blanditiis corporis eligendi eum ex
            fugiat quisquam reiciendis vero voluptate!
          </div>
          <div>
            Consectetur doloribus est impedit inventore ipsam numquam omnis
            perspiciatis quibusdam quisquam sit. Aspernatur, corporis ducimus,
            earum eius eligendi est facilis fugit harum illo in ipsum
            perferendis placeat sint, soluta ut?
          </div>
          <div>
            Asperiores error fugiat illum nostrum tempora. A adipisci at
            consectetur consequatur culpa labore laborum molestias natus neque
            nesciunt numquam odit, optio pariatur quidem rem repudiandae
            similique soluta tempora unde ut?
          </div>
          <div>
            A earum, eum expedita modi ratione rem, repellat rerum saepe sequi,
            temporibus tenetur ullam. Culpa error nobis placeat recusandae sunt.
            Ab aspernatur, atque earum esse est ipsum iste neque nulla.
          </div>
        </TextDelay>
      </Body>
      <Footer />
    </Container>
  );
};
