import React from "react";
import NavBar from "../components/NavBar";

export default function WatchVideo() {
  return (
    <div>
      <NavBar />
      <h1 className="video-title">Title of the Video</h1>
      <div className="center-video">
        <video width="60%" controls>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/abhyas-4663e.appspot.com/o/videos%2Fyt1s.com%20-%20Alec%20Benjamin%20%20Let%20Me%20Down%20Slowly%20Lyrics.mp4?alt=media&token=6b93b6d8-e59e-471e-9374-066d67ec951d"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3 className="video-title" style={{ marginTop: "2.2%" }}>
        description:
      </h3>
      <div className="video-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non feugiat
        justo, ut pulvinar dolor. In at quam tortor. Fusce molestie urna lectus,
        congue vulputate justo mattis sed. Donec ullamcorper quam vitae nunc
        imperdiet, non pretium nisi ultricies. Proin feugiat a ex eu
        ullamcorper. Vestibulum fermentum sem nibh, nec molestie sem facilisis
        eu. Duis maximus felis ligula. Sed fringilla feugiat facilisis. Praesent
        malesuada, orci at facilisis ullamcorper, mauris felis hendrerit tellus,
        a dictum magna turpis sed nunc. Etiam sollicitudin pharetra libero,
        mollis tincidunt odio accumsan nec. Donec scelerisque ex laoreet
        facilisis varius. Integer non pretium mauris. Vivamus congue eros eu
        augue lacinia, nec vestibulum augue pharetra. Vivamus tempus erat vel
        leo volutpat rutrum. Etiam in fermentum nunc. Quisque consequat ante
        eget mauris venenatis efficitur. Mauris placerat, augue ac condimentum
        sagittis, sapien enim rutrum purus, in commodo nisl ipsum non libero.
        Quisque elementum enim sed luctus ullamcorper. Phasellus dignissim
        ultricies neque at varius. Pellentesque quis convallis orci, ac
        condimentum est. Pellentesque in libero ante. Aliquam congue vehicula
        nisi sit amet convallis. Aliquam sit amet varius libero. Nulla accumsan
        lacus ligula, ut eleifend leo maximus vitae. Fusce in ligula posuere,
        mattis nibh ut, facilisis tellus. Mauris nisl tortor, rutrum at dapibus
        non, semper at orci. Aliquam ut sodales turpis.
      </div>
    </div>
  );
}
