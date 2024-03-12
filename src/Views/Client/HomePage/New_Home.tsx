import { useContext } from 'react';
import '../../../Styles/Client/HomePage/New_Home.css';
import RenderListProducts from '../RenderListProducts/RenderListProducts';
import { contextProvider } from '../../../ContextProvide/DataProvider';

const New_Home = () => {
  const { ListProductsNew } = useContext(contextProvider);
  return (<>
    <div className="New_Home">
      <div className="new">
        <div className="block_new">
          <span>new</span>
          <h6 />
          <RenderListProducts
            ListProductsNew={ListProductsNew} />
          <h5 />
        </div>
      </div>
    </div>
  </>)
}

export default New_Home