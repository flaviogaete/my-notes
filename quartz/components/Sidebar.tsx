import ContentTree from "./ContentTree"

export default () => {
  return {
    name: "Sidebar",
    content: (
      <aside className="sidebar">
        <ContentTree />
      </aside>
    ),
  }
}