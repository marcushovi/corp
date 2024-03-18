import performanceImg from "../../../public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformencePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="welding"
      title="We serve professional applications"
    />
  );
}
