import "@/assets/styles/globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "PropertyMarketplace | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
}

const MainLayout = ({ children }) => {
  return (
    <html lang="us">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}

export default MainLayout
