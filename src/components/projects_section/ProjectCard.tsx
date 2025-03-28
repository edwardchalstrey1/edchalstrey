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
    <div
      className={`flex flex-col items-center justify-between border border-gray-300 ${
        type === "projects"
          ? "bg-gray-100 dark:bg-dk-primary rounded-lg min-h-full p-4"
          : "bg-gray-100 dark:bg-dk-primary rounded-md min-h-full p-4"
      } hover:shadow-lg transition-shadow`}
      aria-label={`Title of the ${type}: ${item.title}`}
    >
      {type === "projects" ? (
        <>
          <div className="flex-1 flex flex-col justify-between items-center p-6">
            <div className="text-center">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
                aria-label={`Click to open the page for ${item.title}`}
              >
                {item.title}
              </a>
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
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                href={item.github_link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-500 hover:underline"
                aria-label={`Click to open the GitHub page for ${item.title}`}
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-full overflow-hidden">
            <LazyLoadImage
              className="w-full h-auto object-cover"
              src={item.img_path}
              alt={item.img_alt}
              effect="blur"
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <h3>{item.published_in}</h3>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold text-text dark:text-dk-text mt-2 hover:underline"
            aria-label={`Click to open the page for ${item.title}`}
          >
            {item.title}
          </a>
          <p className="text-sm text-gray-500 mt-2">{item.date}</p>
        </div>
      )}
    </div>
  );
}