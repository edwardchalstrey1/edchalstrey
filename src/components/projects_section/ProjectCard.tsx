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
      className={`flex flex-col items-center justify-center border border-gray-300 ${
        type === "projects"
          ? "bg-gray-100 dark:bg-dk-primary rounded-lg h-full p-4"
          : "bg-gray-100 dark:bg-dk-secondary rounded-md p-4"
      }`}
    >
      {type === "projects" ? (
        <>
          <div className="flex-shrink-0 w-full">
            <a
              href={item.link}
              rel="noreferrer"
              aria-label={item.img_alt + ", click to open the page"}
            >
              <LazyLoadImage
                className="h-50 w-full object-cover"
                src={item.img_path}
                alt={item.img_alt}
                width="100%"
                effect="blur"
              />
            </a>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 dark:bg-dk-primary p-6">
            <div className="flex-1 text-center">
              <p className="text-sm font-medium text-text dark:text-dk-text">
                <a
                  href={item.link}
                  rel="noreferrer"
                  className="hover:underline"
                  aria-label="Title of the item, click to open the page"
                >
                  {item.title}
                </a>
              </p>
              <a
                href={item.link}
                rel="noreferrer"
                className="block mt-2"
                aria-label="Description of the item, click to open the page"
              >
                <p className="text-xl font-semibold text-gray-900">
                  {item.description}
                </p>
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center">
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
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href={item.link}
            rel="noreferrer"
            className="flex flex-col items-center justify-center text-center border border-gray-300 bg-gray-100 dark:bg-dk-primary rounded-md p-4 hover:shadow-lg transition-shadow"
            aria-label={`Title of the publication: ${item.title}, click to open the page`}
          >
            <p className="text-lg font-semibold text-text dark:text-dk-text hover:underline">
              {item.title}
            </p>
            <p className="text-sm text-gray-500 mt-2">{item.date}</p>
          </a>
        </div>
      )}
    </div>
  );
}