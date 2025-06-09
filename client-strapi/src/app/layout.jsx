
import './globals.css'
import { Footer } from "@/components/footer.jsx";
import { Navbar } from "@/components/navbar.jsx";
import { Carrito } from "@/components/carrito.jsx";
import { PizzaProvider } from "@/context/pizzaContext.jsx";

 export default function Layout({ children }) {

  return (
    <html lang="es">
      <body>
        <PizzaProvider>
          <div className="min-h-screen flex flex-col relative">
            <Navbar />
            {/* Aqui va el contenido */}
              <main className="flex-1 flex items-center justify-center bg-gray-100">
                {children}
              </main>
              <Carrito />
            {/* Aqui va el contenido */}
            <Footer />
          </div>
        </PizzaProvider>
      </body>
    </html>
  )
}
