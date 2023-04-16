export const Image = ({ title, largeImage, smallImage, i }) => {
   return (
      <div className="portfolio-item">
         <div
            className="hover-bg"
            data-toggle="modal"
            data-target={`#myModal${i}`}
            style={{ cursor: "pointer" }}
         >
            <div className="hover-text">
               <h4>{title}</h4>
            </div>
            <img src={smallImage} className="img-responsive" alt={title} />
         </div>

         <div
            class="modal fade"
            id={`myModal${i}`}
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            style={{ opacity: 1, marginTop: "100px" }}
         >
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header" style={{ justifyContent: "end" }}>
                     <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        style={{ marginTop: "20px" }}
                     >
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="modal-body">
                     <img
                        src={smallImage}
                        className="img-responsive"
                        alt={title}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
