import Page from '../components/Page';
import Footer from '../components/Footer';

export default function IndexPage() {
  return (
    <>
      <Page propTest="This is a prop test on the index page Page component">
        <code>Above the line is Header component</code>
      </Page>
      <body>
        <h2>Creating my first page</h2>
        <p>Hello Patrick!</p>
        <p>Let's get started!</p>
        <h2>We are creating an export function and naming it IndexPage()</h2>
        <p>Then we are returning a div with some text in it.</p>
        <h3>Sweet!</h3>
        <h3>Next.js rendering</h3>
        <ul>
          <li>Server</li>
          <li>Client</li>
          <li>
            Static - Prerendering. Docusaurous does a lot of this kind of thing.
          </li>
        </ul>
      </body>
      <Footer propTest="This is a prop test on the index page Footer component">
        <code>Below the line is the Footer component</code>
      </Footer>
    </>
  );
}
