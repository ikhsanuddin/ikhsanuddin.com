import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline Connection",
};

export default function OfflineFallback() {
  return (
    <main className="min-h-screen flex-col flex items-center justify-center">
      <h1 className="text-4xl">Offline Connection</h1>
      <p>It seems you are offline, please try agin if the connection is getting better</p>
    </main>
  );
}
