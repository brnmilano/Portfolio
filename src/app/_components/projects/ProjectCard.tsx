import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/Card";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  projectUrl: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <Card title={title} description={description} href={projectUrl}>
      <figure
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          borderRadius: "0.5rem",
        }}
      >
        <Image
          fill
          src={imageUrl}
          alt={title}
          sizes="(max-width: 768px) 100vw, 384px"
          style={{ objectFit: "cover" }}
        />
      </figure>
    </Card>
  );
}
