import { createFileRoute } from '@tanstack/react-router'
import Courses from './-components/Course'

export const Route = createFileRoute('/courses/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Courses />
}
