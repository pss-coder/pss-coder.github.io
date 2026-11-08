import Link from 'next/link'

import { Prose } from '@/components/Prose'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'HeadDraw',
  description:
    'A playful, hands-free drawing app for iPhone and Mac. Steer with your head, blink to lift the pen.',
}

export default function HeadDraw() {
  return (
    <SimpleLayout
      title="HeadDraw: draw with your head."
      intro="HeadDraw turns compatible AirPods and Beats headphones into a pencil. Tilt and turn your head to steer the line, keep your eyes open to draw, and close them to lift the pen. No hands needed."
    >
      <Prose>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Free mode:</strong> draw anything, then double-tap the
            canvas when you’re done.
          </li>
          <li>
            <strong>Game mode:</strong> draw a cat in 15 seconds using only
            your head.
          </li>
          <li>
            <strong>Guided setup:</strong> connect headphones, center your
            head, and test blink detection.
          </li>
          <li>
            <strong>Gallery:</strong> save, share, and export your doodles as
            a ZIP.
          </li>
          <li>
            <strong>iCloud sync</strong> across your devices, or keep
            everything on your device.
          </li>
        </ul>
        <h2>Compatible headphones</h2>
        <p>
          AirPods Pro, AirPods Max, AirPods (3rd generation and later), Beats
          Fit Pro and Beats Studio Pro. A front camera is needed for blink
          controls.
        </p>
        <p>
          <Link href="/apps/headdraw/support/">Support</Link> ·{' '}
          <Link href="/apps/headdraw/privacy/">Privacy Policy</Link>
        </p>
      </Prose>
    </SimpleLayout>
  )
}
