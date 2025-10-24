export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-bold text-primary">O→E</div>
                <span className="text-xl font-semibold text-foreground">OreToEquity</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your Energy Transition Investment Scout. Turning raw potential into equity through data-driven insights
                and analysis.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#insights" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Latest Insights
                  </a>
                </li>
                <li>
                  <a href="#research" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Our Research
                  </a>
                </li>
                <li>
                  <a href="#portfolios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Portfolios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  YouTube
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              © {new Date().getFullYear()} OreToEquity. All rights reserved.
              <span className="block mt-2">
                This content is for informational purposes only and does not constitute financial advice. Always conduct
                your own research before making investment decisions.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
