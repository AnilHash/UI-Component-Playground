import { Link } from "react-router";
import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";
import Modal from "../../components/atoms/Modal/Modal";
import Select from "../../components/atoms/Select/Select";
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
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link to="/components/button">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition">
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Button
                </div>
                <Button>Click me!</Button>
              </div>
            </Link>
            <Link to="/components/input">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition">
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Input
                </div>
                <Input />
              </div>
            </Link>
            <Link to="/components/select">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition">
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Select
                </div>
                <Select
                  options={[
                    {
                      value: "",
                      label: "Select Fruit",
                      disabled: true,
                      selected: true,
                    },
                    { value: "orange", label: "Orange" },
                    { value: "apple", label: "Apple" },
                  ]}
                />
              </div>
            </Link>
            <Link to="/components/button">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition">
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  Modal
                </div>{" "}
                <Modal isOpen={false} onClose={() => {}}>
                  Modal
                </Modal>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
