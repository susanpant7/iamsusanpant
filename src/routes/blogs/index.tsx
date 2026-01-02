import { createFileRoute } from '@tanstack/react-router'
import Blogs from './-components/BlogContainer'

export const Route = createFileRoute('/blogs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Blogs />
}
