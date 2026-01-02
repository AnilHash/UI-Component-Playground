import type { PropsWithChildren } from "react";
import { Link } from "react-router";
type ComponentCardProps = {
  title: string;
};
const ComponentCard = ({
  title,
  children,
}: PropsWithChildren<ComponentCardProps>) => {
  return (
    <Link to={`/components/${title.toLowerCase()}`}>
      <article className="h-60 bg-blue-100 rounded-md p-4  shadow-xl shadow-black-200/50">
        {title}
        <div className="bg-red-200">{children}</div>
      </article>
    </Link>
  );
};

export default ComponentCard;
