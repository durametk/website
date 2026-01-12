"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ExternalLink } from "lucide-react";

interface LocationMapProps {
  address?: string;
  mapUrl?: string;
  googleMapsLink?: string;
}

export function LocationMap({ 
  address = "#39, Ejipura Main Road, Ejipura, Bangalore – 560047",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2772!2d77.6193!3d12.9526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c0d0a0b0a0%3A0x0!2sEjipura%2C%20Bengaluru%2C%20Karnataka%20560047!5e0!3m2!1sen!2sin!4v1234567890",
  googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Ejipura+Main+Road+Bangalore+560047"
}: LocationMapProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Compact Map Card */}
      <motion.div
        layout
        onClick={() => setIsExpanded(true)}
        className="relative cursor-pointer group overflow-hidden rounded-xl border border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Map Preview */}
        <div className="relative h-48 overflow-hidden">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: "none" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Preview"
            className="grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          
          {/* Expand Indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Click to expand
            </div>
          </div>
        </div>

        {/* Address Info */}
        <div className="p-4 bg-card">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading font-semibold text-foreground text-sm">Our Location</p>
              <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                {address}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Map Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />

            {/* Expanded Map Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-card border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">Our Location</h3>
                    <p className="text-muted-foreground text-sm hidden sm:block">{address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="hidden sm:inline">Open in Maps</span>
                  </a>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Full Map */}
              <div className="flex-1 relative">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Duramet Technologies Location"
                />
              </div>

              {/* Mobile Address */}
              <div className="sm:hidden px-4 py-3 bg-card border-t border-border">
                <p className="text-muted-foreground text-sm">{address}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
