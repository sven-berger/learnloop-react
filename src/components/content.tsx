interface ContentProps {
  content?: React.ReactNode;
  children?: React.ReactNode;
}

const Content = ({ content, children }: ContentProps) => {
  return (
    <div className="text-gray-700 p-6 mb-4 border-gray-100 rounded-lg border bg-white shadow-sm">
      {children ?? content ?? "Hier steht der Standardinhalt."}
    </div>
  );
};

export default Content;