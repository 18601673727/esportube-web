import dynamic from "next/dynamic";

export const metadata = {
  title: 'Esportube Admin',
  description: 'Welcome to Esportube Admin!',
}

// const uri = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
// const secret = process.env.NEXT_PUBLIC_AUTH_TOKEN;

const App = dynamic(() => import("./page"), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <App />
      </body>
    </html>
  )
}
