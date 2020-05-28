import React from 'react';

import PropTypes from 'prop-types';
import {
  Container,
  PostItemContainer,
  PostItemInfo,
  PostItemTitle,
  PostItemTag,
  PostItemDescription,
  PostItemDate,
} from './styles';

const PostItem = ({
  slug,
  category,
  background = '#ffb86c',
  date,
  timeToRead,
  title,
  description,
}) => (
  <Container to={`/${slug}`}>
    <PostItemContainer>
      <PostItemTag background={background}>{category}</PostItemTag>
      <PostItemInfo>
        <PostItemDate>
          {date}-{timeToRead} min de leitura
        </PostItemDate>
        <PostItemTitle>{title}</PostItemTitle>
        <PostItemDescription>{description}</PostItemDescription>
      </PostItemInfo>
    </PostItemContainer>
  </Container>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  background: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

PostItem.defaultProps = {
  background: '#ffb86c',
};

export default PostItem;
