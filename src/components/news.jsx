import styled from "styled-components";

const StyledBoxImage = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    @media (max-width: 750px) {
        grid-template-columns: auto;
    }
`;

export const News = (props) => {
    return (
        <div
            id="news"
            className="text-center"
            style={{ background: "rgb(239, 243, 243)", margin: "20px 0px" }}
        >
            <div className="container">
                <div className="section-title" style={{ margin: "30px 0px" }}>
                    <h2>Novedades 2023</h2>
                </div>
                <div className="row">
                    <StyledBoxImage>
                        {props.data
                            ? props.data.map((d, i) => (
                                  <div key={`${d.title}-${i}`}>
                                      <ImageV2
                                          title={d.title}
                                          largeImage={d.largeImage}
                                          smallImage={d.smallImage}
                                      />
                                  </div>
                              ))
                            : "Loading..."}
                    </StyledBoxImage>
                </div>
            </div>
        </div>
    );
};

const ImageV2 = ({ title, largeImage, smallImage }) => {
    return (
        <div>
            <a href={largeImage} title={title}>
                <img src={smallImage} className="img-responsive" alt={title} />{" "}
            </a>
        </div>
    );
};
