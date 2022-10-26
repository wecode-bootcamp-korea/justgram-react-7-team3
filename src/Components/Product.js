export const Product = (props) => {

    // "p_img": "https://t1.daumcdn.net/friends/prod/product/20201020152905998_8809721505922_AW_00.jpg?type=thumb&opt=R103x103@2xa",
    // "p_name": "구름폭신필로우_무지",
    // "p_price":
  if (props.product.length>0) {
    if (props.type === "list") {
      return (
        <ul className="p-8">
            {props.product.map((product)=>(
            <li key={product.id} className="border-t py-4">
            <img
              className="w-28 text-left inline-block mr-o"
              alt="item"
              src={product.p_img}
            />
            <div className=" float-right py-2 mr-7">
              <p className="text-gray-500 font-500">{product.p_name}</p>
              <p className="text-left font-bold text-lg">{product.p_price}</p>
              <button>
                <img
                  alt="btn"
                  src="https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-pink-3.png"
                  width="37px"
                />
              </button>
            </div>
          </li>
           ))}
        </ul>
      );
    } else if (props.type === "card") {
      return (
        <ul className="p-8">
            {props.product.map((product)=>(
                     
          <li key={product.id} className="w-32 inline-block ml-7">
            <img
              width="140px"
              alt="item"
              src={product.p_img}
            />
            <div className="content">
              <p className="mt-3 text-gray-500 font-500 inline-block">
              {product.p_name}
              </p>
              <p className="text-left font-bold text-lg inline mr-3">
              {product.p_price}
              </p>
              <button>
                <img
                  alt="btn"
                  src="https://t1.kakaocdn.net/friends/new_store/2.0/common/basket-pink-3.png"
                  width="37px"
                />
              </button>
            </div>
          </li>
           ))}
        </ul>
      );
    }
  }
};
