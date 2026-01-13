import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Send, Car, Plane, Droplet, Zap, Truck, Package } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { getIndustryBySlug, Industry, Product } from "@/data/industries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

import automotiveImg from "@/assets/industry-automotive.jpg";
import aerospaceImg from "@/assets/industry-aerospace.jpg";
import powerImg from "@/assets/industry-power.jpg";
import componentsImg from "@/assets/industry-components.jpg";
import railImg from "@/assets/industry-rail.jpg";

const iconMap: { [key: string]: React.ReactNode } = {
  car: <Car className="h-8 w-8" />,
  plane: <Plane className="h-8 w-8" />,
  droplet: <Droplet className="h-8 w-8" />,
  zap: <Zap className="h-8 w-8" />,
  truck: <Truck className="h-8 w-8" />,
};

const imageMap: { [key: string]: string } = {
  automotive: automotiveImg,
  "aerospace-defence": aerospaceImg,
  "power-industrial-automation": powerImg,
  components: componentsImg,
  rail: railImg,
};

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20),
  requirement: z.string().trim().min(10, "Please describe your requirement").max(1000),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  industry: Industry;
  product?: Product;
  isProductNotListed?: boolean;
  onClose: () => void;
}

const EnquiryForm = ({ industry, product, isProductNotListed, onClose }: EnquiryFormProps) => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      requirement: "",
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    try {
      await sendContactEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        requirement: data.requirement,
        industry: industry.name,
        product: isProductNotListed ? "Product Not Listed" : product?.name,
      });
      
      toast({
        title: "Enquiry Submitted!",
        description: "Our team will contact you within 24 hours.",
      });

      onClose();
    } catch (error: any) {
      console.error("Email Error:", error);
      const errorMessage = error?.message || "Please try again.";
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-card rounded-xl p-8 max-w-lg w-full shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
          {isProductNotListed ? "Custom Product Enquiry" : "Product Enquiry"}
        </h3>
        <p className="text-muted-foreground mb-6">
          <span className="font-semibold text-foreground">Industry:</span> {industry.name}
          {product && (
            <>
              <br />
              <span className="font-semibold text-foreground">Product:</span> {product.name}
            </>
          )}
          {isProductNotListed && (
            <>
              <br />
              <span className="text-accent font-semibold">Product not listed</span>
            </>
          )}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Your name"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                {...register("phone")}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="requirement">Requirement Details *</Label>
            <Textarea
              id="requirement"
              placeholder={isProductNotListed ? "Describe the product you're looking for..." : "Describe your specific requirements..."}
              rows={4}
              {...register("requirement")}
              className={errors.requirement ? "border-destructive" : ""}
            />
            {errors.requirement && <p className="text-destructive text-sm mt-1">{errors.requirement.message}</p>}
          </div>

          <div className="flex gap-4 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="default" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustryBySlug(slug || "");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductNotListed, setIsProductNotListed] = useState(false);

  if (!industry) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-4xl text-foreground mb-4">Industry Not Found</h1>
            <p className="text-muted-foreground mb-8">The industry you're looking for doesn't exist.</p>
            <Button asChild variant="default">
              <Link to="/industries">View All Industries</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={imageMap[industry.slug]}
              alt={industry.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-hero-overlay" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="font-medium">Back to Industries</span>
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center text-accent-foreground">
                  {iconMap[industry.icon]}
                </div>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
                  {industry.name}
                </h1>
              </div>

              <p className="text-primary-foreground/90 text-lg max-w-3xl leading-relaxed">
                {industry.fullDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Capability & PDF Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                  Our Capability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.capability}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg border border-border"
              >
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  Download Brochure
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get detailed information about our {industry.name.toLowerCase()} products and solutions.
                </p>
                {industry.pdfUrl ? (
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full"
                    asChild
                  >
                    <a href={industry.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="h-5 w-5 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                ) : (
                  <Button variant="default" size="lg" className="w-full" disabled>
                    <Download className="h-5 w-5 mr-2" />
                    PDF Coming Soon
                  </Button>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Products for {industry.name}
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore our range of quality products designed for the {industry.name.toLowerCase()} industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    size="default"
                    className="w-full hover:bg-accent hover:text-accent-foreground hover:border-accent mt-auto"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Send className="h-4 w-4" />
                    Enquire Now
                  </Button>
                </motion.div>
              ))}

              {/* Product Not Listed Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: industry.products.length * 0.1 }}
                className="bg-primary/5 rounded-xl p-6 shadow-lg border border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  Product Not Listed?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  Can't find what you're looking for? Tell us about your custom requirement and we'll help you source it.
                </p>
                <Button
                  variant="default"
                  size="default"
                  className="w-full bg-accent hover:bg-accent/90 mt-auto"
                  onClick={() => {
                    setSelectedProduct(null);
                    setIsProductNotListed(true);
                  }}
                >
                  <Send className="h-4 w-4" />
                  Custom Enquiry
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Enquiry Modal */}
      {(selectedProduct || isProductNotListed) && (
        <EnquiryForm
          industry={industry}
          product={selectedProduct || undefined}
          isProductNotListed={isProductNotListed}
          onClose={() => {
            setSelectedProduct(null);
            setIsProductNotListed(false);
          }}
        />
      )}
    </div>
  );
};

export default IndustryDetail;
