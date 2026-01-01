import { createFileRoute } from '@tanstack/react-router'
import Blogs from './-components/Blog'

export const Route = createFileRoute('/blogs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Blogs />
}
