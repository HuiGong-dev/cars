import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from '../../components/navbar';
import { TopSection } from './topSection';
import { BookCard } from '../../components/bookCard';
import { Marginer } from '../../components/marginer';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
`}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="2em" />
      <BookCard />
    </PageContainer>
  );
}
