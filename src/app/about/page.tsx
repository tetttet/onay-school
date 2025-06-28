import { HeroParallaxDemo } from "@/components/demo/HeroParallaxDemo";
import { TimelineDemo } from "@/components/demo/TimelineDemo";

export default function About() {
  return (
    <>
      <HeroParallaxDemo />
      <div className="-mt-96">
      <TimelineDemo />
      </div>
    </>
  );
}
