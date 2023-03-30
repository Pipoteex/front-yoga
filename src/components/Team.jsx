export const Team = (props) => {
    return (
        <div id="equipo" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Conoce al equipo</h2>
                </div>
                <div id="row">
                    {props.data
                        ? props.data.map((d, i) => (
                              <div
                                  key={`${d.name}-${i}`}
                                  className="col-md-3 col-sm-6 team"
                              >
                                  <div
                                      className="thumbnail"
                                      style={{ border: "none" }}
                                  >
                                      {" "}
                                      <img
                                          src={d.img}
                                          alt="Profesora Instituto Sol Naciente"
                                          className="team-img"
                                          style={{ maxHeight: "300px" }}
                                      />
                                      <div className="caption">
                                          <h4>{d.name}</h4>
                                          <p>{d.job}</p>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
};
