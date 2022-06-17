import PageWrapper, { getStaticProps } from '../components/layout/PageWrapper';
import LayoutCentered from '../components/layout/layoutCentered';

function Home(props)  {
  return (
     <div>
     <LayoutCentered>
        Test content
        </LayoutCentered>
     </div>
  )
}

export { getStaticProps }
export default PageWrapper(Home);
