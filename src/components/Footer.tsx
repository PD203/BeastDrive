import { IconBrandInstagram, IconBrandFacebook, IconBrandYoutube, IconMail } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-display tracking-wider">
              <img
      src="https://beastdrive.in/wp-content/uploads/2025/06/BeastDrive-Logo-web-3-04.png"
      alt="BeastDrive Logo"
      className="w-32 md:w-40 lg:w-48 h-auto object-contain"
    />
            </div>
            <p className="text-muted-foreground font-body text-sm">
              India's premier adventure tribe. Earn your grit.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <IconBrandInstagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <IconBrandFacebook size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <IconBrandYoutube size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <IconMail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Prizes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display text-xl mb-4 text-foreground">Support</h3>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Safety & Medical</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-xl mb-4 text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground font-body text-sm mb-4">
              Get event updates and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-display text-sm hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground font-body text-sm">
          <p>&copy; 2025 BeastDrive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
