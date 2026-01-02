import Button from "../../components/atoms/Button/Button";
import ComponentCard from "../../components/ComponentCard";
import "./homepage.style.css";
function HomePage() {
  return (
    <>
      <article className="container max-w-300">
        <h2>
          UI Component{" "}
          <p className="wrapped">
            <span>P</span>
            <span>l</span>
            <span>a</span>
            <span>y</span>
            <span>g</span>
            <span>r</span>
            <span>o</span>
            <span>u</span>
            <span>n</span>
            <span>d</span>
          </p>
        </h2>
        <h4>
          Explore and customize a set of reusable components bullt with React.
        </h4>
      </article>
      <section className="w-screen flex justify-center  bg-red-100  px-10 py-6 ">
        <section className="w-full max-w-300 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-4">
          <ComponentCard title="Button">
            <Button>Click me!</Button>
          </ComponentCard>
          <ComponentCard title="Input">HI</ComponentCard>
          <ComponentCard title="Select">HI</ComponentCard>
          <ComponentCard title="Modal">HI</ComponentCard>
        </section>
      </section>
    </>
  );
}

export default HomePage;
