import styled from "styled-components";

const StyledImg = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   img {
      width: 70%;
      border-radius: 20%;
   }
`;

export const Contact = (props) => {
   return (
      <div>
         <div id="contact">
            <div className="container">
               <div className="col-md-8">
                  <StyledImg className="row">
                     <img src="img/imagenYoga.jpg" alt="yoga" />
                  </StyledImg>
               </div>
               <div className="col-md-3 col-md-offset-1 contact-info">
                  <div className="contact-item">
                     <h3>Información de contacto</h3>
                     <p>
                        <span>
                           <i className="fa fa-map-marker"></i> Dirección
                        </span>
                        {props.data ? props.data.address : "loading"}
                     </p>
                  </div>
                  <div className="contact-item">
                     <p>
                        <span>
                           <i className="fa fa-phone"></i> Teléfono
                        </span>{" "}
                        {props.data ? props.data.phone : "loading"}
                     </p>
                  </div>
                  <div className="contact-item">
                     <p>
                        <span>
                           <i className="fa fa-envelope-o"></i> Email
                        </span>{" "}
                        {props.data ? props.data.email : "loading"}
                     </p>
                  </div>
               </div>
               <div className="col-md-12">
                  <div className="row">
                     <div className="social">
                        <ul>
                           <li>
                              <a
                                 href={props.data ? props.data.facebook : "/"}
                                 target="_blank"
                              >
                                 <i className="fa fa-facebook"></i>
                              </a>
                           </li>
                           <li>
                              <a
                                 target="_blank"
                                 href={props.data ? props.data.instagram : "/"}
                              >
                                 <i className="fa fa-instagram"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="footer">
            <div className="container text-center">
               <p>&copy; 2022 Instituto Sol Naciente :)</p>
            </div>
         </div>
      </div>
   );
};
