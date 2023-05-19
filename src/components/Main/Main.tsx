import TechGallery from "@/components/Main/TechGallery";
import TextGrid from "@/components/Main/TextGrid";

export default function Main() {
  return (
    <main className="mb-auto text-lg flex flex-col gap-4">
      <TextGrid />
      <TechGallery />
    </main>
  );
}
