import { info } from "../../data/info";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ProjectCardProps {
  item: (typeof info)["projects"][number] | (typeof info)["publications"][number];
  type: "projects" | "publications";
}

export default function ProjectCard(props: ProjectCardProps) {
  const { item, type } = props;

  return (
    <a
      href={item.link}
      rel="noreferrer"
      className={`flex flex-col items-center justify-between border border-gray-300 ${
        type === "projects"
          ? "bg-gray-100 dark:bg-dk-primary rounded-lg h-full p-4"
          : "bg-gray-100 dark:bg-dk-primary rounded-md p-4"
      } hover:shadow-lg transition-shadow`}
      aria-label={`Title of the ${type}: ${item.title}, click to open the page`}
    >
      {type === "projects" ? (
        <>
          <div className="flex-1 flex flex-col justify-between items-center p-6">
            <div className="text-center">
              <p className="text-sm font-medium text-text dark:text-dk-text">
                {item.title}
              </p>
              <p className="text-xl font-semibold text-gray-900 mt-2">
                {item.description}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center w-full">
              <div className="flex flex-wrap space-x-2">
                {item.tech.map((tech) => (
                  <span
                    className="text-accent dark:text-dk-accent text-xs font-semibold"
                    key={tech}
                  >
                    #{tech}
                  </span>
                ))}
              </div>
              <p className="ml-auto text-sm font-medium text-gray-900">
                {item.date}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full h-48 overflow-hidden">
            <LazyLoadImage
              className="w-full h-full object-cover"
              src={item.img_path}
              alt={item.img_alt}
              effect="blur"
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-lg font-semibold text-text dark:text-dk-text">
            {item.title}
          </p>
          <p className="text-sm text-gray-500 mt-2">{item.date}</p>
        </div>
      )}
    </a>
  );
}