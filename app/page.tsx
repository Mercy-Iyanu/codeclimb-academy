import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Approach from "@/components/Approach";
import Founder from "@/components/Founder";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Courses />
      <Approach />
      <Founder />
      <Testimonials />
      <FAQ />
      <RegisterForm />
      <Footer />
    </main>
  );
}
