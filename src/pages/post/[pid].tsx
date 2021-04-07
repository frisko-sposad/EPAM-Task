import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Container, HeaderContainer } from '../../components/Header/Header.styled';

const Post: FC = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <HeaderContainer>
        <Container>
          <p>1234</p>
        </Container>
      </HeaderContainer>
      <p>Post: {pid}</p>;
    </Layout>
  );
};

export default Post;
