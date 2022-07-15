import axios from "axios";
import { useEffect, useState } from "react";
import SingleData from "../../components/SingleData/SingleData";
import "./Home.css";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Navbar from "../../components/HomeNav/HomeNav";
import Myloader from "react-spinners/PuffLoader";

const Home = () => {
  const [allContent, setAllContent] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  let [color, setColor] = useState("grey");

  // const history = useHistory();

  const fetchPopularMovieApi = async () => {
    try {
      const { data } = await axios.get(` 
     https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
      const alldata = data.results;
      const filter = alldata.slice(0, 7);
      setAllContent(filter);
      setIsLoading(true);

      // eslint-disable-next-line
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPopularSeriesApi = async () => {
    try {
      const { data } = await axios.get(` 
      https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
      const alldata = data.results;
      const filter = alldata.slice(0, 7);
      setPopularSeries(filter);
      setIsLoading(true);

      // eslint-disable-next-line
    } catch (error) {
      console.error(error);
    }
  };
  const fetchTopRatedApi = async () => {
    try {
      const { data } = await axios.get(` 
      https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
      const alldata = data.results;
      const filter = alldata.slice(0, 7);
      setTopRated(filter);
      setIsLoading(true);

      // eslint-disable-next-line
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);

    fetchPopularMovieApi();
    fetchPopularSeriesApi();
    fetchTopRatedApi();
    // eslint-disable-next-line
    return () => {
      setPopularSeries();
      setAllContent();
      // setTheTrailers();
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div style={{ marginTop: "-10px" }} className="bg__home">
            <Navbar />
          </div>
          <div className="TreadingHome3 pt-4">
            <div className="title__home">
              <div className="btn__home">
                <h6>
                  Movies On Air &#160;
                  <span style={{ paddingTop: "10px" }}>&#11166;</span>
                </h6>
              </div>
              <div className="view__more">
                <Link to="/all-movies" style={{ textDecoration: "none" }}>
                  <p>View more &#187;</p>
                </Link>
              </div>
            </div>

            <div className="ListContent2">
              {allContent &&
                allContent.map((n) => (
                  <SingleData key={n.id} {...n} mediaType="movie" />
                ))}
            </div>
          </div>
          <hr />
          {/* <div className="TreadingHome3">
            <div className="title__home">
              <div className="btn__home">
                <h6>
                  TvSeries On Air &#160;
                  <span style={{ paddingTop: "10px" }}>&#11166;</span>
                </h6>
              </div>
              <div className="view__more">
                <Link to="/all-series" style={{ textDecoration: "none" }}>
                  <p>View more &#187;</p>
                </Link>
              </div>
            </div>
            <div className="ListContent2">
              {popularSeries &&
                popularSeries.map((n) => (
                  <SingleData key={n.id} mediaType="tv" {...n} />
                ))}
            </div>
          </div> */}
          <hr />
          <div className="TreadingHome3">
            <div className="title__home">
              <div className="btn__home" style={{ width: "160px" }}>
                <h6>
                  Top Rated &#160;
                  <span style={{ paddingTop: "10px" }}>&#11166;</span>
                </h6>
              </div>
              <div className="view__more">
                <Link to="/all-movies" style={{ textDecoration: "none" }}>
                  <p>View more &#187;</p>
                </Link>
              </div>
            </div>
            <div className="ListContent2">
              {topRated &&
                topRated.map((n) => (
                  <SingleData key={n.id} mediaType="movie" {...n} />
                ))}
            </div>
          </div>
        </>
      ) : (
        <div className="major" style={{ height: "600px" }}>
          <Myloader color={color} size={60} />
        </div>
      )}


      <div class="container mt-5" style={{height:'500px'}}>
        <div class="container" style={{height:'500px'}}>
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="position-relative overflow-hidden ps-5 pt-5 h-100" >
                <img class="" src="amg2.jpg" alt="" style={{objectFit: 'cover',width:'100%'}}/>

              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp text-white text-start" data-wow-delay="0.5s">
              <div class="h-100 text-start">
                <h1 class="display-6 mb-4 text-start">Book your movie now</h1>
                <p text-start>You can watch your favorite movie by booking on our website, we will offer you the best ways to book your favorite movie in more than one time and more than a day
                </p>
                <p class="mb-4"> Click on the picture of your favorite movie and choose the available reservation that suits you, then confirm the reservation and do not forget to come to us
                </p>
                <p class="mb-4">You can also add your opinion of the films</p>
                <div class="row g-2 mb-4 pb-2">
                  <div class="col-sm-6">
                    <i class="fa fa-check text-primary me-2"></i>Immediate booking
                  </div>
                  <div class="col-sm-6">
                    <i class="fa fa-check text-primary me-2"></i>More than one book
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
