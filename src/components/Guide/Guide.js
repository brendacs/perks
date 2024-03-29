import React, { useState } from 'react';
import {
  Tab,
  GuideContainer,
  GuideBox,
  CloseText,
  Heading,
  Table,
  TRow,
  THeader,
  TCell
} from './styles';
import Tag from '../Tag/Tag';
import guide from '../../constants/guide';

const Guide = () => {
  const [showGuide, setShowGuided] = useState(false);

  const toggleGuide = () => {
    setShowGuided(!showGuide);
  }

  return (
    <div>
      <Tab onClick={toggleGuide}>?</Tab>
      { showGuide ? (
        <GuideContainer onClick={toggleGuide}>
          <GuideBox>
            <Heading>Scoring Guide</Heading>
            <p>
              There is no exact way to evaluate benefits.
              However, we try to create rankings that reflect the packages as objectively as possible.
              The criteria by which we rate benefits is charted out below.
              If there are multiple components to a benefit, the scores for each component are averaged.
            </p>
            <Table>
              <TRow>
                <THeader>Category</THeader>
                <THeader><Tag type="Excellent" text="Excellent" /></THeader>
                <THeader><Tag type="Good" text="Good" /></THeader>
                <THeader><Tag type="Fair" text="Fair" /></THeader>
                <THeader><Tag type="Poor" text="Poor" /></THeader>
                <THeader><Tag type="None" text="None" /></THeader>
              </TRow>
              {
                guide.map((item, idx) => {
                  let subList = guide[idx];
                  return (
                    <TRow>
                      {
                        subList.map((item, idx) => {
                          return (
                            <TCell>{item}</TCell>
                          );
                        })
                      }
                    </TRow>
                  );
                })
              }
            </Table>
          </GuideBox>
          <CloseText>Click anywhere to close</CloseText>
        </GuideContainer> ) : null
      }
    </div>
  );
};

export default Guide;
