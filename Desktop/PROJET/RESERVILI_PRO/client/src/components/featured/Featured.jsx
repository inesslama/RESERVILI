import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Hammamet,Tozeur,Djerba"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/388737833.jpg?k=7022db7958a444efe0338118eedd0c5cd483fe03e410404bf9635f3db562f7fa&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hammamet</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.entreprises-magazine.com/wp-content/uploads/2019/01/Tozeur.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Tozeur</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/f2/fd/9e/djerba-plaza-by-night.jpg?w=600&h=400&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Djerba</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
