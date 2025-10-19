interface ContentProps {
    content?: React.ReactNode;
}

const Content = (props: ContentProps) => {
    const { content } = props;
    return (
        <div className="text-gray-700 p-6 mb-4 border-gray-100 rounded-lg border bg-white shadow-sm">
            {content ?? "Hier steht der Standardinhalt."}
        </div>
    )
}

export default Content