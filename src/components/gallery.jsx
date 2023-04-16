import { Image } from "./image";

export const Gallery = (props) => {
   return (
      <div id="galeria" className="text-center">
         <div className="container">
            <div className="section-title" style={{ margin: "30px 0px" }}>
               <h2>Galeria de imagenes</h2>
               <p>Algunas imagenes de nuestro dia a dia.</p>
            </div>
            <div className="row">
               <div className="portfolio-items">
                  {props.data
                     ? props.data.map((d, i) => (
                          <div
                             key={`${d.title}-${i}`}
                             className="col-sm-6 col-md-4 col-lg-4"
                          >
                             <Image
                                title={d.title}
                                largeImage={d.largeImage}
                                smallImage={d.smallImage}
                                i={i}
                             />
                          </div>
                       ))
                     : "Loading..."}
               </div>
            </div>
         </div>
      </div>
   );
};
