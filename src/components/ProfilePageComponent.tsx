/**
 * This component renders the Yogo profile/login page within an iframe,
 * positioned to take up the full screen below the navbar.
 */
export function ProfilePage() {
  // The navbar height is h-16 (4rem, 64px), so we use top-16.
  return (
    <div className="fixed left-0 right-0 bottom-0 top-16 z-0">
      <iframe
        src="https://kroensj.yogo.no/"
        title="Yogo Profil"
        className="h-full w-full border-0"
      />
    </div>
  );
}

