import React from 'react';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { Container } from './styles';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <Container>
    {!isFirst && (
      <Link to={prevPage}>
        <FiArrowLeft size={16} /> Página anterior
      </Link>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <Link to={nextPage}>
        Próxima página <FiArrowRight size={16} />
      </Link>
    )}
  </Container>
);

export default Pagination;

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
};

Pagination.defaultProps = {
  prevPage: '',
  nextPage: '',
};
