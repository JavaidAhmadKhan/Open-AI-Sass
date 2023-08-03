import Footer from "@/components/Footer"
import LandingContent from "@/components/LandingContent"
import LandingHero from "@/components/LandingHero"
import LandingNavbar from "@/components/LandingNavbar"

const LandingPage = () => {
    return (
        <div className="h-full">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
            <Footer />
        </div>
    )
}

export default LandingPage