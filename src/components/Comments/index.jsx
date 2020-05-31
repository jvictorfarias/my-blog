import React from 'react';

import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import { Container, Title } from './styles';

const Comments = ({ url, title }) => {
  const fullURL = `${process.env.APP_URL}/${url}`;

  return (
    <Container>
      <Title>Comentários</Title>
      <ReactDisqusComments
        shortname={process.env.SHORT_NAME}
        identifier={fullURL}
        title={title}
        url={fullURL}
      />
    </Container>
  );
};

export default Comments;

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
