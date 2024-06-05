import Spline from "@splinetool/react-spline/next";

export default function Home() {
  const scene =
    process.env.SPLINE_SCENE ||
    "https://prod.spline.design/hLHS1ALE7h2umTGH/scene.splinecode";
  return (
    <main>
      <Spline scene={scene} />
    </main>
  );
}
