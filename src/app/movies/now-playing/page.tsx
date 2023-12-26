import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Now Playing`,
  openGraph: {
    title: `Filter`,
  },
  twitter: {
    title: `Filter`,
  },
};

function NowPlaying() {
  return (
    <div>NowPlaying</div>
  )
}

export default NowPlaying