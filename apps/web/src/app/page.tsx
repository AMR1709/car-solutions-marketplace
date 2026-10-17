export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-white border-b borde  r-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">Car Solutions</h1>

          <nav className="hidden gap-6 md:flex">
            <a href="#" className="hover:text-blue-600">
              Car Parts
            </a>

            <a href="#" className="hover:text-blue-600">
              Cars
            </a>

            <a href="#" className="hover:text-blue-600">
              Sell
            </a>
          </nav>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
            Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-bold md:text-5xl">
            Find the right parts for your car
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Buy and sell genuine and aftermarket car parts across Pakistan.
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Search bumpers, headlights, mirrors..."
              className="flex-1 rounded-lg bg-white px-5 py-4 text-gray-900 outline-none"
            />

            <button className="rounded-lg bg-blue-600 px-8 py-4 font-semibold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">Browse Categories</h2>

        <p className="mt-2 text-gray-600">
          Find parts for your vehicle quickly.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Bumpers</h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Headlights</h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Mirrors</h3>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Brakes</h3>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Parts</h2>

          <button className="font-semibold text-blue-600">View All</button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product 1 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="flex h-48 items-center justify-center bg-gray-200">
              Product Image
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500">Honda Civic</p>

              <h3 className="mt-1 text-lg font-semibold">
                Honda Civic Front Bumper
              </h3>

              <p className="mt-3 text-xl font-bold">Rs. 25,000</p>

              <p className="mt-2 text-sm text-gray-500">Lahore, Pakistan</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="flex h-48 items-center justify-center bg-gray-200">
              Product Image
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500">Toyota Corolla</p>

              <h3 className="mt-1 text-lg font-semibold">
                Corolla LED Headlight
              </h3>

              <p className="mt-3 text-xl font-bold">Rs. 18,500</p>

              <p className="mt-2 text-sm text-gray-500">Karachi, Pakistan</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="flex h-48 items-center justify-center bg-gray-200">
              Product Image
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500">Toyota Fortuner</p>

              <h3 className="mt-1 text-lg font-semibold">
                Fortuner Side Mirror
              </h3>

              <p className="mt-3 text-xl font-bold">Rs. 32,000</p>

              <p className="mt-2 text-sm text-gray-500">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Section */}
      <section className="bg-blue-600 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold">Have car parts to sell?</h2>

          <p className="mt-3 text-blue-100">
            Create your seller profile and reach buyers across Pakistan.
          </p>

          <button className="mt-6 rounded-lg bg-white px-7 py-3 font-semibold text-blue-600">
            Start Selling
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 px-6 py-8 text-gray-400">
        <div className="mx-auto max-w-7xl">
          <p>© 2026 Car Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
