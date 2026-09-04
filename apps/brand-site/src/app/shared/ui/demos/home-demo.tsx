import ImageCard from "../card/image-card";
import Hero from "../section/hero";
import DecoText from "../text/deco-text";
import VideoComponent from "../video/video-component";

const HomeDemo = () => {
  return (
    <div>
      <section className="bg-stone-900">
        <div className="absolute top-1 lg:top-12 left-12 z-50">
          <span className="text-4xl text-white">KBM</span>
        </div>
        <div className="absolute top-1 lg:top-6 right-6 z-50">
          <ul>
            <li></li>
          </ul>
        </div>
        <Hero
          section={
          <VideoComponent videoId="boxingVideo" videoUrl="/assets/videos/boxing1.mp4"
            customClass="block h-screen w-screen rounded-3xl object-cover p-0 lg:p-2"
            decoration={
              <div className="m-0 lg:m-2 object-cover pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-black/95 via-black/60 to-transparent" />}
          />
          }
          title={
            <>
              <div className="absolute bottom-6 left-12 z-20 text-white">
                <DecoText
                  backgroundImg="/assets/img/hero.avif"
                  text="You've Got This"
                />
              </div>
              </>
            }
          />
      </section>

      <section className="bg-stone-900">
        <div className="py-24 max-w-6xl min-h-screen gap-10 flex mx-auto flex-col items-center justify-center">
          <h1 className="text-6xl text-stone-100 font-display uppercase text-center">Kickboxing Morocco First Gym of its kind in Agadir.</h1>

          <p className="text-stone-100 text-center lead-0 max-w-3xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>

            <div className="flex gap-4 flex-row">
              <ImageCard img="/assets/img/boxing.jpg" />
              <ImageCard img="/assets/img/muaythai.jpg" />
              <ImageCard img="/assets/img/kickbox.jpg" />
            </div>
        </div>
      </section>

      <div className="bg-stone-900">
        <h2 className="text-center font-display h-24 flex flex-row justify-center align-center items-center text-4xl text-white uppercase font-black">Reach your Full Potential - Reach your Full Potential - Reach your Full Potential - Reach your Full Potential - </h2>
      </div>

      <section className="bg-green-950 flex flex-col items-center justify-center mx-auto">
        <div className="grid grid-cols-3 max-w-5xl my-24 mx-auto gap-12">
          <div className="col-span-1">
            <div>
              <h2 className="text-white text-4xl font-display">The standard chunk of Lorem Ipsum used since 1966</h2>
              <p className="text-white text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
          <div className="col-span-2 flex flex-row gap-4" >
            <ImageCard img="/assets/img/boxing.jpg" />
            <ImageCard img="/assets/img/boxing.jpg" />
          </div>
        </div>
      </section>

      <section className="bg-rose-800">
        <div>
          <span className="truncate text-white text-[500px] font-display uppercase">Power</span>
        </div>
      </section>
    </div>
  );
};

export default HomeDemo;
