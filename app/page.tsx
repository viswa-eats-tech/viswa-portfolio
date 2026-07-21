import { OSProvider } from "@/lib/os-context"
import { OSRoot } from "@/components/os/os-root"

export default function Page() {
  return (
    <OSProvider>
      <OSRoot />
    </OSProvider>
  )
}
