import PropTypes from 'prop-types';

export default function Footer({ children, propTest }) {
  return (
    <footer>
      <hr />
      {children}
      <h2>H2 inside a Footer</h2>
      <p>{propTest}</p>
    </footer>
  );
}

// Not necessary unless using TypeScript
Footer.propTypes = {
  children: PropTypes.any,
  propTest: PropTypes.string,
};
