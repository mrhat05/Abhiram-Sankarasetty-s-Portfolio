import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  technologies?: string[];
  status?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologies,
  status,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f88b] transition-all duration-300 h-full flex flex-col"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          {status && (
            <span className="px-2 py-1 text-xs font-medium text-green-400 bg-green-900/20 border border-green-500/30 rounded-full">
              {status}
            </span>
          )}
        </div>
        <p className="mt-2 text-gray-300 text-sm leading-relaxed flex-grow">{description}</p>
        {technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-purple-400 bg-purple-900/20 border border-purple-500/30 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
