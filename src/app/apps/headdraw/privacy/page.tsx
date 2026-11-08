import { Prose } from '@/components/Prose'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'HeadDraw Privacy Policy',
  description: 'How HeadDraw handles your data.',
}

export default function HeadDrawPrivacy() {
  return (
    <SimpleLayout
      title="HeadDraw Privacy Policy"
      intro="Effective November 8, 2026. HeadDraw does not collect, sell, or share your personal data."
    >
      <Prose>
        <h2>Data we collect</h2>
        <p>
          None. HeadDraw has no accounts, ads, analytics, or tracking, and it
          does not send any data to the developer or to third parties.
        </p>

        <h2>Camera</h2>
        <p>
          HeadDraw uses the front camera only to detect when your eyes are
          open or closed, so you can lift the pen by blinking. Camera frames
          are processed in real time on your device using Apple’s Vision
          framework. They are never recorded, saved, or transmitted.
        </p>

        <h2>Motion data</h2>
        <p>
          HeadDraw reads head-movement data from compatible headphones to
          steer the on-screen pencil. This data is used on your device while
          you draw and is not stored or transmitted.
        </p>

        <h2>Your drawings</h2>
        <p>
          Drawings are stored on your device. If you turn on iCloud Sync in
          Settings, they are stored in your private iCloud account using
          Apple’s CloudKit. The developer cannot access your iCloud data.
          Apple’s handling of iCloud data is covered by{' '}
          <a href="https://www.apple.com/legal/privacy/">
            Apple’s Privacy Policy
          </a>
          .
        </p>
        <p>
          You can delete drawings in the app at any time. Deleting the app
          removes locally stored drawings; iCloud data can be managed in your
          device’s iCloud settings.
        </p>

        <h2>Sharing</h2>
        <p>
          When you choose to share or export a drawing, it is handed to the
          app or service you pick. That service’s privacy policy applies.
        </p>

        <h2>Children</h2>
        <p>
          HeadDraw does not knowingly collect any information from anyone,
          including children.
        </p>

        <h2>Changes</h2>
        <p>
          If this policy changes, the updated version will be posted on this
          page with a new effective date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Email{' '}
          <a href="mailto:pawanssekhon@gmail.com">pawanssekhon@gmail.com</a>.
        </p>
      </Prose>
    </SimpleLayout>
  )
}
