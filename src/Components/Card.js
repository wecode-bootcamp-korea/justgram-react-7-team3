import { Status } from "./Status";
import { Product } from "./Product";
export const Card=(props)=>{

    return (
        <article className="text-left align-text-top w-96 h-fit rounded-lg shadow-xl my-10 mx-10 inline-block ">
            <img 
            className="rounded-t-lg"
              alt="cardImg"
              src={props.Img}
            />
          <div className="p-7 "> 
          <Status status={props.tag}/>
            <h3 className="text-3xl mt-2 font-extrabold">{props.title}</h3>
            <div>
              <p className="mt-3 text-gray-400 font-semibold">
            {props.desc}
              </p>
            </div>
          </div>
          <Product product={props.product} type={props.type}/>
        </article>
   );
}