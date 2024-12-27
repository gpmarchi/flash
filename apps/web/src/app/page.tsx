import { colors } from '@repo/tokens/colors'

export default function Home() {
  return (
    <div>
      <pre>{JSON.stringify(colors, null, 2)}</pre>
    </div>
  )
}
