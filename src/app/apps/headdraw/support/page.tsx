import Link from 'next/link'

import { Prose } from '@/components/Prose'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'HeadDraw Support',
  description: 'Help and contact for HeadDraw.',
}

export default function HeadDrawSupport() {
  return (
    <SimpleLayout
      title="HeadDraw Support"
      intro="Need help or found a bug? Email pawanssekhon@gmail.com and I’ll get back to you."
    >
      <Prose>
        <p>
          <a href="mailto:pawanssekhon@gmail.com?subject=HeadDraw%20Support">
            Email support
          </a>
        </p>

        <h2>FAQ</h2>

        <h3>Which headphones work?</h3>
        <p>
          AirPods Pro, AirPods Max, AirPods (3rd generation and later), Beats
          Fit Pro and Beats Studio Pro. They must be connected to the device
          running HeadDraw.
        </p>

        <h3>The cursor doesn’t move.</h3>
        <p>
          Make sure your headphones are connected and in your ears, and that
          Motion &amp; Fitness access is allowed for HeadDraw in Settings →
          Privacy &amp; Security. Then re-center your head from the setup
          screen.
        </p>

        <h3>Blinks aren’t detected.</h3>
        <p>
          Allow camera access in Settings → HeadDraw, face the front camera in
          good lighting, and keep your face in frame. You can retest blink
          detection during setup.
        </p>

        <h3>My drawings aren’t syncing.</h3>
        <p>
          Check that iCloud Sync is turned on in HeadDraw’s Settings and that
          you’re signed in to iCloud with the same Apple Account on each
          device.
        </p>

        <h3>Is my camera feed recorded?</h3>
        <p>
          No. Blink detection runs entirely on your device and nothing is
          saved or sent. See the{' '}
          <Link href="/apps/headdraw/privacy/">Privacy Policy</Link>.
        </p>
      </Prose>
    </SimpleLayout>
  )
}
