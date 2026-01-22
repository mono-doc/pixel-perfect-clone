import Sidebar from "@/components/Sidebar";

interface LearnPlaceholderProps {
  title: string;
}

const LearnPlaceholder = ({ title }: LearnPlaceholderProps) => {
  return (
    <main className="flex max-w-[1600px] mx-auto px-6">
      <Sidebar activeItem={title} />
      <div className="flex-1 py-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
          <p className="mt-2 text-muted-foreground">Placeholder page for {title}.</p>
        </div>
      </div>
    </main>
  );
};

export default LearnPlaceholder;
