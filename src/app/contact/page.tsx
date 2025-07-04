import ContactsPage from "@/components/demo/ContactsPage";
import Newsletter from "@/components/demo/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  return (
    <>
      <div className="mt-16">
        {/* <TextHoverEffect text="ONAY" /> */}
        <ContactsPage />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}
