import propTypes from 'prop-types';

export default function Page({ children, propTest }) {
  return (
    <header>
      <h1>H1 inside a header</h1>
      <p>{propTest}</p>
      {children}
      <hr />
    </header>
  );
}

// Not necessary unless using TypeScript
Page.propTypes = {
  children: propTypes.any,
  propTest: propTypes.string,
};
