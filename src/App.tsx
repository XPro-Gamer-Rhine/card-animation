import Card from "./card";
import ParallaxCard from "./parallax";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-12 p-8">
        <ParallaxCard image="https://m.media-amazon.com/images/I/81s+jxE5KEL._AC_SL1500_.jpg" />
        <ParallaxCard
          duration={1.1}
          image="https://m.media-amazon.com/images/I/815UHUkeM-L._AC_UF1000,1000_QL80_.jpg"
        />
      </div>
      <ParallaxCard
        image="https://m.media-amazon.com/images/I/71aoeOhdNnL._AC_SL1000_.jpg"
        width={"full"}
      />
      <div className="flex space-x-12 p-8">
        <ParallaxCard image="https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjNhMDAzMTEzN2I3Yjc2MzMzMzI2MGY3LXRyZW5kcy1pbnRlcm5hdGlvbmFsLWF0dGFjay1vbi10aXRhbi5qcGc.jpg" />
        <ParallaxCard
          duration={1.1}
          image="https://images-cdn.ubuy.co.in/634d173e97eabe50c97ffdbe-a-silent-voice-textless-movie-anime.jpg"
        />
      </div>
      <ParallaxCard
        image="https://m.media-amazon.com/images/I/71aoeOhdNnL._AC_SL1000_.jpg"
        width={"full"}
      />
      <div className="flex space-x-12 p-8">
        <ParallaxCard image="https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjNhMDAzMTEzN2I3Yjc2MzMzMzI2MGY3LXRyZW5kcy1pbnRlcm5hdGlvbmFsLWF0dGFjay1vbi10aXRhbi5qcGc.jpg" />
        <ParallaxCard
          duration={1.1}
          image="https://images-cdn.ubuy.co.in/634d173e97eabe50c97ffdbe-a-silent-voice-textless-movie-anime.jpg"
        />
      </div>
    </div>
  );
}

export default App;
