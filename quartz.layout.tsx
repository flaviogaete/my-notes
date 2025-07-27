import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponent, QuartzComponentProps } from "./quartz/components/types"
import React from "react"

// Define your custom external links component
const ExternalLinksComponent: QuartzComponent = ({ tree, fileData, allFiles }: QuartzComponentProps) => {
  return (
    <div className="external-link-section">
      <hr/>
      <p><strong>More Resources:</strong></p>
      <ul>
          <li><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a></li>
          <li><a href="https://another-site.org" target="_blank" rel="noopener noreferrer">Another External Site</a></li>
          {/* Add more <li> elements for additional links */}
      </ul>
    </div>
  )
}

// components shared across all pages (like navigation bar or footer)
export const sharedLayout: SharedLayout = {
  head: Component.Head(),
  header: [], // Reverting to empty array to satisfy QuartzComponent[] type
  footer: Component.Footer(), // Assign a single QuartzComponent to satisfy the type
  afterBody: [], // Reverting to empty array to satisfy QuartzComponent[] type
}

// components for pages that display a single page (e.g. a note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({ title: "" }), // Your existing Explorer without a title
    ExternalLinksComponent, // Your custom component
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    Component.TableOfContents(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({ title: "" }), // Your existing Explorer without a title
    ExternalLinksComponent, // Your custom component
  ],
  right: [],
}