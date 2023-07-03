import { ParallaxBanner } from "react-scroll-parallax";

interface titleProps {
  title: string;
  image: string;
}

function PageTitle({ title, image }: titleProps) {
  return (
    <ParallaxBanner
      className="titleBanner"
      layers={[
        {
          image: image,
          speed: -8,
        },
      ]}
    >
      <div>
        <h1>{title}</h1>
      </div>
    </ParallaxBanner>
  );
}

export { PageTitle };
