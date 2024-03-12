import '../../../Styles/Client/HomePage/Blog_Home.css'
const Blog_Home = () => {
  return (<>
    <div className="Blog_Home">
      <div className="blog">
        <div className="block_blog">
          <span>blog</span>
          <h6 />
          <div className="item_blog">
            <img src="../../src/assets/Images/item_shop1.png" alt='' />
            <div className="about_item_shop">
              <div className="infor_item_shop">
                <span>the ultimate sofa buying guide </span>
                <p>The versatility of our living space is more crucial than ever. But
                  buying a sofa might be a difficult undertaking. Your needs and the
                  size of your living area will determine everything, However, don’t
                  worry, were are here to help you</p>
                <div className="btn_about">
                  <a href="#">about</a>
                  <button><img src="../../src/assets/Images/next.png" alt='' /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="item_blog">
            <img src="../../src/assets/Images/item_shop2.png" alt='' />
            <div className="about_item_shop">
              <div className="infor_item_shop">
                <span>a bedroom must have some thing like this </span>
                <p>Your level of comfort when geting into and out of bed can be greatly influenced by the
                  bed frame you choose. It may significantly affect how want your bedroom to feet and look
                </p>
                <div className="btn_about">
                  <a href="#">about</a>
                  <button><img src="../../src/assets/Images/next.png" alt='' /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="item_blog">
            <img src="../../src/assets/Images/item_shop3.png" alt='' />
            <div className="about_item_shop">
              <div className="infor_item_shop">
                <span>why is a tv console a must in every house
                </span>
                <p>People do a lot of research to make sure they purchase the ideal
                  televisoin. And like the rest of us, you want to keep that gorgeous flat srceen in your
                  living or bedroom on a table or stand</p>
                <div className="btn_about">
                  <a href="#">about</a>
                  <button><img src="../../src/assets/Images/next.png" alt='' /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>)
}

export default Blog_Home