import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Proyects } from "./Proyects";
import { Us } from "./Us";

export default function Header() {
  return (
    <>
    <Hero />
    <Us />
    <Proyects />
    <Contact />
    </>
  );
}